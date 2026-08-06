const SAVE_KEY="ageOfOlympusSaveV070";

const gods=[
{id:"zeus",name:"Zeus",symbol:"⚡",title:"King of Olympus",bonus:"Miracles generate more Faith."},
{id:"athena",name:"Athena",symbol:"🦉",title:"Goddess of Wisdom",bonus:"Heroes gain strategic advantages."},
{id:"poseidon",name:"Poseidon",symbol:"🔱",title:"Lord of the Seas",bonus:"Coastal cities produce extra Gold."},
{id:"aphrodite",name:"Aphrodite",symbol:"🕊️",title:"Goddess of Love",bonus:"Diplomacy produces stronger loyalty."},
{id:"ares",name:"Ares",symbol:"🗡️",title:"God of War",bonus:"Heroes deal extra battle damage."},
{id:"hades",name:"Hades",symbol:"💀",title:"Lord of the Underworld",bonus:"Defeated monsters yield extra treasure."}
];



const titanTemplates=[
{id:"cronus",name:"Cronus",icon:"⏳",domain:"Time and Fallen Kingship",sealCity:"Macedonia",danger:96,persuasion:28,temperament:"Vengeful",gift:"Reverse one disastrous year",goal:"Overthrow Olympus"},
{id:"rhea",name:"Rhea",icon:"🦁",domain:"Motherhood and Protection",sealCity:"Crete",danger:48,persuasion:74,temperament:"Protective",gift:"Bless families and population growth",goal:"Protect her descendants"},
{id:"oceanus",name:"Oceanus",icon:"🌊",domain:"World-Encircling Sea",sealCity:"Rhodes",danger:80,persuasion:48,temperament:"Ancient",gift:"Command all trade routes",goal:"Restore primordial seas"},
{id:"hyperion",name:"Hyperion",icon:"🌞",domain:"Heavenly Light",sealCity:"Troy",danger:75,persuasion:44,temperament:"Proud",gift:"Empower cities with celestial fire",goal:"Reclaim the heavens"},
{id:"themis",name:"Themis",icon:"⚖️",domain:"Divine Law and Prophecy",sealCity:"Delphi",danger:40,persuasion:82,temperament:"Just",gift:"Reveal council intentions",goal:"Restore cosmic law"},
{id:"prometheus",name:"Prometheus",icon:"🔥",domain:"Foresight and Mortal Progress",sealCity:"Athens",danger:45,persuasion:88,temperament:"Defiant",gift:"Forbidden fire and knowledge",goal:"Advance humanity"},
{id:"atlas",name:"Atlas",icon:"🌌",domain:"Endurance and the Heavens",sealCity:"Sparta",danger:70,persuasion:54,temperament:"Stoic",gift:"Shield Greece from catastrophe",goal:"End his eternal burden"},
{id:"epimetheus",name:"Epimetheus",icon:"🎁",domain:"Hindsight and Consequences",sealCity:"Corinth",danger:52,persuasion:62,temperament:"Impulsive",gift:"Unexpected resources",goal:"Correct ancient mistakes"}
];

const olympianCouncilTemplates=[
{name:"Zeus",icon:"⚡",bias:"order",relationship:55},
{name:"Hera",icon:"🦚",bias:"law",relationship:48},
{name:"Poseidon",icon:"🔱",bias:"power",relationship:46},
{name:"Athena",icon:"🦉",bias:"wisdom",relationship:62},
{name:"Apollo",icon:"☀️",bias:"prophecy",relationship:55},
{name:"Artemis",icon:"🏹",bias:"freedom",relationship:45},
{name:"Ares",icon:"🗡️",bias:"war",relationship:50},
{name:"Aphrodite",icon:"🕊️",bias:"mercy",relationship:54},
{name:"Hermes",icon:"🪽",bias:"progress",relationship:60},
{name:"Demeter",icon:"🌾",bias:"life",relationship:58},
{name:"Hephaestus",icon:"🔥",bias:"craft",relationship:50},
{name:"Dionysus",icon:"🍇",bias:"freedom",relationship:47},
{name:"Hestia",icon:"🏠",bias:"peace",relationship:65},
{name:"Hades",icon:"💀",bias:"balance",relationship:44}
];

const titanVoteIssues=[
{id:"prometheus-fire",title:"Accept Prometheus's Forbidden Fire",description:"Athens could enter a new age of knowledge, but Zeus may see this as rebellion.",yesEffect:"progress",titanId:"prometheus"},
{id:"open-rhea",title:"Grant Rhea Temporary Freedom",description:"Rhea promises to protect mortal families if released under sacred oath.",yesEffect:"life",titanId:"rhea"},
{id:"hunt-cronus",title:"Declare a Divine Hunt Against Cronus",description:"Olympus must decide whether to begin open war before Cronus escapes.",yesEffect:"war",titanId:"cronus"},
{id:"tartarus-expedition",title:"Allow Heroes to Enter Tartarus",description:"Heroes may reinforce the seals or return with forbidden relics.",yesEffect:"wisdom",titanId:"atlas"},
{id:"titan-alliance",title:"Permit a Limited Titan Alliance",description:"Selected Titans may aid Olympus against Cronus, at great political risk.",yesEffect:"mercy",titanId:"themis"}
];

const cityTemplates=[
{id:"macedonia",name:"Macedonia",symbol:"👑",x:34,y:15,neighbors:["Delphi","Troy"],trait:"Northern kingdom",population:520,player:25,rival:38,rivalName:"Hera",unrest:18,temples:0,wealth:36,coastal:false},
{id:"delphi",name:"Delphi",symbol:"🔮",x:37,y:30,neighbors:["Macedonia","Thebes","Corinth"],trait:"Home of the oracle",population:430,player:45,rival:37,rivalName:"Apollo",unrest:8,temples:1,wealth:33,coastal:false},
{id:"thebes",name:"Thebes",symbol:"🦁",x:45,y:39,neighbors:["Delphi","Athens","Corinth"],trait:"Ancient royal city",population:680,player:27,rival:39,rivalName:"Dionysus",unrest:21,temples:0,wealth:35,coastal:false},
{id:"athens",name:"Athens",symbol:"🏛️",x:54,y:48,neighbors:["Thebes","Corinth","Troy","Rhodes"],trait:"Center of wisdom",population:850,player:38,rival:34,rivalName:"Athena",unrest:14,temples:1,wealth:48,coastal:true},
{id:"corinth",name:"Corinth",symbol:"⛵",x:42,y:53,neighbors:["Delphi","Thebes","Athens","Argos","Rhodes"],trait:"Wealthy trade port",population:720,player:29,rival:42,rivalName:"Poseidon",unrest:17,temples:0,wealth:58,coastal:true},
{id:"argos",name:"Argos",symbol:"🏺",x:34,y:64,neighbors:["Corinth","Sparta"],trait:"City of old kings",population:510,player:31,rival:35,rivalName:"Hera",unrest:15,temples:0,wealth:41,coastal:false},
{id:"sparta",name:"Sparta",symbol:"🛡️",x:38,y:73,neighbors:["Argos","Crete"],trait:"Land of warriors",population:620,player:24,rival:47,rivalName:"Ares",unrest:24,temples:0,wealth:30,coastal:false},
{id:"rhodes",name:"Rhodes",symbol:"⚓",x:76,y:67,neighbors:["Athens","Corinth","Crete","Troy"],trait:"Island stronghold",population:470,player:28,rival:36,rivalName:"Helios",unrest:12,temples:0,wealth:50,coastal:true},
{id:"crete",name:"Crete",symbol:"🐂",x:58,y:88,neighbors:["Sparta","Rhodes"],trait:"Island of mysteries",population:760,player:22,rival:41,rivalName:"Artemis",unrest:26,temples:0,wealth:50,coastal:true},
{id:"troy",name:"Troy",symbol:"🏹",x:83,y:27,neighbors:["Macedonia","Athens","Rhodes"],trait:"Fortress of Asia Minor",population:790,player:18,rival:48,rivalName:"Apollo",unrest:20,temples:0,wealth:46,coastal:true}
];

const buildingTemplates=[
{id:"temple",name:"Grand Temple",icon:"🏛️",costGold:65,costStone:12,text:"+Faith and influence each year."},
{id:"academy",name:"Academy",icon:"📚",costGold:55,costStone:8,text:"Heroes gain more quest experience."},
{id:"barracks",name:"Barracks",icon:"⚔️",costGold:60,costBronze:8,text:"Reduces monster damage to the city."},
{id:"harbor",name:"Harbor",icon:"⚓",costGold:70,costWood:14,text:"Improves coastal wealth and travel."},
{id:"market",name:"Marketplace",icon:"🏺",costGold:50,costWood:8,text:"Produces extra Gold each year."}
];

const heroTemplates=[
{id:"heracles",name:"Heracles",portrait:"🦁",title:"The Mighty",cost:95,strength:88,wisdom:42,courage:92,leadership:60,ability:"Labors of Strength",location:"Thebes"},
{id:"perseus",name:"Perseus",portrait:"🛡️",title:"Slayer of Medusa",cost:80,strength:68,wisdom:70,courage:82,leadership:58,ability:"Mirror Shield",location:"Athens"},
{id:"achilles",name:"Achilles",portrait:"⚔️",title:"Champion of War",cost:110,strength:92,wisdom:45,courage:90,leadership:74,ability:"Invincible Charge",location:"Troy"},
{id:"odysseus",name:"Odysseus",portrait:"⛵",title:"The Cunning King",cost:85,strength:58,wisdom:94,courage:76,leadership:88,ability:"Master Strategist",location:"Corinth"},
{id:"atalanta",name:"Atalanta",portrait:"🏹",title:"Swift Huntress",cost:75,strength:72,wisdom:66,courage:86,leadership:55,ability:"Unmatched Speed",location:"Argos"},
{id:"theseus",name:"Theseus",portrait:"🐂",title:"Prince of Athens",cost:78,strength:75,wisdom:67,courage:84,leadership:70,ability:"Labyrinth Mastery",location:"Athens"}
];

const monsterTemplates=[
{id:"hydra",name:"Hydra",icon:"🐍",territory:"Thebes",health:180,strength:76,fear:72,reward:95,weakness:"Fire",ability:"Regrowing Heads",objective:"Spread fear",phaseNames:["Many-Headed Assault","Regeneration","Burn the Necks"]},
{id:"minotaur",name:"Minotaur",icon:"🐂",territory:"Crete",health:165,strength:82,fear:66,reward:90,weakness:"Wisdom",ability:"Labyrinth Charge",objective:"Raid nearby cities",phaseNames:["Labyrinth Hunt","Savage Charge","Final Corner"]},
{id:"medusa",name:"Medusa",icon:"🐍",territory:"Athens",health:135,strength:68,fear:86,reward:105,weakness:"Reflection",ability:"Petrifying Gaze",objective:"Create stone servants",phaseNames:["Avoid Her Gaze","Stone Guardians","Mirror Strike"]},
{id:"cyclops",name:"Cyclops",icon:"👁️",territory:"Sparta",health:175,strength:86,fear:64,reward:100,weakness:"Cunning",ability:"Crushing Boulder",objective:"Destroy buildings",phaseNames:["Boulder Barrage","Blinded Fury","Mountain Collapse"]},
{id:"chimera",name:"Chimera",icon:"🦁",territory:"Corinth",health:195,strength:90,fear:80,reward:120,weakness:"Air",ability:"Threefold Flame",objective:"Burn trade routes",phaseNames:["Lion's Claws","Serpent Tail","Flaming Breath"]},
{id:"kraken",name:"Kraken",icon:"🦑",territory:"Rhodes",health:230,strength:94,fear:88,reward:145,weakness:"Storm",ability:"Devouring Tentacles",objective:"Destroy harbors",phaseNames:["Tentacle Storm","Drag Beneath","Heart of the Deep"]}
];

const questTemplates=[
{id:"scroll",name:"Recover the Lost Scroll",city:"Athens",difficulty:"Easy",rewardGold:35,rewardPrestige:15,stat:"wisdom",description:"A sacred text was stolen from an ancient library."},
{id:"pirates",name:"Defeat the Corinthian Pirates",city:"Corinth",difficulty:"Medium",rewardGold:55,rewardPrestige:20,stat:"leadership",description:"Raiders have closed the trade routes."},
{id:"trial",name:"Survive the Spartan Trial",city:"Sparta",difficulty:"Medium",rewardGold:45,rewardPrestige:22,stat:"courage",description:"The elders demand a champion prove divine worth."},
{id:"fleece",name:"Seek the Golden Fleece",city:"Troy",difficulty:"Hard",rewardGold:90,rewardPrestige:38,stat:"leadership",description:"A legendary expedition seeks a divine relic."}
];

const mythEvents=[
{title:"The Twelve Labors Begin",hero:"Heracles",text:"Heracles is challenged to complete impossible labors.",bonus:"strength"},
{title:"The Gorgon Hunt",hero:"Perseus",text:"Perseus hears rumors of Medusa's hidden refuge.",bonus:"wisdom"},
{title:"The Voyage of the Argonauts",hero:"Odysseus",text:"A fleet prepares to search for the Golden Fleece.",bonus:"leadership"},
{title:"The Champion of Troy",hero:"Achilles",text:"Achilles is called toward a war that may define an age.",bonus:"courage"}
];



const kingdomNames=[
{name:"Macedonia",ruler:"King Amyntas",personality:"Ambitious",army:58,navy:20,economy:48,loyalty:42,culture:45},
{name:"Delphi",ruler:"Archon Lysandra",personality:"Pious",army:22,navy:8,economy:38,loyalty:65,culture:82},
{name:"Thebes",ruler:"King Pentheus",personality:"Proud",army:55,navy:18,economy:44,loyalty:46,culture:58},
{name:"Athens",ruler:"Archon Solon",personality:"Strategic",army:62,navy:70,economy:78,loyalty:58,culture:90},
{name:"Corinth",ruler:"Queen Cyrene",personality:"Mercantile",army:44,navy:68,economy:88,loyalty:52,culture:64},
{name:"Argos",ruler:"King Adrastus",personality:"Traditional",army:52,navy:20,economy:50,loyalty:55,culture:62},
{name:"Sparta",ruler:"King Leon",personality:"Warlike",army:92,navy:30,economy:38,loyalty:68,culture:50},
{name:"Rhodes",ruler:"Archon Heliodor",personality:"Maritime",army:38,navy:84,economy:72,loyalty:54,culture:66},
{name:"Crete",ruler:"Queen Ariadne",personality:"Mysterious",army:48,navy:62,economy:58,loyalty:49,culture:76},
{name:"Troy",ruler:"King Priam",personality:"Honorable",army:78,navy:55,economy:64,loyalty:72,culture:80}
];

const goldActions=[
{id:"taxes",icon:"👑",name:"Collect City Taxes",cost:0,risk:"Medium",min:18,max:55,text:"Choose a tax level. Higher taxes earn more Gold but increase unrest."},
{id:"expedition",icon:"⛵",name:"Merchant Expedition",cost:30,risk:"High",min:45,max:100,text:"Fund a voyage that may return with treasure—or be lost to storms."},
{id:"caravan",icon:"🐎",name:"Protect a Trade Caravan",cost:15,risk:"Medium",min:30,max:65,text:"Escort goods between two kingdoms for a share of the profits."},
{id:"trophy",icon:"🐉",name:"Sell Monster Trophy",cost:0,risk:"Low",min:35,max:70,text:"Sell an unequipped monster trophy from a hero's inventory."},
{id:"mine",icon:"⛏️",name:"Open a Royal Mine",cost:50,risk:"Medium",min:12,max:25,text:"Create a permanent yearly Gold source in one kingdom."},
{id:"tribute",icon:"🏛️",name:"Demand Kingdom Tribute",cost:10,risk:"High",min:30,max:80,text:"Use divine authority to demand payment from a kingdom."},
{id:"games",icon:"🏆",name:"Sponsor Olympic Games",cost:40,risk:"Medium",min:55,max:120,text:"Enter a hero in athletic contests for Gold and Prestige."},
{id:"titanBargain",icon:"⛓️",name:"Make a Titan Bargain",cost:10,risk:"High",min:60,max:130,text:"Seek wealth from an allied Titan at the cost of Tartarus stability."}
];

const artifactTemplates=[
{id:"master-bolt",name:"Zeus' Master Bolt",icon:"⚡",rarity:"Divine",effect:"Strength +18 and divine battle damage",stat:"strength",amount:18},
{id:"trident",name:"Poseidon's Trident",icon:"🔱",rarity:"Divine",effect:"Leadership +15 and naval income",stat:"leadership",amount:15},
{id:"helm-hades",name:"Helm of Hades",icon:"🪖",rarity:"Divine",effect:"Wisdom +16 and safer Titan encounters",stat:"wisdom",amount:16},
{id:"aegis",name:"Aegis Shield",icon:"🛡️",rarity:"Legendary",effect:"Courage +15 and battle defense",stat:"courage",amount:15},
{id:"winged-sandals",name:"Winged Sandals",icon:"🪽",rarity:"Legendary",effect:"Free hero travel and quest bonus",stat:"wisdom",amount:10},
{id:"golden-fleece",name:"Golden Fleece",icon:"🐏",rarity:"Mythic",effect:"+25 yearly Gold and city stability",stat:"leadership",amount:12},
{id:"pandoras-box",name:"Pandora's Box",icon:"📦",rarity:"Cursed",effect:"Powerful unpredictable yearly events",stat:"courage",amount:8},
{id:"bow-artemis",name:"Bow of Artemis",icon:"🏹",rarity:"Legendary",effect:"Strength +12 and monster-hunt bonus",stat:"strength",amount:12},
{id:"sword-perseus",name:"Sword of Perseus",icon:"🗡️",rarity:"Legendary",effect:"Strength +14 and boss damage",stat:"strength",amount:14}
];

const victoryTemplates=[
{id:"olympus",name:"King of Olympus",icon:"👑",text:"Control 8 cities and reach 180 Prestige."},
{id:"titan-slayer",name:"Titan Slayer",icon:"⛓️",text:"Reseal or defeat every Titan."},
{id:"peacemaker",name:"Peacemaker",icon:"🤝",text:"Maintain 3 Titan allies, no wars, and 130 Tartarus Stability."},
{id:"golden-age",name:"Golden Age",icon:"🌅",text:"Hold 600 Gold, 500 Food, and average city wealth of 75."},
{id:"titan-rebellion",name:"Titan Rebellion",icon:"🔥",text:"Reach Titan War 100 with Cronus allied or escaped."},
{id:"strategist",name:"Master Strategist",icon:"🦉",text:"Pass 8 Council votes and form 5 kingdom alliances."},
{id:"legend-maker",name:"Legend Maker",icon:"📖",text:"Complete 10 myths or quests and discover 6 artifacts."}
];

const childNames=["Aeson","Theron","Lyra","Ianthe","Cassia","Dorian","Phoebe","Myrine","Leander","Thalia","Orion","Xenia"];

const rivalGods=["Hera","Apollo","Ares","Poseidon","Athena","Dionysus","Artemis"];

let selectedGodId=null,state=null,toastTimer=null,currentMapFilter="all",battleState=null;
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const clamp=(v,min=0,max=100)=>Math.max(min,Math.min(max,v));
const randomItem=a=>a[Math.floor(Math.random()*a.length)];
const uid=p=>`${p}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
const getGodById=id=>gods.find(g=>g.id===id);
const getGod=()=>getGodById(state.godId);
const getCity=name=>state.cities.find(c=>c.name===name);
const getHero=id=>state.heroes.find(h=>h.id===id);

function newGame(godId){
 const cities=cityTemplates.map(c=>({...c,buildings:[]}));
 const favored={zeus:"Delphi",athena:"Athens",poseidon:"Corinth",aphrodite:"Thebes",ares:"Sparta",hades:"Crete"}[godId];
 cities.find(c=>c.name===favored).player=clamp(cities.find(c=>c.name===favored).player+20);
 return{
  version:"0.5.0",godId,year:1,faith:140,favor:115,gold:145,prestige:30,food:100,stone:60,wood:75,bronze:35,
  cities,
  heroes:heroTemplates.map(h=>({...h,recruited:false,level:1,xp:0,health:100,energy:100,status:"Available",age:25,equipment:[],traits:[],skillPoints:0,skills:{power:false,tactics:false,leadership:false}})),
  monsters:monsterTemplates.slice(0,4).map(m=>({...m,active:true,currentHealth:m.health,phase:1,age:0,rage:0})),
  quests:questTemplates.map(q=>({...q,status:"Available"})),
  audiences:[],
  rivalActions:[],
  mythLog:[],
  tartarusStability:78,
  titanWar:0,
  titanEnding:null,
  titans:titanTemplates.map(t=>({...t,status:"Sealed",seal:72+Math.floor(Math.random()*20),influence:0,relationship:25,encounters:0})),
  council:olympianCouncilTemplates.map(g=>({...g,mood:"Watchful",favorOwed:0})),
  pendingVote:null,
  councilHistory:[],
  kingdoms:kingdomNames.map(k=>({...k,relation:50,allies:[],atWarWith:[],taxRate:"Normal",mine:false,tribute:false})),
  enterprises:[],
  yearlyIncome:0,
  goldLedger:[],
  artifacts:artifactTemplates.map(a=>({...a,found:false,equippedHeroId:null})),
  olympics:{nextYear:4,lastWinner:null},
  completedLegends:0,
  victories:[],
  bloodlines:[],
  marriages:[],
  mapEvents:[{id:uid("event"),city:"Corinth",icon:"🌾",title:"Great Harvest",text:"Corinth enjoys a rich harvest."}],
  log:[{title:`${getGodById(godId).name} Enters the Age of Monsters`,text:"Ancient creatures stir across Greece.",year:1}]
 };
}

function renderGodSelection(){
 $("#god-grid").innerHTML=gods.map(g=>`<button class="god-card ${selectedGodId===g.id?"selected":""}" data-god="${g.id}"><span class="symbol">${g.symbol}</span><strong>${g.name}</strong><small>${g.title}<br>${g.bonus}</small></button>`).join("");
 $$("[data-god]").forEach(b=>b.addEventListener("click",()=>{selectedGodId=b.dataset.god;$("#begin-button").disabled=false;$("#begin-button").textContent=`Begin as ${getGodById(selectedGodId).name}`;renderGodSelection()}));
 if(localStorage.getItem(SAVE_KEY))$("#continue-button").classList.remove("hidden");
}
function startGame(load=false){if(load){try{state=JSON.parse(localStorage.getItem(SAVE_KEY))}catch(e){localStorage.removeItem(SAVE_KEY);showToast("Save could not be loaded.");return}}else state=newGame(selectedGodId);$("#start-screen").classList.remove("active");$("#game-screen").classList.add("active");renderAll();saveGame(false)}
function saveGame(show=true){if(!state)return;localStorage.setItem(SAVE_KEY,JSON.stringify(state));if(show)showToast("Game saved.")}
function renderAll(){
 $("#god-title").textContent=`${getGod().symbol} ${getGod().name}`;
 $("#faith-value").textContent=Math.floor(state.faith);$("#favor-value").textContent=Math.floor(state.favor);$("#gold-value").textContent=Math.floor(state.gold);$("#prestige-value").textContent=Math.floor(state.prestige);$("#year-label").textContent=`Year ${state.year}`;
 renderWorld();renderCityDevelopment();renderKingdoms();renderEconomy();renderArtifacts();renderLegacy();renderTitans();renderCouncil();renderPowersPlaceholder();renderHeroes();renderMonsters();renderQuests();renderThrone();renderTreasury();renderLog();
}

function renderWorld(){
 const controlled=state.cities.filter(c=>c.player>c.rival).length;
 $("#world-summary").innerHTML=`<p class="eyebrow">YOUR DIVINE REALM</p><h3>${controlled} of ${state.cities.length} cities favor ${getGod().name}</h3><div class="stats"><div class="stat"><strong>${controlled}</strong><small>Controlled</small></div><div class="stat"><strong>${state.monsters.filter(m=>m.active).length}</strong><small>Active Monsters</small></div><div class="stat"><strong>${state.prestige}</strong><small>Prestige</small></div></div>`;
 renderMapMarkers();
}
function renderMapMarkers(){
 const items=[];
 if(currentMapFilter==="all"||currentMapFilter==="cities")state.cities.forEach(c=>items.push({type:"city",id:c.id,name:c.name,icon:c.symbol,x:c.x,y:c.y,class:c.player>c.rival?(c.player>=55?"sacred":"player"):"rival"}));
 if(currentMapFilter==="all"||currentMapFilter==="heroes")state.heroes.filter(h=>h.recruited).forEach(h=>{const c=getCity(h.location);if(c)items.push({type:"hero",id:h.id,name:h.name,icon:h.portrait,x:c.x+3,y:c.y-5,class:"hero"})});
 if(currentMapFilter==="all"||currentMapFilter==="monsters")state.monsters.filter(m=>m.active).forEach(m=>{const c=getCity(m.territory);if(c)items.push({type:"monster",id:m.id,name:m.name,icon:m.icon,x:c.x-4,y:c.y+5,class:"danger"})});
 if(currentMapFilter==="all"||currentMapFilter==="events")state.mapEvents.forEach(e=>{const c=getCity(e.city);if(c)items.push({type:"event",id:e.id,name:e.title,icon:e.icon,x:c.x+5,y:c.y+5,class:"event"})});
 $("#map-markers").innerHTML=items.map(i=>`<button class="map-marker ${i.class}" style="left:${i.x}%;top:${i.y}%" data-map-type="${i.type}" data-map-id="${i.id}"><span class="marker-icon">${i.icon}</span><span class="marker-label">${i.name}</span></button>`).join("");
 $$("[data-map-type]").forEach(b=>b.addEventListener("click",()=>selectMapItem(b.dataset.mapType,b.dataset.mapId)));
}
function selectMapItem(type,id){
 const panel=$("#selected-map-panel");panel.className="selected-map-panel";
 if(type==="city"){const c=state.cities.find(x=>x.id===id);panel.innerHTML=`<div class="card-row"><div><p class="eyebrow">CITY</p><h2>${c.symbol} ${c.name}</h2></div><span class="pill">${c.player>c.rival?"Your influence":"Rival influence"}</span></div><p class="muted">${c.trait}</p><div class="stats"><div class="stat"><strong>${c.population}</strong><small>Population</small></div><div class="stat"><strong>${c.buildings.length}</strong><small>Buildings</small></div><div class="stat"><strong>${Math.round(c.unrest)}%</strong><small>Unrest</small></div></div><button class="card-button" id="open-city-build">Develop City</button>`;$("#open-city-build").addEventListener("click",()=>openCityBuild(c.id))}
 if(type==="hero"){const h=getHero(id);panel.innerHTML=`<p class="eyebrow">HERO</p><h2>${h.portrait} ${h.name}</h2><p class="muted">${h.title}. Level ${h.level}. ${h.location}. ${h.status}.</p><button class="card-button" id="open-hero-detail">Manage Hero</button>`;$("#open-hero-detail").addEventListener("click",()=>openHeroDetail(h.id))}
 if(type==="monster"){const m=state.monsters.find(x=>x.id===id);panel.innerHTML=`<p class="eyebrow">ROAMING MONSTER</p><h2>${m.icon} ${m.name}</h2><p class="muted">${m.objective}. Threatening ${m.territory}. Phase ${m.phase}/3.</p><div class="meter orange"><span style="width:${m.currentHealth/m.health*100}%"></span></div><button class="card-button" id="fight-map-monster" ${state.heroes.some(h=>h.recruited)?"":"disabled"}>Begin Boss Battle</button>`;$("#fight-map-monster").addEventListener("click",()=>chooseHeroForBattle(m.id))}
 if(type==="event"){const e=state.mapEvents.find(x=>x.id===id);panel.innerHTML=`<p class="eyebrow">WORLD EVENT</p><h2>${e.icon} ${e.title}</h2><p class="muted">${e.text}</p><button class="card-button" id="ack-event">Acknowledge</button>`;$("#ack-event").addEventListener("click",()=>{state.mapEvents=state.mapEvents.filter(x=>x.id!==e.id);state.faith+=5;addLog(e.title,e.text);renderAll()})}
}

function renderCityDevelopment(){
 $("#building-count").textContent=`${state.cities.reduce((s,c)=>s+c.buildings.length,0)} Built`;
 $("#city-development-list").innerHTML=state.cities.map(c=>`<article class="building-card"><div class="building-head"><div><h3>${c.symbol} ${c.name}</h3><p>${c.trait}</p></div><span class="tag gold">${c.buildings.length} Buildings</span></div><div class="building-grid">${buildingTemplates.map(b=>`<div class="building-chip ${c.buildings.includes(b.id)?"built":""}">${b.icon} ${b.name}<br><small>${c.buildings.includes(b.id)?"Built":"Available"}</small></div>`).join("")}</div><button class="card-button" data-develop-city="${c.id}">Develop ${c.name}</button></article>`).join("");
 $$("[data-develop-city]").forEach(b=>b.addEventListener("click",()=>openCityBuild(b.dataset.developCity)));
}
function openCityBuild(id){
 const c=state.cities.find(x=>x.id===id);
 showModal(`<p class="eyebrow">CITY DEVELOPMENT</p><h2>${c.symbol} ${c.name}</h2><div class="action-grid">${buildingTemplates.map(b=>`<button class="action-button" data-build="${b.id}" ${c.buildings.includes(b.id)?"disabled":""}>${b.icon} ${b.name}<br><small>${b.costGold} Gold</small></button>`).join("")}</div>`);
 $$("[data-build]").forEach(b=>b.addEventListener("click",()=>buildStructure(c,b.dataset.build)));
}
function buildStructure(c,id){
 const b=buildingTemplates.find(x=>x.id===id);
 if(!spend("gold",b.costGold))return;
 if(b.costStone&&state.stone<b.costStone){showToast("Not enough stone.");state.gold+=b.costGold;return}
 if(b.costWood&&state.wood<b.costWood){showToast("Not enough wood.");state.gold+=b.costGold;return}
 if(b.costBronze&&state.bronze<b.costBronze){showToast("Not enough bronze.");state.gold+=b.costGold;return}
 state.stone-=b.costStone||0;state.wood-=b.costWood||0;state.bronze-=b.costBronze||0;c.buildings.push(id);state.prestige+=8;
 if(id==="temple"){c.temples++;c.player=clamp(c.player+10)}
 if(id==="market")c.wealth=clamp(c.wealth+10);
 addLog(`${b.name} Built in ${c.name}`,b.text);closeModal();renderAll();saveGame(false);
}

function renderHeroes(){
 $("#hero-count").textContent=`${state.heroes.filter(h=>h.recruited).length} Recruited`;
 $("#hero-list").innerHTML=state.heroes.map(h=>`<article class="card"><div class="hero-top"><span class="portrait">${h.portrait}</span><div class="flex1"><h3>${h.name}</h3><p>${h.title}</p></div><span class="tag gold">${h.recruited?`Level ${h.level}`:`${h.cost} Gold`}</span></div><div class="tag-row"><span class="tag">Strength ${h.strength}</span><span class="tag">Wisdom ${h.wisdom}</span><span class="tag">Courage ${h.courage}</span><span class="tag">${h.location}</span></div>${h.recruited?`<div class="meter green"><span style="width:${Math.min(100,h.xp/(h.level*100)*100)}%"></span></div><button class="card-button" data-hero-detail="${h.id}">Manage Hero</button>`:`<button class="card-button" data-recruit="${h.id}">Recruit Hero</button>`}</article>`).join("");
 $$("[data-recruit]").forEach(b=>b.addEventListener("click",()=>recruitHero(b.dataset.recruit)));
 $$("[data-hero-detail]").forEach(b=>b.addEventListener("click",()=>openHeroDetail(b.dataset.heroDetail)));
}
function recruitHero(id){const h=getHero(id);if(!spend("gold",h.cost))return;h.recruited=true;h.status="Awaiting a quest";state.prestige+=10;addLog(`${h.name} Joins Your Cause`,`${h.name} appears in ${h.location}.`);renderAll();saveGame(false)}
function openHeroDetail(id){
 const h=getHero(id);
 showModal(`<p class="eyebrow">HERO PROGRESSION</p><h2>${h.portrait} ${h.name}</h2><p class="muted">${h.title}. Level ${h.level}. Skill points: ${h.skillPoints}.</p><div class="stats"><div class="stat"><strong>${h.health}</strong><small>Health</small></div><div class="stat"><strong>${h.energy}</strong><small>Energy</small></div><div class="stat"><strong>${h.xp}</strong><small>XP</small></div></div><div class="skill-grid"><button class="skill-chip ${h.skills.power?"unlocked":""}" data-skill="power">⚔️ Power Training<br><small>+8 Strength</small></button><button class="skill-chip ${h.skills.tactics?"unlocked":""}" data-skill="tactics">🧠 Tactical Genius<br><small>+8 Wisdom</small></button><button class="skill-chip ${h.skills.leadership?"unlocked":""}" data-skill="leadership">👑 Inspiring Leader<br><small>+8 Leadership</small></button><button class="skill-chip" id="move-hero">🗺️ Move Hero<br><small>${h.location}</small></button></div><p class="muted"><strong>Equipment:</strong> ${h.equipment.length?h.equipment.join(", "):"None"}<br><strong>Traits:</strong> ${h.traits.length?h.traits.join(", "):"None"}</p>`);
 $$("[data-skill]").forEach(b=>b.addEventListener("click",()=>unlockHeroSkill(h,b.dataset.skill)));
 $("#move-hero").addEventListener("click",()=>chooseHeroDestination(h));
}
function unlockHeroSkill(h,skill){
 if(h.skills[skill]){showToast("Skill already unlocked.");return}
 if(h.skillPoints<1){showToast("No skill points available.");return}
 h.skillPoints--;h.skills[skill]=true;
 if(skill==="power")h.strength+=8;if(skill==="tactics")h.wisdom+=8;if(skill==="leadership")h.leadership+=8;
 addLog(`${h.name} Learns a Skill`,skill);closeModal();renderAll();saveGame(false);
}
function chooseHeroDestination(h){
 showModal(`<p class="eyebrow">HERO TRAVEL</p><h2>Move ${h.name}</h2><div class="action-grid">${state.cities.filter(c=>c.name!==h.location).map(c=>`<button class="action-button" data-destination="${c.name}">${c.symbol} ${c.name}</button>`).join("")}</div>`);
 $$("[data-destination]").forEach(b=>b.addEventListener("click",()=>{const old=h.location;h.location=b.dataset.destination;h.status=`Traveling from ${old}`;state.favor=Math.max(0,state.favor-5);addLog(`${h.name} Travels`,`${h.name} moves to ${h.location}.`);closeModal();advanceTurn()}));
}

function renderMonsters(){
 $("#monster-count").textContent=`${state.monsters.filter(m=>m.active).length} Active`;
 $("#monster-list").innerHTML=state.monsters.map(m=>`<article class="card"><div class="monster-top"><span class="portrait">${m.icon}</span><div class="flex1"><h3>${m.name}</h3><p>${m.objective} near ${m.territory}</p></div><span class="tag gold">${m.active?`Phase ${m.phase}`:"Defeated"}</span></div><div class="tag-row"><span class="tag">${m.ability}</span><span class="tag">Weakness: ${m.weakness}</span><span class="tag">Rage ${m.rage}</span></div><div class="meter orange"><span style="width:${Math.max(0,m.currentHealth/m.health*100)}%"></span></div><button class="card-button" data-battle="${m.id}" ${!m.active||!state.heroes.some(h=>h.recruited)?"disabled":""}>Begin Boss Battle</button></article>`).join("");
 $$("[data-battle]").forEach(b=>b.addEventListener("click",()=>chooseHeroForBattle(b.dataset.battle)));
}
function chooseHeroForBattle(monsterId){
 const m=state.monsters.find(x=>x.id===monsterId),heroes=state.heroes.filter(h=>h.recruited&&h.health>20);
 showModal(`<p class="eyebrow">CHOOSE A CHAMPION</p><h2>${m.icon} Face ${m.name}</h2><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-hero-battle="${h.id}">${h.portrait} ${h.name}<br><small>Level ${h.level}</small></button>`).join("")}</div>`);
 $$("[data-hero-battle]").forEach(b=>b.addEventListener("click",()=>startBossBattle(m,getHero(b.dataset.heroBattle))));
}
function startBossBattle(m,h){
 battleState={monsterId:m.id,heroId:h.id,log:[],round:1};
 renderBossBattle();
}
function renderBossBattle(){
 const m=state.monsters.find(x=>x.id===battleState.monsterId),h=getHero(battleState.heroId);
 showModal(`<p class="eyebrow">MULTI-STAGE BOSS BATTLE</p><h2>${h.portrait} ${h.name} vs ${m.icon} ${m.name}</h2><div class="boss-phase">Phase ${m.phase}: ${m.phaseNames[m.phase-1]}</div><div class="stats"><div class="stat"><strong>${Math.round(h.health)}</strong><small>Hero Health</small></div><div class="stat"><strong>${Math.round(m.currentHealth)}</strong><small>Monster Health</small></div><div class="stat"><strong>${m.rage}</strong><small>Monster Rage</small></div></div><div class="battle-log">${battleState.log.slice(-4).map(x=>`<div class="battle-line">${x}</div>`).join("")||'<div class="battle-line">The battle begins.</div>'}</div><div class="action-grid"><button class="action-button" data-boss-action="attack">⚔️ Direct Attack</button><button class="action-button" data-boss-action="weakness">🧠 Exploit Weakness</button><button class="action-button" data-boss-action="ability">🌟 Hero Ability</button><button class="action-button" data-boss-action="divine">⚡ Divine Intervention<br><small>20 Favor</small></button><button class="action-button" data-boss-action="defend">🛡️ Defend</button><button class="action-button" data-boss-action="retreat">🏃 Retreat</button></div>`);
 $$("[data-boss-action]").forEach(b=>b.addEventListener("click",()=>resolveBossRound(b.dataset.bossAction)));
}
function resolveBossRound(action){
 const m=state.monsters.find(x=>x.id===battleState.monsterId),h=getHero(battleState.heroId);
 if(action==="retreat"){h.status="Recovering";battleState=null;closeModal();renderAll();return}
 if(action==="divine"&&!spend("favor",20))return;
 let attack=0,defense=0;
 if(action==="attack")attack=h.strength*.55+Math.random()*20;
 if(action==="weakness")attack=h.wisdom*.65+Math.random()*24+(h.skills.tactics?12:0);
 if(action==="ability")attack=(h.strength+h.courage)*.42+18;
 if(action==="divine")attack=(h.strength+h.wisdom)*.48+30;
 if(action==="defend"){defense=18+h.courage*.2;attack=8}
 if(state.godId==="ares")attack*=1.12;
 const before=m.currentHealth;m.currentHealth-=Math.round(attack);
 battleState.log.push(`${h.name} deals ${Math.round(before-m.currentHealth)} damage.`);
 if(m.currentHealth<=m.health*(1-m.phase/3)&&m.phase<3){m.phase++;m.rage+=12;battleState.log.push(`${m.name} enters Phase ${m.phase}: ${m.phaseNames[m.phase-1]}!`)}
 const retaliation=Math.max(4,m.strength*.28+m.phase*5+m.rage*.15-defense-Math.random()*12);
 h.health=clamp(h.health-Math.round(retaliation));
 battleState.log.push(`${m.name} retaliates for ${Math.round(retaliation)} damage.`);
 m.rage+=4;battleState.round++;
 if(m.currentHealth<=0){finishBossVictory(m,h);return}
 if(h.health<=0){h.health=10;h.status="Gravely wounded";addLog(`${h.name} Falls Before ${m.name}`,`${m.name} remains active.`);battleState=null;closeModal();renderAll();saveGame(false);showToast("The hero was defeated.");return}
 renderBossBattle();
}
function finishBossVictory(m,h){
 m.active=false;m.currentHealth=0;let reward=m.reward*(state.godId==="hades"?1.25:1);state.gold+=Math.round(reward);state.prestige+=35;h.xp+=90;h.status="Victorious";h.traits.push(`Slayer of ${m.name}`);h.equipment.push(`${m.name} Trophy`);levelHero(h);
 const c=getCity(m.territory);if(c){c.unrest=clamp(c.unrest-18);c.player=clamp(c.player+10)}
 addLog(`${m.name} Defeated`,`${h.name} wins a legendary three-phase battle.`);state.completedLegends++;if(Math.random()<.45)discoverArtifact();battleState=null;closeModal();renderAll();saveGame(false);showToast(`${m.name} defeated!`);
}
function levelHero(h){
 while(h.xp>=h.level*100){h.xp-=h.level*100;h.level++;h.skillPoints++;h.strength+=3;h.wisdom+=3;h.courage+=3;h.health=100;h.energy=100;addLog(`${h.name} Reaches Level ${h.level}`,"A new skill point is available.")}
}

function renderQuests(){
 $("#quest-count").textContent=`${state.quests.filter(q=>q.status==="Available").length} Available`;
 const myths=state.mythLog.map(m=>`<article class="card"><div class="card-row"><span class="portrait">📖</span><span class="tag gold">Dynamic Myth</span></div><h3>${m.title}</h3><p>${m.text}</p></article>`).join("");
 $("#quest-list").innerHTML=myths+state.quests.map(q=>`<article class="card"><div class="card-row"><span class="pill">${q.city}</span><span class="tag gold">${q.difficulty}</span></div><h3>${q.name}</h3><p>${q.description}</p><button class="card-button" data-quest="${q.id}" ${q.status!=="Available"||!state.heroes.some(h=>h.recruited)?"disabled":""}>Assign Hero</button></article>`).join("");
 $$("[data-quest]").forEach(b=>b.addEventListener("click",()=>assignQuest(b.dataset.quest)));
}
function assignQuest(id){
 const q=state.quests.find(x=>x.id===id),heroes=state.heroes.filter(h=>h.recruited);
 showModal(`<p class="eyebrow">ASSIGN QUEST</p><h2>${q.name}</h2><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-quest-hero="${h.id}">${h.portrait} ${h.name}<br><small>${q.stat}: ${h[q.stat]}</small></button>`).join("")}</div>`);
 $$("[data-quest-hero]").forEach(b=>b.addEventListener("click",()=>resolveQuest(q,getHero(b.dataset.questHero))));
}
function resolveQuest(q,h){
 let chance=45+h[q.stat]*.45+h.level*4+(getCity(q.city).buildings.includes("academy")?12:0)+(state.questBoost?20:0);state.questBoost=false;
 if(state.godId==="athena")chance+=10;
 if(Math.random()*100<chance){q.status="Completed";state.gold+=q.rewardGold;state.prestige+=q.rewardPrestige;h.xp+=65;h.location=q.city;h.traits.push("Quest Veteran");levelHero(h);addLog(`${q.name} Completed`,`${h.name} succeeds in ${q.city}.`);state.completedLegends++;if(Math.random()<.35)discoverArtifact()}else{q.status="Failed";h.health=clamp(h.health-25);addLog(`${q.name} Failed`,`${h.name} returns wounded.`)}
 closeModal();advanceTurn();
}



function renderKingdoms(){
 const wars=state.kingdoms.reduce((s,k)=>s+k.atWarWith.length,0)/2;
 const alliances=state.kingdoms.reduce((s,k)=>s+k.allies.length,0)/2;
 $("#war-count").textContent=`${wars} Wars`;
 $("#kingdom-summary").innerHTML=`<p class="eyebrow">DIPLOMACY OF GREECE</p><h3>${alliances} alliances and ${wars} active wars shape the world</h3><div class="stats"><div class="stat"><strong>${alliances}</strong><small>Alliances</small></div><div class="stat"><strong>${wars}</strong><small>Wars</small></div><div class="stat"><strong>${state.kingdoms.filter(k=>k.tribute).length}</strong><small>Tributaries</small></div></div>`;
 $("#kingdom-list").innerHTML=state.kingdoms.map(k=>`<article class="card kingdom-card"><div class="kingdom-banner"><span>${getCity(k.name).symbol}</span><div class="flex1"><h3>${k.name}</h3><p>${k.ruler} • ${k.personality}</p></div><span class="tag ${k.atWarWith.length?"war-badge":"peace-badge"}">${k.atWarWith.length?`${k.atWarWith.length} War`:"Peace"}</span></div><div class="diplomacy-grid"><div class="diplomacy-stat"><strong>${k.army}</strong><small>Army</small></div><div class="diplomacy-stat"><strong>${k.economy}</strong><small>Economy</small></div><div class="diplomacy-stat"><strong>${k.relation}</strong><small>Relation</small></div></div><div class="tag-row"><span class="tag">Allies: ${k.allies.join(", ")||"None"}</span><span class="tag">Enemies: ${k.atWarWith.join(", ")||"None"}</span><span class="tag">Tax: ${k.taxRate}</span></div><button class="card-button" data-kingdom="${k.name}">Negotiate with ${k.name}</button></article>`).join("");
 $$("[data-kingdom]").forEach(b=>b.addEventListener("click",()=>openKingdomDiplomacy(b.dataset.kingdom)));
}

function openKingdomDiplomacy(name){
 const k=state.kingdoms.find(x=>x.name===name);
 showModal(`<p class="eyebrow">KINGDOM DIPLOMACY</p><h2>${getCity(k.name).symbol} ${k.name}</h2><p class="muted">${k.ruler} is ${k.personality}. Relationship: ${k.relation}.</p><div class="action-grid"><button class="action-button" data-diplomacy="alliance">🤝 Propose Alliance<br><small>15 Prestige</small></button><button class="action-button" data-diplomacy="tribute">🪙 Request Tribute<br><small>10 Favor</small></button><button class="action-button" data-diplomacy="peace">🕊️ Negotiate Peace</button><button class="action-button" data-diplomacy="war">⚔️ Encourage War</button><button class="action-button" data-diplomacy="bless">✨ Bless Kingdom<br><small>20 Favor</small></button><button class="action-button" data-diplomacy="tax">👑 Set Tax Policy</button></div>`);
 $$("[data-diplomacy]").forEach(b=>b.addEventListener("click",()=>resolveKingdomDiplomacy(k,b.dataset.diplomacy)));
}

function resolveKingdomDiplomacy(k,action){
 if(action==="alliance"){
  if(!spend("prestige",15))return;
  const candidates=state.kingdoms.filter(x=>x.name!==k.name&&!k.allies.includes(x.name));
  if(!candidates.length){showToast("No alliance partner available.");return}
  const other=randomItem(candidates),success=Math.random()*100<(k.relation+other.relation)/2;
  if(success){k.allies.push(other.name);other.allies.push(k.name);k.relation=clamp(k.relation+10);other.relation=clamp(other.relation+8);addLog(`${k.name} and ${other.name} Form an Alliance`,"A new diplomatic bloc rises.")}
  else addLog("Alliance Proposal Rejected",`${k.name} could not persuade another kingdom.`);
 }
 if(action==="tribute"){if(!spend("favor",10))return;k.tribute=true;k.relation=clamp(k.relation-5);state.gold+=25;recordGold(25,`${k.name} tribute`)}
 if(action==="peace"){
  if(!k.atWarWith.length){showToast("This kingdom is not at war.");return}
  k.atWarWith.slice().forEach(enemy=>{const e=state.kingdoms.find(x=>x.name===enemy);e.atWarWith=e.atWarWith.filter(x=>x!==k.name)});k.atWarWith=[];state.prestige+=10;addLog(`${k.name} Accepts Peace`,"Divine diplomacy ends the conflict.");
 }
 if(action==="war"){
  const candidates=state.kingdoms.filter(x=>x.name!==k.name&&!k.allies.includes(x.name)&&!k.atWarWith.includes(x.name));
  if(!candidates.length){showToast("No valid enemy available.");return}
  const enemy=randomItem(candidates);k.atWarWith.push(enemy.name);enemy.atWarWith.push(k.name);k.relation=clamp(k.relation-4);state.titanWar+=2;addLog(`${k.name} Declares War on ${enemy.name}`,"Armies begin to mobilize.");
 }
 if(action==="bless"){if(!spend("favor",20))return;k.army=clamp(k.army+8);k.economy=clamp(k.economy+6);k.relation=clamp(k.relation+10);getCity(k.name).player=clamp(getCity(k.name).player+6)}
 if(action==="tax"){closeModal();openTaxPolicy(k);return}
 closeModal();renderAll();saveGame(false);
}

function openTaxPolicy(k){
 showModal(`<p class="eyebrow">TAX POLICY</p><h2>${k.name}</h2><p class="muted">Current policy: ${k.taxRate}. Higher taxes produce more Gold but reduce loyalty and increase unrest.</p><div class="action-grid"><button class="action-button" data-tax="Light">🌿 Light Tax<br><small>+8 yearly Gold</small></button><button class="action-button" data-tax="Normal">⚖️ Normal Tax<br><small>+15 yearly Gold</small></button><button class="action-button" data-tax="Heavy">👑 Heavy Tax<br><small>+28 yearly Gold</small></button><button class="action-button" data-tax="Exempt">🕊️ Tax Exemption<br><small>+Loyalty</small></button></div>`);
 $$("[data-tax]").forEach(b=>b.addEventListener("click",()=>{k.taxRate=b.dataset.tax;const c=getCity(k.name);if(k.taxRate==="Heavy"){k.loyalty=clamp(k.loyalty-8);c.unrest=clamp(c.unrest+8)}if(k.taxRate==="Light"){k.loyalty=clamp(k.loyalty+3)}if(k.taxRate==="Exempt"){k.loyalty=clamp(k.loyalty+8);c.unrest=clamp(c.unrest-5)}addLog(`${k.name} Tax Policy Changed`,`${k.taxRate} taxation is now active.`);closeModal();renderAll();saveGame(false)}));
}

function calculateYearlyIncome(){
 let taxes=0,markets=0,harbors=0,mines=0,tribute=0,artifacts=0;
 state.kingdoms.forEach(k=>{taxes+=k.taxRate==="Heavy"?28:k.taxRate==="Normal"?15:k.taxRate==="Light"?8:0;if(k.mine)mines+=18;if(k.tribute)tribute+=20});
 state.cities.forEach(c=>{if(c.buildings.includes("market"))markets+=18;if(c.buildings.includes("harbor"))harbors+=14});
 if(state.artifacts.find(a=>a.id==="golden-fleece"&&a.found))artifacts+=25;
 return{taxes,markets,harbors,mines,tribute,artifacts,total:taxes+markets+harbors+mines+tribute+artifacts};
}

function renderEconomy(){
 const inc=calculateYearlyIncome();state.yearlyIncome=inc.total;
 $("#income-label").textContent=`${inc.total} / Year`;
 $("#income-summary").innerHTML=`<p class="eyebrow">GOLD INCOME</p><h3>${state.gold} Gold available and ${inc.total} expected next year</h3><div class="income-breakdown"><div class="income-row"><span>Kingdom taxes</span><strong>+${inc.taxes}</strong></div><div class="income-row"><span>Markets & harbors</span><strong>+${inc.markets+inc.harbors}</strong></div><div class="income-row"><span>Mines & tribute</span><strong>+${inc.mines+inc.tribute}</strong></div><div class="income-row"><span>Artifacts</span><strong>+${inc.artifacts}</strong></div></div>`;
 $("#gold-action-list").innerHTML=goldActions.map(a=>`<article class="card economy-card"><div class="card-row"><div><span class="portrait">${a.icon}</span><h3>${a.name}</h3></div><span class="tag ${a.risk==="Low"?"risk-low":a.risk==="High"?"risk-high":"risk-medium"}">${a.risk} Risk</span></div><p>${a.text}</p><div class="tag-row"><span class="tag">Cost ${a.cost} Gold</span><span class="tag">Reward ${a.min}-${a.max}</span></div><button class="card-button" data-gold-action="${a.id}" ${state.gold<a.cost?"disabled":""}>Start Activity</button></article>`).join("");
 $$("[data-gold-action]").forEach(b=>b.addEventListener("click",()=>performGoldAction(b.dataset.goldAction)));
 $("#enterprise-list").innerHTML=state.enterprises.length?state.enterprises.map(e=>`<article class="card enterprise-active"><div class="card-row"><h3>${e.icon} ${e.name}</h3><span class="pill">${e.yearsLeft} year</span></div><p>${e.text}</p></article>`).join(""):`<article class="card"><h3>No active enterprises</h3><p>Fund expeditions, mines, or trade activities to grow your treasury.</p></article>`;
}

function performGoldAction(id){
 const a=goldActions.find(x=>x.id===id);
 if(a.cost&&!spend("gold",a.cost))return;
 if(id==="taxes"){const k=randomItem(state.kingdoms);const amount=k.taxRate==="Heavy"?45:k.taxRate==="Normal"?28:k.taxRate==="Light"?16:5;state.gold+=amount;getCity(k.name).unrest=clamp(getCity(k.name).unrest+(k.taxRate==="Heavy"?7:2));recordGold(amount,`Taxes from ${k.name}`)}
 if(id==="expedition"){state.enterprises.push({id:uid("enterprise"),icon:"⛵",name:"Merchant Expedition",yearsLeft:1,min:a.min,max:a.max,risk:.38,text:"A merchant fleet sails into uncertain waters."});showToast("Expedition launched. Advance the year.")}
 if(id==="caravan"){const hero=state.heroes.find(h=>h.recruited);const success=Math.random()<(hero?.leadership||40)/100+.35;const amount=success?rand(a.min,a.max):0;state.gold+=amount;recordGold(amount,success?"Protected caravan":"Caravan lost");if(hero)hero.xp+=20}
 if(id==="trophy"){const hero=state.heroes.find(h=>h.recruited&&h.equipment.some(x=>x.includes("Trophy")));if(!hero){showToast("No monster trophy available.");return}const trophy=hero.equipment.find(x=>x.includes("Trophy"));hero.equipment=hero.equipment.filter(x=>x!==trophy);const amount=rand(a.min,a.max);state.gold+=amount;recordGold(amount,`Sold ${trophy}`)}
 if(id==="mine"){const k=state.kingdoms.find(k=>!k.mine);if(!k){showToast("All kingdoms already have mines.");state.gold+=a.cost;return}k.mine=true;state.enterprises.push({id:uid("enterprise"),icon:"⛏️",name:`${k.name} Royal Mine`,yearsLeft:1,min:12,max:25,risk:.12,text:"Workers prepare a permanent mining operation."})}
 if(id==="tribute"){const k=randomItem(state.kingdoms);const success=Math.random()*100<k.relation+state.prestige*.15;if(success){const amount=rand(a.min,a.max);state.gold+=amount;k.tribute=true;k.relation=clamp(k.relation-8);recordGold(amount,`${k.name} tribute`)}else{k.relation=clamp(k.relation-12);getCity(k.name).unrest=clamp(getCity(k.name).unrest+5);addLog(`${k.name} Refuses Tribute`,"The ruler resents your demand.")}}
 if(id==="games"){openOlympicGames();return}
 if(id==="titanBargain"){const t=state.titans.find(t=>t.status==="Allied");if(!t){showToast("You need an allied Titan.");state.gold+=a.cost;return}const amount=rand(a.min,a.max);state.gold+=amount;state.tartarusStability=clamp(state.tartarusStability-10);t.relationship=clamp(t.relationship-5);recordGold(amount,`Bargain with ${t.name}`)}
 renderAll();saveGame(false);
}

function openOlympicGames(){
 const heroes=state.heroes.filter(h=>h.recruited);
 if(!heroes.length){showToast("Recruit a hero first.");state.gold+=40;return}
 showModal(`<p class="eyebrow">OLYMPIC GAMES</p><h2>Choose Your Champion</h2><p class="muted">The hero competes in wrestling, archery, racing, javelin, discus, and endurance.</p><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-olympic-hero="${h.id}">${h.portrait} ${h.name}<br><small>Level ${h.level}</small></button>`).join("")}</div>`);
 $$("[data-olympic-hero]").forEach(b=>b.addEventListener("click",()=>resolveOlympics(getHero(b.dataset.olympicHero))));
}

function resolveOlympics(h){
 const score=h.strength+h.courage+h.wisdom+h.level*10+Math.random()*120;
 const place=score>300?1:score>245?2:score>200?3:4;
 const reward=place===1?120:place===2?80:place===3?55:15;
 state.gold+=reward;state.prestige+=place===1?30:place===2?18:place===3?10:2;h.xp+=place===1?60:30;levelHero(h);state.olympics.lastWinner=place===1?h.name:null;recordGold(reward,`${h.name} placed #${place} at the Olympic Games`);addLog("Olympic Games Held",`${h.name} finishes in place ${place}.`);closeModal();renderAll();saveGame(false);
}

function resolveEnterprises(){
 state.enterprises.slice().forEach(e=>{
  e.yearsLeft--;
  if(e.yearsLeft<=0){
   const success=Math.random()>e.risk;
   const amount=success?rand(e.min,e.max):0;
   state.gold+=amount;recordGold(amount,success?`${e.name} succeeded`:`${e.name} failed`);
   state.enterprises=state.enterprises.filter(x=>x.id!==e.id);
  }
 });
}

function recordGold(amount,source){state.goldLedger.unshift({amount,source,year:state.year});state.goldLedger=state.goldLedger.slice(0,20);if(amount>0)showToast(`+${amount} Gold: ${source}`)}
function rand(min,max){return Math.floor(Math.random()*(max-min+1))+min}

function renderArtifacts(){
 $("#artifact-count").textContent=`${state.artifacts.filter(a=>a.found).length} Found`;
 $("#artifact-list").innerHTML=state.artifacts.map(a=>`<article class="card artifact-card ${a.equippedHeroId?"artifact-equipped":""}"><div class="card-row"><span class="artifact-icon">${a.icon}</span><div class="flex1"><h3>${a.name}</h3><p>${a.rarity} • ${a.effect}</p></div><span class="tag gold">${a.found?(a.equippedHeroId?"Equipped":"Owned"):"Undiscovered"}</span></div>${a.found?`<button class="card-button" data-artifact="${a.id}">${a.equippedHeroId?"Reassign Artifact":"Equip to Hero"}</button>`:""}</article>`).join("");
 $$("[data-artifact]").forEach(b=>b.addEventListener("click",()=>chooseArtifactHero(b.dataset.artifact)));
}

function chooseArtifactHero(id){
 const a=state.artifacts.find(x=>x.id===id),heroes=state.heroes.filter(h=>h.recruited);
 showModal(`<p class="eyebrow">EQUIP ARTIFACT</p><h2>${a.icon} ${a.name}</h2><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-artifact-hero="${h.id}">${h.portrait} ${h.name}<br><small>${a.stat} ${h[a.stat]}</small></button>`).join("")}</div>`);
 $$("[data-artifact-hero]").forEach(b=>b.addEventListener("click",()=>equipArtifact(a,getHero(b.dataset.artifactHero))));
}

function equipArtifact(a,h){
 if(a.equippedHeroId){const old=getHero(a.equippedHeroId);if(old)old[a.stat]=Math.max(1,old[a.stat]-a.amount)}
 a.equippedHeroId=h.id;h[a.stat]+=a.amount;if(!h.equipment.includes(a.name))h.equipment.push(a.name);addLog(`${a.name} Equipped`,`${h.name} receives the artifact.`);closeModal();renderAll();saveGame(false);
}

function discoverArtifact(){
 const available=state.artifacts.filter(a=>!a.found);if(!available.length)return;
 const a=randomItem(available);a.found=true;state.prestige+=12;addLog(`${a.name} Discovered`,a.effect);
}

function renderLegacy(){
 updateVictories();
 $("#victory-status").textContent=state.victories.length?`${state.victories.length} Path Complete`:"Campaign Active";
 $("#victory-list").innerHTML=victoryTemplates.map(v=>{const p=getVictoryProgress(v.id),complete=state.victories.includes(v.id);return `<article class="card victory-card ${complete?"victory-complete":""}"><div class="card-row"><div><span class="portrait">${v.icon}</span><h3>${v.name}</h3></div><span class="tag gold">${complete?"Completed":`${p}%`}</span></div><p>${v.text}</p><div class="meter victory-progress"><span style="width:${p}%"></span></div></article>`}).join("");
 $("#bloodline-list").innerHTML=state.bloodlines.length?state.bloodlines.map(b=>`<article class="card bloodline-card"><h3>${b.icon} House of ${b.founder}</h3><div class="family-tree"><span class="family-node">${b.founder}</span><span class="family-arrow">→</span>${b.children.map(c=>`<span class="family-node">${c.name}, age ${c.age}<br>${c.trait}</span>`).join('<span class="family-arrow">•</span>')}</div><p>Legacy strength: ${b.legacy}</p></article>`).join(""):`<article class="card"><h3>No legendary bloodlines yet</h3><p>Recruited heroes may marry and have children as years pass.</p></article>`;
}

function updateVictories(){victoryTemplates.forEach(v=>{if(getVictoryProgress(v.id)>=100&&!state.victories.includes(v.id)){state.victories.push(v.id);state.prestige+=50;addLog(`${v.name} Victory Achieved`,"A legendary campaign path has been completed.")}})}
function getVictoryProgress(id){
 if(id==="olympus")return Math.min(100,Math.round((state.cities.filter(c=>c.player>c.rival).length/8*.6+state.prestige/180*.4)*100));
 if(id==="titan-slayer")return Math.min(100,Math.round(state.titans.filter(t=>["Resealed","Defeated"].includes(t.status)).length/state.titans.length*100));
 if(id==="peacemaker"){const wars=state.kingdoms.reduce((s,k)=>s+k.atWarWith.length,0);return Math.min(100,Math.round((state.titans.filter(t=>t.status==="Allied").length/3*.45+(wars===0?1:0)*.25+state.tartarusStability/130*.3)*100))}
 if(id==="golden-age"){const wealth=state.cities.reduce((s,c)=>s+c.wealth,0)/state.cities.length;return Math.min(100,Math.round((state.gold/600*.4+state.food/500*.3+wealth/75*.3)*100))}
 if(id==="titan-rebellion"){const cronus=state.titans.find(t=>t.id==="cronus");return Math.min(100,Math.round(state.titanWar/100*70+(["Allied","Escaped"].includes(cronus.status)?30:0)))}
 if(id==="strategist"){const alliances=state.kingdoms.reduce((s,k)=>s+k.allies.length,0)/2;return Math.min(100,Math.round(state.councilHistory.filter(v=>v.result==="PASSED").length/8*50+alliances/5*50))}
 if(id==="legend-maker"){const done=state.quests.filter(q=>q.status==="Completed").length+state.mythLog.length;const arts=state.artifacts.filter(a=>a.found).length;return Math.min(100,Math.round(done/10*55+arts/6*45))}
 return 0;
}

function bloodlineYearTurn(){
 state.bloodlines.forEach(b=>b.children.forEach(c=>c.age++));
 state.heroes.filter(h=>h.recruited).forEach(h=>{
  h.age=(h.age||25)+1;
  let line=state.bloodlines.find(b=>b.founder===h.name);
  if(!line&&state.year>=3&&Math.random()<.18){line={founder:h.name,icon:h.portrait,legacy:h.level*10,children:[]};state.bloodlines.push(line);state.marriages.push({hero:h.name,year:state.year});addLog(`${h.name} Founds a Legendary House`,"A heroic bloodline begins.")}
  if(line&&line.children.length<3&&Math.random()<.22){const traits=["Brave","Clever","Divine-Touched","Swift","Strong","Prophetic"];const child={name:randomItem(childNames),age:0,trait:randomItem(traits)};line.children.push(child);line.legacy+=8;addLog(`A Child Is Born to the House of ${h.name}`,`${child.name} inherits the trait ${child.trait}.`)}
 });
}

function kingdomYearTurn(){
 state.kingdoms.forEach(k=>{
  k.economy=clamp(k.economy+Math.floor(Math.random()*7)-2);
  k.loyalty=clamp(k.loyalty+Math.floor(Math.random()*7)-3);
  if(k.atWarWith.length){const enemy=state.kingdoms.find(x=>x.name===randomItem(k.atWarWith));if(enemy){const own=k.army+Math.random()*40,other=enemy.army+Math.random()*40;if(own>other){k.army=clamp(k.army-5);enemy.army=clamp(enemy.army-10);getCity(enemy.name).unrest=clamp(getCity(enemy.name).unrest+8);addLog(`${k.name} Wins a Battle Against ${enemy.name}`,"The war shifts in favor of the victor.")}else{k.army=clamp(k.army-10)}}}
  else if(Math.random()<.08){const target=state.kingdoms.find(x=>x.name!==k.name&&!k.allies.includes(x.name)&&!k.atWarWith.includes(x.name));if(target){k.atWarWith.push(target.name);target.atWarWith.push(k.name);addLog(`${k.name} Declares War on ${target.name}`,"A new conflict begins without divine permission.")}}
 });
}

function renderTitans(){
 const escaped=state.titans.filter(t=>t.status==="Escaped").length;
 const allied=state.titans.filter(t=>t.status==="Allied").length;
 $("#tartarus-status").textContent=state.tartarusStability>=70?"Seals Stable":state.tartarusStability>=40?"Seals Weakening":"Tartarus Failing";
 $("#tartarus-summary").innerHTML=`<p class="eyebrow">TARTARUS STABILITY</p><h3 class="${state.tartarusStability<40?"tartarus-warning":""}">${Math.round(state.tartarusStability)}% stability beneath Greece</h3><div class="meter ${state.tartarusStability<40?"red":"green"}"><span style="width:${state.tartarusStability}%"></span></div><div class="stats"><div class="stat"><strong>${escaped}</strong><small>Escaped</small></div><div class="stat"><strong>${allied}</strong><small>Allied</small></div><div class="stat"><strong>${state.titanWar}</strong><small>War Level</small></div></div>`;
 $("#titan-list").innerHTML=state.titans.map(t=>{
  const cls=t.status==="Escaped"?"titan-awake":t.status==="Allied"?"titan-allied":"titan-sealed";
  return `<article class="card titan-card ${cls}"><div class="titan-head"><div class="council-head"><span class="titan-icon">${t.icon}</span><div><h3>${t.name}</h3><p>${t.domain}</p></div></div><span class="tag gold">${t.status}</span></div><div class="seal-grid"><div class="seal-stat"><strong>${Math.round(t.seal)}</strong><small>Seal</small></div><div class="seal-stat"><strong>${t.danger}</strong><small>Danger</small></div><div class="seal-stat"><strong>${t.relationship}</strong><small>Relation</small></div></div><p><strong>Temperament:</strong> ${t.temperament}<br><strong>Promise:</strong> ${t.gift}<br><strong>Goal:</strong> ${t.goal}</p><button class="card-button" data-titan="${t.id}">Interact with ${t.name}</button></article>`;
 }).join("");
 $$("[data-titan]").forEach(b=>b.addEventListener("click",()=>openTitanEncounter(b.dataset.titan)));
}

function openTitanEncounter(id){
 const t=state.titans.find(x=>x.id===id);
 const statusText=t.status==="Sealed"?"The Titan speaks through dreams from beneath "+t.sealCity+".":t.status==="Allied"?"The Titan is bound to you by a dangerous pact.":"The Titan walks freely and threatens the order of Olympus.";
 showModal(`<p class="eyebrow">TITAN ENCOUNTER</p><h2>${t.icon} ${t.name}</h2><p class="muted">${statusText}</p><div class="boss-phase">${t.domain} — ${t.temperament}</div><div class="titan-choice"><button class="action-button" data-titan-action="reinforce">⛓️ Reinforce Seal<br><small>25 Favor</small></button><button class="action-button" data-titan-action="negotiate">🗣️ Negotiate</button><button class="action-button" data-titan-action="exploit">🔥 Exploit Power<br><small>15 Prestige</small></button><button class="action-button" data-titan-action="council">🏛️ Call Council Vote</button>${t.status==="Escaped"?'<button class="action-button" data-titan-action="battle">⚔️ Confront Titan</button>':""}${t.status==="Sealed"?'<button class="action-button" data-titan-action="release">🔓 Propose Release</button>':""}</div>`);
 $$("[data-titan-action]").forEach(b=>b.addEventListener("click",()=>resolveTitanAction(t,b.dataset.titanAction)));
}

function resolveTitanAction(t,action){
 if(action==="reinforce"){
  if(!spend("favor",25))return;
  t.seal=clamp(t.seal+18);state.tartarusStability=clamp(state.tartarusStability+6);t.relationship=clamp(t.relationship-5);
  addLog(`${t.name}'s Seal Reinforced`,`${t.sealCity} is protected from the Titan's influence.`);
 }
 if(action==="negotiate"){
  const success=Math.random()*100<t.persuasion+state.prestige*.15;
  t.encounters++;
  if(success){t.relationship=clamp(t.relationship+14);state.prestige+=5;addLog(`Bargain with ${t.name}`,`${t.name} listens to your terms.`)}
  else{t.relationship=clamp(t.relationship-8);t.seal=clamp(t.seal-6);state.tartarusStability=clamp(state.tartarusStability-3);addLog(`${t.name} Rejects Your Terms`,"The prison trembles with anger.")}
 }
 if(action==="exploit"){
  if(!spend("prestige",15))return;
  t.seal=clamp(t.seal-10);t.influence+=10;state.tartarusStability=clamp(state.tartarusStability-5);
  applyTitanGift(t);addLog(`${t.name}'s Power Exploited`,t.gift);
 }
 if(action==="council"||action==="release"){
  closeModal();openCouncilVoteForTitan(t,action==="release"?"release":"policy");return;
 }
 if(action==="battle"){
  closeModal();openTitanBattle(t);return;
 }
 closeModal();renderAll();saveGame(false);
}

function applyTitanGift(t){
 if(t.id==="prometheus"){state.cities.forEach(c=>c.wealth=clamp(c.wealth+4));state.faith+=15}
 if(t.id==="rhea"){state.cities.forEach(c=>c.population+=15);state.food+=25}
 if(t.id==="oceanus"){state.gold+=45;state.cities.filter(c=>c.coastal).forEach(c=>c.player=clamp(c.player+5))}
 if(t.id==="hyperion"){state.faith+=35;state.prestige+=8}
 if(t.id==="themis"){state.prestige+=20;state.council.forEach(g=>g.relationship=clamp(g.relationship+2))}
 if(t.id==="atlas"){state.cities.forEach(c=>c.protected=true)}
 if(t.id==="epimetheus"){state.gold+=Math.floor(Math.random()*50)+10;state.food+=Math.floor(Math.random()*30)}
 if(t.id==="cronus"){state.favor+=35;state.titanWar+=8}
}

function renderCouncil(){
 const avg=Math.round(state.council.reduce((s,g)=>s+g.relationship,0)/state.council.length);
 $("#council-status").textContent=state.pendingVote?"Vote Pending":avg>=60?"Council Supportive":avg<40?"Council Divided":"Council Watchful";
 $("#council-summary").innerHTML=`<p class="eyebrow">OLYMPUS COUNCIL</p><h3>Major Titan decisions require a divine vote</h3><div class="stats"><div class="stat"><strong>${avg}</strong><small>Avg Relation</small></div><div class="stat"><strong>${state.councilHistory.length}</strong><small>Votes Held</small></div><div class="stat"><strong>${state.prestige}</strong><small>Prestige</small></div></div><button id="open-general-vote" class="card-button">Propose Titan Policy</button>`;
 $("#open-general-vote").addEventListener("click",()=>openGeneralCouncilVote());
 $("#council-gods").innerHTML=state.council.map(g=>`<article class="council-card"><div class="council-head"><span class="council-icon">${g.icon}</span><div><h3>${g.name}</h3><p>${g.bias} • ${g.mood}</p></div></div><div class="tag-row"><span class="tag">Relation ${g.relationship}</span><span class="tag">Favor owed ${g.favorOwed}</span></div><button class="card-button" data-council-meet="${g.name}">Lobby ${g.name}</button></article>`).join("");
 $$("[data-council-meet]").forEach(b=>b.addEventListener("click",()=>openCouncilLobby(b.dataset.councilMeet)));
 $("#divine-request-list").innerHTML=state.councilHistory.length?state.councilHistory.slice(0,5).map(v=>`<article class="card council-vote-card"><h3>${v.title}</h3><p>${v.result} — ${v.yes} YES / ${v.no} NO</p></article>`).join(""):`<article class="card"><h3>No votes recorded</h3><p>Call a vote on a Titan policy to begin shaping Olympus.</p></article>`;
}

function openCouncilLobby(name){
 const g=state.council.find(x=>x.name===name);
 showModal(`<p class="eyebrow">DIVINE LOBBYING</p><h2>${g.icon} ${g.name}</h2><p class="muted">Relationship ${g.relationship}. Bias: ${g.bias}. Mood: ${g.mood}.</p><div class="action-grid"><button class="action-button" data-lobby="gift">🎁 Offer Gift<br><small>25 Gold</small></button><button class="action-button" data-lobby="favor">🤝 Call in Favor<br><small>${g.favorOwed||"None owed"}</small></button><button class="action-button" data-lobby="promise">📜 Make Promise<br><small>10 Prestige</small></button><button class="action-button" data-lobby="threaten">⚡ Threaten Consequences</button></div>`);
 $$("[data-lobby]").forEach(b=>b.addEventListener("click",()=>resolveLobby(g,b.dataset.lobby)));
}

function resolveLobby(g,action){
 if(action==="gift"){if(!spend("gold",25))return;g.relationship=clamp(g.relationship+10);g.mood="Pleased"}
 if(action==="favor"){if(g.favorOwed<1){showToast("No favor is owed.");return}g.favorOwed--;g.relationship=clamp(g.relationship+14);g.mood="Committed"}
 if(action==="promise"){if(!spend("prestige",10))return;g.relationship=clamp(g.relationship+8);g.favorOwed++;g.mood="Interested"}
 if(action==="threaten"){g.relationship=clamp(g.relationship+(Math.random()<.35?8:-14));g.mood=g.relationship>45?"Wary":"Hostile";state.prestige+=3}
 closeModal();renderAll();saveGame(false);
}

function openGeneralCouncilVote(){
 const issue=randomItem(titanVoteIssues),t=state.titans.find(x=>x.id===issue.titanId);
 openCouncilVote(issue,t);
}

function openCouncilVoteForTitan(t,mode){
 const issue=mode==="release"
  ?{id:"release-"+t.id,title:`Release ${t.name} Under Sacred Oath`,description:`${t.name} promises: ${t.gift}. The Council must judge the risk.`,yesEffect:t.id==="rhea"?"life":t.id==="prometheus"?"progress":"mercy",titanId:t.id}
  :randomItem(titanVoteIssues.filter(i=>i.titanId===t.id).length?titanVoteIssues.filter(i=>i.titanId===t.id):titanVoteIssues);
 openCouncilVote(issue,t);
}

function calculateVote(g,issue,t){
 let score=g.relationship-50;
 if(g.bias===issue.yesEffect)score+=24;
 if(["order","law","balance"].includes(g.bias)&&t.danger>70)score-=22;
 if(["progress","wisdom","freedom"].includes(g.bias)&&["prometheus","themis"].includes(t.id))score+=18;
 if(g.name===getGod().name)score+=12;
 score+=g.favorOwed*8;
 return score>8?"YES":score<-8?"NO":"UNDECIDED";
}

function openCouncilVote(issue,t){
 const votes=state.council.map(g=>({name:g.name,icon:g.icon,vote:calculateVote(g,issue,t)}));
 state.pendingVote={issue,titanId:t.id,votes};
 showModal(`<p class="eyebrow">OLYMPUS COUNCIL VOTE</p><h2>${issue.title}</h2><p class="muted">${issue.description}</p><div class="vote-board">${votes.map(v=>`<div class="vote-member ${v.vote.toLowerCase()}">${v.icon} ${v.name}<br><strong>${v.vote}</strong></div>`).join("")}</div><p class="muted">Undecided gods may be persuaded before the final vote.</p><div class="choice-row"><button id="finalize-vote" class="choice-button good">Cast Your Vote & Finalize</button><button id="delay-vote" class="choice-button bad">Delay Vote</button></div>`);
 $("#finalize-vote").addEventListener("click",finalizeCouncilVote);
 $("#delay-vote").addEventListener("click",()=>{closeModal();switchView("council-view");showToast("Lobby undecided gods, then propose again.")});
}

function finalizeCouncilVote(){
 const p=state.pendingVote;if(!p)return;
 const t=state.titans.find(x=>x.id===p.titanId);
 let yes=1,no=0;
 p.votes.forEach(v=>{
  if(v.name===getGod().name)return;
  if(v.vote==="YES")yes++;
  else if(v.vote==="NO")no++;
  else{
   const g=state.council.find(x=>x.name===v.name);
   if(Math.random()*100<g.relationship+g.favorOwed*10){yes++}else no++;
  }
 });
 const passed=yes>no;
 if(passed){applyCouncilDecision(p.issue,t);state.prestige+=12}
 else{state.prestige=Math.max(0,state.prestige-4);t.relationship=clamp(t.relationship-5)}
 state.councilHistory.unshift({title:p.issue.title,yes,no,result:passed?"PASSED":"FAILED",year:state.year});
 addLog(`Council Vote ${passed?"Passed":"Failed"}`,`${p.issue.title}: ${yes} YES to ${no} NO.`);
 state.pendingVote=null;closeModal();renderAll();saveGame(false);showToast(`Proposal ${passed?"passed":"failed"} ${yes}-${no}.`);
}

function applyCouncilDecision(issue,t){
 if(issue.id.startsWith("release-")||issue.id==="open-rhea"){
  t.status="Allied";t.seal=0;t.relationship=clamp(t.relationship+25);state.tartarusStability=clamp(state.tartarusStability-10);applyTitanGift(t);
 }
 if(issue.id==="prometheus-fire"){t.status="Allied";t.relationship=80;state.cities.find(c=>c.name==="Athens").buildings.push("academy");state.prestige+=15;state.tartarusStability-=6}
 if(issue.id==="hunt-cronus"){state.titanWar+=25;t.status=t.status==="Sealed"?"Targeted":t.status;state.heroes.filter(h=>h.recruited).forEach(h=>h.courage+=5)}
 if(issue.id==="tartarus-expedition"){state.heroes.filter(h=>h.recruited).forEach(h=>{h.xp+=35;h.equipment.push("Tartarus Relic");levelHero(h)});state.tartarusStability+=8}
 if(issue.id==="titan-alliance"){t.status="Allied";t.relationship=75;state.titanWar=Math.max(0,state.titanWar-5)}
}

function openTitanBattle(t){
 const heroes=state.heroes.filter(h=>h.recruited&&h.health>25);
 if(!heroes.length){showToast("Recruit a healthy hero first.");return}
 showModal(`<p class="eyebrow">TITAN CONFRONTATION</p><h2>${t.icon} Confront ${t.name}</h2><p class="muted">Choose a champion. Titan battles affect all Greece.</p><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-titan-hero="${h.id}">${h.portrait} ${h.name}<br><small>Level ${h.level}</small></button>`).join("")}</div>`);
 $$("[data-titan-hero]").forEach(b=>b.addEventListener("click",()=>resolveTitanBattle(t,getHero(b.dataset.titanHero))));
}

function resolveTitanBattle(t,h){
 const heroPower=h.strength+h.wisdom+h.courage+h.level*12+Math.random()*80;
 const titanPower=t.danger*3+t.influence*2+Math.random()*100;
 if(heroPower>titanPower){
  t.status="Resealed";t.seal=85;t.influence=0;state.tartarusStability=clamp(state.tartarusStability+12);state.prestige+=30;h.xp+=120;h.traits.push(`Defier of ${t.name}`);levelHero(h);
  addLog(`${t.name} Defeated`,`${h.name} forces the Titan back into Tartarus.`);
 }else{
  h.health=15;h.status="Broken by a Titan";t.influence+=18;state.titanWar+=12;state.tartarusStability=clamp(state.tartarusStability-8);
  const city=getCity(t.sealCity);city.unrest=clamp(city.unrest+18);city.player=clamp(city.player-10);
  addLog(`${t.name} Wins the Clash`,`${h.name} survives, but Greece trembles.`);
 }
 closeModal();renderAll();saveGame(false);
}

function renderPowersPlaceholder(){
 $("#power-count").textContent="4 Available";
 $("#power-list").innerHTML=[
  ["✨","Inspire Worship",30,"Raise city influence and Faith."],
  ["🔮","Oracle Vision",40,"Improve the next quest's success chance."],
  ["🌩️","Divine Storm",55,"Damage a monster and frighten rivals."],
  ["🛡️","Sacred Protection",45,"Protect a city from monster attacks."]
 ].map((p,i)=>`<article class="card"><div class="card-row"><div><span class="portrait">${p[0]}</span><h3>${p[1]}</h3></div><span class="tag gold">${p[2]} Favor</span></div><p>${p[3]}</p><button class="card-button" data-simple-power="${i}" ${state.favor<p[2]?"disabled":""}>Use Power</button></article>`).join("");
 $$("[data-simple-power]").forEach(b=>b.addEventListener("click",()=>useSimplePower(Number(b.dataset.simplePower))));
}
function useSimplePower(i){
 const costs=[30,40,55,45];if(!spend("favor",costs[i]))return;
 if(i===0){const c=state.cities.sort((a,b)=>a.player-b.player)[0];c.player=clamp(c.player+12);state.faith+=18;addLog("Inspire Worship",`${c.name} gains devotion.`)}
 if(i===1){state.questBoost=true;state.faith+=10;addLog("Oracle Vision","The next quest receives divine insight.")}
 if(i===2){const m=state.monsters.find(m=>m.active);if(m){m.currentHealth=Math.max(1,m.currentHealth-35);m.rage+=8;addLog("Divine Storm",`${m.name} is struck by divine force.`)}}
 if(i===3){const c=state.cities.sort((a,b)=>b.unrest-a.unrest)[0];c.protected=true;c.unrest=clamp(c.unrest-8);addLog("Sacred Protection",`${c.name} is protected until next year.`)}
 advanceTurn();
}

function renderThrone(){
 $("#audience-count").textContent="Living World";
 $("#audience-list").innerHTML=`<article class="card"><h3>World Decisions</h3><p>Monster attacks, rival miracles, and dynamic myths now appear in the Chronicle and on the world map.</p></article>`;
}
function renderTreasury(){
 $("#treasury-panel").innerHTML=`<div class="resource-grid">${[["🪙","Gold",state.gold],["🌾","Food",state.food],["🪨","Stone",state.stone],["🪵","Wood",state.wood],["🥉","Bronze",state.bronze],["🏛️","Prestige",state.prestige],["✨","Faith",state.faith],["⚡","Favor",state.favor]].map(r=>`<article class="card resource-card"><span class="resource-icon">${r[0]}</span><strong>${Math.floor(r[2])}</strong><small>${r[1]}</small></article>`).join("")}</div>`;
}

function confirmAdvanceYear(){showModal(`<p class="eyebrow">ADVANCE TIME</p><h2>Advance to Year ${state.year+1}?</h2><p class="muted">Monsters will roam, rival gods will act, cities will produce resources, and myths may unfold.</p><div class="choice-row"><button id="confirm-year" class="choice-button good">Advance Year</button><button id="cancel-year" class="choice-button bad">Cancel</button></div>`);$("#confirm-year").addEventListener("click",advanceYear);$("#cancel-year").addEventListener("click",closeModal)}
function advanceYear(){
 state.year++;
 let monsterReports=0;
 const income=calculateYearlyIncome();state.gold+=income.total;recordGold(income.total,"Yearly income");resolveEnterprises();kingdomYearTurn();bloodlineYearTurn();
 state.cities.forEach(c=>{
  c.population+=Math.floor(c.population*(.01+Math.random()*.02));
  c.rival=clamp(c.rival+Math.random()*7);
  c.player=clamp(c.player+c.temples*2+Math.random()*3);
  c.unrest=clamp(c.unrest+Math.random()*8-3);
  if(c.buildings.includes("market"))state.gold+=18;
  if(c.buildings.includes("temple"))state.faith+=10;
  if(c.buildings.includes("harbor")&&c.coastal)state.gold+=12;
  c.protected=false;
 });
 state.favor=Math.min(145,state.favor+35);state.food+=18;state.wood+=10;state.stone+=8;state.bronze+=5;
 state.heroes.forEach(h=>{if(h.recruited){h.health=clamp(h.health+25);h.energy=clamp(h.energy+35);h.status="Awaiting a quest"}});
 state.monsters.filter(m=>m.active).forEach(m=>{monsterTurn(m);monsterReports++});
 titanYearTurn();
 rivalGodTurn();
 if(Math.random()<.45){triggerDynamicMyth();state.completedLegends++;}if(Math.random()<.22)discoverArtifact();
 if(Math.random()<.35)spawnMonster();
 state.quests.filter(q=>q.status!=="Available").forEach(q=>{if(Math.random()<.4)q.status="Available"});
 addLog(`Year ${state.year} Begins`,`${monsterReports} monsters acted. Tartarus stability is ${Math.round(state.tartarusStability)}%. Titan War level: ${state.titanWar}.`);
 closeModal();renderAll();saveGame(false);showToast(`Year ${state.year} has begun.`);
}
function monsterTurn(m){
 m.age++;m.rage+=3;
 const current=getCity(m.territory),targetName=randomItem(current.neighbors),target=getCity(targetName);
 if(Math.random()<.55&&target){m.territory=target.name;addLog(`${m.name} Roams`,`${m.name} moves from ${current.name} to ${target.name}.`)}
 const city=getCity(m.territory);
 if(city.protected){addLog(`${m.name} Repelled`,`${city.name}'s sacred protection prevents an attack.`);return}
 const barracks=city.buildings.includes("barracks");
 const damage=barracks?4:9;
 city.unrest=clamp(city.unrest+damage);city.player=clamp(city.player-(barracks?2:5));city.population=Math.max(100,city.population-(barracks?2:8));
 if(Math.random()<.3&&city.buildings.length&&!barracks){const destroyed=randomItem(city.buildings);city.buildings=city.buildings.filter(x=>x!==destroyed);addLog(`${m.name} Destroys a Building`,`${city.name} loses its ${buildingTemplates.find(b=>b.id===destroyed).name}.`)}
 addLog(`${m.name} Attacks ${city.name}`,`${m.ability} spreads fear across the city.`);
}

function titanYearTurn(){
 let cultGrowth=0;
 state.titans.forEach(t=>{
  if(t.status==="Sealed"||t.status==="Targeted"){
   const loss=Math.floor(Math.random()*8)+(state.tartarusStability<45?4:0);
   t.seal=clamp(t.seal-loss);t.influence+=Math.floor(Math.random()*5);cultGrowth+=t.influence>20?1:0;
   if(t.seal<=0){
    t.status="Escaped";state.titanWar+=15;state.tartarusStability=clamp(state.tartarusStability-15);
    const city=getCity(t.sealCity);city.unrest=clamp(city.unrest+20);city.rival=clamp(city.rival+10);
    addLog(`${t.name} Escapes Tartarus`,`${t.sealCity} becomes the center of a Titan uprising.`);
   }
  }else if(t.status==="Escaped"){
   t.influence+=8;state.titanWar+=5;
   const city=getCity(t.sealCity),target=getCity(randomItem(city.neighbors));
   if(target){t.sealCity=target.name;target.unrest=clamp(target.unrest+14);target.player=clamp(target.player-8);addLog(`${t.name} Marches on ${target.name}`,t.goal)}
  }else if(t.status==="Allied"){
   t.relationship=clamp(t.relationship+(Math.floor(Math.random()*7)-3));
   if(t.relationship<30&&Math.random()<.3){t.status="Escaped";state.titanWar+=10;addLog(`${t.name} Breaks the Pact`,"The Titan alliance collapses.")}
   else if(Math.random()<.35)applyTitanGift(t);
  }
 });
 state.tartarusStability=clamp(state.tartarusStability-(cultGrowth*2)+state.cities.filter(c=>c.buildings.includes("temple")).length*.4);
 if(state.titanWar>=100&&!state.titanEnding){state.titanEnding="Second Titanomachy";addLog("The Second Titanomachy Begins","Olympus and the Titans enter open war across all Greece.")}
}

function rivalGodTurn(){
 const god=randomItem(rivalGods),city=randomItem(state.cities);
 const actions=[
  ()=>{city.rival=clamp(city.rival+10);return `${god} converts worshippers in ${city.name}.`},
  ()=>{city.player=clamp(city.player-6);city.unrest=clamp(city.unrest+5);return `${god} performs a rival miracle in ${city.name}.`},
  ()=>{state.gold=Math.max(0,state.gold-12);return `${god}'s followers disrupt your offerings.`}
 ];
 const text=randomItem(actions)();state.rivalActions.unshift({god,text,year:state.year});state.rivalActions=state.rivalActions.slice(0,12);addLog(`${god} Acts`,text);
}
function triggerDynamicMyth(){
 const myth=randomItem(mythEvents),hero=state.heroes.find(h=>h.name===myth.hero);
 const item={...myth,year:state.year};
 state.mythLog.unshift(item);state.mythLog=state.mythLog.slice(0,8);
 if(hero&&hero.recruited){hero[myth.bonus]+=5;hero.xp+=25;levelHero(hero)}
 addLog(myth.title,myth.text);
}
function spawnMonster(){
 const dormant=monsterTemplates.filter(t=>!state.monsters.some(m=>m.id===t.id));
 if(!dormant.length)return;
 const m=randomItem(dormant);state.monsters.push({...m,active:true,currentHealth:m.health,phase:1,age:0,rage:0});addLog(`${m.name} Awakens`,`${m.territory} is threatened by a new monster.`);
}
function advanceTurn(){state.favor=Math.min(145,state.favor+8);state.faith+=3;renderAll();saveGame(false)}
function spend(r,a){if(state[r]<a){showToast(`Not enough ${r}.`);return false}state[r]-=a;return true}
function addLog(title,text){state.log.unshift({title,text,year:state.year});state.log=state.log.slice(0,75)}
function renderLog(){$("#event-log").innerHTML=state.log.map(e=>`<article class="log-card"><div class="card-row"><h3>${e.title}</h3><span class="pill">Year ${e.year}</span></div><p class="muted">${e.text}</p></article>`).join("")}
function showModal(h){$("#modal-content").innerHTML=h;$("#modal").classList.remove("hidden")}function closeModal(){$("#modal").classList.add("hidden")}
function showToast(m){const t=$("#toast");t.textContent=m;t.classList.remove("hidden");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.add("hidden"),2300)}
function switchView(id){$$(".view").forEach(v=>v.classList.toggle("active",v.id===id));$$(".nav-button").forEach(b=>b.classList.toggle("active",b.dataset.view===id))}
$("#begin-button").addEventListener("click",()=>selectedGodId&&startGame(false));
$("#continue-button").addEventListener("click",()=>startGame(true));
$("#save-button").addEventListener("click",()=>saveGame(true));
$("#advance-year-button").addEventListener("click",confirmAdvanceYear);
$("#modal-close").addEventListener("click",closeModal);
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
$$(".nav-button").forEach(b=>b.addEventListener("click",()=>switchView(b.dataset.view)));
$$(".map-filter").forEach(b=>b.addEventListener("click",()=>{currentMapFilter=b.dataset.mapFilter;$$(".map-filter").forEach(x=>x.classList.toggle("active",x===b));renderMapMarkers()}));
$("#reset-button").addEventListener("click",()=>{if(!confirm("Delete your saved game?"))return;localStorage.removeItem(SAVE_KEY);state=null;selectedGodId=null;$("#game-screen").classList.remove("active");$("#start-screen").classList.add("active");$("#continue-button").classList.add("hidden");$("#begin-button").disabled=true;$("#begin-button").textContent="Select a God";renderGodSelection()});
renderGodSelection();
