const translations = {
  en: {
    nav: { home: 'Home', about: 'About', media: 'Media', contact: 'Contact' },
    hero: {
      eyebrow: 'Jazz Vocalist',
      title: 'Sofia',
      subtitle: 'Old-school jazz glamour for modern nights.',
      cta: 'Get in Touch',
      scroll: 'Scroll'
    },
    about: {
      kicker: 'About',
      heading: 'About Sofia',
      p1: 'Sofia is a jazz vocalist and songwriter known for her elegant stage presence, captivating voice, and timeless musical style. Rooted in jazz, soul, and R&B, she brings together old-school glamour, emotional depth, and real live performance — creating an atmosphere that feels both refined and alive.',
      p2: 'With years of stage experience, formal vocal training, and appearances at major festivals, concert venues, and cultural events, Sofia creates polished live performances for private events, sophisticated venues, and unforgettable evenings. Each performance is shaped with musicality, warmth, and a distinct sense of occasion.',
      tag1: 'Live Jazz Performance',
      tag2: 'Private Events',
      tag3: 'Sophisticated Venues'
    },
    media: {
      kicker: 'Media',
      heading: 'Media',
      intro: 'A curated selection of performance moments, stage highlights, and live atmosphere.',
      videoKicker: 'Video',
      videoHeading: 'Selected live performance clip',
      videoBody: 'A direct performance moment from the stage.',
      videoCta: 'Watch Video'
    },
    contact: {
      kicker: 'Contact',
      heading: 'Get in Touch',
      intro: 'For bookings, private events, and elegant evenings.',
      instagram: 'Instagram',
      email: 'Email',
      whatsapp: 'WhatsApp',
      instagramMeta: 'Open profile',
      emailMeta: 'Send an email',
      whatsappMeta: 'Start WhatsApp chat'
    }
  },
  ru: {
    nav: { home: 'Главная', about: 'О Софии', media: 'Медиа', contact: 'Контакты' },
    hero: {
      eyebrow: 'Джазовая вокалистка',
      title: 'Sofia',
      subtitle: 'Гламур старой джазовой школы для современных вечеров.',
      cta: 'Связаться',
      scroll: 'Листать'
    },
    about: {
      kicker: 'О Софии',
      heading: 'О Софии',
      p1: 'София — джазовая вокалистка и автор песен, известная своей элегантной сценической подачей, притягательным голосом и вневременным музыкальным стилем. Опираясь на джаз, соул и R&B, она соединяет гламур старой школы, эмоциональную глубину и настоящее живое исполнение, создавая атмосферу, которая ощущается одновременно изысканной и живой.',
      p2: 'Благодаря многолетнему сценическому опыту, профессиональной вокальной подготовке и выступлениям на крупных фестивалях, концертных площадках и культурных событиях, София создаёт выверенные живые выступления для частных мероприятий, утончённых площадок и незабываемых вечеров. Каждое выступление наполнено музыкальностью, теплом и тонким чувством момента.',
      tag1: 'Живой джазовый вокал',
      tag2: 'Частные мероприятия',
      tag3: 'Изысканные площадки'
    },
    media: {
      kicker: 'Медиа',
      heading: 'Медиа',
      intro: 'Подборка сценических моментов, ярких выступлений и живой атмосферы.',
      videoKicker: 'Видео',
      videoHeading: 'Избранный фрагмент живого выступления',
      videoBody: 'Прямой момент со сцены — без лишних слов.',
      videoCta: 'Смотреть видео'
    },
    contact: {
      kicker: 'Контакты',
      heading: 'Связаться',
      intro: 'Для букинга, частных мероприятий и красивых музыкальных вечеров.',
      instagram: 'Instagram',
      email: 'Email',
      whatsapp: 'WhatsApp',
      instagramMeta: 'Открыть профиль',
      emailMeta: 'Написать письмо',
      whatsappMeta: 'Открыть чат в WhatsApp'
    }
  },
  'zh-HK': {
    nav: { home: '首頁', about: '關於 Sofia', media: '媒體', contact: '聯絡' },
    hero: {
      eyebrow: '爵士女聲',
      title: 'Sofia',
      subtitle: '將舊派爵士魅力帶進現代夜色。',
      cta: '聯絡我',
      scroll: '向下'
    },
    about: {
      kicker: '關於 Sofia',
      heading: '關於 Sofia',
      p1: 'Sofia 是一位爵士女歌手兼創作人，以優雅台風、迷人聲線與歷久不衰的音樂氣質見稱。她的音樂根植於爵士、靈魂樂與 R&B，結合復古魅力、情感層次與真實現場演出，營造出既細緻又生動的氛圍。',
      p2: '憑藉多年舞台經驗、專業聲樂訓練，以及於大型音樂節、演出場地與文化活動中的歷練，Sofia 為私人活動、精緻場地與難忘夜晚帶來講究而完整的現場演出。每一次表演都帶著音樂感、溫度，以及對場合的拿捏。',
      tag1: '現場爵士演出',
      tag2: '私人活動',
      tag3: '高雅場地'
    },
    media: {
      kicker: '媒體',
      heading: '媒體',
      intro: '精選舞台時刻、演出亮點與現場氛圍。',
      videoKicker: '影片',
      videoHeading: '精選現場演出片段',
      videoBody: '一段直接來自舞台的現場時刻。',
      videoCta: '觀看影片'
    },
    contact: {
      kicker: '聯絡',
      heading: '聯絡我',
      intro: '適合活動邀約、私人演出與高雅夜晚的現場音樂。',
      instagram: 'Instagram',
      email: '電郵',
      whatsapp: 'WhatsApp',
      instagramMeta: '開啟個人頁面',
      emailMeta: '傳送電郵',
      whatsappMeta: '開啟 WhatsApp 對話'
    }
  }
};

const root = document.documentElement;
const hero = document.querySelector('.hero');
const menuToggle = document.querySelector('.menu-toggle');
const siteMenu = document.querySelector('.site-menu');
const langButtons = document.querySelectorAll('.lang-btn');
const lightbox = document.getElementById('lightbox');
const lightboxBody = document.getElementById('lightbox-body');
const lightboxClose = document.getElementById('lightbox-close');
const mediaTriggers = document.querySelectorAll('.media-trigger');
const revealNodes = document.querySelectorAll('.reveal');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function getValue(obj, path) {
  return path.split('.').reduce((acc, part) => acc?.[part], obj);
}

function applyLanguage(lang) {
  const data = translations[lang] || translations.en;
  document.documentElement.lang = lang === 'zh-HK' ? 'zh-Hant-HK' : lang;
  document.querySelectorAll('[data-i18n]').forEach((node) => {
    const value = getValue(data, node.dataset.i18n);
    if (value) node.textContent = value;
  });

  langButtons.forEach((button) => {
    const active = button.dataset.lang === lang;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });

  localStorage.setItem('website-sofia-lang', lang);
}

function updateCurtains() {
  if (!hero) return;
  const rect = hero.getBoundingClientRect();
  const windowHeight = window.innerHeight || 1;
  const progress = Math.min(Math.max((windowHeight - rect.top) / (windowHeight + rect.height * 0.2), 0), 1);
  root.style.setProperty('--curtain-open', progress.toFixed(3));
  document.querySelector('.site-header')?.classList.toggle('is-scrolled', window.scrollY > 24);
}

function toggleMenu(force) {
  const open = typeof force === 'boolean' ? force : !siteMenu.classList.contains('is-open');
  siteMenu.classList.toggle('is-open', open);
  menuToggle.classList.toggle('is-open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  siteMenu.setAttribute('aria-hidden', String(!open));
  document.body.classList.toggle('menu-open', open);
}

function closeLightbox() {
  if (!lightbox.open) return;
  const media = lightboxBody.querySelector('video');
  if (media) {
    media.pause();
    media.currentTime = 0;
  }
  lightbox.close();
  lightboxBody.innerHTML = '';
}

function openImage(src, alt) {
  lightboxBody.innerHTML = `<figure><img src="${src}" alt="${alt}"></figure>`;
  lightbox.showModal();
}

function openVideo(src, poster, credit) {
  lightboxBody.innerHTML = `
    <figure>
      <video controls playsinline preload="metadata" poster="${poster}">
        <source src="${src}" type="video/mp4">
      </video>
      <figcaption>${credit}</figcaption>
    </figure>
  `;
  lightbox.showModal();
}

function initRevealObserver() {
  if (!revealNodes.length) return;
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealNodes.forEach((node) => node.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
  );

  revealNodes.forEach((node) => observer.observe(node));
}

menuToggle?.addEventListener('click', () => toggleMenu());
siteMenu?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => toggleMenu(false));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    toggleMenu(false);
    closeLightbox();
  }
});

langButtons.forEach((button) => {
  button.addEventListener('click', () => applyLanguage(button.dataset.lang));
});

mediaTriggers.forEach((trigger) => {
  trigger.addEventListener('click', () => {
    const type = trigger.dataset.type;
    if (type === 'image') {
      openImage(trigger.dataset.src, trigger.dataset.alt || 'Media image');
      return;
    }

    if (type === 'video') {
      openVideo(trigger.dataset.src, trigger.dataset.poster || '', trigger.dataset.credit || '');
    }
  });
});

lightboxClose?.addEventListener('click', closeLightbox);
lightbox?.addEventListener('click', (event) => {
  const box = lightboxBody.getBoundingClientRect();
  const outside =
    event.clientX < box.left ||
    event.clientX > box.right ||
    event.clientY < box.top ||
    event.clientY > box.bottom;

  if (outside) closeLightbox();
});

window.addEventListener('scroll', updateCurtains, { passive: true });
window.addEventListener('resize', updateCurtains);

applyLanguage(localStorage.getItem('website-sofia-lang') || 'en');
initRevealObserver();
updateCurtains();
