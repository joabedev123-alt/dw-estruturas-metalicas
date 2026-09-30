/**
 * DW ESTRUTURAS METÁLICAS — MAIN JAVASCRIPT
 * Otimizado para Mobile & Desktop: Menu Drawer, Touch Lightbox, FAQ Accordion e Redirecionamento WhatsApp
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderAndScrollSpy();
  initMobileMenu();
  initFaqAccordion();
  initGalleryLightbox();
  initQuoteForms();
});

/* ==========================================================================
   1. CABEÇALHO & SCROLLSPY
   ========================================================================== */
function initHeaderAndScrollSpy() {
  const header = document.querySelector('.header');
  const navLinks = document.querySelectorAll('.nav-desktop .nav-link');
  const sections = document.querySelectorAll('section[id], body[id]');

  const handleScroll = () => {
    const scrollPos = window.scrollY;

    if (header) {
      if (scrollPos > 30) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    let currentId = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        currentId = section.getAttribute('id');
      }
    });

    if (currentId) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentId}`) {
          link.classList.add('active');
        }
      });
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();
}

/* ==========================================================================
   2. MENU MOBILE COM CONTROLE DE SCROLL E TOQUE
   ========================================================================== */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const closeBtn = document.querySelector('.mobile-close-btn');
  const drawer = document.querySelector('.mobile-drawer');
  const backdrop = document.querySelector('.mobile-backdrop');

  if (!toggleBtn || !drawer || !backdrop) return;

  let savedScrollY = 0;

  const openDrawer = () => {
    savedScrollY = window.scrollY;
    drawer.classList.add('active');
    backdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    toggleBtn.setAttribute('aria-expanded', 'true');
  };

  const closeDrawer = () => {
    drawer.classList.remove('active');
    backdrop.classList.remove('active');
    document.body.style.overflow = '';
    toggleBtn.setAttribute('aria-expanded', 'false');
  };

  toggleBtn.addEventListener('click', openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  backdrop.addEventListener('click', closeDrawer);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('active')) {
      closeDrawer();
    }
  });

  const drawerLinks = drawer.querySelectorAll('a');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });
}

/* ==========================================================================
   3. ACCORDION FAQ
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  if (!faqItems.length) return;

  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (!questionBtn || !answer) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');

      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          const otherAns = otherItem.querySelector('.faq-answer');
          if (otherAns) otherAns.style.maxHeight = null;
          const otherBtn = otherItem.querySelector('.faq-question');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
        }
      });

      if (isActive) {
        item.classList.remove('active');
        answer.style.maxHeight = null;
        questionBtn.setAttribute('aria-expanded', 'false');
      } else {
        item.classList.add('active');
        answer.style.maxHeight = answer.scrollHeight + 30 + 'px';
        questionBtn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

/* ==========================================================================
   4. GALERIA DE OBRAS REAIS & LIGHTBOX COM SUPORTE A SWIPE MOBILE
   ========================================================================== */
function initGalleryLightbox() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  if (filterBtns.length && galleryItems.length) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');

        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  let lightboxModal = document.querySelector('.lightbox-modal');
  if (!lightboxModal && galleryItems.length) {
    lightboxModal = document.createElement('div');
    lightboxModal.className = 'lightbox-modal';
    lightboxModal.setAttribute('role', 'dialog');
    lightboxModal.setAttribute('aria-modal', 'true');
    lightboxModal.setAttribute('aria-label', 'Visualização de foto em alta resolução');
    lightboxModal.innerHTML = `
      <div class="lightbox-content">
        <button class="lightbox-close-btn" aria-label="Fechar visualização"><i class="bi bi-x-lg"></i></button>
        <button class="lightbox-nav-btn lightbox-prev" aria-label="Foto anterior"><i class="bi bi-chevron-left"></i></button>
        <img class="lightbox-img" src="" alt="Obra de estrutura metálica em alta resolução" />
        <div class="lightbox-caption-box">
          <div class="lightbox-caption" style="font-weight: 600; font-size: 1.05rem;"></div>
          <div class="lightbox-sub" style="font-size: 0.82rem; color: #94a3b8; margin-top: 3px;">DW Estruturas Metálicas • Curitiba e Região</div>
        </div>
        <button class="lightbox-nav-btn lightbox-next" aria-label="Próxima foto"><i class="bi bi-chevron-right"></i></button>
      </div>
    `;
    document.body.appendChild(lightboxModal);
  }

  if (!lightboxModal) return;

  const modalImg = lightboxModal.querySelector('.lightbox-img');
  const modalCaption = lightboxModal.querySelector('.lightbox-caption');
  const closeBtn = lightboxModal.querySelector('.lightbox-close-btn');
  const prevBtn = lightboxModal.querySelector('.lightbox-prev');
  const nextBtn = lightboxModal.querySelector('.lightbox-next');

  let activeIndex = 0;
  let visibleItems = [];

  const updateVisibleItems = () => {
    visibleItems = Array.from(galleryItems).filter(item => item.style.display !== 'none');
  };

  const showImage = (index) => {
    updateVisibleItems();
    if (!visibleItems.length) return;

    if (index < 0) index = visibleItems.length - 1;
    if (index >= visibleItems.length) index = 0;

    activeIndex = index;
    const currentItem = visibleItems[activeIndex];
    const imgEl = currentItem.querySelector('img');
    const captionEl = currentItem.querySelector('.gallery-caption') || currentItem.querySelector('.gallery-category-badge');

    if (imgEl && modalImg) {
      modalImg.src = imgEl.getAttribute('data-full') || imgEl.src;
      modalImg.alt = imgEl.alt || 'Obra DW Estruturas Metálicas';
    }

    if (captionEl && modalCaption) {
      modalCaption.textContent = captionEl.textContent.trim();
    }

    lightboxModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    lightboxModal.classList.remove('active');
    document.body.style.overflow = '';
  };

  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      updateVisibleItems();
      const index = visibleItems.indexOf(item);
      if (index !== -1) showImage(index);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (prevBtn) prevBtn.addEventListener('click', () => showImage(activeIndex - 1));
  if (nextBtn) nextBtn.addEventListener('click', () => showImage(activeIndex + 1));

  lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (!lightboxModal.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(activeIndex - 1);
    if (e.key === 'ArrowRight') showImage(activeIndex + 1);
  });

  // Suporte a Swipe Touch no Mobile
  let touchStartX = 0;
  let touchEndX = 0;

  lightboxModal.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightboxModal.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  }, { passive: true });

  const handleSwipe = () => {
    const swipeThreshold = 50;
    if (touchEndX < touchStartX - swipeThreshold) {
      showImage(activeIndex + 1); // Deslizar para esquerda -> Próxima
    }
    if (touchEndX > touchStartX + swipeThreshold) {
      showImage(activeIndex - 1); // Deslizar para direita -> Anterior
    }
  };
}

/* ==========================================================================
   5. FORMULÁRIO DE ORÇAMENTO COM ENCAMINHAMENTO REAL AO WHATSAPP
   ========================================================================== */
function initQuoteForms() {
  const forms = document.querySelectorAll('.quote-form');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('[name="nome"]');
      const phoneInput = form.querySelector('[name="telefone"]');
      const cityInput = form.querySelector('[name="cidade"]');
      const serviceInput = form.querySelector('[name="servico"]');
      const messageInput = form.querySelector('[name="mensagem"]');
      const submitBtn = form.querySelector('button[type="submit"]');
      const statusBox = form.querySelector('.form-status') || createStatusBox(form);

      const nome = nameInput ? nameInput.value.trim() : '';
      const telefone = phoneInput ? phoneInput.value.trim() : '';
      const cidade = cityInput ? cityInput.value.trim() : 'Curitiba e Região';
      const servico = serviceInput ? serviceInput.value.trim() : 'Estrutura Metálica';
      const mensagem = messageInput ? messageInput.value.trim() : '';

      if (!nome || !telefone) {
        statusBox.className = 'form-status error';
        statusBox.textContent = 'Por favor, preencha pelo menos seu nome e WhatsApp para contato.';
        return;
      }

      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="bi bi-hourglass-split"></i> Preparando WhatsApp...';

      let text = `Olá! Vim pelo site da DW Estruturas Metálicas e gostaria de solicitar um orçamento.\n\n`;
      text += `*Nome:* ${nome}\n`;
      text += `*WhatsApp:* ${telefone}\n`;
      text += `*Cidade/Região:* ${cidade}\n`;
      text += `*Serviço de interesse:* ${servico}\n`;
      if (mensagem) {
        text += `*Detalhes do projeto:* ${mensagem}\n`;
      }

      const encodedText = encodeURIComponent(text);
      const whatsappUrl = `https://wa.me/5541998941829?text=${encodedText}`;

      setTimeout(() => {
        statusBox.className = 'form-status success';
        statusBox.innerHTML = `<strong>Pronto!</strong> Redirecionando para o WhatsApp da DW Estruturas Metálicas... Caso não abra automaticamente, <a href="${whatsappUrl}" target="_blank" style="text-decoration: underline; font-weight: bold; color: inherit;">clique aqui para continuar no WhatsApp</a>.`;

        submitBtn.disabled = false;
        submitBtn.innerHTML = '<i class="bi bi-whatsapp"></i> Continuar no WhatsApp';
        submitBtn.onclick = () => { window.open(whatsappUrl, '_blank'); };

        window.open(whatsappUrl, '_blank');
      }, 500);
    });
  });
}

function createStatusBox(form) {
  const box = document.createElement('div');
  box.className = 'form-status';
  form.appendChild(box);
  return box;
}
