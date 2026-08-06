const SAVE_KEY="ageOfOlympusSaveV040B";

const gods=[
{id:"zeus",name:"Zeus",symbol:"⚡",title:"King of Olympus",bonus:"Miracles generate more Faith."},
{id:"athena",name:"Athena",symbol:"🦉",title:"Goddess of Wisdom",bonus:"Heroes gain strategic advantages."},
{id:"poseidon",name:"Poseidon",symbol:"🔱",title:"Lord of the Seas",bonus:"Coastal cities produce extra Gold."},
{id:"aphrodite",name:"Aphrodite",symbol:"🕊️",title:"Goddess of Love",bonus:"Diplomacy produces stronger loyalty."},
{id:"ares",name:"Ares",symbol:"🗡️",title:"God of War",bonus:"Heroes deal extra battle damage."},
{id:"hades",name:"Hades",symbol:"💀",title:"Lord of the Underworld",bonus:"Defeated monsters yield extra treasure."}
];

const councilTemplates=[
{id:"zeus",name:"Zeus",icon:"⚡",domain:"Sky and Kingship",personality:"Commanding",goal:"Preserve divine order",power:"Lightning Judgment"},
{id:"hera",name:"Hera",icon:"🦚",domain:"Marriage and Queenship",personality:"Proud",goal:"Protect sacred vows",power:"Royal Decree"},
{id:"poseidon",name:"Poseidon",icon:"🔱",domain:"Sea and Earthquakes",personality:"Temperamental",goal:"Expand coastal worship",power:"Tidal Dominion"},
{id:"athena",name:"Athena",icon:"🦉",domain:"Wisdom and Strategy",personality:"Measured",goal:"Strengthen Athens",power:"Strategic Insight"},
{id:"apollo",name:"Apollo",icon:"☀️",domain:"Prophecy and Light",personality:"Brilliant",goal:"Honor Delphi",power:"Oracle Vision"},
{id:"artemis",name:"Artemis",icon:"🏹",domain:"Hunt and Wilderness",personality:"Independent",goal:"Protect wild lands",power:"Moonlit Hunt"},
{id:"ares",name:"Ares",icon:"🗡️",domain:"War and Courage",personality:"Aggressive",goal:"Encourage conflict",power:"Battle Rage"},
{id:"aphrodite",name:"Aphrodite",icon:"🕊️",domain:"Love and Beauty",personality:"Charming",goal:"Spread harmony",power:"Heart's Command"},
{id:"hermes",name:"Hermes",icon:"🪽",domain:"Travel and Trade",personality:"Clever",goal:"Open new routes",power:"Swift Passage"},
{id:"demeter",name:"Demeter",icon:"🌾",domain:"Harvest and Growth",personality:"Nurturing",goal:"Protect food supply",power:"Golden Harvest"},
{id:"hephaestus",name:"Hephaestus",icon:"🔥",domain:"Forge and Craft",personality:"Reserved",goal:"Build divine wonders",power:"Master Forge"},
{id:"dionysus",name:"Dionysus",icon:"🍇",domain:"Wine and Ecstasy",personality:"Unpredictable",goal:"Spread festivals",power:"Sacred Revelry"},
{id:"hestia",name:"Hestia",icon:"🏠",domain:"Hearth and Home",personality:"Peaceful",goal:"Maintain stability",power:"Sacred Hearth"},
{id:"hades",name:"Hades",icon:"💀",domain:"Underworld and Riches",personality:"Stern",goal:"Preserve death's balance",power:"Underworld Gate"}
];

const powerTemplates=[
{id:"lightning",owner:"Zeus",icon:"⚡",name:"Lightning Judgment",cost:55,prestige:20,text:"Strike a rival stronghold and reduce its influence.",effect:"rival"},
{id:"tide",owner:"Poseidon",icon:"🌊",name:"Tidal Dominion",cost:50,prestige:18,text:"Bless coastal trade or flood a rival port.",effect:"coast"},
{id:"insight",owner:"Athena",icon:"🦉",name:"Strategic Insight",cost:45,prestige:18,text:"Greatly improve the next hero quest.",effect:"quest"},
{id:"rage",owner:"Ares",icon:"🗡️",name:"Battle Rage",cost:50,prestige:18,text:"Empower all recruited heroes for battle.",effect:"heroes"},
{id:"love",owner:"Aphrodite",icon:"🕊️",name:"Heart's Command",cost:42,prestige:16,text:"Raise loyalty and calm unrest in a city.",effect:"love"},
{id:"oracle",owner:"Apollo",icon:"☀️",name:"Oracle Vision",cost:48,prestige:18,text:"Reveal favorable outcomes and gain Faith.",effect:"faith"},
{id:"harvest",owner:"Demeter",icon:"🌾",name:"Golden Harvest",cost:40,prestige:15,text:"Generate food, gold, and city stability.",effect:"harvest"},
{id:"forge",owner:"Hephaestus",icon:"🔥",name:"Master Forge",cost:60,prestige:22,text:"Create equipment and strengthen one hero.",effect:"forge"},
{id:"underworld",owner:"Hades",icon:"💀",name:"Underworld Gate",cost:65,prestige:25,text:"Gain treasure and weaken an active monster.",effect:"underworld"}
];

const requestTemplates=[
{god:"Poseidon",icon:"🔱",title:"Honor the Coastal Temples",text:"Poseidon demands offerings for the ports of Greece.",accept:"Fund the Temples",decline:"Refuse the Demand",costGold:35,rewardPrestige:14,effect:"coast"},
{god:"Athena",icon:"🦉",title:"Protect Athens",text:"Athena asks that Athens receive priests and protection.",accept:"Support Athens",decline:"Ignore Her Warning",costFavor:20,rewardPrestige:12,effect:"athens"},
{god:"Ares",icon:"🗡️",title:"Strengthen Sparta",text:"Ares wants Sparta prepared for war.",accept:"Arm Sparta",decline:"Restrain the Warriors",costGold:30,rewardPrestige:12,effect:"sparta"},
{god:"Demeter",icon:"🌾",title:"Bless the Harvest",text:"Demeter asks for a sacred harvest festival.",accept:"Hold the Festival",decline:"Save the Treasury",costGold:25,rewardPrestige:10,effect:"harvest"},
{god:"Apollo",icon:"☀️",title:"Restore Delphi",text:"Apollo asks for repairs to the oracle sanctuary.",accept:"Restore the Sanctuary",decline:"Delay the Work",costGold:40,rewardPrestige:15,effect:"delphi"}
];

const cityTemplates=[
{id:"macedonia",name:"Macedonia",symbol:"👑",x:34,y:15,trait:"Northern kingdom",population:520,player:25,rival:38,rivalName:"Hera",unrest:18,temples:0,wealth:36,coastal:false},
{id:"delphi",name:"Delphi",symbol:"🔮",x:37,y:30,trait:"Home of the oracle",population:430,player:45,rival:37,rivalName:"Apollo",unrest:8,temples:1,wealth:33,coastal:false},
{id:"thebes",name:"Thebes",symbol:"🦁",x:45,y:39,trait:"Ancient royal city",population:680,player:27,rival:39,rivalName:"Dionysus",unrest:21,temples:0,wealth:35,coastal:false},
{id:"athens",name:"Athens",symbol:"🏛️",x:54,y:48,trait:"Center of wisdom",population:850,player:38,rival:34,rivalName:"Athena",unrest:14,temples:1,wealth:48,coastal:true},
{id:"corinth",name:"Corinth",symbol:"⛵",x:42,y:53,trait:"Wealthy trade port",population:720,player:29,rival:42,rivalName:"Poseidon",unrest:17,temples:0,wealth:58,coastal:true},
{id:"argos",name:"Argos",symbol:"🏺",x:34,y:64,trait:"City of old kings",population:510,player:31,rival:35,rivalName:"Hera",unrest:15,temples:0,wealth:41,coastal:false},
{id:"sparta",name:"Sparta",symbol:"🛡️",x:38,y:73,trait:"Land of warriors",population:620,player:24,rival:47,rivalName:"Ares",unrest:24,temples:0,wealth:30,coastal:false},
{id:"rhodes",name:"Rhodes",symbol:"⚓",x:76,y:67,trait:"Island stronghold",population:470,player:28,rival:36,rivalName:"Helios",unrest:12,temples:0,wealth:50,coastal:true},
{id:"crete",name:"Crete",symbol:"🐂",x:58,y:88,trait:"Island of mysteries",population:760,player:22,rival:41,rivalName:"Artemis",unrest:26,temples:0,wealth:50,coastal:true},
{id:"troy",name:"Troy",symbol:"🏹",x:83,y:27,trait:"Fortress of Asia Minor",population:790,player:18,rival:48,rivalName:"Apollo",unrest:20,temples:0,wealth:46,coastal:true}
];

const heroTemplates=[
{id:"heracles",name:"Heracles",portrait:"🦁",title:"The Mighty",cost:95,strength:88,wisdom:42,courage:92,leadership:60,ability:"Labors of Strength",location:"Thebes"},
{id:"perseus",name:"Perseus",portrait:"🛡️",title:"Slayer of Medusa",cost:80,strength:68,wisdom:70,courage:82,leadership:58,ability:"Mirror Shield",location:"Athens"},
{id:"achilles",name:"Achilles",portrait:"⚔️",title:"Champion of War",cost:110,strength:92,wisdom:45,courage:90,leadership:74,ability:"Invincible Charge",location:"Troy"},
{id:"odysseus",name:"Odysseus",portrait:"⛵",title:"The Cunning King",cost:85,strength:58,wisdom:94,courage:76,leadership:88,ability:"Master Strategist",location:"Corinth"}
];

const monsterTemplates=[
{id:"hydra",name:"Hydra",icon:"🐍",territory:"Thebes",health:150,strength:72,fear:68,reward:85,weakness:"Fire"},
{id:"minotaur",name:"Minotaur",icon:"🐂",territory:"Crete",health:135,strength:78,fear:64,reward:75,weakness:"Wisdom"},
{id:"medusa",name:"Medusa",icon:"🐍",territory:"Athens",health:110,strength:65,fear:82,reward:90,weakness:"Reflection"}
];

const questTemplates=[
{id:"scroll",name:"Recover the Lost Scroll",city:"Athens",difficulty:"Easy",rewardGold:35,rewardPrestige:15,stat:"wisdom",description:"A sacred text was stolen from an ancient library."},
{id:"pirates",name:"Defeat the Corinthian Pirates",city:"Corinth",difficulty:"Medium",rewardGold:55,rewardPrestige:20,stat:"leadership",description:"Raiders have closed the trade routes."},
{id:"trial",name:"Survive the Spartan Trial",city:"Sparta",difficulty:"Medium",rewardGold:45,rewardPrestige:22,stat:"courage",description:"The elders demand a champion prove divine worth."}
];

const audienceTemplates=[
{title:"A King Requests Rain",visitor:"King of Thebes",icon:"👑",text:"The harvest is failing. The king asks for a miracle.",good:"Send Rain",bad:"Demand Tribute"},
{title:"A Hero Seeks Your Blessing",visitor:"Young Champion",icon:"🛡️",text:"A mortal asks for strength before facing a monster.",good:"Grant Blessing",bad:"Test Their Pride"},
{title:"Rival Priests Spread Rumors",visitor:"High Priest",icon:"🙏",text:"A rival cult claims your miracles are false.",good:"Answer Publicly",bad:"Silence Them"}
];

let selectedGodId=null,state=null,toastTimer=null,currentMapFilter="all";
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const clamp=(v,min=0,max=100)=>Math.max(min,Math.min(max,v));
const randomItem=a=>a[Math.floor(Math.random()*a.length)];
const uid=p=>`${p}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
const getGodById=id=>gods.find(g=>g.id===id);
const getGod=()=>getGodById(state.godId);
const getCity=name=>state.cities.find(c=>c.name===name);
const getHero=id=>state.heroes.find(h=>h.id===id);

function createAudience(){return{...randomItem(audienceTemplates),id:uid("audience")}}
function createRequest(){return{...randomItem(requestTemplates),id:uid("request")}}
function initialRelationship(name,playerGod){
  if(name===getGodById(playerGod).name)return 100;
  const allies={
    Zeus:["Athena","Apollo","Hestia"],Athena:["Zeus","Apollo","Hephaestus"],
    Poseidon:["Ares","Hermes"],Aphrodite:["Ares","Hermes","Dionysus"],
    Ares:["Aphrodite","Poseidon"],Hades:["Hestia","Demeter"]
  };
  return (allies[getGodById(playerGod).name]||[]).includes(name)?65:45+Math.floor(Math.random()*16);
}
function newGame(godId){
 const cities=cityTemplates.map(c=>({...c}));
 const favored={zeus:"Delphi",athena:"Athens",poseidon:"Corinth",aphrodite:"Thebes",ares:"Sparta",hades:"Crete"}[godId];
 cities.find(c=>c.name===favored).player=clamp(cities.find(c=>c.name===favored).player+20);
 return{
   version:"0.4.0b",godId,year:1,faith:130,favor:110,gold:120,prestige:25,food:90,stone:50,wood:65,bronze:25,
   cities,
   heroes:heroTemplates.map(h=>({...h,recruited:false,level:1,xp:0,health:100,energy:100,status:"Available",equipment:"None"})),
   monsters:monsterTemplates.map(m=>({...m,active:true,currentHealth:m.health})),
   quests:questTemplates.map(q=>({...q,status:"Available"})),
   audiences:[createAudience(),createAudience()],
   council:councilTemplates.map(g=>({...g,relationship:initialRelationship(g.name,godId),mood:"Calm",support:50+Math.floor(Math.random()*21)})),
   divineRequests:[createRequest()],
   unlockedPowers:[],
   questBoost:false,
   mapEvents:[{id:uid("event"),city:"Corinth",icon:"🌾",title:"Great Harvest",text:"Corinth enjoys a rich harvest."}],
   log:[{title:`${getGodById(godId).name} Enters the Council`,text:`Your reign begins with the eyes of Olympus upon you.`,year:1}]
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
 renderWorld();renderCouncil();renderPowers();renderHeroes();renderMonsters();renderQuests();renderAudiences();renderTreasury();renderLog();
}

function renderWorld(){
 const controlled=state.cities.filter(c=>c.player>c.rival).length;
 $("#world-summary").innerHTML=`<p class="eyebrow">YOUR DIVINE REALM</p><h3>${controlled} of ${state.cities.length} cities favor ${getGod().name}</h3><div class="stats"><div class="stat"><strong>${controlled}</strong><small>Controlled</small></div><div class="stat"><strong>${state.cities.reduce((s,c)=>s+c.temples,0)}</strong><small>Temples</small></div><div class="stat"><strong>${state.prestige}</strong><small>Prestige</small></div></div>`;
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
 if(type==="city"){const c=state.cities.find(x=>x.id===id);panel.innerHTML=`<div class="card-row"><div><p class="eyebrow">CITY</p><h2>${c.symbol} ${c.name}</h2></div><span class="pill">${c.player>c.rival?"Your influence":"Rival influence"}</span></div><p class="muted">${c.trait}</p><div class="stats"><div class="stat"><strong>${c.population}</strong><small>Population</small></div><div class="stat"><strong>${c.temples}</strong><small>Temples</small></div><div class="stat"><strong>${Math.round(c.unrest)}%</strong><small>Unrest</small></div></div><button class="card-button" id="manage-city">Manage City</button>`;$("#manage-city").addEventListener("click",()=>openCity(c.id))}
 if(type==="hero"){const h=getHero(id);panel.innerHTML=`<p class="eyebrow">HERO</p><h2>${h.portrait} ${h.name}</h2><p class="muted">${h.title} is in ${h.location}. ${h.status}.</p><button class="card-button" id="move-map-hero">Move Hero</button>`;$("#move-map-hero").addEventListener("click",()=>chooseHeroDestination(h))}
 if(type==="monster"){const m=state.monsters.find(x=>x.id===id);panel.innerHTML=`<p class="eyebrow">MONSTER</p><h2>${m.icon} ${m.name}</h2><p class="muted">Threatening ${m.territory}. Weakness: ${m.weakness}.</p><button class="card-button" id="fight-map-monster" ${state.heroes.some(h=>h.recruited)?"":"disabled"}>Send a Hero</button>`;$("#fight-map-monster").addEventListener("click",()=>chooseHeroForBattle(m.id))}
 if(type==="event"){const e=state.mapEvents.find(x=>x.id===id);panel.innerHTML=`<p class="eyebrow">WORLD EVENT</p><h2>${e.icon} ${e.title}</h2><p class="muted">${e.text}</p><button class="card-button" id="ack-event">Acknowledge</button>`;$("#ack-event").addEventListener("click",()=>{state.mapEvents=state.mapEvents.filter(x=>x.id!==e.id);state.faith+=5;addLog(e.title,e.text);panel.className="selected-map-panel empty";panel.textContent="Tap a city, hero, monster, or event on the map.";renderAll()})}
}

function renderCouncil(){
 const avg=Math.round(state.council.reduce((s,g)=>s+g.relationship,0)/state.council.length);
 const allies=state.council.filter(g=>g.relationship>=65).length;
 const rivals=state.council.filter(g=>g.relationship<35).length;
 $("#council-status").textContent=rivals>=4?"Council Divided":avg>=60?"Council Supportive":"Council Stable";
 $("#council-summary").innerHTML=`<p class="eyebrow">DIVINE POLITICS</p><h3>${allies} allies and ${rivals} rivals currently shape Olympus</h3><div class="stats"><div class="stat"><strong>${avg}</strong><small>Average Favor</small></div><div class="stat"><strong>${allies}</strong><small>Allies</small></div><div class="stat"><strong>${rivals}</strong><small>Rivals</small></div></div><button id="call-council-vote" class="card-button">Call Council Vote</button>`;
 $("#call-council-vote").addEventListener("click",openCouncilVote);
 $("#council-gods").innerHTML=state.council.map(g=>{
   const cls=g.relationship>=65?"relation-positive":g.relationship<35?"relation-negative":"relation-neutral";
   return `<article class="council-card"><div class="council-head"><span class="council-icon">${g.icon}</span><div><h3>${g.name}</h3><p>${g.domain}</p></div></div><div class="mood-line"><span>${g.personality}</span><strong class="${cls}">${g.relationship}/100</strong></div><div class="meter ${g.relationship<35?"red":"green"}"><span style="width:${g.relationship}%"></span></div><p><strong>Mood:</strong> ${g.mood}<br><strong>Goal:</strong> ${g.goal}</p><button class="card-button" data-council-god="${g.id}">Speak Privately</button></article>`;
 }).join("");
 $$("[data-council-god]").forEach(b=>b.addEventListener("click",()=>openGodMeeting(b.dataset.councilGod)));
 $("#divine-request-list").innerHTML=state.divineRequests.length?state.divineRequests.map(r=>`<article class="card"><div class="card-row"><span class="portrait">${r.icon}</span><span class="tag gold">${r.god}</span></div><h3>${r.title}</h3><p>${r.text}</p><div class="choice-row"><button class="choice-button good" data-request-accept="${r.id}">${r.accept}</button><button class="choice-button bad" data-request-decline="${r.id}">${r.decline}</button></div></article>`).join(""):`<article class="card"><h3>No divine requests</h3><p>Advance the year to receive new requests.</p></article>`;
 $$("[data-request-accept]").forEach(b=>b.addEventListener("click",()=>resolveRequest(b.dataset.requestAccept,true)));
 $$("[data-request-decline]").forEach(b=>b.addEventListener("click",()=>resolveRequest(b.dataset.requestDecline,false)));
}
function openGodMeeting(id){
 const g=state.council.find(x=>x.id===id);
 showModal(`<p class="eyebrow">PRIVATE AUDIENCE</p><h2>${g.icon} ${g.name}</h2><p class="muted">${g.goal}. Relationship: ${g.relationship}/100.</p><div class="action-grid"><button class="action-button" data-god-action="gift">🎁 Offer Gift<br><small>25 Gold</small></button><button class="action-button" data-god-action="praise">🙏 Public Praise<br><small>15 Favor</small></button><button class="action-button" data-god-action="challenge">⚔️ Challenge Their View</button><button class="action-button" data-god-action="power">⚡ Ask About Power</button></div>`);
 $$("[data-god-action]").forEach(b=>b.addEventListener("click",()=>resolveGodMeeting(g,b.dataset.godAction)));
}
function resolveGodMeeting(g,a){
 if(a==="gift"){if(!spend("gold",25))return;g.relationship=clamp(g.relationship+10);g.mood="Pleased";state.prestige+=3}
 if(a==="praise"){if(!spend("favor",15))return;g.relationship=clamp(g.relationship+8);g.mood="Honored";state.faith+=6}
 if(a==="challenge"){g.relationship=clamp(g.relationship+(Math.random()<.45?6:-8));g.mood=g.relationship>=50?"Thoughtful":"Annoyed";state.prestige+=4}
 if(a==="power"){const p=powerTemplates.find(p=>p.owner===g.name);if(p&&!state.unlockedPowers.includes(p.id)){if(g.relationship>=60&&state.prestige>=p.prestige){state.unlockedPowers.push(p.id);g.relationship=clamp(g.relationship+4);addLog(`${p.name} Unlocked`,`${g.name} teaches you a divine power.`);showToast(`${p.name} unlocked.`)}else showToast(`Need ${p.prestige} Prestige and 60 relationship.`)}else showToast("No new power is available.")}
 closeModal();renderAll();saveGame(false);
}
function resolveRequest(id,accept){
 const i=state.divineRequests.findIndex(r=>r.id===id);if(i<0)return;
 const r=state.divineRequests[i],g=state.council.find(x=>x.name===r.god);
 if(accept){
   if(r.costGold&&!spend("gold",r.costGold))return;
   if(r.costFavor&&!spend("favor",r.costFavor))return;
   g.relationship=clamp(g.relationship+12);g.mood="Grateful";state.prestige+=r.rewardPrestige;applyRequestEffect(r.effect,true);addLog(`${r.god}'s Request Fulfilled`,r.title);
 }else{
   g.relationship=clamp(g.relationship-14);g.mood="Displeased";applyRequestEffect(r.effect,false);addLog(`${r.god}'s Request Refused`,r.title);
 }
 state.divineRequests.splice(i,1);advanceTurn();
}
function applyRequestEffect(effect,good){
 const amount=good?8:-7;
 if(effect==="coast")state.cities.filter(c=>c.coastal).forEach(c=>{c.player=clamp(c.player+amount);c.unrest=clamp(c.unrest-(good?4:-4))});
 if(effect==="athens"){const c=getCity("Athens");c.player=clamp(c.player+amount);c.unrest=clamp(c.unrest-(good?5:-5))}
 if(effect==="sparta"){const c=getCity("Sparta");c.player=clamp(c.player+amount);c.wealth=clamp(c.wealth+(good?5:-4))}
 if(effect==="harvest"){state.food=Math.max(0,state.food+(good?30:-15));state.gold=Math.max(0,state.gold+(good?12:-8))}
 if(effect==="delphi"){const c=getCity("Delphi");c.temples=Math.max(0,c.temples+(good?1:0));c.player=clamp(c.player+amount)}
}
function openCouncilVote(){
 const issues=[
  {title:"Grant Immortality to a Mortal Hero",yes:"A hero may become immortal.",no:"Mortals must remain mortal.",benefit:"heroes"},
  {title:"Unite Greece Under One Sacred Law",yes:"Cities gain stability.",no:"Cities preserve independence.",benefit:"cities"},
  {title:"Declare a Divine Hunt Against Monsters",yes:"Heroes gain battle strength.",no:"Olympus avoids intervention.",benefit:"battle"}
 ];
 const issue=randomItem(issues);
 const votes=state.council.filter(g=>g.name!==getGod().name).map(g=>({god:g.name,icon:g.icon,yes:Math.random()*100<(g.relationship+g.support)/2}));
 const yes=votes.filter(v=>v.yes).length,no=votes.length-yes;
 showModal(`<p class="eyebrow">COUNCIL VOTE</p><h2>${issue.title}</h2><p class="muted">${issue.yes}</p><div class="vote-grid">${votes.map(v=>`<div class="vote-chip ${v.yes?"vote-yes":"vote-no"}">${v.icon} ${v.god}: ${v.yes?"YES":"NO"}</div>`).join("")}</div><div class="choice-row"><button id="cast-yes" class="choice-button good">Cast YES Vote</button><button id="cast-no" class="choice-button bad">Cast NO Vote</button></div>`);
 $("#cast-yes").addEventListener("click",()=>resolveCouncilVote(issue,yes+1,no,true));
 $("#cast-no").addEventListener("click",()=>resolveCouncilVote(issue,yes,no+1,false));
}
function resolveCouncilVote(issue,yes,no,playerYes){
 const passed=yes>no;
 if(passed){
   state.prestige+=12;state.faith+=15;
   if(issue.benefit==="heroes")state.heroes.filter(h=>h.recruited).forEach(h=>{h.strength+=3;h.wisdom+=3});
   if(issue.benefit==="cities")state.cities.forEach(c=>c.unrest=clamp(c.unrest-5));
   if(issue.benefit==="battle")state.heroes.filter(h=>h.recruited).forEach(h=>h.courage+=4);
   addLog("Council Proposal Passed",`${issue.title} passed ${yes}-${no}.`);
 }else{
   state.prestige=Math.max(0,state.prestige-4);addLog("Council Proposal Failed",`${issue.title} failed ${yes}-${no}.`);
 }
 state.council.forEach(g=>{if(Math.random()<.35)g.relationship=clamp(g.relationship+(playerYes?2:-2))});
 closeModal();renderAll();saveGame(false);showToast(passed?"Council vote passed.":"Council vote failed.");
}

function renderPowers(){
 $("#power-count").textContent=`${state.unlockedPowers.length} Unlocked`;
 $("#power-list").innerHTML=powerTemplates.map(p=>{
   const unlocked=state.unlockedPowers.includes(p.id),owner=state.council.find(g=>g.name===p.owner);
   return `<article class="card"><div class="card-row"><div><span class="portrait">${p.icon}</span><h3>${p.name}</h3></div><span class="tag gold">${p.owner}</span></div><p>${p.text}</p><div class="tag-row"><span class="tag">${p.cost} Favor</span><span class="tag">${p.prestige} Prestige</span><span class="tag">Relation ${owner?owner.relationship:0}</span></div><button class="card-button" data-power="${p.id}" ${unlocked&&state.favor>=p.cost?"":"disabled"}>${unlocked?"Use Power":"Locked"}</button></article>`;
 }).join("");
 $$("[data-power]").forEach(b=>b.addEventListener("click",()=>usePower(b.dataset.power)));
}
function usePower(id){
 const p=powerTemplates.find(x=>x.id===id);if(!spend("favor",p.cost))return;
 if(p.effect==="rival"){const c=state.cities.sort((a,b)=>b.rival-a.rival)[0];c.rival=clamp(c.rival-18);c.unrest=clamp(c.unrest+4);addLog(p.name,`${c.name} is struck by divine judgment.`)}
 if(p.effect==="coast"){state.cities.filter(c=>c.coastal).forEach(c=>{c.player=clamp(c.player+6);c.wealth=clamp(c.wealth+6)});state.gold+=25;addLog(p.name,"Coastal trade flourishes under divine protection.")}
 if(p.effect==="quest"){state.questBoost=true;state.faith+=10;addLog(p.name,"The next hero quest gains a major strategic advantage.")}
 if(p.effect==="heroes"){state.heroes.filter(h=>h.recruited).forEach(h=>{h.strength+=6;h.courage+=5});addLog(p.name,"Your heroes burn with divine fury.")}
 if(p.effect==="love"){const c=state.cities.sort((a,b)=>b.unrest-a.unrest)[0];c.unrest=clamp(c.unrest-20);c.player=clamp(c.player+8);addLog(p.name,`${c.name} is calmed by divine harmony.`)}
 if(p.effect==="faith"){state.faith+=45;state.prestige+=6;addLog(p.name,"A clear prophecy strengthens your rule.")}
 if(p.effect==="harvest"){state.food+=45;state.gold+=20;state.cities.forEach(c=>c.unrest=clamp(c.unrest-3));addLog(p.name,"A golden harvest blesses Greece.")}
 if(p.effect==="forge"){const h=state.heroes.filter(h=>h.recruited).sort((a,b)=>a.strength-b.strength)[0];if(h){h.strength+=10;h.equipment="Divine-forged weapon";addLog(p.name,`${h.name} receives a divine-forged weapon.`)}}
 if(p.effect==="underworld"){state.gold+=40;const m=state.monsters.find(m=>m.active);if(m)m.currentHealth=Math.max(1,m.currentHealth-40);addLog(p.name,"Riches rise from below and a monster is weakened.")}
 advanceTurn();
}

function openCity(id){const c=state.cities.find(x=>x.id===id);showModal(`<p class="eyebrow">CITY MANAGEMENT</p><h2>${c.symbol} ${c.name}</h2><p class="muted">${c.trait}</p><div class="action-grid"><button class="action-button" data-city-action="priests">📣 Send Priests<br><small>20 Favor</small></button><button class="action-button" data-city-action="temple">🏛️ Build Temple<br><small>${50+c.temples*25} Gold</small></button><button class="action-button" data-city-action="festival">🎭 Hold Festival<br><small>35 Gold</small></button><button class="action-button" data-city-action="wrath">🔥 Display Wrath<br><small>30 Favor</small></button></div>`);$$("[data-city-action]").forEach(b=>b.addEventListener("click",()=>cityAction(c,b.dataset.cityAction)))}
function cityAction(c,a){
 if(a==="priests"){if(!spend("favor",20))return;c.player=clamp(c.player+9);state.faith+=5}
 if(a==="temple"){const cost=50+c.temples*25;if(!spend("gold",cost))return;c.temples++;c.player=clamp(c.player+12);state.faith+=20;state.prestige+=5}
 if(a==="festival"){if(!spend("gold",35))return;c.unrest=clamp(c.unrest-12);c.player=clamp(c.player+6);state.faith+=12;adjustCouncilByAction("festival")}
 if(a==="wrath"){if(!spend("favor",30))return;c.rival=clamp(c.rival-12);c.unrest=clamp(c.unrest-8);adjustCouncilByAction("war")}
 addLog(`Divine Action in ${c.name}`,`You used ${a}.`);closeModal();advanceTurn();
}
function adjustCouncilByAction(action){
 state.council.forEach(g=>{
  if(action==="festival"&&["Dionysus","Aphrodite","Hestia"].includes(g.name))g.relationship=clamp(g.relationship+3);
  if(action==="war"&&["Ares","Poseidon"].includes(g.name))g.relationship=clamp(g.relationship+3);
  if(action==="war"&&["Hestia","Demeter"].includes(g.name))g.relationship=clamp(g.relationship-2);
 });
}

function renderHeroes(){$("#hero-count").textContent=`${state.heroes.filter(h=>h.recruited).length} Recruited`;$("#hero-list").innerHTML=state.heroes.map(h=>`<article class="card"><div class="hero-top"><span class="portrait">${h.portrait}</span><div class="flex1"><h3>${h.name}</h3><p>${h.title}</p></div><span class="tag gold">${h.recruited?`Level ${h.level}`:`${h.cost} Gold`}</span></div><div class="tag-row"><span class="tag">Strength ${h.strength}</span><span class="tag">Wisdom ${h.wisdom}</span><span class="tag">${h.location}</span><span class="tag">${h.equipment}</span></div>${h.recruited?`<button class="card-button" data-move="${h.id}">Move Hero</button>`:`<button class="card-button" data-recruit="${h.id}">Recruit Hero</button>`}</article>`).join("");$$("[data-recruit]").forEach(b=>b.addEventListener("click",()=>recruitHero(b.dataset.recruit)));$$("[data-move]").forEach(b=>b.addEventListener("click",()=>chooseHeroDestination(getHero(b.dataset.move))))}
function recruitHero(id){const h=getHero(id);if(!spend("gold",h.cost))return;h.recruited=true;h.status="Awaiting a quest";state.prestige+=10;addLog(`${h.name} Joins Your Cause`,`${h.name} appears in ${h.location}.`);renderAll();saveGame(false)}
function chooseHeroDestination(h){showModal(`<p class="eyebrow">HERO TRAVEL</p><h2>Move ${h.name}</h2><div class="action-grid">${state.cities.filter(c=>c.name!==h.location).map(c=>`<button class="action-button" data-destination="${c.name}">${c.symbol} ${c.name}</button>`).join("")}</div>`);$$("[data-destination]").forEach(b=>b.addEventListener("click",()=>{const old=h.location;h.location=b.dataset.destination;h.status=`Traveling from ${old}`;state.favor=Math.max(0,state.favor-5);addLog(`${h.name} Travels`,`${h.name} moves to ${h.location}.`);closeModal();advanceTurn()}))}
function renderMonsters(){$("#monster-count").textContent=`${state.monsters.filter(m=>m.active).length} Active`;$("#monster-list").innerHTML=state.monsters.map(m=>`<article class="card"><div class="monster-top"><span class="portrait">${m.icon}</span><div class="flex1"><h3>${m.name}</h3><p>Threatening ${m.territory}</p></div><span class="tag gold">${m.active?"Active":"Defeated"}</span></div><div class="meter red"><span style="width:${Math.max(0,m.currentHealth/m.health*100)}%"></span></div><button class="card-button" data-battle="${m.id}" ${!m.active||!state.heroes.some(h=>h.recruited)?"disabled":""}>Send a Hero</button></article>`).join("");$$("[data-battle]").forEach(b=>b.addEventListener("click",()=>chooseHeroForBattle(b.dataset.battle)))}
function chooseHeroForBattle(monsterId){const m=state.monsters.find(x=>x.id===monsterId),heroes=state.heroes.filter(h=>h.recruited&&h.health>20);showModal(`<p class="eyebrow">CHOOSE A CHAMPION</p><h2>${m.icon} Face ${m.name}</h2><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-hero-battle="${h.id}">${h.portrait} ${h.name}<br><small>${h.location}</small></button>`).join("")}</div>`);$$("[data-hero-battle]").forEach(b=>b.addEventListener("click",()=>startBattle(m,getHero(b.dataset.heroBattle))))}
function startBattle(m,h){showModal(`<p class="eyebrow">INTERACTIVE BATTLE</p><h2>${h.name} vs ${m.name}</h2><div class="action-grid"><button class="action-button" data-strategy="power">⚔️ Powerful Attack</button><button class="action-button" data-strategy="smart">🧠 Exploit Weakness</button><button class="action-button" data-strategy="blessing">⚡ Divine Blessing<br><small>20 Favor</small></button><button class="action-button" data-strategy="retreat">🏃 Retreat</button></div>`);$$("[data-strategy]").forEach(b=>b.addEventListener("click",()=>resolveBattle(m,h,b.dataset.strategy)))}
function resolveBattle(m,h,s){if(s==="retreat"){closeModal();return}if(s==="blessing"&&!spend("favor",20))return;let attack=s==="power"?h.strength*.65+Math.random()*24:s==="smart"?h.wisdom*.7+Math.random()*28:(h.strength+h.wisdom)*.55+25;if(state.godId==="ares")attack*=1.12;m.currentHealth-=Math.round(attack);h.health=clamp(h.health-Math.max(8,m.strength*.35-Math.random()*12));if(m.currentHealth<=0){m.active=false;m.currentHealth=0;let reward=m.reward*(state.godId==="hades"?1.25:1);state.gold+=Math.round(reward);state.prestige+=25;h.xp+=75;h.status="Victorious";addLog(`${m.name} Defeated`,`${h.name} wins the battle.`);state.council.find(g=>g.name==="Ares").relationship=clamp(state.council.find(g=>g.name==="Ares").relationship+4)}else{h.xp+=20;addLog(`${h.name} Battles ${m.name}`,`${m.name} has ${m.currentHealth} health remaining.`)}closeModal();advanceTurn()}
function renderQuests(){$("#quest-count").textContent=`${state.quests.filter(q=>q.status==="Available").length} Available`;$("#quest-list").innerHTML=state.quests.map(q=>`<article class="card"><div class="card-row"><span class="pill">${q.city}</span><span class="tag gold">${q.difficulty}</span></div><h3>${q.name}</h3><p>${q.description}</p><button class="card-button" data-quest="${q.id}" ${q.status!=="Available"||!state.heroes.some(h=>h.recruited)?"disabled":""}>Assign Hero</button></article>`).join("");$$("[data-quest]").forEach(b=>b.addEventListener("click",()=>assignQuest(b.dataset.quest)))}
function assignQuest(id){const q=state.quests.find(x=>x.id===id),heroes=state.heroes.filter(h=>h.recruited);showModal(`<p class="eyebrow">ASSIGN QUEST</p><h2>${q.name}</h2><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-quest-hero="${h.id}">${h.portrait} ${h.name}<br><small>${q.stat}: ${h[q.stat]}</small></button>`).join("")}</div>`);$$("[data-quest-hero]").forEach(b=>b.addEventListener("click",()=>resolveQuest(q,getHero(b.dataset.questHero))))}
function resolveQuest(q,h){let chance=45+h[q.stat]*.45+(state.godId==="athena"?10:0)+(state.questBoost?20:0);state.questBoost=false;if(Math.random()*100<chance){q.status="Completed";state.gold+=q.rewardGold;state.prestige+=q.rewardPrestige;h.xp+=55;h.location=q.city;addLog(`${q.name} Completed`,`${h.name} succeeds in ${q.city}.`);state.council.find(g=>g.name==="Athena").relationship=clamp(state.council.find(g=>g.name==="Athena").relationship+3)}else{q.status="Failed";h.health=clamp(h.health-25);addLog(`${q.name} Failed`,`${h.name} returns wounded.`)}closeModal();advanceTurn()}
function renderAudiences(){$("#audience-count").textContent=`${state.audiences.length} Waiting`;$("#audience-list").innerHTML=state.audiences.length?state.audiences.map(a=>`<article class="card"><div class="card-row"><span class="portrait">${a.icon}</span><span class="tag gold">${a.visitor}</span></div><h3>${a.title}</h3><p>${a.text}</p><div class="choice-row"><button class="choice-button good" data-good="${a.id}">${a.good}</button><button class="choice-button bad" data-bad="${a.id}">${a.bad}</button></div></article>`).join(""):`<article class="card"><h3>The throne room is quiet</h3></article>`;$$("[data-good]").forEach(b=>b.addEventListener("click",()=>resolveAudience(b.dataset.good,true)));$$("[data-bad]").forEach(b=>b.addEventListener("click",()=>resolveAudience(b.dataset.bad,false)))}
function resolveAudience(id,good){const i=state.audiences.findIndex(a=>a.id===id);if(good){if(!spend("favor",15))return;state.faith+=22;state.prestige+=4;state.council.find(g=>g.name==="Hestia").relationship=clamp(state.council.find(g=>g.name==="Hestia").relationship+2)}else{state.gold+=22;state.faith=Math.max(0,state.faith-8);state.council.find(g=>g.name==="Ares").relationship=clamp(state.council.find(g=>g.name==="Ares").relationship+2)}state.audiences.splice(i,1);advanceTurn()}
function renderTreasury(){$("#treasury-panel").innerHTML=`<div class="resource-grid">${[["🪙","Gold",state.gold],["🌾","Food",state.food],["🪨","Stone",state.stone],["🪵","Wood",state.wood],["🥉","Bronze",state.bronze],["🏛️","Prestige",state.prestige],["✨","Faith",state.faith],["⚡","Favor",state.favor]].map(r=>`<article class="card resource-card"><span class="resource-icon">${r[0]}</span><strong>${Math.floor(r[2])}</strong><small>${r[1]}</small></article>`).join("")}</div>`}
function confirmAdvanceYear(){showModal(`<p class="eyebrow">ADVANCE TIME</p><h2>Advance to Year ${state.year+1}?</h2><p class="muted">Cities, heroes, rivals, monsters, and the gods themselves will change.</p><div class="choice-row"><button id="confirm-year" class="choice-button good">Advance Year</button><button id="cancel-year" class="choice-button bad">Cancel</button></div>`);$("#confirm-year").addEventListener("click",advanceYear);$("#cancel-year").addEventListener("click",closeModal)}
function advanceYear(){
 state.year++;
 state.cities.forEach(c=>{c.population+=Math.floor(c.population*(.01+Math.random()*.025));c.rival=clamp(c.rival+Math.random()*8);c.player=clamp(c.player+c.temples*2+Math.random()*3);c.unrest=clamp(c.unrest+Math.random()*10-4);state.gold+=c.temples*12+(state.godId==="poseidon"&&c.coastal?8:2)});
 state.favor=Math.min(140,state.favor+35);state.faith+=10;state.food+=20;state.wood+=10;state.stone+=8;
 state.heroes.forEach(h=>{if(h.recruited){h.health=clamp(h.health+25);h.energy=clamp(h.energy+35);h.status="Awaiting a quest"}});
 state.council.forEach(g=>{g.relationship=clamp(g.relationship+Math.floor(Math.random()*7)-3);g.mood=randomItem(["Calm","Watchful","Pleased","Restless","Curious"])});
 if(state.audiences.length<3)state.audiences.push(createAudience());
 if(state.divineRequests.length<2)state.divineRequests.push(createRequest());
 if(Math.random()<.65){const city=randomItem(state.cities),events=[["🔥","City Fire","A fire damages homes."],["🌾","Great Harvest","A rich harvest improves the city."],["⚔️","Border Conflict","Soldiers gather near the walls."],["🏛️","Temple Celebration","Priests hold a sacred ceremony."]],e=randomItem(events);state.mapEvents.push({id:uid("event"),city:city.name,icon:e[0],title:e[1],text:`${e[2]} Location: ${city.name}.`})}
 addLog(`Year ${state.year} Begins`,"The mortal world and Olympus both continue to change.");closeModal();renderAll();saveGame(false);showToast(`Year ${state.year} has begun.`);
}
function advanceTurn(){state.favor=Math.min(140,state.favor+8);state.faith+=3;state.cities.forEach(c=>{c.rival=clamp(c.rival+Math.random()*2);c.unrest=clamp(c.unrest+Math.random()*3-1)});renderAll();saveGame(false)}
function spend(r,a){if(state[r]<a){showToast(`Not enough ${r}.`);return false}state[r]-=a;return true}
function addLog(title,text){state.log.unshift({title,text,year:state.year});state.log=state.log.slice(0,60)}
function renderLog(){$("#event-log").innerHTML=state.log.map(e=>`<article class="log-card"><div class="card-row"><h3>${e.title}</h3><span class="pill">Year ${e.year}</span></div><p class="muted">${e.text}</p></article>`).join("")}
function showModal(h){$("#modal-content").innerHTML=h;$("#modal").classList.remove("hidden")}function closeModal(){$("#modal").classList.add("hidden")}
function showToast(m){const t=$("#toast");t.textContent=m;t.classList.remove("hidden");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.add("hidden"),2300)}
function switchView(id){$$(".view").forEach(v=>v.classList.toggle("active",v.id===id));$$(".nav-button").forEach(b=>b.classList.toggle("active",b.dataset.view===id))}
$("#begin-button").addEventListener("click",()=>selectedGodId&&startGame(false));$("#continue-button").addEventListener("click",()=>startGame(true));$("#save-button").addEventListener("click",()=>saveGame(true));$("#advance-year-button").addEventListener("click",confirmAdvanceYear);$("#modal-close").addEventListener("click",closeModal);$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});$$(".nav-button").forEach(b=>b.addEventListener("click",()=>switchView(b.dataset.view)));$$(".map-filter").forEach(b=>b.addEventListener("click",()=>{currentMapFilter=b.dataset.mapFilter;$$(".map-filter").forEach(x=>x.classList.toggle("active",x===b));renderMapMarkers()}));
$("#reset-button").addEventListener("click",()=>{if(!confirm("Delete your saved game?"))return;localStorage.removeItem(SAVE_KEY);state=null;selectedGodId=null;$("#game-screen").classList.remove("active");$("#start-screen").classList.add("active");$("#continue-button").classList.add("hidden");$("#begin-button").disabled=true;$("#begin-button").textContent="Select a God";renderGodSelection()});
renderGodSelection();
