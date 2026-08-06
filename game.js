const SAVE_KEY = "ageOfOlympusSaveV010";

const gods = [
  {
    id: "zeus",
    name: "Zeus",
    symbol: "⚡",
    title: "King of Olympus",
    description: "Master storms, authority, and sacred law.",
    bonus: "Miracles generate +20% Faith.",
    color: "#f5c76b"
  },
  {
    id: "athena",
    name: "Athena",
    symbol: "🦉",
    title: "Goddess of Wisdom",
    description: "Guide cities through knowledge and strategy.",
    bonus: "City actions cost 5 less Favor.",
    color: "#9ebcff"
  },
  {
    id: "poseidon",
    name: "Poseidon",
    symbol: "🔱",
    title: "Lord of the Seas",
    description: "Rule trade, earthquakes, and the ocean.",
    bonus: "Coastal cities produce extra Gold.",
    color: "#67d4e8"
  },
  {
    id: "aphrodite",
    name: "Aphrodite",
    symbol: "🕊️",
    title: "Goddess of Love",
    description: "Win devotion through beauty and harmony.",
    bonus: "Answered prayers gain extra Loyalty.",
    color: "#ff9bc8"
  },
  {
    id: "ares",
    name: "Ares",
    symbol: "🗡️",
    title: "God of War",
    description: "Grow through conquest, courage, and fear.",
    bonus: "Intimidation is stronger and cheaper.",
    color: "#ff756e"
  },
  {
    id: "hades",
    name: "Hades",
    symbol: "💀",
    title: "Lord of the Underworld",
    description: "Command riches, oaths, and the dead.",
    bonus: "Gain Gold whenever a prayer is refused.",
    color: "#bd91ff"
  }
];

const cityTemplates = [
  { id: "athens", name: "Athens", symbol: "🏛️", trait: "Center of wisdom", population: 850, devotion: 22, loyalty: 20, unrest: 14, gold: 38, coastal: true, rival: "Athena" },
  { id: "sparta", name: "Sparta", symbol: "🛡️", trait: "Land of warriors", population: 620, devotion: 14, loyalty: 15, unrest: 24, gold: 24, coastal: false, rival: "Ares" },
  { id: "corinth", name: "Corinth", symbol: "⛵", trait: "Wealthy trade port", population: 720, devotion: 18, loyalty: 18, unrest: 17, gold: 52, coastal: true, rival: "Poseidon" },
  { id: "thebes", name: "Thebes", symbol: "🦁", trait: "Proud ancient kingdom", population: 680, devotion: 16, loyalty: 16, unrest: 21, gold: 31, coastal: false, rival: "Dionysus" },
  { id: "delphi", name: "Delphi", symbol: "🔮", trait: "Home of the oracle", population: 430, devotion: 28, loyalty: 25, unrest: 8, gold: 27, coastal: false, rival: "Apollo" },
  { id: "crete", name: "Crete", symbol: "🐂", trait: "Island of old mysteries", population: 760, devotion: 12, loyalty: 12, unrest: 26, gold: 45, coastal: true, rival: "None" }
];

const prayerTemplates = [
  { title: "A Child Is Gravely Ill", text: "A mother begs for a miracle before sunset.", kind: "healing", reward: 38, cost: 24, penalty: 8 },
  { title: "Raiders Approach", text: "Farmers ask for protection from a violent war band.", kind: "protection", reward: 45, cost: 30, penalty: 11 },
  { title: "A Merchant Seeks Fortune", text: "A trader promises a shrine in return for success.", kind: "wealth", reward: 28, cost: 18, penalty: 5 },
  { title: "Forbidden Love", text: "Two young mortals ask you to soften their families' hearts.", kind: "love", reward: 34, cost: 22, penalty: 7 },
  { title: "The General's Plea", text: "A commander prays for victory in a coming battle.", kind: "war", reward: 50, cost: 34, penalty: 12 },
  { title: "The Dying Harvest", text: "A village asks for rain before its crops fail.", kind: "harvest", reward: 42, cost: 28, penalty: 10 }
];

const powers = [
  { id: "inspire", name: "Inspire Worship", icon: "✨", cost: 25, text: "Raise devotion and gain followers in a selected city." },
  { id: "oracle", name: "Speak Through the Oracle", icon: "🔮", cost: 40, text: "Greatly raise loyalty, but may anger the city's rival god." },
  { id: "miracle", name: "Perform a Miracle", icon: "🌟", cost: 65, text: "Gain major Faith and calm unrest throughout the city." },
  { id: "wrath", name: "Display Divine Wrath", icon: "🔥", cost: 50, text: "Crush unrest through fear, with a risk of losing devotion." }
];

const aspects = [
  { id: "temples", icon: "🏛️", name: "Sacred Temples", cost: 120, text: "Passive Faith income increases each turn.", bonus: "faithIncome" },
  { id: "festivals", icon: "🎭", name: "Holy Festivals", cost: 150, text: "Cities gain loyalty whenever time advances.", bonus: "loyaltyIncome" },
  { id: "prophecy", icon: "👁️", name: "Gift of Prophecy", cost: 180, text: "New prayers offer larger rewards.", bonus: "prayerReward" },
  { id: "immortals", icon: "🪽", name: "Immortal Messengers", cost: 220, text: "Divine powers cost 15% less Favor.", bonus: "powerDiscount" }
];

let selectedGodId = null;
let state = null;
let toastTimer = null;

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function randomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function createNewState(godId) {
  const god = gods.find((item) => item.id === godId);
  const cities = cityTemplates.map((city) => ({ ...city }));

  const preferred = {
    zeus: "delphi",
    athena: "athens",
    poseidon: "corinth",
    aphrodite: "thebes",
    ares: "sparta",
    hades: "crete"
  }[godId];

  const favoredCity = cities.find((city) => city.id === preferred);
  favoredCity.devotion += 18;
  favoredCity.loyalty += 15;

  return {
    version: "0.1.0",
    godId,
    year: 1,
    turn: 1,
    faith: 85,
    favor: 100,
    gold: 65,
    followers: 120,
    selectedCityId: preferred,
    cities,
    prayers: [],
    unlockedAspects: [],
    log: [
      {
        title: `${god.name} Rises`,
        text: `Your divine presence is first felt in ${favoredCity.name}. The struggle for Greece begins.`,
        turn: 1
      }
    ]
  };
}

function renderGodSelection() {
  const grid = $("#god-grid");
  grid.innerHTML = gods.map((god) => `
    <button class="god-card ${selectedGodId === god.id ? "selected" : ""}" data-god-id="${god.id}">
      <span class="symbol">${god.symbol}</span>
      <strong>${god.name}</strong>
      <small>${god.title}<br>${god.bonus}</small>
    </button>
  `).join("");

  $$(".god-card").forEach((button) => {
    button.addEventListener("click", () => {
      selectedGodId = button.dataset.godId;
      $("#begin-button").disabled = false;
      $("#begin-button").textContent = `Begin as ${gods.find((g) => g.id === selectedGodId).name}`;
      renderGodSelection();
    });
  });

  if (localStorage.getItem(SAVE_KEY)) {
    $("#continue-button").classList.remove("hidden");
  }
}

function startGame(loadExisting = false) {
  if (loadExisting) {
    try {
      state = JSON.parse(localStorage.getItem(SAVE_KEY));
    } catch (error) {
      localStorage.removeItem(SAVE_KEY);
      showToast("The save could not be loaded.");
      return;
    }
  } else {
    state = createNewState(selectedGodId);
    generatePrayer();
    generatePrayer();
  }

  $("#start-screen").classList.remove("active");
  $("#game-screen").classList.add("active");
  renderAll();
  saveGame(false);
}

function saveGame(showMessage = true) {
  if (!state) return;
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
  if (showMessage) showToast("Game saved on this device.");
}

function renderAll() {
  const god = gods.find((item) => item.id === state.godId);
  $("#god-title").textContent = `${god.symbol} ${god.name}`;
  $("#faith-value").textContent = Math.floor(state.faith);
  $("#favor-value").textContent = Math.floor(state.favor);
  $("#gold-value").textContent = Math.floor(state.gold);
  $("#followers-value").textContent = Math.floor(state.followers);
  $("#year-label").textContent = `Year ${state.year}`;
  $("#prayer-count").textContent = state.prayers.length;

  renderCities();
  renderPrayers();
  renderPowers();
  renderAspects();
  renderLog();
}

function renderCities() {
  $("#city-list").innerHTML = state.cities.map((city) => `
    <article class="city-card">
      <div class="city-top">
        <span class="city-symbol">${city.symbol}</span>
        <div class="city-name">
          <h3>${city.name}</h3>
          <small>${city.trait} • Rival: ${city.rival}</small>
        </div>
        <button class="city-button" data-city="${city.id}">Influence</button>
      </div>

      <div class="stats">
        <div class="stat"><strong>${city.population}</strong><small>People</small></div>
        <div class="stat"><strong>${Math.floor(city.devotion)}%</strong><small>Devotion</small></div>
        <div class="stat"><strong>${Math.floor(city.unrest)}%</strong><small>Unrest</small></div>
      </div>

      <div class="card-row">
        <small class="card-muted">Loyalty to ${getGod().name}</small>
        <strong>${Math.floor(city.loyalty)}%</strong>
      </div>
      <div class="meter"><span style="width:${city.loyalty}%"></span></div>
    </article>
  `).join("");

  $$("[data-city]").forEach((button) => {
    button.addEventListener("click", () => openCity(button.dataset.city));
  });
}

function openCity(cityId) {
  state.selectedCityId = cityId;
  const city = getCity(cityId);
  const athenaDiscount = state.godId === "athena" ? 5 : 0;

  showModal(`
    <p class="eyebrow">CITY ACTIONS</p>
    <h2>${city.symbol} ${city.name}</h2>
    <p class="card-muted">${city.trait}. ${city.population} mortals live here.</p>
    <div class="stats">
      <div class="stat"><strong>${Math.floor(city.devotion)}%</strong><small>Devotion</small></div>
      <div class="stat"><strong>${Math.floor(city.loyalty)}%</strong><small>Loyalty</small></div>
      <div class="stat"><strong>${Math.floor(city.unrest)}%</strong><small>Unrest</small></div>
    </div>
    <div class="action-grid">
      <button class="power-button" data-city-action="preach">📣 Send Priests<br><small>${Math.max(10, 20 - athenaDiscount)} Favor</small></button>
      <button class="power-button" data-city-action="shrine">🏺 Build Shrine<br><small>35 Gold</small></button>
      <button class="power-button" data-city-action="bless">🌾 Bless Citizens<br><small>${Math.max(15, 25 - athenaDiscount)} Favor</small></button>
      <button class="power-button" data-city-action="intimidate">🔥 Intimidate<br><small>${state.godId === "ares" ? 15 : 25} Favor</small></button>
    </div>
  `);

  $$("[data-city-action]").forEach((button) => {
    button.addEventListener("click", () => performCityAction(cityId, button.dataset.cityAction));
  });
}

function performCityAction(cityId, action) {
  const city = getCity(cityId);
  const athenaDiscount = state.godId === "athena" ? 5 : 0;
  let title = "";
  let text = "";

  if (action === "preach") {
    const cost = Math.max(10, 20 - athenaDiscount);
    if (!spend("favor", cost)) return;
    city.devotion = clamp(city.devotion + 8);
    city.loyalty = clamp(city.loyalty + 5);
    state.followers += Math.floor(city.population * 0.02);
    title = `Priests Enter ${city.name}`;
    text = "Your stories spread through markets and homes.";
  }

  if (action === "shrine") {
    if (!spend("gold", 35)) return;
    city.devotion = clamp(city.devotion + 6);
    state.faith += 18;
    title = `A Shrine Is Raised`;
    text = `${city.name} now holds a permanent place of worship.`;
  }

  if (action === "bless") {
    const cost = Math.max(15, 25 - athenaDiscount);
    if (!spend("favor", cost)) return;
    city.loyalty = clamp(city.loyalty + 10);
    city.unrest = clamp(city.unrest - 7);
    state.faith += 12;
    title = `${city.name} Is Blessed`;
    text = "The people feel your protection in their daily lives.";
  }

  if (action === "intimidate") {
    const cost = state.godId === "ares" ? 15 : 25;
    if (!spend("favor", cost)) return;
    const power = state.godId === "ares" ? 15 : 10;
    city.unrest = clamp(city.unrest - power);
    city.loyalty = clamp(city.loyalty + 4);
    city.devotion = clamp(city.devotion - 3);
    title = `A Sign of Wrath`;
    text = "Fear restores order, but some mortals question your mercy.";
  }

  addLog(title, text);
  closeModal();
  advanceTurn();
}

function renderPrayers() {
  const list = $("#prayer-list");

  if (!state.prayers.length) {
    list.innerHTML = `
      <article class="prayer-card">
        <h3>No unanswered prayers</h3>
        <p>Advance the world by taking city actions or using divine powers.</p>
      </article>
    `;
    return;
  }

  list.innerHTML = state.prayers.map((prayer) => `
    <article class="prayer-card">
      <div class="card-row">
        <span class="pill">${getCity(prayer.cityId).name}</span>
        <span class="power-cost">${prayer.cost} Favor</span>
      </div>
      <h3>${prayer.title}</h3>
      <p>${prayer.text}</p>
      <div class="choice-row">
        <button class="choice-button mercy" data-answer="${prayer.id}">Grant Prayer</button>
        <button class="choice-button ignore" data-refuse="${prayer.id}">Refuse</button>
      </div>
    </article>
  `).join("");

  $$("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => answerPrayer(button.dataset.answer, true));
  });

  $$("[data-refuse]").forEach((button) => {
    button.addEventListener("click", () => answerPrayer(button.dataset.refuse, false));
  });
}

function answerPrayer(prayerId, granted) {
  const index = state.prayers.findIndex((item) => item.id === prayerId);
  if (index < 0) return;

  const prayer = state.prayers[index];
  const city = getCity(prayer.cityId);
  const rewardBoost = state.unlockedAspects.includes("prophecy") ? 1.2 : 1;

  if (granted) {
    if (!spend("favor", prayer.cost)) return;

    let faithGain = prayer.reward * rewardBoost;
    if (state.godId === "zeus") faithGain *= 1.2;

    state.faith += faithGain;
    state.followers += Math.floor(10 + city.population * 0.012);
    city.devotion = clamp(city.devotion + 7);
    city.loyalty = clamp(city.loyalty + (state.godId === "aphrodite" ? 10 : 7));
    city.unrest = clamp(city.unrest - 4);

    addLog(`Prayer Granted in ${city.name}`, `${prayer.title}: mortals celebrate your intervention.`);
    showToast(`Prayer granted! +${Math.floor(faithGain)} Faith`);
  } else {
    city.loyalty = clamp(city.loyalty - prayer.penalty);
    city.unrest = clamp(city.unrest + Math.ceil(prayer.penalty / 2));

    if (state.godId === "hades") {
      state.gold += 18;
      showToast("The prayer was refused. Hades gains 18 Gold.");
    } else {
      showToast("The mortals feel abandoned.");
    }

    addLog(`Prayer Refused in ${city.name}`, `${prayer.title}: faith weakens among those who witnessed it.`);
  }

  state.prayers.splice(index, 1);
  advanceTurn();
}

function renderPowers() {
  const discount = getPowerDiscount();

  $("#power-list").innerHTML = powers.map((power) => {
    const cost = Math.ceil(power.cost * discount);
    return `
      <article class="power-card">
        <div class="power-top">
          <div>
            <span class="aspect-icon">${power.icon}</span>
            <h3>${power.name}</h3>
          </div>
          <span class="power-cost">${cost} Favor</span>
        </div>
        <p>${power.text}</p>
        <button class="power-button" data-power="${power.id}" ${state.favor < cost ? "disabled" : ""}>
          Use in ${getCity(state.selectedCityId).name}
        </button>
      </article>
    `;
  }).join("");

  $$("[data-power]").forEach((button) => {
    button.addEventListener("click", () => usePower(button.dataset.power));
  });
}

function usePower(powerId) {
  const power = powers.find((item) => item.id === powerId);
  const city = getCity(state.selectedCityId);
  const cost = Math.ceil(power.cost * getPowerDiscount());
  if (!spend("favor", cost)) return;

  if (powerId === "inspire") {
    city.devotion = clamp(city.devotion + 12);
    city.loyalty = clamp(city.loyalty + 7);
    state.followers += Math.floor(city.population * 0.035);
  }

  if (powerId === "oracle") {
    city.loyalty = clamp(city.loyalty + 18);
    city.devotion = clamp(city.devotion + 5);
    city.unrest = clamp(city.unrest + 3);
  }

  if (powerId === "miracle") {
    let gain = 55;
    if (state.godId === "zeus") gain *= 1.2;
    state.faith += gain;
    city.devotion = clamp(city.devotion + 16);
    city.loyalty = clamp(city.loyalty + 12);
    city.unrest = clamp(city.unrest - 14);
  }

  if (powerId === "wrath") {
    city.unrest = clamp(city.unrest - 22);
    city.loyalty = clamp(city.loyalty + 7);
    city.devotion = clamp(city.devotion - 6);
  }

  addLog(`${power.name} in ${city.name}`, `Your divine power changes the fate of the city.`);
  showToast(`${power.name} used in ${city.name}.`);
  advanceTurn();
}

function renderAspects() {
  $("#aspect-list").innerHTML = aspects.map((aspect) => {
    const unlocked = state.unlockedAspects.includes(aspect.id);
    return `
      <article class="aspect-card ${unlocked ? "" : "locked"}">
        <span class="aspect-icon">${aspect.icon}</span>
        <h3>${aspect.name}</h3>
        <p>${aspect.text}</p>
        <button class="unlock-button" data-aspect="${aspect.id}" ${unlocked || state.faith < aspect.cost ? "disabled" : ""}>
          ${unlocked ? "Unlocked" : `${aspect.cost} Faith`}
        </button>
      </article>
    `;
  }).join("");

  $$("[data-aspect]").forEach((button) => {
    button.addEventListener("click", () => unlockAspect(button.dataset.aspect));
  });
}

function unlockAspect(aspectId) {
  const aspect = aspects.find((item) => item.id === aspectId);
  if (state.unlockedAspects.includes(aspectId)) return;
  if (!spend("faith", aspect.cost)) return;

  state.unlockedAspects.push(aspectId);
  addLog(`${aspect.name} Unlocked`, aspect.text);
  showToast(`${aspect.name} is now active.`);
  renderAll();
  saveGame(false);
}

function renderLog() {
  $("#event-log").innerHTML = state.log.map((entry) => `
    <article class="log-card">
      <div class="card-row">
        <h3>${entry.title}</h3>
        <span class="pill">Turn ${entry.turn}</span>
      </div>
      <p>${entry.text}</p>
    </article>
  `).join("");
}

function advanceTurn() {
  state.turn += 1;
  state.year = Math.floor((state.turn - 1) / 6) + 1;

  const averageDevotion = state.cities.reduce((sum, city) => sum + city.devotion, 0) / state.cities.length;
  let faithIncome = 4 + averageDevotion * 0.08;
  if (state.unlockedAspects.includes("temples")) faithIncome += 7;

  state.faith += faithIncome;
  state.favor = Math.min(120, state.favor + 11);

  for (const city of state.cities) {
    city.unrest = clamp(city.unrest + (Math.random() * 5 - 2));
    if (state.unlockedAspects.includes("festivals")) {
      city.loyalty = clamp(city.loyalty + 2);
    }

    if (state.godId === "poseidon" && city.coastal) {
      state.gold += 3;
    } else {
      state.gold += 1;
    }
  }

  if (state.turn % 2 === 0 && state.prayers.length < 4) {
    generatePrayer();
  }

  if (state.turn % 5 === 0) {
    triggerWorldEvent();
  }

  renderAll();
  saveGame(false);
}

function generatePrayer() {
  const template = randomItem(prayerTemplates);
  const city = randomItem(state.cities);
  const rewardBoost = state.unlockedAspects.includes("prophecy") ? 1.15 : 1;

  state.prayers.push({
    ...template,
    id: `prayer-${Date.now()}-${Math.random().toString(16).slice(2)}`,
    cityId: city.id,
    reward: Math.round(template.reward * rewardBoost)
  });
}

function triggerWorldEvent() {
  const city = randomItem(state.cities);
  const events = [
    {
      title: `Rival Priests Enter ${city.name}`,
      text: `${city.rival === "None" ? "A mysterious cult" : `Followers of ${city.rival}`} challenge your authority.`,
      apply: () => {
        city.devotion = clamp(city.devotion - 5);
        city.unrest = clamp(city.unrest + 6);
      }
    },
    {
      title: `Festival in ${city.name}`,
      text: "Music and offerings fill the streets, strengthening divine devotion.",
      apply: () => {
        city.devotion = clamp(city.devotion + 6);
        state.faith += 15;
      }
    },
    {
      title: `Prosperous Season`,
      text: `${city.name} grows wealthy and sends offerings to your shrines.`,
      apply: () => {
        state.gold += 28;
        city.loyalty = clamp(city.loyalty + 3);
      }
    }
  ];

  const event = randomItem(events);
  event.apply();
  addLog(event.title, event.text);
  showToast(event.title);
}

function spend(resource, amount) {
  if (state[resource] < amount) {
    showToast(`Not enough ${resource}.`);
    return false;
  }
  state[resource] -= amount;
  return true;
}

function getPowerDiscount() {
  return state.unlockedAspects.includes("immortals") ? 0.85 : 1;
}

function getGod() {
  return gods.find((item) => item.id === state.godId);
}

function getCity(cityId) {
  return state.cities.find((city) => city.id === cityId);
}

function addLog(title, text) {
  state.log.unshift({ title, text, turn: state.turn });
  state.log = state.log.slice(0, 30);
}

function showModal(content) {
  $("#modal-content").innerHTML = content;
  $("#modal").classList.remove("hidden");
}

function closeModal() {
  $("#modal").classList.add("hidden");
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.remove("hidden");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.add("hidden"), 2400);
}

function switchView(viewId) {
  $$(".view").forEach((view) => view.classList.toggle("active", view.id === viewId));
  $$(".nav-button").forEach((button) => button.classList.toggle("active", button.dataset.view === viewId));
}

$("#begin-button").addEventListener("click", () => {
  if (selectedGodId) startGame(false);
});

$("#continue-button").addEventListener("click", () => startGame(true));
$("#save-button").addEventListener("click", () => saveGame(true));
$("#modal-close").addEventListener("click", closeModal);

$("#modal").addEventListener("click", (event) => {
  if (event.target.id === "modal") closeModal();
});

$$(".nav-button").forEach((button) => {
  button.addEventListener("click", () => switchView(button.dataset.view));
});

$("#reset-button").addEventListener("click", () => {
  const confirmed = confirm("Delete your saved game and return to deity selection?");
  if (!confirmed) return;

  localStorage.removeItem(SAVE_KEY);
  state = null;
  selectedGodId = null;
  $("#game-screen").classList.remove("active");
  $("#start-screen").classList.add("active");
  $("#continue-button").classList.add("hidden");
  $("#begin-button").disabled = true;
  $("#begin-button").textContent = "Select a God";
  renderGodSelection();
});

renderGodSelection();
