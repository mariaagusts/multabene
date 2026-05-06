// Shared content for all three House Manual designs.
// Edit copy in one place, all three directions update.

window.MANUAL = {
  meta: {
    house: "Byggakur 12",
    location: "210 Garðabær, Iceland",
    mapUrl: "https://goo.gl/maps/AwKvTrRU7ErZuRXt9",
    host: "María Ágústsdóttir",
    email: "mariaagusts@gmail.com",
    phone: "+354 844 2770",
    wifiName: "B12",
    wifiPass: "06030112",
    keyBoxCode: "0312",
    greenhouseCode: "121",
    checkin: "4:00 PM",
    checkout: "11:00 AM",
  },

  emergency: {
    number: "112",
    label: "Police · Fire · Ambulance",
    safetravel: "https://safetravel.is/",
    weather: "https://en.vedur.is/",
    nearestHospital: "Landspítali, Fossvogur, ~10 min drive",
  },

  hospital: {
    name: "Landspítali, Fossvogur",
    address: "Fossvogsvegur, 108 Reykjavík",
    drive: "~10 minutes by car from the house",
    phone: "+354 543 1000",
    note: "Iceland's main hospital. The Fossvogur branch handles A&E (er. emergency room / bráðamóttökuna). Walk-in is fine, no need to call ahead. Most staff speak excellent English.",
    map: "https://goo.gl/maps/QYbY7v9YJZcEYY7H7",
    clinic: "For minor issues, the closer local clinic is Heilsugæsla Garðabæjar at Garðatorg.",
    pharmacy: "Closest pharmacy: Lyfja at Garðatorg. Most convenient is the drive-through Car-Pharmacy (Apótekarinn) at Hlíðasmári in Kópavogur.",
  },

  qr: {
    headline: "Always have this guide on you",
    body: "There's a small printed card on the kitchen counter. Scan its QR code to open this manual on your phone. Bookmark it. The page works offline once loaded.",
  },

  photos: [
    { id: "front-door", label: "Front door & key box", note: "The door, the key box mounted above the trash shelter, and the right hand-lifting motion. One wide shot or two close-ups." },
    { id: "hot-tub-faucet", label: "Hot tub faucet (garage)", note: "The two knobs in the garage. Left handle for power, right knob preset to 42°C. Annotate with arrows if possible." },
    { id: "hot-tub-drain", label: "Hot tub drain", note: "The drain handle underneath the steps, in both open and closed positions." },
    { id: "laundry", label: "Laundry machines", note: "All three machines in a row, with the pre-loaded one labelled. Show the dryer's water tank top-left." },
    { id: "coffee", label: "Coffee machine controls", note: "On/off button and the hot-water knob. A second shot of the milk frother on the side." },
    { id: "fuse-box", label: "Fuse box", note: "Where it lives + a labelled close-up of the breakers, in case anything trips." },
    { id: "trash-bins", label: "Trash & recycling bins", note: "All three bins from the front, with labels matching the manual: regular, plastic, paper." },
    { id: "bbq-gas", label: "BBQ & spare gas", note: "The BBQ on the patio with the spare gas tank visible on the right side." },
  ],

  seasons: {
    winter: {
      label: "Winter (Oct to Mar)",
      icon: "snow",
      headline: "Short days, long nights, possible aurora.",
      tips: [
        "Daylight is precious. In December the sun is up only ~4 to 5 hours. Plan outings for late morning to early afternoon.",
        "Roads can ice over fast. Check road.is before driving anywhere outside the city.",
        "Studded tyres are standard on rentals from Nov to Apr. Confirm yours has them.",
        "Bring or buy proper crampons. Even the sidewalks get glassy.",
        "Best aurora odds: Oct, Feb, Mar.",
        "Pools and the Sky Lagoon are at their best when it's freezing out.",
      ],
    },
    summer: {
      label: "Summer (May to Aug)",
      icon: "sun",
      headline: "Endless light, open highlands, no aurora.",
      tips: [
        "Around the solstice the sun barely sets. Bring a sleep mask, the bedrooms have blackout curtains but light still leaks.",
        "The aurora is invisible mid-May to mid-August. Don't bother chasing it.",
        "F-roads (highland routes) usually open mid-June to mid-September. 4x4 only.",
        "Puffins arrive at coastal cliffs (Vík, Látrabjarg) from May to August.",
        "Best midnight-sun spots near the house: Grótta lighthouse, Heiðmörk forest, the south-facing windows of our greenhouse.",
        "Whales are most active May to Sep. Great time to book Elding from the old harbour.",
      ],
    },
    shoulder: {
      label: "Shoulder (Apr & Sep)",
      icon: "leaf",
      headline: "The local's secret. Quiet, mixed weather, both worlds.",
      tips: [
        "April: late aurora season, but daylight is back. You can road-trip and chase lights in the same day.",
        "September: highlands still open early in the month, autumn colours peak around the 15th.",
        "Crowds are thinnest. Golden Circle and South Coast feel almost private.",
        "Weather is the most volatile of the year. Layer aggressively.",
        "Restaurants are easier to book; some seasonal tour operators stop late September.",
      ],
    },
  },

  kids: {
    headline: "Travelling with kids?",
    body: "There are board games and colouring supplies under the second-floor TV, and summer toys to the right of the BBQ. The neighbourhood is quiet, with a small park, football pitch and basketball court at the end of the street.",
    spots: [
      { name: "Reykjavík Park & Zoo", note: "Small but lovely. Native animals, a few rides. Kids 2 to 10 love it.", url: "https://www.mu.is/en" },
      { name: "Perlan", note: "Indoor ice-cave, planetarium, and a glacier exhibit. Great rainy-day plan.", url: "https://perlan.is" },
      { name: "Lava Show", note: "Real molten lava poured indoors, just feet away. Genuinely thrilling. Two locations: Reykjavík and Vík.", url: "https://lavashow.com" },
      { name: "Ásgarðslaug pool", note: "Walking distance. Kids' area, shallow pools, hot pots." },
      { name: "Álftaneslaug pool", note: "Wave machine. Kids' favourite." },
      { name: "Whales of Iceland", note: "Walk-around life-size whale models. Quietly amazing for under-7s.", url: "https://whalesoficeland.is" },
      { name: "FlyOver Iceland", note: "Simulator ride over Iceland. Short, thrilling, indoor.", url: "https://www.flyovericeland.com" },
    ],
    practical: [
      "Tap water is safe straight from the cold tap. Fill bottles, no need to buy.",
      "Pharmacies stock children's painkillers and basic medicine. Closest is Lyfja at Garðatorg, but the most convenient is the drive-through Car-Pharmacy at Hlíðasmári in Kópavogur.",
      "Most restaurants have high-chairs and kids' menus by default; no need to call ahead.",
      "Kids ride free on Strætó (city buses) under 6, half-price 6 to 17.",
      "Public pools are extremely kid-friendly. Just shower fully naked before entering (Icelandic rule, no exceptions).",
      "My own daughters (12 and 14) have grown up with all of these spots. They can vouch.",
    ],
  },

  toc: [
    { id: "welcome", label: "Welcome" },
    { id: "arrival", label: "Arrival & key" },
    { id: "essentials", label: "Essentials" },
    { id: "house", label: "Inside the house" },
    { id: "outdoors", label: "Outdoors & hot tub" },
    { id: "rules", label: "House rules" },
    { id: "photos", label: "Photo reference" },
    { id: "neighbourhood", label: "Neighbourhood" },
    { id: "kids", label: "Travelling with kids" },
    { id: "restaurants", label: "Where to eat" },
    { id: "todo", label: "Things to do" },
    { id: "itineraries", label: "Itineraries" },
    { id: "aurora", label: "Northern Lights" },
    { id: "driving", label: "Driving in Iceland" },
    { id: "phrases", label: "Icelandic phrases" },
    { id: "seasonal", label: "By season" },
    { id: "hospital", label: "Hospital & pharmacy" },
    { id: "checkout", label: "Before you go" },
  ],

  welcome: {
    headline: "Welcome to my home",
    body: "I hope you have a fantastic stay and an amazing time in Iceland. I live in this house with my two daughters (12 and 14), it's not a rental property, so you'll find it stocked like a real home. Please make yourself comfortable, and let me know if there's anything I can do to make your trip even better. I'm easily reachable by phone, text or email.",
    signoff: "María",
  },

  arrivalChecklist: [
    { title: "Find the key box", body: "It's mounted above the trash-bin shelter, opposite the front door. Code: 0312. Slide the cover, enter the code, key drops out." },
    { title: "Lock the front door properly", body: "Pull the handle UP first, then turn the key. The bolt won't engage otherwise." },
    { title: "Shoes off", body: "Icelandic homes are shoes-off. The downstairs hardwood and living-room rug are sensitive to water." },
    { title: "Connect to Wi-Fi", body: "Network: B12 · Password: 06030112" },
    { title: "Climate", body: "If too warm, open windows. If too cold, close them. The house has floor heating, which reacts slowly to changes, so give it a bit of time before adjusting again." },
    { title: "Say hi", body: "Text María at +354 844 2770 once you're in, even just to confirm everything's good." },
  ],

  quickFacts: [
    { label: "Wi-Fi", value: "B12", sub: "06030112" },
    { label: "Key box", value: "0312", sub: "above trash shelter" },
    { label: "Check-in", value: "4 PM", sub: "Check-out 11 AM" },
    { label: "Greenhouse", value: "121", sub: "if locked" },
    { label: "Parking", value: "3 cars", sub: "in driveway" },
    { label: "Tap water", value: "Drink it!", sub: "safe & cold" },
  ],

  essentials: {
    wifi: { name: "B12", pass: "06030112", note: "Recently upgraded, should be very fast." },
    parking: "The driveway fits up to three cars.",
    rubbish: "Three bins out front: regular trash + food waste (left), plastic recycling (middle), paper & card (right). If full, use the third door on the right and we'll take care of it.",
    smoking: "No smoking inside the house, please.",
  },

  insideHouse: [
    {
      title: "Kitchen",
      body: "The microwave sits above the main oven. Press 'Menu' to switch to Microwave mode. Dishwasher is under the sink, on the left. You'll find utensils, condiments, oil, coffee and tea. Please help yourself to anything in the cupboards.",
      tip: "The coffee machine doubles as a hot-water tap (turn the knob after switching it on, ~2 min warmup).",
    },
    {
      title: "Coffee machine",
      body: "Press the on/off button and please be gentle with it, it sometimes takes a few seconds to wake up. It rinses for ~30s before it's ready. Refill water from the tap, empty the drip bin when prompted, uses beans from the hopper. Milk frother is on the inside, please put the milk in the fridge after use.",
    },
    {
      title: "Laundry",
      body: "On the second floor. The middle washing machine is pre-loaded with detergent and softener, just pick a program and press play. The left one needs detergent (cupboard above). Dryer stops itself; if it pauses, the water tank (top-left) is probably full, empty it in the sink.",
      tip: "Please strip the linens from any beds you used before leaving, it tells us which rooms to redo.",
    },
    {
      title: "Showers & bath",
      body: "Showers are powerful. If water starts pooling, lower the pressure. For the bathtub, run the water for ~10 seconds before plugging the drain (the pipes need a moment to flush clear). The fan switch in each bathroom helps cut the steam.",
    },
    {
      title: "Heating & climate",
      body: "There's no AC (no homes in Iceland have it). The house runs on floor heating, which is automatic and reacts slowly to changes. If it's too warm, open windows on both sides of the house, the cross-breeze cools quickly. If too cold, close them.",
    },
    {
      title: "Music & TV",
      body: "Sonos system throughout. Download the Sonos app and stream Spotify to the house speakers. Netflix is signed in on the TV.",
    },
    {
      title: "Amenities",
      body: "Shampoo, conditioner and body wash live under the shower. WC paper is in the cupboard next to each toilet. Steam iron and extra towels/linens are in the laundry room. This is my primary residence, most things you'd need are probably already here. Just ask.",
    },
    {
      title: "Plugs & adapters",
      body: "Plenty of iPhone/Samsung cables around the house. For anything else, just ask, I probably have it!",
    },
  ],

  outdoors: {
    hotTub: {
      summary: "Five steps to fill it.",
      steps: [
        "Close the drain, it's outside, underneath the hot tub steps. Turn the handle to the closed position.",
        "Open the faucet in the garage (white door inside the downstairs bedroom). The temperature is pre-set on the right knob to 42°C, which is what I like, it's quite hot. Turn the LEFT handle for full power.",
        "Once the tub is filled, close the faucet.",
        "Enjoy. The tub doesn't have bubble jets, just a hot soak.",
        "When done, open the drain (the opposite direction from step 1).",
      ],
      cooldown: "If it gets too hot, turn off the LEFT handle in the garage and the water will cool down naturally over time.",
    },
    bbq: "On the patio. Remember to shut off the gas after use. There's an extra gas tank on the right side of the BBQ. If that also runs out (shouldn't be needed), swap the empty tank at any N1 (red) gas station, bring the empty one, pay only for the gas.",
    greenhouse: "Code 121 if locked (I lock it in heavy winds). Note that the greenhouse is not noise-proof, so please keep voices low in the garden, especially after 10 PM. My neighbours' bedrooms face this side and they've asked me to mention this.",
    cameras: "Arlo cameras outside only, none inside. The patio camera doesn't cover the hot tub. Feel free to take them down if you'd prefer. I mute all notifications except the doorbell.",
  },

  rules: [
    { icon: "shoes", title: "Shoes off inside", body: "Hardwood floors and a sensitive living-room rug." },
    { icon: "moon", title: "Quiet 10 PM to 8 AM", body: "Many young families on the street, and neighbours' bedrooms face the garden and the driveway." },
    { icon: "smoke", title: "No smoking", body: "Anywhere inside the house." },
    { icon: "lock", title: "Lift handle, then lock", body: "The front-door bolt only engages with the handle up." },
    { icon: "rug", title: "Mind the living-room rug", body: "Even water marks it. Especially after the hot tub." },
    { icon: "key", title: "Key back in box at checkout", body: "Same code: 0312." },
  ],

  neighbourhood: {
    name: "Akrar / Akraland",
    summary: "A quiet, family-friendly neighbourhood in Garðabær, 'the land of fields'. Safe, walkable, and a short drive from central Reykjavík.",
    nearby: [
      { name: "Krónan", type: "Low-cost supermarket", note: "Right on the way in." },
      { name: "Brauð & Co", type: "Bakery", note: "Sourdough straight from the oven, next to Krónan." },
      { name: "Bónus", type: "Cheapest groceries in Iceland", note: "At Garðatorg. Yellow sign with a pink pig." },
      { name: "Hagkaup", type: "Large supermarket", note: "Open 24/7. Not low-cost." },
      { name: "Garðatorg", type: "Town plaza", note: "Restaurants, pharmacy, dry-cleaner, ice-cream, small shops." },
      { name: "Smáralind", type: "Shopping centre", note: "Variety of shops & a food hall. Short drive." },
      { name: "End of street", type: "Small park", note: "Football pitch, basketball court, playground." },
    ],
    transport: {
      taxi: ["+354 588 5522"],
      taxiNote: "Stick to Hreyfill (+354 588 5522), a registered taxi firm with fixed prices. The local taxi market was deregulated a few years ago and turned into a bit of a cowboy market. Anyone can set their own price, so unmarked cars or 'private' drivers can charge whatever they like. There's no Uber in Iceland.",
      bus: "Bus #1 from the nearby stop runs straight downtown.",
      busUrl: "https://straeto.is/en",
    },
  },

  restaurants: {
    nearby: [
      { name: "Mathús Garðabæjar", type: "Bistro & fine dining", note: "Local favourite. 15 min walk / 5 min drive.", map: "https://maps.google.com/?q=Math%C3%BAs+Gar%C3%B0ab%C3%A6jar" },
      { name: "Te & Kaffi", type: "Coffee & wine", note: "Open evenings, serves alcohol.", map: "https://maps.google.com/?q=Te+%26+Kaffi+Gar%C3%B0at%C3%B3rg" },
      { name: "Flatey", type: "Italian sourdough pizza", note: "Sourdough crust, not thin-crust. Excellent.", map: "https://maps.google.com/?q=Flatey+Pizza+Reykjav%C3%ADk" },
      { name: "Huppa", type: "Ice cream", note: "Try a 'bragðarefur', ice cream with mixed-in candy.", map: "https://maps.google.com/?q=Huppa+ice+cream+Garðabær" },
    ],
    reykjavik: [
      { name: "Snaps Bistro", type: "Classic French brunch", tag: "brunch", map: "https://maps.google.com/?q=Snaps+Bistro+Reykjav%C3%ADk" },
      { name: "Fish Company", type: "Modern Icelandic seafood", tag: "fine", map: "https://maps.google.com/?q=Fish+Company+Reykjav%C3%ADk" },
      { name: "Grill Market", type: "Wood-fired Icelandic", tag: "fine", map: "https://maps.google.com/?q=Grillmarka%C3%B0urinn+Reykjav%C3%ADk" },
      { name: "The Fish Market", type: "Asian-Icelandic fusion", tag: "fine", map: "https://maps.google.com/?q=Fiskmarka%C3%B0urinn+Reykjav%C3%ADk" },
      { name: "Apótek", type: "Restaurant in old pharmacy", tag: "casual", map: "https://maps.google.com/?q=Ap%C3%B3tek+Restaurant+Reykjav%C3%ADk" },
      { name: "ROK", type: "Small plates, Icelandic", tag: "casual", map: "https://maps.google.com/?q=ROK+Restaurant+Reykjav%C3%ADk" },
      { name: "Monkeys", type: "Asian fusion", tag: "casual", map: "https://maps.google.com/?q=Monkeys+Restaurant+Reykjav%C3%ADk" },
      { name: "Sushi Social", type: "Sushi & cocktails", tag: "casual", map: "https://maps.google.com/?q=Sushi+Social+Reykjav%C3%ADk" },
      { name: "Austur-Indiafjelagid", type: "Indian", tag: "world", map: "https://maps.google.com/?q=Austur+Indiafjelagid" },
      { name: "Tres Locos", type: "Mexican", tag: "world", map: "https://maps.google.com/?q=Tres+Locos+Reykjav%C3%ADk" },
    ],
    foodHalls: [
      { name: "Hlemmur Mathöll", type: "Food hall", note: "The original. Skál, Flatey Pizza, fish & chips, ramen, more.", map: "https://maps.google.com/?q=Hlemmur+Math%C3%B6ll" },
      { name: "Hafnartorg", type: "Harbour-side dining", note: "Several good spots clustered around the new harbour square.", map: "https://maps.google.com/?q=Hafnartorg+Reykjav%C3%ADk" },
      { name: "Apótek food hall (Pósthús)", type: "Downtown food hall", note: "In the old post office, central Reykjavík.", map: "https://maps.google.com/?q=P%C3%B3sth%C3%BAs+Math%C3%B6ll" },
      { name: "Smáralind food hall", type: "Mall food hall", note: "Closest to the house, in the shopping centre.", map: "https://maps.google.com/?q=Sm%C3%A1ralind+food+hall" },
    ],
    reservations: "Book ahead at https://www.dineout.is, popular spots fill up.",
    booze: "Wine & beer aren't sold in supermarkets. Easiest: pick up at duty-free on landing. Otherwise search 'Vínbúðin' on Maps.",
  },

  todo: [
    { name: "Sky Lagoon", type: "Geothermal lagoon", note: "Highly recommended, adults-only, ocean-edge.", url: "https://skylagoon.com" },
    { name: "Blue Lagoon", type: "Iconic spa", note: "Tourist classic. Book well in advance.", url: "https://www.bluelagoon.com" },
    { name: "Lava Show", type: "Live lava demo", note: "Real molten lava poured indoors, in Reykjavík or Vík. Genuinely thrilling.", url: "https://lavashow.com" },
    { name: "Perlan", type: "Museum & viewpoint", note: "Wonders of Iceland exhibits, ice cave, planetarium.", url: "https://perlan.is" },
    { name: "FlyOver Iceland", type: "Simulator ride", note: "10 minutes, indoor, all ages. Surprisingly good.", url: "https://www.flyovericeland.com" },
    { name: "Whale watching", type: "Boat trip", note: "Elding from the old harbour. Best May to Sep.", url: "https://elding.is" },
    { name: "Whales of Iceland", type: "Indoor exhibit", note: "Life-size whale models. Walk-around. Quietly amazing.", url: "https://whalesoficeland.is" },
    { name: "Reykjavík Park & Zoo", type: "For kids", note: "Small, charming, with rides." },
    { name: "Ásgarðslaug", type: "Local pool", note: "Walking distance, Icelanders love their pools." },
    { name: "Álftaneslaug", type: "Pool with wave machine", note: "Near the presidential residence." },
    { name: "Laugardalslaug", type: "Biggest pool in Reykjavík", note: "Multiple hot pots, big slides." },
    { name: "Hallgrímskirkja", type: "Iconic church + tower", note: "Take the elevator up for the best city view." },
  ],

  itineraries: [
    {
      length: "1 day",
      title: "Reykjavík + Sky Lagoon",
      stops: [
        "Morning: Hallgrímskirkja, Harpa, Laugavegur stroll",
        "Lunch: Skál at Hlemmur food hall",
        "Afternoon: Perlan museum & viewpoint",
        "Evening: Sky Lagoon (book the 'Ritual' package)",
        "Dinner: Fish Company or Grill Market",
      ],
    },
    {
      length: "3 days",
      title: "Golden Circle + South Coast",
      stops: [
        "Day 1: City + Sky Lagoon (above)",
        "Day 2: Golden Circle. Þingvellir → Geysir → Gullfoss → Secret Lagoon",
        "Day 3: South Coast. Seljalandsfoss → Skógafoss → Reynisfjara black-sand beach → Vík",
      ],
    },
    {
      length: "Day trip",
      title: "Snæfellsnes peninsula",
      stops: [
        "Often called 'Iceland in miniature'. About 2hrs drive each way.",
        "Kirkjufell mountain & Kirkjufellsfoss waterfall",
        "Arnarstapi cliffs and the coastal walk to Hellnar",
        "Black church at Búðir",
        "Djúpalónssandur black-pebble beach",
        "Lunch in Stykkishólmur, the prettiest town on the peninsula",
      ],
    },
  ],

  aurora: {
    season: "Late August through mid-April. Peak: October to March.",
    tips: [
      "Check the forecast at vedur.is/aurora. A score of 3+ with clear skies is what you want.",
      "Get away from streetlights. The greenhouse view + a short drive to Álftanes works well.",
      "Be patient. They often appear, fade, then return stronger 30 minutes later.",
      "Phone cameras (night mode, 3 to 10 second exposure) capture them better than your eyes do.",
      "Dress for -5 to -15°C and wind.",
    ],
  },

  driving: {
    summary: "Roads are well-maintained but conditions change fast. The basics:",
    tips: [
      "road.is, live road conditions and closures. Check before any drive.",
      "Headlights on at all times, by law.",
      "Single-lane bridges are common. First car to the bridge has right of way.",
      "F-roads (mountain roads) require a 4x4 and are summer-only. Rental contracts forbid 2WD on them.",
      "Wind can rip car doors off. Open them carefully, especially at exposed gas stations.",
      "Speed cameras are common; speeding fines are steep (~€200+).",
      "Fill up whenever you see a station outside the city. They're sparse in the highlands.",
      "If a road is marked 'Impassable', do not attempt it. People die every year ignoring this.",
      "Please do NOT stop at the side of the road for photos. Even when roads look like quiet country lanes, they are often high-speed routes (90 km/h) and pull-overs cause serious crashes. Use the marked viewpoints and lay-bys instead.",
      "WARNING at Reynisfjara (the black sand beach near Vík): do NOT go close to the ocean. 'Sneaker waves' surge up the beach without warning and have killed people, most recently a 10-year-old German girl. Stay well back from the water, always.",
    ],
  },

  phrases: [
    { is: "Halló / Hæ", en: "Hello / Hi", say: "ha-LO / hi" },
    { is: "Takk", en: "Thanks", say: "tahk" },
    { is: "Takk fyrir", en: "Thank you", say: "tahk FIH-rir" },
    { is: "Já / Nei", en: "Yes / No", say: "yow / nay" },
    { is: "Afsakið", en: "Excuse me / Sorry", say: "AHF-sa-kith" },
    { is: "Bless", en: "Goodbye", say: "bless" },
    { is: "Skál!", en: "Cheers!", say: "skowl" },
    { is: "Gjörðu svo vel", en: "Here you go / You're welcome", say: "GYUR-thu svo vel" },
    { is: "Góðan daginn", en: "Good day / Hello (formal)", say: "GO-than DA-yin" },
    { is: "Hvað kostar þetta?", en: "How much is this?", say: "kvath KOS-tar THET-ta" },
    { is: "Klósett", en: "Toilet", say: "KLOH-sett" },
    { is: "Sundlaug", en: "Swimming pool", say: "SUND-loig" },
  ],

  checkout: [
    { title: "Strip used beds", body: "Just the rooms you slept in, leave the linens on the floor." },
    { title: "Lock up", body: "Front door: lift handle UP, then turn the key." },
    { title: "Key back in the box", body: "Code 0312, same as arrival." },
    { title: "Text María", body: "+354 844 2770, just a quick 'we're out, thank you!'" },
  ],

  food: {
    delivery: [
      { name: "Wolt", url: "https://wolt.com", note: "Restaurant delivery, this covers basically everything. My personal favourite to order in is Flatbakan." },
    ],
  },

  pools: [
    { name: "Ásgarðslaug", note: "Walking distance." },
    { name: "Álftaneslaug", note: "Near presidential residence." },
    { name: "Kópavogslaug", note: "We use this often." },
    { name: "Laugardalslaug", note: "Biggest in Reykjavík." },
  ],
};
