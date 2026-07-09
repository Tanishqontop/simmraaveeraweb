gsap.registerPlugin(ScrollTrigger);

/* ---- Header scroll state ---- */
const header = document.getElementById('header');
ScrollTrigger.create({
  start: 'top -80',
  onUpdate: (self) => {
    header.classList.toggle('header--scrolled', self.scroll() > 80);
  },
});

/* ---- Mobile nav ---- */
const navToggle = document.getElementById('navToggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const open = nav.classList.toggle('nav--open');
  navToggle.classList.toggle('nav-toggle--open', open);
  navToggle.setAttribute('aria-expanded', open);
});

nav.querySelectorAll('.nav__link').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('nav--open');
    navToggle.classList.remove('nav-toggle--open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* ---- Hero entrance ---- */
const heroTl = gsap.timeline({ defaults: { ease: 'power3.out' } });

heroTl
  .from('.hero__line', {
    y: '110%',
    duration: 1.2,
    stagger: 0.15,
  })
  .from(
    '.hero__tagline',
    { opacity: 0, y: 20, duration: 0.8 },
    '-=0.5'
  )
  .from(
    '.hero__scroll-hint',
    { opacity: 0, duration: 0.6 },
    '-=0.3'
  )
  .from(
    '.logo, .nav__link',
    { opacity: 0, y: -15, duration: 0.6, stagger: 0.08 },
    '-=0.8'
  );

/* ---- Strategy line drawing ---- */
gsap.utils.toArray('.strategy__line-path').forEach((path) => {
  const length = path.getTotalLength();
  gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

  gsap.to(path, {
    strokeDashoffset: 0,
    duration: 1.5,
    ease: 'power2.inOut',
    scrollTrigger: {
      trigger: '.strategy',
      start: 'top 70%',
      toggleActions: 'play none none reverse',
    },
  });
});

gsap.from('[data-animate="brand-box"]', {
  scale: 0.8,
  opacity: 0,
  duration: 0.8,
  ease: 'back.out(1.4)',
  scrollTrigger: {
    trigger: '.strategy',
    start: 'top 75%',
  },
});

/* ---- Generic fade-up ---- */
gsap.utils.toArray('[data-animate="fade-up"]').forEach((el, i) => {
  gsap.from(el, {
    y: 40,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.05,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });
});

/* ---- Pillars stagger ---- */
gsap.from('[data-animate="pillar"]', {
  y: 50,
  opacity: 0,
  duration: 0.7,
  stagger: 0.2,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.strategy__pillars',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  },
});

/* ---- Founder split animation ---- */
gsap.from('[data-animate="fade-right"]', {
  x: -60,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.founder__layout',
    start: 'top 75%',
    toggleActions: 'play none none reverse',
  },
});

gsap.from('[data-animate="fade-left"]', {
  x: 60,
  opacity: 0,
  duration: 1,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.founder__layout',
    start: 'top 75%',
    toggleActions: 'play none none reverse',
  },
});

/* ---- Services stagger ---- */
gsap.from('[data-animate="service"]', {
  y: 40,
  opacity: 0,
  duration: 0.7,
  stagger: 0.12,
  ease: 'power2.out',
  scrollTrigger: {
    trigger: '.services__grid',
    start: 'top 80%',
    toggleActions: 'play none none reverse',
  },
});

/* ---- Parallax on hero ---- */
gsap.to('.hero__content', {
  y: -80,
  ease: 'none',
  scrollTrigger: {
    trigger: '.hero',
    start: 'top top',
    end: 'bottom top',
    scrub: true,
  },
});
