# Firebase-reglur fyrir Travel

Þessar reglur ráða hver má lesa og skrifa hvað í gagnagrunninum. Þær þarf að líma inn
í Firebase einu sinni, eftir hverja stærri breytingu á Travel. Núverandi útgáfa gerir ráð fyrir:

- `travel/trips/{ferð}`: áætlunin. Allir með hlekk lesa. Eigandi og ritstjórar breyta færslum,
  hugmyndum og þátttakendum. Gestir mega bara bæta við tillögu, hugmynd og línu í breytingasögu.
- `travel/team/{ferð}`: pökkun og verkefni. Aðeins eigandi og ritstjórar lesa og skrifa.
- `travel/private/{ferð}`: bókunarnúmer, verð, kostnaðarskipting, Mikilvægt. Aðeins eigandi.
- `travel/editkeys/{ferð}`: ritstjóralykillinn. Aðeins eigandi.
- `travel/claims/{ferð}/{notandi}`: innskráður notandi skráir lykilinn sem hann fékk. Ef hann
  passar við `editkeys` er notandinn ritstjóri. Eigandi getur eytt kröfum (afturkalla).

Hlutarnir `data`, `veidi` og `hittumst` eru óbreyttir frá því sem var.

## Skref fyrir skref

1. Opnaðu https://console.firebase.google.com og veldu verkefnið `min-timer-multabeneis`.
2. Í vinstri dálki: **Build** og svo **Realtime Database**.
3. Efst á síðunni eru flipar: **Data**, **Rules**, **Backups**, **Usage**. Smelltu á **Rules**.
4. Í stóra textareitnum er núverandi texti. Smelltu í reitinn, veldu allt (Ctrl+A á Windows,
   Cmd+A á Mac) og eyddu.
5. Afritaðu allan textann hér fyrir neðan, frá fyrsta `{` til síðasta `}`, og límdu í reitinn.
6. Smelltu á **Publish** fyrir ofan reitinn. Ef hnappurinn er grár eða rauð villa birtist,
   vantar líklega staf í afritunina. Reyndu aftur frá skrefi 4.
7. Opnaðu ferð á www.multabene.is/travel/ og endurhladdu. Undir **Stillingar** á "Einkahólf"
   að standa "opið" og undir "Ritstjórahlekkur" á að vera hnappurinn "Búa til ritstjórahlekk".

## Reglurnar

```json
{
  "rules": {
    "data": { ".read": true, ".write": true },
    "veidi": { ".read": true, ".write": true },
    "hittumst": { ".read": true, ".write": true },
    "travel": {
      "users": {
        "$uid": {
          ".read": "auth != null && auth.uid == $uid",
          ".write": "auth != null && auth.uid == $uid"
        }
      },
      "trips": {
        "$tid": {
          ".read": true,
          ".write": "auth != null && ((!data.exists() && newData.child('owner').val() == auth.uid) || data.child('owner').val() == auth.uid)",
          "items": {
            ".write": "auth != null && root.child('travel/editkeys').child($tid).exists() && root.child('travel/claims').child($tid).child(auth.uid).val() == root.child('travel/editkeys').child($tid).val()"
          },
          "people": {
            ".write": "auth != null && root.child('travel/editkeys').child($tid).exists() && root.child('travel/claims').child($tid).child(auth.uid).val() == root.child('travel/editkeys').child($tid).val()"
          },
          "ideas": {
            "$iid": {
              ".write": "(!data.exists() && newData.exists()) || (auth != null && root.child('travel/editkeys').child($tid).exists() && root.child('travel/claims').child($tid).child(auth.uid).val() == root.child('travel/editkeys').child($tid).val())"
            }
          },
          "suggestions": {
            "$sid": { ".write": "!data.exists() && newData.exists()" }
          },
          "log": {
            "$lid": { ".write": "!data.exists() && newData.exists() && newData.hasChildren(['at','by','what'])" }
          },
          "editors": {
            "$uid": {
              ".write": "auth != null && auth.uid == $uid && root.child('travel/editkeys').child($tid).exists() && root.child('travel/claims').child($tid).child(auth.uid).val() == root.child('travel/editkeys').child($tid).val()"
            }
          }
        }
      },
      "team": {
        "$tid": {
          ".read": "auth != null && (root.child('travel/trips').child($tid).child('owner').val() == auth.uid || (root.child('travel/editkeys').child($tid).exists() && root.child('travel/claims').child($tid).child(auth.uid).val() == root.child('travel/editkeys').child($tid).val()))",
          ".write": "auth != null && (root.child('travel/trips').child($tid).child('owner').val() == auth.uid || (root.child('travel/editkeys').child($tid).exists() && root.child('travel/claims').child($tid).child(auth.uid).val() == root.child('travel/editkeys').child($tid).val()))"
        }
      },
      "editkeys": {
        "$tid": {
          ".read": "auth != null && root.child('travel/trips').child($tid).child('owner').val() == auth.uid",
          ".write": "auth != null && root.child('travel/trips').child($tid).child('owner').val() == auth.uid"
        }
      },
      "claims": {
        "$tid": {
          ".read": "auth != null && root.child('travel/trips').child($tid).child('owner').val() == auth.uid",
          ".write": "auth != null && root.child('travel/trips').child($tid).child('owner').val() == auth.uid",
          "$uid": {
            ".read": "auth != null && auth.uid == $uid",
            ".write": "auth != null && auth.uid == $uid && newData.isString() && root.child('travel/editkeys').child($tid).exists() && newData.val() == root.child('travel/editkeys').child($tid).val()"
          }
        }
      },
      "private": {
        "$tid": {
          ".read": "auth != null && root.child('travel/trips').child($tid).child('owner').val() == auth.uid",
          ".write": "auth != null && root.child('travel/trips').child($tid).child('owner').val() == auth.uid"
        }
      }
    }
  }
}
```

## Hvað breyttist frá fyrri reglum

- `trips/$tid/packing` er horfið. Pökkun er nú í `team`, sem gestir lesa ekki. Eldri listar
  flytjast sjálfkrafa þegar eigandi opnar ferðina.
- `items`, `people`, `ideas` (breyta og eyða) og `editors`: ritstjórar fá skrifrétt.
- `log`: allir mega bæta við línu, enginn má breyta eða eyða (eigandi þó, í gegnum ferðina).
- `team`, `editkeys`, `claims`: nýir hlutar.
