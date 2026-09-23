#!/usr/bin/env bash
# Tekur skjámyndir af lánareikninum í tveimur breiddum.
#
# Playwright var ekki notað: hvorki Node né npm eru á þessari vél, svo
# "npm i -D playwright" gengur ekki upp án þess að setja Node upp fyrst.
# Chrome er hins vegar til staðar og getur tekið skjámyndir hauslaust.
# Ástand reiknivélarinnar ferðast í slóðinni sjálfri (#j= eða #d=), svo
# hægt er að hlaða hverja persónu beint án þess að fylla út reiti.
#
# ATH: Chrome í hauslausri stillingu klemmir gluggabreidd í 512px að lágmarki,
# svo ekki er hægt að taka mynd í 390px þaðan. Símamyndirnar eru því í 512px.
# Útlitið í 390px var staðfest sérstaklega í vafra með tækjahermun: engin
# lárétt yfirflæði, scrollWidth == innerWidth == 375.
#
# Keyrsla:  bash ux-review/taka-skjamyndir.sh

set -u
CHROME="C:/Program Files/Google/Chrome/Application/chrome.exe"
OUT='C:\Users\maria\Documents\GitHub\multabene\ux-review\screenshots'
UD='C:\Users\maria\AppData\Local\Temp\claude\chromeux'
BASE="https://www.multabene.is/lanareiknir/"

mkdir -p "/c/Users/maria/AppData/Local/Temp/claude/chromeux"

# Ástand hverrar persónu, pakkað í slóðina
A='j=eyJBIjp7ImxvYW5zIjpbeyJpZCI6MSwibmFtZSI6IkzDoW4gMSIsImluZGV4ZWQiOnRydWUsInBheW1lbnRUeXBlIjoiYW5udWl0ZXQiLCJjYXQiOiJmYXN0ZWlnbiIsInByaW5jaXBhbCI6NTcyNjc2MDAsInJhdGUiOjMuOSwieWVhcnMiOjQwLCJleHRyYU1vbnRobHkiOjAsImx1bXBBbW91bnQiOjAsImx1bXBZZWFyIjowLCJleHRyYU1vZGUiOiJzdHl0dGEifV0sImhhc0x0diI6dHJ1ZSwicHJpY2VCdXkiOjY1MDAwMDAwLCJlcXVpdHkiOlt7ImlkIjoyLCJuYW1lIjoiU3Bhcm5hw7B1ciIsImFtb3VudCI6ODAwMDAwMH1dLCJpbmNvbWUxIjo0ODAwMDAsImluY29tZTIiOjQyMDAwMCwiZmlyc3RCdXllciI6dHJ1ZSwiaW5mbGF0aW9uIjo1LjMsIm5leHRJZCI6OSwidmlldyI6ImJhbGFuY2UifSwiQiI6bnVsbCwiY21wVmlldyI6ImJhbGFuY2UifQ'
B='j=eyJBIjp7ImxvYW5zIjpbeyJpZCI6MSwibmFtZSI6IsONYsO6w7BhbMOhbmnDsCIsImluZGV4ZWQiOnRydWUsInBheW1lbnRUeXBlIjoiYW5udWl0ZXQiLCJjYXQiOiJmYXN0ZWlnbiIsInByaW5jaXBhbCI6MzIwMDAwMDAsInJhdGUiOjMuOSwieWVhcnMiOjI4LCJleHRyYU1vbnRobHkiOjMwMDAwLCJsdW1wQW1vdW50IjowLCJsdW1wWWVhciI6MCwiZXh0cmFNb2RlIjoic3R5dHRhIn1dLCJpbmNvbWUxIjozODAwMDAsImluY29tZTIiOjAsImluZmxhdGlvbiI6NS4zLCJuZXh0SWQiOjUsInZpZXciOiJiYWxhbmNlIn0sIkIiOm51bGwsImNtcFZpZXciOiJiYWxhbmNlIn0'
C='d=7ZLBattAEIZfJfznJdiJXcje7IYUQwKhlEIpOUyksbVkNVJ3Z10Lk6foE-QN-g5-saKV7IYceug5e9L369-dGebfYwG7h29IIuz3PVwJOzUQqhkWt4cXOZvCwEnJOy5hNSQ2aKmrWfRL1_YuEklOWWFQkMJiTVHZbQQGbXBSuJY87Gw-yccgkDLs5fmVQccUIuxsYsA7DXTXiFa-g50Y-FS3i7pJoif8xhQyjOayrx-1UyU8PxgEFiXfj_JgUFH8fOQ1-cjD_5VcR3XHUdYuzzX6bwYa3RXFW92esA2u4GUamsuwiJFj_MtDuTsKT6xv1Vde_pGcdkNRaVoaPyN5vu8vZFNPN8z3hcJeGDym7mMTdRyZkjY4idlfUfxUn3qlMnmNeZdF5XwZWLIrJBEnm7E273RV5uedrD2pawR2fn7Zc9HUPIWdfxh2NggXsLOrQWi04rDKan557ULUZeo4nJrYOv4Ji0fyJAXj2WD5r7Qdfm05HH5r6DYbPfOHF3mdvOMS3qP3Hr3_iV5Rt1_fiH8A'

skot () {  # skot <nafn> <breidd> <hæð> <slóð>
  "$CHROME" --headless=new --disable-gpu --no-sandbox --hide-scrollbars \
    --user-data-dir="$UD" --virtual-time-budget=6000 \
    --window-size="$2,$3" --screenshot="$OUT\\$1.png" "$4" 2>&1 | grep -i "written\|error" | head -1
}

# Tómt eyðublað, það sem nýr notandi sér fyrst
skot 01-tomt-fold-1440       1440  900  "$BASE"
skot 02-tomt-oll-1440        1440 7000  "$BASE"
skot 03-tomt-fold-simi        512  900  "$BASE"
skot 04-tomt-oll-simi         512 11000 "$BASE"

# Persóna A: fyrstu kaupendur
skot 05-personaA-fold-1440   1440  900  "$BASE#$A"
skot 06-personaA-oll-1440    1440 9500  "$BASE#$A"

# Persóna B: aukagreiðsla, sími
skot 07-personaB-fold-simi    512  900  "$BASE#$B"
skot 08-personaB-oll-simi     512 12500 "$BASE#$B"

# Persóna C: samanburður verðtryggt og óverðtryggt
skot 09-personaC-oll-1440    1440 11000 "$BASE#$C"
skot 10-personaC-fold-simi    512  900  "$BASE#$C"

ls -la "/c/Users/maria/Documents/GitHub/multabene/ux-review/screenshots/"
