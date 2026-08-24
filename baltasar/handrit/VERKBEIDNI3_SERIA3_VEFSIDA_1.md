# VERKBEIÐNI 3 — SERÍA 3 INN Á VEFSÍÐUNA

*Fyrir Claude í VS Code, í möppunni `baltasar`.*

---

# YFIRLIT

Þrjár skrár breytast: **ný `seria3.html`**, og uppfærsla á `seria1.html`, `seria2.html` og `index.html`.

Handritin sex eru til á íslensku sem `.md` skrár. **Enska útgáfan er ekki til og er stærsta verkið — sjá hluta D.**

---

# A · BÚA TIL `seria3.html`

**Afritaðu `seria2.html` og notaðu hana sem sniðmát.** Ekki skrifa neitt frá grunni — allt CSS, lykilorðsvörnin, ÍS/EN-rofinn, hliðarvalmyndin og JavaScript-ið á að vera nákvæmlega eins.

## Breytingar á sniðmátinu

**Titill:** `<title>Baltasar — Sería 3</title>`

**Forsíðublokk:** `Sería 3` / `Series Three`

**Auðkenni þátta:** enska `ep13`–`ep18`, íslenska `is-ep13`–`is-ep18`. Haltu áfram röðinni frá seríu 2.

**SERIES_NEXT_URL:** `null` — sería 3 er sú síðasta og það kemur ekki sería 4.

## Þættirnir

| Auðkenni | Titill | Skrá |
|---|---|---|
| ep13 / is-ep13 | Fjórir dagar | `Moggurnar_S3E1_Fjorir_dagar_IS_drog3.md` |
| ep14 / is-ep14 | Sex | `Moggurnar_S3E2_Sex_IS_drog2.md` |
| ep15 / is-ep15 | Dómarinn | `Moggurnar_S3E3_Domarinn_IS_drog2.md` |
| ep16 / is-ep16 | Verkefnið | `Moggurnar_S3E4_Verkefnid_IS_drog3.md` |
| ep17 / is-ep17 | Afslöppun | `Moggurnar_S3E5_Afslopppun_IS.md` |
| ep18 / is-ep18 | Sextíu og einn | `Moggurnar_S3E6_Sextiu_og_einn_IS.md` |

## Umbreyting úr markdown í HTML

Notaðu **nákvæmlega sömu klasa og seríur 1 og 2.** Kortið er svona:

| Í markdown | Í HTML |
|---|---|
| `**INNI. STAÐUR — TÍMI**` senuhaus | `<p class="slug"><strong>…</strong></p>` |
| `*skáletrað sviðsfyrirmæli*` | `<p class="action"><em>…</em></p>` |
| `**NAFN:**` á undan replikku | `<p class="cue"><strong>NAFN</strong></p>` |
| `*(innan sviga)*` | `<p class="paren"><em>…</em></p>` |
| replikkutexti | `<p class="dial">…</p>` |
| `## FYRSTI HLUTI` | `<h3 class="act">…</h3>` |
| `> **NAFN:** texti` spjallblokk | `<div class="chat"><p><strong>NAFN:</strong> texti</p></div>` |
| `# MÖGGURNAR` titilskot | `<p class="bigtitle">MÖGGURNAR — SERÍA 3</p>` |
| `---` | `<hr>` |

**Ath:** í markdown-skránum stendur `**MARÍA:** Texti` á einni línu. Í HTML verður það **tvær málsgreinar** — `cue` og `dial` — eins og í seríum 1 og 2. Ekki halda tvípunktinum.

**Slepptu MINNISPUNKTUM.** Þeir eru vinnunótur og eiga ekki á síðuna. Sama á við um hausinn efst í hverri skrá (SVARTA LÍNAN, HVAR VIÐ ERUM o.s.frv.) — nema stutta þáttalýsingin efst, sem verður að `subtitle`.

---

# B · UPPFÆRA HLIÐARVALMYNDINA Í ÖLLUM SKRÁM

Hliðarvalmyndin er endurtekin í `seria1.html`, `seria2.html` og `seria3.html`. **Bættu seríu 3 við í allar þrjár**, í báðum tungumálablokkum.

**Íslenska:**
```html
<span class="season">Sería 3</span>
<a href="/baltasar/seria3.html#is-ep13">1. Fjórir dagar</a>
<a href="/baltasar/seria3.html#is-ep14">2. Sex</a>
<a href="/baltasar/seria3.html#is-ep15">3. Dómarinn</a>
<a href="/baltasar/seria3.html#is-ep16">4. Verkefnið</a>
<a href="/baltasar/seria3.html#is-ep17">5. Afslöppun</a>
<a href="/baltasar/seria3.html#is-ep18">6. Sextíu og einn</a>
```

**Enska:** sömu slóðir með `#ep13`–`#ep18`. Titlar bíða þýðingar — sjá hluta D.

*Í `seria3.html` sjálfri eiga hlekkirnir á seríu 3 að vera `#is-ep13` án slóðar, eins og seríur 1 og 2 gera við sína eigin þætti.*

---

# C · UPPFÆRA `index.html`

Bættu seríu 3 við yfirlitið með sama sniði og seríur 1 og 2.

---

# D · ENSKA ÞÝÐINGIN — STÆRSTA VERKIÐ

**Þættirnir sex eru aðeins til á íslensku.** Um 15.000 orð.

Þrír kostir:

**1. Birta á íslensku fyrst.** Búðu til enska blokk sem inniheldur eina málsgrein: *„Series Three — English translation coming."* Síðan virkar, ÍS/EN-rofinn brotnar ekki, og þýðingin bætist við seinna. **Þetta er það sem ég myndi gera.**

**2. Þýða allt í einu.** Sex þættir. Þarf að fylgja stílnum í seríum 1 og 2 nákvæmlega — hástafir Súsönnu, emoji og tölur haldast eins á báðum tungumálum, og nöfn eru aldrei þýdd.

**3. Þýða einn þátt í einu** eftir því sem þeir eru samþykktir.

**Ekki þýða sjálfvirkt án yfirlestrar.** Íslenskan er frumtextinn og margir brandarar liggja í orðavali sem tapast í beinni þýðingu.

---

# E · ÁÐUR EN ÞÚ BYRJAR

**Sýndu mér plan og eitt sýnishorn** — fyrsta atriðið úr S3E1 umbreytt í HTML — áður en þú gerir alla sex. Ef klasarnir eru réttir er restin vélræn.

**Committaðu hverju skrefi sér:** ný skrá, valmyndir, index. Þá er hægt að bakka einu í einu.
