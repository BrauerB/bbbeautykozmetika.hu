/**
 * BBbeauty Kozmetika - Kezelések Teljes Adatbázisa
 * Könnyen módosítható, moduláris adatstruktúra
 */

const TREATMENTS_DATA = [
  {
    id: "oxytech-glow",
    name: "BBbeauty OxyTech Glow",
    subtitle: "CO₂ oxigenizálás, ultrahang & RF feszesítés",
    category: "special",
    categoryName: "Speciális & Gépi Kezelések",
    badge: "⭐ Újdonság",
    duration: "60 perc",
    price: 29000,
    priceFormatted: "29 000 Ft",
    priceDetails: "1 alkalom (60 perc): 29.000 Ft · 5 alkalmas kúra ajánlott",
    isTop4: true,
    topRank: 1,
    salonicUrl: "https://bbbeautykozmetika.salonic.hu/showServices/?employeeId=33059&placeId=14908&serviceId=0",
    image: "images/bbbeauty-oxytech-glow-arckezeles-szigetszentmiklos-1200.jpg",
    tagline: "Ragyogóbb, frissebb és hidratáltabb bőr egy komplex kezelésben: CO₂ kapszulás eljárás, ultrahangos hatóanyag-bevitel és rádiófrekvenciás feszesítés.",
    shortDesc: "Komplex non-invazív oxigénterápia: gyengéd CO₂ hámlasztás, ultrahangos szérumbevitel és RF bőrfeszesítés a ragyogó, feszes bőrért.",
    fullDesc: "Az OxyTech Glow egy modern, non-invazív arckezelés, amely a bőr felszínének megújítását, intenzív hidratálását és a hatóanyagok bejuttatását kombinálja. A kezelés központi eleme az OxyTech CO₂-kapszulás eljárás, amely gyengéden távolítja el az elhalt hámsejteket, miközben előkészíti a bőrt a hatóanyagok befogadására. A kezelést a bőr aktuális állapotához igazítva ultrahangos hatóanyag-bevitellel és rádiófrekvenciás feszesítéssel is kiegészítem, így egy igazán komplex bőrápoló kezelést kap a vendég.",
    targetAudience: [
      "Fakó, fáradt és élettelen bőr",
      "Vízhiányos vagy száraz érzetű bőr",
      "Egyenetlen bőrfelszín és tágabb pórusok esetén",
      "Feszességéből és rugalmasságából veszített bőr",
      "Finomabb ráncok, az öregedés első jelei ellen",
      "Pigmentfoltokkal vagy egyenetlen bőrtónussal rendelkező bőr",
      "Intenzív hidratálásra és látványos ragyogásfokozásra vágyóknak"
    ],
    ingredients: [
      { name: "OxyTech CO₂ Kapszulás Eljárás", benefit: "Gyengéd hámlasztás, természetes oxigenizáció és vérkeringés-fokozás" },
      { name: "Ultrahangos hatóanyag-bevitel", benefit: "Mélyrétegű hidratáló és revitalizáló szérumok bejuttatása" },
      { name: "Rádiófrekvenciás (RF) Feszesítés", benefit: "Kollagénstimuláció, arckontúrok emelése és bőrfeszesítés" },
      { name: "Hűsítő & Nyugtató Pakolás", benefit: "Azonnali bőrkomfort, gyulladáscsökkentés és intenzív hidratálás" }
    ],
    feelings: [
      "Kellemes pezsgő, oxigenizáló és frissítő érzet a kezelés alatt",
      "Azonnal simább, selymes tapintású bőrfelszín",
      "Mélyen feltöltött, hidratált és rugalmas bőrérzet",
      "Látványosan ragyogóbb, élettel teli 'glow' megjelenés"
    ],
    steps: [
      "1. Bőrdiagnosztika és előkészítés – Bőrállapot felmérése, gyengéd letisztítás és előkészítés",
      "2. OxyTech CO₂-kezelés – Kapszulás gyengéd hámlasztás, CO₂ mikrobuborékok képződése és revitalizáló masszázs",
      "3. Intenzív hatóanyag-kezelés – Személyre szabott szérum bevitele ultrahangos technológiával",
      "4. Rádiófrekvenciás feszesítés – RF-technológiás kollagénstimuláció és arckontúr-feszesítés",
      "5. Nyugtatás és hidratálás – Hűsítő pakolás, bőrtípusnak megfelelő befejező ápolás és SPF fényvédelem"
    ],
    homeCare: "Az OxyTech kezelés önálló kezelésként és kúraszerűen is alkalmazható. A kezelést 2 hetente javasolt megismételni, az 5 alkalmas kúra páratlan bőrápolást, revitalizálást, oxigenizálást és hidratálást eredményez."
  },

  {
    id: "bor-diagnosztika",
    name: "Bőrdiagnosztika & személyre szabott kezelés",
    subtitle: "Állapotfelmérés & személyre szabott kezelési terv",
    category: "diagnostics",
    categoryName: "Diagnosztika & Konzultáció",
    badge: "Konzultáció",
    duration: "45 perc",
    price: 10500,
    priceFormatted: "10 500 Ft",
    priceDetails: "45 perc: 10.500 Ft",
    isTop4: false,
    salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479899",
    image: "images/bbbeauty-barna-bettina-kozmetikus-szigetszentmiklos-1200.jpg",
    shortDesc: "Alapos bőrállapot-felmérés, célok és rutin átbeszélése, személyre szabott kezelési terv.",
    fullDesc: "Minden sikeres bőrmegújítás alapja a bőr pillanatnyi állapotának és igényeinek pontos feltérképezése. A konzultáció során átbeszéljük a jelenlegi bőrápolási szokásaidat, az életmódbeli tényezőket, és professzionális diagnosztikával meghatározzuk a legmegfelelőbb szalonkezelési tervet és otthoni rutint.",
    targetAudience: [
      "Első alkalommal érkező vendégeknek",
      "Bizonytalan bőrtípus vagy megváltozott bőrállapot esetén",
      "Hatékony, személyre szabott kezelési terv kialakításához",
      "Otthoni bőrápolási rutin optimalizálásához"
    ],
    ingredients: [
      { name: "Személyre szabott hatóanyagok", benefit: "A diagnosztika alapján kiválasztott célzott hatóanyag-komplexek" }
    ],
    feelings: [
      "Pontos megértés a bőröd valódi igényeiről",
      "Szakértő, személyre szabott útmutatás",
      "Magabiztos bőrápolási döntések"
    ],
    steps: [
      "Konzultáció és kórelőzmény felvétele",
      "Bőrtípus és aktuális bőrállapot részletes manuális elemzése",
      "Problémák és célok közös meghatározása",
      "Személyre szabott kezelési terv felállítása",
      "Otthoni hatóanyag- és termékajánlás"
    ],
    homeCare: "A diagnosztika alapján pontos útmutatót kapsz az otthoni bőrápolási rutinod helyes lépéseiről."
  },
  {
    id: "frissito-arcmasszazs",
    name: "Frissítő arc-nyak-dekoltázs masszázs",
    subtitle: "Vérkeringés-serkentő & mélyrelaxációs ápolás",
    category: "massage",
    categoryName: "Masszázs & Relaxáció",
    badge: "Relaxáció",
    duration: "40 perc",
    price: 7500,
    priceFormatted: "7 500 Ft",
    priceDetails: "40 perc: 7.500 Ft",
    isTop4: false,
    salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=480624",
    image: "images/bbbeauty-melyhidralato-glow-arckezeles-1200.jpg",
    shortDesc: "Pihentető, vérkeringést serkentő manuális masszázs tápláló növényi olajokkal.",
    fullDesc: "Pihentető, vérkeringést és nyirokkeringést serkentő manuális masszázs minőségi tápláló növényi olajokkal és hatóanyagokkal. Csökkenti a mimikai feszültséget, felfrissíti a fáradt arcbőrt, miközben mély testi-lelki ellazulást nyújt.",
    targetAudience: [
      "Fáradt, feszült, stresszes arcbőrre",
      "Vérkeringés és természetes arcszín javítására",
      "Gyors felfrissülésre és mély relaxációra",
      "Minden bőrtípus számára kényeztető ápolásként"
    ],
    ingredients: [
      { name: "Növényi olajesszenciák", benefit: "Tápláló, regeneráló, bőrbarrier erősítő" }
    ],
    feelings: [
      "Izomfeszültség azonnali oldódása",
      "Pihentető, feltöltődött érzés",
      "Üdébb, frissebb arcbőr"
    ],
    steps: [
      "Gyengéd letisztítás és bőr előkészítés",
      "Aromaterápiás relaxáció esszenciális olajokkal",
      "Speciális arc-, nyak- és dekoltázsmasszázs",
      "Befejező hidratáló és fényvédő ápolás"
    ],
    homeCare: "A masszázs után javasolt a bőséges vízfogyasztás a méregtelenítési folyamatok támogatására."
  },

  {
    id: "melytisztito-arckezeles",
    name: "Mélytisztító arckezelés",
    subtitle: "Pórustisztítás & bőrmegújítás",
    category: "cleansing",
    categoryName: "Mélytisztítás",
    badge: "Mélytisztítás",
    duration: "90–120 perc",
    price: 18500,
    priceFormatted: "18 500 Ft-tól",
    priceDetails: "Tini (90 perc): 18.500 Ft · Teljes (120 perc): 21.500 Ft",
    isTop4: true,
    topRank: 1,
    salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479904",
    image: "images/bbbeauty-melytisztito-arckezeles-szigetszentmiklos-1200.jpg",
    shortDesc: "Alapos, mégis kíméletes pórustisztítás a mitesszeres, tisztátalan bőrkép megújítására.",
    fullDesc: "A Mélytisztító Arckezelés egy alapos, pórustisztító kezelés, amelynek célja a bőr mélytisztítása, a komedók eltávolítása és a bőr egyensúlyának helyreállítása. Peelinggel és előkészítő lépésekkel készítjük fel a bőrt a manuális tisztításra, majd nyugtató, gyulladáscsökkentő és hidratáló hatóanyagokkal zárjuk a folyamatot a tisztább, üdébb bőrképért.",
    targetAudience: [
      "Mitesszeres, eltömődött pórusú bőr",
      "Zsíros, kombinált bőr",
      "Aknéra hajlamos bőr",
      "Tinédzserkori problémás bőr",
      "Felnőttkori aknés bőr",
      "Tisztító alapkezelésként minden problémás bőrtípusra"
    ],
    ingredients: [
      { name: "Manuka olaj", benefit: "Antibakteriális, gyulladáscsökkentő hatás" },
      { name: "Kapszulázott szalicilsav", benefit: "Pórustisztító, kíméletes hámlasztó" },
      { name: "Niacinamid", benefit: "Faggyúszabályzó, bőrnyugtató" },
      { name: "Kolloid kén", benefit: "Akné elleni, gyulladáscsökkentő" },
      { name: "Hialuronsav", benefit: "Mélyhidratáló, regeneráló" },
      { name: "Magnólia kivonat", benefit: "Bőrpír csökkentő, antioxidáns" }
    ],
    feelings: [
      "Tisztább, azonnal fellélegző bőrérzet",
      "Simább, egységesebb bőrfelszín",
      "Csökkent faggyúérzet és mattabb bőrkép",
      "Frissebb, üdébb megjelenés"
    ],
    variants: [
      {
        name: "Tini mélytisztító kezelés",
        duration: "90 perc",
        price: "18 500 Ft",
        salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479903",
        steps: [
          "Letisztítás – bőrbarát arctisztítás",
          "Peeling – enzimes / savas előkészítés",
          "Puhítás – a pórusok előkészítése tisztításhoz",
          "Manuális mélytisztítás – komedók és faggyú eltávolítása",
          "Fertőtlenítés / nyugtatás – szükség szerint VIO kezelés",
          "Hatóanyag bevitel – nyugtató, faggyúszabályzó ampulla",
          "Elektrokozmetikai kezelés – ultrahang / elektroporáció a bőr állapotától függően",
          "Maszk – nyugtató, gyulladáscsökkentő maszk",
          "Befejezés – hidratáló, nyugtató krém + SPF"
        ]
      },
      {
        name: "Felnőtt teljes mélytisztítás",
        duration: "120 perc",
        price: "21 500 Ft",
        salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479904",
        steps: [
          "Letisztítás – bőrbarát arctisztítás",
          "Peeling – enzimes / savas előkészítés",
          "Puhítás – a pórusok előkészítése tisztításhoz",
          "Manuális mélytisztítás – komedók és faggyú eltávolítása",
          "Fertőtlenítés / nyugtatás – szükség szerint VIO kezelés",
          "Hatóanyag bevitel – nyugtató, hidratáló és regeneráló ampulla",
          "Elektrokozmetikai kezelés – ultrahang / elektroporáció a bőr állapotától függően",
          "Relaxáló arc-nyak-dekoltázs masszázs – kb. 10 perc",
          "Maszk – nyugtató, regeneráló maszk",
          "Befejezés – hidratáló, nyugtató krém + SPF"
        ]
      }
    ],
    homeCare: "A kezelés eredményének hosszú távú megőrzéséhez segítünk az ideális otthoni rutin kialakításában. A szalonban használt professzionális termékek lakossági változatai megvásárolhatóak."
  },
  {
    id: "melyhidralato-glow",
    name: "Mélyhidratáló Glow kezelés",
    subtitle: "Hialuronsavas nedvességpótlás",
    category: "glow",
    categoryName: "Hidratálás & Glow",
    badge: "Hidratálás & Glow",
    duration: "90 perc",
    price: 21500,
    priceFormatted: "21 500 Ft",
    priceDetails: "90 perc: 21.500 Ft",
    isTop4: true,
    topRank: 2,
    salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479908",
    image: "images/bbbeauty-melyhidralato-glow-arckezeles-1200.jpg",
    shortDesc: "Többszintű hialuronsavas feltöltés a száraz, feszülő bőr természetes ragyogásáért.",
    fullDesc: "Intenzív mélyhidratáló arckezelés, amely kifejezetten a vízhiányos, feszülő, fakó bőr számára készült. Gyengéd peeling után magas koncentrációjú Vagheggi Rehydra hatóanyagokat juttatunk a bőrbe relaxáló masszázzsal és mélyen hidratáló maszkokkal.",
    targetAudience: [
      "Vízhiányos, száraz bőr",
      "Fakó, élettelen bőr",
      "Feszülő, kellemetlen bőrérzet",
      "Érzékeny, irritált bőr",
      "Minden bőrtípus számára hidratáló alapkezelésként"
    ],
    ingredients: [
      { name: "Hialuronsav", benefit: "Intenzív vízmegkötés, mélyrétegű feltöltő hatás" },
      { name: "Bioszacharidok", benefit: "Hosszan tartó hidratálás és nedvességmegtartás" },
      { name: "Cuateteco (mexikói árnika)", benefit: "Gyulladáscsökkentő, bőrnyugtató és regeneráló" },
      { name: "Növényi hidratáló komplexek", benefit: "Bőrbarrier megerősítése és vízvesztés gátlása" }
    ],
    feelings: [
      "Azonnali megkönnyebbülés és komfortérzet",
      "Kellemetlen feszülés és húzódás megszűnése",
      "Puhább, selymesebb, simább bőr",
      "Üde, élettel teli 'glow' megjelenés"
    ],
    steps: [
      "Letisztítás – Rehydra hidratáló lemosó tej",
      "Tonizálás – Rehydra hidratáló tonik",
      "Peeling – Rehydra enzimes peeling / arcradír",
      "Olaj esszencia aromaterápia",
      "Hatóanyag bevitel – Rehydra hialuronsav ampulla",
      "Elektrokozmetika – ultrahang / elektroporáció",
      "Relaxáló arc-, nyak- és dekoltázsmasszázs",
      "Maszk – Rehydra ásványi hidratáló maszk",
      "Befejezés – Rehydra 100H hidratáló arckrém + SPF"
    ],
    homeCare: "A szalonkezelés hatását a Vagheggi Rehydra otthoni hidratáló protokolljával tarthatod fenn hosszú hetekig."
  },
  {
    id: "anti-aging-feszesito",
    name: "Anti-aging feszesítő kezelés",
    subtitle: "Peptides lifting & sejtmegújítás",
    category: "antiaging",
    categoryName: "Anti-Aging & Feszesítés",
    badge: "Anti-Aging & Lifting",
    duration: "90 perc",
    price: 24500,
    priceFormatted: "24 500 Ft",
    priceDetails: "90 perc: 24.500 Ft",
    isTop4: true,
    topRank: 3,
    salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479914",
    image: "images/bbbeauty-anti-aging-feszesito-kezeles-1200.jpg",
    shortDesc: "Biomimetikus peptidekkel és lifting masszázzsal a tónusosabb, feszesebb arcképért.",
    fullDesc: "Komplex bőrfiatalító arckezelés aktív anti-age peptidekkel és Vagheggi Delay Infinity hatóanyagokkal. Támogatja a kollagéntermelést, kisimítja a finom mimikai ráncokat, miközben feszesíti az arckontúrokat és mély ellazulást nyújt.",
    targetAudience: [
      "Érett, feszességét vesztett bőr",
      "Mimikai és statikus ráncok esetén",
      "Fakó, fáradt bőrkép",
      "Megereszkedett arckontúr",
      "Vízhiányos, tónustalan bőr",
      "Megelőző anti-age kezelésként (30+)"
    ],
    ingredients: [
      { name: "Anti-age peptidek", benefit: "Feszesítő, ránccsökkentő, kollagéntermelést serkentő" },
      { name: "Sejtmegújító hatóanyagok", benefit: "Intenzív regenerálás és sejtmegújulás" },
      { name: "Antioxidáns komplexek", benefit: "Öregedéslassítás és környezeti védelem" },
      { name: "Hialuronsav", benefit: "Hidratáló, vízmegkötő, ráncfeltöltő" },
      { name: "Vitaminok (A, C, E)", benefit: "Bőrvédő és természetes ragyogást fokozó" }
    ],
    feelings: [
      "Mély relaxáció és izomfeszültség oldódása",
      "Simább, láthatóan tömörebb bőrfelszín",
      "Feszesebb, tónusosabb arckontúr",
      "Ragyogóbb, kipihent megjelenés"
    ],
    steps: [
      "Letisztítás – Delay Infinity lemosó",
      "Peeling – Delay Infinity enzimes / kémiai peeling",
      "Tonizálás – Delay Infinity tonik",
      "Hatóanyag bevitel – Delay Infinity ampulla / szérum",
      "Elektrokozmetika – ultrahang / elektroporáció",
      "Lifting arctorna és stimuláló masszázs",
      "Maszk – Delay Infinity feszesítő / regeneráló maszk",
      "Befejezés – Delay Infinity arckrém + SPF"
    ],
    homeCare: "Otthoni anti-aging ápolásként a Delay Infinity nappali és éjszakai készítményeit javasoljuk a lifting hatás megőrzéséhez."
  },
  {
    id: "hydraglow-arckezeles",
    name: "Hydraglow hidrodermabráziós arckezelés",
    subtitle: "Vortex hidrafacial mélytisztítás & hatóanyag-bevitel",
    category: "special",
    categoryName: "Gépi Kezelések",
    badge: "Top Újdonság",
    duration: "50–90 perc",
    price: 23000,
    priceFormatted: "23 000 Ft-tól",
    priceDetails: "Alap (50 perc): 23.000 Ft · Prémium (90 perc): 29.000 Ft",
    isTop4: true,
    topRank: 4,
    salonicUrl: "https://bbbeautykozmetika.salonic.hu/showServices/?employeeId=33059&placeId=14908&serviceId=0",
    image: "images/bbbeauty-hydraglow-hidrodermabrazio-kezeles-1200.jpg",
    tagline: "Maximális hatékonyság: A Hydraglow hydrafacial arckezelések azonnali puha és selymes tapintású bőrt eredményeznek.",
    shortDesc: "Vákuumos Vortex folyadéksugaras pórustisztítás, savas hámlasztás és hatóanyag-bevitel.",
    fullDesc: "A Hydraglow kezelés nyáron is végezhető, érzékeny bőrűeknek is tökéletes és segít a rosacea tüneteinek enyhítésében. Kellemetlenség és fájdalom nélkül tisztítja ki a pórusokat speciális vákuumos Vortex technológiával, halványítja a pigmentfoltokat, és azonnali, rendkívül selymes bőrképet eredményez.",
    targetAudience: [
      "Azonnal látható eredményre vágyóknak: simább, tisztább, ragyogóbb bőr",
      "Minden bőrtípus és minden korosztály számára",
      "Bármelyik évszakban, akár nyáron is biztonsággal végezhető",
      "Fájdalommentes arctisztítást keresőknek",
      "Tág pórusok, mitesszerek, egyenetlen bőrfelszín esetén",
      "Pigmentfoltok halványítására és anti-aging megelőzésre"
    ],
    ingredients: [
      { name: "Tejsavas és szalicilsavas Vortex oldat", benefit: "Kíméletes mélytisztítás és elhalt hámsejtek feloldása" },
      { name: "Koncentrált vitaminok & antioxidánsok", benefit: "Mélyrétegű táplálás és bőrvédelem" },
      { name: "Hialuronsavas hatóanyag-bevitel", benefit: "Intenzív feltöltődés és üde ragyogás" },
      { name: "Személyre szabott elektroporációs szérumok", benefit: "Célzott bőrregeneráció és feszesítés" }
    ],
    feelings: [
      "Kellemes, hűsítő, frissítő vákuumos kezelésérzet",
      "Azonnal puha, selymes tapintású arcbőr",
      "Tiszta, fellélegzett pórusok pirosság nélkül",
      "Látványos 'glass skin' ragyogás azonnali visszatéréssel a hétköznapokba"
    ],
    variants: [
      {
        name: "Hydraglow Alapkezelés",
        duration: "50 perc",
        price: "23 000 Ft",
        salonicUrl: "https://bbbeautykozmetika.salonic.hu/showServices/?employeeId=33059&placeId=14908&serviceId=0",
        steps: [
          "1. Bőrtisztítás Vagheggi lemosó termékekkel + Vortex vákuumos tejsavas mélytisztítás",
          "2. Vákuum alatti kíméletes kémiai savas hámlasztás",
          "3. Hatóanyag-bejuttatás vákuum alatt (vitaminok, antioxidánsok, hialuron)",
          "4. Személyre szabott szérumkezelés elektroporációval vagy ultrahanggal",
          "5. Hidratáló, nyugtató arcmaszk",
          "6. Befejező hidratáló ápolás és fényvédelem SPF-fel"
        ]
      },
      {
        name: "Hydraglow Prémium",
        duration: "90 perc",
        price: "29 000 Ft",
        salonicUrl: "https://bbbeautykozmetika.salonic.hu/showServices/?employeeId=33059&placeId=14908&serviceId=0",
        steps: [
          "1. Bőrtisztítás professzionális lemosóval + Vortex vákuumos tejsavas mélytisztítás",
          "2. Vákuum alatti kémiai savas hámlasztás",
          "3. Vákuum alatti vitamin- és antioxidáns hatóanyag-bevitel",
          "4. RF (Rádiófrekvenciás) bőrfeszesítés és kollagénstimuláció",
          "5. Személyre szabott szérumbevitel elektroporációval / ultrahanggal",
          "6. Intenzív hidratáló arcmaszk",
          "7. Hidegkalapácsos lezárás (hűsítő, pórusfinomító zárás)",
          "8. Befejező ápolás & fényvédelem SPF-fel"
        ]
      }
    ],
    homeCare: "Bőrprobléma (pigmentfolt, akné, tág pórus) esetén 4–6 alkalmas kúra ajánlott 2–3 hetes időközökkel. Gyors bőrmegújításra 3 alkalom, szinten tartásra havi 1 kezelés ideális."
  },
  {
    id: "akne-helyreallito",
    name: "Akné helyreállító kezelés",
    subtitle: "Faggyúszabályozás & gyulladáscsökkentés",
    category: "problemas",
    categoryName: "Problémás Bőr",
    badge: "Kiegyensúlyozás",
    duration: "90 perc",
    price: 21500,
    priceFormatted: "21 500 Ft",
    priceDetails: "90 perc: 21.500 Ft",
    isTop4: false,
    salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479906",
    image: "images/bbbeauty-problemas-bor-akne-kezeles-1200.jpg",
    shortDesc: "Célzott gyulladáscsökkentő és faggyúszabályozó ápolás aknés, mitesszeres bőrre.",
    fullDesc: "Az Akné helyreállító kezelés egy kiegyensúlyozó, faggyúszabályzó arckezelés zsíros, kombinált és gyulladásra hajlamos bőrre. Alapos tisztítással, enzimes peelinggel és célzott hatóanyagokkal segítjük a faggyútermelés harmonizálását és a bőrkép megnyugtatását.",
    targetAudience: [
      "Zsíros vagy kombinált bőr",
      "Aknés, gyulladt, problémás bőr",
      "Tág pórusok és fénylő arcbőr",
      "Mitesszeres bőrkép"
    ],
    ingredients: [
      { name: "Mélytisztító komplex (Manuka, fekete bors, magnólia)", benefit: "Antibakteriális, gyulladáscsökkentő hatás" },
      { name: "Kapszulázott szalicilsav", benefit: "Hámlasztó, pórustisztító, bőrmegújító" },
      { name: "Kolloid kén", benefit: "Gyulladáscsökkentő, aknéellenes" },
      { name: "EPS exopoliszacharid", benefit: "Mattító, felesleges faggyút felszívó" },
      { name: "Niacinamid", benefit: "Nyugtató, faggyúharmonizáló" },
      { name: "Hialuronsav", benefit: "Hidratáló, védőréteg-képző" }
    ],
    feelings: [
      "Tisztább, frissebb bőrérzet",
      "Mattabb, nem fénylő bőrfelszín",
      "Csökkent pirosság és irritáció",
      "Megnyugodott, kiegyensúlyozott bőr"
    ],
    steps: [
      "Letisztítás – Emozioni lemosó krém",
      "Peeling – Enzimes hámlasztó KIT",
      "Pórustisztítás / fertőtlenítés",
      "Maszk – Balance szivacs maszk",
      "Masszázs",
      "Hatóanyag bevitel – Balance szérum",
      "Elektrokozmetika – ultrahang / elektroporáció",
      "Befejezés – Balance normalizáló krém + SPF"
    ],
    homeCare: "A Vagheggi Balance otthoni termékcsalád segít a faggyútermelés hosszú távú kontrollálásában."
  },
  {
    id: "erzekeny-bor-nyugtato",
    name: "Érzékeny bőr nyugtató kezelés",
    subtitle: "Szenzitív barrier-erősítő rituálé",
    category: "sensitive",
    categoryName: "Érzékeny Bőr",
    badge: "Bőrbarrier",
    duration: "90 perc",
    price: 23500,
    priceFormatted: "23 500 Ft",
    priceDetails: "90 perc: 23.500 Ft",
    isTop4: false,
    salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479910",
    image: "images/bbbeauty-erzekeny-bor-nyugtato-kezeles-1200.jpg",
    shortDesc: "Kifejezetten irritált, reaktív vagy kipirosodásra hajlamos arcbőr kíméletes megnyugtatása.",
    fullDesc: "Kifejezetten érzékeny, irritált, kipirosodásra és rozáceára hajlamos bőrre kifejlesztett kezelés. Vagheggi Emozioni Plus exoszómás hatóanyagokkal erősítjük a bőr természetes védőrétegét, csökkentjük a reaktivitást és a bőrpírt.",
    targetAudience: [
      "Érzékeny, könnyen kipirosodó bőr",
      "Rozáceára hajlamos bőr",
      "Vékony, világos, tágult hajszálerekkel rendelkező bőr",
      "Külső környezeti hatásokra túlérzékenyen reagáló bőr",
      "Intoleráns, feszülő, hámló bőr",
      "Stresszes, hiperreaktív bőrérzet esetén"
    ],
    ingredients: [
      { name: "Kurkuma metabolom exoszómákkal", benefit: "Gyulladáscsökkentő, bőrbarrier-erősítő" },
      { name: "Zanthoxylum (szecsuáni bors)", benefit: "Azonnali viszketés- és irritációcsökkentő" },
      { name: "Áfonya kivonat", benefit: "Érfalerősítő, antioxidáns, bőrpír csökkentő" },
      { name: "Anti-pollution komplex", benefit: "Mikrobiom-védelem és környezeti pajzs" },
      { name: "Panthenol & Béta-glükán", benefit: "Intenzív sejtregeneráció és hámképzés" }
    ],
    feelings: [
      "Azonnali megnyugvás és kellemes hűsítő érzet",
      "Bőrpír és feszülés látható csökkenése",
      "Hosszantartó komfort és védettség",
      "Egyenletes, harmonikus bőrkép"
    ],
    steps: [
      "Letisztítás – Emozioni lemosó krém",
      "Peeling – Emozioni Plus enzimes peeling",
      "Tonizálás – Emozioni Plus Mist",
      "Relaxáció / aromaterápia – Esszencia olaj Regulatrice",
      "Hatóanyag bevitel – Emozioni Plus ampulla",
      "Elektrokozmetika – ultrahang / elektroporáció",
      "Masszázs – Emozioni Plus lipozselé",
      "Befejezés – Emozioni Plus nyugtató arckrém + SPF"
    ],
    homeCare: "Az Emozioni Plus otthoni termékcsalád kíméletesen védi a bőrt a mindennapi környezeti irritációktól."
  },
  {
    id: "carboxy-therapy",
    name: "Carboxy Therapy",
    subtitle: "Oxigénterápia & sejtlégzés",
    category: "special",
    categoryName: "Gépi Kezelések",
    badge: "Oxigénterápia",
    duration: "60 perc",
    price: 22000,
    priceFormatted: "22 000 Ft",
    priceDetails: "60 perc: 22.000 Ft",
    isTop4: false,
    salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479955",
    image: "images/bbbeauty-carboxy-therapy-arckezeles-1200.jpg",
    shortDesc: "Szén-dioxid alapú kezelés a mikrokeringés és sejtlégzés aktiválására.",
    fullDesc: "Innovatív, oxigénfeltöltő arckezelés CliniCare professzionális hatóanyagokkal. A szén-dioxid hatására beinduló Bohr-effektus felpezsdíti a mikrokeringést, oxigénnel tölti fel a sejteket és azonnali ragyogást biztosít a fáradt bőrnek.",
    targetAudience: [
      "Fakó, oxigénhiányos, fáradt bőrkép",
      "Vízhiányos bőr",
      "Egyenetlen bőrtónus",
      "Tág pórusok esetén",
      "Esemény előtti 'glow' felkészülésre",
      "Érzékeny bőrre is kíméletes alternatívaként"
    ],
    ingredients: [
      { name: "CO₂ (Carboxy technológia)", benefit: "Keringésfokozó, oxigénellátást serkentő" },
      { name: "EGF növekedési faktor", benefit: "Sejtmegújító, intenzív szövetregeneráló" },
      { name: "AHA savak", benefit: "Bőrfelszínt simító, finom hámlasztó" },
      { name: "Hialuronsav", benefit: "Mélyrétegű nedvességmegkötő" },
      { name: "Peptidek", benefit: "Feszesítő, bőrszerkezet-támogató" }
    ],
    feelings: [
      "Bizsergő, kellemesen pezsgő aktív érzet",
      "Azonnali felfrissülés és élénk bőrszín",
      "Hidratáltabb, feszesebb, teltebb arcbőr",
      "Üde, ragyogó, tiszta megjelenés"
    ],
    variants: [
      {
        name: "Carboxy Therapy Kezelés",
        duration: "60 perc",
        price: "22 000 Ft",
        salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479955",
        steps: [
          "Letisztítás – CliniCare habzó lemosó",
          "Tonizálás – CliniCare HYAL+ Liquid Moisturizer",
          "Peeling – CliniCare Instant Painless Peel",
          "Kiegészítő hidroabráziós előkészítés szükség esetén",
          "Hatóanyag bevitel – AHA+EGF Skin Booster",
          "Carboxy gélpakolás felvitele",
          "Aktivátor maszk – CARBOXYTHERAPY aktivátor maszk (20–30 perc)",
          "Befejezés – CliniCare Sun Shield SPF 30 fényvédelem"
        ]
      }
    ],
    homeCare: "A kezelést követően fényvédő használata javasolt a friss szöveti regeneráció védelmében."
  },
  {
    id: "tu-nelkuli-mezoterapia",
    name: "Tű nélküli mezoterápia",
    subtitle: "Elektroporációs steril hatóanyagbevitel",
    category: "special",
    categoryName: "Gépi Kezelések",
    badge: "Elektroporáció",
    duration: "60 perc",
    price: 22000,
    priceFormatted: "22 000 Ft",
    priceDetails: "60 perc: 22.000 Ft",
    isTop4: false,
    salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479956",
    image: "images/bbbeauty-tu-nelkuli-mezoterapia-kezeles-1200.jpg",
    shortDesc: "Modern elektroporációs kezelés tűszúrás nélkül, steril orvosi hatóanyag-bevitellel.",
    fullDesc: "Modern, teljesen fájdalommentes bőrmegújító eljárás. Az elektroporációs technológia mikrocsatornákat nyit a sejtfalakon, így az orvosi tisztaságú peptidek, vitaminok és hialuronsav a bőr mélyebb rétegeibe jutnak el tűszúrás nélkül.",
    targetAudience: [
      "Vízhiányos, tónusát vesztett bőr",
      "Fakó, fáradt megjelenés",
      "Mimikai vonalak és ráncok",
      "Tűszúrástól tartó, de hatékony anti-aginget kereső vendégeknek"
    ],
    ingredients: [
      { name: "Kis molekulasúlyú Hialuronsav", benefit: "Mélyrétegű ráncfeltöltés és hidratálás" },
      { name: "Biomimetikus Peptidek", benefit: "Kollagén- és elasztinszintézis serkentése" },
      { name: "Vitamin komplexek", benefit: "Antioxidáns sejtvédő pajzs" },
      { name: "Aminosavak", benefit: "Bőrmegújító és szerkezetjavító hatás" }
    ],
    feelings: [
      "Teljesen fájdalommentes, kellemesen frissítő élmény",
      "Látványosan teltebb és rugalmasabb bőr",
      "Kisimult, feszes vonások",
      "Hosszantartó hidratáltságérzet"
    ],
    variants: [
      {
        name: "Tű Nélküli Mezoterápiás Kezelés",
        duration: "60 perc",
        price: "22 000 Ft",
        salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479956",
        steps: [
          "Letisztítás – kíméletes arctisztítás",
          "Tonizálás – bőr előkészítése",
          "Peeling – enzimes / gyengéd savas peeling",
          "Hatóanyag bevitel – személyre szabott orvosi ampulla / szérum",
          "Elektroporáció – hatóanyagok mélyre juttatása elektrokozmetikával",
          "Maszk – hidratáló / regeneráló pakolás",
          "Befejezés – hidratáló arckrém + SPF"
        ]
      }
    ],
    homeCare: "A mezoterápiás kezelést érdemes 3–5 alkalmas kúrában végezni a tartós feszesítő eredményért."
  },
  {
    id: "hamupipoke-expressz",
    name: "Hamupipőke express kezelés",
    subtitle: "Azonnali glow események előtt",
    category: "glow",
    categoryName: "Hidratálás & Glow",
    badge: "Expressz Glow",
    duration: "30 perc",
    price: 15000,
    priceFormatted: "15 000 Ft",
    priceDetails: "30 perc: 15.000 Ft",
    isTop4: false,
    salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479957",
    image: "images/bbbeauty-hamupipoke-expressz-arckezeles-1200.jpg",
    shortDesc: "Gyors bőrfelfrissítés és azonnali glow finish fontos események vagy fotózás előtt.",
    fullDesc: "Gyors, látványos arckezelés CliniCare hatóanyagokkal és prémium fátyolmaszkkal. Gyengéd hámlasztás után magas koncentrációjú peptidekkel és hialuronsavval töltjük fel a bőrt, így azonnal simává, ragyogóvá és sminkkész állapotúvá válik.",
    targetAudience: [
      "Eseményre, fotózásra, esküvőre készülő vendégeknek",
      "Fakó, fáradt, gyors felfrissülést igénylő bőrre",
      "Időhiányban lévőknek, akik azonnali látványos eredményt keresnek",
      "Minden bőrtípusra ideális expressz kezelés"
    ],
    ingredients: [
      { name: "AHA savak", benefit: "Gyors bőrfelszín-simítás és ragyogásfokozás" },
      { name: "EGF növekedési faktor", benefit: "Sejtmegújító, bőrszerkezet-javító" },
      { name: "Hialuronsav", benefit: "Intenzív feltöltő és vízmegkötő" },
      { name: "Peptidek", benefit: "Azonnali tónusfokozás és simaság" }
    ],
    feelings: [
      "Azonnali felfrissülés fél óra alatt",
      "Bársonyosan sima, ragyogó bőrfelszín",
      "Feszesebb, telt és élettel teli arcbőr",
      "Tökéletesen tapadó, szép sminkalap"
    ],
    variants: [
      {
        name: "Hamupipőke Express Glow",
        duration: "30 perc",
        price: "15 000 Ft",
        salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479957",
        steps: [
          "Letisztítás – CliniCare habzó lemosó",
          "Peeling – CliniCare Instant Painless Peel",
          "Hatóanyag bevitel – AHA+EGF Skin Booster",
          "Fátyolmaszk – CliniCare Glow / Pure / Tight prémium maszk (20 perc)",
          "Befejezés – CliniCare Sun Shield SPF 30 fényvédelem"
        ]
      }
    ],
    homeCare: "Kiválóan kombinálható bármilyen alkalmi készülődéssel vagy havi fenntartó rituáléként."
  },
  {
    id: "kombinalt-bor-kezeles",
    name: "Kombinált bőr kiegyensúlyozó kezelés",
    subtitle: "Fitokozmetikai zónás harmonizálás",
    category: "problemas",
    categoryName: "Problémás Bőr",
    badge: "Kombinált Bőr",
    duration: "60–90 perc",
    price: 18500,
    priceFormatted: "18 500 Ft-tól",
    priceDetails: "60 perc: 18.500 Ft · 90 perc (prémium): 21.500 Ft",
    isTop4: false,
    salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479911",
    image: "images/bbbeauty-kombinalt-bor-regeneralo-kezeles-1200.jpg",
    shortDesc: "Kettős zónakezelés: T-zóna mattítás és száraz területek mélyhidratálása.",
    fullDesc: "Növényi alapú fitokozmetikai arckezelés Vagheggi Equilibrium készítményekkel. Kettős hatásmechanizmusa harmonizálja a felesleges faggyútermelést a T-zónában, miközben intenzíven hidratálja és táplálja az orcák szárazabb területeit.",
    targetAudience: [
      "Kombinált bőrtípus (zsíros T-zóna, száraz orcák)",
      "Kiegyensúlyozatlan, feszülő, mégis fénylő bőr",
      "Tág pórusok és fakó bőrkép",
      "Frissítő, méregtelenítő ápolásra vágyóknak"
    ],
    ingredients: [
      { name: "Olasz szalmagyopár flavonoidok", benefit: "Faggyúszabályzó és bőrnyugtató" },
      { name: "Karité vaj & Olívaolaj", benefit: "Bőrbarrier-erősítő és tápláló" },
      { name: "Baobab kivonat", benefit: "Revitalizáló, bőrpuhító hatás" },
      { name: "Esszenciális olajok", benefit: "Méregtelenítő, relaxáló aromaélmény" }
    ],
    feelings: [
      "Friss, tiszta, könnyed bőrérzet",
      "T-zóna mattulása és szárazságérzet megszűnése",
      "Hidratáltabb, egységesebb megjelenés",
      "Kiegyensúlyozott, tiszta bőrkomfort"
    ],
    variants: [
      {
        name: "Equilibrium Kiegyensúlyozó Alap",
        duration: "60 perc",
        price: "18 500 Ft",
        salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479911",
        steps: [
          "Letisztítás – Equilibrium sminklemosó & tisztító krém",
          "Peeling – Equilibrium enzimes peeling",
          "Tonizálás – Equilibrium tonik",
          "Hatóanyag bevitel – Equilibrium koncentrátum",
          "Maszk – Equilibrium kiegyensúlyozó maszk",
          "Befejezés – Equilibrium hidratáló krém + SPF"
        ]
      },
      {
        name: "Equilibrium Kiegyensúlyozó Prémium",
        duration: "90 perc",
        price: "21 500 Ft",
        salonicUrl: "https://bbbeautykozmetika.salonic.hu/selectEmployee/?placeId=14908&serviceId=479912",
        steps: [
          "Letisztítás – Equilibrium sminklemosó & tisztító krém",
          "Peeling – Equilibrium enzimes peeling",
          "Tonizálás – Equilibrium tonik",
          "Hatóanyag bevitel – Equilibrium koncentrátum",
          "Elektrokozmetika – ultrahangos hatóanyag-bevitel",
          "Relaxáló arcmasszázs – Equilibrium masszázskrém",
          "Maszk – Equilibrium kiegyensúlyozó maszk",
          "Befejezés – Equilibrium hidratáló krém + SPF"
        ]
      }
    ],
    homeCare: "A Vagheggi Equilibrium otthoni nappali krém segít fenntartani a T-zóna matt és az orcák hidratált harmóniáját."
  }
];

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { TREATMENTS_DATA };
}
