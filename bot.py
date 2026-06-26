import logging
from aiogram import Bot, Dispatcher, types
from aiogram.filters import Command
from aiogram.types import InlineKeyboardMarkup, InlineKeyboardButton

# Вставь сюда токен, который получил у BotFather в Telegram
API_TOKEN = '8491109024:AAF0zDrpNZX3ZNJtis3ZnWkmi0ciLzHW-8g'

# Настройка логирования
logging.basicConfig(level=logging.INFO)

# Инициализация бота и диспетчера
bot = Bot(token=API_TOKEN)
dp = Dispatcher()

# Функция создания меню с кнопками
def get_main_menu():
    keyboard = InlineKeyboardMarkup(inline_keyboard=[
        [InlineKeyboardButton(text="Меню кафе ☕", callback_data="menu")],
        [InlineKeyboardButton(text="Наш адрес 📍", callback_data="address")],
        [InlineKeyboardButton(text="Связаться с нами 📞", callback_data="contact")]
    ])
    return keyboard

# Команда /start
@dp.message(Command("start"))
async def cmd_start(message: types.Message):
    await message.answer("Привет! Добро пожаловать в бот нашего кафе. Выбери действие:", reply_markup=get_main_menu())

# Обработка нажатий на кнопки
@dp.callback_query()
async def callback_handler(callback: types.CallbackQuery):
    if callback.data == "menu":
        await callback.message.answer("Вот наше меню: [ссылка на фото или файл]")
    elif callback.data == "address":
        await callback.message.answer("Мы находимся по адресу: Ереван, Давташен, ул. ...) ")
    elif callback.data == "contact":
        await callback.message.answer("Связаться с администратором: @твои_контакты")
    await callback.answer()

# Запуск бота
if __name__ == '__main__':
    from aiogram import asyncio
    async def main():
        await dp.start_polling(bot)
    
    asyncio.run(main())
