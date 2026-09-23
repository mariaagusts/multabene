# Notendarýni á lánareikninum

**Síða:** https://www.multabene.is/lanareiknir
**Dagsetning:** 23. september 2026
**Markhópur sem rýnt er fyrir:** venjulegt fólk sem kann ekkert í lánafræðum, sumt óvant tölvum.

## Um aðferðina

Playwright var ekki notað. Hvorki Node né npm eru á þessari vél, svo `npm i -D playwright` gengur ekki upp án þess að setja Node upp fyrst, sem er stærri aðgerð en rýnin réttlætir. Í staðinn var notað:

* **Chrome í hauslausri stillingu** fyrir skjámyndir, sjá [taka-skjamyndir.sh](taka-skjamyndir.sh). Ástand reiknivélarinnar ferðast í slóðinni sjálfri, svo hægt er að hlaða hverja persónu beint.
* **Vafri með tækjahermun** fyrir sjálf notendaprófin: reitir fylltir út, smellt á hnappa, mælt hvar hlutir eru á síðunni og litaskil reiknuð úr raunverulegum reiknuðum litum (WCAG 2.1 formúla, gegnsæi lagskipt rétt).

Ein takmörkun sem skiptir máli: **Chrome í hauslausri stillingu klemmir gluggabreidd í 512px að lágmarki**, svo ekki er hægt að taka skjámynd í 390px þaðan. Símamyndirnar hér eru því í 512px. Útlitið í raunverulegri símabreidd var staðfest sérstaklega með tækjahermun: engin lárétt yfirflæði, `scrollWidth == innerWidth == 375`. Símaútlitið er í lagi hvað flæði varðar.

Frumkóðinn var lesinn samhliða, `lanareiknir/index.html`, svo allir reitir, valmyndir og ástand væru þekkt.

---

## Fimm alvarlegustu vandamálin

### 1. Samanburðurinn framleiðir ranga niðurstöðu og varar ekki við

Þetta er versta vandamálið og það eina sem getur beinlínis leitt fólk að rangri ákvörðun.

Persóna C vill bera saman verðtryggt og óverðtryggt lán. Hún setur upp verðtryggt lán á 3,9%, smellir á „Bera saman annað dæmi", og skiptir tegundinni í dæmi B yfir í óverðtryggt. **Vaxtatalan situr óbreytt eftir, 3,9%.** Merking reitsins breytist réttilega úr „Vextir (raunvextir)" í „Vextir (nafnvextir)", en talan sjálf er sú sama og ekkert vekur athygli á því.

Niðurstaðan í samanburðartöflunni:

```
Raunkostnaður (á verðlagi dagsins)   43.935.993 kr.   -7.483.708 kr.   −51.419.701 kr.
```

Reiknivélin segir sem sagt að óverðtryggða lánið **borgi þér 7,5 milljónir fyrir að taka það**, og að það sé 51 milljón ódýrara en hitt. Það er vegna þess að 3,9% nafnvextir við 5,3% verðbólgu eru neikvæðir raunvextir. Stærðfræðin er rétt, forsendan er fáránleg, og notandinn hefur enga leið til að sjá það.

Kaldhæðnin er sú að síðan sjálf er með fræðslumola sem heitir „Ekki bera nafnvexti saman við raunvexti". Hann er 3.000 pixlum neðar á síðunni og kemur hvergi nálægt augnablikinu þar sem villan verður til.

*Sjá [09-personaC-oll-1440.png](screenshots/09-personaC-oll-1440.png).*

### 2. Verðbólgureiturinn hafnar íslensku kommunni þegjandi og setur verðbólguna í núll

Reiturinn „Áætluð ársverðbólga" er `<input type="number">`. Sláirðu inn **5,3** eins og Íslendingur skrifar tölur:

* reiturinn tæmist,
* verðbólgan verður **0%**,
* engin villuskilaboð birtast,
* og hver einasta tala á síðunni breytist.

Beint fyrir neðan reitinn eru sex hnappar sem allir sýna kommu: „Núna · 5,3%", „Síðustu 3 ár · 5,1%". Viðmótið kennir notandanum kommuna og hafnar henni svo. Reiturinn sjálfur sýnir sjálfgefið **5.3** með punkti, ólíkt öllum öðrum tölum á síðunni sem nota punkt sem þúsundaskil og kommu sem tugabrot.

Þetta er þögul röng niðurstaða, versta tegund villu. Notandinn fær svar sem lítur fullkomlega eðlilega út og er rangt.

*Sjá [05-personaA-fold-1440.png](screenshots/05-personaA-fold-1440.png), reiturinn sýnir „5.3" en hnapparnir „5,3%".*

### 3. Fylliskipunin skilur eftir hálfklárað lán og segir samt að dæmið gangi upp

Persóna A (fyrstu kaupendur, 900.000 kr. útborgað, eign á 65 m.kr., 8 m.kr. eigið fé) smellir á „Setja mismuninn inn á Lán 1". Höfuðstóllinn er settur inn, 57.267.600 kr., **en vextir og lánstími standa í núlli**. Reiknivélin telur lánið þar með ógilt. Afleiðingin er að fjögur spjöld á sömu síðu segja fjóra ólíka hluti:

| Spjald | Segir |
|---|---|
| Nær þetta upp í kaupverðið? | „Þetta nær nákvæmlega upp í kaupverðið." (grænt) |
| 40% regla Seðlabankans | „Settu inn lánin í skrefi 2 til að fá svarið." |
| Veðhlutfall eignanna | *falið* |
| Flísin Tekið að láni | „0 kr." |

Græna staðfestingin byggir á láni sem reiknivélin sjálf telur ógilt. Hnappurinn skrunar ekki upp í skref 2, segir ekki að vexti og lánstíma vanti, og lánakortið langt fyrir ofan er eina vísbendingin, með lágstemmdri línu: „Settu inn höfuðstól og lánstíma til að sjá útreikninginn."

Hnappurinn er í 4.332px hæð á síðu sem er þá 9.366px. Notandinn þarf að skruna langa leið til baka til að klára, án þess að nokkuð segi honum það.

*Sjá [06-personaA-oll-1440.png](screenshots/06-personaA-oll-1440.png).*

### 4. „Það vantar 57.267.600 kr." er sagt við notanda sem hefur einfaldlega ekki slegið inn lán enn

Þegar persóna A er búin að setja inn kaupverð og eigið fé, en áður en nokkuð lán er skráð, standa tvö spjöld hlið við hlið:

```
Hvað kemstu hæst?        Miðað við tekjurnar og eigið féð kemstu hæst í eign á um 76.850.000 kr.
Nær þetta upp í kaupverðið?   Það vantar 57.267.600 kr. upp í kaupverðið.
```

Efra spjaldið segir að þau hafi vel efni á eigninni. Neðra spjaldið, 60 pixlum neðar, segir að þau vanti 57 milljónir. Hvorugt er rangt, en saman eru þau skelfileg lesning fyrir fólk sem er kvíðið fyrir að hafa ekki efni á neinu.

Rótin er sú að súlan túlkar „ekkert lán skráð enn" sem „peninga vantar". Þetta er byrjunarástand allra kaupenda, ekki undantekning.

### 5. Svarið er aldrei þar sem notandinn er, og síðan er tvöfalt lengri en tólið sjálft

Mælt á tómri síðu:

* **Tölva:** 6.809px, um 7,5 skjáfyllingar.
* **Sími:** 12.820px, um **15,8 skjáfyllingar**, án þess að nokkuð hafi verið fyllt út.
* Af 6.809px eru **3.397px, réttur helmingur síðunnar, lesefni**: „Vissir þú" með 13 molum og „Hvernig er reiknað".

Fyrir persónu B, eldri konu í síma sem vill vita hvort 30.000 kr. aukagreiðsla borgi sig, þýðir þetta:

* Reiturinn „Aukagreiðsla á mánuði" er í 2.653px hæð.
* Svarið, flísin „Aukagreiðslur spara 4.525.082 kr. og stytta lánstímann um 4 ár og 11 mán.", er í 5.127px hæð á 13.998px síðu.
* Hún slær inn töluna og **ekkert gerist þar sem hún er stödd**. Hún þarf að skruna rúmlega þrjár skjáfyllingar niður til að sjá hvort hún hafi gert rétt.

Sama vandamál gildir um alla reiti. Reiknivélin uppfærist samstundis, en aldrei í augsýn þess sem er að skrifa.

*Sjá [08-personaB-oll-simi.png](screenshots/08-personaB-oll-simi.png).*

---

## Allar niðurstöður

Alvarleiki: **Hátt** = gefur rangt svar eða stöðvar notandann. **Miðlungs** = tefur eða ruglar. **Lágt** = snyrtimennska.
Fyrirhöfn: **Lítil** ≈ innan við klukkustund. **Miðlungs** ≈ hálfur dagur. **Mikil** ≈ dagur eða meira.

### Réttleiki og villur

| # | Vandamál | Hvar | Alvarleiki | Tillaga | Fyrirhöfn |
|---|---|---|---|---|---|
| 1 | Vaxtatala helst óbreytt þegar skipt er milli verðtryggt/óverðtryggt, sem gefur neikvæðan raunkostnað og 51 m.kr. skekkju í samanburði | [09](screenshots/09-personaC-oll-1440.png) | Hátt | Við skiptingu: bjóða sjálfkrafa dæmigerða vexti fyrir nýju tegundina og segja „vextirnir voru færðir úr 3,9% raunvöxtum í 8,5% nafnvexti, breyttu ef þín kjör eru önnur". Að auki viðvörun í samanburðartöflunni ef raunkostnaður reynist neikvæður | Miðlungs |
| 2 | „5,3" með kommu tæmir verðbólgureitinn og setur verðbólgu í 0% án skilaboða | [05](screenshots/05-personaA-fold-1440.png) | Hátt | Skipta úr `type=number` í `type=text inputmode=decimal` og þýða kommu í punkt við innslátt, eins og krónureitirnir gera nú þegar. Sýna gildið með kommu | Lítil |
| 3 | Fylliskipun setur höfuðstól en ekki vexti og lánstíma, græn staðfesting birtist á ógildu láni | [06](screenshots/06-personaA-oll-1440.png) | Hátt | Setja sjálfgefna vexti og lánstíma um leið, skruna að lánakortinu og merkja reitina sem vantar | Miðlungs |
| 4 | Neikvæðir vextir samþykktir án athugasemda (prófað með −2%) | Lánakort | Miðlungs | `min=0` og einföld villuskilaboð | Lítil |
| 5 | Bókstafir í krónureit hverfa þegjandi, engin skilaboð | Öll upphæðareitir | Lágt | Stutt lína undir reitnum: „Skrifaðu bara tölu" | Lítil |
| 6 | 35%-spjaldið dæmir lán sem notandinn er þegar með. Persóna B fær rautt „Nei, þessi lán fara yfir hámark Seðlabankans" þótt hún sé ekki að sækja um neitt | [08](screenshots/08-personaB-oll-simi.png) | Hátt | Spjaldið á aðeins að birtast þegar notandinn segist vera að kaupa eða endurfjármagna. Annars: „Reglan gildir um ný lán, ekki lán sem þú ert þegar með" | Miðlungs |

### Skrefaflæði og röð

| # | Vandamál | Hvar | Alvarleiki | Tillaga | Fyrirhöfn |
|---|---|---|---|---|---|
| 7 | Skrefavísirinn efst er kyrrstæður texti, ekki leiðsögn. Hann sýnir ekki hvar þú ert, er ekki smellanlegur og hverfur við skrun | [01](screenshots/01-tomt-fold-1440.png) | Miðlungs | Fastur, mjór skrefastikill efst sem fylgir skruni, merkir virkt skref og er smellanlegur | Miðlungs |
| 8 | Vísirinn lofar þremur skrefum en síðan hefur fjögur númeruð skref | [01](screenshots/01-tomt-fold-1440.png) | Lágt | Samræma | Lítil |
| 9 | „Ég er að kaupa eign" er fjórða hakið í dálki neðst í skrefi 1, í 928px hæð, undir fyrstu skjáfyllingu. Þetta er mikilvægasta spurning síðunnar og stýrir því hvaða reitir birtast | [01](screenshots/01-tomt-fold-1440.png) | Hátt | Gera hana að fyrstu spurningu, sjá kafla um nýja röð | Mikil |
| 10 | Fimm hök í skrefi 1 sem hvert opnar sinn kassa. Skref 1 getur orðið fimm kassar áður en komið er að láni | [02](screenshots/02-tomt-oll-1440.png) | Miðlungs | Skipta upp í raunveruleg skref eftir verkefni notandans | Mikil |
| 11 | Í kaupkaflanum koma tveir reitir um útleigueign á undan reitnum fyrir eigið fé. Fyrstu kaupendur þurfa að lesa sig fram hjá óviðkomandi efni á versta augnabliki | [06](screenshots/06-personaA-oll-1440.png) | Miðlungs | Setja útleigueign undir eigið hak. Eigið fé strax á eftir kaupverði | Lítil |
| 12 | Engin leiðsögn milli skrefa. Enginn „áfram" hnappur, engin staðfesting á að skrefi sé lokið | Öll síðan | Miðlungs | Léttur „næsta skref" hnappur neðst í hverju skrefi sem skrunar á réttan stað | Lítil |
| 13 | Fræðslumolarnir, 13 talsins, eru sér kafli neðst. Hver þeirra útskýrir nákvæmlega eitthvað sem notandinn var að velta fyrir sér mörgum skjáfyllingum ofar | [02](screenshots/02-tomt-oll-1440.png) | Miðlungs | Færa hvern mola að reitnum sem hann skýrir, sem útvíkkanlegt „Hvað þýðir þetta?" | Mikil |
| 14 | Gögn tapast ekki við skrun eða endurhleðslu, ástandið vistast sjálfkrafa. **Þetta virkar vel**, en notandinn veit ekki af því | Öll síðan | Lágt | Lítil lína: „Það sem þú slærð inn geymist í þessum vafra" | Lítil |

### Orðalag

Öll þessi hugtök birtast **í sjálfu tólinu**, fyrir ofan fræðslukaflann, flest án nokkurrar skýringar á staðnum:

| Hugtak | Hvar | Tillaga |
|---|---|---|
| Verðtryggt / óverðtryggt | Fyrsta valmynd á lánakorti | Bæta við einni línu: „Verðtryggt lán hækkar með verðlaginu. Óverðtryggt gerir það ekki, en ber hærri vexti" |
| Jafnar greiðslur / jafnar afborganir | Valmynd „Greiðslufyrirkomulag" | „Jafnar greiðslur: sama talan út allan tímann. Jafnar afborganir: hærra fyrst, lækkar jafnt og þétt" |
| Annuitet | Fræðslumoli og skýringartexti | Sleppa orðinu alveg í viðmótinu, nota „jafnar greiðslur" |
| Raunvextir / nafnvextir | Merking vaxtareits | „Raunvextir: vextirnir ofan á verðbæturnar. Nafnvextir: allt saman í einni tölu" |
| Verðbætur | Skýringar og línurit | „Það sem leggst ofan á lánið þegar verðlag hækkar" |
| Höfuðstóll / eftirstöðvar | Merking reits | „Upphæðin sem þú skuldar" |
| Greiðslubyrði | 35%-spjald | „Það sem fer í afborganir á mánuði" |
| Ráðstöfunartekjur | 35%-spjald | „Útborguð laun" er þegar notað annars staðar, nota það alls staðar |
| Veðhlutfall / veðsetningarhlutfall | Veðhlutfallsspjald | „Hversu stór hluti eignarinnar er veðsettur" |
| Lánsveð | Valmynd „Flokkur láns" | „Lán með veði í eign annars, t.d. foreldra" |
| Vísitala neysluverðs | Skýring við verðbólgu | „Mælikvarði Hagstofunnar á verðlag" |
| Uppgreiðslugjald | Fræðslumoli | „Gjald fyrir að borga lánið upp of snemma" |
| Fasteignamat | Kaupkafli | „Verðmat hins opinbera á eigninni, sést á skattframtalinu" |
| Stimpilgjald | Kaupkostnaður | Skýrt í sundurliðuninni nú þegar, í lagi |
| Hlutdeildarlán | Kaupkafli | Skýrt á staðnum nú þegar, í lagi |
| Fjármagnstekjuskattur, frítekjumark | Leigutekjukafli | Sjaldgæfara tilvik, í lagi að skýra í texta |

Athugasemd um tón: langur skýringartexti undir reitum er skrifaður vel, en hann er of langur til að vera lesinn. Kassinn um leigutekjur er 11 línur af samfelldum texta áður en komið er að fyrsta reit.

### Innsláttur

| # | Vandamál | Alvarleiki | Tillaga | Fyrirhöfn |
|---|---|---|---|---|
| 15 | Þúsundaskil með punkti (`1.234.567 kr.`) eru rétt að íslenskum sið og virka vel. Tugabrot nota kommu **nema** í verðbólgureitnum. Ósamræmi | Hátt (sjá #2) | Sjá #2 | Lítil |
| 16 | **41 af 66 smellanlegum hlutum eru undir 44px á hæð í síma.** Verstu: „?" hjálparhnappur 25×25px, verðbólguhnappar 29px, efsta stikan (Deila hlekk, Vista afrit, Opna afrit, Hreinsa allt) 31px, innsláttarreitir 41px | Hátt | Lágmark 44px á allt sem er smellt á í síma. Reitirnir þurfa bara 3px í viðbót | Lítil |
| 17 | Engin sjálfgefin gildi á vöxtum og lánstíma. Notandi sem veit ekki kjörin sín kemst ekki áfram | Miðlungs | Sjálfgefið 3,9% og 40 ár fyrir verðtryggt, 8,5% og 40 ár fyrir óverðtryggt, greinilega merkt sem ágiskun sem má breyta | Lítil |
| 18 | Reitir merktir `*` eru sagðir nauðsynlegir en ekkert gerist ef þeir eru tómir nema að útreikningur birtist ekki | Miðlungs | Merkja tóma nauðsynlega reiti sjónrænt þegar niðurstaða er reynd | Lítil |

### Niðurstöður og sjónrænt stigveldi

| # | Vandamál | Hvar | Alvarleiki | Tillaga | Fyrirhöfn |
|---|---|---|---|---|---|
| 19 | Skref 3 getur sýnt **sex spjöld í röð**: hámarkskaupverð, púsl, 35%, greiðslumat, veðhlutfall, flísar. Öll með sama sjónræna vægi. Enginn segir hvert er svarið við spurningunni í fyrirsögn síðunnar | [06](screenshots/06-personaA-oll-1440.png) | Hátt | Eitt svar efst, stórt, í einni setningu. Hin spjöldin samanbrotin undir „Sjá nánari útreikning" | Miðlungs |
| 20 | „Greiðslan á mánuði" hækkar þegar notandi setur inn aukagreiðslu (157.335 → 187.335 kr.). Persóna B gæti lesið það sem að lánið hafi hækkað | [08](screenshots/08-personaB-oll-simi.png) | Miðlungs | Sundurliða: „afborgun 157.335 + aukagreiðsla 30.000" | Lítil |
| 21 | Flipar á línuritinu heita „Skuldin (krónur hvers tíma)" og „Skuldin (á verðlagi dagsins í dag)". Munurinn er kjarninn í verðtryggingu og er óskiljanlegur án skýringartextans sem birtist fyrir neðan | Skref 4 | Miðlungs | Einfaldari heiti: „Eins og það stendur á yfirlitinu" og „Eins og það er í raun" | Lítil |
| 22 | Dómur um hvort lán standist notar tákn (✓ og ✕) og orðin „Já" og „Nei" auk litar. **Þetta er rétt gert**, ekki bara litur | 35%-spjald | Lágt | Engin breyting | — |
| 23 | Dæmi A og B eru aðgreind með svörtum og hvítum merkimiðum í viðmótinu en með bláu og appelsínugulu í samanburðarritinu. Tveir ólíkir litakóðar fyrir sama hlut | Samanburður | Miðlungs | Sjá litakafla | Lítil |

### Lengd síðunnar

| Efni | Hæð (tölva) | Tillaga |
|---|---|---|
| Tólið sjálft, skref 1 til 4 | 0 til 3.412px | Halda |
| „Bera saman annað dæmi" | 3.287px | Halda, en færa nær niðurstöðunni |
| „Vissir þú", 13 molar | 3.412 til 5.173px, **1.761px** | Færa hvern mola að viðkomandi reit. Halda eftir 3 til 4 sem stuttum kafla |
| „Hvernig er reiknað", 6 kaflar | 5.173 til um 6.800px, **1.636px** | Setja í samanbrotinn `<details>` eða á sér síðu, `/lanareiknir/adferd` |
| Fótur og heimildir | neðst | Halda |

Samtals er **helmingur síðunnar lesefni** sem enginn notandi les í fyrstu heimsókn. Efnið sjálft er vandað og á að vera til, en ekki sem múr milli notandans og svarsins.

---

## Tillaga að nýrri röð

Grunnhugsunin: **ein spurning fremst sem stýrir öllu hinu.** Í dag fær persóna B, eldri kona með eitt lán, sömu síðu og fyrstu kaupendur: hún gengur fram hjá kaupverði, fasteignamati, útleigueign, eigin fé, hlutdeildarláni, söluþóknun og fjölskyldustærð áður en hún kemst að láninu sínu.

```
BYRJUN  Hvað viltu gera?   (þrír stórir hnappar, ekkert annað á skjánum)

        ┌─ Ég er að kaupa eign
        ├─ Ég er með lán og vil skoða það
        └─ Ég vil bera saman tvo kosti


LEIÐ 1 — ÉG ER AÐ KAUPA
  1  Eignin            kaupverð, fasteignamat
  2  Peningarnir mínir eigið fé (margar línur), hlutdeildarlán, kostnaður við kaupin
  3  Heimilið          laun, fjöldi í heimili, leikskólagjöld, rekstur eignarinnar
     ─────────────────────────────────────────────────────────────
     SVAR              „Þú kemst hæst í eign á 61 m.kr. Eignin sem þú skoðaðir
                        kostar 65 m.kr. Það vantar 4 m.kr."
     ─────────────────────────────────────────────────────────────
  4  Lánið             tillaga þegar útfyllt, notandi lagar að sínum kjörum
  5  Nánar             35%, veðhlutfall, greiðslumat, línurit, tafla

LEIÐ 2 — ÉG ER MEÐ LÁN
  1  Lánið mitt        höfuðstóll, vextir, lánstími, tegund
     ─────────────────────────────────────────────────────────────
     SVAR              „Þú borgar 157.335 kr. á mánuði og lánið kostar þig
                        16,1 m.kr. umfram það sem þú tókst að láni."
     ─────────────────────────────────────────────────────────────
  2  Hvað get ég gert? aukagreiðsla, eingreiðsla, stytta eða lækka
                       → svarið uppfærist STRAX VIÐ REITINN
  3  Launin mín        valfrjálst, opnar afgang og greiðslumat
  4  Nánar             línurit, tafla

LEIÐ 3 — BERA SAMAN
  Tvö dæmi hlið við hlið frá byrjun, ekki afrit af öðru.
  Við tegundarskipti: vextir stilltir sjálfkrafa og sagt frá því.

ALLTAF SÝNILEGT
  Mjó stika efst: hvaða skref, hversu mörg eftir, smellanleg til baka.

NEÐST
  Fróðleikur, 3 til 4 molar.  Hvernig er reiknað (samanbrotið).  Heimildir.
```

**Rökstuðningur fyrir helstu breytingum:**

* **„Ertu að kaupa?" fremst.** Í dag er þetta fjórða hakið í dálki neðan við fyrstu skjáfyllingu. Það ákveður hvort fimm kassar og þrjú niðurstöðuspjöld birtast. Spurning sem stýrir svo miklu á að vera spurð fyrst, ekki falin.
* **Eignin á undan laununum fyrir kaupendur.** Kaupandi er með kaupverð í hausnum, það er talan sem hann kom með. Laun og verðbólga eru abstrakt í samanburði. Að byrja á verðbólguspá fyrir fólk sem kann ekkert í lánafræðum er röng byrjun.
* **Svar í miðjunni, ekki bara í lokin.** Kaupandi þarf svarið „hvað kemstu hæst" *áður* en hann fyllir út lán, því annars veit hann ekki hvaða tölu hann á að slá inn. Það er núverandi rökvilla: tólið biður um lánsupphæð sem er einmitt það sem notandinn kom til að fá að vita.
* **Fyrir persónu B á ekkert af kaupefninu að birtast.** Hún sér þá hvorki 35%-spjaldið sem dæmir lánið hennar rautt, né kaupverð, né veðhlutfall.
* **Fræðslumolar að reitunum.** Moli sem heitir „Ekki bera nafnvexti saman við raunvexti" gerir ekkert gagn 3.000px frá vaxtareitnum. Við reitinn kæmi hann í veg fyrir alvarlegustu villuna í rýninni.

---

## Litatillaga

### Mælingar á núverandi litum

Reiknað með WCAG 2.1 formúlu úr raunverulegum reiknuðum litum, gegnsæi lagskipt rétt ofan á bakgrunn foreldris. Krafa er 4,5:1 fyrir venjulegan texta og 3:1 fyrir stóran (24px+, eða 18,7px+ feitletrað).

**Það sem stenst:**

| Hlutur | Forgrunnur | Bakgrunnur | Hlutfall | Krafa |
|---|---|---|---|---|
| Inngangstexti | `#5d5140` | `#f4efe6` | **6,75** | 4,5 ✓ |
| Merking reits | `#5d5140` | `#fffdf9` | **7,61** | 4,5 ✓ |
| Innsláttarreitur | `#292018` | `#f4efe6` | **13,95** | 4,5 ✓ |
| Dómur „Já" | `#046b0f` | `#f0f8eb` | **6,19** | 4,5 ✓ |
| Dómur „Nei" | `#b32626` | `#fcf1ee` | **5,90** | 4,5 ✓ |
| Pilla ✓ | `#046b0f` | `#d0eccc` | **5,31** | 4,5 ✓ |
| Pilla ✕ | `#b32626` | `#f6d8d5` | **4,87** | 4,5 ✓ |
| Hnappur með áherslulit | `#ffffff` | `#1266c4` | **5,64** | 4,5 ✓ |
| Stór tala í flís | `#292018` | `#fffdf9` | **15,73** | 3 ✓ |
| Vissir þú kassi | `#5d5140` | `#fdf3de` | **7,01** | 4,5 ✓ |
| Upplýsingakassi | `#5d5140` | `#e4edf9` | **6,55** | 4,5 ✓ |

**Það sem fellur, allt sami liturinn `--muted: #8b7e69`:**

| Hlutur | Stærð | Bakgrunnur | Hlutfall | Krafa | Vantar |
|---|---|---|---|---|---|
| Hjálpartexti undir hverjum reit (`.hint`) | 11,5px | `#fffdf9` | **3,91** | 4,5 | ✕ |
| Smáfyrirsögn á spjaldi (`.eyebrow`) | 11px | `#fffdf9` | **3,91** | 4,5 | ✕ |
| Skýring undir stórri tölu (`.tile .sub`) | 12,5px | `#fffdf9` | **3,91** | 4,5 | ✕ |
| Eining við reit, „kr./mán." (`.unit`) | 13px | `#fffdf9` | **3,91** | 4,5 | ✕ |
| Fótur | 12,5px | `#f4efe6` | **3,47** | 4,5 | ✕ |

Þetta er kerfisbundin villa í einum lit, og hún lendir á **smæsta textanum á síðunni**, þeim sem útskýrir hvað á að gera í hverjum reit. Fyrir markhóp sem inniheldur eldra fólk er þetta versta mögulega staðsetning á lélegum litaskilum.

### Tillaga

**Eina breytingin sem þarf: `--muted`.**

| Gildi | Á `#fffdf9` | Á `#f4efe6` | Niðurstaða |
|---|---|---|---|
| `#8b7e69` (núverandi) | 3,91 | 3,47 | Fellur á báðum |
| `#7a6e5b` | 4,91 | 4,36 | Fellur naumlega á ljósbrúnu |
| **`#736853`** | **5,39** | **4,78** | **Stenst AA á báðum, með borð fyrir báru** |
| `#655c4b` | 6,49 | 5,76 | Stenst, en munurinn á `--ink-2` er orðinn lítill |

**`#736853`** er tillagan. Hún heldur stigveldinu (`--ink` 15,7 → `--ink-2` 7,6 → `--muted` 5,4) en lyftir minnsta textanum yfir kröfuna. Dökka stillingin þarf sams konar leiðréttingu.

Að auki: **hækka `.hint` og `.eyebrow` úr 11 og 11,5px í 12,5px.** Ellefu pixlar er of lítið fyrir þennan markhóp óháð litaskilum.

### Merking litanna

Ekki bæta við fleiri litum. Það er einn skýr áherslulitur, `--accent: #1266c4`, og hann er notaður rétt: skrefanúmer og valinn hnappur. Tveir vandamálastaðir í merkingu:

**1. Sami litur þýðir tvennt.** Seríulitirnir `--s1` til `--s6` eru bæði litir einstakra lána **og** litir dæmis A og B í samanburðarritinu:

```
--s1  #2a78d6   fyrsta lán notandans   OG   dæmi A í samanburði
--s2  #eb6834   annað lán notandans     OG   dæmi B í samanburði
```

Notandi með tvö lán í dæmi A sér því sömu tvo liti tákna „lán 1 og lán 2" á einum stað og „dæmi A og dæmi B" á öðrum. Tillaga: taka `--s1` og `--s2` frá fyrir dæmin og byrja lánaseríuna á `--s3`. Kostar ekkert.

**2. Dæmi A og B hafa tvo ólíka litakóða.** Í viðmótinu eru merkimiðarnir svartir (`#292018` á ljósu), í samanburðarritinu blár og appelsínugulur. Tillaga: lita merkimiðana í sömu liti og ritið notar.

**3. Grænt og rautt.** Dómarnir nota tákn og orð auk litar, sem er rétt. Eina athugasemdin er að grænt og rautt eru einnig notuð sem `--good` og `--bad` á spjaldabakgrunnum með 6% blöndun, sem er nógu dauft til að vera í lagi.

---

## Hvað virkar vel

Fjögur atriði sem standast skoðun og ættu ekki að breytast:

**Ástandið vistast sjálfkrafa og ferðast í hlekknum.** Ekkert tapast við endurhleðslu, og „Deila hlekk" pakkar öllum forsendum í slóðina án þess að nokkuð sé geymt á netþjóni. Ég notaði þennan eiginleika sjálf til að taka skjámyndir af persónunum: hann er nógu traustur til að vera verkfæri. Fáar íslenskar reiknivélar gera þetta.

**Raunkostnaður á verðlagi dagsins er aðalmælikvarðinn, ekki nafntalan.** Flestar reiknivélar birta uppsafnaða nafntölu sem hræðir fólk að ástæðulausu. Að velja réttari mælikvarðann og útskýra hvers vegna er efnisleg ákvörðun, ekki sjónræn.

**Viðmiðunargreiðsla Seðlabankans er reiknuð rétt.** 5,5% og 40 ár fyrir óverðtryggt, 3% og 25 ár fyrir verðtryggt, í stað þess að nota vextina sem notandinn slær inn. Þetta gera margar reiknivélar rangt, þar á meðal sumar hjá lánveitendum sjálfum.

**Dómur um hvort lán standist er ekki háður lit einum.** „Já" og „Nei" í orðum, ✓ og ✕ sem tákn, og prósentutala. Litblindur notandi fær sama svar.

Fræðslutextinn er líka betri en það sem bankarnir birta, sérstaklega molinn um hvernig greiðslumatið fer raunverulega fram. Vandamálið við hann er ekki gæðin heldur staðsetningin, sjá #13.
