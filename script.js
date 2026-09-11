/**
 * BBbeauty Kozmetika - Main JavaScript (V8.1)
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

    // Header info
    const badgeEl = document.getElementById('modalBadge');
    if (badgeEl) badgeEl.textContent = item.badge || item.categoryName || 'Kezelés';

    const titleEl = document.getElementById('modalTitle');
    if (titleEl) titleEl.textContent = item.name;

    const subEl = document.getElementById('modalSubtitle');
    if (subEl) {
      if (item.subtitle) {
        subEl.textContent = `${item.subtitle} · ⏱ ${item.duration}`;
      } else {
        subEl.textContent = `⏱ ${item.duration} · ${item.priceFormatted}`;
      }
    }

    // Tagline (pl. Hydraglow kiemelés)
    const taglineEl = document.getElementById('modalTagline');
    if (taglineEl) {
      if (item.tagline) {
        taglineEl.textContent = item.tagline;
        taglineEl.style.display = 'block';
      } else {
        taglineEl.style.display = 'none';
      }
    }

    // Változatok és Árak áttekintő blokk
    const priceWrap = document.getElementById('modalPricingWrap');
    const priceGrid = document.getElementById('modalPricingGrid');
    if (priceWrap && priceGrid) {
      if (item.variants && item.variants.length > 0) {
        priceGrid.innerHTML = item.variants.map(v => `
          <div class="modal-pricing-card">
            <div class="modal-pricing-card-info">
              <strong class="modal-pricing-variant-name">${v.name}</strong>
              <span class="modal-pricing-variant-meta">⏱ ${v.duration} · <span style="font-weight: 700; color: var(--primary);">${v.price}</span></span>
            </div>
            <a href="${v.salonicUrl || item.salonicUrl || 'https://bbbeautykozmetika.salonic.hu/showServices/?employeeId=33059&placeId=14908&serviceId=0'}" target="_blank" rel="noopener noreferrer" class="btn-table-book" style="padding: 6px 14px; font-size: 0.80rem;">
              Foglalás →
            </a>
          </div>
        `).join('');
        priceWrap.style.display = 'block';
      } else {
        priceWrap.style.display = 'none';
      }
    }

    // Leírás
    const descEl = document.getElementById('modalDesc');
    if (descEl) {
      descEl.textContent = item.fullDesc || item.shortDesc;
    }

    // Kinek ajánlott
    const audList = document.getElementById('modalAudienceList');
    if (audList) {
      if (Array.isArray(item.targetAudience)) {
        audList.innerHTML = item.targetAudience.map(aud => `<li>${aud}</li>`).join('');
      } else if (typeof item.targetAudience === 'string') {
        audList.innerHTML = `<li>${item.targetAudience}</li>`;
      }
    }

    // Kiemelt hatóanyagok
    const ingWrap = document.getElementById('modalIngredientsWrap');
    const ingList = document.getElementById('modalIngredientsList');
    if (ingWrap && ingList) {
      if (item.ingredients && item.ingredients.length > 0) {
        ingList.innerHTML = item.ingredients.map(ing => `
          <div class="modal-ingredient-item">
            <strong>${ing.name}</strong>
            <span>${ing.benefit}</span>
          </div>
        `).join('');
        ingWrap.style.display = 'block';
      } else {
        ingWrap.style.display = 'none';
      }
    }

    // Mit fogsz érezni?
    const feelWrap = document.getElementById('modalFeelingsWrap');
    const feelList = document.getElementById('modalFeelingsList');
    if (feelWrap && feelList) {
      if (item.feelings && item.feelings.length > 0) {
        feelList.innerHTML = item.feelings.map(f => `<li>${f}</li>`).join('');
        feelWrap.style.display = 'block';
      } else {
        feelWrap.style.display = 'none';
      }
    }

    // Lépések / Változatok
    const stepsWrap = document.getElementById('modalStepsContainer');
    if (stepsWrap) {
      if (item.variants && item.variants.length > 0) {
        stepsWrap.innerHTML = item.variants.map((v, vIdx) => `
          <div class="modal-variant-box" style="${vIdx > 0 ? 'margin-top: 16px;' : ''}">
            <div class="modal-variant-header">
              <div>
                <strong class="modal-variant-title">✦ ${v.name}</strong>
                <span class="modal-variant-meta">Időtartam: ${v.duration} · Ár: ${v.price}</span>
              </div>
              <a href="${v.salonicUrl || item.salonicUrl || 'https://bbbeautykozmetika.salonic.hu/showServices/?employeeId=33059&placeId=14908&serviceId=0'}" target="_blank" rel="noopener noreferrer" class="btn-table-book" style="padding: 5px 12px; font-size: 0.78rem;">
                Foglalás →
              </a>
            </div>
            <div class="modal-step-list">
              ${v.steps.map((st, sIdx) => `
                <div class="modal-step-row">
                  <span class="modal-step-num">${sIdx + 1}</span>
                  <span class="modal-step-text">${st}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('');
      } else if (item.steps) {
        stepsWrap.innerHTML = `
          <div class="modal-step-list">
            ${item.steps.map((st, sIdx) => `
              <div class="modal-step-row">
                <span class="modal-step-num">${sIdx + 1}</span>
                <span class="modal-step-text">${st}</span>
              </div>
            `).join('')}
          </div>
        `;
      }
    }

    // Otthoni ápolás
    const homeWrap = document.getElementById('modalHomeCareWrap');
    const homeEl = document.getElementById('modalHomeCare');
    if (homeWrap && homeEl) {
      if (item.homeCare) {
        homeEl.textContent = item.homeCare;
        homeWrap.style.display = 'block';
      } else {
        homeWrap.style.display = 'none';
      }
    }

    // Ár és Foglalás gomb
    const priceVal = document.getElementById('modalPriceVal');
    const modalBookBtn = document.getElementById('modalBookBtn');
    if (priceVal) {
      if (item.variants && item.variants.length > 1) {
        priceVal.textContent = item.variants.map(v => v.price).join(' / ');
        if (modalBookBtn) {
          modalBookBtn.href = 'https://bbbeautykozmetika.salonic.hu/showServices/?employeeId=33059&placeId=14908&serviceId=0';
          modalBookBtn.textContent = 'Összes szolgáltatás megnyitása →';
        }
      } else {
        priceVal.textContent = item.priceFormatted || `${item.price} Ft`;
        if (modalBookBtn) {
          modalBookBtn.href = item.salonicUrl || 'https://bbbeautykozmetika.salonic.hu/showServices/?employeeId=33059&placeId=14908&serviceId=0';
          modalBookBtn.textContent = 'Időpontot kérek';
        }
      }
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

  treatmentModal?.querySelectorAll('.modal-close-btn, .modal-close-btn-secondary').forEach(btn => {
    btn.addEventListener('click', closeTreatmentModal);
  });
  treatmentModal?.addEventListener('click', (e) => {
    if (e.target === treatmentModal) closeTreatmentModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && treatmentModal?.classList.contains('open')) {
      closeTreatmentModal();
    }
  });

  // 5. Before-After Image Slider & Tabs (10 mp-es automatikus léptetéssel)
  const caseTabs = document.querySelectorAll('.case-tab-btn');
  const caseSlides = document.querySelectorAll('.case-slide');
  let currentCaseIdx = 0;
  let caseAutoSlideTimer = null;

  function switchCaseSlide(idx) {
    currentCaseIdx = parseInt(idx, 10);
    caseTabs.forEach(t => t.classList.remove('active'));
    caseSlides.forEach(s => s.classList.remove('active'));

    const targetTab = document.querySelector(`.case-tab-btn[data-index="${currentCaseIdx}"]`);
    const targetSlide = document.querySelector(`.case-slide[data-index="${currentCaseIdx}"]`);
    targetTab?.classList.add('active');
    targetSlide?.classList.add('active');
  }

  function startCaseAutoSlide() {
    if (caseAutoSlideTimer) clearInterval(caseAutoSlideTimer);
    if (caseSlides.length > 1) {
      caseAutoSlideTimer = setInterval(() => {
        const nextIdx = (currentCaseIdx + 1) % caseSlides.length;
        switchCaseSlide(nextIdx);
      }, 10000); // 10 másodpercenként ugrik a következőre
    }
  }

  caseTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const idx = tab.getAttribute('data-index');
      if (idx !== null) {
        switchCaseSlide(idx);
        startCaseAutoSlide();
      }
    });
  });

  if (caseSlides.length > 0) {
    startCaseAutoSlide();
  }

  function initBeforeAfterSliders() {
    const containers = document.querySelectorAll('.ba-slider-container');
    containers.forEach(container => {
      const handle = container.querySelector('.ba-slider-handle');
      const beforeImg = container.querySelector('.ba-img.before');
      let isDragging = false;

      function updateSliderPosition(x) {
        const rect = container.getBoundingClientRect();
        let posX = x - rect.left;
        if (posX < 0) posX = 0;
        if (posX > rect.width) posX = rect.width;

        const percent = (posX / rect.width) * 100;
        if (handle) handle.style.left = `${percent}%`;
        if (beforeImg) beforeImg.style.clipPath = `polygon(0 0, ${percent}% 0, ${percent}% 100%, 0 100%)`;
      }

      container.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateSliderPosition(e.clientX);
      });

      window.addEventListener('mouseup', () => {
        isDragging = false;
      });

      window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        updateSliderPosition(e.clientX);
      });

      container.addEventListener('touchstart', (e) => {
        isDragging = true;
        updateSliderPosition(e.touches[0].clientX);
      }, { passive: true });

      window.addEventListener('touchend', () => {
        isDragging = false;
      });

      window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        updateSliderPosition(e.touches[0].clientX);
      }, { passive: true });
    });
  }
  initBeforeAfterSliders();

  // 6. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const header = item.querySelector('.faq-header');
    header?.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      faqItems.forEach(i => i.classList.remove('open'));
      if (!isOpen) {
        item.classList.add('open');
      }
    });
  });

  // 7. Toggle Full Catalog Grid
  const toggleCatalogBtn = document.getElementById('toggleCatalogBtn');
  const catalogWrap = document.getElementById('catalogWrap');

  toggleCatalogBtn?.addEventListener('click', () => {
    if (!catalogWrap) return;
    const isHidden = catalogWrap.style.display === 'none' || catalogWrap.style.display === '';
    if (isHidden) {
      catalogWrap.style.display = 'block';
      toggleCatalogBtn.textContent = 'Katalógus bezárása ↑';
    } else {
      catalogWrap.style.display = 'none';
      toggleCatalogBtn.textContent = 'Összes kezelés megtekintése ↓';
    }
  });

  // 8. Hero Image Slider (BBbeauty)
  const heroSlider = document.querySelector('.hero-slider-frame');
  if (heroSlider) {
    const slides = heroSlider.querySelectorAll('.hero-slide');
    const dots = heroSlider.querySelectorAll('.slider-dot');
    let currentSlide = 0;
    let slideInterval;

    function showSlide(index) {
      slides.forEach(slide => slide.classList.remove('active'));
      dots.forEach(dot => dot.classList.remove('active'));

      currentSlide = (index + slides.length) % slides.length;
      slides[currentSlide]?.classList.add('active');
      dots[currentSlide]?.classList.add('active');
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function startSlider() {
      slideInterval = setInterval(nextSlide, 4500);
    }

    function resetInterval() {
      clearInterval(slideInterval);
      startSlider();
    }

    dots.forEach((dot, idx) => {
      dot.addEventListener('click', () => {
        showSlide(idx);
        resetInterval();
      });
    });

    startSlider();
  }
});
