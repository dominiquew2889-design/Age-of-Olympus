const SAVE_KEY = "ageOfOlympusSaveV020";
const OLD_SAVE_KEYS = ["ageOfOlympusSaveV010"];

const gods = [
  { id:"zeus", name:"Zeus", symbol:"⚡", title:"King of Olympus", bonus:"Miracles generate +20% Faith." },
  { id:"athena", name:"Athena", symbol:"🦉", title:"Goddess of Wisdom", bonus:"City actions cost 5 less Favor." },
  { id:"poseidon", name:"Poseidon", symbol:"🔱", title:"Lord of the Seas", bonus:"Coastal cities produce extra Gold." },
  { id:"aphrodite", name:"Aphrodite", symbol:"🕊️", title:"Goddess of Love", bonus:"Answered prayers gain extra Loyalty." },
  { id:"ares", name:"Ares", symbol:"🗡️", title:"God of War", bonus:"Intimidation is stronger and cheaper." },
  { id:"hades", name:"Hades", symbol:"💀", title:"Lord of the Underworld", bonus:"Gain Gold whenever a prayer is refused." }
];

const rivalGods = [
  { name:"Apollo", symbol:"☀️" },
  { name:"Hera", symbol:"🦚" },
  { name:"Dionysus", symbol:"🍇" },
  { name:"Artemis", symbol:"🏹" },
  { name:"Hermes", symbol:"🪽" },
  { name:"Demeter", symbol:"🌾" }
];

const cityTemplates = [
  { id:"athens", name:"Athens", symbol:"🏛️", trait:"Center of wisdom", population:850, devotion:22, loyalty:20, unrest:14, wealth:44, coastal:true, rival:"Athena" },
  { id:"sparta", name:"Sparta", symbol:"🛡️", trait:"Land of warriors", population:620, devotion:14, loyalty:15, unrest:24, wealth:28, coastal:false, rival:"Ares" },
  { id:"corinth", name:"Corinth", symbol:"⛵", trait:"Wealthy trade port", population:720, devotion:18, loyalty:18, unrest:17, wealth:56, coastal:true, rival:"Poseidon" },
  { id:"thebes", name:"Thebes", symbol:"🦁", trait:"Proud ancient kingdom", population:680, devotion:16, loyalty:16, unrest:21, wealth:33, coastal:false, rival:"Dionysus" },
  { id:"delphi", name:"Delphi", symbol:"🔮", trait:"Home of the oracle", population:430, devotion:28, loyalty:25, unrest:8, wealth:31, coastal:false, rival:"Apollo" },
  { id:"crete", name:"Crete", symbol:"🐂", trait:"Island of old mysteries", population:760, devotion:12, loyalty:12, unrest:26, wealth:47, coastal:true, rival:"Artemis" }
];

const firstNames = ["Alexios","Damon","Leandros","Nikias","Theron","Kyros","Myrine","Thalia","Ianthe","Helena","Daphne","Chloe","Phoebe","Callista","Xenia","Phaedra"];
const occupations = ["Farmer","Soldier","Merchant","Priest","Potter","Sailor","Healer","Scholar","Blacksmith","Weaver"];
const personalities = ["Brave","Cautious","Ambitious","Kind","Proud","Curious","Devout","Skeptical"];
const prayerTemplates = [
  { title:"A Child Is Gravely Ill", text:"A parent begs for a miracle before sunset.", reward:38, cost:24, penalty:8 },
  { title:"Raiders Approach", text:"Farmers ask for protection from a violent war band.", reward:45, cost:30, penalty:11 },
  { title:"A Merchant Seeks Fortune", text:"A trader promises a shrine in return for success.", reward:28, cost:18, penalty:5 },
  { title:"Forbidden Love", text:"Two young mortals ask you to soften their families' hearts.", reward:34, cost:22, penalty:7 },
  { title:"The General's Plea", text:"A commander prays for victory in a coming battle.", reward:50, cost:34, penalty:12 },
  { title:"The Dying Harvest", text:"A village asks for rain before its crops fail.", reward:42, cost:28, penalty:10 }
];

const powers = [
  { id:"inspire", name:"Inspire Worship", icon:"✨", cost:25, text:"Raise your influence and convert citizens in the selected city." },
  { id:"oracle", name:"Speak Through the Oracle", icon:"🔮", cost:40, text:"Raise loyalty and weaken the influence of a rival god." },
  { id:"miracle", name:"Perform a Miracle", icon:"🌟", cost:65, text:"Gain major Faith, happiness, and devotion." },
  { id:"wrath", name:"Display Divine Wrath", icon:"🔥", cost:50, text:"Destroy unrest through fear, but risk mortal resentment." }
];

let selectedGodId = null;
let state = null;
let toastTimer = null;

const $ = (s) => document.querySelector(s);
const $$ = (s) => [...document.querySelectorAll(s)];

function clamp(v,min=0,max=100){ return Math.max(min,Math.min(max,v)); }
function randomItem(arr){ return arr[Math.floor(Math.random()*arr.length)]; }
function uid(prefix){ return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`; }

function createCitizens(cityId,count=14){
  return Array.from({length:count},(_,i)=>({
    id:uid(`citizen-${cityId}-${i}`),
    cityId,
    name:randomItem(firstNames),
    age:18+Math.floor(Math.random()*48),
    occupation:randomItem(occupations),
    personality:randomItem(personalities),
    happiness:45+Math.floor(Math.random()*35),
    wealth:20+Math.floor(Math.random()*60),
    devotion:10+Math.floor(Math.random()*35),
    worship:Math.random()<0.22 ? randomItem(rivalGods).name : "Undecided",
    loyalty:10+Math.floor(Math.random()*30)
  }));
}

function createLeader(city){
  return {
    name:`Archon ${randomItem(firstNames)}`,
    support:25+Math.floor(Math.random()*50),
    trait:randomItem(["Traditional","Pragmatic","Ambitious","Pious","Suspicious"])
  };
}

function createNewState(godId){
  const cities=cityTemplates.map(city=>({
    ...city,
    templeLevel:0,
    playerInfluence:city.devotion,
    rivalInfluence:25+Math.floor(Math.random()*25),
    leader:createLeader(city)
  }));
  const preferred={zeus:"delphi",athena:"athens",poseidon:"corinth",aphrodite:"thebes",ares:"sparta",hades:"crete"}[godId];
  const favored=cities.find(c=>c.id===preferred);
  favored.playerInfluence+=22;
  favored.loyalty+=15;

  const citizens=cities.flatMap(c=>createCitizens(c.id));
  citizens.filter(c=>c.cityId===preferred).slice(0,5).forEach(c=>{
    c.worship=gods.find(g=>g.id===godId).name;
    c.devotion+=20;
    c.loyalty+=20;
  });

  return {
    version:"0.2.0",
    godId,
    year:1,
    turn:1,
    faith:90,
    favor:100,
    gold:80,
    followers:120,
    selectedCityId:preferred,
    cities,
    citizens,
    prayers:[],
    log:[{title:`${getGodById(godId).name} Rises`,text:`Your first worshippers gather in ${favored.name}.`,turn:1}]
  };
}

function getGodById(id){ return gods.find(g=>g.id===id); }
function getGod(){ return getGodById(state.godId); }
function getCity(id){ return state.cities.find(c=>c.id===id); }
function citizensIn(cityId){ return state.citizens.filter(c=>c.cityId===cityId); }

function renderGodSelection(){
  $("#god-grid").innerHTML=gods.map(g=>`
    <button class="god-card ${selectedGodId===g.id?"selected":""}" data-god-id="${g.id}">
      <span class="symbol">${g.symbol}</span>
      <strong>${g.name}</strong>
      <small>${g.title}<br>${g.bonus}</small>
    </button>`).join("");

  $$("[data-god-id]").forEach(btn=>btn.addEventListener("click",()=>{
    selectedGodId=btn.dataset.godId;
    $("#begin-button").disabled=false;
    $("#begin-button").textContent=`Begin as ${getGodById(selectedGodId).name}`;
    renderGodSelection();
  }));

  if(localStorage.getItem(SAVE_KEY)) $("#continue-button").classList.remove("hidden");
}

function startGame(loadExisting=false){
  if(loadExisting){
    try{ state=JSON.parse(localStorage.getItem(SAVE_KEY)); }
    catch(e){ localStorage.removeItem(SAVE_KEY); showToast("Save could not be loaded."); return; }
  }else{
    state=createNewState(selectedGodId);
    generatePrayer(); generatePrayer();
  }
  $("#start-screen").classList.remove("active");
  $("#game-screen").classList.add("active");
  renderAll();
  saveGame(false);
}

function saveGame(show=true){
  if(!state)return;
  localStorage.setItem(SAVE_KEY,JSON.stringify(state));
  if(show)showToast("Game saved on this device.");
}

function renderAll(){
  const god=getGod();
  $("#god-title").textContent=`${god.symbol} ${god.name}`;
  $("#faith-value").textContent=Math.floor(state.faith);
  $("#favor-value").textContent=Math.floor(state.favor);
  $("#gold-value").textContent=Math.floor(state.gold);
  $("#followers-value").textContent=Math.floor(state.followers);
  $("#year-label").textContent=`Year ${state.year}`;
  $("#prayer-count").textContent=state.prayers.length;
  renderWorldSummary();
  renderCities();
  renderCitizenFilter();
  renderCitizens();
  renderPrayers();
  renderPowers();
  renderLog();
}

function renderWorldSummary(){
  const controlled=state.cities.filter(c=>c.playerInfluence>c.rivalInfluence).length;
  const temples=state.cities.reduce((s,c)=>s+c.templeLevel,0);
  const avgHappy=Math.round(state.citizens.reduce((s,c)=>s+c.happiness,0)/state.citizens.length);
  $("#world-summary").innerHTML=`
    <p class="eyebrow">YOUR DIVINE REALM</p>
    <h3>${controlled} of ${state.cities.length} cities favor ${getGod().name}</h3>
    <div class="summary-grid">
      <div><strong>${controlled}</strong><small>Controlled</small></div>
      <div><strong>${temples}</strong><small>Temples</small></div>
      <div><strong>${avgHappy}%</strong><small>Happiness</small></div>
    </div>`;
}

function renderCities(){
  $("#city-list").innerHTML=state.cities.map(city=>{
    const controlled=city.playerInfluence>city.rivalInfluence;
    return `
    <article class="city-card">
      <div class="city-top">
        <span class="city-symbol">${city.symbol}</span>
        <div class="city-name">
          <h3>${city.name}</h3>
          <small>${city.trait} • ${controlled?`Favored by ${getGod().name}`:`Contested by ${city.rival}`}</small>
        </div>
        <button class="city-button" data-city="${city.id}">Manage</button>
      </div>
      <div class="stats">
        <div class="stat"><strong>${city.population}</strong><small>People</small></div>
        <div class="stat"><strong>${city.templeLevel}</strong><small>Temples</small></div>
        <div class="stat"><strong>${Math.round(city.unrest)}%</strong><small>Unrest</small></div>
      </div>
      <div class="influence-grid">
        <div class="influence-line">
          <label>${getGod().name}</label>
          <div class="meter"><span style="width:${city.playerInfluence}%"></span></div>
          <strong>${Math.round(city.playerInfluence)}</strong>
        </div>
        <div class="influence-line">
          <label>${city.rival}</label>
          <div class="meter rival"><span style="width:${city.rivalInfluence}%"></span></div>
          <strong>${Math.round(city.rivalInfluence)}</strong>
        </div>
      </div>
      <div class="leader-row">
        <span class="leader-badge">👑</span>
        <div>
          <strong>${city.leader.name}</strong><br>
          <small>${city.leader.trait} • ${city.leader.support}% support</small>
        </div>
      </div>
    </article>`;
  }).join("");

  $$("[data-city]").forEach(btn=>btn.addEventListener("click",()=>openCity(btn.dataset.city)));
}

function openCity(cityId){
  state.selectedCityId=cityId;
  const city=getCity(cityId);
  const discount=state.godId==="athena"?5:0;
  showModal(`
    <p class="eyebrow">CITY MANAGEMENT</p>
    <h2>${city.symbol} ${city.name}</h2>
    <p class="card-muted">${city.trait}. ${citizensIn(city.id).length} named citizens are currently simulated here.</p>
    <div class="stats">
      <div class="stat"><strong>${Math.round(city.playerInfluence)}</strong><small>Your Influence</small></div>
      <div class="stat"><strong>${city.templeLevel}</strong><small>Temple Level</small></div>
      <div class="stat"><strong>${city.leader.support}%</strong><small>Leader Support</small></div>
    </div>
    <div class="action-grid">
      <button class="action-button" data-action="priests">📣 Send Priests<br><small>${Math.max(10,20-discount)} Favor</small></button>
      <button class="action-button" data-action="temple">🏛️ Build Temple<br><small>${45+city.templeLevel*25} Gold</small></button>
      <button class="action-button" data-action="leader">🤝 Influence Leader<br><small>30 Favor</small></button>
      <button class="action-button" data-action="festival">🎭 Hold Festival<br><small>35 Gold</small></button>
      <button class="action-button" data-action="convert">🙏 Convert Citizens<br><small>28 Favor</small></button>
      <button class="action-button" data-action="intimidate">🔥 Intimidate<br><small>${state.godId==="ares"?15:25} Favor</small></button>
    </div>`);

  $$("[data-action]").forEach(btn=>btn.addEventListener("click",()=>performCityAction(cityId,btn.dataset.action)));
}

function performCityAction(cityId,action){
  const city=getCity(cityId);
  const local=citizensIn(cityId);
  const discount=state.godId==="athena"?5:0;
  let title="",text="";

  if(action==="priests"){
    if(!spend("favor",Math.max(10,20-discount)))return;
    city.playerInfluence=clamp(city.playerInfluence+9);
    city.loyalty=clamp(city.loyalty+5);
    local.slice(0,3).forEach(c=>{c.devotion=clamp(c.devotion+10); if(c.devotion>45)c.worship=getGod().name;});
    title=`Priests Enter ${city.name}`; text="Sermons and sacred stories spread among the population.";
  }
  if(action==="temple"){
    const cost=45+city.templeLevel*25;
    if(!spend("gold",cost))return;
    city.templeLevel+=1;
    city.playerInfluence=clamp(city.playerInfluence+12);
    city.leader.support=clamp(city.leader.support+5);
    state.faith+=20;
    title=`Temple Raised in ${city.name}`; text="A permanent center of worship now strengthens your influence.";
  }
  if(action==="leader"){
    if(!spend("favor",30))return;
    city.leader.support=clamp(city.leader.support+18);
    city.playerInfluence=clamp(city.playerInfluence+6);
    title=`${city.leader.name} Is Persuaded`; text="The city leader begins publicly supporting your worshippers.";
  }
  if(action==="festival"){
    if(!spend("gold",35))return;
    city.unrest=clamp(city.unrest-12);
    city.playerInfluence=clamp(city.playerInfluence+7);
    local.forEach(c=>c.happiness=clamp(c.happiness+8));
    state.faith+=15;
    title=`Festival of ${getGod().name}`; text=`Music, food, and offerings fill ${city.name}.`;
  }
  if(action==="convert"){
    if(!spend("favor",28))return;
    const undecided=local.filter(c=>c.worship!==getGod().name).sort((a,b)=>b.devotion-a.devotion).slice(0,4);
    undecided.forEach(c=>{c.worship=getGod().name;c.loyalty=clamp(c.loyalty+15);c.devotion=clamp(c.devotion+12);});
    state.followers+=undecided.length*8;
    city.playerInfluence=clamp(city.playerInfluence+8);
    title=`New Converts in ${city.name}`; text=`${undecided.length} influential citizens openly join your faith.`;
  }
  if(action==="intimidate"){
    if(!spend("favor",state.godId==="ares"?15:25))return;
    city.unrest=clamp(city.unrest-(state.godId==="ares"?16:11));
    city.rivalInfluence=clamp(city.rivalInfluence-8);
    local.forEach(c=>{c.happiness=clamp(c.happiness-3);c.loyalty=clamp(c.loyalty+2);});
    title=`Divine Wrath Over ${city.name}`; text="Fear weakens opposition, but the people become less happy.";
  }

  addLog(title,text);
  closeModal();
  advanceTurn();
}

function renderCitizenFilter(){
  const select=$("#citizen-city-filter");
  const current=select.value||state.selectedCityId;
  select.innerHTML=state.cities.map(c=>`<option value="${c.id}">${c.name}</option>`).join("");
  select.value=state.cities.some(c=>c.id===current)?current:state.cities[0].id;
}

function renderCitizens(){
  const cityId=$("#citizen-city-filter").value||state.selectedCityId;
  const list=citizensIn(cityId);
  $("#citizen-list").innerHTML=list.map(c=>`
    <article class="citizen-card">
      <div class="card-row">
        <div>
          <h3>${c.name}, ${c.age}</h3>
          <p>${c.occupation} of ${getCity(c.cityId).name}</p>
        </div>
        <span class="tag gold">${c.worship}</span>
      </div>
      <div class="citizen-meta">
        <span class="tag">${c.personality}</span>
        <span class="tag">Wealth ${c.wealth}</span>
        <span class="tag">Devotion ${c.devotion}</span>
      </div>
      <div class="card-row"><small class="card-muted">Happiness</small><strong>${c.happiness}%</strong></div>
      <div class="meter happy"><span style="width:${c.happiness}%"></span></div>
    </article>`).join("");
}

function renderPrayers(){
  const list=$("#prayer-list");
  if(!state.prayers.length){
    list.innerHTML='<article class="prayer-card"><h3>No unanswered prayers</h3><p>Take actions to advance time and new prayers will arrive.</p></article>';
    return;
  }
  list.innerHTML=state.prayers.map(p=>`
    <article class="prayer-card">
      <div class="card-row"><span class="pill">${getCity(p.cityId).name}</span><span class="power-cost">${p.cost} Favor</span></div>
      <h3>${p.citizenName}: ${p.title}</h3>
      <p>${p.text}</p>
      <div class="choice-row">
        <button class="choice-button mercy" data-answer="${p.id}">Grant Prayer</button>
        <button class="choice-button ignore" data-refuse="${p.id}">Refuse</button>
      </div>
    </article>`).join("");
  $$("[data-answer]").forEach(b=>b.addEventListener("click",()=>answerPrayer(b.dataset.answer,true)));
  $$("[data-refuse]").forEach(b=>b.addEventListener("click",()=>answerPrayer(b.dataset.refuse,false)));
}

function answerPrayer(id,granted){
  const index=state.prayers.findIndex(p=>p.id===id);
  if(index<0)return;
  const prayer=state.prayers[index];
  const city=getCity(prayer.cityId);
  const citizen=state.citizens.find(c=>c.id===prayer.citizenId);

  if(granted){
    if(!spend("favor",prayer.cost))return;
    let gain=prayer.reward*(state.godId==="zeus"?1.2:1);
    state.faith+=gain;
    state.followers+=12;
    city.playerInfluence=clamp(city.playerInfluence+6);
    city.unrest=clamp(city.unrest-3);
    citizen.worship=getGod().name;
    citizen.devotion=clamp(citizen.devotion+22);
    citizen.happiness=clamp(citizen.happiness+18);
    citizen.loyalty=clamp(citizen.loyalty+(state.godId==="aphrodite"?18:12));
    addLog(`Prayer Granted for ${citizen.name}`,`${prayer.title} in ${city.name}.`);
    showToast(`Prayer granted! +${Math.floor(gain)} Faith`);
  }else{
    city.unrest=clamp(city.unrest+Math.ceil(prayer.penalty/2));
    city.playerInfluence=clamp(city.playerInfluence-prayer.penalty);
    citizen.happiness=clamp(citizen.happiness-14);
    citizen.loyalty=clamp(citizen.loyalty-12);
    if(state.godId==="hades"){state.gold+=18;showToast("Hades gains 18 Gold.");}
    else showToast("The mortal feels abandoned.");
    addLog(`Prayer Refused for ${citizen.name}`,`${prayer.title} goes unanswered.`);
  }
  state.prayers.splice(index,1);
  advanceTurn();
}

function renderPowers(){
  $("#power-list").innerHTML=powers.map(p=>`
    <article class="power-card">
      <div class="power-top">
        <div><span style="font-size:34px">${p.icon}</span><h3>${p.name}</h3></div>
        <span class="power-cost">${p.cost} Favor</span>
      </div>
      <p>${p.text}</p>
      <button class="power-button" data-power="${p.id}" ${state.favor<p.cost?"disabled":""}>Use in ${getCity(state.selectedCityId).name}</button>
    </article>`).join("");
  $$("[data-power]").forEach(b=>b.addEventListener("click",()=>usePower(b.dataset.power)));
}

function usePower(id){
  const power=powers.find(p=>p.id===id);
  const city=getCity(state.selectedCityId);
  const local=citizensIn(city.id);
  if(!spend("favor",power.cost))return;

  if(id==="inspire"){
    city.playerInfluence=clamp(city.playerInfluence+14);
    local.slice(0,4).forEach(c=>{c.devotion=clamp(c.devotion+12); if(c.devotion>45)c.worship=getGod().name;});
    state.followers+=24;
  }
  if(id==="oracle"){
    city.loyalty=clamp(city.loyalty+15);
    city.rivalInfluence=clamp(city.rivalInfluence-12);
    city.leader.support=clamp(city.leader.support+8);
  }
  if(id==="miracle"){
    let gain=55*(state.godId==="zeus"?1.2:1);
    state.faith+=gain;
    city.playerInfluence=clamp(city.playerInfluence+18);
    city.unrest=clamp(city.unrest-14);
    local.forEach(c=>c.happiness=clamp(c.happiness+10));
  }
  if(id==="wrath"){
    city.unrest=clamp(city.unrest-22);
    city.rivalInfluence=clamp(city.rivalInfluence-15);
    local.forEach(c=>c.happiness=clamp(c.happiness-7));
  }
  addLog(`${power.name} in ${city.name}`,"Your divine intervention changes the balance of power.");
  showToast(`${power.name} used in ${city.name}.`);
  advanceTurn();
}

function advanceTurn(){
  state.turn+=1;
  state.year=Math.floor((state.turn-1)/6)+1;
  state.favor=Math.min(120,state.favor+11);

  let controlled=0;
  for(const city of state.cities){
    city.rivalInfluence=clamp(city.rivalInfluence+Math.random()*5);
    city.playerInfluence=clamp(city.playerInfluence+city.templeLevel*1.5);
    city.unrest=clamp(city.unrest+(Math.random()*5-2));
    if(city.leader.support>60)city.playerInfluence=clamp(city.playerInfluence+1.5);
    if(city.playerInfluence>city.rivalInfluence)controlled+=1;
    state.gold+=state.godId==="poseidon"&&city.coastal?4:1;
  }

  state.faith+=4+controlled*3;
  state.citizens.forEach(c=>{
    c.happiness=clamp(c.happiness+(Math.random()*4-2));
    if(c.worship===getGod().name)c.devotion=clamp(c.devotion+1);
  });

  state.followers=state.citizens.filter(c=>c.worship===getGod().name).length*10+100;

  if(state.turn%2===0&&state.prayers.length<4)generatePrayer();
  if(state.turn%4===0)rivalMove();
  if(state.turn%5===0)worldEvent();

  renderAll();
  saveGame(false);
}

function rivalMove(){
  const city=randomItem(state.cities);
  city.rivalInfluence=clamp(city.rivalInfluence+10);
  city.playerInfluence=clamp(city.playerInfluence-3);
  const targets=citizensIn(city.id).filter(c=>c.worship!==getGod().name).slice(0,2);
  targets.forEach(c=>{c.worship=city.rival;c.devotion=clamp(c.devotion+8);});
  addLog(`${city.rival} Challenges You`,`Rival priests gain influence in ${city.name}.`);
  showToast(`${city.rival} is gaining power in ${city.name}.`);
}

function worldEvent(){
  const city=randomItem(state.cities);
  const events=[
    {title:`Drought in ${city.name}`,text:"Crops fail and unrest rises.",apply:()=>{city.unrest=clamp(city.unrest+12);citizensIn(city.id).forEach(c=>c.happiness=clamp(c.happiness-8));}},
    {title:`Festival in ${city.name}`,text:"Music and offerings strengthen devotion.",apply:()=>{city.playerInfluence=clamp(city.playerInfluence+7);state.faith+=18;}},
    {title:`Political Upheaval`,text:`The ruler of ${city.name} loses public trust.`,apply:()=>{city.leader.support=clamp(city.leader.support-15);city.unrest=clamp(city.unrest+8);}},
    {title:`Prosperous Trade`,text:`Merchants in ${city.name} send rich offerings.`,apply:()=>{state.gold+=30;city.wealth=clamp(city.wealth+8);}}
  ];
  const event=randomItem(events);
  event.apply();
  addLog(event.title,event.text);
  showToast(event.title);
}

function generatePrayer(){
  const template=randomItem(prayerTemplates);
  const citizen=randomItem(state.citizens);
  state.prayers.push({
    ...template,
    id:uid("prayer"),
    citizenId:citizen.id,
    citizenName:citizen.name,
    cityId:citizen.cityId
  });
}

function spend(resource,amount){
  if(state[resource]<amount){showToast(`Not enough ${resource}.`);return false;}
  state[resource]-=amount;return true;
}

function addLog(title,text){
  state.log.unshift({title,text,turn:state.turn});
  state.log=state.log.slice(0,40);
}

function renderLog(){
  $("#event-log").innerHTML=state.log.map(e=>`
    <article class="log-card">
      <div class="card-row"><h3>${e.title}</h3><span class="pill">Turn ${e.turn}</span></div>
      <p>${e.text}</p>
    </article>`).join("");
}

function showModal(content){$("#modal-content").innerHTML=content;$("#modal").classList.remove("hidden");}
function closeModal(){$("#modal").classList.add("hidden");}
function showToast(message){
  const t=$("#toast");t.textContent=message;t.classList.remove("hidden");
  clearTimeout(toastTimer);toastTimer=setTimeout(()=>t.classList.add("hidden"),2300);
}
function switchView(id){
  $$(".view").forEach(v=>v.classList.toggle("active",v.id===id));
  $$(".nav-button").forEach(b=>b.classList.toggle("active",b.dataset.view===id));
  if(id==="citizens-view")renderCitizens();
}

$("#begin-button").addEventListener("click",()=>selectedGodId&&startGame(false));
$("#continue-button").addEventListener("click",()=>startGame(true));
$("#save-button").addEventListener("click",()=>saveGame(true));
$("#modal-close").addEventListener("click",closeModal);
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal();});
$("#citizen-city-filter").addEventListener("change",renderCitizens);
$$(".nav-button").forEach(b=>b.addEventListener("click",()=>switchView(b.dataset.view)));

$("#reset-button").addEventListener("click",()=>{
  if(!confirm("Delete your saved game and return to deity selection?"))return;
  localStorage.removeItem(SAVE_KEY);
  OLD_SAVE_KEYS.forEach(k=>localStorage.removeItem(k));
  state=null;selectedGodId=null;
  $("#game-screen").classList.remove("active");
  $("#start-screen").classList.add("active");
  $("#continue-button").classList.add("hidden");
  $("#begin-button").disabled=true;
  $("#begin-button").textContent="Select a God";
  renderGodSelection();
});

renderGodSelection();
