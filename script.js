/* ============================================================
   HYUGA · Dsegh · Armenia
   Telegram Mini App
   ============================================================ */

/* ---------- 1. CONFIG ---------- */
const CONFIG = {
  phone: '+37498699601',
  phoneDisplay: '+374 98 699601',
  address: '6th St. 91, Dsegh 1718, Lori, Armenia',
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hyuga+Hotel+Dsegh+Armenia',
  // Латиница/кириллица — для ссылок. Используется один и тот же номер.
  whatsapp: 'https://wa.me/37498699601',
  telegram: 'https://t.me/+37498699601',
  viber: 'viber://chat?number=%2B37498699601',
  // Backend endpoint (можно оставить пустым — тогда работает fallback)
  apiBook: '/api/book',
  // Telegram-аккаунт админа для прямого чата (если известен @username)
  adminTelegram: '' // например: '@hyuga_admin'
};

/* ---------- 2. ROOMS ---------- */
/* 4 дома: 2 больших + 2 малых. При необходимости — меняйте тексты.
   Фото кладите в папку images/ с указанными именами файлов. */
const ROOMS = [
  {
    id: 'big-1',
    type: 'big',
    badge: { ru:'Большой дом', hy:'Մեծ տուն', en:'Big House' },
    name: { ru:'Большой дом №1', hy:'Մեծ տուն №1', en:'Big House #1' },
    guests: 6,
    price: 150,
    images: ['images/big-1-1.jpg','images/big-1-2.jpg','images/big-1-3.jpg'],
    desc: {
      ru:'Просторный дом с гостиной, кухней, спальней и панорамной террасой. Идеален для семьи или компании до 6 человек.',
      hy:'Ընդարձակ տուն՝ հյուրասենյակով, խոհանոցով, ննջասենյակով և համայնապատկերային տեռասով։ Հարմար է մինչև 6 հոգու համար։',
      en:'Spacious house with a living room, kitchen, bedroom and panoramic terrace. Ideal for families or groups up to 6 guests.'
    },
    amenities: {
      ru:['Терраса с видом на горы','Кухня','Кондиционер','Wi-Fi','Собственная ванная','Кофемашина'],
      hy:['Տեռաս՝ լեռների տեսարանով','Խոհանոց','Օդորակիչ','Wi-Fi','Սեփական լոգարան','Սուրճի մեքենա'],
      en:['Mountain-view terrace','Kitchen','Air conditioning','Wi-Fi','Private bathroom','Coffee machine']
    }
  },
  {
    id: 'big-2',
    type: 'big',
    badge: { ru:'Большой дом', hy:'Մեծ տուն', en:'Big House' },
    name: { ru:'Большой дом №2', hy:'Մեծ տուն №2', en:'Big House #2' },
    guests: 6,
    price: 150,
    images: ['images/big-2-1.jpg','images/big-2-2.jpg','images/big-2-3.jpg'],
    desc: {
      ru:'Второй большой дом отеля. Такая же планировка, отдельный вход, приватный дворик и вид на сад.',
      hy:'Հյուրանոցի երկրորդ մեծ տունը։ Նույն հատակագիծը, առանձին մուտք, մասնավոր բակ և այգու տեսարան։',
      en:'Second big house of the hotel. Same layout, private entrance, private patio and garden view.'
    },
    amenities: {
      ru:['Отдельный вход','Приватный дворик','Кухня','Кондиционер','Wi-Fi','Вид на сад'],
      hy:['Առանձին մուտք','Մասնավոր բակ','Խոհանոց','Օդորակիչ','Wi-Fi','Այգու տեսարան'],
      en:['Private entrance','Private patio','Kitchen','Air conditioning','Wi-Fi','Garden view']
    }
  },
  {
    id: 'small-1',
    type: 'small',
    badge: { ru:'Малый дом', hy:'Փոքր տուն', en:'Small House' },
    name: { ru:'Малый дом №1', hy:'Փոքր տուն №1', en:'Small House #1' },
    guests: 3,
    price: 120,
    images: ['images/small-1-1.jpg','images/small-1-2.jpg','images/small-1-3.jpg'],
    desc: {
      ru:'Уютный дом для пары или небольшой семьи. Компактный, с террасой и видом на горы.',
      hy:'Հարմարավետ տուն զույգի կամ փոքր ընտանիքի համար։ Կոմպակտ՝ տեռասով և լեռների տեսարանով։',
      en:'Cozy house for a couple or a small family. Compact, with a terrace and mountain view.'
    },
    amenities: {
      ru:['Терраса','Кондиционер','Wi-Fi','Собственная ванная','Вид на горы'],
      hy:['Տեռաս','Օդորակիչ','Wi-Fi','Սեփական լոգարան','Լեռների տեսարան'],
      en:['Terrace','Air conditioning','Wi-Fi','Private bathroom','Mountain view']
    }
  },
  {
    id: 'small-2',
    type: 'small',
    badge: { ru:'Малый дом', hy:'Փոքր տուն', en:'Small House' },
    name: { ru:'Малый дом №2', hy:'Փոքր տուն №2', en:'Small House #2' },
    guests: 3,
    price: 120,
    images: ['images/small-2-1.jpg','images/small-2-2.jpg','images/small-2-3.jpg'],
    desc: {
      ru:'Второй малый дом. Тихий, приватный, с собственным уголком сада и видом на горы.',
      hy:'Երկրորդ փոքր տունը։ Հանգիստ, մասնավոր՝ այգու անկյունով և լեռների տեսարանով։',
      en:'Second small house. Quiet and private, with its own garden corner and mountain view.'
    },
    amenities: {
      ru:['Приватный сад','Терраса','Кондиционер','Wi-Fi','Вид на горы'],
      hy:['Մասնավոր այգի','Տեռաս','Օդորակիչ','Wi-Fi','Լեռների տեսարան'],
      en:['Private garden','Terrace','Air conditioning','Wi-Fi','Mountain view']
    }
  }
];

/* ---------- 3. I18N ---------- */
const I18N = {
  ru: {
    'nav.home':'Главная','nav.rooms':'Номера','nav.booking':'Бронь','nav.contacts':'Контакты',
    'hero.eyebrow':'LORI · ARMENIA','hero.sub':'Уединённый бутик-отель среди гор Дсеха','hero.cta':'Посмотреть номера',
    'home.about.eyebrow':'ОБ ОТЕЛЕ','home.about.title':'Тишина, природа, комфорт',
    'home.about.text':'Hyuga — небольшой бутик-отель в селе Дсех, в самом сердце Лори. Четыре приватных дома среди зелени, с панорамным видом на горы.',
    'home.f1.title':'Приватность','home.f1.text':'Отдельные дома с собственным входом и террасой',
    'home.f2.title':'Природа','home.f2.text':'Вид на горы, сад, чистый воздух Лори',
    'home.f3.title':'Гастрономия','home.f3.text':'Ресторан с местной и итальянской кухней',
    'home.f4.title':'SPA & бассейн','home.f4.text':'Джакузи, сауна, бассейн, детская зона',
    'home.cta.title':'Забронировать дом','home.cta.text':'Оставьте заявку — администратор подтвердит бронь в мессенджере','home.cta.btn':'Оставить заявку',
    'rooms.eyebrow':'РАЗМЕЩЕНИЕ','rooms.title':'Наши дома','rooms.desc':'Два больших и два малых дома. Все — с отдельным входом, террасой и видом на горы.',
    'rooms.guests':'гостей','rooms.from':'от','rooms.perNight':'ночь','rooms.priceNote':'Цена зависит от дат и сезона','rooms.details':'Подробнее','rooms.book':'Забронировать',
    'book.eyebrow':'ЗАЯВКА','book.title':'Бронирование','book.desc':'Заполните форму — администратор свяжется с вами для подтверждения.',
    'book.room':'Дом','book.room.select':'— Выберите дом —','book.checkin':'Дата заезда','book.checkout':'Дата выезда',
    'book.adults':'Взрослые','book.children':'Дети','book.name':'Имя гостя','book.contact':'Телефон / Telegram',
    'book.notes':'Комментарий (необязательно)','book.submit':'Отправить заявку',
    'book.notice':'Заявка не является подтверждённой бронью. Администратор свяжется с вами для подтверждения и уточнения стоимости.',
    'book.msg.ok':'Заявка отправлена. Мы свяжемся с вами.',
    'book.msg.fallback':'Открываем мессенджер для отправки заявки…',
    'book.err.required':'Обязательное поле','book.err.email':'Некорректное значение',
    'book.err.dates':'Дата выезда должна быть позже даты заезда','book.err.contact':'Укажите телефон или @username (мин. 5 символов)',
    'contacts.eyebrow':'СВЯЗАТЬСЯ','contacts.title':'Контакты','contacts.addr':'Адрес','contacts.phone':'Телефон',
    'contacts.call':'Позвонить','contacts.map':'Открыть на карте',
    'tg.room':'Дом','tg.dates':'Даты','tg.guests':'Гости','tg.name':'Имя','tg.contact':'Контакт','tg.notes':'Комментарий'
  },
  hy: {
    'nav.home':'Գլխավոր','nav.rooms':'Սենյակներ','nav.booking':'Ամրագրում','nav.contacts':'Կոնտակտներ',
    'hero.eyebrow':'ԼՈՌԻ · ՀԱՅԱՍՏԱՆ','hero.sub':'Առանձնացված բուտիկ-հյուրանոց Դսեղի լեռներում','hero.cta':'Դիտել տները',
    'home.about.eyebrow':'ՀՅՈՒՐԱՆՈՑԻ ՄԱՍԻՆ','home.about.title':'Լռություն, բնություն, հարմարավետություն',
    'home.about.text':'Hyuga-ն փոքրիկ բուտիկ-հյուրանոց է Դսեղ գյուղում՝ Լոռու սրտում։ Չորս մասնավոր տուն՝ կանաչապատ միջավայրում և լեռների համայնապատկերով։',
    'home.f1.title':'Մասնավորություն','home.f1.text':'Առանձին տներ՝ սեփական մուտքով և տեռասով',
    'home.f2.title':'Բնություն','home.f2.text':'Լեռների տեսարան, այգի, Լոռու մաքուր օդ',
    'home.f3.title':'Գաստրոնոմիա','home.f3.text':'Ռեստորան՝ տեղական և իտալական խոհանոցով',
    'home.f4.title':'SPA և լողավազան','home.f4.text':'Ջակուզի, սաունա, լողավազան, մանկական գոտի',
    'home.cta.title':'Ամրագրել տուն','home.cta.text':'Թողեք հայտ — ադմինիստրատորը կհաստատի ամրագրումը մեսենջերում','home.cta.btn':'Թողնել հայտ',
    'rooms.eyebrow':'ՏԵՂԱՎՈՐՈՒՄ','rooms.title':'Մեր տները','rooms.desc':'Երկու մեծ և երկու փոքր տուն։ Բոլորը՝ առանձին մուտքով, տեռասով և լեռների տեսարանով։',
    'rooms.guests':'հյուր','rooms.from':'սկսած','rooms.perNight':'գիշեր','rooms.priceNote':'Գինը կախված է ամսաթվերից և սեզոնից','rooms.details':'Մանրամասն','rooms.book':'Ամրագրել',
    'book.eyebrow':'ՀԱՅՏ','book.title':'Ամրագրում','book.desc':'Լրացրեք ձևը՝ ադմինիստրատորը կկապվի ձեզ հետ հաստատելու համար։',
    'book.room':'Տուն','book.room.select':'— Ընտրեք տուն —','book.checkin':'Ժամանման ամսաթիվ','book.checkout':'Մեկնման ամսաթիվ',
    'book.adults':'Մեծահասակներ','book.children':'Երեխաներ','book.name':'Հյուրի անուն','book.contact':'Հեռախոս / Telegram',
    'book.notes':'Մեկնաբանություն (ըստ ցանկության)','book.submit':'Ուղարկել հայտ',
    'book.notice':'Հայտը հաստատված ամրագրում չէ։ Ադմինիստրատորը կկապվի ձեզ հետ՝ հաստատելու և գինը ճշտելու համար։',
    'book.msg.ok':'Հայտն ուղարկված է։ Մենք կկապվենք ձեզ հետ։',
    'book.msg.fallback':'Բացվում է մեսենջերը՝ հայտն ուղարկելու համար…',
    'book.err.required':'Պարտադիր դաշտ','book.err.email':'Սխալ արժեք',
    'book.err.dates':'Մեկնման ամսաթիվը պետք է ուշ լինի ժամանումից','book.err.contact':'Նշեք հեռախոս կամ @username (նվազ. 5 նշան)',
    'contacts.eyebrow':'ԿԱՊ','contacts.title':'Կոնտակտներ','contacts.addr':'Հասցե','contacts.phone':'Հեռախոս',
    'contacts.call':'Զանգահարել','contacts.map':'Բացել քարտեզում',
    'tg.room':'Տուն','tg.dates':'Ամսաթվեր','tg.guests':'Հյուրեր','tg.name':'Անուն','tg.contact':'Կոնտակտ','tg.notes':'Մեկնաբանություն'
  },
  en: {
    'nav.home':'Home','nav.rooms':'Rooms','nav.booking':'Booking','nav.contacts':'Contacts',
    'hero.eyebrow':'LORI · ARMENIA','hero.sub':'A secluded boutique hotel in the mountains of Dsegh','hero.cta':'View houses',
    'home.about.eyebrow':'ABOUT','home.about.title':'Silence, nature, comfort',
    'home.about.text':'Hyuga is a small boutique hotel in the village of Dsegh, in the very heart of Lori. Four private houses surrounded by greenery with panoramic mountain views.',
    'home.f1.title':'Privacy','home.f1.text':'Separate houses with private entrance and terrace',
    'home.f2.title':'Nature','home.f2.text':'Mountain views, garden, fresh Lori air',
    'home.f3.title':'Gastronomy','home.f3.text':'Restaurant with local and Italian cuisine',
    'home.f4.title':'SPA & pool','home.f4.text':'Jacuzzi, sauna, pool, kids area',
    'home.cta.title':'Book a house','home.cta.text':'Leave a request — the manager will confirm in messenger','home.cta.btn':'Request booking',
    'rooms.eyebrow':'ACCOMMODATION','rooms.title':'Our houses','rooms.desc':'Two big and two small houses. All with private entrance, terrace and mountain view.',
    'rooms.guests':'guests','rooms.from':'from','rooms.perNight':'night','rooms.priceNote':'Price depends on dates and season','rooms.details':'Details','rooms.book':'Book',
    'book.eyebrow':'REQUEST','book.title':'Booking','book.desc':'Fill in the form — the manager will contact you to confirm.',
    'book.room':'House','book.room.select':'— Choose a house —','book.checkin':'Check-in','book.checkout':'Check-out',
    'book.adults':'Adults','book.children':'Children','book.name':'Guest name','book.contact':'Phone / Telegram',
    'book.notes':'Notes (optional)','book.submit':'Send request',
    'book.notice':'This request is not a confirmed booking. The manager will contact you to confirm and clarify the price.',
    'book.msg.ok':'Request sent. We will contact you shortly.',
    'book.msg.fallback':'Opening messenger to send your request…',
    'book.err.required':'Required field','book.err.email':'Invalid value',
    'book.err.dates':'Check-out must be after check-in','book.err.contact':'Enter a phone or @username (min 5 chars)',
    'contacts.eyebrow':'GET IN TOUCH','contacts.title':'Contacts','contacts.addr':'Address','contacts.phone':'Phone',
    'contacts.call':'Call','contacts.map':'Open in maps',
    'tg.room':'House','tg.dates':'Dates','tg.guests':'Guests','tg.name':'Name','tg.contact':'Contact','tg.notes':'Notes'
  }
};

/* ---------- 4. STATE ---------- */
const state = {
  lang: 'ru',
  page: 'home',
  currentRoom: null,
  galleryIndex: 0
};

/* ---------- 5. HELPERS ---------- */
const $  = (s, el=document) => el.querySelector(s);
const $$ = (s, el=document) => Array.from(el.querySelectorAll(s));
const t  = (key) => (I18N[state.lang] && I18N[state.lang][key]) || key;
const pick = (obj) => obj && (obj[state.lang] || obj.ru || obj.en) || '';

function toast(msg, isErr=false){
  const el = $('#toast');
  el.textContent = msg;
  el.classList.toggle('err', isErr);
  el.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(()=>el.classList.remove('show'), 3200);
}

function fmtDate(iso){
  if(!iso) return '';
  const d = new Date(iso);
  if (isNaN(d)) return iso;
  return d.toLocaleDateString(state.lang === 'hy' ? 'hy-AM' : state.lang, { day:'2-digit', month:'short', year:'numeric' });
}

/* ---------- 6. I18N RENDER ---------- */
function applyI18n(){
  $$('[data-i18n]').forEach(el => {
    const k = el.getAttribute('data-i18n');
    const val = t(k);
    if (val) el.textContent = val;
  });
  $$('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === state.lang);
  });
  document.documentElement.lang = state.lang;
}

/* ---------- 7. NAVIGATION ---------- */
function goTo(page){
  state.page = page;
  $$('.page').forEach(p => p.classList.toggle('active', p.id === 'page-' + page));
  $$('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.goto === page));
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Топбар становится плотным, когда не главная
  $('#topbar').classList.toggle('solid', page !== 'home');
  // Если Telegram — обновим кнопку «назад»
  const tg = window.Telegram?.WebApp;
  if (tg && tg.BackButton){
    if (page === 'home') tg.BackButton.hide();
    else tg.BackButton.show();
  }
}

document.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-goto]');
  if (btn) goTo(btn.dataset.goto);
});

/* ---------- 8. RENDER ROOMS ---------- */
function roomCardHtml(room){
  const firstImg = room.images[0];
  const label = pick(room.badge) + ' · ' + pick(room.name);
  return `
    <article class="room-card" data-room="${room.id}">
      <div class="room-img ph" data-label="${label}">
        <img src="${firstImg}" alt="${pick(room.name)}" onerror="this.remove()">
        <div class="room-badge">${pick(room.badge)}</div>
      </div>
      <div class="room-body">
        <h3 class="room-name">${pick(room.name)}</h3>
        <div class="room-meta">${room.guests} ${t('rooms.guests')}</div>
        <p class="room-desc">${pick(room.desc)}</p>
        <div class="room-price">
          <div class="price-val">${t('rooms.from')} $${room.price} <small>/ ${t('rooms.perNight')}</small></div>
          <div class="price-note">${t('rooms.priceNote')}</div>
        </div>
        <button class="btn btn-gold btn-block" data-book="${room.id}">${t('rooms.book')}</button>
      </div>
    </article>
  `;
}

function renderRooms(){
  const wrap = $('#rooms-list');
  if (!wrap) return;
  wrap.innerHTML = ROOMS.map(roomCardHtml).join('');
}

/* Открытие карточки номера по клику на картинку/название */
document.addEventListener('click', (e) => {
  const book = e.target.closest('[data-book]');
  if (book){
    const id = book.dataset.book;
    state.currentRoom = id;
    $('#bk-room').value = id;
    goTo('booking');
    return;
  }
  const card = e.target.closest('.room-card');
  if (card && !e.target.closest('.btn')){
    openRoomModal(card.dataset.room);
  }
});

/* ---------- 9. ROOM MODAL ---------- */
function openRoomModal(id){
  const room = ROOMS.find(r => r.id === id);
  if (!room) return;
  const galleryHtml = room.images.map((src, i) => `
    <div class="ph" data-label="${pick(room.name)} · фото ${i+1}" data-gallery-img="${i}">
      <img src="${src}" alt="" onerror="this.remove()">
    </div>
  `).join('');
  const amenities = pick(room.amenities).map(a => `<span class="amen">${a}</span>`).join('');

  $('#modal-content').innerHTML = `
    <div class="modal-hero ph" data-label="${pick(room.name)}">
      <img src="${room.images[0]}" alt="" onerror="this.remove()">
    </div>
    <div class="modal-body">
      <h2 class="modal-title">${pick(room.name)}</h2>
      <div class="modal-meta">${room.guests} ${t('rooms.guests')}</div>
      <p class="modal-desc">${pick(room.desc)}</p>
      <div class="modal-price">
        <div class="price-val">${t('rooms.from')} $${room.price} <small>/ ${t('rooms.perNight')}</small></div>
        <div class="price-note">${t('rooms.priceNote')}</div>
      </div>
      <div class="modal-amenities">${amenities}</div>
      <div class="modal-gallery">${galleryHtml}</div>
      <button class="btn btn-gold btn-block" data-book="${room.id}">${t('rooms.book')}</button>
    </div>
  `;
  $('#modal-room').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeRoomModal(){
  $('#modal-room').classList.remove('open');
  document.body.style.overflow = '';
}

document.addEventListener('click', (e) => {
  if (e.target.closest('[data-close]')) closeRoomModal();
  if (e.target.id === 'modal-room') closeRoomModal();
});

/* Клик по миниатюре — открываем полноэкранную галерею */
document.addEventListener('click', (e) => {
  const g = e.target.closest('[data-gallery-img]');
  if (!g) return;
  const room = ROOMS.find(r => r.id === state.currentRoom) ||
               ROOMS.find(r => r.images[0] === g.querySelector('img')?.src.split('/').pop());
  const card = e.target.closest('.room-card');
  const target = card ? ROOMS.find(r => r.id === card.dataset.room) : null;
  const r = target || ROOMS[0];
  openGallery(r.id, parseInt(g.dataset.galleryImg || 0, 10));
});

/* ---------- 10. GALLERY ---------- */
function openGallery(roomId, index=0){
  const room = ROOMS.find(r => r.id === roomId);
  if (!room) return;
  state.galleryIndex = index;
  const track = $('#gallery-track');
  track.innerHTML = room.images.map((src, i) => `
    <div class="ph" data-label="${pick(room.name)} · фото ${i+1}">
      <img src="${src}" alt="" onerror="this.remove()">
    </div>
  `).join('');
  const dots = $('#gallery-dots');
  dots.innerHTML = room.images.map((_, i) => `<span class="${i===index?'on':''}"></span>`).join('');

  $('#gallery').classList.add('open');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    track.scrollLeft = index * track.clientWidth;
  });

  track.onscroll = () => {
    const i = Math.round(track.scrollLeft / track.clientWidth);
    $$('#gallery-dots span').forEach((d, k) => d.classList.toggle('on', k === i));
    state.galleryIndex = i;
  };
}

function closeGallery(){
  $('#gallery').classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('click', (e) => {
  if (e.target.closest('[data-gallery-close]') || e.target.id === 'gallery') closeGallery();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape'){ closeGallery(); closeRoomModal(); }
});

/* ---------- 11. FILL SELECT ---------- */
function fillRoomSelect(){
  const sel = $('#bk-room');
  if (!sel) return;
  // Оставляем первый option (placeholder) и добавляем дома
  sel.innerHTML = `<option value="" disabled selected>${t('book.room.select')}</option>` +
    ROOMS.map(r => `<option value="${r.id}">${pick(r.name)} · ${r.guests} ${t('rooms.guests')} · ${t('rooms.from')} $${r.price}</option>`).join('');
}

/* ---------- 12. BOOKING VALIDATION + SUBMIT ---------- */
function setErr(inputId, msg){
  const input = document.getElementById(inputId);
  const err = document.querySelector(`[data-err="${inputId}"]`);
  if (input) input.classList.toggle('invalid', !!msg);
  if (err) err.textContent = msg || '';
}

function validateBooking(data){
  let ok = true;
  setErr('bk-room',''); setErr('bk-checkin',''); setErr('bk-checkout',''); setErr('bk-adults',''); setErr('bk-name',''); setErr('bk-contact','');
  if (!data.room){ setErr('bk-room', t('book.err.required')); ok = false; }
  if (!data.checkin){ setErr('bk-checkin', t('book.err.required')); ok = false; }
  if (!data.checkout){ setErr('bk-checkout', t('book.err.required')); ok = false; }
  if (data.checkin && data.checkout){
    if (new Date(data.checkout) <= new Date(data.checkin)){
      setErr('bk-checkout', t('book.err.dates')); ok = false;
    }
  }
  if (!data.adults || data.adults < 1){ setErr('bk-adults', t('book.err.required')); ok = false; }
  if (!data.name || data.name.length < 2){ setErr('bk-name', t('book.err.required')); ok = false; }
  if (!data.contact || data.contact.replace(/\D/g,'').length < 5){
    setErr('bk-contact', t('book.err.contact')); ok = false;
  }
  return ok;
}

function buildMessage(data){
  const room = ROOMS.find(r => r.id === data.room);
  const lines = [
    '🏨 Hyuga · Dsegh — новая заявка',
    '',
    `${t('tg.room')}: ${room ? pick(room.name) : data.room}`,
    `${t('tg.dates')}: ${fmtDate(data.checkin)} → ${fmtDate(data.checkout)}`,
    `${t('tg.guests')}: ${data.adults} взр. / ${data.children || 0} дет.`,
    `${t('tg.name')}: ${data.name}`,
    `${t('tg.contact')}: ${data.contact}`
  ];
  if (data.notes) lines.push(`${t('tg.notes')}: ${data.notes}`);
  return lines.join('\n');
}

async function submitBooking(data){
  const btn = $('#bk-submit');
  btn.disabled = true;
  btn.textContent = '…';

  // 1) Пытаемся отправить на backend
  try {
    if (CONFIG.apiBook){
      const r = await fetch(CONFIG.apiBook, {
        method:'POST',
        headers:{ 'Content-Type':'application/json' },
        body: JSON.stringify({ ...data, lang: state.lang, message: buildMessage(data) })
      });
      if (r.ok){
        toast(t('book.msg.ok'));
        resetForm();
        return;
      }
    }
  } catch(err){
    console.warn('Backend недоступен, используем fallback', err);
  }

  // 2) Fallback — открыть мессенджер с готовым текстом
  toast(t('book.msg.fallback'));
  const msg = encodeURIComponent(buildMessage(data));
  const wa = `${CONFIG.whatsapp}?text=${msg}`;
  setTimeout(() => {
    window.open(wa, '_blank');
  }, 400);
  resetForm();
}

function resetForm(){
  $('#booking-form').reset();
  $('#bk-adults').value = 2;
  $('#bk-children').value = 0;
  const btn = $('#bk-submit');
  btn.disabled = false;
  applyI18n();
}

$('#booking-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    room: $('#bk-room').value,
    checkin: $('#bk-checkin').value,
    checkout: $('#bk-checkout').value,
    adults: parseInt($('#bk-adults').value, 10),
    children: parseInt($('#bk-children').value, 10) || 0,
    name: $('#bk-name').value.trim(),
    contact: $('#bk-contact').value.trim(),
    notes: $('#bk-notes').value.trim()
  };
  if (!validateBooking(data)) return;
  await submitBooking(data);
});

/* ---------- 13. MIN DATES ---------- */
function initDates(){
  const today = new Date();
  const iso = today.toISOString().split('T')[0];
  const ci = $('#bk-checkin');
  const co = $('#bk-checkout');
  if (!ci || !co) return;
  ci.min = iso;
  co.min = iso;
  ci.addEventListener('change', () => {
    co.min = ci.value || iso;
    if (co.value && co.value < ci.value) co.value = ci.value;
  });
}

/* ---------- 14. CONTACT LINKS ---------- */
function initContacts(){
  const wa = $('#lnk-wa'); if (wa) wa.href = CONFIG.whatsapp + '?text=' + encodeURIComponent('Здравствуйте! Хочу узнать о бронировании в Hyuga.');
  const tg = $('#lnk-tg');
  if (tg) tg.href = CONFIG.adminTelegram ? ('https://t.me/' + CONFIG.adminTelegram.replace(/^@/,'')) : CONFIG.telegram;
  const vb = $('#lnk-viber'); if (vb) vb.href = CONFIG.viber;
  const map = $('#lnk-map'); if (map) map.href = CONFIG.mapUrl;
}

/* ---------- 15. LANGUAGE ---------- */
function setLang(lang){
  state.lang = lang;
  try { localStorage.setItem('hyuga.lang', lang); } catch(_){}
  applyI18n();
  renderRooms();
  fillRoomSelect();
}

document.addEventListener('click', (e) => {
  const b = e.target.closest('.lang-btn');
  if (b) setLang(b.dataset.lang);
});

/* ---------- 16. TOPBAR SCROLL ---------- */
window.addEventListener('scroll', () => {
  if (state.page === 'home'){
    const scrolled = window.scrollY > 60;
    $('#topbar').classList.toggle('solid', scrolled);
  }
}, { passive:true });

/* ---------- 17. TELEGRAM WEBAPP ---------- */
function initTelegram(){
  const tg = window.Telegram?.WebApp;
  if (!tg) return;
  try {
    tg.ready();
    tg.expand();
    if (tg.setHeaderColor) tg.setHeaderColor('#12281e');
    if (tg.setBackgroundColor) tg.setBackgroundColor('#fbf8f2');
    if (tg.enableClosingConfirmation) tg.enableClosingConfirmation();
    // Back button
    if (tg.BackButton){
      tg.BackButton.onClick(() => {
        if ($('#gallery').classList.contains('open')) { closeGallery(); return; }
        if ($('#modal-room').classList.contains('open')) { closeRoomModal(); return; }
        if (state.page !== 'home') goTo('home');
      });
    }
    // Пользователь — предзаполнить имя
    const user = tg.initDataUnsafe?.user;
    if (user && $('#bk-name') && !$('#bk-name').value){
      $('#bk-name').value = [user.first_name, user.last_name].filter(Boolean).join(' ');
    }
  } catch(err){ console.warn('Telegram init error', err); }
}

/* ---------- 18. INIT ---------- */
function init(){
  // Язык: сохранённый / из Telegram / ru
  let saved = null;
  try { saved = localStorage.getItem('hyuga.lang'); } catch(_){}
  const tgLang = window.Telegram?.WebApp?.initDataUnsafe?.user?.language_code;
  const tgMap = { ru:'ru', hy:'hy', en:'en', am:'hy', hй:'hy' };
  state.lang = saved || tgMap[tgLang] || 'ru';

  applyI18n();
  renderRooms();
  fillRoomSelect();
  initDates();
  initContacts();
  initTelegram();
  goTo('home');

  // Спрятать splash
  setTimeout(() => $('#splash').classList.add('hide'), 900);
}

document.addEventListener('DOMContentLoaded', init);