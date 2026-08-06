const SAVE_KEY="ageOfOlympusSaveV040A";
const gods=[
{id:"zeus",name:"Zeus",symbol:"⚡",title:"King of Olympus",bonus:"Miracles generate more Faith."},
{id:"athena",name:"Athena",symbol:"🦉",title:"Goddess of Wisdom",bonus:"Heroes gain strategic advantages."},
{id:"poseidon",name:"Poseidon",symbol:"🔱",title:"Lord of the Seas",bonus:"Coastal cities produce extra Gold."},
{id:"aphrodite",name:"Aphrodite",symbol:"🕊️",title:"Goddess of Love",bonus:"Diplomacy produces stronger loyalty."},
{id:"ares",name:"Ares",symbol:"🗡️",title:"God of War",bonus:"Heroes deal extra battle damage."},
{id:"hades",name:"Hades",symbol:"💀",title:"Lord of the Underworld",bonus:"Defeated monsters yield extra treasure."}
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
{id:"odysseus",name:"Odysseus",portrait:"⛵",title:"The Cunning King",cost:85,strength:58,wisdom:94,courage:76,leadership:88,ability:"Master Strategist",location:"Corinth"},
{id:"atalanta",name:"Atalanta",portrait:"🏹",title:"Swift Huntress",cost:75,strength:72,wisdom:66,courage:86,leadership:55,ability:"Unmatched Speed",location:"Argos"},
{id:"theseus",name:"Theseus",portrait:"🐂",title:"Prince of Athens",cost:78,strength:75,wisdom:67,courage:84,leadership:70,ability:"Labyrinth Mastery",location:"Athens"}
];
const monsterTemplates=[
{id:"hydra",name:"Hydra",icon:"🐍",territory:"Thebes",health:150,strength:72,fear:68,reward:85,weakness:"Fire"},
{id:"minotaur",name:"Minotaur",icon:"🐂",territory:"Crete",health:135,strength:78,fear:64,reward:75,weakness:"Wisdom"},
{id:"medusa",name:"Medusa",icon:"🐍",territory:"Athens",health:110,strength:65,fear:82,reward:90,weakness:"Reflection"},
{id:"cyclops",name:"Cyclops",icon:"👁️",territory:"Sparta",health:145,strength:80,fear:60,reward:80,weakness:"Cunning"},
{id:"chimera",name:"Chimera",icon:"🦁",territory:"Corinth",health:160,strength:84,fear:76,reward:100,weakness:"Air"},
{id:"sirens",name:"Sirens",icon:"🧜",territory:"Rhodes",health:95,strength:52,fear:70,reward:65,weakness:"Music"}
];
const questTemplates=[
{id:"scroll",name:"Recover the Lost Scroll",city:"Athens",difficulty:"Easy",rewardGold:35,rewardGlory:30,stat:"wisdom",description:"A sacred text was stolen from an ancient library."},
{id:"pirates",name:"Defeat the Corinthian Pirates",city:"Corinth",difficulty:"Medium",rewardGold:55,rewardGlory:45,stat:"leadership",description:"Raiders have closed the trade routes."},
{id:"trial",name:"Survive the Spartan Trial",city:"Sparta",difficulty:"Medium",rewardGold:45,rewardGlory:50,stat:"courage",description:"The elders demand a champion prove divine worth."},
{id:"oracle",name:"Escort the Oracle",city:"Delphi",difficulty:"Easy",rewardGold:30,rewardGlory:35,stat:"wisdom",description:"The oracle must reach a distant shrine safely."}
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
function newGame(godId){
 const cities=cityTemplates.map(c=>({...c}));
 const favored={zeus:"Delphi",athena:"Athens",poseidon:"Corinth",aphrodite:"Thebes",ares:"Sparta",hades:"Crete"}[godId];
 getCityFrom(cities,favored).player=clamp(getCityFrom(cities,favored).player+20);
 return{version:"0.4.0a",godId,year:1,faith:130,favor:110,gold:120,followers:140,glory:0,food:90,stone:50,wood:65,bronze:25,
 cities,heroes:heroTemplates.map(h=>({...h,recruited:false,level:1,xp:0,health:100,energy:100,loyalty:50,status:"Available"})),
 monsters:monsterTemplates.slice(0,3).map(m=>({...m,active:true,currentHealth:m.health})),
 quests:questTemplates.map(q=>({...q,status:"Available"})),audiences:[createAudience(),createAudience()],
 mapEvents:[{id:uid("event"),city:"Corinth",icon:"🌾",title:"Great Harvest",text:"Corinth enjoys a rich harvest.",type:"event"}],
 log:[{title:`${getGodById(godId).name} Begins a New Age`,text:`Your divine reign starts in ${favored}.`,year:1}]};
}
function getCityFrom(cities,name){return cities.find(c=>c.name===name)}

function renderGodSelection(){
 $("#god-grid").innerHTML=gods.map(g=>`<button class="god-card ${selectedGodId===g.id?"selected":""}" data-god="${g.id}"><span class="symbol">${g.symbol}</span><strong>${g.name}</strong><small>${g.title}<br>${g.bonus}</small></button>`).join("");
 $$("[data-god]").forEach(b=>b.addEventListener("click",()=>{selectedGodId=b.dataset.god;$("#begin-button").disabled=false;$("#begin-button").textContent=`Begin as ${getGodById(selectedGodId).name}`;renderGodSelection()}));
 if(localStorage.getItem(SAVE_KEY))$("#continue-button").classList.remove("hidden");
}
function startGame(load=false){if(load){try{state=JSON.parse(localStorage.getItem(SAVE_KEY))}catch(e){localStorage.removeItem(SAVE_KEY);showToast("Save could not be loaded.");return}}else state=newGame(selectedGodId);$("#start-screen").classList.remove("active");$("#game-screen").classList.add("active");renderAll();saveGame(false)}
function saveGame(show=true){if(!state)return;localStorage.setItem(SAVE_KEY,JSON.stringify(state));if(show)showToast("Game saved.")}
function renderAll(){
 $("#god-title").textContent=`${getGod().symbol} ${getGod().name}`;$("#faith-value").textContent=Math.floor(state.faith);$("#favor-value").textContent=Math.floor(state.favor);$("#gold-value").textContent=Math.floor(state.gold);$("#followers-value").textContent=Math.floor(state.followers);$("#year-label").textContent=`Year ${state.year}`;
 renderWorld();renderHeroes();renderMonsters();renderQuests();renderAudiences();renderTreasury();renderLog();
}
function renderWorld(){
 const controlled=state.cities.filter(c=>c.player>c.rival).length;
 $("#world-summary").innerHTML=`<p class="eyebrow">YOUR DIVINE REALM</p><h3>${controlled} of ${state.cities.length} cities favor ${getGod().name}</h3><div class="stats"><div class="stat"><strong>${controlled}</strong><small>Controlled</small></div><div class="stat"><strong>${state.cities.reduce((s,c)=>s+c.temples,0)}</strong><small>Temples</small></div><div class="stat"><strong>${state.glory}</strong><small>Glory</small></div></div>`;
 renderMapMarkers();if(!$("#selected-map-panel").dataset.selected)$("#selected-map-panel").className="selected-map-panel empty",$("#selected-map-panel").innerHTML="Tap a city, hero, monster, or event on the map.";
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
 const panel=$("#selected-map-panel");panel.dataset.selected="true";panel.className="selected-map-panel";
 if(type==="city"){const c=state.cities.find(x=>x.id===id);panel.innerHTML=`<div class="card-row"><div><p class="eyebrow">CITY</p><h2>${c.symbol} ${c.name}</h2></div><span class="pill">${c.player>c.rival?"Your influence":"Rival influence"}</span></div><p class="muted">${c.trait}</p><div class="stats"><div class="stat"><strong>${c.population}</strong><small>Population</small></div><div class="stat"><strong>${c.temples}</strong><small>Temples</small></div><div class="stat"><strong>${Math.round(c.unrest)}%</strong><small>Unrest</small></div></div><button class="card-button" id="manage-selected-city">Manage City</button>`;$("#manage-selected-city").addEventListener("click",()=>openCity(c.id))}
 if(type==="hero"){const h=getHero(id);panel.innerHTML=`<div class="card-row"><div><p class="eyebrow">HERO</p><h2>${h.portrait} ${h.name}</h2></div><span class="pill">Level ${h.level}</span></div><p class="muted">${h.title} is currently in ${h.location}. Status: ${h.status}.</p><div class="tag-row"><span class="tag">Strength ${h.strength}</span><span class="tag">Wisdom ${h.wisdom}</span><span class="tag">Courage ${h.courage}</span></div><button class="card-button" id="move-hero">Move Hero</button>`;$("#move-hero").addEventListener("click",()=>chooseHeroDestination(h))}
 if(type==="monster"){const m=state.monsters.find(x=>x.id===id);panel.innerHTML=`<div class="card-row"><div><p class="eyebrow">MONSTER</p><h2>${m.icon} ${m.name}</h2></div><span class="pill">${m.territory}</span></div><p class="muted">Strength ${m.strength}. Fear ${m.fear}. Weakness: ${m.weakness}.</p><div class="meter red"><span style="width:${m.currentHealth/m.health*100}%"></span></div><button class="card-button" id="fight-map-monster" ${state.heroes.some(h=>h.recruited)?"":"disabled"}>Send a Hero</button>`;$("#fight-map-monster").addEventListener("click",()=>chooseHeroForBattle(m.id))}
 if(type==="event"){const e=state.mapEvents.find(x=>x.id===id);panel.innerHTML=`<p class="eyebrow">WORLD EVENT</p><h2>${e.icon} ${e.title}</h2><p class="muted">${e.text}</p><button class="card-button" id="resolve-map-event">Acknowledge Event</button>`;$("#resolve-map-event").addEventListener("click",()=>{state.mapEvents=state.mapEvents.filter(x=>x.id!==e.id);state.faith+=5;addLog(e.title,e.text);panel.dataset.selected="";renderAll();showToast("+5 Faith")})}
}
function openCity(id){const c=state.cities.find(x=>x.id===id);showModal(`<p class="eyebrow">CITY MANAGEMENT</p><h2>${c.symbol} ${c.name}</h2><p class="muted">${c.trait}</p><div class="action-grid"><button class="action-button" data-city-action="priests">📣 Send Priests<br><small>20 Favor</small></button><button class="action-button" data-city-action="temple">🏛️ Build Temple<br><small>${50+c.temples*25} Gold</small></button><button class="action-button" data-city-action="festival">🎭 Hold Festival<br><small>35 Gold</small></button><button class="action-button" data-city-action="wrath">🔥 Display Wrath<br><small>30 Favor</small></button></div>`);$$("[data-city-action]").forEach(b=>b.addEventListener("click",()=>cityAction(c,b.dataset.cityAction)))}
function cityAction(c,a){
 if(a==="priests"){if(!spend("favor",20))return;c.player=clamp(c.player+9);state.followers+=12;addLog(`Priests Enter ${c.name}`,"Your worship spreads.")}
 if(a==="temple"){const cost=50+c.temples*25;if(!spend("gold",cost))return;c.temples++;c.player=clamp(c.player+12);state.faith+=20;addLog(`Temple Built in ${c.name}`,"A sacred site strengthens your influence.")}
 if(a==="festival"){if(!spend("gold",35))return;c.unrest=clamp(c.unrest-12);c.player=clamp(c.player+6);state.faith+=12;addLog(`Festival in ${c.name}`,"The city celebrates your name.")}
 if(a==="wrath"){if(!spend("favor",30))return;c.rival=clamp(c.rival-12);c.unrest=clamp(c.unrest-8);addLog(`Wrath Over ${c.name}`,"Fear weakens your rivals.")}
 closeModal();advanceTurn();
}
function renderHeroes(){$("#hero-count").textContent=`${state.heroes.filter(h=>h.recruited).length} Recruited`;$("#hero-list").innerHTML=state.heroes.map(h=>`<article class="card"><div class="hero-top"><span class="portrait">${h.portrait}</span><div class="flex1"><h3>${h.name}</h3><p>${h.title}</p></div><span class="tag gold">${h.recruited?`Level ${h.level}`:`${h.cost} Gold`}</span></div><div class="tag-row"><span class="tag">Strength ${h.strength}</span><span class="tag">Wisdom ${h.wisdom}</span><span class="tag">Location ${h.location}</span></div>${h.recruited?`<button class="card-button" data-move="${h.id}">Move Hero</button>`:`<button class="card-button" data-recruit="${h.id}">Recruit Hero</button>`}</article>`).join("");$$("[data-recruit]").forEach(b=>b.addEventListener("click",()=>recruitHero(b.dataset.recruit)));$$("[data-move]").forEach(b=>b.addEventListener("click",()=>chooseHeroDestination(getHero(b.dataset.move))))}
function recruitHero(id){const h=getHero(id);if(!spend("gold",h.cost))return;h.recruited=true;h.status="Awaiting a quest";state.glory+=10;addLog(`${h.name} Joins Your Cause`,`${h.name} appears on the map in ${h.location}.`);renderAll();saveGame(false)}
function chooseHeroDestination(h){showModal(`<p class="eyebrow">HERO TRAVEL</p><h2>Move ${h.name}</h2><p class="muted">Choose a destination.</p><div class="action-grid">${state.cities.filter(c=>c.name!==h.location).map(c=>`<button class="action-button" data-destination="${c.name}">${c.symbol} ${c.name}</button>`).join("")}</div>`);$$("[data-destination]").forEach(b=>b.addEventListener("click",()=>{const old=h.location;h.location=b.dataset.destination;h.status=`Traveling from ${old}`;state.favor=Math.max(0,state.favor-5);addLog(`${h.name} Travels`,`${h.name} moves from ${old} to ${h.location}.`);closeModal();advanceTurn()}))}
function renderMonsters(){$("#monster-count").textContent=`${state.monsters.filter(m=>m.active).length} Active`;$("#monster-list").innerHTML=state.monsters.map(m=>`<article class="card"><div class="monster-top"><span class="portrait">${m.icon}</span><div class="flex1"><h3>${m.name}</h3><p>Threatening ${m.territory}</p></div><span class="tag gold">${m.active?"Active":"Defeated"}</span></div><div class="meter red"><span style="width:${Math.max(0,m.currentHealth/m.health*100)}%"></span></div><button class="card-button" data-battle="${m.id}" ${!m.active||!state.heroes.some(h=>h.recruited)?"disabled":""}>Send a Hero</button></article>`).join("");$$("[data-battle]").forEach(b=>b.addEventListener("click",()=>chooseHeroForBattle(b.dataset.battle)))}
function chooseHeroForBattle(monsterId){const m=state.monsters.find(x=>x.id===monsterId),heroes=state.heroes.filter(h=>h.recruited&&h.health>20);showModal(`<p class="eyebrow">CHOOSE A CHAMPION</p><h2>${m.icon} Face ${m.name}</h2><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-hero-battle="${h.id}">${h.portrait} ${h.name}<br><small>${h.location}</small></button>`).join("")}</div>`);$$("[data-hero-battle]").forEach(b=>b.addEventListener("click",()=>startBattle(m,b.dataset.heroBattle)))}
function startBattle(m,heroId){const h=getHero(heroId);showModal(`<p class="eyebrow">INTERACTIVE BATTLE</p><h2>${h.name} vs ${m.name}</h2><div class="action-grid"><button class="action-button" data-strategy="power">⚔️ Powerful Attack</button><button class="action-button" data-strategy="smart">🧠 Exploit Weakness</button><button class="action-button" data-strategy="blessing">⚡ Divine Blessing<br><small>20 Favor</small></button><button class="action-button" data-strategy="retreat">🏃 Retreat</button></div>`);$$("[data-strategy]").forEach(b=>b.addEventListener("click",()=>resolveBattle(m,h,b.dataset.strategy)))}
function resolveBattle(m,h,s){if(s==="retreat"){closeModal();return}if(s==="blessing"&&!spend("favor",20))return;let attack=s==="power"?h.strength*.65+Math.random()*24:s==="smart"?h.wisdom*.7+Math.random()*28:(h.strength+h.wisdom)*.55+25;if(state.godId==="ares")attack*=1.12;m.currentHealth-=Math.round(attack);h.health=clamp(h.health-Math.max(8,m.strength*.35-Math.random()*12));if(m.currentHealth<=0){m.active=false;m.currentHealth=0;let reward=m.reward*(state.godId==="hades"?1.25:1);state.gold+=Math.round(reward);state.glory+=45;h.xp+=75;h.status="Victorious";addLog(`${m.name} Defeated`,`${h.name} wins the battle.`)}else{h.xp+=20;addLog(`${h.name} Battles ${m.name}`,`${m.name} has ${m.currentHealth} health remaining.`)}closeModal();advanceTurn()}
function renderQuests(){$("#quest-count").textContent=`${state.quests.filter(q=>q.status==="Available").length} Available`;$("#quest-list").innerHTML=state.quests.map(q=>`<article class="card"><div class="card-row"><span class="pill">${q.city}</span><span class="tag gold">${q.difficulty}</span></div><h3>${q.name}</h3><p>${q.description}</p><button class="card-button" data-quest="${q.id}" ${q.status!=="Available"||!state.heroes.some(h=>h.recruited)?"disabled":""}>Assign Hero</button></article>`).join("");$$("[data-quest]").forEach(b=>b.addEventListener("click",()=>assignQuest(b.dataset.quest)))}
function assignQuest(id){const q=state.quests.find(x=>x.id===id),heroes=state.heroes.filter(h=>h.recruited);showModal(`<p class="eyebrow">ASSIGN QUEST</p><h2>${q.name}</h2><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-quest-hero="${h.id}">${h.portrait} ${h.name}<br><small>${q.stat}: ${h[q.stat]}</small></button>`).join("")}</div>`);$$("[data-quest-hero]").forEach(b=>b.addEventListener("click",()=>resolveQuest(q,getHero(b.dataset.questHero))))}
function resolveQuest(q,h){let chance=45+h[q.stat]*.45+(state.godId==="athena"?10:0);if(Math.random()*100<chance){q.status="Completed";state.gold+=q.rewardGold;state.glory+=q.rewardGlory;h.xp+=55;h.location=q.city;addLog(`${q.name} Completed`,`${h.name} succeeds in ${q.city}.`)}else{q.status="Failed";h.health=clamp(h.health-25);addLog(`${q.name} Failed`,`${h.name} returns wounded.`)}closeModal();advanceTurn()}
function renderAudiences(){$("#audience-count").textContent=`${state.audiences.length} Waiting`;$("#audience-list").innerHTML=state.audiences.length?state.audiences.map(a=>`<article class="card"><div class="card-row"><span class="portrait">${a.icon}</span><span class="tag gold">${a.visitor}</span></div><h3>${a.title}</h3><p>${a.text}</p><div class="choice-row"><button class="choice-button good" data-good="${a.id}">${a.good}</button><button class="choice-button bad" data-bad="${a.id}">${a.bad}</button></div></article>`).join(""):`<article class="card"><h3>The throne room is quiet</h3></article>`;$$("[data-good]").forEach(b=>b.addEventListener("click",()=>resolveAudience(b.dataset.good,true)));$$("[data-bad]").forEach(b=>b.addEventListener("click",()=>resolveAudience(b.dataset.bad,false)))}
function resolveAudience(id,good){const i=state.audiences.findIndex(a=>a.id===id);if(good){if(!spend("favor",15))return;state.faith+=22;state.followers+=15}else{state.gold+=22;state.faith=Math.max(0,state.faith-8)}state.audiences.splice(i,1);advanceTurn()}
function renderTreasury(){$("#treasury-panel").innerHTML=`<div class="resource-grid">${[["🪙","Gold",state.gold],["🌾","Food",state.food],["🪨","Stone",state.stone],["🪵","Wood",state.wood],["🥉","Bronze",state.bronze],["🏆","Glory",state.glory],["✨","Faith",state.faith],["⚡","Favor",state.favor]].map(r=>`<article class="card resource-card"><span class="resource-icon">${r[0]}</span><strong>${Math.floor(r[2])}</strong><small>${r[1]}</small></article>`).join("")}</div>`}
function confirmAdvanceYear(){showModal(`<p class="eyebrow">ADVANCE TIME</p><h2>Advance to Year ${state.year+1}?</h2><p class="muted">Cities, heroes, rivals, monsters, and events will change.</p><div class="choice-row"><button id="confirm-year" class="choice-button good">Advance Year</button><button id="cancel-year" class="choice-button bad">Cancel</button></div>`);$("#confirm-year").addEventListener("click",advanceYear);$("#cancel-year").addEventListener("click",closeModal)}
function advanceYear(){state.year++;let births=0,deaths=0;state.cities.forEach(c=>{const growth=Math.floor(c.population*(.01+Math.random()*.025));births+=growth;c.population+=growth;const loss=Math.floor(Math.random()*5);deaths+=loss;c.population-=loss;c.rival=clamp(c.rival+Math.random()*8);c.player=clamp(c.player+c.temples*2+Math.random()*3);c.unrest=clamp(c.unrest+Math.random()*10-4);state.gold+=c.temples*12+(state.godId==="poseidon"&&c.coastal?8:2)});state.favor=Math.min(130,state.favor+35);state.heroes.forEach(h=>{if(h.recruited){h.health=clamp(h.health+25);h.energy=clamp(h.energy+35);h.status="Awaiting a quest"}});if(state.audiences.length<3)state.audiences.push(createAudience());if(Math.random()<.7){const city=randomItem(state.cities),events=[["🔥","City Fire","A fire damages homes and raises unrest."],["🌾","Great Harvest","A rich harvest improves happiness."],["⚔️","Border Conflict","Soldiers gather near the city walls."],["🏛️","Temple Celebration","Priests hold a sacred ceremony."]],e=randomItem(events);state.mapEvents.push({id:uid("event"),city:city.name,icon:e[0],title:e[1],text:`${e[2]} Location: ${city.name}.`})}addLog(`Year ${state.year} Begins`,`${births} births and ${deaths} deaths were recorded.`);closeModal();renderAll();saveGame(false);showToast(`Year ${state.year} has begun.`)}
function advanceTurn(){state.favor=Math.min(130,state.favor+8);state.faith+=3;state.cities.forEach(c=>{c.rival=clamp(c.rival+Math.random()*2);c.unrest=clamp(c.unrest+Math.random()*3-1)});renderAll();saveGame(false)}
function spend(r,a){if(state[r]<a){showToast(`Not enough ${r}.`);return false}state[r]-=a;return true}
function addLog(title,text){state.log.unshift({title,text,year:state.year});state.log=state.log.slice(0,50)}
function renderLog(){$("#event-log").innerHTML=state.log.map(e=>`<article class="log-card"><div class="card-row"><h3>${e.title}</h3><span class="pill">Year ${e.year}</span></div><p class="muted">${e.text}</p></article>`).join("")}
function showModal(h){$("#modal-content").innerHTML=h;$("#modal").classList.remove("hidden")}function closeModal(){$("#modal").classList.add("hidden")}
function showToast(m){const t=$("#toast");t.textContent=m;t.classList.remove("hidden");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.add("hidden"),2300)}
function switchView(id){$$(".view").forEach(v=>v.classList.toggle("active",v.id===id));$$(".nav-button").forEach(b=>b.classList.toggle("active",b.dataset.view===id))}
$("#begin-button").addEventListener("click",()=>selectedGodId&&startGame(false));$("#continue-button").addEventListener("click",()=>startGame(true));$("#save-button").addEventListener("click",()=>saveGame(true));$("#advance-year-button").addEventListener("click",confirmAdvanceYear);$("#modal-close").addEventListener("click",closeModal);$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});$$(".nav-button").forEach(b=>b.addEventListener("click",()=>switchView(b.dataset.view)));$$(".map-filter").forEach(b=>b.addEventListener("click",()=>{currentMapFilter=b.dataset.mapFilter;$$(".map-filter").forEach(x=>x.classList.toggle("active",x===b));renderMapMarkers()}));
$("#reset-button").addEventListener("click",()=>{if(!confirm("Delete your saved game?"))return;localStorage.removeItem(SAVE_KEY);state=null;selectedGodId=null;$("#game-screen").classList.remove("active");$("#start-screen").classList.add("active");$("#continue-button").classList.add("hidden");$("#begin-button").disabled=true;$("#begin-button").textContent="Select a God";renderGodSelection()});
renderGodSelection();
