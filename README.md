# ✨ BB Beauty Kozmetika – Hivatalos Weboldal

[![Weboldal Állapot](https://img.shields.io/badge/Weboldal-Aktív-brightgreen.svg)]()
[![HTML5](https://img.shields.io/badge/HTML5-Modern-E34F26.svg?logo=html5&logoColor=white)]()
[![CSS3](https://img.shields.io/badge/CSS3-Vanilla%20Design%20System-1572B6.svg?logo=css3&logoColor=white)]()
[![JavaScript](https://img.shields.io/badge/JavaScript-Vanilla%20ES6+-F7DF1E.svg?logo=javascript&logoColor=black)]()
[![Assets](https://img.shields.io/badge/Képek-WebP%20Optimalizált-4285F4.svg)]()
[![Hosztolás](https://img.shields.io/badge/GitHub%20Pages-Ready-181717.svg?logo=github)]()

A **BB Beauty Kozmetika** (Barna Bettina kozmetikus) prémium, modern és reszponzív hivatalos weboldala. Személyre szabott arckezelések, tudatos bőrápolás és szakmai konzultáció Szigetszentmiklóson, a Miklós Plázában.

---

## 🌸 Weboldal Struktúra & Oldalak

A weboldal egy moduláris, tiszta architektúrájú többoldalas statikus webalkalmazás:

1. **Főoldal (`index.html`)**:
   - **Hero Szekció:** Kiemelt szlogen, dinamikus képváltó (10 másodperces lágy áttűnés) és közvetlen CTA gombok.
   - **Top 4 Kezelés:** Kiemelt fókuszú kezelési kártyák árakkal és időtartammal.
   - **Bővíthető Kezeléskatalógus:** Szűrhető kategóriák (Mélytisztítás, Hidratálás & Glow, Anti-aging, Problémás bőr, Érzékeny bőr, Gépi kezelések).
   - **Részletek Modal Ablak:** Részletes kezelési leírás, lépések, hatások és várható eredmények.
   - **Arcdiagnosztika Szekció:** Személyre szabott bőrterápiás szemlélet bemutatása.
   - **Interaktív Előtte-Utána Csúszka:** Valós kezelési eredmények 4 témakörben (Mélytisztítás, Anti-aging, Szempillalifting, Szemöldöklaminálás).
   - **GYIK (Gyakori Kérdések):** Interaktív lenyíló kérdés-válasz blokk a hatóanyagokról és protokollokról (Vagheggi, Clinicare).
   - **Kapcsolat & Térkép:** Cím, elérhetőségek, átlátható sávos nyitvatartási táblázat és beágyazott Google Térkép.

2. **Ismerj meg & Stúdió (`rolam.html`)**:
   - Barna Bettina kozmetikus szakmai bemutatkozása és filozófiája.
   - A szalon prémium Vagheggi és Clinicare hatóanyag-palettájának ismertetése.
   - Fotógaléria a szigetszentmiklósi stúdióról és a kezelőhelyiségről.

3. **Részletes Árlista (`arak.html`)**:
   - Teljes körű, átlátható árkatalógus kategóriákra bontva (Arckezelések, Kiegészítő ápolás, Masszázsok, Szempilla & Szemöldök, Gyantázás).

---

## 💎 Fő Technológiai Jellemzők

- **⚡ Villámgyors Betöltés:** Zéró külső keretrendszer-függőség (Pure Vanilla JS & CSS), azonnali DOM renderelés.
- **🖼️ WebP Képarchitektúra:** Minden kép modern, magas minőségű `.webp` formátumban érhető el, 58%-kal kisebb sávszélesség-fogyasztást biztosítva.
- **📱 100% Mobilbarát Reszponzivitás:** Dedikált mobilos navigációs fiók (drawer), érintésérzékeny előtte-utána csúszka és reszponzív rácselrendezés.
- **🎨 Prémium Színpaletta:** Kifinomult terrakotta, púderrózsaszín, meleg krém és letisztult aranybarna tónusok.
- **🔍 Keresőoptimalizálás (SEO):** Szemantikus HTML5 felépítés, egyedi meta leírások, OpenGraph címkék és strukturált adatok.

---

## 📁 Projekt Mappastruktúra

```text
bbbeautykozmetika.hu/
├── index.html               # Főoldal
├── rolam.html               # Ismerj meg & Stúdió bemutató oldal
├── arak.html                # Részletes árlista oldal
├── styles.css               # Teljes dizájnrendszer és komponens stílusok
├── script.js                # Mobil menü, slider, modal, szűrők, GYIK logika
├── treatments-data.js       # Kezelések adatbázisa (árak, leírások, képek)
├── .gitignore               # Git kizárások
├── README.md                # Projekt dokumentáció
└── images/                  # Optimalizált WebP médiafájlok
    ├── bbLogo.webp          # BB Beauty logó (sötét háttérre)
    ├── bbLogo-light.webp    # BB Beauty logó (világos háttérre)
    ├── hero-slide-*.webp    # Hero slider képek
    ├── szepitke-*.webp      # Kezelési és akciófotók
    ├── eredmeny-*.webp      # Előtte-utána képpárok
    └── studio/              # Stúdió és Vagheggi termékfotók
```

---

## 🛠️ Helyi Futtatás

Mivel a projekt tiszta statikus weboldal, bármilyen helyi HTTP szerverrel vagy közvetlenül böngészőben futtatható:

### Opció 1: VS Code Live Server
1. Nyisd meg a mappát VS Code-ban.
2. Kattints a jobb alsó sarokban a **Go Live** gombra.

### Opció 2: Python beépített szerver
```bash
python -m http.server 8000
```
Ezután nyisd meg a böngészőben: `http://localhost:8000`

---

## 🚀 Telepítés & Hosztolás (GitHub Pages)

1. A repó **Settings** -> **Pages** menüpontjában:
   - **Source:** `Deploy from a branch`
   - **Branch:** `main` / `/(root)`
2. **Egyedi Domain beállítása:**
   - Add meg az egyedi domaint (pl. `bbbeautykozmetika.hu`).
   - A domain DNS szolgáltatójánál állítsd be az `A` rekordokat a GitHub Pages IP címeire és a `CNAME` rekordot.
   - Pipáld be az **Enforce HTTPS** opciót.

---

## 📅 Salonic Időpontfoglaló Integráció

A weboldalon az időpontfoglaló gombok készen állnak a Salonic (salonic.hu) összekötésre:
- **Közvetlen link:** A gombok `href` értéke egyszerűen átirányítható a szalon Salonic profiljára: `https://salonic.hu/b/bb-beauty`.
- **Beágyazott widget:** A foglalási modalban elhelyezhető a Salonic beágyazó iframe / widget kódja.

---

## 📍 Kapcsolati Adatok

- **Szalon neve:** BB Beauty Kozmetika (Barna Bettina)
- **Cím:** 2310 Szigetszentmiklós, Miklós Pláza, Ifjúság útja 16., 1. emelet
- **Telefon:** +36 30 198 4220
- **Nyitvatartás:**
  - Hétfő – Péntek: 08:00 – 19:00 *(Bejelentkezés alapján)*
  - Szombat: 08:00 – 13:00 *(Bejelentkezés alapján)*
  - Vasárnap: Zárva
