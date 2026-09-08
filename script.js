/**
 * ROSIE AESTHETIC STUDIO - MAIN JAVASCRIPT (V7)
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header scroll effect
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Nav Drawer
  const hamburgerBtn = document.querySelector('.hamburger-btn');
  const drawer = document.querySelector('.mobile-nav-drawer');
  const drawerBackdrop = document.querySelector('.drawer-backdrop');
  const drawerCloseBtn = document.querySelector('.drawer-close-btn');
  const drawerLinks = document.querySelectorAll('.drawer-links a');

  function openDrawer() {
    drawer?.classList.add('open');
    drawerBackdrop?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer?.classList.remove('open');
    drawerBackdrop?.classList.remove('open');
    document.body.style.overflow = '';
  }

  hamburgerBtn?.addEventListener('click', openDrawer);
  drawerCloseBtn?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);
  drawerLinks.forEach(link => link.addEventListener('click', closeDrawer));

  // 3. Treatment Filter Tabs
  const filterTabs = document.querySelectorAll('.filter-tab-btn');
  const treatmentCards = document.querySelectorAll('.treatment-card-item');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');
      treatmentCards.forEach(card => {
        const cat = card.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          card.style.display = 'flex';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 4. Treatment Details Modal
  const treatmentModal = document.getElementById('treatmentDetailModal');
  const treatmentModalClose = treatmentModal?.querySelector('.modal-close-btn');

  function openTreatmentModal(id) {
    if (typeof TREATMENTS_DATA === 'undefined') return;
    const item = TREATMENTS_DATA.find(t => t.id === id);
    if (!item || !treatmentModal) return;

    document.getElementById('modalBadge').textContent = item.badge || item.subtitle;
    document.getElementById('modalTitle').textContent = item.name;
    document.getElementById('modalSubtitle').textContent = `${item.duration} · ${item.priceFormatted}`;
    document.getElementById('modalAudience').textContent = item.targetAudience;
    document.getElementById('modalExpectation').textContent = item.expectation;
    document.getElementById('modalPriceVal').textContent = item.priceFormatted;

    const stepsList = document.getElementById('modalStepsList');
    if (stepsList) {
      stepsList.innerHTML = item.steps.map((step, idx) => `
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px; font-size: 0.92rem;">
          <span style="width: 22px; height: 22px; border-radius: 50%; background: var(--primary-light); color: var(--primary-dark); display: inline-flex; align-items: center; justify-content: center; font-size: 0.75rem; font-weight: 700;">${idx + 1}</span>
          <span>${step}</span>
        </div>
      `).join('');
    }

    const bookBtn = document.getElementById('modalBookBtn');
    if (bookBtn) {
      bookBtn.setAttribute('data-service', item.name);
    }

    treatmentModal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeTreatmentModal() {
    treatmentModal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('.btn-treatment-detail').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn.getAttribute('data-id');
      if (id) openTreatmentModal(id);
    });
  });

  treatmentModalClose?.addEventListener('click', closeTreatmentModal);
  treatmentModal?.addEventListener('click', (e) => {
    if (e.target === treatmentModal) closeTreatmentModal();
  });

  // 5. Booking Modal
  const bookingModal = document.getElementById('bookingModal');
  const bookingModalClose = bookingModal?.querySelector('.modal-close-btn');
  const bookingServiceInput = document.getElementById('bookService');

  function openBookingModal(serviceName) {
    if (bookingServiceInput && serviceName) {
      bookingServiceInput.value = serviceName;
    }
    closeTreatmentModal();
    bookingModal?.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeBookingModal() {
    bookingModal?.classList.remove('open');
    document.body.style.overflow = '';
  }

  document.querySelectorAll('[data-open-modal]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service') || 'Személyre Szabott Konzultáció & Kezelés';
      openBookingModal(service);
    });
  });

  bookingModalClose?.addEventListener('click', closeBookingModal);
  bookingModal?.addEventListener('click', (e) => {
    if (e.target === bookingModal) closeBookingModal();
  });

  const bookingForm = document.getElementById('bookingForm');
  bookingForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('bookName')?.value;
    alert(`Köszönjük, ${name}! Időpontkérésedet rögzítettük. Hamarosan visszahívunk!`);
    closeBookingModal();
    bookingForm.reset();
  });

  // 6. Before / After Comparison Slider
  const sliders = document.querySelectorAll('.ba-slider-container');
  sliders.forEach(slider => {
    const beforeImg = slider.querySelector('.ba-img.before');
    const handle = slider.querySelector('.ba-slider-handle');
    let isDragging = false;

    function setPosition(x) {
      const rect = slider.getBoundingClientRect();
      let pos = (x - rect.left) / rect.width;
      if (pos < 0.05) pos = 0.05;
      if (pos > 0.95) pos = 0.95;
      const pct = pos * 100;
      if (beforeImg) beforeImg.style.width = `${pct}%`;
      if (handle) handle.style.left = `${pct}%`;
    }

    function onPointerDown(e) {
      isDragging = true;
      setPosition(e.clientX || (e.touches && e.touches[0].clientX));
    }

    function onPointerMove(e) {
      if (!isDragging) return;
      setPosition(e.clientX || (e.touches && e.touches[0].clientX));
    }

    function onPointerUp() {
      isDragging = false;
    }

    slider.addEventListener('mousedown', onPointerDown);
    slider.addEventListener('touchstart', onPointerDown, { passive: true });
    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchend', onPointerUp);
  });

  // 7. Case Study Tabs
  const caseTabs = document.querySelectorAll('.case-tab-btn');
  const caseSlides = document.querySelectorAll('.case-slide');

  caseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = tab.getAttribute('data-index');
      caseTabs.forEach(t => t.classList.remove('active'));
      caseSlides.forEach(s => s.classList.remove('active'));

      tab.classList.add('active');
      const targetSlide = document.querySelector(`.case-slide[data-index="${idx}"]`);
      if (targetSlide) targetSlide.classList.add('active');
    });
  });

  // 8. Interactive Skin Quiz
  const quizSteps = document.querySelectorAll('.quiz-step-slide');
  const quizIndicators = document.querySelectorAll('.quiz-step-indicator');
  let currentStep = 1;
  const quizAnswers = {};

  document.querySelectorAll('.quiz-opt-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const field = btn.getAttribute('data-field');
      const val = btn.getAttribute('data-val');
      const parentSlide = btn.closest('.quiz-step-slide');
      
      parentSlide.querySelectorAll('.quiz-opt-btn').forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      quizAnswers[field] = val;

      const nextBtn = parentSlide.querySelector('.quiz-next-btn');
      if (nextBtn) nextBtn.disabled = false;
    });
  });

  function showQuizStep(step) {
    currentStep = step;
    quizSteps.forEach(s => s.classList.remove('active'));
    quizIndicators.forEach(ind => {
      const indStep = parseInt(ind.getAttribute('data-step'));
      if (indStep <= currentStep) ind.classList.add('active');
      else ind.classList.remove('active');
    });

    const target = document.querySelector(`.quiz-step-slide[data-step="${step}"]`);
    if (target) target.classList.add('active');

    if (step === 4) {
      calculateQuizResult();
    }
  }

  function calculateQuizResult() {
    const concern = quizAnswers.concern || 'glow';
    let title = "Mélyhidratáló Glow kezelés";
    let desc = "Ha a bőröd gyakran feszül, fakónak érzed és természetes ragyogásra vágysz, a hialuronsavas mélyfeltöltés a legtökéletesebb választás.";
    let price = "18 500 Ft-tól";

    if (concern === 'acne') {
      title = "Mélytisztító arckezelés & Bőrmegújítás";
      desc = "Kíméletes felpuhítás és alapos pórustisztítás a mitesszeres, tisztátalan bőrkép megújítására.";
      price = "18 500 Ft-tól";
    } else if (concern === 'aging') {
      title = "Anti-aging feszesítő kezelés";
      desc = "Biomimetikus peptidekkel és lifting masszázzsal a tónusosabb, feszesebb és simább bőrfelszínért.";
      price = "22 500 Ft-tól";
    }

    const titleEl = document.getElementById('quizResTitle');
    const descEl = document.getElementById('quizResDesc');
    const metaEl = document.getElementById('quizResMeta');
    const recBookBtn = document.getElementById('quizRecBookBtn');

    if (titleEl) titleEl.textContent = title;
    if (descEl) descEl.textContent = desc;
    if (metaEl) metaEl.textContent = `Ár: ${price} • Személyre szabott hatóanyagokkal`;
    if (recBookBtn) recBookBtn.setAttribute('data-service', title);
  }

  document.querySelectorAll('.quiz-next-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showQuizStep(currentStep + 1);
    });
  });

  document.querySelectorAll('.quiz-prev-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showQuizStep(currentStep - 1);
    });
  });

  document.querySelector('.quiz-restart-btn')?.addEventListener('click', () => {
    document.querySelectorAll('.quiz-opt-btn').forEach(b => b.classList.remove('selected'));
    document.querySelectorAll('.quiz-next-btn').forEach(b => b.disabled = true);
    showQuizStep(1);
  });

  // 9. FAQ Accordion
  document.querySelectorAll('.faq-header').forEach(header => {
    header.addEventListener('click', () => {
      const item = header.closest('.faq-item');
      item?.classList.toggle('open');
    });
  });

  // 10. Toggle Full Treatments Catalog
  const toggleCatalogBtn = document.getElementById('toggleCatalogBtn');
  const catalogWrap = document.getElementById('catalogWrap');
  toggleCatalogBtn?.addEventListener('click', () => {
    if (catalogWrap) {
      if (catalogWrap.style.display === 'none' || !catalogWrap.style.display) {
        catalogWrap.style.display = 'block';
        toggleCatalogBtn.textContent = 'Összes kezelés elrejtése ↑';
        catalogWrap.scrollIntoView({ behavior: 'smooth' });
      } else {
        catalogWrap.style.display = 'none';
        toggleCatalogBtn.textContent = 'Összes kezelés megtekintése ↓';
      }
    }
  });

  // 11. Hero Image Slider (BB Beauty)
  const heroSlider = document.getElementById('heroSlider');
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll('.hero-slide');
    const dots = heroSlider.querySelectorAll('.hero-dot');
    let currentSlide = 0;
    let sliderTimer = null;

    function goToSlide(index) {
      if (slides.length === 0) return;
      currentSlide = (index + slides.length) % slides.length;
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentSlide);
      });
      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
      });
    }

    function startAutoSlide() {
      stopAutoSlide();
      sliderTimer = setInterval(() => {
        goToSlide(currentSlide + 1);
      }, 10000);
    }

    function stopAutoSlide() {
      if (sliderTimer) {
        clearInterval(sliderTimer);
        sliderTimer = null;
      }
    }

    dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        goToSlide(i);
        startAutoSlide();
      });
    });

    heroSlider.addEventListener('mouseenter', stopAutoSlide);
    heroSlider.addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();
  }
});
