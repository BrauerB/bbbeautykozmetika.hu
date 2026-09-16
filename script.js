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
        const cat = card.getAttribute('data-category') || '';
        const categories = cat.trim().split(/\s+/);
        if (filter === 'all' || categories.includes(filter)) {
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
              ${v.note ? `<span style="display: block; font-size: 0.78rem; color: var(--text-muted); margin-top: 3px; line-height: 1.4;">${v.note}</span>` : ''}
            </div>
            <a href="${v.salonicUrl || item.salonicUrl || 'https://bbbeautykozmetika.salonic.hu/showServices/?employeeId=33059&placeId=14908&serviceId=0'}" target="_blank" rel="noopener noreferrer" class="btn-table-book" style="padding: 6px 14px; font-size: 0.80rem; white-space: nowrap;">
              ${v.btnText || 'Foglalás →'}
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
      const hasVariantSteps = item.variants && item.variants.some(v => Array.isArray(v.steps) && v.steps.length > 0);
      if (hasVariantSteps) {
        stepsWrap.innerHTML = item.variants.filter(v => Array.isArray(v.steps) && v.steps.length > 0).map((v, vIdx) => `
          <div class="modal-variant-box" style="${vIdx > 0 ? 'margin-top: 16px;' : ''}">
            <div class="modal-variant-header">
              <div>
                <strong class="modal-variant-title">✦ ${v.name}</strong>
                <span class="modal-variant-meta">Időtartam: ${v.duration} · Ár: ${v.price}</span>
              </div>
              <a href="${v.salonicUrl || item.salonicUrl || 'https://bbbeautykozmetika.salonic.hu/showServices/?employeeId=33059&placeId=14908&serviceId=0'}" target="_blank" rel="noopener noreferrer" class="btn-table-book" style="padding: 5px 12px; font-size: 0.78rem;">
                ${v.btnText || 'Foglalás →'}
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
      } else if (Array.isArray(item.steps) && item.steps.length > 0) {
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
      } else {
        stepsWrap.innerHTML = '';
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
    const modalFooterActions = document.getElementById('modalFooterActions');
    if (priceVal) {
      if (item.variants && item.variants.length > 1) {
        priceVal.textContent = item.priceFormatted || `${item.variants[0].price}-tól`;
        if (modalFooterActions) {
          modalFooterActions.innerHTML = item.variants.map((v, idx) => `
            <a class="btn ${idx === 0 ? 'btn-outline' : 'btn-primary'} btn-sm" href="${v.salonicUrl || item.salonicUrl}" target="_blank" rel="noopener noreferrer" style="font-size: 0.82rem; padding: 8px 14px; white-space: nowrap;">
              ${v.name.replace(' arckezelés', '').replace(' kezelés', '').replace('hidrodermabráziós ', '')} (${v.price}) →
            </a>
          `).join('');
        } else if (modalBookBtn) {
          modalBookBtn.href = item.salonicUrl;
          modalBookBtn.textContent = 'Időpontot kérek →';
        }
      } else {
        priceVal.textContent = item.priceFormatted || `${item.price} Ft`;
        if (modalFooterActions) {
          modalFooterActions.innerHTML = `
            <a class="btn btn-primary" href="${item.salonicUrl || 'https://bbbeautykozmetika.salonic.hu/showServices/?employeeId=33059&placeId=14908&serviceId=0'}" target="_blank" rel="noopener noreferrer">
              Időpontot kérek →
            </a>
          `;
        } else if (modalBookBtn) {
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

  // 9. Google Ads & GA4 Konverzió és Eseménykövetés
  // Telefonhívás kattintás mérése (Google Ads és GA4)
  document.querySelectorAll('a[href^="tel:"]').forEach(telLink => {
    telLink.addEventListener('click', () => {
      const phoneNumber = telLink.getAttribute('href').replace('tel:', '');
      if (typeof gtag === 'function') {
        // GA4 telefonhívás esemény
        gtag('event', 'phone_call_click', {
          event_category: 'Contact',
          event_label: phoneNumber,
          phone_number: phoneNumber
        });
        // Google Ads konverzió
        gtag('event', 'conversion', {
          'send_to': 'AW-18446564317'
        });
      }
    });
  });

  // Salonic időpontfoglalás kattintás mérése
  document.querySelectorAll('a[href*="salonic.hu"]').forEach(bookLink => {
    bookLink.addEventListener('click', () => {
      const btnText = bookLink.textContent.trim() || 'Időpontfoglalás';
      const targetUrl = bookLink.getAttribute('href');
      if (typeof gtag === 'function') {
        // GA4 foglalás kezdeményezés esemény
        gtag('event', 'begin_checkout', {
          event_category: 'Salonic Booking',
          event_label: btnText,
          booking_url: targetUrl
        });
        gtag('event', 'salonic_booking_click', {
          event_category: 'Salonic Booking',
          event_label: btnText
        });
      }
    });
  });

  // =========================================================================
  // 10. Multi-Service Booking System (Több szolgáltatás együttes foglalása)
  // =========================================================================
  const KNOWN_SERVICE_DURATIONS = {
    "481673": 60, // Bright Formula
    "479899": 45, // Bőrdiagnosztika
    "480624": 40, // Frissítő arc-nyak-dekoltázs masszázs
    "479903": 90, // Tini mélytisztítás
    "479904": 120, // Teljes mélytisztítás
    "479905": 60, // Akné 60
    "479906": 90, // Akné 90
    "479907": 60, // Glow 60
    "479908": 90, // Glow 90
    "479909": 60, // Érzékeny 60
    "479910": 90, // Érzékeny 90
    "479911": 60, // Kombinált 60
    "479912": 90, // Kombinált 90
    "479913": 60, // Anti-aging 60
    "479914": 90, // Anti-aging 90
    "480621": 60, // OxyTech Glow
    "480622": 50, // Hydraglow
    "480623": 90, // Hydraglow prémium
    "479955": 60, // Carboxy
    "479956": 60, // Tű nélküli mezo
    "479957": 30, // Hamupipőke
    "479960": 60, // Pilla lifting
    "479961": 60, // Pilla lifting + festés
    "479962": 30, // Szemöldök styling
    "479963": 30, // Szemöldök styling + festés
    "479964": 45, // Szemöldök laminálás
    "479965": 60, // Szemöldök laminálás + festés
    "479966": 15, // Festések
    "479967": 15, // Szemöldök igazítás
    "479984": 10, // Bajusz
    "479985": 15, // Pajesz
    "479999": 15, // Szakáll
    "479986": 15, // Hónalj
    "479987": 20, // Kar könyékig
    "479988": 30, // Kar teljes
    "479989": 20, // Has
    "479990": 25, // Mellkas
    "479991": 20, // Hát felső
    "479992": 30, // Teljes hát
    "479993": 20, // Bikini vonal
    "479994": 25, // Comb
    "479995": 25, // Láb térdig
    "479996": 45, // Teljes láb
    "479997": 30, // Női intim
    "479998": 40  // Női intim + fenék
  };

  const selectedServices = new Map(); // id -> { id, name, price, duration, priceFormatted }
  const serviceMetadataStore = new Map(); // id -> { id, name, price, duration, priceFormatted }

  function extractServiceId(href) {
    if (!href) return null;
    const match = href.match(/serviceId=([0-9,]+)/);
    if (match && match[1] !== '0') return match[1];
    return null;
  }

  function parsePrice(priceStr) {
    if (!priceStr) return 0;
    return parseInt(priceStr.replace(/[^0-9]/g, ''), 10) || 0;
  }

  function parseDuration(durationStr, sId) {
    if (sId && KNOWN_SERVICE_DURATIONS[sId]) {
      return KNOWN_SERVICE_DURATIONS[sId];
    }
    if (!durationStr) return 30;
    const match = durationStr.match(/(\d+)/);
    return match ? parseInt(match[1], 10) : 30;
  }

  function updateMultiBookingUI() {
    // 1. Frissítjük az összes táblázatbeli 'Kiválasztom' gombot és a sorok kijelölését
    document.querySelectorAll('.btn-table-select').forEach(btn => {
      const sId = btn.getAttribute('data-id');
      const isSelected = sId && selectedServices.has(sId);
      if (isSelected) {
        btn.classList.add('selected');
        btn.innerHTML = '✓ Kiválasztva';
        btn.closest('tr')?.classList.add('row-selected');
      } else {
        btn.classList.remove('selected');
        btn.innerHTML = '＋ Kiválasztom';
        btn.closest('tr')?.classList.remove('row-selected');
      }
    });

    // 2. Számítások
    const totalCount = selectedServices.size;
    let totalPrice = 0;
    let totalDuration = 0;

    selectedServices.forEach(item => {
      totalPrice += item.price;
      totalDuration += item.duration;
    });

    const countEl = document.getElementById('multiBookingCount');
    const btnCountEl = document.getElementById('multiBookingBtnCount');
    const durationEl = document.getElementById('multiBookingDuration');
    const priceEl = document.getElementById('multiBookingPrice');
    const submitBtn = document.getElementById('multiBookingSubmitBtn');
    const bar = document.getElementById('multiBookingBar');

    if (countEl) {
      countEl.textContent = `${totalCount}`;
    }
    if (btnCountEl) {
      btnCountEl.textContent = `${totalCount}`;
    }

    if (durationEl) {
      let durText = '';
      if (totalDuration >= 60) {
        const hours = Math.floor(totalDuration / 60);
        const mins = totalDuration % 60;
        durText = mins > 0 ? `⏱ ${hours} óra ${mins} perc` : `⏱ ${hours} óra`;
      } else {
        durText = `⏱ ${totalDuration} perc`;
      }
      durationEl.textContent = durText;
    }

    if (priceEl) {
      const formattedPrice = new Intl.NumberFormat('hu-HU').format(totalPrice);
      priceEl.textContent = `Összesen: ${formattedPrice} Ft`;
    }

    // 3. Salonic Kombinált URL generálása
    if (submitBtn) {
      if (totalCount > 0) {
        const ids = Array.from(selectedServices.keys()).join(',');
        submitBtn.href = `https://bbbeautykozmetika.salonic.hu/selectDate/?employeeId=33059&placeId=14908&serviceId=${ids}&back=/selectEmployee/?placeId=14908&serviceId=${ids}`;
      } else {
        submitBtn.href = '#';
      }
    }

    // 4. Lebegő sáv és body padding kezelése
    if (bar) {
      if (totalCount > 0) {
        bar.classList.add('visible');
        document.body.classList.add('has-multi-selection');
      } else {
        bar.classList.remove('visible');
        document.body.classList.remove('has-multi-selection');
      }
    }
  }

  function toggleServiceSelection(sId) {
    if (!sId) return;
    if (selectedServices.has(sId)) {
      selectedServices.delete(sId);
    } else {
      const meta = serviceMetadataStore.get(sId);
      if (meta) {
        selectedServices.set(sId, meta);
      }
    }
    updateMultiBookingUI();
  }

  // Táblázat sorok automatikus felvértezése: a 'Foglalás' gomb helyett '＋ Kiválasztom' gomb kerül be
  const priceRows = document.querySelectorAll('table.price-list-table tr');
  priceRows.forEach(row => {
    const bookLink = row.querySelector('.btn-table-book');
    if (!bookLink) return;

    const href = bookLink.getAttribute('href');
    const sId = extractServiceId(href);
    if (!sId) return;

    const nameEl = row.querySelector('.price-item-name');
    const name = nameEl ? nameEl.textContent.trim() : 'Szolgáltatás';

    const priceEl = row.querySelector('.price-item-val');
    const priceFormatted = priceEl ? priceEl.textContent.trim() : '';
    const price = parsePrice(priceFormatted);

    const durEl = row.querySelector('.price-item-duration');
    const durationStr = durEl ? durEl.textContent.trim() : '';
    const duration = parseDuration(durationStr, sId);

    // Eltároljuk az adatokat a memóriában
    serviceMetadataStore.set(sId, {
      id: sId,
      name: name,
      price: price,
      duration: duration,
      priceFormatted: priceFormatted
    });

    // Létrehozzuk az elegáns '＋ Kiválasztom' gombot a régi Foglalás link helyére
    const selectBtn = document.createElement('button');
    selectBtn.type = 'button';
    selectBtn.className = 'btn-table-select';
    selectBtn.setAttribute('data-id', sId);
    selectBtn.setAttribute('title', 'Kezelés hozzáadása a foglalási csomaghoz');
    selectBtn.innerHTML = '＋ Kiválasztom';

    selectBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      toggleServiceSelection(sId);
    });

    // Lecseréljük a Foglalás linket
    const actionsCell = row.querySelector('.table-actions-cell');
    if (actionsCell) {
      bookLink.replaceWith(selectBtn);
    } else {
      const bookTd = row.querySelector('.price-item-book');
      if (bookTd) {
        bookTd.innerHTML = '';
        bookTd.appendChild(selectBtn);
      }
    }
  });

  // Lebegő sáv eseménykezelők
  const clearBtn = document.getElementById('multiBookingClearBtn');
  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      selectedServices.clear();
      updateMultiBookingUI();
    });
  }
});


