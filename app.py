"""
Hyuga Mini App — Flask backend.
Принимает заявки с фронтенда и пересылает их администратору в Telegram.
Токен бота и chat_id хранятся в переменных окружения.
"""
import os
import logging
from datetime import datetime
from flask import Flask, request, jsonify, send_from_directory
import requests

logging.basicConfig(level=logging.INFO)
log = logging.getLogger("hyuga")

app = Flask(__name__, static_folder=".", static_url_path="")

BOT_TOKEN   = os.environ.get("BOT_TOKEN", "").strip()
ADMIN_CHAT  = os.environ.get("ADMIN_CHAT_ID", "").strip()

# Простая защита от спама по IP (в памяти)
_rate = {}

def _allowed(ip: str) -> bool:
    now = datetime.now().timestamp()
    last = _rate.get(ip, 0)
    if now - last < 20:   # не чаще одного раза в 20 секунд с одного IP
        return False
    _rate[ip] = now
    return True

def _send_telegram(text: str) -> bool:
    if not BOT_TOKEN or not ADMIN_CHAT:
        log.warning("BOT_TOKEN или ADMIN_CHAT_ID не заданы — заявка не отправлена")
        return False
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    try:
        r = requests.post(url, json={
            "chat_id": ADMIN_CHAT,
            "text": text,
            "disable_web_page_preview": True,
        }, timeout=10)
        if r.status_code == 200 and r.json().get("ok"):
            return True
        log.error("Telegram API error: %s %s", r.status_code, r.text)
    except Exception as e:
        log.exception("Telegram send failed: %s", e)
    return False


# ---------- STATIC ----------
@app.route("/")
def index():
    return send_from_directory(".", "index.html")

@app.route("/<path:path>")
def static_files(path):
    return send_from_directory(".", path)


# ---------- API ----------
@app.route("/api/book", methods=["POST", "OPTIONS"])
def api_book():
    if request.method == "OPTIONS":
        return ("", 204)

    ip = request.headers.get("X-Forwarded-For", request.remote_addr or "").split(",")[0].strip()
    if not _allowed(ip):
        return jsonify({"ok": False, "error": "too_many_requests"}), 429

    data = request.get_json(silent=True) or {}

    required = ["room", "checkin", "checkout", "name", "contact"]
    for k in required:
        if not data.get(k):
            return jsonify({"ok": False, "error": f"missing_{k}"}), 400

    msg = data.get("message") or (
        f"🏨 Hyuga — новая заявка\n\n"
        f"Дом: {data.get('room')}\n"
        f"Даты: {data.get('checkin')} → {data.get('checkout')}\n"
        f"Гости: {data.get('adults')} взр. / {data.get('children', 0)} дет.\n"
        f"Имя: {data.get('name')}\n"
        f"Контакт: {data.get('contact')}\n"
        f"Комментарий: {data.get('notes', '')}"
    )

    sent = _send_telegram(msg)
    log.info("Booking request from %s — sent=%s", ip, sent)
    return jsonify({"ok": True, "sent": sent})


@app.route("/api/health")
def health():
    return jsonify({"ok": True, "bot": bool(BOT_TOKEN), "admin": bool(ADMIN_CHAT)})


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port, debug=False)