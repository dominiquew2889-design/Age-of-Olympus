const SAVE_KEY = "ageOfOlympusSaveV030";

const gods = [
  {id:"zeus",name:"Zeus",symbol:"⚡",title:"King of Olympus",bonus:"Miracles generate 20% more Faith."},
  {id:"athena",name:"Athena",symbol:"🦉",title:"Goddess of Wisdom",bonus:"Quest success is improved by strategy."},
  {id:"poseidon",name:"Poseidon",symbol:"🔱",title:"Lord of the Seas",bonus:"Coastal cities produce extra Gold."},
  {id:"aphrodite",name:"Aphrodite",symbol:"🕊️",title:"Goddess of Love",bonus:"Throne-room diplomacy is more effective."},
  {id:"ares",name:"Ares",symbol:"🗡️",title:"God of War",bonus:"Heroes deal extra battle damage."},
  {id:"hades",name:"Hades",symbol:"💀",title:"Lord of the Underworld",bonus:"Defeated monsters yield extra treasure."}
];

const cityTemplates = [
  {id:"athens",name:"Athens",symbol:"🏛️",trait:"Center of wisdom",population:850,player:38,rival:34,rivalName:"Athena",unrest:14,temples:1,wealth:48,coastal:true},
  {id:"sparta",name:"Sparta",symbol:"🛡️",trait:"Land of warriors",population:620,player:24,rival:47,rivalName:"Ares",unrest:24,temples:0,wealth:30,coastal:false},
  {id:"corinth",name:"Corinth",symbol:"⛵",trait:"Wealthy trade port",population:720,player:29,rival:42,rivalName:"Poseidon",unrest:17,temples:0,wealth:58,coastal:true},
  {id:"thebes",name:"Thebes",symbol:"🦁",trait:"Ancient royal city",population:680,player:27,rival:39,rivalName:"Dionysus",unrest:21,temples:0,wealth:35,coastal:false},
  {id:"delphi",name:"Delphi",symbol:"🔮",trait:"Home of the oracle",population:430,player:45,rival:37,rivalName:"Apollo",unrest:8,temples:1,wealth:33,coastal:false},
  {id:"crete",name:"Crete",symbol:"🐂",trait:"Island of mysteries",population:760,player:22,rival:41,rivalName:"Artemis",unrest:26,temples:0,wealth:50,coastal:true}
];

const heroTemplates = [
  {id:"heracles",name:"Heracles",portrait:"🦁",title:"The Mighty",cost:95,strength:88,wisdom:42,courage:92,leadership:60,ability:"Labors of Strength"},
  {id:"perseus",name:"Perseus",portrait:"🛡️",title:"Slayer of Medusa",cost:80,strength:68,wisdom:70,courage:82,leadership:58,ability:"Mirror Shield"},
  {id:"achilles",name:"Achilles",portrait:"⚔️",title:"Champion of War",cost:110,strength:92,wisdom:45,courage:90,leadership:74,ability:"Invincible Charge"},
  {id:"odysseus",name:"Odysseus",portrait:"⛵",title:"The Cunning King",cost:85,strength:58,wisdom:94,courage:76,leadership:88,ability:"Master Strategist"},
  {id:"atalanta",name:"Atalanta",portrait:"🏹",title:"Swift Huntress",cost:75,strength:72,wisdom:66,courage:86,leadership:55,ability:"Unmatched Speed"},
  {id:"theseus",name:"Theseus",portrait:"🐂",title:"Prince of Athens",cost:78,strength:75,wisdom:67,courage:84,leadership:70,ability:"Labyrinth Mastery"}
];

const monsterTemplates = [
  {id:"hydra",name:"Hydra",icon:"🐍",territory:"Thebes",health:150,strength:72,fear:68,reward:85,weakness:"Fire"},
  {id:"minotaur",name:"Minotaur",icon:"🐂",territory:"Crete",health:135,strength:78,fear:64,reward:75,weakness:"Wisdom"},
  {id:"medusa",name:"Medusa",icon:"🐍",territory:"Athens",health:110,strength:65,fear:82,reward:90,weakness:"Reflection"},
  {id:"cyclops",name:"Cyclops",icon:"👁️",territory:"Sparta",health:145,strength:80,fear:60,reward:80,weakness:"Cunning"},
  {id:"chimera",name:"Chimera",icon:"🦁",territory:"Corinth",health:160,strength:84,fear:76,reward:100,weakness:"Air"},
  {id:"sirens",name:"Sirens",icon:"🧜",territory:"Corinth",health:95,strength:52,fear:70,reward:65,weakness:"Music"}
];

const questTemplates = [
  {id:"lost-scroll",name:"Recover the Lost Scroll",city:"Athens",difficulty:"Easy",rewardGold:35,rewardGlory:30,stat:"wisdom",description:"A sacred text was stolen from Athena's old library."},
  {id:"pirates",name:"Defeat the Corinthian Pirates",city:"Corinth",difficulty:"Medium",rewardGold:55,rewardGlory:45,stat:"leadership",description:"Raiders have closed the trade routes around Corinth."},
  {id:"spartan-trial",name:"Survive the Spartan Trial",city:"Sparta",difficulty:"Medium",rewardGold:45,rewardGlory:50,stat:"courage",description:"The elders demand a champion prove divine worth."},
  {id:"oracle-escort",name:"Escort the Oracle",city:"Delphi",difficulty:"Easy",rewardGold:30,rewardGlory:35,stat:"wisdom",description:"The oracle must reach a distant shrine safely."}
];

const audienceTemplates = [
  {title:"A King Requests Rain",visitor:"King of Thebes",icon:"👑",text:"The harvest is failing. The king asks for a miracle.",good:"Send Rain",bad:"Demand Tribute"},
  {title:"A Hero Seeks Your Blessing",visitor:"A Young Champion",icon:"🛡️",text:"A mortal asks for strength before facing a monster.",good:"Grant Blessing",bad:"Test Their Pride"},
  {title:"Rival Priests Spread Rumors",visitor:"High Priest",icon:"🙏",text:"A rival cult claims your miracles are false.",good:"Answer Publicly",bad:"Silence Them"},
  {title:"Merchants Offer Tribute",visitor:"Guild Envoy",icon:"🪙",text:"The merchants offer gold in exchange for safe trade.",good:"Protect Trade",bad:"Take the Gold"}
];

let selectedGodId = null;
let state = null;
let toastTimer = null;

const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const clamp = (v,min=0,max=100) => Math.max(min,Math.min(max,v));
const randomItem = arr => arr[Math.floor(Math.random()*arr.length)];
const uid = p => `${p}-${Date.now()}-${Math.random().toString(16).slice(2)}`;

function newGame(godId){
  const cities = cityTemplates.map(c=>({...c}));
  const favored = {zeus:"delphi",athena:"athens",poseidon:"corinth",aphrodite:"thebes",ares:"sparta",hades:"crete"}[godId];
  const city = cities.find(c=>c.id===favored);
  city.player = clamp(city.player+20);
  return {
    version:"0.3.0",
    godId,
    year:1,
    faith:130,
    favor:110,
    gold:120,
    followers:140,
    glory:0,
    food:90,
    stone:50,
    wood:65,
    bronze:25,
    selectedCityId:favored,
    cities,
    heroes:heroTemplates.map(h=>({...h,recruited:false,level:1,xp:0,health:100,energy:100,loyalty:50,status:"Available",equipment:"None"})),
    monsters:monsterTemplates.slice(0,3).map(m=>({...m,active:true,currentHealth:m.health})),
    quests:questTemplates.map(q=>({...q,status:"Available",assignedHeroId:null})),
    audiences:[createAudience(),createAudience()],
    log:[{title:`${getGodById(godId).name} Begins a New Age`,text:`Your divine reign starts in ${city.name}.`,year:1}]
  };
}

function getGodById(id){return gods.find(g=>g.id===id)}
function getGod(){return getGodById(state.godId)}
function getCityByName(name){return state.cities.find(c=>c.name===name)}
function getHero(id){return state.heroes.find(h=>h.id===id)}
function createAudience(){const a=randomItem(audienceTemplates);return {...a,id:uid("audience")}}

function renderGodSelection(){
  $("#god-grid").innerHTML=gods.map(g=>`
    <button class="god-card ${selectedGodId===g.id?"selected":""}" data-god="${g.id}">
      <span class="symbol">${g.symbol}</span>
      <strong>${g.name}</strong>
      <small>${g.title}<br>${g.bonus}</small>
    </button>`).join("");
  $$("[data-god]").forEach(b=>b.addEventListener("click",()=>{
    selectedGodId=b.dataset.god;
    $("#begin-button").disabled=false;
    $("#begin-button").textContent=`Begin as ${getGodById(selectedGodId).name}`;
    renderGodSelection();
  }));
  if(localStorage.getItem(SAVE_KEY))$("#continue-button").classList.remove("hidden");
}

function startGame(load=false){
  if(load){
    try{state=JSON.parse(localStorage.getItem(SAVE_KEY))}
    catch(e){localStorage.removeItem(SAVE_KEY);showToast("Saved game could not be loaded.");return}
  }else state=newGame(selectedGodId);
  $("#start-screen").classList.remove("active");
  $("#game-screen").classList.add("active");
  renderAll();
  saveGame(false);
}

function saveGame(show=true){
  if(!state)return;
  localStorage.setItem(SAVE_KEY,JSON.stringify(state));
  if(show)showToast("Game saved.");
}

function renderAll(){
  $("#god-title").textContent=`${getGod().symbol} ${getGod().name}`;
  $("#faith-value").textContent=Math.floor(state.faith);
  $("#favor-value").textContent=Math.floor(state.favor);
  $("#gold-value").textContent=Math.floor(state.gold);
  $("#followers-value").textContent=Math.floor(state.followers);
  $("#year-label").textContent=`Year ${state.year}`;
  renderWorld();
  renderHeroes();
  renderMonsters();
  renderQuests();
  renderAudiences();
  renderTreasury();
  renderLog();
}

function renderWorld(){
  const controlled=state.cities.filter(c=>c.player>c.rival).length;
  $("#world-summary").innerHTML=`
    <p class="eyebrow">YOUR DIVINE REALM</p>
    <h3>${controlled} of ${state.cities.length} cities favor ${getGod().name}</h3>
    <div class="stats">
      <div class="stat"><strong>${controlled}</strong><small>Controlled</small></div>
      <div class="stat"><strong>${state.cities.reduce((s,c)=>s+c.temples,0)}</strong><small>Temples</small></div>
      <div class="stat"><strong>${state.glory}</strong><small>Glory</small></div>
    </div>`;
  $("#city-list").innerHTML=state.cities.map(c=>`
    <article class="city-card">
      <div class="city-top">
        <span class="city-symbol">${c.symbol}</span>
        <div class="city-name"><h3>${c.name}</h3><small>${c.trait}</small></div>
        <button class="card-button" data-city="${c.id}">Manage</button>
      </div>
      <div class="stats">
        <div class="stat"><strong>${c.population}</strong><small>Population</small></div>
        <div class="stat"><strong>${c.temples}</strong><small>Temples</small></div>
        <div class="stat"><strong>${Math.round(c.unrest)}%</strong><small>Unrest</small></div>
      </div>
      <div class="influence-grid">
        <div class="influence-line"><label>${getGod().name}</label><div class="meter"><span style="width:${c.player}%"></span></div><strong>${Math.round(c.player)}</strong></div>
        <div class="influence-line"><label>${c.rivalName}</label><div class="meter red"><span style="width:${c.rival}%"></span></div><strong>${Math.round(c.rival)}</strong></div>
      </div>
    </article>`).join("");
  $$("[data-city]").forEach(b=>b.addEventListener("click",()=>openCity(b.dataset.city)));
}

function openCity(id){
  state.selectedCityId=id;
  const c=state.cities.find(x=>x.id===id);
  showModal(`
    <p class="eyebrow">CITY MANAGEMENT</p>
    <h2>${c.symbol} ${c.name}</h2>
    <p class="muted">${c.trait}. Choose how to expand your influence.</p>
    <div class="action-grid">
      <button class="action-button" data-city-action="priests">📣 Send Priests<br><small>20 Favor</small></button>
      <button class="action-button" data-city-action="temple">🏛️ Build Temple<br><small>${50+c.temples*25} Gold</small></button>
      <button class="action-button" data-city-action="festival">🎭 Hold Festival<br><small>35 Gold</small></button>
      <button class="action-button" data-city-action="wrath">🔥 Display Wrath<br><small>30 Favor</small></button>
    </div>`);
  $$("[data-city-action]").forEach(b=>b.addEventListener("click",()=>cityAction(c,b.dataset.cityAction)));
}

function cityAction(c,action){
  if(action==="priests"){
    if(!spend("favor",20))return;
    c.player=clamp(c.player+9);state.followers+=12;addLog(`Priests Enter ${c.name}`,"Your worship spreads through the streets.");
  }
  if(action==="temple"){
    const cost=50+c.temples*25;if(!spend("gold",cost))return;
    c.temples+=1;c.player=clamp(c.player+12);state.faith+=20;state.stone=Math.max(0,state.stone-8);addLog(`Temple Built in ${c.name}`,"A permanent sacred site strengthens your faith.");
  }
  if(action==="festival"){
    if(!spend("gold",35))return;
    c.unrest=clamp(c.unrest-12);c.player=clamp(c.player+6);state.faith+=12;addLog(`Festival in ${c.name}`,"The city celebrates your name.");
  }
  if(action==="wrath"){
    if(!spend("favor",30))return;
    c.rival=clamp(c.rival-12);c.unrest=clamp(c.unrest-8);c.player=clamp(c.player-2);addLog(`Wrath Over ${c.name}`,"Fear weakens your rivals, but some mortals recoil.");
  }
  closeModal();advanceTurn();
}

function renderHeroes(){
  const recruited=state.heroes.filter(h=>h.recruited).length;
  $("#hero-count").textContent=`${recruited} Recruited`;
  $("#hero-list").innerHTML=state.heroes.map(h=>`
    <article class="hero-card">
      <div class="hero-top">
        <span class="portrait">${h.portrait}</span>
        <div class="hero-name"><h3>${h.name}</h3><p>${h.title}</p></div>
        <span class="tag gold">${h.recruited?`Level ${h.level}`:`${h.cost} Gold`}</span>
      </div>
      <div class="tag-row">
        <span class="tag">Strength ${h.strength}</span><span class="tag">Wisdom ${h.wisdom}</span>
        <span class="tag">Courage ${h.courage}</span><span class="tag">Leadership ${h.leadership}</span>
      </div>
      <p><strong>Ability:</strong> ${h.ability}<br><strong>Status:</strong> ${h.status}</p>
      ${h.recruited?`
        <div class="card-row"><small class="muted">Experience</small><strong>${h.xp}/${h.level*100}</strong></div>
        <div class="meter green"><span style="width:${Math.min(100,h.xp/(h.level*100)*100)}%"></span></div>
      `:`<button class="card-button" data-recruit="${h.id}">Recruit Hero</button>`}
    </article>`).join("");
  $$("[data-recruit]").forEach(b=>b.addEventListener("click",()=>recruitHero(b.dataset.recruit)));
}

function recruitHero(id){
  const h=getHero(id);
  if(!spend("gold",h.cost))return;
  h.recruited=true;h.loyalty=70;h.status="Awaiting a quest";
  state.glory+=10;
  addLog(`${h.name} Joins Your Cause`,`${h.title} swears loyalty to ${getGod().name}.`);
  showToast(`${h.name} recruited.`);
  renderAll();saveGame(false);
}

function renderMonsters(){
  const active=state.monsters.filter(m=>m.active).length;
  $("#monster-count").textContent=`${active} Active`;
  $("#monster-list").innerHTML=state.monsters.map(m=>`
    <article class="monster-card">
      <div class="monster-top">
        <span class="portrait">${m.icon}</span>
        <div class="hero-name"><h3>${m.name}</h3><p>Threatening ${m.territory}</p></div>
        <span class="tag gold">${m.active?"Active":"Defeated"}</span>
      </div>
      <div class="tag-row"><span class="tag">Strength ${m.strength}</span><span class="tag">Fear ${m.fear}</span><span class="tag">Weakness: ${m.weakness}</span></div>
      <div class="card-row"><small class="muted">Health</small><strong>${Math.max(0,m.currentHealth)}/${m.health}</strong></div>
      <div class="meter red"><span style="width:${Math.max(0,m.currentHealth/m.health*100)}%"></span></div>
      <button class="card-button" data-battle="${m.id}" ${!m.active||!state.heroes.some(h=>h.recruited)?"disabled":""}>Send a Hero</button>
    </article>`).join("");
  $$("[data-battle]").forEach(b=>b.addEventListener("click",()=>chooseHeroForBattle(b.dataset.battle)));
}

function chooseHeroForBattle(monsterId){
  const m=state.monsters.find(x=>x.id===monsterId);
  const heroes=state.heroes.filter(h=>h.recruited&&h.health>20);
  showModal(`
    <p class="eyebrow">CHOOSE A CHAMPION</p><h2>${m.icon} Face ${m.name}</h2>
    <p class="muted">Select a recruited hero for this encounter.</p>
    <div class="action-grid">${heroes.map(h=>`<button class="action-button" data-hero-battle="${h.id}">${h.portrait} ${h.name}<br><small>Level ${h.level}</small></button>`).join("")}</div>`);
  $$("[data-hero-battle]").forEach(b=>b.addEventListener("click",()=>startBattle(monsterId,b.dataset.heroBattle)));
}

function startBattle(monsterId,heroId){
  const m=state.monsters.find(x=>x.id===monsterId),h=getHero(heroId);
  showModal(`
    <p class="eyebrow">INTERACTIVE BATTLE</p>
    <h2>${h.portrait} ${h.name} vs ${m.icon} ${m.name}</h2>
    <p class="muted">Choose your strategy.</p>
    <div class="battle-log"><div class="battle-line">${m.name} has ${m.currentHealth} health. ${h.name} has ${h.health} health.</div></div>
    <div class="action-grid">
      <button class="action-button" data-strategy="power">⚔️ Powerful Attack</button>
      <button class="action-button" data-strategy="smart">🧠 Exploit Weakness</button>
      <button class="action-button" data-strategy="blessing">⚡ Divine Blessing<br><small>20 Favor</small></button>
      <button class="action-button" data-strategy="retreat">🏃 Retreat</button>
    </div>`);
  $$("[data-strategy]").forEach(b=>b.addEventListener("click",()=>resolveBattle(m,h,b.dataset.strategy)));
}

function resolveBattle(m,h,strategy){
  if(strategy==="retreat"){h.status="Recovering";h.energy=Math.max(0,h.energy-15);addLog(`${h.name} Retreats`,`The hero escapes from ${m.name}.`);closeModal();renderAll();return}
  if(strategy==="blessing"&&!spend("favor",20))return;
  let attack=0;
  if(strategy==="power")attack=h.strength*.65+Math.random()*24;
  if(strategy==="smart")attack=h.wisdom*.7+Math.random()*28;
  if(strategy==="blessing")attack=(h.strength+h.wisdom)*.55+25;
  if(state.godId==="ares")attack*=1.12;
  const retaliation=Math.max(8,m.strength*.35-Math.random()*12);
  m.currentHealth-=Math.round(attack);
  h.health=clamp(h.health-Math.round(retaliation));
  h.energy=clamp(h.energy-18);
  if(m.currentHealth<=0){
    m.active=false;m.currentHealth=0;
    let treasure=m.reward;if(state.godId==="hades")treasure=Math.round(treasure*1.25);
    state.gold+=treasure;state.glory+=45;h.xp+=75;h.status="Victorious";
    levelHero(h);
    const city=getCityByName(m.territory);if(city){city.unrest=clamp(city.unrest-15);city.player=clamp(city.player+8)}
    addLog(`${m.name} Defeated`,`${h.name} earns ${treasure} Gold and great glory.`);
    showToast(`${m.name} defeated!`);
  }else if(h.health<=0){
    h.health=10;h.status="Gravely wounded";h.loyalty=clamp(h.loyalty-8);
    addLog(`${h.name} Is Defeated`,`${m.name} remains a threat.`);
    showToast(`${h.name} was defeated.`);
  }else{
    h.xp+=20;h.status="Battle-tested";addLog(`${h.name} Battles ${m.name}`,`Both survive the clash. The monster has ${m.currentHealth} health remaining.`);
    showToast(`${Math.round(attack)} damage dealt.`);
  }
  closeModal();advanceTurn();
}

function levelHero(h){
  while(h.xp>=h.level*100){h.xp-=h.level*100;h.level+=1;h.strength+=4;h.wisdom+=3;h.courage+=3;h.health=100;h.energy=100;addLog(`${h.name} Reaches Level ${h.level}`,"The hero's legend grows.")}
}

function renderQuests(){
  const available=state.quests.filter(q=>q.status==="Available").length;
  $("#quest-count").textContent=`${available} Available`;
  $("#quest-list").innerHTML=state.quests.map(q=>`
    <article class="quest-card">
      <div class="card-row"><span class="pill">${q.city}</span><span class="quest-difficulty">${q.difficulty}</span></div>
      <h3>${q.name}</h3><p>${q.description}</p>
      <div class="tag-row"><span class="tag">🪙 ${q.rewardGold}</span><span class="tag">🏆 ${q.rewardGlory} Glory</span><span class="tag">Best: ${q.stat}</span></div>
      <button class="card-button" data-quest="${q.id}" ${q.status!=="Available"||!state.heroes.some(h=>h.recruited)?"disabled":""}>Assign Hero</button>
    </article>`).join("");
  $$("[data-quest]").forEach(b=>b.addEventListener("click",()=>assignQuest(b.dataset.quest)));
}

function assignQuest(id){
  const q=state.quests.find(x=>x.id===id);
  const heroes=state.heroes.filter(h=>h.recruited&&h.status!=="On a quest");
  showModal(`<p class="eyebrow">ASSIGN QUEST</p><h2>${q.name}</h2><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-quest-hero="${h.id}">${h.portrait} ${h.name}<br><small>${q.stat}: ${h[q.stat]}</small></button>`).join("")}</div>`);
  $$("[data-quest-hero]").forEach(b=>b.addEventListener("click",()=>resolveQuest(q,b.dataset.questHero)));
}

function resolveQuest(q,heroId){
  const h=getHero(heroId);
  let chance=45+h[q.stat]*.45+h.level*4;
  if(state.godId==="athena")chance+=10;
  const success=Math.random()*100<chance;
  q.status=success?"Completed":"Failed";q.assignedHeroId=heroId;h.status=success?"Quest completed":"Recovering";
  if(success){
    state.gold+=q.rewardGold;state.glory+=q.rewardGlory;h.xp+=55;h.loyalty=clamp(h.loyalty+6);levelHero(h);
    addLog(`${q.name} Completed`,`${h.name} returns victorious from ${q.city}.`);
    showToast("Quest completed!");
  }else{
    h.health=clamp(h.health-25);h.loyalty=clamp(h.loyalty-3);
    addLog(`${q.name} Failed`,`${h.name} returns wounded, but alive.`);
    showToast("The quest failed.");
  }
  closeModal();advanceTurn();
}

function renderAudiences(){
  $("#audience-count").textContent=`${state.audiences.length} Waiting`;
  const list=$("#audience-list");
  if(!state.audiences.length){list.innerHTML=`<article class="audience-card"><h3>The throne room is quiet</h3><p>Advance the year or take actions to receive new visitors.</p></article>`;return}
  list.innerHTML=state.audiences.map(a=>`
    <article class="audience-card">
      <div class="card-row"><span class="portrait">${a.icon}</span><span class="tag gold">${a.visitor}</span></div>
      <h3>${a.title}</h3><p>${a.text}</p>
      <div class="choice-row">
        <button class="choice-button good" data-audience-good="${a.id}">${a.good}</button>
        <button class="choice-button bad" data-audience-bad="${a.id}">${a.bad}</button>
      </div>
    </article>`).join("");
  $$("[data-audience-good]").forEach(b=>b.addEventListener("click",()=>resolveAudience(b.dataset.audienceGood,true)));
  $$("[data-audience-bad]").forEach(b=>b.addEventListener("click",()=>resolveAudience(b.dataset.audienceBad,false)));
}

function resolveAudience(id,good){
  const i=state.audiences.findIndex(a=>a.id===id);if(i<0)return;
  const a=state.audiences[i];
  if(good){
    if(state.favor<15){showToast("Not enough Favor.");return}
    state.favor-=15;state.faith+=22;state.followers+=15;state.glory+=8;
    if(state.godId==="aphrodite"){state.faith+=8}
    addLog(`${a.title}: Mercy Chosen`,`${a.visitor} leaves grateful.`);
  }else{
    state.gold+=22;state.faith=Math.max(0,state.faith-8);
    addLog(`${a.title}: Harsh Judgment`,`${a.visitor} leaves with mixed feelings.`);
  }
  state.audiences.splice(i,1);advanceTurn();
}

function renderTreasury(){
  $("#treasury-panel").innerHTML=`
    <div class="resource-grid">
      ${[
        ["🪙","Gold",state.gold],["🌾","Food",state.food],["🪨","Stone",state.stone],["🪵","Wood",state.wood],
        ["🥉","Bronze",state.bronze],["🏆","Glory",state.glory],["✨","Faith",state.faith],["⚡","Favor",state.favor]
      ].map(r=>`<article class="resource-card"><span class="resource-icon">${r[0]}</span><strong>${Math.floor(r[2])}</strong><small>${r[1]}</small></article>`).join("")}
    </div>
    <div class="income-box">
      <h3>Estimated Yearly Income</h3>
      <div class="income-line"><span>Temple offerings</span><strong>+${state.cities.reduce((s,c)=>s+c.temples*12,0)} Gold</strong></div>
      <div class="income-line"><span>Controlled cities</span><strong>+${state.cities.filter(c=>c.player>c.rival).length*8} Faith</strong></div>
      <div class="income-line"><span>Food harvest</span><strong>+${Math.max(8,Math.round(state.cities.reduce((s,c)=>s+c.population,0)/180))} Food</strong></div>
    </div>`;
}

function confirmAdvanceYear(){
  showModal(`
    <p class="eyebrow">ADVANCE TIME</p><h2>Advance to Year ${state.year+1}?</h2>
    <p class="muted">Citizens will grow, cities will change, rival gods will act, heroes will recover, and new threats may appear.</p>
    <div class="choice-row">
      <button id="confirm-year" class="choice-button good">Advance Year</button>
      <button id="cancel-year" class="choice-button bad">Cancel</button>
    </div>`);
  $("#confirm-year").addEventListener("click",advanceYear);
  $("#cancel-year").addEventListener("click",closeModal);
}

function advanceYear(){
  const oldYear=state.year;
  state.year+=1;
  let births=0,deaths=0,converted=0;
  state.cities.forEach(c=>{
    const growth=Math.floor(c.population*(.01+Math.random()*.025));
    c.population+=growth;births+=growth;
    const loss=Math.floor(Math.random()*5);c.population=Math.max(100,c.population-loss);deaths+=loss;
    c.rival=clamp(c.rival+Math.random()*8);
    c.player=clamp(c.player+c.temples*2+Math.random()*3);
    c.unrest=clamp(c.unrest+Math.random()*10-4);
    c.wealth=clamp(c.wealth+Math.random()*8-3);
    if(c.player>c.rival)converted+=1;
    state.gold+=c.temples*12+(state.godId==="poseidon"&&c.coastal?8:2);
  });
  state.food+=Math.max(8,Math.round(state.cities.reduce((s,c)=>s+c.population,0)/180));
  state.wood+=10+Math.floor(Math.random()*8);
  state.stone+=8+Math.floor(Math.random()*6);
  state.bronze+=4+Math.floor(Math.random()*5);
  state.faith+=state.cities.filter(c=>c.player>c.rival).length*8;
  state.favor=Math.min(130,state.favor+35);
  state.heroes.forEach(h=>{if(h.recruited){h.health=clamp(h.health+25);h.energy=clamp(h.energy+35);if(h.status==="Recovering"||h.status==="Gravely wounded")h.status="Awaiting a quest"}});
  if(state.audiences.length<3)state.audiences.push(createAudience());
  if(Math.random()<.55){
    const dormant=monsterTemplates.filter(t=>!state.monsters.some(m=>m.id===t.id));
    if(dormant.length){const m=randomItem(dormant);state.monsters.push({...m,active:true,currentHealth:m.health});addLog(`${m.name} Appears`,`${m.territory} is threatened by a new monster.`)}
  }
  state.quests.filter(q=>q.status!=="Available").forEach(q=>{if(Math.random()<.45){q.status="Available";q.assignedHeroId=null}});
  addLog(`Year ${state.year} Begins`,`${births} births, ${deaths} deaths, and ${converted} cities currently favor your rule.`);
  closeModal();
  renderAll();saveGame(false);
  showYearSummary(oldYear+1,births,deaths,converted);
}

function showYearSummary(year,births,deaths,converted){
  showModal(`
    <p class="eyebrow">YEARLY CHRONICLE</p><h2>Year ${year}</h2>
    <div class="stats">
      <div class="stat"><strong>+${births}</strong><small>Births</small></div>
      <div class="stat"><strong>${deaths}</strong><small>Deaths</small></div>
      <div class="stat"><strong>${converted}</strong><small>Favored Cities</small></div>
    </div>
    <div class="battle-log">
      <div class="battle-line">Temples produced offerings.</div>
      <div class="battle-line">Rival gods expanded their influence.</div>
      <div class="battle-line">Heroes recovered health and energy.</div>
      <div class="battle-line">New audiences and threats may have appeared.</div>
    </div>
    <button id="close-summary" class="primary-button">Continue</button>`);
  $("#close-summary").addEventListener("click",closeModal);
}

function advanceTurn(){
  state.favor=Math.min(130,state.favor+8);
  state.faith+=3;
  state.cities.forEach(c=>{c.rival=clamp(c.rival+Math.random()*2.5);c.unrest=clamp(c.unrest+Math.random()*3-1)});
  if(Math.random()<.25&&state.audiences.length<4)state.audiences.push(createAudience());
  renderAll();saveGame(false);
}

function spend(resource,amount){
  if(state[resource]<amount){showToast(`Not enough ${resource}.`);return false}
  state[resource]-=amount;return true;
}
function addLog(title,text){state.log.unshift({title,text,year:state.year});state.log=state.log.slice(0,50)}
function renderLog(){$("#event-log").innerHTML=state.log.map(e=>`<article class="log-card"><div class="card-row"><h3>${e.title}</h3><span class="pill">Year ${e.year}</span></div><p>${e.text}</p></article>`).join("")}
function showModal(html){$("#modal-content").innerHTML=html;$("#modal").classList.remove("hidden")}
function closeModal(){$("#modal").classList.add("hidden")}
function showToast(msg){const t=$("#toast");t.textContent=msg;t.classList.remove("hidden");clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.add("hidden"),2300)}
function switchView(id){$$(".view").forEach(v=>v.classList.toggle("active",v.id===id));$$(".nav-button").forEach(b=>b.classList.toggle("active",b.dataset.view===id))}

$("#begin-button").addEventListener("click",()=>selectedGodId&&startGame(false));
$("#continue-button").addEventListener("click",()=>startGame(true));
$("#save-button").addEventListener("click",()=>saveGame(true));
$("#advance-year-button").addEventListener("click",confirmAdvanceYear);
$("#modal-close").addEventListener("click",closeModal);
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
$$(".nav-button").forEach(b=>b.addEventListener("click",()=>switchView(b.dataset.view)));
$("#reset-button").addEventListener("click",()=>{
  if(!confirm("Delete your saved game and begin again?"))return;
  localStorage.removeItem(SAVE_KEY);state=null;selectedGodId=null;
  $("#game-screen").classList.remove("active");$("#start-screen").classList.add("active");
  $("#continue-button").classList.add("hidden");$("#begin-button").disabled=true;$("#begin-button").textContent="Select a God";
  renderGodSelection();
});

renderGodSelection();
