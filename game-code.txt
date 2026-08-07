const SAVE_KEY="ageOfOlympusSaveV140S7";
const PREVIOUS_SAVE_KEY_STAGE7="ageOfOlympusSaveV140S6";
const PREVIOUS_SAVE_KEY_STAGE6="ageOfOlympusSaveV140S5";

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



const districtTemplates=[
{id:"agora",name:"Agora",icon:"🏛️",text:"Trade goods, collect rumors, and meet merchants."},
{id:"palace",name:"Royal Palace",icon:"👑",text:"Negotiate with rulers and settle city disputes."},
{id:"barracks",name:"Barracks",icon:"⚔️",text:"Train heroes and recruit soldiers."},
{id:"temples",name:"Temple District",icon:"🙏",text:"Hold festivals, pray, and recruit priests."},
{id:"tavern",name:"Tavern",icon:"🍺",text:"Hear rumors, hire mercenaries, and accept side quests."},
{id:"homes",name:"Residential District",icon:"🏠",text:"Meet named citizens and learn their stories."},
{id:"harbor",name:"Harbor",icon:"⛵",text:"Trade, launch expeditions, and train navigators."},
{id:"forge",name:"Blacksmith",icon:"⚒️",text:"Craft and improve hero equipment."},
{id:"academy",name:"Academy",icon:"📚",text:"Study wisdom, diplomacy, and strategy."},
{id:"farms",name:"Farms",icon:"🌾",text:"Improve food, irrigation, and harvests."},
{id:"theater",name:"Theater",icon:"🎭",text:"Hold performances that improve happiness and culture."},
{id:"stadium",name:"Stadium",icon:"🏟️",text:"Host games, contests, and public celebrations."}
];

const mentorTemplates=[
{id:"chiron",name:"Chiron",icon:"🏹",specialty:"Combat & Leadership",location:"Thebes",skill:"battle-cry",xpType:"combat"},
{id:"athena",name:"Athena",icon:"🦉",specialty:"Wisdom & Strategy",location:"Athens",skill:"tactical-genius",xpType:"wisdom"},
{id:"hermes",name:"Hermes",icon:"🪽",specialty:"Travel & Exploration",location:"Corinth",skill:"swift-passage",xpType:"exploration"},
{id:"apollo",name:"Apollo",icon:"☀️",specialty:"Archery & Prophecy",location:"Delphi",skill:"oracle-shot",xpType:"wisdom"},
{id:"hephaestus",name:"Hephaestus",icon:"🔥",specialty:"Crafting",location:"Rhodes",skill:"master-crafter",xpType:"crafting"},
{id:"artemis",name:"Artemis",icon:"🏹",specialty:"Hunting",location:"Crete",skill:"monster-tracker",xpType:"exploration"},
{id:"ares",name:"Ares",icon:"🗡️",specialty:"Warfare",location:"Sparta",skill:"divine-fury",xpType:"combat"},
{id:"prometheus",name:"Prometheus",icon:"🔥",specialty:"Technology",location:"Athens",skill:"forbidden-knowledge",xpType:"crafting"},
{id:"themis",name:"Themis",icon:"⚖️",specialty:"Law & Diplomacy",location:"Delphi",skill:"divine-statesman",xpType:"diplomacy"}
];

const skillTemplates=[
{id:"power-strike",tree:"Warrior",name:"Power Strike",icon:"⚔️",cost:1,text:"Active battle attack with heavy damage."},
{id:"shield-wall",tree:"Warrior",name:"Shield Wall",icon:"🛡️",cost:1,text:"Reduce incoming damage for one round."},
{id:"battle-cry",tree:"Commander",name:"Battle Cry",icon:"📣",cost:1,text:"Boost courage and army morale."},
{id:"tactical-genius",tree:"Commander",name:"Tactical Genius",icon:"🦉",cost:1,text:"Increase quest and war success."},
{id:"swift-passage",tree:"Explorer",name:"Swift Passage",icon:"🪽",cost:1,text:"Hero travel costs no Favor."},
{id:"monster-tracker",tree:"Explorer",name:"Monster Tracker",icon:"🐾",cost:1,text:"Bonus damage against roaming monsters."},
{id:"healing-prayer",tree:"Priest",name:"Healing Prayer",icon:"✨",cost:1,text:"Restore health during battle."},
{id:"oracle-shot",tree:"Priest",name:"Oracle Shot",icon:"☀️",cost:1,text:"Prophetic strike with high accuracy."},
{id:"persuasion",tree:"Diplomat",name:"Persuasion",icon:"🗣️",cost:1,text:"Improve kingdom and Titan negotiations."},
{id:"divine-statesman",tree:"Diplomat",name:"Divine Statesman",icon:"🏛️",cost:1,text:"Gain Council influence and Prestige."},
{id:"master-crafter",tree:"Crafting",name:"Master Crafter",icon:"⚒️",cost:1,text:"Craft stronger equipment at lower cost."},
{id:"forbidden-knowledge",tree:"Crafting",name:"Forbidden Knowledge",icon:"🔥",cost:1,text:"Unlock rare city and artifact options."},
{id:"divine-fury",tree:"Titan Hunter",name:"Divine Fury",icon:"🌩️",cost:2,text:"Massive damage against Titans and bosses."}
];

const heroClasses=["Champion","Guardian","Ranger","Oracle","Scholar","Commander","Rogue","Navigator","Diplomat","Monster Hunter","Titan Hunter"];

const projectTemplates=[
{id:"parthenon",name:"The Parthenon",icon:"🏛️",years:4,costGold:160,costStone:35,text:"+Faith, Prestige, and Athena influence."},
{id:"grand-harbor",name:"Grand Harbor",icon:"🌊",years:3,costGold:130,costWood:30,text:"+Trade income and naval strength."},
{id:"city-walls",name:"City Walls",icon:"🧱",years:3,costGold:110,costStone:30,text:"Protects against wars and monster attacks."},
{id:"olympic-stadium",name:"Olympic Stadium",icon:"🏟️",years:3,costGold:120,costStone:18,text:"Improves Olympic rewards and city happiness."},
{id:"great-library",name:"Great Library",icon:"📚",years:4,costGold:150,costWood:20,text:"Improves hero training and quest success."},
{id:"royal-forge",name:"Royal Forge",icon:"⚒️",years:3,costGold:125,costBronze:20,text:"Unlocks advanced crafting."},
{id:"irrigation",name:"Irrigation Network",icon:"🌾",years:2,costGold:80,costWood:12,text:"+Food and population growth."},
{id:"colossal-statue",name:"Colossal Statue",icon:"🗿",years:5,costGold:200,costStone:40,text:"+Prestige and kingdom loyalty."}
];

const cityEventTemplates=[
{title:"A Philosopher Founds a School",icon:"📚",good:"Fund the School",bad:"Refuse Support",effect:"wisdom"},
{title:"A Titan Cult Is Uncovered",icon:"⛓️",good:"Investigate Quietly",bad:"Purge the Cult",effect:"titan"},
{title:"A Merchant Finds Treasure",icon:"🪙",good:"Share the Wealth",bad:"Claim It for Olympus",effect:"gold"},
{title:"A Noble Wedding Is Proposed",icon:"💍",good:"Bless the Union",bad:"Forbid the Match",effect:"loyalty"},
{title:"A Plague Reaches the Gates",icon:"☠️",good:"Open Healing Temples",bad:"Seal the District",effect:"plague"},
{title:"A Famous Hero Returns Home",icon:"🛡️",good:"Hold a Parade",bad:"Send Them Back to Duty",effect:"hero"}
];

const citizenFirstNames=["Alexios","Damon","Kleon","Nikos","Theron","Lyra","Thalia","Phoebe","Cassia","Ianthe","Myrine","Xenia","Selene","Dorian"];
const citizenJobs=["Farmer","Merchant","Soldier","Priest","Oracle","Craftsperson","Philosopher","Noble","Sailor","Teacher","Healer","Actor"];



const mortalTemplates=[
{name:"Queen Elara",icon:"👑",city:"Macedonia",role:"Queen",personality:"Ambitious",strength:52,wisdom:68,courage:61,charisma:84,beauty:82,leadership:79,divineAffinity:58},
{name:"Callianeira",icon:"🔮",city:"Delphi",role:"Oracle",personality:"Prophetic",strength:35,wisdom:92,courage:58,charisma:70,beauty:74,leadership:60,divineAffinity:90},
{name:"Theron",icon:"⚔️",city:"Sparta",role:"Warrior",personality:"Fearless",strength:91,wisdom:42,courage:94,charisma:55,beauty:66,leadership:72,divineAffinity:50},
{name:"Nerissa",icon:"🌊",city:"Rhodes",role:"Navigator",personality:"Adventurous",strength:58,wisdom:78,courage:81,charisma:73,beauty:80,leadership:76,divineAffinity:65},
{name:"Damon",icon:"📚",city:"Athens",role:"Scholar",personality:"Curious",strength:38,wisdom:94,courage:55,charisma:68,beauty:61,leadership:67,divineAffinity:72},
{name:"Ariadne",icon:"🧵",city:"Crete",role:"Noble",personality:"Clever",strength:46,wisdom:88,courage:70,charisma:86,beauty:88,leadership:82,divineAffinity:75},
{name:"Myrine",icon:"🏹",city:"Argos",role:"Hunter",personality:"Independent",strength:74,wisdom:70,courage:89,charisma:62,beauty:77,leadership:58,divineAffinity:63},
{name:"Leander",icon:"⛵",city:"Corinth",role:"Merchant Prince",personality:"Charming",strength:48,wisdom:76,courage:64,charisma:93,beauty:83,leadership:85,divineAffinity:54}
];

const educationPaths=[
{id:"spartan-school",name:"Spartan Warrior School",icon:"⚔️",city:"Sparta",focus:"strength",text:"Combat, discipline, and courage."},
{id:"athena-academy",name:"Athena's Academy",icon:"🦉",city:"Athens",focus:"wisdom",text:"Strategy, philosophy, and leadership."},
{id:"apollo-temple",name:"Temple of Apollo",icon:"☀️",city:"Delphi",focus:"divineAffinity",text:"Prophecy, archery, and sacred music."},
{id:"artemis-lodge",name:"Artemis' Hunt Lodge",icon:"🏹",city:"Crete",focus:"courage",text:"Hunting, survival, and independence."},
{id:"hephaestus-forge",name:"Hephaestus' Forge",icon:"🔥",city:"Rhodes",focus:"strength",text:"Crafting, invention, and divine weapons."},
{id:"hermes-school",name:"Hermes' Messenger School",icon:"🪽",city:"Corinth",focus:"charisma",text:"Speed, diplomacy, and exploration."}
];

const demigodDeeds=[
{id:"save-city",name:"Save a City",icon:"🏛️",requiredAge:16,fame:18,glory:15,risk:.15,text:"Protect a threatened city from disaster."},
{id:"slay-monster",name:"Slay a Monster",icon:"🐉",requiredAge:18,fame:30,glory:28,risk:.35,text:"Challenge an active mythological monster."},
{id:"seal-titan",name:"Seal a Titan",icon:"⛓️",requiredAge:20,fame:45,glory:40,risk:.5,text:"Attempt to reinforce or reseal a Titan."},
{id:"underworld",name:"Explore the Underworld",icon:"💀",requiredAge:18,fame:35,glory:30,risk:.42,text:"Return from Hades with forbidden knowledge."},
{id:"golden-fleece",name:"Seek the Golden Fleece",icon:"🐏",requiredAge:17,fame:32,glory:27,risk:.32,text:"Lead a legendary expedition."},
{id:"rule-kingdom",name:"Claim a Kingdom",icon:"👑",requiredAge:21,fame:25,glory:20,risk:.28,text:"Seek a mortal throne through diplomacy or conquest."}
];

const demigodNames=["Alcaeus","Evadne","Castor","Melia","Icarion","Dione","Phaedra","Orion","Calista","Leontes","Astraea","Nikandros","Helene","Theron","Cassandra","Aeson"];

const divineDomains=["Valor","Wisdom","Voyages","Healing","Justice","Craft","Hunt","Prophecy","Victory","Storms","Harvest","Memory"];



const olympusLocations=[
{id:"zeus-throne",name:"Zeus' Throne Room",icon:"⚡",owner:"Zeus",text:"Debate divine law, kingship, and punishments.",action:"judgment"},
{id:"athena-library",name:"Athena's Library",icon:"🦉",owner:"Athena",text:"Study strategy, prophecy, and forgotten myths.",action:"wisdom"},
{id:"hephaestus-forge",name:"Hephaestus' Divine Forge",icon:"🔥",owner:"Hephaestus",text:"Craft divine relics and improve artifacts.",action:"forge"},
{id:"aphrodite-garden",name:"Aphrodite's Garden",icon:"🌹",owner:"Aphrodite",text:"Shape relationships, marriages, and reconciliation.",action:"love"},
{id:"hermes-hall",name:"Hermes' Messenger Hall",icon:"🪽",owner:"Hermes",text:"Redirect heroes, caravans, and urgent messages.",action:"travel"},
{id:"dionysus-banquet",name:"Dionysus' Banquet Hall",icon:"🍇",owner:"Dionysus",text:"Hold divine celebrations and restore morale.",action:"festival"},
{id:"hades-gate",name:"Hades' Gate",icon:"💀",owner:"Hades",text:"Speak with the dead or recover a lost soul.",action:"underworld"},
{id:"artemis-sanctuary",name:"Artemis' Sanctuary",icon:"🏹",owner:"Artemis",text:"Bless hunts, track monsters, and protect wilderness.",action:"hunt"}
];

const miracleTemplates=[
{id:"lightning-storm",name:"Lightning Storm",icon:"⚡",cost:32,cooldown:2,text:"Damage a monster and weaken rival influence.",effect:"storm"},
{id:"royal-blessing",name:"Royal Blessing",icon:"👑",cost:25,cooldown:2,text:"Strengthen a kingdom ruler, loyalty, and economy.",effect:"royal"},
{id:"calm-seas",name:"Calm the Seas",icon:"🌊",cost:22,cooldown:2,text:"Protect coastal trade and finish one enterprise safely.",effect:"seas"},
{id:"inspire-wisdom",name:"Inspire Wisdom",icon:"🦉",cost:24,cooldown:2,text:"Boost a hero's Wisdom and the next quest.",effect:"wisdom"},
{id:"battle-frenzy",name:"Battle Frenzy",icon:"🗡️",cost:28,cooldown:2,text:"Empower heroes and one allied army.",effect:"war"},
{id:"bless-harvest",name:"Bless the Harvest",icon:"🌾",cost:20,cooldown:2,text:"Generate Food and calm a struggling city.",effect:"harvest"},
{id:"divine-healing",name:"Divine Healing",icon:"✨",cost:26,cooldown:3,text:"Restore all recruited heroes.",effect:"heal"},
{id:"fate-vision",name:"Vision of Fate",icon:"🧵",cost:30,cooldown:3,text:"Reveal destinies and improve Fate balance.",effect:"fate"}
];

const ageTemplates=[
{id:"titans",name:"Age of Titans",icon:"⛓️",startYear:1,endYear:9,text:"Tartarus, primordial powers, and unstable divine rule."},
{id:"olympus",name:"Age of Olympus",icon:"⚡",startYear:10,endYear:24,text:"The Olympians establish temples, law, and sacred cities."},
{id:"heroes",name:"Age of Heroes",icon:"🛡️",startYear:25,endYear:44,text:"Heroes, demigods, quests, and monsters define history."},
{id:"kingdoms",name:"Age of Kingdoms",icon:"👑",startYear:45,endYear:69,text:"Diplomacy, trade, bloodlines, and wars reshape Greece."},
{id:"empires",name:"Age of Empires",icon:"🌍",startYear:70,endYear:99,text:"Kingdoms seek domination across the known world."},
{id:"legends",name:"Age of Legends",icon:"📖",startYear:100,endYear:139,text:"Old deeds become religions and bloodlines become myths."},
{id:"prophecy",name:"Age of Prophecy",icon:"🔮",startYear:140,endYear:9999,text:"The Fates reveal the final destiny of gods and mortals."}
];

const fateOptions=[
{id:"greatness",name:"Weave Greatness",icon:"🌟",cost:18,balance:-4,text:"Increase fame, reputation, and heroic potential."},
{id:"delay-death",name:"Delay Death",icon:"⏳",cost:28,balance:-10,text:"Protect a mortal or demigod from death for several years."},
{id:"reveal",name:"Reveal Prophecy",icon:"🔮",cost:14,balance:-2,text:"Reveal a hidden destiny and gain a strategic bonus."},
{id:"protect-line",name:"Protect Bloodline",icon:"🧬",cost:24,balance:-6,text:"Protect a divine family branch from extinction."},
{id:"cut-thread",name:"Cut a Tyrant's Thread",icon:"✂️",cost:35,balance:-15,text:"Remove a dangerous ruler at severe cost to Fate."},
{id:"restore",name:"Restore Natural Order",icon:"⚖️",cost:20,balance:12,text:"Heal Fate balance and reduce dangerous consequences."}
];

const customGodDomains=["Dreams","Rivers","Fortune","Music","Justice","Exploration","Memory","Healing","Night","Victory","Craft","Stars"];
const sacredAnimals=["Owl","Wolf","Lion","Dolphin","Serpent","Stag","Horse","Raven","Swan","Bull"];
const sacredWeapons=["Spear","Bow","Sword","Staff","Trident","Hammer","Shield","Torch","Sickle"];



const civilizationTemplates=[
{id:"egypt",name:"Egypt",icon:"𓂀",capital:"Memphis",ruler:"Pharaoh Neferhotep",government:"Divine Monarchy",army:78,navy:58,economy:90,culture:95,relation:45,known:true,discoveredYear:1,trait:"Nile abundance and monumental architecture"},
{id:"phoenicia",name:"Phoenicia",icon:"⚓",capital:"Tyre",ruler:"King Eshmunazar",government:"Merchant Kingdom",army:48,navy:94,economy:92,culture:74,relation:55,known:true,discoveredYear:1,trait:"Master sailors and wealthy sea trade"},
{id:"persia",name:"Persia",icon:"🦁",capital:"Susa",ruler:"Great King Artabanus",government:"Empire",army:96,navy:62,economy:85,culture:82,relation:35,known:true,discoveredYear:1,trait:"Vast armies and imperial roads"},
{id:"magna-graecia",name:"Magna Graecia",icon:"🏺",capital:"Syracuse",ruler:"Archon Timoleon",government:"Colonial League",army:65,navy:78,economy:76,culture:84,relation:62,known:true,discoveredYear:1,trait:"Greek colonies across southern Italy"},
{id:"carthage",name:"Carthage",icon:"🐘",capital:"Carthage",ruler:"Suffete Hanno",government:"Merchant Republic",army:74,navy:91,economy:94,culture:72,relation:42,known:false,discoveredYear:null,trait:"Powerful fleets, merchants, and war elephants"},
{id:"atlantic-isles",name:"Atlantic Isles",icon:"🌫️",capital:"Unknown",ruler:"Unknown",government:"Hidden",army:0,navy:0,economy:0,culture:0,relation:0,known:false,discoveredYear:null,trait:"Mist-shrouded lands beyond familiar seas"}
];

const fleetTemplates=[
{id:"merchant",name:"Merchant Fleet",icon:"⛵",costGold:70,costWood:18,crew:35,attack:18,defense:28,cargo:80,speed:70,text:"Carries trade goods and earns Gold."},
{id:"war-galley",name:"War Galley",icon:"🚢",costGold:95,costWood:24,costBronze:8,crew:65,attack:62,defense:48,cargo:20,speed:58,text:"Protects routes and fights pirates."},
{id:"trireme",name:"Trireme",icon:"🛶",costGold:125,costWood:30,costBronze:14,crew:90,attack:82,defense:64,cargo:15,speed:72,text:"Elite naval warship."},
{id:"explorer",name:"Exploration Vessel",icon:"🧭",costGold:85,costWood:22,crew:45,attack:28,defense:34,cargo:45,speed:82,text:"Discovers islands, ruins, and lost civilizations."},
{id:"divine-flagship",name:"Divine Flagship",icon:"🌟",costGold:180,costWood:35,costBronze:20,crew:120,attack:96,defense:88,cargo:60,speed:76,text:"A sacred vessel blessed by Olympus."}
];

const discoveryTemplates=[
{id:"delos",name:"Sacred Isle of Delos",icon:"☀️",type:"Island",risk:.12,rewardGold:45,text:"A holy island rich with Apollo's legends."},
{id:"lemnos",name:"Forge Ruins of Lemnos",icon:"🔥",type:"Ruin",risk:.2,rewardGold:65,text:"Ancient workshops may contain divine technology."},
{id:"samothrace",name:"Mysteries of Samothrace",icon:"🎭",type:"Sanctuary",risk:.18,rewardGold:50,text:"Secret rites promise protection at sea."},
{id:"scylla-strait",name:"Strait of Scylla",icon:"🐉",type:"Sea Monster",risk:.42,rewardGold:110,text:"A deadly passage guarded by a legendary creature."},
{id:"lost-library",name:"Lost Library of Byblos",icon:"📜",type:"Ruin",risk:.22,rewardGold:75,text:"Forgotten records describe gods older than Olympus."},
{id:"atlantis",name:"Atlantis",icon:"🔷",type:"Civilization",risk:.5,rewardGold:180,text:"A technologically advanced island empire hidden beneath divine storms."}
];

const wonderTemplates=[
{id:"alexandria-lighthouse",name:"Lighthouse of Alexandria",icon:"🗼",region:"Egypt",years:5,costGold:230,costStone:42,costWood:25,text:"+Naval discovery and merchant safety."},
{id:"colossus-rhodes",name:"Colossus of Rhodes",icon:"🗿",region:"Rhodes",years:5,costGold:220,costBronze:30,costStone:32,text:"+Prestige, naval strength, and city loyalty."},
{id:"artemis-temple",name:"Temple of Artemis",icon:"🏛️",region:"Magna Graecia",years:4,costGold:190,costStone:35,costWood:20,text:"+Faith, monster hunting, and cultural influence."},
{id:"halicarnassus-mausoleum",name:"Mausoleum at Halicarnassus",icon:"⚱️",region:"Persia",years:4,costGold:200,costStone:40,text:"+Legacy, ruler memory, and diplomacy."},
{id:"zeus-statue",name:"Statue of Zeus at Olympia",icon:"⚡",region:"Greece",years:5,costGold:240,costGold2:0,costStone:38,costBronze:22,text:"+Faith, Prestige, and Council influence."},
{id:"knossos-palace",name:"Palace of Knossos",icon:"🐂",region:"Crete",years:4,costGold:175,costStone:28,costWood:20,text:"+Culture, trade, and labyrinth discoveries."}
];

const olympicEvents=[
{id:"sprint",name:"Stadion Sprint",icon:"🏃",stat:"energy",text:"Speed and endurance decide the race."},
{id:"wrestling",name:"Wrestling",icon:"🤼",stat:"strength",text:"Strength and technique decide the match."},
{id:"boxing",name:"Boxing",icon:"🥊",stat:"courage",text:"Courage and resilience win the contest."},
{id:"discus",name:"Discus",icon:"🥏",stat:"strength",text:"Power and precision determine distance."},
{id:"javelin",name:"Javelin",icon:"🏹",stat:"wisdom",text:"Accuracy and timing matter most."},
{id:"chariot",name:"Chariot Racing",icon:"🏇",stat:"leadership",text:"Control, daring, and divine favor rule the track."},
{id:"archery",name:"Archery",icon:"🎯",stat:"wisdom",text:"Calm aim and prophetic instinct decide victory."},
{id:"pentathlon",name:"Pentathlon",icon:"🏆",stat:"all",text:"The greatest all-around champion earns immortal fame."}
];


const divineTitleTemplates=[
{id:"tartarus-guardian",name:"Guardian of Tartarus",icon:"⛓️",benefit:"Improves Tartarus stability and Titan control.",preferred:["Hades","Athena","Zeus"]},
{id:"high-oracle",name:"High Oracle",icon:"🔮",benefit:"Strengthens prophecy and Fate.",preferred:["Apollo","Themis","Athena"]},
{id:"storm-master",name:"Master of Storms",icon:"🌩️",benefit:"Improves miracles and fleets.",preferred:["Zeus","Poseidon"]},
{id:"divine-treasurer",name:"Divine Treasurer",icon:"🪙",benefit:"Adds Gold and supports construction.",preferred:["Hermes","Hephaestus","Hades"]},
{id:"hero-protector",name:"Protector of Heroes",icon:"🛡️",benefit:"Improves heroes and recovery.",preferred:["Athena","Artemis","Ares"]},
{id:"civilization-patron",name:"Patron of Civilization",icon:"🏛️",benefit:"Improves cities and diplomacy.",preferred:["Athena","Demeter","Hestia"]},
{id:"mortal-ambassador",name:"Ambassador to Mortals",icon:"🪽",benefit:"Improves foreign relations.",preferred:["Hermes","Aphrodite","Apollo"]}
];
const divineAgendaTemplates=[
{id:"expand-worship",name:"Expand Worship"},{id:"gain-title",name:"Seek Divine Office"},{id:"mentor-hero",name:"Mentor a Champion"},
{id:"oppose-rival",name:"Undermine a Rival"},{id:"protect-domain",name:"Protect Sacred Domain"},{id:"influence-council",name:"Shape Council Vote"}
];
const titanCouncilAgendaTemplates=[
{id:"weaken-seal",name:"Weaken a Tartarus Seal",icon:"⛓️",risk:8,text:"Secret followers attack a regional seal."},
{id:"recruit-monster",name:"Recruit a Monster Army",icon:"🐉",risk:10,text:"A Titan binds a monster to the rebellion."},
{id:"corrupt-demigod",name:"Corrupt a Demigod",icon:"🧬",risk:12,text:"A descendant receives forbidden dreams."},
{id:"fortress",name:"Build Hidden Stronghold",icon:"🏰",risk:9,text:"Titan worshippers establish a fortress."},
{id:"kingdom-alliance",name:"Win a Mortal Kingdom",icon:"👑",risk:11,text:"A Titan tempts an ambitious ruler."},
{id:"peace-offer",name:"Offer Conditional Peace",icon:"🕊️",risk:-4,text:"A Titan faction considers peace."},
{id:"challenge-god",name:"Issue a Divine Challenge",icon:"⚔️",risk:14,text:"A Titan prepares a duel."}
];
const divineConversationTopics=[
{id:"advice",name:"Ask for Advice",icon:"💬"},{id:"promise",name:"Make a Promise",icon:"📜"},{id:"gift",name:"Offer Divine Gift",icon:"🎁"},
{id:"blessing",name:"Request Blessing",icon:"✨"},{id:"argue",name:"Challenge Their View",icon:"⚖️"},{id:"alliance",name:"Form Divine Alliance",icon:"🤝"},
{id:"quest",name:"Request Personal Quest",icon:"🌟"},{id:"secret",name:"Exchange a Secret",icon:"🗝️"}
];
const reputationTraits=[
{id:"wise",name:"Wise",icon:"🦉",positive:true},{id:"merciful",name:"Merciful",icon:"🕊️",positive:true},{id:"honorable",name:"Honorable",icon:"⚖️",positive:true},{id:"heroic",name:"Heroic",icon:"🛡️",positive:true},
{id:"ambitious",name:"Ambitious",icon:"👑",positive:false},{id:"ruthless",name:"Ruthless",icon:"🗡️",positive:false},{id:"deceitful",name:"Deceitful",icon:"🐍",positive:false},{id:"tyrannical",name:"Tyrannical",icon:"🔥",positive:false}
];
const familyDramaTemplates=[
{title:"Hera Questions a Divine Child",icon:"🦚",text:"Hera demands recognition be debated.",good:"Recognize the Child",bad:"Deny the Claim"},
{title:"Ares Challenges a Famous Hero",icon:"🗡️",text:"Ares is jealous of a mortal champion.",good:"Allow the Duel",bad:"Protect the Hero"},
{title:"Apollo and Artemis Disagree",icon:"☀️",text:"The twins clash over prophecy and the hunt.",good:"Mediate Peace",bad:"Choose a Side"},
{title:"Hades Demands a Returned Soul",icon:"💀",text:"A restored mortal disrupts the Underworld.",good:"Return the Soul",bad:"Defy Hades"},
{title:"Hermes Delivers a Secret Letter",icon:"🪽",text:"A message reveals betrayal in Olympus.",good:"Investigate",bad:"Destroy the Letter"},
{title:"Rhea Seeks Family Reconciliation",icon:"🦁",text:"Rhea proposes a fragile family gathering.",good:"Support the Gathering",bad:"Reject the Proposal"}
];



const avatarForms=[
{id:"divine",name:"Divine Form",icon:"⚡",energyCost:0,text:"Maximum power and authority, but mortals react with awe or fear.",unlock:()=>true},
{id:"mortal",name:"Mortal Disguise",icon:"👤",energyCost:4,text:"Blend into cities, hear honest opinions, and investigate secrets.",unlock:()=>true},
{id:"spirit",name:"Spirit Form",icon:"✨",energyCost:6,text:"Travel unseen, inspect temples, and reveal hidden influences.",unlock:()=>true},
{id:"titan",name:"Titan Form",icon:"🔥",energyCost:12,text:"A dangerous primordial form unlocked through Titan power.",unlock:()=>state.titans.some(t=>t.status==="Allied")||state.titanWar>=60}
];

const avatarActions=[
{id:"visit-city",name:"Visit a City",icon:"🏛️",cost:6,text:"Enter a city physically and choose a direct intervention."},
{id:"speak-citizen",name:"Speak With a Citizen",icon:"💬",cost:4,text:"Meet an individual mortal and influence their life."},
{id:"train-hero",name:"Train a Hero Personally",icon:"⚔️",cost:10,text:"Grant hands-on training, XP, reputation, and a possible skill."},
{id:"bless-village",name:"Bless a Village",icon:"🌾",cost:8,text:"Increase food, happiness, loyalty, and devotion."},
{id:"judge-criminal",name:"Judge a Criminal",icon:"⚖️",cost:7,text:"Choose mercy, punishment, or divine trial."},
{id:"visit-temple",name:"Visit a Temple",icon:"🙏",cost:5,text:"Inspect worship, rival influence, priests, and omens."},
{id:"attend-festival",name:"Attend a Festival",icon:"🎉",cost:7,text:"Raise culture, faith, happiness, and personal reputation."},
{id:"explore-ruin",name:"Explore a Ruin",icon:"🏺",cost:12,text:"Search for relics, prophecies, monsters, or hidden cults."}
];



const livingOlympusLocations=[
{id:"zeus-throne-v2",name:"Zeus' Throne Room",icon:"⚡",owner:"Zeus",type:"politics",text:"Settle divine disputes, issue decrees, and summon emergency Councils."},
{id:"hera-palace",name:"Hera's Palace",icon:"🦚",owner:"Hera",type:"family",text:"Manage divine family disputes, marriages, heirs, and legitimacy."},
{id:"athena-library-v2",name:"Athena's Great Library",icon:"🦉",owner:"Athena",type:"research",text:"Research miracles, monsters, Titans, technologies, and prophecies."},
{id:"ares-arena",name:"Ares' Arena",icon:"⚔️",owner:"Ares",type:"arena",text:"Organize duels, tournaments, and divine combat trials."},
{id:"apollo-temple-v2",name:"Apollo's Sun Temple",icon:"☀️",owner:"Apollo",type:"prophecy",text:"Seek prophecy, cure plagues, and inspire music or poetry."},
{id:"artemis-grove-v2",name:"Artemis' Sacred Grove",icon:"🌙",owner:"Artemis",type:"hunt",text:"Bless hunters, track monsters, and protect sacred wilderness."},
{id:"hephaestus-forge-v2",name:"Hephaestus' Divine Forge",icon:"🔥",owner:"Hephaestus",type:"forge",text:"Craft and improve divine weapons, armor, and relics."},
{id:"hermes-market",name:"Hermes' Marketplace",icon:"🪽",owner:"Hermes",type:"market",text:"Trade rare relics, exotic resources, scrolls, and divine curiosities."},
{id:"dionysus-gardens",name:"Dionysus' Gardens",icon:"🍇",owner:"Dionysus",type:"festival",text:"Host celebrations that improve morale, culture, and divine relationships."},
{id:"hestia-hearth",name:"Hestia's Hearth",icon:"🔥",owner:"Hestia",type:"hearth",text:"Heal heroes, restore family bonds, and calm unrest."},
{id:"poseidon-gate",name:"Poseidon's Sea Gate",icon:"🌊",owner:"Poseidon",type:"sea",text:"Command fleets, launch expeditions, and confront sea monsters."},
{id:"hades-embassy",name:"Hades' Embassy",icon:"💀",owner:"Hades",type:"underworld",text:"Negotiate soul matters and prepare for travel into the Underworld."}
];

const divineItemTemplates=[
{id:"crown-olympus",name:"Crown of Olympus",icon:"👑",slot:"Crown",rarity:"Legendary",cost:120,effect:"Prestige +20 and Council trust",bonus:{prestige:20}},
{id:"aegis-divine",name:"Divine Aegis",icon:"🛡️",slot:"Armor",rarity:"Legendary",cost:130,effect:"Hero defense and Avatar authority",bonus:{heroDefense:12}},
{id:"ring-prophecy",name:"Ring of Prophecy",icon:"💍",slot:"Ring",rarity:"Rare",cost:85,effect:"Fate and quest bonuses",bonus:{fate:8}},
{id:"hermes-scroll",name:"Scroll of Hermes",icon:"📜",slot:"Scroll",rarity:"Rare",cost:70,effect:"Safer trade and fleet speed",bonus:{trade:10}},
{id:"titan-chain",name:"Titan-Binding Chain",icon:"⛓️",slot:"Relic",rarity:"Legendary",cost:150,effect:"Improves Tartarus seals",bonus:{tartarus:12}},
{id:"sun-amulet",name:"Amulet of Helios",icon:"☀️",slot:"Amulet",rarity:"Rare",cost:95,effect:"Faith and healing",bonus:{faith:18}},
{id:"ambrosia-vial",name:"Vial of Ambrosia",icon:"🍯",slot:"Consumable",rarity:"Divine",cost:60,effect:"Fully restores heroes and Avatar Energy",bonus:{restore:true}},
{id:"storm-spear",name:"Storm Spear",icon:"🌩️",slot:"Weapon",rarity:"Legendary",cost:145,effect:"Improves miracle and combat strength",bonus:{combat:15}},
{id:"blessing-stone",name:"Blessing Stone",icon:"💎",slot:"Relic",rarity:"Rare",cost:75,effect:"Improves city happiness and devotion",bonus:{city:8}}
];

const olympusResearchTemplates=[
{id:"miracle-mastery",name:"Miracle Mastery",icon:"✨",cost:40,text:"Reduce all miracle cooldowns by one year."},
{id:"titan-lore",name:"Titan Lore",icon:"⛓️",cost:45,text:"Reveal Titan agendas and improve negotiations."},
{id:"heroic-theory",name:"Heroic Theory",icon:"🛡️",cost:35,text:"Heroes gain bonus XP from quests and training."},
{id:"naval-astronomy",name:"Naval Astronomy",icon:"🌌",cost:35,text:"Fleets gain speed and safer exploration."},
{id:"fate-study",name:"Study of Fate",icon:"🧵",cost:50,text:"Increase Fate Balance and improve prophecy outcomes."},
{id:"divine-law",name:"Divine Law",icon:"⚖️",cost:40,text:"Improve Council votes, diplomacy, and honorable reputation."}
];

const olympusEventTemplates=[
{title:"Zeus Calls an Emergency Council",icon:"⚡",text:"A crisis requires immediate divine action.",good:"Attend the Council",bad:"Ignore the Summons"},
{title:"Hephaestus Unveils a New Relic",icon:"🔥",text:"A prototype divine weapon needs a patron.",good:"Fund the Relic",bad:"Reject the Design"},
{title:"Apollo Foresees Disaster",icon:"☀️",text:"A prophecy warns of plague, war, or Titan unrest.",good:"Prepare Greece",bad:"Question the Prophecy"},
{title:"Dionysus Hosts an Unplanned Festival",icon:"🍇",text:"Olympus is distracted by celebration.",good:"Join the Festival",bad:"Restore Order"},
{title:"A Titan Envoy Arrives",icon:"⛓️",text:"A secret Titan faction requests safe passage.",good:"Hear the Envoy",bad:"Imprison the Envoy"},
{title:"Hermes Exposes a Conspiracy",icon:"🪽",text:"A hidden plot links a god, kingdom, and cult.",good:"Investigate Quietly",bad:"Reveal It Publicly"}
];



const underworldRegions=[
{id:"styx",name:"River Styx",icon:"🌑",type:"river",text:"The boundary between life and death."},
{id:"charon",name:"Charon's Ferry",icon:"⛴️",type:"ferry",text:"New souls cross into the realm of Hades."},
{id:"asphodel",name:"Asphodel Meadows",icon:"🌾",type:"asphodel",text:"Ordinary souls wander in quiet eternity."},
{id:"elysium",name:"Elysium",icon:"🌟",type:"elysium",text:"Heroic and virtuous souls receive eternal honor."},
{id:"judgment",name:"Hall of Judgment",icon:"⚖️",type:"judgment",text:"Minos, Rhadamanthus, and Aeacus weigh mortal lives."},
{id:"punishment",name:"Fields of Punishment",icon:"😈",type:"punishment",text:"The wicked face consequences for mortal deeds."},
{id:"tartarus-underworld",name:"Tartarus",icon:"🔥",type:"tartarus",text:"The deepest prison of Titans and divine enemies."},
{id:"hades-palace",name:"Palace of Hades",icon:"👑",type:"palace",text:"Hades and Persephone govern the dead."}
];

const underworldNpcTemplates=[
{id:"hades",name:"Hades",icon:"💀",role:"King of the Underworld",trust:55},
{id:"persephone",name:"Persephone",icon:"🌸",role:"Queen of the Underworld",trust:60},
{id:"charon",name:"Charon",icon:"⛴️",role:"Ferryman of Souls",trust:45},
{id:"cerberus",name:"Cerberus",icon:"🐕",role:"Guardian of the Gates",trust:50},
{id:"minos",name:"Minos",icon:"⚖️",role:"Judge of the Dead",trust:58},
{id:"rhadamanthus",name:"Rhadamanthus",icon:"📜",role:"Judge of the Dead",trust:62},
{id:"aeacus",name:"Aeacus",icon:"🔑",role:"Keeper of Underworld Keys",trust:52},
{id:"furies",name:"The Furies",icon:"🩸",role:"Punishers of Oaths",trust:35},
{id:"thanatos",name:"Thanatos",icon:"🕯️",role:"Spirit of Death",trust:48},
{id:"hypnos",name:"Hypnos",icon:"🌙",role:"Spirit of Sleep",trust:55}
];

const soulJudgmentOptions=[
{id:"elysium",name:"Send to Elysium",icon:"🌟",text:"Reward virtue and heroic deeds."},
{id:"asphodel",name:"Send to Asphodel",icon:"🌾",text:"Grant ordinary eternal rest."},
{id:"punishment",name:"Fields of Punishment",icon:"😈",text:"Condemn a wicked soul."},
{id:"return",name:"Return to Life",icon:"✨",text:"Restore the soul to the mortal world."},
{id:"spirit",name:"Make Spirit Champion",icon:"👻",text:"Recruit the soul into afterlife service."},
{id:"official",name:"Appoint Underworld Official",icon:"⚖️",text:"Give the soul a permanent role in Hades' realm."}
];

const underworldEventTemplates=[
{title:"Cerberus Senses an Escape",icon:"🐕",text:"Something moves near the gates of Tartarus.",good:"Reinforce the Gates",bad:"Investigate Personally"},
{title:"Charon Refuses a Soul",icon:"⛴️",text:"A powerful spirit lacks proper burial rites.",good:"Pay the Passage",bad:"Question the Soul"},
{title:"Persephone Requests Mercy",icon:"🌸",text:"A condemned mortal may deserve reconsideration.",good:"Grant Mercy",bad:"Uphold Judgment"},
{title:"The Furies Demand Punishment",icon:"🩸",text:"An oath-breaker has escaped justice.",good:"Authorize Pursuit",bad:"Call Them Back"},
{title:"Elysium Calls for a Champion",icon:"🌟",text:"A legendary threat approaches the blessed fields.",good:"Send Spirit Hero",bad:"Strengthen the Barriers"},
{title:"Tartarus Whispers",icon:"🔥",text:"Titan prisoners spread corruption among lost souls.",good:"Silence the Prisoners",bad:"Listen for Secrets"}
];



const aiPersonalityTraits=[
{id:"brave",name:"Brave",icon:"🛡️"},
{id:"compassionate",name:"Compassionate",icon:"🕊️"},
{id:"ruthless",name:"Ruthless",icon:"🗡️"},
{id:"ambitious",name:"Ambitious",icon:"👑"},
{id:"honorable",name:"Honorable",icon:"⚖️"},
{id:"deceitful",name:"Deceitful",icon:"🐍"},
{id:"curious",name:"Curious",icon:"🔎"},
{id:"loyal",name:"Loyal",icon:"🤝"},
{id:"jealous",name:"Jealous",icon:"👁️"},
{id:"patient",name:"Patient",icon:"⏳"},
{id:"reckless",name:"Reckless",icon:"🔥"},
{id:"wise",name:"Wise",icon:"🦉"}
];

const aiGoalTemplates=[
{id:"gain-power",name:"Gain Greater Power",category:"power"},
{id:"protect-family",name:"Protect Their Family",category:"family"},
{id:"win-war",name:"Win a War",category:"war"},
{id:"find-artifact",name:"Discover an Artifact",category:"exploration"},
{id:"become-ruler",name:"Lead a Kingdom",category:"politics"},
{id:"gain-immortality",name:"Achieve Immortality",category:"divine"},
{id:"serve-olympus",name:"Serve Olympus",category:"loyalty"},
{id:"escape-tartarus",name:"Escape Tartarus",category:"titan"},
{id:"build-legacy",name:"Build a Legendary Legacy",category:"legacy"},
{id:"restore-temple",name:"Restore a Sacred Temple",category:"faith"},
{id:"protect-city",name:"Protect a Mortal City",category:"city"},
{id:"seek-revenge",name:"Seek Revenge",category:"rivalry"}
];

const alertPriorityDefinitions={
 critical:{name:"Mythic Crisis",icon:"🔴",className:"alert-critical"},
 urgent:{name:"Major Event",icon:"🟠",className:"alert-urgent"},
 important:{name:"Important Update",icon:"🟡",className:"alert-important"},
 information:{name:"World News",icon:"🔵",className:"alert-information"},
 success:{name:"Success",icon:"🟢",className:"alert-success"}
};

const criticalAlertTemplates=[
{id:"titan-escape",category:"titans",icon:"🔥",title:"Titan Escape Attempt",description:"A Titan is breaking the chains of Tartarus.",years:1},
{id:"city-invasion",category:"cities",icon:"⚔️",title:"City Under Invasion",description:"A mortal city faces an immediate military threat.",years:1},
{id:"monster-assault",category:"monsters",icon:"🐉",title:"Monster Attacks a City",description:"A living monster is devastating a populated city.",years:1},
{id:"hero-danger",category:"heroes",icon:"🛡️",title:"Hero Near Death",description:"A recruited hero may die without divine intervention.",years:1},
{id:"underworld-breach",category:"underworld",icon:"💀",title:"Underworld Prison Breach",description:"Tartarus security has failed and spirits are escaping.",years:1},
{id:"atlantis-crisis",category:"world",icon:"🔷",title:"Atlantis Catastrophe",description:"Atlantis is approaching destruction beneath the sea.",years:1}
];

const urgentAlertTemplates=[
{id:"council-emergency",category:"gods",icon:"🏛️",title:"Emergency Olympus Council",description:"The gods demand an immediate decision.",years:2},
{id:"demigod-corruption",category:"family",icon:"🧬",title:"Demigod Corruption",description:"A divine descendant is being pulled toward darkness.",years:2},
{id:"kingdom-war",category:"kingdoms",icon:"👑",title:"Kingdom Declares War",description:"A new war threatens to draw multiple powers into conflict.",years:2},
{id:"soul-appeal",category:"underworld",icon:"👻",title:"Soul Requests an Appeal",description:"A judged soul asks for divine reconsideration.",years:2},
{id:"prophecy-deadline",category:"fate",icon:"🔮",title:"Prophecy Nears Fulfillment",description:"A prophecy requires a response before its final year.",years:2},
{id:"fleet-disaster",category:"naval",icon:"🚢",title:"Fleet in Mortal Danger",description:"A fleet is damaged far from a safe harbor.",years:2}
];


const legendaryAdventureTemplates=[
{id:"nemean",name:"The Nemean Lion",icon:"🦁",difficulty:"Heroic",description:"Hunt an invulnerable beast terrorizing Argolis.",stages:[["The Ravaged Villages","Argos"],["Track the Golden Beast","Nemea"],["The Lion's Cave","Nemean Cave"],["A Hero's Trophy","Argos"]],reward:"Hide of the Nemean Lion"},
{id:"fleece",name:"The Golden Fleece",icon:"🐏",difficulty:"Legendary",description:"Gather the Argonauts and cross hostile seas to Colchis.",stages:[["Gather the Argonauts","Iolcus"],["The Clashing Rocks","Symplegades"],["Court of Colchis","Colchis"],["The Sleepless Dragon","Sacred Grove"],["Return of the Argonauts","Iolcus"]],reward:"Golden Fleece"},
{id:"pandora",name:"Pandora's Forgotten Relic",icon:"📦",difficulty:"Mythic",description:"Stop a cult from opening a forgotten fragment of Pandora's legacy.",stages:[["The Whispering Shrine","Thebes"],["The Broken Seal","Cithaeron"],["Hope and Ruin","Hidden Vault"]],reward:"Fragment of Pandora"},
{id:"titan-cult",name:"The Hidden Titan Cult",icon:"⛓️",difficulty:"Legendary",description:"Expose a cult weakening Tartarus prisons.",stages:[["Missing Priests","Delphi"],["Underground Temple","Parnassus"],["The Titan's Bargain","Hidden Prison"],["Olympus Decides","Mount Olympus"]],reward:"Ring of the First Seal"},
{id:"atlantis-rebirth",name:"The Rebirth of Atlantis",icon:"🔷",difficulty:"Mythic",description:"Save, conquer, or abandon the legendary island civilization.",stages:[["The Drowning City","Atlantis"],["Ancient Engines","Poseidonia"],["Council of Waves","Atlantis"],["A New Ocean Power","Western Sea"]],reward:"Atlantean Divine Core"},
{id:"persephone-shadow",name:"The Shadow Over Persephone",icon:"🌸",difficulty:"Mythic",description:"Protect Persephone from a forgotten Underworld power.",stages:[["Winter Without End","Greece"],["The Silent Palace","Underworld"],["The Garden Below","Elysium"],["Queen of Two Realms","Palace of Hades"]],reward:"Crown of Two Realms"}
];
const adventureLocationTemplates=[
{id:"delphi-oracle",name:"Oracle of Delphi",icon:"🔮",region:"Delphi",danger:25,text:"Prophecy and hidden political intrigue."},
{id:"crete-labyrinth",name:"Labyrinth of Crete",icon:"🐂",region:"Crete",danger:68,text:"Shifting halls and ancient monsters."},
{id:"circe-isle",name:"Isle of Circe",icon:"🪄",region:"Aegean Sea",danger:55,text:"Magic, transformations, and forbidden knowledge."},
{id:"colchis-grove",name:"Sacred Grove of Colchis",icon:"🐏",region:"Colchis",danger:78,text:"The Fleece and its sleepless guardian."},
{id:"pandora-vault",name:"Pandora's Hidden Vault",icon:"📦",region:"Thebes",danger:85,text:"Hope and calamity sealed together."},
{id:"titan-catacomb",name:"Titan Catacombs",icon:"⛓️",region:"Parnassus",danger:82,text:"Cult chambers connected to forgotten prisons."},
{id:"atlantean-ruins",name:"Atlantean Ruins",icon:"🔷",region:"Western Sea",danger:72,text:"Divine machinery beneath the waves."},
{id:"elysian-gate",name:"Gate Beyond Elysium",icon:"🌟",region:"Underworld",danger:66,text:"A hidden road for legendary spirits."}
];
const legendaryArtifactTemplates=[
{id:"nemean",name:"Hide of the Nemean Lion",icon:"🦁",text:"Greatly improves defense and courage."},
{id:"fleece",name:"Golden Fleece",icon:"🐏",text:"Restores cities, rulers, and bloodlines."},
{id:"pandora",name:"Fragment of Pandora",icon:"📦",text:"Can unleash hope or calamity."},
{id:"seal-ring",name:"Ring of the First Seal",icon:"💍",text:"Strengthens Tartarus security."},
{id:"atlantean-core",name:"Atlantean Divine Core",icon:"🔷",text:"Improves fleets, wonders, and research."},
{id:"persephone-crown",name:"Crown of Two Realms",icon:"🌸",text:"Strengthens harvests and the Underworld."}
];



const prayerTemplates=[
{id:"healing",icon:"❤️",title:"Heal My Child",text:"A parent begs for a sick child's recovery.",cost:10,trait:"merciful"},
{id:"harvest",icon:"🌾",title:"Bless Our Harvest",text:"Farmers fear drought and hunger.",cost:8,trait:"merciful"},
{id:"war",icon:"⚔️",title:"Grant Victory",text:"A soldier asks for strength before battle.",cost:12,trait:"heroic"},
{id:"ship",icon:"⛵",title:"Protect My Ship",text:"A merchant prays for safe passage.",cost:9,trait:"honorable"},
{id:"justice",icon:"⚖️",title:"Punish My Rival",text:"A citizen asks for divine vengeance.",cost:7,trait:"ruthless"},
{id:"love",icon:"💞",title:"Bless Our Love",text:"Two mortals ask for a lasting bond.",cost:8,trait:"merciful"},
{id:"wisdom",icon:"🦉",title:"Guide My Decision",text:"A ruler seeks wisdom before a dangerous choice.",cost:10,trait:"wise"}
];

const templeActivityTemplates=[
{id:"ceremony",name:"Hold Sacred Ceremony",icon:"🙏",cost:12},
{id:"offering",name:"Accept Offerings",icon:"🏺",cost:0},
{id:"miracle",name:"Perform Temple Miracle",icon:"✨",cost:15},
{id:"priest",name:"Appoint High Priest",icon:"👑",cost:20},
{id:"festival",name:"Start City Festival",icon:"🎉",cost:25},
{id:"shrine",name:"Build New Shrine",icon:"🕯️",cost:30}
];

const livingWarActions=[
{id:"bless",name:"Bless One Side",icon:"✨",cost:15},
{id:"hero",name:"Send a Hero",icon:"🛡️",cost:0},
{id:"storm",name:"Call Divine Storm",icon:"🌩️",cost:20},
{id:"peace",name:"Negotiate Peace",icon:"🕊️",cost:10},
{id:"neutral",name:"Remain Neutral",icon:"⚖️",cost:0}
];

const creatureBehaviorTemplates=["Hunting","Migrating","Guarding a Nest","Attacking Villages","Fighting a Rival","Seeking Worship","Sleeping","Following a Titan Cult"];


const divineCourtshipActions=[{id:"gift",name:"Give Divine Gift",icon:"🎁",cost:25},{id:"quest",name:"Complete Personal Favor",icon:"🌟",cost:0},{id:"council",name:"Support in Council",icon:"🏛️",cost:8},{id:"date",name:"Spend Time Together",icon:"❤️",cost:12},{id:"family",name:"Honor Their Family",icon:"🌳",cost:15},{id:"promise",name:"Make Sacred Promise",icon:"📜",cost:0}];
const immortalChildStages=[{id:"infant",name:"Divine Infant",minAge:0},{id:"child",name:"Divine Child",minAge:3},{id:"youth",name:"Divine Youth",minAge:8},{id:"young-god",name:"Young God",minAge:14},{id:"mature",name:"Mature Immortal",minAge:20}];
const divineDomainPool=["Celestial Flame","Storms","Strategy","Prophecy","Dreams","Justice","Deep Seas","Harvest","Stars","Memory","Victory","Healing","Travel","Shadows","Forgecraft","Wild Beasts","Fate","Music","Wisdom","Sacred Oaths"];



const immortalRelationshipRoster=[
{id:"hera",name:"Hera",icon:"🦚",type:"Olympian",location:"Hera's Palace",personality:"Regal",romanceBias:55,politicalSide:"Olympus"},
{id:"athena",name:"Athena",icon:"🦉",type:"Olympian",location:"Athena's Library",personality:"Wise",romanceBias:45,politicalSide:"Olympus"},
{id:"poseidon",name:"Poseidon",icon:"🔱",type:"Olympian",location:"Sea Gate",personality:"Proud",romanceBias:58,politicalSide:"Olympus"},
{id:"aphrodite",name:"Aphrodite",icon:"🕊️",type:"Olympian",location:"Gardens of Beauty",personality:"Passionate",romanceBias:78,politicalSide:"Olympus"},
{id:"ares",name:"Ares",icon:"⚔️",type:"Olympian",location:"Ares' Arena",personality:"Bold",romanceBias:60,politicalSide:"Olympus"},
{id:"hades",name:"Hades",icon:"💀",type:"Olympian",location:"Palace of Hades",personality:"Reserved",romanceBias:48,politicalSide:"Underworld"},
{id:"apollo",name:"Apollo",icon:"☀️",type:"Olympian",location:"Apollo's Temple",personality:"Radiant",romanceBias:68,politicalSide:"Olympus"},
{id:"artemis",name:"Artemis",icon:"🌙",type:"Olympian",location:"Sacred Grove",personality:"Independent",romanceBias:28,politicalSide:"Olympus"},
{id:"hermes",name:"Hermes",icon:"🪽",type:"Olympian",location:"Hermes' Marketplace",personality:"Clever",romanceBias:64,politicalSide:"Olympus"},
{id:"hephaestus",name:"Hephaestus",icon:"🔥",type:"Olympian",location:"Divine Forge",personality:"Loyal",romanceBias:52,politicalSide:"Olympus"},
{id:"hestia",name:"Hestia",icon:"🔥",type:"Olympian",location:"Hestia's Hearth",personality:"Peaceful",romanceBias:35,politicalSide:"Olympus"},
{id:"dionysus",name:"Dionysus",icon:"🍇",type:"Olympian",location:"Dionysus' Gardens",personality:"Free-Spirited",romanceBias:72,politicalSide:"Olympus"},
{id:"persephone",name:"Persephone",icon:"🌸",type:"Olympian",location:"Underworld Gardens",personality:"Compassionate",romanceBias:58,politicalSide:"Underworld"},
{id:"kronos",name:"Kronos",icon:"⏳",type:"Titan",location:"Tartarus",personality:"Dominating",romanceBias:42,politicalSide:"Titans"},
{id:"rhea",name:"Rhea",icon:"🦁",type:"Titan",location:"Titan Sanctuary",personality:"Maternal",romanceBias:56,politicalSide:"Titans"},
{id:"oceanus",name:"Oceanus",icon:"🌊",type:"Titan",location:"Ocean Prison",personality:"Calm",romanceBias:52,politicalSide:"Titans"},
{id:"tethys",name:"Tethys",icon:"🌊",type:"Titan",location:"Titan Sanctuary",personality:"Ancient",romanceBias:55,politicalSide:"Titans"},
{id:"hyperion",name:"Hyperion",icon:"☀️",type:"Titan",location:"Solar Prison",personality:"Proud",romanceBias:48,politicalSide:"Titans"},
{id:"theia",name:"Theia",icon:"✨",type:"Titan",location:"Titan Sanctuary",personality:"Radiant",romanceBias:57,politicalSide:"Titans"},
{id:"coeus",name:"Coeus",icon:"🧠",type:"Titan",location:"Tartarus",personality:"Inquisitive",romanceBias:45,politicalSide:"Titans"},
{id:"phoebe",name:"Phoebe",icon:"🌙",type:"Titan",location:"Titan Sanctuary",personality:"Mystic",romanceBias:54,politicalSide:"Titans"},
{id:"crius",name:"Crius",icon:"🐏",type:"Titan",location:"Tartarus",personality:"Severe",romanceBias:40,politicalSide:"Titans"},
{id:"iapetus",name:"Iapetus",icon:"🗡️",type:"Titan",location:"Tartarus",personality:"Warrior",romanceBias:50,politicalSide:"Titans"},
{id:"themis",name:"Themis",icon:"⚖️",type:"Titan",location:"Hall of Divine Law",personality:"Just",romanceBias:52,politicalSide:"Titans"},
{id:"mnemosyne",name:"Mnemosyne",icon:"📜",type:"Titan",location:"Memory Hall",personality:"Wise",romanceBias:50,politicalSide:"Titans"},
{id:"atlas",name:"Atlas",icon:"🌍",type:"Titan",location:"Western Pillars",personality:"Enduring",romanceBias:50,politicalSide:"Titans"},
{id:"prometheus",name:"Prometheus",icon:"🔥",type:"Titan",location:"Caucasus Sanctuary",personality:"Clever",romanceBias:60,politicalSide:"Titans"},
{id:"epimetheus",name:"Epimetheus",icon:"📦",type:"Titan",location:"Titan Sanctuary",personality:"Impulsive",romanceBias:58,politicalSide:"Titans"}
];

const divineConversationChoices=[
{id:"wisdom",label:"Discuss Philosophy",icon:"🦉",affection:3,trust:7,respect:8},
{id:"flirt",label:"Flirt",icon:"❤️",affection:10,trust:1,respect:0},
{id:"gift",label:"Give Divine Gift",icon:"🎁",affection:8,trust:4,respect:2,costGold:20},
{id:"adventure",label:"Invite on Adventure",icon:"🗺️",affection:7,trust:6,respect:5},
{id:"politics",label:"Discuss Olympus & Titans",icon:"🏛️",affection:2,trust:6,respect:7},
{id:"family",label:"Discuss Family",icon:"🌳",affection:5,trust:8,respect:4},
{id:"promise",label:"Make Sacred Promise",icon:"📜",affection:5,trust:10,respect:6},
{id:"challenge",label:"Challenge Their View",icon:"⚔️",affection:-2,trust:1,respect:8}
];


const autonomousDivineRelationshipActions=["spent time together on Olympus","trained together","shared a prophecy","attended a festival together","defended one another in Council","traveled together","reconciled after an argument","exchanged divine gifts"];
const autonomousMortalRomanceNames=["Ariadne","Callianeira","Daphne","Elara","Ianthe","Lysandra","Melia","Nerissa","Phaedra","Thalia","Adrastus","Cassian","Damon","Evander","Leander","Nestor","Orion","Phaon","Theron","Xanthos"];
const autonomousDivineChildNames=["Asteria","Calista","Dionea","Euphorion","Heliara","Ione","Kallios","Lyra","Nereon","Ortheia","Phoebion","Seleneia","Thaleia","Theon","Xanthe","Zephyros"];

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
 const cities=cityTemplates.map(c=>({...c,buildings:[],happiness:55,culture:45,activeProjectId:null,projectYearsLeft:0,festivalCooldown:0}));
 const favored={zeus:"Delphi",athena:"Athens",poseidon:"Corinth",aphrodite:"Thebes",ares:"Sparta",hades:"Crete"}[godId];
 cities.find(c=>c.name===favored).player=clamp(cities.find(c=>c.name===favored).player+20);
 return{
  version:"0.5.0",godId,year:1,faith:140,favor:115,gold:145,prestige:30,food:100,stone:60,wood:75,bronze:35,
  cities,
  heroes:heroTemplates.map(h=>({...h,recruited:false,level:1,xp:0,health:100,energy:100,status:"Available",age:25,equipment:[],traits:[],skillPoints:1,className:randomItem(heroClasses),learnedSkills:[],abilities:[],trainingXP:{combat:0,leadership:0,diplomacy:0,wisdom:0,exploration:0,crafting:0,divine:0},reputation:0,titles:[],trainingStatus:null,skills:{power:false,tactics:false,leadership:false}})),
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
  activeTrainings:[],
  cityProjects:[],
  cityEvents:[],
  sideQuests:[],
  cityInventories:{},
  citizens:{},
  mortalRelationships:mortalTemplates.map(m=>({...m,id:uid("mortal"),relationship:20,status:"Acquaintance",children:[]})),
  demigods:[],
  ascendedGods:[],
  divineFamilyHistory:[],
  apotheosisVotes:[],
  fateBalance:82,
  fateThreads:[],
  fateConsequences:[],
  miracleCooldowns:{},
  olympusVisits:[],
  proceduralMyths:[],
  customGods:[],
  currentAgeId:"titans",
  worldUnits:[
    {id:uid("unit"),type:"army",icon:"⚔️",x:39,y:59,label:"Spartan Army"},
    {id:uid("unit"),type:"caravan",icon:"🐎",x:48,y:46,label:"Merchant Caravan"},
    {id:uid("unit"),type:"divine",icon:"🪽",x:62,y:37,label:"Hermes"}
  ],
  civilizations:civilizationTemplates.map(c=>({...c,allied:false,atWar:false,tradeAgreement:false,memories:[]})),
  fleets:[],
  discoveries:discoveryTemplates.map(d=>({...d,found:false,yearFound:null,outcome:null})),
  wonders:wonderTemplates.map(w=>({...w,status:"Available",yearsLeft:0,investedGold:0})),
  atlantis:{status:"Hidden",relation:0,power:88,stability:70,choiceHistory:[]},
  olympicHistory:[],
  nextOlympicYear:4,
  libraryEntries:[],
  libraryCategory:"all",
  divineReputation:{wise:10,merciful:10,honorable:10,heroic:10,ambitious:5,ruthless:0,deceitful:0,tyrannical:0},
  divineTitles:divineTitleTemplates.map(t=>({...t,holder:null,yearAssigned:null})),
  divineAlliances:[],divineRivalries:[],divineMessages:[],familyDramaEvents:[],
  titanCouncil:{secrecy:80,rebellionStrength:20,infiltrated:false,meetings:[],activeAgendas:[]},
  avatar:{form:"divine",energy:100,maxEnergy:100,location:"Mount Olympus",hidden:false,visits:0,reputation:0},
  avatarHistory:[],
  directWorldEvents:[],
  livingOlympus:{visits:0,influence:50,events:[],research:[],marketRefreshYear:0},
  divineInventory:divineItemTemplates.map(i=>({...i,owned:false,equipped:false})),
  olympusEventHistory:[],
  underworld:{
    balance:75,
    soulsArrived:0,
    soulsJudged:0,
    elysiumSouls:0,
    asphodelSouls:0,
    punishedSouls:0,
    cerberusLoyalty:55,
    tartarusSecurity:70,
    events:[],
    npc:underworldNpcTemplates.map(n=>({...n,memories:[]})),
    legacyRecords:[]
  },
  souls:[],
  spiritHeroes:[],
  alerts:[],
  alertHistory:[],
  activityFeed:[],
  alertFilter:"active",
  urgentInterruptId:null,
  aiCharacters:[],
  aiDecisions:[],
  dynamicAchievements:[],
  notificationSettings:{criticalPopups:true,urgentPopups:true,groupRelated:true},
  legendaryAdventures:legendaryAdventureTemplates.map(q=>({...q,status:"Available",currentStage:0,heroId:null,history:[],battle:null})),
  adventureLocations:adventureLocationTemplates.map((l,i)=>({...l,discovered:i===0,visits:0,cleared:false})),
  legendaryArtifacts:legendaryArtifactTemplates.map(a=>({...a,owned:false})),
  dynasties:[],
  adventureHistory:[],
  livingWorld:{
    citizenFilter:"all",
    prayers:[],
    prayerHistory:[],
    temples:[],
    wars:[],
    conversations:[],
    worldStories:[]
  },
  creatureEcosystem:[],
  divineFamily:{spouse:null,courtships:[],immortalChildren:[],familyTree:[],familyHistory:[],marriages:[],divorces:[]},
  mapEvents:[{id:uid("event"),city:"Corinth",icon:"🌾",title:"Great Harvest",text:"Corinth enjoys a rich harvest."}],
  log:[{title:`${getGodById(godId).name} Enters the Age of Monsters`,text:"Ancient creatures stir across Greece.",year:1}]
 };
}

function renderGodSelection(){
 $("#god-grid").innerHTML=gods.map(g=>`<button class="god-card ${selectedGodId===g.id?"selected":""}" data-god="${g.id}"><span class="symbol">${g.symbol}</span><strong>${g.name}</strong><small>${g.title}<br>${g.bonus}</small></button>`).join("");
 $$("[data-god]").forEach(b=>b.addEventListener("click",()=>{selectedGodId=b.dataset.god;$("#begin-button").disabled=false;$("#begin-button").textContent=`Begin as ${getGodById(selectedGodId).name}`;renderGodSelection()}));
 if(localStorage.getItem(SAVE_KEY)||localStorage.getItem(PREVIOUS_SAVE_KEY_STAGE7)||localStorage.getItem(PREVIOUS_SAVE_KEY_STAGE6))$("#continue-button").classList.remove("hidden");
}
function startGame(load=false){if(load){try{state=JSON.parse(localStorage.getItem(SAVE_KEY))}catch(e){localStorage.removeItem(SAVE_KEY);showToast("Save could not be loaded.");return}}else state=newGame(selectedGodId);$("#start-screen").classList.remove("active");$("#game-screen").classList.add("active");renderAll();saveGame(false)}
function saveGame(show=true){if(!state)return;localStorage.setItem(SAVE_KEY,JSON.stringify(state));if(show)showToast("Game saved.")}
function renderAll(){
 $("#god-title").textContent=`${getGod().symbol} ${getGod().name}`;
 $("#faith-value").textContent=Math.floor(state.faith);$("#favor-value").textContent=Math.floor(state.favor);$("#gold-value").textContent=Math.floor(state.gold);$("#prestige-value").textContent=Math.floor(state.prestige);$("#year-label").textContent=`Year ${state.year}`;
 ensureLivingCityData();ensureV100Data();ensureV110Data();ensureV120Data();ensureV130Data();ensureV130Stage2Data();ensureV130Stage3Data();ensureV130Stage4Data();ensureV130Stage5Data();ensureV140Stage1Data();ensureV140Stage2Data();ensureV140Stage3Data();ensureV140Stage4Data();ensureV140Stage5Data();ensureV140Stage6Data();ensureV140Stage7Data();renderWorld();renderLivingChronicle();renderStage6Sagas();renderStage7Extras();renderDivineRelationships();renderDivineHouses();renderDivineFamily();renderFamilyTree();renderAscensionCouncil();renderLivingCitizens();renderPrayers();renderInteractiveTemples();renderLivingWars();renderCreatureEcosystem();renderLegendaryAdventures();renderDynasties();renderAlertsCenter();renderLivingAI();renderUnderworld();renderLivingOlympus();renderAvatar();renderDivinePolitics();renderTitanCouncil();renderDivineReputation();renderWorldExpansion();renderNaval();renderWonders();renderOlympicGamesV110();renderLibraryOfFate();renderCityDevelopment();renderTraining();renderOlympus();renderFate();renderAges();renderPantheon();renderDemigodFamily();renderKingdoms();renderEconomy();renderArtifacts();renderLegacy();renderTitans();renderCouncil();renderPowersPlaceholder();renderHeroes();renderMonsters();renderQuests();renderThrone();renderTreasury();renderLog();
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
 if(currentMapFilter==="all"||currentMapFilter==="temples")state.livingWorld.temples.forEach(t=>{const c=getCity(t.city);if(c)items.push({type:"temple",id:t.id,name:t.name,icon:"🏛️",x:c.x-7,y:c.y-6,class:"temple"})});
 if(currentMapFilter==="all"||currentMapFilter==="prayers")state.livingWorld.prayers.filter(p=>p.status==="Waiting").slice(0,10).forEach(p=>{const c=getCity(p.city);if(c)items.push({type:"prayer",id:p.id,name:p.title,icon:p.icon,x:c.x+rand(-5,5),y:c.y+rand(-5,5),class:"prayer"})});
 $("#map-markers").innerHTML=items.map(i=>`<button class="map-marker ${i.class}" style="left:${i.x}%;top:${i.y}%" data-map-type="${i.type}" data-map-id="${i.id}"><span class="marker-icon">${i.icon}</span><span class="marker-label">${i.name}</span></button>`).join("");
 $("#map-markers").insertAdjacentHTML("beforeend",state.worldUnits.map(u=>`<div class="world-unit ${u.type}" style="left:${u.x}%;top:${u.y}%" title="${u.label}">${u.icon}</div>`).join(""));
 $$("[data-map-type]").forEach(b=>b.addEventListener("click",()=>selectMapItem(b.dataset.mapType,b.dataset.mapId)));
}
function selectMapItem(type,id){
 const panel=$("#selected-map-panel");panel.className="selected-map-panel";
 if(type==="city"){const c=state.cities.find(x=>x.id===id);panel.innerHTML=`<div class="card-row"><div><p class="eyebrow">CITY</p><h2>${c.symbol} ${c.name}</h2></div><span class="pill">${c.player>c.rival?"Your influence":"Rival influence"}</span></div><p class="muted">${c.trait}</p><div class="stats"><div class="stat"><strong>${c.population}</strong><small>Population</small></div><div class="stat"><strong>${c.buildings.length}</strong><small>Buildings</small></div><div class="stat"><strong>${Math.round(c.unrest)}%</strong><small>Unrest</small></div></div><button class="card-button" id="open-city-build">Develop City</button>`;$("#open-city-build").addEventListener("click",()=>openCityBuild(c.id))}
 if(type==="hero"){const h=getHero(id);panel.innerHTML=`<p class="eyebrow">HERO</p><h2>${h.portrait} ${h.name}</h2><p class="muted">${h.title}. Level ${h.level}. ${h.location}. ${h.status}.</p><button class="card-button" id="open-hero-detail">Manage Hero</button>`;$("#open-hero-detail").addEventListener("click",()=>openHeroDetail(h.id))}
 if(type==="monster"){const m=state.monsters.find(x=>x.id===id);panel.innerHTML=`<p class="eyebrow">ROAMING MONSTER</p><h2>${m.icon} ${m.name}</h2><p class="muted">${m.objective}. Threatening ${m.territory}. Phase ${m.phase}/3.</p><div class="meter orange"><span style="width:${m.currentHealth/m.health*100}%"></span></div><button class="card-button" id="fight-map-monster" ${state.heroes.some(h=>h.recruited)?"":"disabled"}>Begin Boss Battle</button>`;$("#fight-map-monster").addEventListener("click",()=>chooseHeroForBattle(m.id))}
 if(type==="event"){const e=state.mapEvents.find(x=>x.id===id);panel.innerHTML=`<p class="eyebrow">WORLD EVENT</p><h2>${e.icon} ${e.title}</h2><p class="muted">${e.text}</p><button class="card-button" id="ack-event">Acknowledge</button>`;$("#ack-event").addEventListener("click",()=>{state.mapEvents=state.mapEvents.filter(x=>x.id!==e.id);state.faith+=5;addLog(e.title,e.text);renderAll()})}
 if(type==="temple"){const t=state.livingWorld.temples.find(x=>x.id===id);panel.innerHTML=`<p class="eyebrow">TEMPLE</p><h2>🏛️ ${t.name}</h2><p class="muted">${t.city}. Devotion ${t.devotion}; rival influence ${t.rivalInfluence}.</p><button class="card-button" id="open-map-temple">Enter Temple</button>`;$("#open-map-temple").onclick=()=>openInteractiveTemple(t.id)}
 if(type==="prayer"){const p=state.livingWorld.prayers.find(x=>x.id===id);panel.innerHTML=`<p class="eyebrow">PRAYER</p><h2>${p.icon} ${p.title}</h2><p class="muted">${p.citizen} of ${p.city}: ${p.text}</p><button class="card-button" id="open-map-prayer">Review Prayer</button>`;$("#open-map-prayer").onclick=()=>activateView("prayers-view")}
}


function ensureLivingCityData(){
 state.cities.forEach(c=>{
  if(c.happiness===undefined)c.happiness=55;
  if(c.culture===undefined)c.culture=45;
  if(c.activeProjectId===undefined)c.activeProjectId=null;
  if(c.projectYearsLeft===undefined)c.projectYearsLeft=0;
  if(c.festivalCooldown===undefined)c.festivalCooldown=0;
  if(!state.citizens[c.name]){
   state.citizens[c.name]=Array.from({length:6},(_,i)=>({
    id:uid("citizen"),
    name:`${randomItem(citizenFirstNames)} ${String.fromCharCode(65+i)}`,
    age:18+Math.floor(Math.random()*45),
    job:randomItem(citizenJobs),
    wealth:20+Math.floor(Math.random()*70),
    happiness:35+Math.floor(Math.random()*55),
    loyalty:35+Math.floor(Math.random()*55),
    favoriteGod:randomItem(gods).name,
    family:Math.random()<.65?"Has family":"Lives alone"
   }));
  }
  if(!state.cityInventories[c.name])state.cityInventories[c.name]={food:40,wood:25,stone:18,bronze:10,iron:8,marble:6,horses:4};
 });
}

function renderCityDevelopment(){
 const projects=state.cities.filter(c=>c.activeProjectId).length;
 $("#building-count").textContent=`${projects} Projects`;
 $("#city-development-list").innerHTML=state.cities.map(c=>{
  const project=projectTemplates.find(p=>p.id===c.activeProjectId);
  return `<article class="building-card ${project?"city-project":""}"><div class="building-head"><div><h3>${c.symbol} ${c.name}</h3><p>${c.trait}</p></div><span class="tag gold">${project?project.name:`${c.buildings.length} Buildings`}</span></div><div class="stats"><div class="stat"><strong>${c.happiness}</strong><small>Happiness</small></div><div class="stat"><strong>${c.culture}</strong><small>Culture</small></div><div class="stat"><strong>${state.citizens[c.name].length}</strong><small>Citizens</small></div></div>${project?`<p>${project.icon} ${project.text}</p><div class="meter project-progress"><span style="width:${Math.max(5,(project.years-c.projectYearsLeft)/project.years*100)}%"></span></div><small class="muted">${c.projectYearsLeft} years remaining</small>`:""}<div class="city-district-grid">${districtTemplates.slice(0,8).map(d=>`<button class="action-button district-button" data-city-district="${c.id}|${d.id}">${d.icon} ${d.name}</button>`).join("")}</div><button class="card-button" data-city-full="${c.id}">Enter ${c.name}</button></article>`;
 }).join("");
 $$("[data-city-district]").forEach(b=>b.addEventListener("click",()=>{const [cityId,districtId]=b.dataset.cityDistrict.split("|");openDistrict(state.cities.find(c=>c.id===cityId),districtId)}));
 $$("[data-city-full]").forEach(b=>b.addEventListener("click",()=>openLivingCity(b.dataset.cityFull)));
}

function openLivingCity(id){
 const c=state.cities.find(x=>x.id===id);
 showModal(`<p class="eyebrow">ENTER CITY</p><h2>${c.symbol} ${c.name}</h2><p class="muted">${c.trait}. Choose a district to visit.</p><div class="city-district-grid">${districtTemplates.map(d=>`<button class="action-button district-button" data-modal-district="${d.id}">${d.icon} ${d.name}<br><small>${d.text}</small></button>`).join("")}</div>${c.activeProjectId?"":'<button id="start-city-project" class="primary-button">Start Major City Project</button>'}`);
 $$("[data-modal-district]").forEach(b=>b.addEventListener("click",()=>openDistrict(c,b.dataset.modalDistrict)));
 const projectBtn=$("#start-city-project");if(projectBtn)projectBtn.addEventListener("click",()=>chooseCityProject(c));
}

function openDistrict(c,districtId){
 const d=districtTemplates.find(x=>x.id===districtId);
 if(districtId==="agora"){openAgora(c);return}
 if(districtId==="palace"){closeModal();openKingdomDiplomacy(c.name);return}
 if(districtId==="barracks"){openTrainingLocation(c,"combat");return}
 if(districtId==="temples"){openTempleDistrict(c);return}
 if(districtId==="tavern"){openTavern(c);return}
 if(districtId==="homes"){openResidentialDistrict(c);return}
 if(districtId==="harbor"){openHarbor(c);return}
 if(districtId==="forge"){openForge(c);return}
 if(districtId==="academy"){openTrainingLocation(c,"wisdom");return}
 if(districtId==="farms"){openFarms(c);return}
 if(districtId==="theater"){openTheater(c);return}
 if(districtId==="stadium"){openStadium(c);return}
}

function openAgora(c){
 const inv=state.cityInventories[c.name];
 const prices={food:5,wood:8,stone:10,bronze:16,iron:18,marble:20,horses:30};
 showModal(`<p class="eyebrow">AGORA MARKETPLACE</p><h2>${c.symbol} ${c.name} Agora</h2><p class="muted">Buy local goods or sell resources from your treasury.</p><div class="market-grid">${Object.entries(prices).map(([item,price])=>`<div class="market-item"><strong>${item.toUpperCase()}</strong><small>City stock ${inv[item]} • Price ${price} Gold</small><button class="card-button" data-buy-item="${item}">Buy 5</button><button class="card-button" data-sell-item="${item}">Sell 5</button></div>`).join("")}</div>`);
 $$("[data-buy-item]").forEach(b=>b.addEventListener("click",()=>tradeItem(c,b.dataset.buyItem,true,prices[b.dataset.buyItem])));
 $$("[data-sell-item]").forEach(b=>b.addEventListener("click",()=>tradeItem(c,b.dataset.sellItem,false,prices[b.dataset.sellItem])));
}

function tradeItem(c,item,buy,price){
 const inv=state.cityInventories[c.name];
 if(buy){
  if(inv[item]<5){showToast("Not enough city stock.");return}
  if(!spend("gold",price*5))return;
  inv[item]-=5;state[item]=(state[item]||0)+5;
 }else{
  if((state[item]||0)<5){showToast(`Not enough ${item}.`);return}
  state[item]-=5;inv[item]+=5;state.gold+=Math.round(price*5*.75);recordGold(Math.round(price*5*.75),`Sold ${item} in ${c.name}`);
 }
 renderAll();saveGame(false);openAgora(c);
}

function openTempleDistrict(c){
 showModal(`<p class="eyebrow">TEMPLE DISTRICT</p><h2>🙏 Temples of ${c.name}</h2><div class="action-grid"><button class="action-button" data-temple-action="pray">✨ Lead Public Prayer<br><small>+Faith</small></button><button class="action-button" data-temple-action="festival">🎉 Hold Festival<br><small>35 Gold</small></button><button class="action-button" data-temple-action="priests">🙏 Recruit Priests<br><small>20 Gold</small></button><button class="action-button" data-temple-action="purify">🕯️ Purify Titan Influence<br><small>20 Favor</small></button></div>`);
 $$("[data-temple-action]").forEach(b=>b.addEventListener("click",()=>resolveTempleAction(c,b.dataset.templeAction)));
}
function resolveTempleAction(c,a){
 if(a==="pray"){state.faith+=18;c.player=clamp(c.player+5);c.happiness=clamp(c.happiness+3)}
 if(a==="festival"){if(c.festivalCooldown>0){showToast("A festival was held recently.");return}if(!spend("gold",35))return;c.happiness=clamp(c.happiness+14);c.culture=clamp(c.culture+8);c.player=clamp(c.player+6);c.festivalCooldown=2;state.prestige+=5}
 if(a==="priests"){if(!spend("gold",20))return;c.player=clamp(c.player+8);state.faith+=10}
 if(a==="purify"){if(!spend("favor",20))return;state.titans.filter(t=>t.sealCity===c.name).forEach(t=>{t.influence=Math.max(0,t.influence-12);t.seal=clamp(t.seal+8)});state.tartarusStability=clamp(state.tartarusStability+3)}
 addLog(`Temple Activity in ${c.name}`,a);closeModal();renderAll();saveGame(false);
}

function openTavern(c){
 const rumors=[
  "A merchant knows the location of a hidden shrine.",
  "Travelers saw a monster near the old road.",
  "A Titan cult meets beneath the city at night.",
  "A retired soldier seeks a hero to train.",
  "A noble offers Gold for a discreet mission."
 ];
 const quest={id:uid("side"),city:c.name,title:randomItem(["Escort a Merchant","Investigate a Titan Cult","Recover a Stolen Relic","Hunt Roadside Bandits","Protect the Harvest"]),rewardGold:rand(25,65),rewardXP:rand(20,50),status:"Available"};
 showModal(`<p class="eyebrow">CITY TAVERN</p><h2>🍺 ${c.name} Tavern</h2><p class="muted">Rumor: ${randomItem(rumors)}</p><div class="action-grid"><button class="action-button" id="accept-side-quest">📜 Accept Side Quest<br><small>${quest.title}</small></button><button class="action-button" id="hire-mercenaries">⚔️ Hire Mercenaries<br><small>30 Gold</small></button><button class="action-button" id="buy-round">🍻 Buy a Round<br><small>10 Gold</small></button><button class="action-button" id="seek-rumor">👂 Seek Another Rumor</button></div>`);
 $("#accept-side-quest").addEventListener("click",()=>{state.sideQuests.push(quest);addLog(`Side Quest Accepted: ${quest.title}`,`Available in ${c.name}.`);closeModal();renderAll();saveGame(false)});
 $("#hire-mercenaries").addEventListener("click",()=>{if(!spend("gold",30))return;const k=state.kingdoms.find(k=>k.name===c.name);k.army=clamp(k.army+10);addLog(`Mercenaries Hired in ${c.name}`,"The kingdom army grows.");closeModal();renderAll()});
 $("#buy-round").addEventListener("click",()=>{if(!spend("gold",10))return;c.happiness=clamp(c.happiness+4);c.player=clamp(c.player+2);closeModal();renderAll()});
 $("#seek-rumor").addEventListener("click",()=>openTavern(c));
}

function openResidentialDistrict(c){
 showModal(`<p class="eyebrow">RESIDENTIAL DISTRICT</p><h2>🏠 Citizens of ${c.name}</h2><div class="citizen-grid">${state.citizens[c.name].map(x=>`<button class="citizen-card" data-citizen="${x.id}"><strong>${x.name}</strong><small>${x.age} • ${x.job}<br>Happy ${x.happiness} • Loyal ${x.loyalty}</small></button>`).join("")}</div>`);
 $$("[data-citizen]").forEach(b=>b.addEventListener("click",()=>openCitizen(c,b.dataset.citizen)));
}
function openCitizen(c,id){
 const x=state.citizens[c.name].find(v=>v.id===id);
 showModal(`<p class="eyebrow">CITIZEN STORY</p><h2>${x.name}</h2><p class="muted">${x.age}-year-old ${x.job}. ${x.family}. Favorite deity: ${x.favoriteGod}.</p><div class="stats"><div class="stat"><strong>${x.wealth}</strong><small>Wealth</small></div><div class="stat"><strong>${x.happiness}</strong><small>Happiness</small></div><div class="stat"><strong>${x.loyalty}</strong><small>Loyalty</small></div></div><div class="choice-row"><button id="bless-citizen" class="choice-button good">Grant Blessing</button><button id="question-citizen" class="choice-button bad">Ask About the City</button></div>`);
 $("#bless-citizen").addEventListener("click",()=>{if(!spend("favor",5))return;x.happiness=clamp(x.happiness+15);x.loyalty=clamp(x.loyalty+10);state.faith+=4;closeModal();renderAll()});
 $("#question-citizen").addEventListener("click",()=>{showToast(`${x.name}: "${c.happiness<45?"The city feels neglected.":"Life in the city is improving."}"`)});
}

function openHarbor(c){
 showModal(`<p class="eyebrow">HARBOR</p><h2>⛵ ${c.name} Harbor</h2><div class="action-grid"><button class="action-button" id="harbor-expedition">🗺️ Launch Expedition<br><small>30 Gold</small></button><button class="action-button" id="harbor-trade">🪙 Open Trade Route<br><small>25 Gold</small></button><button class="action-button" id="harbor-train">🌊 Train Navigator Hero</button><button class="action-button" id="harbor-protect">🛡️ Patrol the Coast<br><small>15 Favor</small></button></div>`);
 $("#harbor-expedition").addEventListener("click",()=>performGoldAction("expedition"));
 $("#harbor-trade").addEventListener("click",()=>{if(!spend("gold",25))return;c.wealth=clamp(c.wealth+8);state.enterprises.push({id:uid("enterprise"),icon:"⛵",name:`${c.name} Trade Route`,yearsLeft:1,min:25,max:60,risk:.2,text:"A new trade route is being established."});closeModal();renderAll()});
 $("#harbor-train").addEventListener("click",()=>openTrainingLocation(c,"exploration"));
 $("#harbor-protect").addEventListener("click",()=>{if(!spend("favor",15))return;c.protected=true;c.happiness=clamp(c.happiness+4);closeModal();renderAll()});
}

function openForge(c){
 const recipes=[
  {name:"Bronze Sword",costGold:25,costBronze:5,bonus:"strength",amount:5},
  {name:"Hero Shield",costGold:30,costBronze:6,bonus:"courage",amount:5},
  {name:"Blessed Bow",costGold:35,costWood:6,bonus:"wisdom",amount:4},
  {name:"Titan Hammer",costGold:55,costBronze:10,bonus:"strength",amount:9}
 ];
 showModal(`<p class="eyebrow">BLACKSMITH</p><h2>⚒️ ${c.name} Forge</h2><div class="market-grid">${recipes.map((r,i)=>`<div class="market-item"><strong>${r.name}</strong><small>${r.costGold} Gold • +${r.amount} ${r.bonus}</small><button class="card-button" data-craft="${i}">Craft</button></div>`).join("")}</div>`);
 $$("[data-craft]").forEach(b=>b.addEventListener("click",()=>chooseCraftHero(recipes[Number(b.dataset.craft)])));
}
function chooseCraftHero(r){
 if(!spend("gold",r.costGold))return;
 if(r.costBronze&&state.bronze<r.costBronze){state.gold+=r.costGold;showToast("Not enough bronze.");return}
 if(r.costWood&&state.wood<r.costWood){state.gold+=r.costGold;showToast("Not enough wood.");return}
 state.bronze-=r.costBronze||0;state.wood-=r.costWood||0;
 const heroes=state.heroes.filter(h=>h.recruited);
 showModal(`<p class="eyebrow">EQUIP CRAFTED ITEM</p><h2>${r.name}</h2><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-craft-hero="${h.id}">${h.portrait} ${h.name}</button>`).join("")}</div>`);
 $$("[data-craft-hero]").forEach(b=>b.addEventListener("click",()=>{const h=getHero(b.dataset.craftHero);h.equipment.push(r.name);h[r.bonus]+=r.amount;h.trainingXP.crafting+=20;addLog(`${r.name} Crafted`,`${h.name} equips the item.`);closeModal();renderAll();saveGame(false)}));
}

function openFarms(c){showModal(`<p class="eyebrow">FARMS</p><h2>🌾 Farms of ${c.name}</h2><div class="action-grid"><button class="action-button" id="improve-irrigation">💧 Improve Irrigation<br><small>25 Gold</small></button><button class="action-button" id="bless-harvest">✨ Bless Harvest<br><small>15 Favor</small></button></div>`);$("#improve-irrigation").addEventListener("click",()=>{if(!spend("gold",25))return;state.food+=35;c.population+=12;c.happiness=clamp(c.happiness+5);closeModal();renderAll()});$("#bless-harvest").addEventListener("click",()=>{if(!spend("favor",15))return;state.food+=50;c.happiness=clamp(c.happiness+8);closeModal();renderAll()})}
function openTheater(c){showModal(`<p class="eyebrow">THEATER</p><h2>🎭 Theater of ${c.name}</h2><div class="action-grid"><button class="action-button" id="fund-play">🎭 Fund Mythic Play<br><small>20 Gold</small></button><button class="action-button" id="public-debate">🗣️ Hold Public Debate</button></div>`);$("#fund-play").addEventListener("click",()=>{if(!spend("gold",20))return;c.culture=clamp(c.culture+12);c.happiness=clamp(c.happiness+8);state.prestige+=4;closeModal();renderAll()});$("#public-debate").addEventListener("click",()=>{c.culture=clamp(c.culture+6);state.faith+=6;closeModal();renderAll()})}
function openStadium(c){showModal(`<p class="eyebrow">STADIUM</p><h2>🏟️ Stadium of ${c.name}</h2><div class="action-grid"><button class="action-button" id="local-games">🏆 Hold Local Games<br><small>25 Gold</small></button><button class="action-button" id="olympic-games">🌟 Sponsor Olympic Games<br><small>40 Gold</small></button></div>`);$("#local-games").addEventListener("click",()=>{if(!spend("gold",25))return;c.happiness=clamp(c.happiness+10);c.culture=clamp(c.culture+6);state.prestige+=5;closeModal();renderAll()});$("#olympic-games").addEventListener("click",()=>{if(!spend("gold",40))return;openOlympicGames()})}

function chooseCityProject(c){
 showModal(`<p class="eyebrow">MAJOR CITY PROJECT</p><h2>${c.symbol} ${c.name}</h2><div class="action-grid">${projectTemplates.map(p=>`<button class="action-button" data-city-project="${p.id}">${p.icon} ${p.name}<br><small>${p.costGold} Gold • ${p.years} years</small></button>`).join("")}</div>`);
 $$("[data-city-project]").forEach(b=>b.addEventListener("click",()=>startCityProject(c,b.dataset.cityProject)));
}
function startCityProject(c,id){
 const p=projectTemplates.find(x=>x.id===id);
 if(!spend("gold",p.costGold))return;
 if(p.costStone&&state.stone<p.costStone){state.gold+=p.costGold;showToast("Not enough stone.");return}
 if(p.costWood&&state.wood<p.costWood){state.gold+=p.costGold;showToast("Not enough wood.");return}
 if(p.costBronze&&state.bronze<p.costBronze){state.gold+=p.costGold;showToast("Not enough bronze.");return}
 state.stone-=p.costStone||0;state.wood-=p.costWood||0;state.bronze-=p.costBronze||0;c.activeProjectId=p.id;c.projectYearsLeft=p.years;addLog(`${p.name} Begins in ${c.name}`,p.text);closeModal();renderAll();saveGame(false);
}

function cityYearTurn(){
 state.cities.forEach(c=>{
  if(c.festivalCooldown>0)c.festivalCooldown--;
  if(c.activeProjectId){
   c.projectYearsLeft--;
   if(c.projectYearsLeft<=0){
    const p=projectTemplates.find(x=>x.id===c.activeProjectId);completeCityProject(c,p);c.activeProjectId=null;c.projectYearsLeft=0;
   }
  }
  if(Math.random()<.22){
   const e=randomItem(cityEventTemplates);state.cityEvents.push({id:uid("cityevent"),city:c.name,...e});addLog(`${e.icon} ${e.title}`,`An event awaits your decision in ${c.name}.`);
  }
  state.citizens[c.name].forEach(x=>{x.age++;x.happiness=clamp(x.happiness+Math.floor(Math.random()*7)-3);x.loyalty=clamp(x.loyalty+Math.floor(Math.random()*5)-2)});
 });
}

function completeCityProject(c,p){
 if(p.id==="parthenon"){state.faith+=50;state.prestige+=30;c.player=clamp(c.player+15)}
 if(p.id==="grand-harbor"){c.wealth=clamp(c.wealth+18);state.gold+=40}
 if(p.id==="city-walls"){c.protected=true;c.unrest=clamp(c.unrest-10)}
 if(p.id==="olympic-stadium"){c.happiness=clamp(c.happiness+18);state.prestige+=20}
 if(p.id==="great-library"){c.culture=clamp(c.culture+25);state.heroes.filter(h=>h.location===c.name).forEach(h=>h.trainingXP.wisdom+=30)}
 if(p.id==="royal-forge"){state.bronze+=25;state.prestige+=12}
 if(p.id==="irrigation"){state.food+=100;c.population+=50}
 if(p.id==="colossal-statue"){state.prestige+=45;state.kingdoms.find(k=>k.name===c.name).loyalty=clamp(state.kingdoms.find(k=>k.name===c.name).loyalty+20)}
 addLog(`${p.name} Completed in ${c.name}`,p.text);
}

function renderTraining(){
 const active=state.activeTrainings.length;
 $("#training-count").textContent=`${active} Training`;
 $("#training-summary").innerHTML=`<p class="eyebrow">HERO DEVELOPMENT</p><h3>Train heroes with mentors, academies, barracks, temples, and forges</h3><div class="stats"><div class="stat"><strong>${active}</strong><small>Active</small></div><div class="stat"><strong>${state.heroes.reduce((s,h)=>s+h.learnedSkills.length,0)}</strong><small>Skills Learned</small></div><div class="stat"><strong>${state.heroes.filter(h=>h.recruited).length}</strong><small>Heroes</small></div></div>`;
 $("#training-list").innerHTML=state.heroes.filter(h=>h.recruited).map(h=>`<article class="card training-card ${h.trainingStatus?"training-active":""}"><div class="hero-top"><span class="portrait">${h.portrait}</span><div class="flex1"><h3>${h.name}</h3><p>${h.className} • Reputation ${h.reputation}</p></div><span class="tag class-badge">${h.trainingStatus||"Available"}</span></div><div class="tag-row"><span class="tag">Skill Points ${h.skillPoints}</span><span class="tag">Combat XP ${h.trainingXP.combat}</span><span class="tag">Wisdom XP ${h.trainingXP.wisdom}</span><span class="tag">Diplomacy XP ${h.trainingXP.diplomacy}</span></div><div class="skill-tree">${skillTemplates.map(s=>`<div class="skill-node ${h.learnedSkills.includes(s.id)?"learned":h.skillPoints<s.cost?"locked":""}">${s.icon} ${s.name}<br><small>${s.tree}</small></div>`).join("")}</div><button class="card-button" data-train-hero="${h.id}">Train or Learn Skills</button></article>`).join("")||`<article class="card"><h3>Recruit a hero first</h3><p>Recruited heroes can train with mentors and unlock active abilities.</p></article>`;
 $$("[data-train-hero]").forEach(b=>b.addEventListener("click",()=>openHeroTraining(getHero(b.dataset.trainHero))));
}

function openHeroTraining(h){
 showModal(`<p class="eyebrow">HERO TRAINING</p><h2>${h.portrait} ${h.name}</h2><p class="muted">${h.className}. Skill points: ${h.skillPoints}. Current location: ${h.location}.</p><div class="mentor-grid">${mentorTemplates.map(m=>`<button class="mentor-item" data-mentor="${m.id}"><strong>${m.icon} ${m.name}</strong><small>${m.specialty}<br>${m.location}</small></button>`).join("")}</div><div class="skill-tree">${skillTemplates.map(s=>`<button class="skill-node ${h.learnedSkills.includes(s.id)?"learned":""}" data-learn-skill="${s.id}" ${h.learnedSkills.includes(s.id)||h.skillPoints<s.cost?"disabled":""}>${s.icon} ${s.name}<br><small>${s.cost} point • ${s.text}</small></button>`).join("")}</div>`);
 $$("[data-mentor]").forEach(b=>b.addEventListener("click",()=>startMentorTraining(h,b.dataset.mentor)));
 $$("[data-learn-skill]").forEach(b=>b.addEventListener("click",()=>learnHeroSkill(h,b.dataset.learnSkill)));
}

function startMentorTraining(h,mentorId){
 const m=mentorTemplates.find(x=>x.id===mentorId);
 if(h.trainingStatus){showToast("Hero is already training.");return}
 if(h.location!==m.location){showToast(`${h.name} must travel to ${m.location}.`);return}
 if(m.id==="prometheus"&&!state.titans.find(t=>t.id==="prometheus"&&t.status==="Allied")){showToast("Prometheus must be allied first.");return}
 h.trainingStatus=`Training with ${m.name}`;h.status=h.trainingStatus;state.activeTrainings.push({id:uid("training"),heroId:h.id,mentorId:m.id,yearsLeft:1});addLog(`${h.name} Begins Training`,`${m.name} teaches ${m.specialty}.`);closeModal();renderAll();saveGame(false);
}

function resolveTrainingYear(){
 state.activeTrainings.slice().forEach(t=>{
  t.yearsLeft--;
  if(t.yearsLeft<=0){
   const h=getHero(t.heroId),m=mentorTemplates.find(x=>x.id===t.mentorId);
   h.trainingXP[m.xpType]+=40;h.skillPoints++;h.reputation+=5;h.trainingStatus=null;h.status="Training complete";
   if(!h.learnedSkills.includes(m.skill)){h.learnedSkills.push(m.skill);const skill=skillTemplates.find(s=>s.id===m.skill);if(skill)h.abilities.push(skill.name)}
   if(m.xpType==="combat"){h.strength+=4;h.courage+=4}
   if(m.xpType==="wisdom"){h.wisdom+=6}
   if(m.xpType==="diplomacy"){h.leadership+=5}
   if(m.xpType==="exploration"){h.wisdom+=3;h.energy=100}
   if(m.xpType==="crafting"){h.strength+=2;h.wisdom+=3}
   addLog(`${h.name} Completes Training`,`${m.name} grants a new skill point and mastery.`);
   state.activeTrainings=state.activeTrainings.filter(x=>x.id!==t.id);
  }
 });
}

function learnHeroSkill(h,skillId){
 const s=skillTemplates.find(x=>x.id===skillId);
 if(h.skillPoints<s.cost){showToast("Not enough skill points.");return}
 h.skillPoints-=s.cost;h.learnedSkills.push(s.id);h.abilities.push(s.name);h.reputation+=3;
 if(s.tree==="Warrior"){h.strength+=4}
 if(s.tree==="Commander"){h.leadership+=4}
 if(s.tree==="Explorer"){h.wisdom+=3}
 if(s.tree==="Priest"){h.wisdom+=4}
 if(s.tree==="Diplomat"){h.leadership+=5}
 if(s.tree==="Crafting"){h.wisdom+=3;h.strength+=2}
 if(s.tree==="Titan Hunter"){h.courage+=8}
 addLog(`${h.name} Learns ${s.name}`,s.text);closeModal();renderAll();saveGame(false);
}

function openTrainingLocation(c,type){
 const heroes=state.heroes.filter(h=>h.recruited&&h.location===c.name);
 showModal(`<p class="eyebrow">CITY TRAINING</p><h2>${c.symbol} ${c.name}</h2><p class="muted">Choose a hero currently in this city.</p><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-city-train-hero="${h.id}">${h.portrait} ${h.name}</button>`).join("")||"<p>No recruited heroes are here.</p>"}</div>`);
 $$("[data-city-train-hero]").forEach(b=>b.addEventListener("click",()=>openHeroTraining(getHero(b.dataset.cityTrainHero))));
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
 showModal(`<p class="eyebrow">HERO PROGRESSION</p><h2>${h.portrait} ${h.name}</h2><p class="muted">${h.title}. ${h.className}. Level ${h.level}. Skill points: ${h.skillPoints}. Reputation: ${h.reputation}.</p><div class="stats"><div class="stat"><strong>${h.health}</strong><small>Health</small></div><div class="stat"><strong>${h.energy}</strong><small>Energy</small></div><div class="stat"><strong>${h.xp}</strong><small>XP</small></div></div><div class="skill-grid"><button class="skill-chip ${h.skills.power?"unlocked":""}" data-skill="power">⚔️ Power Training<br><small>+8 Strength</small></button><button class="skill-chip ${h.skills.tactics?"unlocked":""}" data-skill="tactics">🧠 Tactical Genius<br><small>+8 Wisdom</small></button><button class="skill-chip ${h.skills.leadership?"unlocked":""}" data-skill="leadership">👑 Inspiring Leader<br><small>+8 Leadership</small></button><button class="skill-chip" id="move-hero">🗺️ Move Hero<br><small>${h.location}</small></button></div><p class="muted"><strong>Equipment:</strong> ${h.equipment.length?h.equipment.join(", "):"None"}<br><strong>Traits:</strong> ${h.traits.length?h.traits.join(", "):"None"}</p>`);
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
 $$("[data-destination]").forEach(b=>b.addEventListener("click",()=>{const old=h.location;h.location=b.dataset.destination;h.status=`Traveling from ${old}`;if(!h.learnedSkills.includes("swift-passage"))state.favor=Math.max(0,state.favor-5);addLog(`${h.name} Travels`,`${h.name} moves to ${h.location}.`);closeModal();advanceTurn()}));
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
 showModal(`<p class="eyebrow">MULTI-STAGE BOSS BATTLE</p><h2>${h.portrait} ${h.name} vs ${m.icon} ${m.name}</h2><div class="boss-phase">Phase ${m.phase}: ${m.phaseNames[m.phase-1]}</div><div class="stats"><div class="stat"><strong>${Math.round(h.health)}</strong><small>Hero Health</small></div><div class="stat"><strong>${Math.round(m.currentHealth)}</strong><small>Monster Health</small></div><div class="stat"><strong>${m.rage}</strong><small>Monster Rage</small></div></div><div class="battle-log">${battleState.log.slice(-4).map(x=>`<div class="battle-line">${x}</div>`).join("")||'<div class="battle-line">The battle begins.</div>'}</div><div class="action-grid"><button class="action-button" data-boss-action="attack">⚔️ Direct Attack</button><button class="action-button" data-boss-action="weakness">🧠 Exploit Weakness</button><button class="action-button" data-boss-action="ability">🌟 Hero Ability<br><small>${h.abilities.length?h.abilities[0]:"Basic Ability"}</small></button><button class="action-button" data-boss-action="heal" ${h.learnedSkills.includes("healing-prayer")?"":"disabled"}>✨ Healing Prayer</button><button class="action-button" data-boss-action="divine">⚡ Divine Intervention<br><small>20 Favor</small></button><button class="action-button" data-boss-action="defend">🛡️ Defend</button><button class="action-button" data-boss-action="retreat">🏃 Retreat</button></div>`);
 $$("[data-boss-action]").forEach(b=>b.addEventListener("click",()=>resolveBossRound(b.dataset.bossAction)));
}
function resolveBossRound(action){
 const m=state.monsters.find(x=>x.id===battleState.monsterId),h=getHero(battleState.heroId);
 if(action==="retreat"){h.status="Recovering";battleState=null;closeModal();renderAll();return}
 if(action==="divine"&&!spend("favor",20))return;
 let attack=0,defense=0;
 if(action==="attack")attack=h.strength*.55+Math.random()*20;
 if(action==="weakness")attack=h.wisdom*.65+Math.random()*24+(h.skills.tactics?12:0);
 if(action==="ability")attack=(h.strength+h.courage)*.42+18+(h.abilities.length*4);
 if(action==="divine")attack=(h.strength+h.wisdom)*.48+30;
 if(action==="defend"){defense=18+h.courage*.2+(h.learnedSkills.includes("shield-wall")?15:0);attack=8}
 if(action==="heal"){h.health=clamp(h.health+28);attack=5;battleState.log.push(`${h.name} restores health with Healing Prayer.`)}
 if(state.godId==="ares")attack*=1.12;if(h.learnedSkills.includes("power-strike")&&action==="attack")attack+=18;if(h.learnedSkills.includes("monster-tracker"))attack+=12;if(h.learnedSkills.includes("divine-fury")&&m.phase>=2)attack+=25;
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
 m.active=false;m.currentHealth=0;let reward=m.reward*(state.godId==="hades"?1.25:1);state.gold+=Math.round(reward);state.prestige+=35;h.xp+=90;h.trainingXP.combat+=35;h.reputation+=10;h.status="Victorious";h.traits.push(`Slayer of ${m.name}`);h.equipment.push(`${m.name} Trophy`);levelHero(h);
 const c=getCity(m.territory);if(c){c.unrest=clamp(c.unrest-18);c.player=clamp(c.player+10)}
 addLog(`${m.name} Defeated`,`${h.name} wins a legendary three-phase battle.`);generateProceduralMyth(`${h.name}, Slayer of ${m.name}`,`Poets preserve the story of the three-phase battle for future ages.`);state.completedLegends++;if(Math.random()<.45)discoverArtifact();battleState=null;closeModal();renderAll();saveGame(false);showToast(`${m.name} defeated!`);
}
function levelHero(h){
 while(h.xp>=h.level*100){h.xp-=h.level*100;h.level++;h.skillPoints++;h.strength+=3;h.wisdom+=3;h.courage+=3;h.health=100;h.energy=100;addLog(`${h.name} Reaches Level ${h.level}`,"A new skill point is available.")}
}

function renderQuests(){
 $("#quest-count").textContent=`${state.quests.filter(q=>q.status==="Available").length} Available`;
 const sides=state.sideQuests.map(q=>`<article class="card"><div class="card-row"><span class="pill">${q.city}</span><span class="tag gold">Side Quest</span></div><h3>${q.title}</h3><p>Reward: ${q.rewardGold} Gold and ${q.rewardXP} XP.</p><button class="card-button" data-side-quest="${q.id}" ${q.status!=="Available"||!state.heroes.some(h=>h.recruited)?"disabled":""}>Assign Hero</button></article>`).join("");
 const myths=state.mythLog.map(m=>`<article class="card"><div class="card-row"><span class="portrait">📖</span><span class="tag gold">Dynamic Myth</span></div><h3>${m.title}</h3><p>${m.text}</p></article>`).join("");
 $("#quest-list").innerHTML=sides+myths+state.quests.map(q=>`<article class="card"><div class="card-row"><span class="pill">${q.city}</span><span class="tag gold">${q.difficulty}</span></div><h3>${q.name}</h3><p>${q.description}</p><button class="card-button" data-quest="${q.id}" ${q.status!=="Available"||!state.heroes.some(h=>h.recruited)?"disabled":""}>Assign Hero</button></article>`).join("");
 $$("[data-side-quest]").forEach(b=>b.addEventListener("click",()=>assignSideQuest(b.dataset.sideQuest)));$$("[data-quest]").forEach(b=>b.addEventListener("click",()=>assignQuest(b.dataset.quest)));
}

function assignSideQuest(id){
 const q=state.sideQuests.find(x=>x.id===id),heroes=state.heroes.filter(h=>h.recruited);
 showModal(`<p class="eyebrow">SIDE QUEST</p><h2>${q.title}</h2><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-side-hero="${h.id}">${h.portrait} ${h.name}</button>`).join("")}</div>`);
 $$("[data-side-hero]").forEach(b=>b.addEventListener("click",()=>resolveSideQuest(q,getHero(b.dataset.sideHero))));
}
function resolveSideQuest(q,h){
 const chance=55+h.level*5+h.wisdom*.25+h.leadership*.25+(h.learnedSkills.includes("tactical-genius")?12:0);
 if(Math.random()*100<chance){q.status="Completed";state.gold+=q.rewardGold;h.xp+=q.rewardXP;h.trainingXP.exploration+=15;h.reputation+=4;recordGold(q.rewardGold,q.title);levelHero(h);addLog(`${q.title} Completed`,`${h.name} succeeds in ${q.city}.`)}
 else{q.status="Failed";h.health=clamp(h.health-15);addLog(`${q.title} Failed`,`${h.name} returns without the reward.`)}
 closeModal();renderAll();saveGame(false);
}
function assignQuest(id){
 const q=state.quests.find(x=>x.id===id),heroes=state.heroes.filter(h=>h.recruited);
 showModal(`<p class="eyebrow">ASSIGN QUEST</p><h2>${q.name}</h2><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-quest-hero="${h.id}">${h.portrait} ${h.name}<br><small>${q.stat}: ${h[q.stat]}</small></button>`).join("")}</div>`);
 $$("[data-quest-hero]").forEach(b=>b.addEventListener("click",()=>resolveQuest(q,getHero(b.dataset.questHero))));
}
function resolveQuest(q,h){
 let chance=45+h[q.stat]*.45+h.level*4+(getCity(q.city).buildings.includes("academy")?12:0)+(state.questBoost?20:0)+(h.learnedSkills.includes("tactical-genius")?15:0)+(h.learnedSkills.includes("persuasion")?8:0);state.questBoost=false;
 if(state.godId==="athena")chance+=10;
 if(Math.random()*100<chance){q.status="Completed";state.gold+=q.rewardGold;state.prestige+=q.rewardPrestige;h.xp+=65;h.trainingXP.wisdom+=20;h.trainingXP.leadership+=15;h.reputation+=6;h.location=q.city;h.traits.push("Quest Veteran");levelHero(h);addLog(`${q.name} Completed`,`${h.name} succeeds in ${q.city}.`);state.completedLegends++;if(Math.random()<.35)discoverArtifact()}else{q.status="Failed";h.health=clamp(h.health-25);addLog(`${q.name} Failed`,`${h.name} returns wounded.`)}
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



function ensureV100Data(){
 if(state.fateBalance===undefined)state.fateBalance=82;
 if(!state.fateThreads)state.fateThreads=[];
 if(!state.fateConsequences)state.fateConsequences=[];
 if(!state.miracleCooldowns)state.miracleCooldowns={};
 if(!state.olympusVisits)state.olympusVisits=[];
 if(!state.proceduralMyths)state.proceduralMyths=[];
 if(!state.customGods)state.customGods=[];
 if(!state.currentAgeId)state.currentAgeId=getCurrentAge().id;
 if(!state.worldUnits)state.worldUnits=[];
 [...state.heroes,...state.demigods].forEach(x=>{
  if(x.destiny===undefined)x.destiny=randomItem(["Forgotten","Promising","Heroic","Tragic","Royal","Prophetic"]);
  if(x.fateProtection===undefined)x.fateProtection=0;
  if(x.foreseenDeath===undefined)x.foreseenDeath=null;
 });
}


function ensureV110Data(){
 if(!state.civilizations)state.civilizations=civilizationTemplates.map(c=>({...c,allied:false,atWar:false,tradeAgreement:false,memories:[]}));
 if(!state.fleets)state.fleets=[];
 if(!state.discoveries)state.discoveries=discoveryTemplates.map(d=>({...d,found:false,yearFound:null,outcome:null}));
 if(!state.wonders)state.wonders=wonderTemplates.map(w=>({...w,status:"Available",yearsLeft:0,investedGold:0}));
 if(!state.atlantis)state.atlantis={status:"Hidden",relation:0,power:88,stability:70,choiceHistory:[]};
 if(!state.olympicHistory)state.olympicHistory=[];
 if(!state.nextOlympicYear)state.nextOlympicYear=4;
 if(!state.libraryEntries)state.libraryEntries=[];
 if(!state.libraryCategory)state.libraryCategory="all";
 [...state.heroes,...state.demigods].forEach(p=>{if(!p.memories)p.memories=[];if(!p.relationships)p.relationships={}});
 state.kingdoms.forEach(k=>{if(!k.memories)k.memories=[]});
}


function ensureV120Data(){
 if(!state.divineReputation)state.divineReputation={wise:10,merciful:10,honorable:10,heroic:10,ambitious:5,ruthless:0,deceitful:0,tyrannical:0};
 if(!state.divineTitles)state.divineTitles=divineTitleTemplates.map(t=>({...t,holder:null,yearAssigned:null}));
 if(!state.divineAlliances)state.divineAlliances=[];if(!state.divineRivalries)state.divineRivalries=[];
 if(!state.divineMessages)state.divineMessages=[];if(!state.familyDramaEvents)state.familyDramaEvents=[];
 if(!state.titanCouncil)state.titanCouncil={secrecy:80,rebellionStrength:20,infiltrated:false,meetings:[],activeAgendas:[]};
 state.council.forEach(g=>{if(!g.ambition)g.ambition=randomItem(divineAgendaTemplates).name;if(!g.memories)g.memories=[];if(g.trust===undefined)g.trust=g.relationship;if(!g.currentAgenda)g.currentAgenda=randomItem(divineAgendaTemplates).id;if(!g.office)g.office=null});
 state.titans.forEach(t=>{if(!t.memories)t.memories=[];if(t.trust===undefined)t.trust=t.relationship;if(!t.followers)t.followers=10+t.influence;if(!t.territory)t.territory=t.sealCity;if(!t.currentGoal)t.currentGoal=t.goal;if(!t.allies)t.allies=[];if(!t.enemies)t.enemies=[]});
}

function ensureV130Data(){
 if(!state.avatar)state.avatar={form:"divine",energy:100,maxEnergy:100,location:"Mount Olympus",hidden:false,visits:0,reputation:0};
 if(!state.avatarHistory)state.avatarHistory=[];
 if(!state.directWorldEvents)state.directWorldEvents=[];
}


function ensureV130Stage2Data(){
 if(!state.livingOlympus)state.livingOlympus={visits:0,influence:50,events:[],research:[],marketRefreshYear:0};
 if(!state.divineInventory)state.divineInventory=divineItemTemplates.map(i=>({...i,owned:false,equipped:false}));
 if(!state.olympusEventHistory)state.olympusEventHistory=[];
}


function ensureV130Stage3Data(){
 if(!state.underworld)state.underworld={balance:75,soulsArrived:0,soulsJudged:0,elysiumSouls:0,asphodelSouls:0,punishedSouls:0,cerberusLoyalty:55,tartarusSecurity:70,events:[],npc:underworldNpcTemplates.map(n=>({...n,memories:[]})),legacyRecords:[]};
 if(!state.souls)state.souls=[];
 if(!state.spiritHeroes)state.spiritHeroes=[];
}


function ensureV130Stage4Data(){
 if(!state.alerts)state.alerts=[];
 if(!state.alertHistory)state.alertHistory=[];
 if(!state.activityFeed)state.activityFeed=[];
 if(!state.alertFilter)state.alertFilter="active";
 if(state.urgentInterruptId===undefined)state.urgentInterruptId=null;
 if(!state.aiCharacters)state.aiCharacters=[];
 if(!state.aiDecisions)state.aiDecisions=[];
 if(!state.dynamicAchievements)state.dynamicAchievements=[];
 if(!state.notificationSettings)state.notificationSettings={criticalPopups:true,urgentPopups:true,groupRelated:true};
 buildAICharacterRegistry();
}

function buildAICharacterRegistry(){
 const registry=[];
 state.council.forEach(g=>registry.push(makeAIRecord("god",g.name,g.icon,g)));
 state.titans.forEach(t=>registry.push(makeAIRecord("titan",t.name,t.icon,t)));
 state.heroes.filter(h=>h.recruited).forEach(h=>registry.push(makeAIRecord("hero",h.name,h.portrait,h)));
 state.demigods.filter(d=>d.status!=="Mortal Death").forEach(d=>registry.push(makeAIRecord("demigod",d.name,d.icon,d)));
 state.kingdoms.forEach(k=>registry.push(makeAIRecord("ruler",k.ruler,"👑",k)));
 state.underworld.npc.forEach(n=>registry.push(makeAIRecord("underworld",n.name,n.icon,n)));
 registry.forEach(record=>{
  const old=state.aiCharacters.find(x=>x.key===record.key);
  if(old){
   record.personality=old.personality;record.goal=old.goal;record.goalProgress=old.goalProgress;
   record.memories=old.memories;record.opinion=old.opinion;record.fear=old.fear;record.loyalty=old.loyalty;record.lastAction=old.lastAction;
  }
 });
 state.aiCharacters=registry.slice(0,90);
}

function makeAIRecord(type,name,icon,source){
 const key=`${type}:${name}`;
 const sourceMemories=source.memories||[];
 return{
  key,type,name,icon,
  personality:Array.from(new Set([randomItem(aiPersonalityTraits).id,randomItem(aiPersonalityTraits).id])).slice(0,2),
  goal:randomItem(aiGoalTemplates).id,
  goalProgress:rand(5,55),
  memories:sourceMemories.slice(0,8),
  opinion:source.relationship!==undefined?source.relationship:source.trust!==undefined?source.trust:50,
  fear:rand(5,45),
  loyalty:source.loyalty!==undefined?source.loyalty:source.trust!==undefined?source.trust:50,
  lastAction:"Observing the world"
 };
}


function ensureV130Stage5Data(){
 if(!state.legendaryAdventures)state.legendaryAdventures=legendaryAdventureTemplates.map(q=>({...q,status:"Available",currentStage:0,heroId:null,history:[],battle:null}));
 if(!state.adventureLocations)state.adventureLocations=adventureLocationTemplates.map((l,i)=>({...l,discovered:i===0,visits:0,cleared:false}));
 if(!state.legendaryArtifacts)state.legendaryArtifacts=legendaryArtifactTemplates.map(a=>({...a,owned:false}));
 if(!state.dynasties)state.dynasties=[];
 if(!state.adventureHistory)state.adventureHistory=[];
 if(!state.dynasties.length)state.kingdoms.slice(0,5).forEach((k,i)=>state.dynasties.push({id:uid("dynasty"),name:`House of ${["the Lion","the Owl","the Storm","the Sea","Olympus"][i]}`,icon:["🦁","🦉","⚡","🌊","👑"][i],kingdom:k.name,founder:k.ruler,influence:rand(35,70),wealth:rand(30,70),military:rand(30,70),heirs:rand(1,4),status:"Rising",history:[`Founded by ${k.ruler}.`]}));
}

function ensureV140Stage1Data(){
 if(!state.livingWorld)state.livingWorld={citizenFilter:"all",prayers:[],prayerHistory:[],temples:[],wars:[],conversations:[],worldStories:[]};
 if(!state.creatureEcosystem)state.creatureEcosystem=[];
 state.cities.forEach(c=>{
  const people=state.citizens[c.name]||[];
  people.forEach((p,i)=>{
   if(!p.home)p.home=`${c.name} ${randomItem(["Harbor","Agora","Temple","Hill","Old Quarter","Farm District"])}`;
   if(!p.workplace)p.workplace=p.job.includes("Priest")?`${c.name} Temple`:`${c.name} ${randomItem(["Market","Barracks","Fields","Workshop","Palace","Port"])}`;
   if(!p.personality)p.personality=randomItem(["Brave","Compassionate","Ambitious","Honorable","Curious","Loyal","Jealous","Patient"]);
   if(!p.goal)p.goal=randomItem(["Build a family","Become wealthy","Serve a god","Earn military glory","Open a workshop","Become a priest","Travel the seas"]);
   if(!p.friends)p.friends=[];
   if(!p.rivals)p.rivals=[];
   if(!p.memories)p.memories=[];
   if(!p.schedule)p.schedule=["Home at dawn","Work during the day","Temple or agora at evening"];
   if(p.reputation===undefined)p.reputation=rand(10,55);
   if(p.skill===undefined)p.skill=rand(15,70);
   if(p.religion===undefined)p.religion=p.favoriteGod;
   if(p.alive===undefined)p.alive=true;
   if(i>0&&!p.friends.length&&Math.random()<.55)p.friends.push(people[i-1]?.name);
  });
  if(!state.livingWorld.temples.some(t=>t.city===c.name)){
   state.livingWorld.temples.push({
    id:uid("temple"),city:c.name,name:`Temple of ${c.player>c.rival?getGod().name:randomItem(gods).name}`,
    icon:"🏛️",devotion:Math.round(c.player),rivalInfluence:Math.round(c.rival),
    highPriest:null,offerings:rand(10,45),ceremonies:0,shrines:1,status:c.player>c.rival?"Devoted":"Contested",
    history:[`Temple active in ${c.name}.`]
   });
  }
 });
 state.monsters.forEach(m=>{
  if(!state.creatureEcosystem.some(x=>x.monsterId===m.id)){
   state.creatureEcosystem.push({
    id:uid("creature"),monsterId:m.id,name:m.name,icon:m.icon,territory:m.territory,
    behavior:randomItem(creatureBehaviorTemplates),age:rand(8,80),strength:m.strength,
    hunger:rand(20,85),legend:rand(10,60),attitude:"Hostile",nest:Math.random()<.5,
    history:[`First recorded near ${m.territory}.`]
   });
  }
 });
}


function ensureV140Stage2Data(){
 if(!state.divineFamily)state.divineFamily={spouse:null,courtships:[],immortalChildren:[],familyTree:[],familyHistory:[],marriages:[],divorces:[]};
 const df=state.divineFamily,player=getGod();
 if(!df.familyTree.some(x=>x.name===player.name))df.familyTree.push({id:uid("family"),name:player.name,icon:player.icon,type:"Olympian",relation:"Self",parents:[],spouse:null,children:[]});
 state.council.forEach(g=>{if(!df.familyTree.some(x=>x.name===g.name))df.familyTree.push({id:uid("family"),name:g.name,icon:g.icon,type:"Olympian",relation:"Divine Kin",parents:[],spouse:null,children:[]})});
 state.titans.forEach(t=>{if(!df.familyTree.some(x=>x.name===t.name))df.familyTree.push({id:uid("family"),name:t.name,icon:t.icon,type:"Titan",relation:"Titan Kin",parents:[],spouse:null,children:[]})});
 syncDemigodFamilyAwareness();
}
function partnerCandidates(){const p=getGod().name;return [...state.council.filter(g=>g.name!==p).map(g=>({id:"god:"+g.name,name:g.name,icon:g.icon,type:"Olympian",trust:g.trust||50,relationship:g.relationship||50})),...state.titans.filter(t=>t.name!==p).map(t=>({id:"titan:"+t.name,name:t.name,icon:t.icon,type:"Titan",trust:t.trust||40,relationship:t.relationship||40}))]}

function ensureV140Stage3Data(){
 if(!state.divineRelationships)state.divineRelationships={filter:"all",roster:immortalRelationshipRoster.map(x=>({...x,affection:0,trust:45,attraction:x.romanceBias,respect:45,loyalty:40,jealousy:0,status:"Acquaintance",memories:[],lastMetYear:null,proposalHistory:[],autonomousPartner:null})),houses:[],relationshipHistory:[],activeInvestigation:null};
 if(!state.divineRelationships.roster||!state.divineRelationships.roster.length)state.divineRelationships.roster=immortalRelationshipRoster.map(x=>({...x,affection:0,trust:45,attraction:x.romanceBias,respect:45,loyalty:40,jealousy:0,status:"Acquaintance",memories:[],lastMetYear:null,proposalHistory:[],autonomousPartner:null}));
 immortalRelationshipRoster.forEach(base=>{
  if(!state.divineRelationships.roster.some(r=>r.name===base.name)){
   state.divineRelationships.roster.push({...base,affection:0,trust:45,attraction:base.romanceBias,respect:45,loyalty:40,jealousy:0,status:"Acquaintance",memories:[],lastMetYear:null,proposalHistory:[],autonomousPartner:null});
  }
 });
 state.divineRelationships.roster=state.divineRelationships.roster.filter(r=>r.name!==getGod().name);
 syncStage3MarriageFromFamily();
 buildDivineHouses();
}

function syncStage3MarriageFromFamily(){
 const spouse=state.divineFamily?.spouse;
 if(spouse){
  const r=state.divineRelationships.roster.find(x=>x.name===spouse.name);
  if(r){r.status="Married";r.affection=Math.max(r.affection,spouse.affection||70);r.trust=Math.max(r.trust,spouse.trust||65);r.jealousy=spouse.jealousy||0}
 }
}


function ensureV140Stage4Data(){
 const dr=state.divineRelationships;
 if(!dr.npcMarriages)dr.npcMarriages=[];
 if(!dr.npcImmortalChildren)dr.npcImmortalChildren=[];
 if(!dr.npcDemigods)dr.npcDemigods=[];
 if(!dr.npcFamilyEvents)dr.npcFamilyEvents=[];
 syncAutonomousDivineFamilies();
 initNavigationV2();
}

function initNavigationV2(){
 if(window.__navV2Ready)return;
 window.__navV2Ready=true;
 window.__navCategoryMap={
  world:{title:"World",items:[["world-view","🗺️","World Map","Cities, movement & events"],["cities-view","🏙️","Cities","Manage settlements"],["kingdoms-view","👑","Kingdoms","Rulers & politics"],["citizens-view","👥","Citizens","Living mortal population"],["living-wars-view","⚔️","Wars","Dynamic warfare"],["creatures-view","🐉","Creatures","Roaming monsters"],["civilizations-view","🌐","Civilizations","Foreign peoples"]]},
  divine:{title:"Divine",items:[["relationships-view","❤️","Relationships","Gods, Titans & courtship"],["divine-family-view","💍","Divine Family","Marriage & immortal children"],["family-tree-view","🌳","Family Tree","Bloodlines & siblings"],["divine-houses-view","🏛️","Divine Houses","Immortal dynasties"],["living-olympus-view","☁️","Living Olympus","Visit divine locations"],["pantheon-view","⚕️","Pantheon","Gods & divine offices"],["divine-politics-view","⚖️","Politics","Olympian relationships"],["council-view","🏛️","Council","Votes & proposals"]]},
  heroes:{title:"Heroes",items:[["heroes-view","🛡️","Heroes","Champions & equipment"],["training-view","📚","Training","Skills & development"],["quests-view","📜","Quests","Hero missions"],["adventures-view","🗺️","Adventures","Legendary questlines"],["family-view","👶","Demigods","Mortal divine children"],["ascension-view","🌟","Ascension","Immortality votes"]]},
  mythic:{title:"Mythic",items:[["titans-view","⛓️","Titans","Ancient powers"],["titan-council-view","⚫","Titan Council","Titan politics"],["underworld-view","💀","Underworld","Souls & judgment"],["monsters-view","🐉","Monsters","Monster threats"],["fate-view","🧵","Fate","Prophecies & destiny"],["artifacts-view","🏺","Artifacts","Relics & equipment"]]},
  realm:{title:"Realm",items:[["prayers-view","🙏","Prayers","Mortal petitions"],["temples-view","🏛️","Temples","Priests & ceremonies"],["treasury-view","🪙","Treasury","Gold & resources"],["naval-view","⚓","Naval","Fleets & sea routes"],["wonders-view","🏆","Wonders","Great constructions"],["powers-view","⚡","Powers","Divine abilities"],["games-view","🎮","Games","Festivals & contests"]]},
  chronicle:{title:"Chronicle",items:[["living-chronicle-view","📖","Living Chronicle","Year-by-year world history"],["library-view","📚","Library","Library of Fate"],["history-view","📜","History","World chronicle"],["legacy-view","🏺","Legacy","Generational records"],["reputation-view","👁️","Reputation","How the world sees you"],["ages-view","⏳","Ages","World eras"]]},
  alerts:{title:"Alerts",items:[["alerts-view","🔔","Alerts Center","Urgent decisions"],["living-ai-view","🧠","Living AI","Independent characters"]]}
 };
 $$(".nav-category").forEach(btn=>btn.onclick=()=>openNavigationSheet(btn.dataset.navCategory));
 const close=$("#nav-sheet-close");if(close)close.onclick=closeNavigationSheet;
}

function openNavigationSheet(category){
 const map=window.__navCategoryMap?.[category];if(!map)return;
 const sheet=$("#nav-sheet");if(!sheet)return;
 $("#nav-sheet-title").textContent=map.title;
 $("#nav-sheet-eyebrow").textContent=`${map.title.toUpperCase()} SYSTEMS`;
 const grid=$("#nav-sheet-grid");
 grid.innerHTML=map.items.filter(([view])=>document.getElementById(view)).map(([view,icon,title,desc])=>`<button class="nav-sheet-item" data-nav-view="${view}"><span>${icon}</span><div><strong>${title}</strong><small>${desc}</small></div></button>`).join("");
 $$("[data-nav-view]").forEach(b=>b.onclick=()=>{activateView(b.dataset.navView);closeNavigationSheet()});
 $$(".nav-category").forEach(b=>b.classList.toggle("active",b.dataset.navCategory===category));
 sheet.classList.remove("hidden");
}
function closeNavigationSheet(){$("#nav-sheet")?.classList.add("hidden")}

function syncAutonomousDivineFamilies(){
 const dr=state.divineRelationships;
 dr.npcMarriages.forEach(m=>{
  const a=dr.roster.find(r=>r.name===m.a),b=dr.roster.find(r=>r.name===m.b);
  if(a){a.autonomousPartner=m.b;if(a.status!=="Married")a.status="Committed"}
  if(b){b.autonomousPartner=m.a;if(b.status!=="Married")b.status="Committed"}
  [a,b].filter(Boolean).forEach(r=>{
   let node=state.divineFamily.familyTree.find(x=>x.name===r.name);
   if(!node){node={id:uid("family"),name:r.name,icon:r.icon,type:r.type,relation:"Divine Kin",parents:[],spouse:null,children:[]};state.divineFamily.familyTree.push(node)}
   node.spouse=r.name===m.a?m.b:m.a;
  });
 });
 dr.npcImmortalChildren.forEach(c=>{
  if(!state.divineFamily.familyTree.some(x=>x.name===c.name)){
   state.divineFamily.familyTree.push({id:uid("family"),name:c.name,icon:c.icon,type:"Immortal Child",relation:"Extended Divine Kin",parents:[c.parentA,c.parentB],spouse:null,children:[]});
  }
  [c.parentA,c.parentB].forEach(p=>{const node=state.divineFamily.familyTree.find(x=>x.name===p);if(node&&!node.children.includes(c.name))node.children.push(c.name)});
 });
 dr.npcDemigods.forEach(d=>{
  if(!state.divineFamily.familyTree.some(x=>x.name===d.name)){
   state.divineFamily.familyTree.push({id:uid("family"),name:d.name,icon:d.icon,type:"Demigod",relation:`Child of ${d.divineParent}`,parents:[d.divineParent,d.mortalParent],spouse:null,children:[]});
  }
 });
}

function pantheonGenerationsYearTurn(){
 const dr=state.divineRelationships, roster=dr.roster;

 if(roster.length>=2&&Math.random()<.38){
  const available=roster.filter(r=>r.status!=="Married");
  if(available.length>=2){
   const [a,b]=available.slice().sort(()=>Math.random()-.5).slice(0,2);
   if(a&&b&&a.name!==b.name){
    const event=randomItem(autonomousDivineRelationshipActions);
    a.memories.unshift(`Year ${state.year}: ${event} with ${b.name}.`);
    b.memories.unshift(`Year ${state.year}: ${event} with ${a.name}.`);
    a.affection=clamp(a.affection+rand(2,8));b.affection=clamp(b.affection+rand(2,8));
    a.trust=clamp(a.trust+rand(1,6));b.trust=clamp(b.trust+rand(1,6));
    a.attraction=clamp(a.attraction+rand(0,4));b.attraction=clamp(b.attraction+rand(0,4));
    const existing=dr.npcMarriages.find(m=>(m.a===a.name&&m.b===b.name)||(m.a===b.name&&m.b===a.name));
    const bond=(a.affection+a.trust+a.attraction+b.affection+b.trust+b.attraction)/6;
    if(!existing&&bond>=58&&Math.random()<.18){
      dr.npcMarriages.unshift({id:uid("npcMarriage"),a:a.name,b:b.name,year:state.year,type:a.type==="Titan"||b.type==="Titan"?"Mixed/Titan Union":"Olympian Union",status:"Married"});
      a.autonomousPartner=b.name;b.autonomousPartner=a.name;a.status="Committed";b.status="Committed";
      dr.npcFamilyEvents.unshift({year:state.year,type:"Marriage",text:`${a.name} and ${b.name} married.`});
      createAlert({priority:"important",category:"gods",icon:"💍",title:`Divine Marriage: ${a.name} & ${b.name}`,description:"Two immortals married without player intervention. Their union can produce immortal children and reshape divine politics.",location:"Mount Olympus",targetId:a.id,years:3});
      addLibraryEntry("people",`Marriage of ${a.name} & ${b.name}`,`The immortals married in Year ${state.year}.`);
      state.livingChronicle.campaignStats.marriages++;
      recordChronicleEvent({icon:"💍",title:`Divine Marriage: ${a.name} & ${b.name}`,text:"Two immortals formed a new union.",category:"marriages",severity:"mythic",major:true,actor:a.name,target:b.name,location:"Mount Olympus",tags:["gods-titans"]});
    }
   }
  }
 }

 dr.npcMarriages.filter(m=>m.status==="Married").forEach(m=>{
  if(Math.random()<.14){
   const a=roster.find(r=>r.name===m.a),b=roster.find(r=>r.name===m.b);if(!a||!b)return;
   const name=randomUniqueAutonomousChildName(),domain=deriveAutonomousChildDomain(a,b);
   const child={id:uid("npcImmortalChild"),name,icon:randomItem(["✨","🌟","⚡","🌙","🔥","🌊","🦉","🌸"]),parentA:a.name,parentB:b.name,domain,age:0,stage:"Divine Infant",power:rand(20,42),wisdom:rand(20,42),loyalty:65,house:`House of ${a.name} & ${b.name}`,memories:[`Born in Year ${state.year}.`]};
   dr.npcImmortalChildren.push(child);
   dr.npcFamilyEvents.unshift({year:state.year,type:"Immortal Birth",text:`${child.name}, child of ${a.name} and ${b.name}, was born.`});
   createAlert({priority:"important",category:"family",icon:child.icon,title:`Immortal Child Born: ${child.name}`,description:`${a.name} and ${b.name} welcomed an immortal child destined for the domain of ${domain}.`,location:"Mount Olympus",targetId:child.id,years:3});
   state.livingChronicle.campaignStats.births++;
   recordChronicleEvent({icon:child.icon,title:`Immortal Birth: ${child.name}`,text:`Child of ${a.name} and ${b.name}, destined for ${domain}.`,category:"births",severity:"mythic",major:true,actor:a.name,target:child.name,location:"Mount Olympus",tags:["divine-family","gods-titans"]});
  }
 });

 roster.filter(r=>r.type==="Olympian").forEach(g=>{
  if(Math.random()<.055){
   const mortal=randomItem(autonomousMortalRomanceNames),childName=randomUniqueAutonomousChildName(),city=randomItem(state.cities).name;
   const child={id:uid("npcDemigod"),name:childName,icon:"👤",divineParent:g.name,mortalParent:mortal,city,age:0,status:"Demigod Child",fame:0,reputation:10,corruption:0,domainPotential:randomItem(divineDomainPool),memories:[`Born in ${city} in Year ${state.year}.`]};
   dr.npcDemigods.push(child);
   dr.npcFamilyEvents.unshift({year:state.year,type:"Demigod Birth",text:`${g.name} had a demigod child, ${childName}, with mortal ${mortal}.`});
   createAlert({priority:"important",category:"family",icon:"👶",title:`New Demigod: ${childName}`,description:`${g.name} has had a demigod child with ${mortal} of ${city}. The child is now part of the expanded divine family network.`,location:city,targetId:child.id,years:3});
   state.livingChronicle.campaignStats.births++;
   recordChronicleEvent({icon:"👶",title:`Demigod Born: ${childName}`,text:`Child of ${g.name} and mortal ${mortal}.`,category:"births",severity:"normal",actor:g.name,target:childName,location:city,tags:["divine-family"]});
  }
 });

 dr.npcImmortalChildren.forEach(c=>{c.age++;c.stage=c.age<3?"Divine Infant":c.age<8?"Divine Child":c.age<14?"Divine Youth":c.age<20?"Young God":"Mature Immortal";c.power+=rand(0,2);c.wisdom+=rand(0,2)});
 dr.npcDemigods.forEach(d=>{d.age++;if(d.age>=8&&d.status==="Demigod Child")d.status="Young Demigod";if(d.age>=16&&d.status!=="Immortal")d.status="Adult Demigod";if(d.age>=16){d.fame+=rand(0,3);d.reputation+=rand(0,3)}});
 syncAutonomousDivineFamilies();
}

function randomUniqueAutonomousChildName(){
 const used=new Set([...state.divineFamily.immortalChildren.map(c=>c.name),...state.demigods.map(d=>d.name),...state.divineRelationships.npcImmortalChildren.map(c=>c.name),...state.divineRelationships.npcDemigods.map(c=>c.name)]);
 const available=autonomousDivineChildNames.filter(n=>!used.has(n));
 return available.length?randomItem(available):`${randomItem(autonomousDivineChildNames)} ${rand(2,99)}`;
}

function deriveAutonomousChildDomain(a,b){
 const pools={Zeus:["Storms","Kingship","Sky Oaths"],Poseidon:["Deep Seas","Earthshaking","Tides"],Athena:["Strategy","Wisdom","Craft"],Aphrodite:["Love","Beauty","Desire"],Ares:["Battle","Courage","War"],Apollo:["Prophecy","Music","Light"],Artemis:["Moon","Wild Beasts","Hunting"],Hades:["Shadows","Wealth Below","Spirits"],Hermes:["Travel","Messages","Trade"],Hephaestus:["Forgecraft","Fire","Invention"],Hera:["Marriage","Queenship","Family"],Kronos:["Time","Harvest","Ancient Rule"],Rhea:["Motherhood","Mountains","Generations"],Oceanus:["World River","Oceans","Currents"],Themis:["Justice","Sacred Law","Oaths"],Mnemosyne:["Memory","Song","History"],Prometheus:["Forethought","Fire","Mortal Progress"],Atlas:["Endurance","Stars","World Pillars"]};
 return randomItem([...(pools[a.name]||[]),...(pools[b.name]||[]),...divineDomainPool]);
}

function renderAutonomousFamilySections(){
 const houses=state.divineRelationships.houses||[];
 state.divineRelationships.npcMarriages.forEach(m=>{
  const name=`House of ${m.a} & ${m.b}`;
  let h=houses.find(x=>x.name===name);
  if(!h){h={id:uid("divineHouse"),name,icon:"🏛️",founders:[m.a,m.b],type:m.type,children:[],demigods:[],influence:45,unity:65,history:[`Founded in Year ${m.year}.`]};houses.push(h)}
  h.children=state.divineRelationships.npcImmortalChildren.filter(c=>(c.parentA===m.a&&c.parentB===m.b)||(c.parentA===m.b&&c.parentB===m.a)).map(c=>c.name);
  h.demigods=state.divineRelationships.npcDemigods.filter(d=>d.divineParent===m.a||d.divineParent===m.b).map(d=>d.name);
  h.influence=clamp(45+h.children.length*5+h.demigods.length*3);
 });
 state.divineRelationships.houses=houses;
}



function ensureV140Stage7Data(){
 if(!state.divineRule)state.divineRule={courtRequests:[],judgments:[],favors:[],secrets:[],rumors:[],regionalMyths:[],dynamicArtifacts:[],ancestorSpirits:[],mortalDynasties:[],parentingHistory:[],myths:[]};
 const d=state.divineRule;["courtRequests","judgments","favors","secrets","rumors","regionalMyths","dynamicArtifacts","ancestorSpirits","mortalDynasties","parentingHistory","myths"].forEach(k=>{if(!d[k])d[k]=[]});
 seedRegionalMyths();patchStage7Navigation();syncStage7Ancestors();syncStage7MortalDynasties();
}
function patchStage7Navigation(){
 const map=window.__navCategoryMap;if(!map)return;
 if(map.divine&&!map.divine.items.some(x=>x[0]==="divine-court-view"))map.divine.items.push(["divine-court-view","👑","Divine Court","Audiences & judgments"]);
 if(map.chronicle&&!map.chronicle.items.some(x=>x[0]==="secrets-view"))map.chronicle.items.push(["secrets-view","🤫","Secrets & Rumors","Hidden knowledge & regional myths"]);
}
function seedRegionalMyths(){
 state.cities.forEach(c=>{
  if(!state.divineRule.regionalMyths.some(r=>r.city===c.name))state.divineRule.regionalMyths.push({city:c.name,mercy:50,fear:20,worship:Math.round(c.player||50),story:`The people of ${c.name} are still deciding what kind of god you are.`,events:[]});
 });
}
function createCourtRequest(){
 if(state.divineRule.courtRequests.filter(r=>r.status==="Waiting").length>=5||Math.random()>.42)return;
 const people=stage6AllPeople();
 const rulers=(state.kingdoms||[]).map(k=>({name:k.ruler,icon:"👑",kind:"Ruler",ref:k}));
 const priests=Object.entries(state.citizens||{}).flatMap(([city,ps])=>ps.filter(p=>p.job?.includes("Priest")||p.job?.includes("Oracle")).map(p=>({name:p.name,icon:"🙏",kind:"Priest",city,ref:p})));
 const pool=[...people,...rulers,...priests];if(!pool.length)return;
 const p=randomItem(pool),types=[
  {type:"blessing",icon:"✨",title:"Request for Divine Blessing",text:`${p.name} asks for your blessing before a dangerous undertaking.`},
  {type:"judgment",icon:"⚖️",title:"Dispute Before the God",text:`${p.name} asks you to judge a serious dispute.`},
  {type:"favor",icon:"🤝",title:"A Favor Is Requested",text:`${p.name} asks for help and promises to remember the debt.`},
  {type:"secret",icon:"🤫",title:"A Secret Audience",text:`${p.name} claims to know something that could change a divine relationship.`},
  {type:"family",icon:"🌳",title:"Family Petition",text:`${p.name} asks you to intervene in a family matter.`},
  {type:"punishment",icon:"⚡",title:"Call for Punishment",text:`${p.name} asks you to curse or punish a rival.`}
 ];
 const t=randomItem(types),r={id:uid("court"),speaker:p.name,icon:p.icon||"👤",kind:p.kind||"Mortal",type:t.type,title:t.title,text:t.text,status:"Waiting",year:state.year,location:p.city||"Mount Olympus"};
 state.divineRule.courtRequests.unshift(r);
 createAlert({priority:"important",category:"gods",icon:r.icon,title:`Audience Requested: ${r.speaker}`,description:r.text,location:r.location,targetId:r.id,years:3});
}
function resolveCourtRequest(id,choice){
 const r=state.divineRule.courtRequests.find(x=>x.id===id);if(!r)return;
 let outcome="",tone="success";
 if(choice==="grant"){state.favor+=5;state.prestige+=4;outcome=`You granted ${r.speaker}'s request.`;addFavorDebt(r.speaker,1,"Owes You")}
 if(choice==="refuse"){outcome=`You refused ${r.speaker}'s request.`;tone="danger"}
 if(choice==="judge"){outcome=`You issued a public judgment in ${r.speaker}'s case.`;state.divineReputation.wise=(state.divineReputation.wise||0)+2;state.divineRule.judgments.unshift({year:state.year,speaker:r.speaker,result:"Judged",text:r.text})}
 if(choice==="forgive"){outcome=`You chose mercy and forgiveness.`;state.divineReputation.merciful=(state.divineReputation.merciful||0)+3}
 if(choice==="punish"){outcome=`You answered with divine punishment.`;state.divineReputation.ruthless=(state.divineReputation.ruthless||0)+3;tone="danger"}
 if(choice==="secret"){outcome=`You heard the secret and kept it hidden.`;discoverStage7Secret(r.speaker)}
 r.status="Resolved";r.outcome=outcome;
 recordAfterAction({icon:r.icon,title:`Divine Court: ${r.speaker}`,summary:outcome,category:r.type==="family"?"divine-family":"council",location:r.location,target:r.speaker,changes:[{label:"Decision",value:choice},{label:"Prestige",value:`${state.prestige}`},{label:"Favor",value:`${state.favor}`}],severity:tone});
 renderAll();saveGame(false);
}
function addFavorDebt(name,amount,status="Owes You"){
 let f=state.divineRule.favors.find(x=>x.name===name&&x.status===status);
 if(!f){f={id:uid("favorDebt"),name,amount:0,status,history:[]};state.divineRule.favors.push(f)}
 f.amount+=amount;f.history.unshift(`Year ${state.year}: Debt changed by ${amount}.`);
}
function callInFavor(id){
 const f=state.divineRule.favors.find(x=>x.id===id);if(!f||f.amount<=0)return;
 f.amount--;state.prestige+=6;state.favor+=8;f.history.unshift(`Year ${state.year}: A favor was called in.`);
 recordAfterAction({icon:"🤝",title:`Favor Called In: ${f.name}`,summary:`${f.name} repaid one divine obligation.`,category:"gods-titans",target:f.name,changes:[{label:"Remaining Debt",value:`${f.amount}`},{label:"Favor",value:`${state.favor}`,tone:"positive"},{label:"Prestige",value:`${state.prestige}`,tone:"positive"}],severity:"success"});
 renderAll();saveGame(false);
}
function discoverStage7Secret(source){
 const people=stage6AllPeople().filter(p=>p.name!==source);if(!people.length)return;
 const subject=randomItem(people),templates=[
  `${subject.name} is secretly supporting a rival divine house.`,
  `${subject.name} has concealed a forbidden relationship.`,
  `${subject.name} knows the true parentage of a demigod.`,
  `${subject.name} has promised aid to a Titan faction.`,
  `${subject.name} is hiding an artifact from the Pantheon.`,
  `${subject.name} intends to oppose an upcoming ascension.`
 ];
 state.divineRule.secrets.unshift({id:uid("secret"),source,subject:subject.name,text:randomItem(templates),status:"Secret",year:state.year,spread:0});
}
function resolveSecret(id,action){
 const s=state.divineRule.secrets.find(x=>x.id===id);if(!s)return;
 if(action==="reveal"){s.status="Public";s.spread=100;state.prestige+=3;recordChronicleEvent({icon:"📣",title:`Secret Revealed: ${s.subject}`,text:s.text,category:"gods-titans",severity:"mythic",major:true,target:s.subject,tags:["legends"]})}
 if(action==="conceal"){s.status="Protected";state.divineReputation.honorable=(state.divineReputation.honorable||0)+1}
 if(action==="exploit"){s.status="Exploited";state.prestige+=8;state.divineReputation.ambitious=(state.divineReputation.ambitious||0)+2;addFavorDebt(s.subject,1,"Owes You")}
 if(action==="verify"){s.spread=Math.min(100,s.spread+25);s.text+=Math.random()<.75?" Evidence supports the claim.":" New evidence makes the claim doubtful."}
 recordAfterAction({icon:"🤫",title:`Secret: ${s.subject}`,summary:`You chose to ${action} the information.`,category:"gods-titans",target:s.subject,changes:[{label:"Status",value:s.status},{label:"Spread",value:`${s.spread}%`}],severity:action==="reveal"?"mythic":"normal"});
 renderAll();saveGame(false);
}
function rumorTurn(){
 state.divineRule.secrets.filter(s=>s.status==="Secret"||s.status==="Public").forEach(s=>{
  if(s.status==="Secret"&&Math.random()<.12){s.spread+=rand(5,20);if(s.spread>=60){s.status="Rumor";state.divineRule.rumors.unshift({id:uid("rumor"),subject:s.subject,text:s.text,year:state.year,belief:rand(35,75)})}}
 });
}
function stage7ParentingTurn(){
 const kids=[...(state.demigods||[]),...(state.divineFamily?.immortalChildren||[])];
 kids.forEach(k=>{
  if(k.age>=6&&Math.random()<.10){
   const trait=randomItem(["Brave","Compassionate","Proud","Curious","Ambitious","Patient","Rebellious","Loyal"]);
   k.traits=k.traits||[];if(!k.traits.includes(trait))k.traits.push(trait);
   state.divineRule.parentingHistory.unshift({year:state.year,child:k.name,event:`Developed the trait ${trait}.`});
  }
 });
}
function stage7ParentActionById(type,id,action){
 const child=type==="immortal"?state.divineFamily.immortalChildren.find(c=>c.id===id):state.demigods.find(c=>c.id===id);
 if(!child)return;
 stage7ParentAction(child,action);
}
function stage7ParentAction(child,action){
 child.memories=child.memories||[];
 if(action==="mentor"){child.wisdom=(child.wisdom||30)+5;child.loyalty=clamp((child.loyalty||50)+5)}
 if(action==="discipline"){child.courage=(child.courage||30)+3;child.loyalty=clamp((child.loyalty||50)-3)}
 if(action==="gift"){if(!spend("gold",20))return;child.reputation=(child.reputation||0)+5;child.loyalty=clamp((child.loyalty||50)+7)}
 if(action==="favor"){child.reputation=(child.reputation||0)+8;child.familyTrust=clamp((child.familyTrust||50)+5)}
 if(action==="quest"){state.sideQuests.push({id:uid("side"),city:child.city||"Mount Olympus",title:`Trial of ${child.name}`,rewardGold:45,rewardXP:40,status:"Available"})}
 child.memories.unshift(`Year ${state.year}: ${getGod().name} chose to ${action} me.`);
 state.divineRule.parentingHistory.unshift({year:state.year,child:child.name,event:`Parent chose ${action}.`});
 recordAfterAction({icon:child.icon||"👶",title:`Parenting: ${child.name}`,summary:`You chose to ${action} your child.`,category:"divine-family",target:child.name,changes:[{label:"Loyalty",value:`${child.loyalty||child.familyTrust||50}`},{label:"Reputation",value:`${child.reputation||0}`}],severity:"success"});
 renderAll();saveGame(false);
}
function stage7SuccessionTurn(){
 const houses=state.divineRelationships?.houses||[];
 houses.forEach(h=>{
  const members=[...(h.children||[]),...(h.demigods||[])];if(members.length<2||Math.random()>.08)return;
  const [a,b]=members.slice().sort(()=>Math.random()-.5).slice(0,2);if(!a||!b)return;
  const title=`Succession Crisis in ${h.name}`,text=`${a} and ${b} both claim the right to lead the next generation of ${h.name}.`;
  const saga=createStage6Saga({kind:"feud",icon:"👑",title,participants:[a,b],summary:text});
  addSagaChapter(saga,"The Rival Claims",text,"👑","divine-family");
  createAlert({priority:"urgent",category:"family",icon:"👑",title,description:text,location:"Mount Olympus",targetId:saga.id,years:2});
 });
}
function createDynamicArtifactFromLegend(){
 const completed=(state.fateSagas?.sagas||[]).filter(s=>s.status==="Legendary"||s.status==="Completed");
 if(!completed.length||Math.random()>.10)return;
 const saga=randomItem(completed);if(state.divineRule.dynamicArtifacts.some(a=>a.sagaId===saga.id))return;
 const names=[`Blade of ${saga.title.replace(/^The /,"")}`,`Crown of ${saga.participants[0]||"Legends"}`,`Oathstone of Year ${saga.startedYear}`,`Shield of ${saga.participants[0]||"the Saga"}`];
 const a={id:uid("dynRelic"),name:randomItem(names),icon:randomItem(["🗡️","👑","💎","🛡️","🏺"]),sagaId:saga.id,power:randomItem(["Legacy","Protection","Authority","Fate","Vengeance"]),owners:[],history:[`Created from the legend ${saga.title}.`],year:state.year};
 state.divineRule.dynamicArtifacts.unshift(a);addLibraryEntry("relics",a.name,`A legendary artifact born from ${saga.title}.`);
 recordChronicleEvent({icon:a.icon,title:`Legendary Artifact Created: ${a.name}`,text:`The saga ${saga.title} has given birth to a relic of ${a.power}.`,category:"legends",severity:"mythic",major:true,tags:["legends"]});
}
function syncStage7MortalDynasties(){
 const all=[...(state.demigods||[]),...(state.divineRelationships?.npcDemigods||[])];
 all.filter(d=>d.age>=18).forEach(d=>{
  if(!state.divineRule.mortalDynasties.some(x=>x.founder===d.name)&&d.stage6AdultLife?.includes("married")){
   state.divineRule.mortalDynasties.push({id:uid("mDyn"),name:`Blood of ${d.name}`,founder:d.name,divineAncestor:d.divineParent||getGod().name,city:d.city||"Greece",generations:1,prestige:d.reputation||20,heirs:rand(1,3),history:[`Founded in Year ${state.year}.`]});
  }
 });
}
function mortalDynastyTurn(){
 syncStage7MortalDynasties();
 state.divineRule.mortalDynasties.forEach(d=>{if(Math.random()<.14){d.heirs++;d.prestige+=rand(1,5)}if(Math.random()<.05){d.generations++;d.history.unshift(`Year ${state.year}: A new generation inherited the divine claim.`)}});
}
function syncStage7Ancestors(){
 const souls=state.souls||[];
 souls.filter(s=>(s.glory||0)>=45).forEach(s=>{
  if(!state.divineRule.ancestorSpirits.some(a=>a.name===s.name))state.divineRule.ancestorSpirits.push({id:uid("ancestor"),name:s.name,icon:s.icon||"👻",city:s.city,glory:s.glory,advice:randomItem(["war","family","fate","leadership"]),year:state.year});
 });
}
function regionalMythTurn(){
 seedRegionalMyths();
 state.divineRule.regionalMyths.forEach(r=>{
  const c=getCity(r.city);if(!c)return;r.worship=Math.round(c.player||r.worship);r.mercy=clamp(r.mercy+rand(-2,2));r.fear=clamp(r.fear+rand(-2,2));
  if(r.worship>70&&r.mercy>55)r.story=`In ${r.city}, you are praised as a generous protector who answers the worthy.`;
  else if(r.fear>60)r.story=`In ${r.city}, parents warn children not to attract your divine anger.`;
  else if(r.worship<30)r.story=`In ${r.city}, old temples whisper that your influence is fading.`;
  else r.story=`The people of ${r.city} tell conflicting stories about your divine rule.`;
 });
}
function createMythFromSaga(){
 const sagas=(state.fateSagas?.sagas||[]).filter(s=>(s.status==="Legendary"||s.status==="Completed")&&!state.divineRule.myths.some(m=>m.sagaId===s.id));
 if(!sagas.length||Math.random()>.18)return;
 const s=randomItem(sagas),chapters=[...s.chapters].reverse();
 const text=`${s.title} began in Year ${s.startedYear}. ${s.summary} ${chapters.slice(0,4).map(c=>c.text).join(" ")} By Year ${s.lastYear}, the story had become part of living mythology.`;
 const m={id:uid("myth"),sagaId:s.id,title:s.title,icon:s.icon,text,year:state.year,participants:[...s.participants]};
 state.divineRule.myths.unshift(m);addLibraryEntry("myths",m.title,m.text);
 recordChronicleEvent({icon:m.icon,title:`A Myth Is Born: ${m.title}`,text:m.text,category:"legends",severity:"mythic",major:true,tags:["legends"]});
}
function stage7YearTurn(){createCourtRequest();rumorTurn();stage7ParentingTurn();stage7SuccessionTurn();createDynamicArtifactFromLegend();mortalDynastyTurn();syncStage7Ancestors();regionalMythTurn();createMythFromSaga()}
function renderDivineCourt(){
 if(!document.getElementById("divine-court-view")||!state.divineRule)return;
 const waiting=state.divineRule.courtRequests.filter(r=>r.status==="Waiting");
 $("#court-request-count").textContent=`${waiting.length} Waiting`;
 $("#court-summary").innerHTML=`<p class="eyebrow">PERSONAL DIVINE RULE</p><h3>${waiting.length} audiences await judgment</h3><p>Gods, Titans, rulers, priests, heroes, demigods, and family members can petition you directly.</p>`;
 $("#court-request-list").innerHTML=waiting.length?waiting.map(r=>`<article class="card court-card"><div class="card-row"><div class="council-head"><span class="portrait">${r.icon}</span><div><h3>${r.title}</h3><p>${r.speaker} • ${r.kind} • ${r.location}</p></div></div></div><p>${r.text}</p><div class="court-action-grid"><button class="court-action" onclick="resolveCourtRequest('${r.id}','grant')">✨ Grant Request</button><button class="court-action" onclick="resolveCourtRequest('${r.id}','judge')">⚖️ Judge</button><button class="court-action" onclick="resolveCourtRequest('${r.id}','forgive')">🕊️ Forgive</button><button class="court-action" onclick="resolveCourtRequest('${r.id}','punish')">⚡ Punish</button><button class="court-action" onclick="resolveCourtRequest('${r.id}','secret')">🤫 Hear Secret</button><button class="court-action" onclick="resolveCourtRequest('${r.id}','refuse')">🌑 Refuse</button></div></article>`).join(""):'<article class="card"><h3>No one waits before your throne</h3><p>New audiences will appear as the world develops.</p></article>';
 $("#favor-debt-list").innerHTML=state.divineRule.favors.length?state.divineRule.favors.map(f=>`<article class="card favor-card"><div class="card-row"><div><h3>🤝 ${f.name}</h3><p>${f.status}</p></div><span class="tag gold">${f.amount} Favor${f.amount===1?"":"s"}</span></div>${f.status==="Owes You"&&f.amount>0?`<button class="card-button" onclick="callInFavor('${f.id}')">Call In Favor</button>`:""}</article>`).join(""):'<article class="card"><p>No divine debts are currently owed.</p></article>';
}
function renderSecrets(){
 if(!document.getElementById("secrets-view")||!state.divineRule)return;
 $("#secret-count").textContent=`${state.divineRule.secrets.length} Known`;
 $("#secret-summary").innerHTML=`<p class="eyebrow">INFORMATION IS POWER</p><h3>Secrets can be concealed, verified, revealed, or exploited</h3><p>Rumors spread over time, and different regions build their own stories about your reign.</p>`;
 $("#secret-list").innerHTML=state.divineRule.secrets.length?state.divineRule.secrets.map(s=>`<article class="card secret-card"><div class="card-row"><div><h3>🤫 ${s.subject}</h3><p>${s.text}</p></div><span class="secret-level">${s.status}</span></div><p class="muted">Source: ${s.source} • Spread ${s.spread}%</p><div class="secret-action-grid"><button class="secret-action" onclick="resolveSecret('${s.id}','verify')">🔎 Verify</button><button class="secret-action" onclick="resolveSecret('${s.id}','conceal')">🔒 Conceal</button><button class="secret-action" onclick="resolveSecret('${s.id}','reveal')">📣 Reveal</button><button class="secret-action" onclick="resolveSecret('${s.id}','exploit')">👑 Exploit</button></div></article>`).join(""):'<article class="card"><p>No significant secrets are known yet.</p></article>';
 $("#regional-myth-list").innerHTML=state.divineRule.regionalMyths.map(r=>`<article class="card regional-card"><div class="card-row"><div><h3>🏛️ ${r.city}</h3><p>Worship ${r.worship} • Mercy ${r.mercy} • Fear ${r.fear}</p></div></div><p class="regional-belief">“${r.story}”</p></article>`).join("");
}
function renderStage7Extras(){renderDivineCourt();renderSecrets()}

function ensureV140Stage6Data(){
 if(!state.fateSagas)state.fateSagas={prophecies:[],sagas:[],bloodlines:[],delayedConsequences:[],familyDrama:[],lastProphecyYear:0};
 const fs=state.fateSagas;
 ["prophecies","sagas","bloodlines","delayedConsequences","familyDrama"].forEach(k=>{if(!fs[k])fs[k]=[]});
 if(fs.lastProphecyYear===undefined)fs.lastProphecyYear=0;
 syncStage6Bloodlines();
 patchStage6Navigation();
}
function patchStage6Navigation(){
 const map=window.__navCategoryMap;if(!map)return;
 if(map.chronicle&&!map.chronicle.items.some(x=>x[0]==="sagas-view"))map.chronicle.items.unshift(["sagas-view","🧵","Living Sagas","Generations & consequences"]);
 if(map.mythic&&!map.mythic.items.some(x=>x[0]==="sagas-view"))map.mythic.items.push(["sagas-view","🔮","Prophecies","Fate across generations"]);
}
function stage6AllPeople(){
 const dr=state.divineRelationships||{};
 return [
  ...(dr.roster||[]).map(x=>({name:x.name,icon:x.icon||"⚡",kind:x.type||"Immortal",age:null,ref:x})),
  ...(state.demigods||[]).map(x=>({name:x.name,icon:x.icon||"👤",kind:"Demigod",age:x.age,ref:x})),
  ...(dr.npcDemigods||[]).map(x=>({name:x.name,icon:x.icon||"👤",kind:"Demigod",age:x.age,ref:x})),
  ...(state.divineFamily?.immortalChildren||[]).map(x=>({name:x.name,icon:x.icon||"✨",kind:"Immortal Child",age:x.age,ref:x})),
  ...(dr.npcImmortalChildren||[]).map(x=>({name:x.name,icon:x.icon||"✨",kind:"Immortal Child",age:x.age,ref:x}))
 ];
}
function stage6UniqueSagaTitle(kind,a,b){
 const titles={
  prophecy:[`The Thread of ${a}`,`The Oracle of ${a}`,`The Fate of ${a}`],
  feud:[`The Feud of ${a} and ${b}`,`The Broken Oath of ${a}`,`The Rivalry of ${a} and ${b}`],
  love:[`The Forbidden Love of ${a} and ${b}`,`The Sacred Bond of ${a} and ${b}`],
  bloodline:[`The Children of ${a}`,`The Bloodline of ${a}`],
  titan:[`The Titan Reckoning`,`The Chains of the Old Gods`]
 };
 return randomItem(titles[kind]||[`The Saga of ${a}`]);
}
function createStage6Saga({kind="prophecy",icon="🧵",title,participants=[],summary="",causeEntryId=null}){
 const existing=state.fateSagas.sagas.find(s=>s.title===title&&s.status==="Active");if(existing)return existing;
 const saga={id:uid("saga"),kind,icon,title,participants,status:"Active",startedYear:state.year,lastYear:state.year,summary,chapters:[],causeEntryId};
 state.fateSagas.sagas.unshift(saga);
 recordChronicleEvent({icon,title:`Saga Begins: ${title}`,text:summary,category:"legends",severity:"mythic",major:true,tags:["legends","gods-titans"],causeText:causeEntryId?"Born from an earlier decision recorded in the Chronicle.":null});
 return saga;
}
function addSagaChapter(saga,title,text,icon="📜",category="legends"){
 if(!saga)return;
 const chapter={year:state.year,title,text,icon};saga.chapters.unshift(chapter);saga.lastYear=state.year;
 recordChronicleEvent({icon,title:`${saga.title}: ${title}`,text,category,severity:"mythic",major:saga.chapters.length%3===0,tags:["legends"],causeText:`Part of the ongoing saga “${saga.title},” begun in Year ${saga.startedYear}.`});
}
function createStage6Prophecy(){
 if(state.year-state.fateSagas.lastProphecyYear<4||Math.random()>.28)return;
 const people=stage6AllPeople().filter(p=>p.name!==getGod().name);if(!people.length)return;
 const subject=randomItem(people),city=randomItem(state.cities),themes=[
  {text:`A child touched by ${subject.name}'s blood will decide whether ${city.name} rises or burns.`,trigger:"blood",icon:"👶"},
  {text:`When ${subject.name} stands beneath a darkened sun, an ancient chain will break.`,trigger:"titan",icon:"⛓️"},
  {text:`A beloved heir of ${subject.name} will be offered immortality at a terrible price.`,trigger:"ascension",icon:"🌟"},
  {text:`The house nearest to ${subject.name} will be divided by love, jealousy, and an oath.`,trigger:"family",icon:"💔"},
  {text:`A hero tied to ${subject.name} will face a beast no oracle expected to survive.`,trigger:"hero",icon:"🐉"}
 ];
 const t=randomItem(themes),p={id:uid("prophecy"),year:state.year,subject:subject.name,city:city.name,text:t.text,trigger:t.trigger,icon:t.icon,status:"Unfulfilled",pressure:0,playerStance:"Unchosen"};
 state.fateSagas.prophecies.unshift(p);state.fateSagas.lastProphecyYear=state.year;
 const saga=createStage6Saga({kind:"prophecy",icon:"🧵",title:stage6UniqueSagaTitle("prophecy",subject.name),participants:[subject.name],summary:t.text});
 p.sagaId=saga.id;
 createAlert({priority:"important",category:"fate",icon:"🧵",title:"The Moirai Speak",description:t.text,location:"Hall of Fate",targetId:p.id,years:5});
}
function chooseProphecyStance(id,stance){
 const p=state.fateSagas.prophecies.find(x=>x.id===id);if(!p||p.status!=="Unfulfilled")return;
 p.playerStance=stance;
 const delta=stance==="Encourage"?2:stance==="Defy"?-2:0;p.pressure+=delta;
 const saga=state.fateSagas.sagas.find(s=>s.id===p.sagaId);
 addSagaChapter(saga,`${stance} Fate`,`${getGod().name} chose to ${stance.toLowerCase()} the prophecy: “${p.text}”`,"🧵","gods-titans");
 recordAfterAction({icon:"🧵",title:`You Chose to ${stance} Fate`,summary:p.text,category:"gods-titans",location:"Hall of Fate",changes:[{label:"Fate Pressure",value:`${p.pressure}`,tone:stance==="Encourage"?"positive":stance==="Defy"?"negative":""},{label:"Prophecy",value:p.status},{label:"Stance",value:stance}],severity:"mythic",major:true});
 renderAll();saveGame(false);
}
function resolveStage6Prophecies(){
 state.fateSagas.prophecies.filter(p=>p.status==="Unfulfilled").forEach(p=>{
  p.pressure+=rand(0,2);
  const age=state.year-p.year, chance=.04+Math.max(0,p.pressure)*.018+age*.008;
  if(age>=3&&Math.random()<chance){
   const fulfilled=Math.random()<(p.playerStance==="Defy"?.42:p.playerStance==="Encourage"?.78:.6);
   p.status=fulfilled?"Fulfilled":"Twisted";
   const saga=state.fateSagas.sagas.find(s=>s.id===p.sagaId);
   const text=fulfilled?`The prophecy came true in an unexpected form around ${p.subject}.`:`Attempts to control fate changed the prophecy rather than preventing it.`;
   addSagaChapter(saga,fulfilled?"Prophecy Fulfilled":"Fate Twisted",text,p.icon,"legends");
   if(saga&&saga.chapters.length>=3)saga.status="Legendary";
   createAlert({priority:"urgent",category:"fate",icon:p.icon,title:fulfilled?"Prophecy Fulfilled":"Fate Twisted",description:text,location:p.city,targetId:p.id,years:4});
  }
 });
}
function syncStage6Bloodlines(){
 const fs=state.fateSagas, houses=state.divineRelationships?.houses||[];
 houses.forEach(h=>{
  let b=fs.bloodlines.find(x=>x.house===h.name);
  if(!b){b={id:uid("bloodline"),house:h.name,founders:[...(h.founders||[])],members:[],prestige:h.influence||40,rivalries:[],heir:null};fs.bloodlines.push(b)}
  b.members=[...(h.children||[]),...(h.demigods||[])];
  b.prestige=Math.round((h.influence||40)+(b.members.length*2));
  b.heir=b.members[0]||null;
 });
}
function stage6FamilyDramaTurn(){
 const fs=state.fateSagas,people=stage6AllPeople();if(people.length<2||Math.random()>.24)return;
 const a=randomItem(people),b=randomItem(people.filter(x=>x.name!==a.name));if(!b)return;
 const types=[
  {kind:"feud",icon:"⚔️",label:"Family Feud",text:`${a.name} and ${b.name} have begun openly challenging one another.`},
  {kind:"love",icon:"❤️",label:"Forbidden Bond",text:`Rumors spread that ${a.name} and ${b.name} have formed a dangerous attachment.`},
  {kind:"feud",icon:"👑",label:"Succession Rivalry",text:`${a.name} and ${b.name} are competing for influence within the divine houses.`},
  {kind:"feud",icon:"💔",label:"Resentment",text:`${a.name} believes ${b.name} has received divine favor that should have belonged to them.`}
 ];
 const d=randomItem(types),saga=createStage6Saga({kind:d.kind,icon:d.icon,title:stage6UniqueSagaTitle(d.kind,a.name,b.name),participants:[a.name,b.name],summary:d.text});
 addSagaChapter(saga,d.label,d.text,d.icon,"divine-family");
 fs.familyDrama.unshift({id:uid("drama"),year:state.year,type:d.label,a:a.name,b:b.name,sagaId:saga.id,status:"Active"});
 createAlert({priority:"important",category:"family",icon:d.icon,title:d.label,description:d.text,location:"Mount Olympus",targetId:saga.id,years:3});
}
function stage6DemigodLifeTurn(){
 const all=[...(state.demigods||[]),...(state.divineRelationships?.npcDemigods||[])];
 all.forEach(d=>{
  if(d.age>=12&&!d.stage6Path){
   d.stage6Path=randomItem(["Heroic Training","Temple Service","Scholarship","Adventure","Politics"]);
   recordChronicleEvent({icon:"🛡️",title:`${d.name} Chooses a Path`,text:`The demigod began ${d.stage6Path.toLowerCase()}.`,category:"heroes",actor:d.divineParent||getGod().name,target:d.name,location:d.city,tags:["divine-family","heroes"]});
  }
  if(d.age>=18&&!d.stage6AdultLife&&Math.random()<.22){
   d.stage6AdultLife=randomItem(["married a mortal","founded a heroic school","became a city champion","entered royal service","began seeking immortality"]);
   recordChronicleEvent({icon:"🏺",title:`A New Chapter for ${d.name}`,text:`${d.name} ${d.stage6AdultLife}.`,category:"heroes",target:d.name,location:d.city,tags:["divine-family"]});
   const parent=d.divineParent||getGod().name;
   let saga=state.fateSagas.sagas.find(s=>s.kind==="bloodline"&&s.participants.includes(parent));
   if(!saga)saga=createStage6Saga({kind:"bloodline",icon:"🌳",title:stage6UniqueSagaTitle("bloodline",parent),participants:[parent,d.name],summary:`The descendants of ${parent} are beginning to shape the mortal world.`});
   addSagaChapter(saga,`${d.name} Comes of Age`,`${d.name} ${d.stage6AdultLife}.`,"🌳","heroes");
  }
 });
}
function stage6DelayedConsequencesTurn(){
 const fs=state.fateSagas, lc=state.livingChronicle;
 // Seed delayed consequences from meaningful player actions.
 const candidates=(lc.afterActionHistory||[]).filter(a=>state.year-a.year>=2&&!fs.delayedConsequences.some(c=>c.sourceId===a.id));
 if(candidates.length&&Math.random()<.22){
  const a=randomItem(candidates);
  fs.delayedConsequences.push({id:uid("consequence"),sourceId:a.id,sourceYear:a.year,dueYear:state.year+rand(1,4),title:a.title,resolved:false});
 }
 fs.delayedConsequences.filter(c=>!c.resolved&&c.dueYear<=state.year).forEach(c=>{
  c.resolved=true;
  const source=lc.entries.find(e=>e.id===c.sourceId);
  const outcomes=[
   "The decision has inspired unexpected loyalty years later.",
   "Old resentment has resurfaced and created a new political problem.",
   "A descendant remembers the choice and asks for divine aid.",
   "The earlier intervention changed an alliance that now matters.",
   "A rival has used the old decision as justification for a new challenge."
  ];
  const text=randomItem(outcomes);
  const e=recordChronicleEvent({icon:"🔗",title:`A Past Choice Returns: ${c.title}`,text,category:"legends",severity:"mythic",major:true,causeText:`Caused by “${source?.title||c.title}” in Year ${c.sourceYear}.`,tags:["legends"]});
  state.livingChronicle.causeLinks.unshift({causeEntryId:c.sourceId,effectEntryId:e.id,text:e.causeText,year:state.year});
  createAlert({priority:"important",category:"fate",icon:"🔗",title:"A Past Choice Returns",description:`A decision from Year ${c.sourceYear} now has consequences. ${text}`,location:source?.location||"The Greek World",targetId:e.id,years:3});
 });
}
function stage6YearTurn(){
 createStage6Prophecy();resolveStage6Prophecies();stage6FamilyDramaTurn();stage6DemigodLifeTurn();stage6DelayedConsequencesTurn();syncStage6Bloodlines();
}
function renderStage6Sagas(){
 if(!document.getElementById("sagas-view")||!state.fateSagas)return;
 const fs=state.fateSagas,active=fs.sagas.filter(s=>s.status==="Active"||s.status==="Legendary");
 $("#saga-count").textContent=`${active.length} Active`;
 const unresolved=fs.prophecies.filter(p=>p.status==="Unfulfilled");
 $("#saga-summary").innerHTML=`<p class="eyebrow">THE THREADS OF FATE</p><h3>${fs.sagas.length} sagas • ${unresolved.length} unresolved prophecies</h3><p>Stories now grow across years. Family choices, divine rivalries, prophecies, and earlier decisions can return as future consequences.</p>${unresolved.slice(0,2).map(p=>`<div class="card prophecy-card"><div class="card-row"><span class="portrait">🧵</span><div><strong>The Moirai Foretell</strong><p class="prophecy-text">“${p.text}”</p></div></div><div class="fate-choice-grid"><button class="fate-choice" onclick="chooseProphecyStance('${p.id}','Encourage')">✨ Encourage Fate</button><button class="fate-choice" onclick="chooseProphecyStance('${p.id}','Defy')">⚔️ Defy Fate</button><button class="fate-choice" onclick="chooseProphecyStance('${p.id}','Observe')">👁️ Observe</button></div></div>`).join("")}`;
 $("#saga-list").innerHTML=fs.sagas.length?fs.sagas.map(s=>`<article class="card saga-card ${s.status==="Completed"?"completed":""}"><div class="saga-head"><div class="council-head"><span class="saga-icon">${s.icon}</span><div><p class="eyebrow">${s.kind.toUpperCase()} SAGA</p><h3>${s.title}</h3><p>${s.summary}</p></div></div><span class="tag gold">${s.status}</span></div><div class="chronicle-meta"><span class="chronicle-tag">Year ${s.startedYear}–${s.lastYear}</span>${s.participants.map(p=>`<span class="chronicle-tag">${p}</span>`).join("")}</div><div class="saga-thread">${s.chapters.slice(0,6).map(c=>`<div class="saga-thread-item"><strong>${c.icon} Year ${c.year}: ${c.title}</strong><br>${c.text}</div>`).join("")||'<div class="saga-thread-item">The first chapter is still unfolding.</div>'}</div></article>`).join(""):'<article class="card"><h3>No great sagas yet</h3><p>Advance the years and interact with the world. Connected stories will emerge naturally.</p></article>';
 $("#bloodline-list").innerHTML=fs.bloodlines.length?fs.bloodlines.map(b=>`<article class="card bloodline-card"><div class="card-row"><div><p class="eyebrow">DIVINE BLOODLINE</p><h3>🌳 ${b.house}</h3><p>Founders: ${b.founders.join(" & ")||"Unknown"} • Prestige ${b.prestige}</p></div>${b.heir?`<span class="tag gold">Heir: ${b.heir}</span>`:""}</div><div class="bloodline-members">${b.members.map(m=>`<span class="bloodline-chip">${m}</span>`).join("")||'<span class="muted">No descendants yet</span>'}</div></article>`).join(""):'<article class="card"><p>Divine Houses will become generational bloodlines here.</p></article>';
}

function ensureV140Stage5Data(){
 if(!state.livingChronicle)state.livingChronicle={filter:"all",entries:[],years:{},afterActionHistory:[],causeLinks:[],campaignStats:{actionsTaken:0,crisesResolved:0,marriages:0,births:0,deaths:0,wars:0,prayersAnswered:0,monstersDefeated:0,councilVotes:0,ascensions:0}};
 const lc=state.livingChronicle;
 if(!lc.entries)lc.entries=[];if(!lc.years)lc.years={};if(!lc.afterActionHistory)lc.afterActionHistory=[];if(!lc.causeLinks)lc.causeLinks=[];
 if(!lc.campaignStats)lc.campaignStats={actionsTaken:0,crisesResolved:0,marriages:0,births:0,deaths:0,wars:0,prayersAnswered:0,monstersDefeated:0,councilVotes:0,ascensions:0};
 ensureChronicleYear(state.year);
 patchNavigationChronicle();
}
function patchNavigationChronicle(){
 const map=window.__navCategoryMap;
 if(map?.chronicle&&!map.chronicle.items.some(x=>x[0]==="living-chronicle-view"))map.chronicle.items.unshift(["living-chronicle-view","📖","Living Chronicle","Year-by-year world history"]);
}
function ensureChronicleYear(year){
 if(!state.livingChronicle.years[year])state.livingChronicle.years[year]={year,title:`Year ${year}`,events:[],summary:""};
 return state.livingChronicle.years[year];
}
function generateYearTitle(year){
 const e=state.livingChronicle.entries.filter(x=>x.year===year);
 if(e.some(x=>x.category==="wars"))return `Year ${year} — The Year of War`;
 if(e.some(x=>x.category==="marriages"))return `Year ${year} — The Year of Sacred Unions`;
 if(e.some(x=>x.category==="births"))return `Year ${year} — The Year of New Blood`;
 if(e.some(x=>x.category==="underworld"))return `Year ${year} — The Year of Shadows`;
 return `Year ${year} — ${getCurrentAge().name}`;
}
function recordChronicleEvent(config){
 const e={id:uid("chronicle"),year:config.year??state.year,icon:config.icon||"📜",title:config.title||"World Event",text:config.text||"",category:config.category||"all",severity:config.severity||"normal",actor:config.actor||null,target:config.target||null,location:config.location||null,effects:config.effects||[],causeText:config.causeText||null,tags:config.tags||[],major:!!config.major};
 state.livingChronicle.entries.unshift(e);state.livingChronicle.entries=state.livingChronicle.entries.slice(0,1200);
 const y=ensureChronicleYear(e.year);y.events.unshift(e.id);y.title=generateYearTitle(e.year);return e;
}
function recordAfterAction(config){
 state.livingChronicle.campaignStats.actionsTaken++;
 const e=recordChronicleEvent({icon:config.icon,title:config.title,text:config.summary,category:config.category,severity:config.severity||"success",actor:config.actor||getGod().name,target:config.target,location:config.location,effects:config.changes||[],causeText:config.causeText,major:config.major,tags:config.tags||[]});
 const r={...config,id:e.id,year:state.year};state.livingChronicle.afterActionHistory.unshift(r);state.livingChronicle.afterActionHistory=state.livingChronicle.afterActionHistory.slice(0,300);showAfterActionReport(r);return e;
}
function showAfterActionReport(r){
 let old=document.querySelector(".after-action-overlay");if(old)old.remove();
 const o=document.createElement("div");o.className="after-action-overlay";
 o.innerHTML=`<div class="after-action-panel"><div class="after-action-hero">${r.icon||"✨"}</div><p class="eyebrow">WHAT HAPPENED?</p><h2 class="after-action-title">${r.title}</h2><p class="after-action-sub">${r.summary||""}</p><div class="after-action-grid">${(r.changes||[]).map(c=>`<div class="after-action-change ${c.tone||""}"><strong>${c.label}</strong>${c.before!==undefined?`${c.before} → ${c.after}`:c.value||""}</div>`).join("")||'<div class="after-action-change"><strong>Outcome Recorded</strong>Added to the Living Chronicle.</div>'}</div>${r.causeText?`<div class="after-action-note"><strong>Why this happened</strong><br>${r.causeText}</div>`:""}<div class="choice-row"><button id="after-action-close" class="choice-button good">Continue</button><button id="after-action-chronicle" class="choice-button bad">Open Chronicle</button></div></div>`;
 document.body.appendChild(o);$("#after-action-close").onclick=()=>o.remove();$("#after-action-chronicle").onclick=()=>{o.remove();activateView("living-chronicle-view");renderLivingChronicle()};
}
function renderLivingChronicle(){
 if(!document.getElementById("living-chronicle-view")||!state.livingChronicle)return;
 const lc=state.livingChronicle;ensureChronicleYear(state.year);$("#chronicle-year-label").textContent=`Year ${state.year}`;
 const f=lc.filter||"all",entries=f==="all"?lc.entries:lc.entries.filter(e=>e.category===f||e.tags?.includes(f)),grouped={};
 entries.forEach(e=>(grouped[e.year]||(grouped[e.year]=[])).push(e));
 const years=Object.keys(grouped).map(Number).sort((a,b)=>b-a);
 $("#chronicle-summary").innerHTML=`<p class="eyebrow">CAMPAIGN HISTORY</p><h3>${lc.entries.length} recorded events across ${Object.keys(lc.years).length} years</h3><div class="stats"><div class="stat"><strong>${lc.campaignStats.actionsTaken}</strong><small>Player Actions</small></div><div class="stat"><strong>${lc.entries.filter(e=>e.major).length}</strong><small>Major Events</small></div><div class="stat"><strong>${lc.campaignStats.crisesResolved}</strong><small>Crises Resolved</small></div></div>`;
 $$(".chronicle-filter").forEach(b=>b.classList.toggle("active",b.dataset.chronicleFilter===f));
 $$(".chronicle-filter").forEach(b=>b.onclick=()=>{lc.filter=b.dataset.chronicleFilter;renderLivingChronicle()});
 $("#chronicle-timeline").innerHTML=years.length?years.map(y=>`<article class="card chronicle-year-card"><div class="chronicle-year-header"><h3>${lc.years[y]?.title||`Year ${y}`}</h3><span class="pill">${grouped[y].length} Events</span></div><div class="chronicle-year-events">${grouped[y].map(renderChronicleEvent).join("")}</div></article>`).join(""):`<article class="card"><h3>No Chronicle entries in this category</h3><p>Actions and world events will appear here automatically.</p></article>`;
 renderLegacyDashboard();
}
function renderChronicleEvent(e){
 const cls=e.severity==="danger"?"danger":e.severity==="success"?"success":e.severity==="mythic"?"mythic":"";
 const card=e.major?"legendary-chronicle-card":"chronicle-event-card";
 const effects=(e.effects||[]).slice(0,6).map(c=>`<div class="chronicle-effect"><strong>${c.label}</strong>${c.before!==undefined?`${c.before} → ${c.after}`:c.value||""}</div>`).join("");
 return `<div class="${card} ${cls}"><div class="card-row"><div class="council-head"><span class="portrait">${e.icon}</span><div><h3>${e.title}</h3><p>${e.text}</p></div></div>${e.major?'<span class="tag gold">Legendary</span>':""}</div>${effects?`<div class="chronicle-effects">${effects}</div>`:""}${e.causeText?`<div class="chronicle-cause"><strong>Caused by:</strong> ${e.causeText}</div>`:""}<div class="chronicle-meta">${e.location?`<span class="chronicle-tag">📍 ${e.location}</span>`:""}${e.actor?`<span class="chronicle-tag">👤 ${e.actor}</span>`:""}<span class="chronicle-tag">${e.category}</span></div></div>`;
}
function renderLegacyDashboard(){
 const s=state.livingChronicle.campaignStats,r=state.divineReputation||{},pairs=[["The Merciful",r.merciful||0],["The Wise",r.wise||0],["The Heroic",r.heroic||0],["The Ruthless",r.ruthless||0],["The Ambitious",r.ambitious||0],["The Honorable",r.honorable||0]].sort((a,b)=>b[1]-a[1]);
 const topHero=state.heroes.filter(h=>h.recruited).sort((a,b)=>(b.reputation||0)-(a.reputation||0))[0],topHouse=(state.divineRelationships.houses||[]).sort((a,b)=>(b.influence||0)-(a.influence||0))[0],topMonster=state.creatureEcosystem.sort((a,b)=>(b.legend||0)-(a.legend||0))[0];
 $("#legacy-dashboard").innerHTML=`<p class="eyebrow">YOUR LEGACY</p><h3>${getGod().name}, ${pairs[0][0]}</h3><p>Your mythology is being written from every action, birth, war, marriage, prayer, death, and divine decision.</p><div class="legacy-grid"><div class="legacy-stat"><strong>${s.marriages}</strong><small>Marriages</small></div><div class="legacy-stat"><strong>${s.births}</strong><small>Births</small></div><div class="legacy-stat"><strong>${s.wars}</strong><small>Wars</small></div><div class="legacy-stat"><strong>${s.prayersAnswered}</strong><small>Prayers Answered</small></div><div class="legacy-stat"><strong>${s.ascensions}</strong><small>Ascensions</small></div><div class="legacy-stat"><strong>${state.livingChronicle.entries.filter(e=>e.major).length}</strong><small>Legendary Events</small></div></div><p class="muted">${topHouse?`Greatest Divine House: ${topHouse.name}. `:""}${topHero?`Most renowned hero: ${topHero.name}. `:""}${topMonster?`Most legendary creature: ${topMonster.name}.`:""}</p>`;
}
function livingChronicleYearTurn(){
 const y=ensureChronicleYear(state.year),e=state.livingChronicle.entries.filter(x=>x.year===state.year);y.title=generateYearTitle(state.year);y.summary=e.slice(0,6).map(x=>x.title).join(" • ");
 if(e.length>=8&&!e.some(x=>x.title===`Year ${state.year} Enters the Great Chronicle`))recordChronicleEvent({icon:"📖",title:`Year ${state.year} Enters the Great Chronicle`,text:`${e.length} important events shaped the world this year.`,category:"legends",severity:"mythic",major:true,tags:["legends"]});
}
function renderDivineRelationships(){
 const dr=state.divineRelationships,filter=dr.filter||"all";
 const roster=dr.roster.filter(r=>{
  if(filter==="olympian")return r.type==="Olympian";
  if(filter==="titan")return r.type==="Titan";
  if(filter==="romance")return r.status==="Romantic"||r.affection>=35||r.attraction>=65;
  if(filter==="married")return r.status==="Married";
  return true;
 });
 $("#relationship-roster-count").textContent=`${dr.roster.length} Immortals`;
 $("#relationship-summary").innerHTML=`<p class="eyebrow">LIVING IMMORTALS</p><h3>Meet every Olympian and Titan through conversation, trust, attraction, politics, and family history</h3><div class="stats"><div class="stat"><strong>${dr.roster.filter(r=>r.type==="Olympian").length}</strong><small>Olympians</small></div><div class="stat"><strong>${dr.roster.filter(r=>r.type==="Titan").length}</strong><small>Titans</small></div><div class="stat"><strong>${dr.roster.filter(r=>r.status==="Married").length}</strong><small>Married</small></div></div>`;
 $$(".relationship-filter").forEach(b=>b.classList.toggle("active",b.dataset.relationshipFilter===filter));
 $$(".relationship-filter").forEach(b=>b.onclick=()=>{dr.filter=b.dataset.relationshipFilter;renderDivineRelationships()});
 $("#relationship-roster-list").innerHTML=roster.map(r=>`<article class="card relationship-card ${r.type==="Titan"?"relationship-titan":"relationship-olympian"} ${r.status==="Romantic"?"relationship-romantic":""} ${r.status==="Married"?"relationship-married":""} ${r.status==="Hostile"?"relationship-hostile":""}"><div class="card-row"><div class="council-head"><span class="relationship-avatar">${r.icon}</span><div><h3>${r.name}</h3><p>${r.type} • ${r.personality} • ${r.location}</p></div></div><span class="tag gold">${r.status}</span></div><div class="relationship-grid"><div class="relationship-stat"><strong>${r.affection}</strong><small>Affection</small></div><div class="relationship-stat"><strong>${r.trust}</strong><small>Trust</small></div><div class="relationship-stat"><strong>${r.attraction}</strong><small>Attraction</small></div><div class="relationship-stat"><strong>${r.respect}</strong><small>Respect</small></div><div class="relationship-stat"><strong>${r.loyalty}</strong><small>Loyalty</small></div><div class="relationship-stat"><strong>${r.jealousy}</strong><small>Jealousy</small></div></div><button class="card-button" data-meet-immortal="${r.id}">${r.type==="Titan"?"Travel to Meet Titan":"Visit & Speak"}</button></article>`).join("");
 $$("[data-meet-immortal]").forEach(b=>b.onclick=()=>openImmortalMeeting(b.dataset.meetImmortal));
}

function openImmortalMeeting(id){
 const r=state.divineRelationships.roster.find(x=>x.id===id);if(!r)return;
 r.lastMetYear=state.year;
 showModal(`<p class="eyebrow">${r.type==="Titan"?"TITAN ENCOUNTER":"DIVINE ENCOUNTER"}</p><h2>${r.icon} ${r.name}</h2><div class="relationship-scene"><strong>${r.location}</strong>${getRelationshipGreeting(r)}</div><div class="conversation-grid">${divineConversationChoices.map(c=>`<button class="action-button" data-divine-talk="${c.id}">${c.icon} ${c.label}${c.costGold?`<br><small>${c.costGold} Gold</small>`:""}</button>`).join("")}</div><div class="relationship-action-grid"><button class="action-button" data-divine-special="court" ${r.status==="Married"?"disabled":""}>❤️ Begin Courtship</button><button class="action-button" data-divine-special="proposal" ${!canProposeToImmortal(r)?"disabled":""}>💍 Propose Marriage</button>${r.status==="Married"?'<button class="action-button" data-divine-special="divine-child">👶 Have Divine Child<br><small>20 Favor</small></button>':""}<button class="action-button" data-divine-special="family">🌳 Discuss Demigods & Family</button><button class="action-button" data-divine-special="politics">🏛️ Ask Their Political Goal</button></div>`);
 $$("[data-divine-talk]").forEach(b=>b.onclick=()=>resolveDivineConversation(r,b.dataset.divineTalk));
 $$("[data-divine-special]").forEach(b=>b.onclick=()=>resolveDivineSpecial(r,b.dataset.divineSpecial));
}

function getRelationshipGreeting(r){
 if(r.status==="Married")return `${r.name} welcomes you as their divine spouse.`;
 if(r.affection>=60)return `${r.name} seems genuinely pleased to see you.`;
 if(r.trust<25)return `${r.name} watches you carefully and does not fully trust your intentions.`;
 if(r.type==="Titan")return `${r.name} studies the Olympian visitor, weighing old grudges against new possibilities.`;
 return `${r.name} receives you and waits to hear why you have come.`;
}

function resolveDivineConversation(r,choiceId){
 const c=divineConversationChoices.find(x=>x.id===choiceId);if(!c)return;
 if(c.costGold&&!spend("gold",c.costGold))return;
 let modifier=1;
 if(c.id==="flirt")modifier=r.attraction>=60?1.35:r.attraction<35?.65:1;
 if(c.id==="politics"&&r.type==="Titan"&&state.titanWar>70)modifier=.7;
 r.affection=clamp(r.affection+Math.round(c.affection*modifier));
 r.trust=clamp(r.trust+Math.round(c.trust*modifier));
 r.respect=clamp(r.respect+Math.round(c.respect*modifier));
 if(c.id==="flirt"&&r.affection>=25)r.status="Romantic";
 if(c.id==="challenge"&&Math.random()<.25)r.trust=clamp(r.trust-4);
 r.memories.unshift(`Year ${state.year}: ${getGod().name} chose to ${c.label.toLowerCase()}.`);
 r.memories=r.memories.slice(0,12);
 state.divineRelationships.relationshipHistory.unshift({name:r.name,action:c.label,year:state.year});
 closeModal();renderAll();saveGame(false);
}

function resolveDivineSpecial(r,action){
 if(action==="court"){
  if(r.status==="Married"){showToast(`${r.name} is already your divine spouse.`);return}
  r.status="Romantic";r.affection=clamp(r.affection+5);r.memories.unshift(`Year ${state.year}: Courtship officially began.`);showToast(`Courtship with ${r.name} has begun.`);
 }
 if(action==="proposal"){closeModal();proposeToLivingImmortal(r);return}

 if(action==="divine-child"){
  const spouse=state.divineFamily.spouse;
  if(!spouse||spouse.name!==r.name||r.status!=="Married"){
   showToast("You can only have an immortal child with your current divine spouse.");
   return;
  }
  if(!spend("favor",20))return;

  createImmortalChildStage2(spouse);

  // Immediately synchronize ALL family systems after the birth.
  syncDemigodFamilyAwareness();
  buildDivineHouses();

  const newborn=state.divineFamily.immortalChildren[state.divineFamily.immortalChildren.length-1];
  state.demigods.forEach(d=>{
   d.divineSiblings=state.divineFamily.immortalChildren.map(c=>c.name);
   d.divineHouse=state.divineRelationships.houses.find(h=>h.founders?.includes(getGod().name)&&h.founders?.includes(spouse.name))?.name||null;
   d.memories=d.memories||[];
   if(newborn)d.memories.unshift(`Year ${state.year}: My immortal sibling ${newborn.name} was born into our divine house.`);
  });

  if(newborn){
   newborn.demigodSiblings=state.demigods.map(d=>d.name);
   newborn.siblingBond=Math.max(newborn.siblingBond||50,50);
   r.memories.unshift(`Year ${state.year}: Our immortal child ${newborn.name} was born.`);
   createAlert({
    priority:"urgent",
    category:"family",
    icon:newborn.icon,
    title:`Divine Child Born: ${newborn.name}`,
    description:`${newborn.name}, immortal child of ${getGod().name} and ${r.name}, has joined the Divine Family and Divine House. Their demigod siblings now recognize them.`,
    location:"Mount Olympus",
    targetId:newborn.id,
    years:2
   });
  }

  closeModal();renderAll();saveGame(false);
  return;
 }

 if(action==="family"){
  r.trust=clamp(r.trust+7);r.respect=clamp(r.respect+4);
  if(state.demigods.length)r.jealousy=clamp(r.jealousy-2);
  r.memories.unshift(`Year ${state.year}: Discussed demigods and the blended divine family.`);
  syncDemigodFamilyAwareness();buildDivineHouses();
 }
 if(action==="politics"){
  const goal=r.type==="Titan"?randomItem(["Reform Tartarus","Gain Titan representation","Protect Titan descendants","Reduce Olympian control","Restore an ancient sanctuary"]):randomItem(["Gain Council influence","Protect a favored city","Mentor a young god","Expand temple worship","Prevent Titan rebellion"]);
  r.memories.unshift(`Year ${state.year}: Revealed political goal: ${goal}.`);
  showToast(`${r.name}: ${goal}`);
 }
 closeModal();renderAll();saveGame(false);
}

function canProposeToImmortal(r){
 return !state.divineFamily.spouse && r.status==="Romantic" && r.affection>=45 && r.trust>=40;
}

function proposeToLivingImmortal(r){
 const familyApproval=getStage3FamilyApproval(r);
 const politicalModifier=r.type==="Titan" ? (100-state.titanWar)*.12 - state.titanCouncil.rebellionStrength*.08 : state.prestige*.08;
 const score=r.affection*.35+r.trust*.28+r.attraction*.14+r.respect*.13+r.loyalty*.05+familyApproval+politicalModifier+Math.random()*22;
 const threshold=58+(r.romanceBias<40?8:0);
 const accepted=score>=threshold;
 r.proposalHistory.unshift({year:state.year,accepted,score:Math.round(score)});
 if(accepted){
  completeLivingMarriage(r);
 }else{
  r.affection=clamp(r.affection-rand(2,6));r.trust=clamp(r.trust-rand(1,4));r.memories.unshift(`Year ${state.year}: Rejected a marriage proposal from ${getGod().name}.`);
  createAlert({priority:"important",category:"family",icon:"💔",title:`Proposal Rejected: ${r.name}`,description:`${r.name} rejected your marriage proposal. The rejection is remembered, but the relationship can continue.`,location:r.location,targetId:r.id,years:3});
  showLivingMarriageResult(r,false,Math.round(score));
 }
 renderAll();saveGame(false);
}

function getStage3FamilyApproval(r){
 let approval=0;
 const avgFamily=state.demigods.length?state.demigods.reduce((s,d)=>s+(d.familyTrust||50),0)/state.demigods.length:55;
 approval+=avgFamily*.05;
 if(r.type==="Titan"){
  approval+=state.divineReputation.merciful*.15;
  approval-=state.titanWar*.04;
 }else approval+=state.divineReputation.honorable*.12;
 return approval;
}

function completeLivingMarriage(r){
 r.status="Married";r.loyalty=clamp(r.loyalty+20);r.affection=Math.max(r.affection,65);r.trust=Math.max(r.trust,60);
 const spouse={name:r.name,icon:r.icon,type:r.type,affection:r.affection,trust:r.trust,compatibility:Math.round((r.attraction+r.respect)/2),jealousy:r.jealousy,marriedYear:state.year,children:[]};
 state.divineFamily.spouse=spouse;
 state.divineFamily.marriages.unshift({spouse:r.name,year:state.year,type:r.type,accepted:true});
 state.divineFamily.familyHistory.unshift(`Year ${state.year}: ${getGod().name} married ${r.name}.`);
 let node=state.divineFamily.familyTree.find(x=>x.name===r.name);
 if(!node){node={id:uid("family"),name:r.name,icon:r.icon,type:r.type,relation:"Spouse",parents:[],spouse:getGod().name,children:[]};state.divineFamily.familyTree.push(node)}
 node.relation="Spouse";node.spouse=getGod().name;
 const self=state.divineFamily.familyTree.find(x=>x.name===getGod().name);if(self)self.spouse=r.name;
 syncDemigodFamilyAwareness();
 state.demigods.forEach(d=>{d.divineStepParent=r.name;d.memories=d.memories||[];d.memories.unshift(`Year ${state.year}: ${r.name} became my divine step-parent.`)});
 state.divineFamily.immortalChildren.forEach(c=>{c.memories=c.memories||[];c.memories.unshift(`Year ${state.year}: ${r.name} joined the divine household.`)});
 if(r.type==="Titan"){state.titanCouncil.rebellionStrength=clamp(state.titanCouncil.rebellionStrength-8);state.titanWar=clamp(state.titanWar-6)}
 else state.council.forEach(g=>g.relationship=clamp((g.relationship||50)+1));
 state.prestige+=18;state.divineReputation.honorable+=3;
 createAlert({priority:"urgent",category:"family",icon:"💍",title:`Divine Marriage Accepted: ${r.name}`,description:`${r.name} accepted the proposal. The marriage is linked to the family tree, demigods, immortal children, jealousy, ascension, and future generations.`,location:"Mount Olympus",targetId:r.id,years:2});
 addLibraryEntry("people",`Marriage of ${getGod().name} and ${r.name}`,`The divine marriage was accepted in Year ${state.year}.`);
 buildDivineHouses();
 state.livingChronicle.campaignStats.marriages++;
 recordChronicleEvent({icon:"💍",title:`Divine Marriage: ${getGod().name} & ${r.name}`,text:"A new divine house was formed.",category:"marriages",severity:"mythic",major:true,actor:getGod().name,target:r.name,location:"Mount Olympus",tags:["divine-family","gods-titans"]});
 showLivingMarriageResult(r,true,100);
}

function showLivingMarriageResult(r,accepted,score){
 let o=document.querySelector(".cinematic-overlay");if(o)o.remove();
 o=document.createElement("div");o.className="cinematic-overlay";
 o.innerHTML=`<div class="cinematic-panel ${accepted?"marriage-result-accepted":"marriage-result-rejected"}"><div class="cinematic-visual">${accepted?"💍":"💔"}</div><p class="eyebrow">DIVINE MARRIAGE</p><h2>${accepted?`${r.name} Accepted!`:`${r.name} Rejected the Proposal`}</h2><p class="muted">${accepted?"A new immortal household has been formed.":"The relationship continues, but the rejection becomes part of your shared history."}</p><div class="stats"><div class="stat"><strong>${r.affection}</strong><small>Affection</small></div><div class="stat"><strong>${r.trust}</strong><small>Trust</small></div><div class="stat"><strong>${r.attraction}</strong><small>Attraction</small></div></div><button id="close-living-marriage-result" class="primary-button">${accepted?"View Divine Family":"Continue Relationship"}</button></div>`;
 document.body.appendChild(o);
 $("#close-living-marriage-result").onclick=()=>{o.remove();activateView(accepted?"divine-family-view":"relationships-view")};
}

function buildDivineHouses(){
 if(!state.divineRelationships.houses)state.divineRelationships.houses=[];
 const spouse=state.divineFamily.spouse;

 if(spouse){
  let house=state.divineRelationships.houses.find(h=>h.founders?.includes(getGod().name)&&h.founders?.includes(spouse.name));
  if(!house){
   house={
    id:uid("divineHouse"),
    name:`House of ${getGod().name} & ${spouse.name}`,
    icon:"🏛️",
    founders:[getGod().name,spouse.name],
    type:spouse.type==="Titan"?"Olympian-Titan House":"Olympian House",
    children:[],
    demigods:[],
    influence:55,
    unity:70,
    history:[`Founded by marriage in Year ${state.year}.`]
   };
   state.divineRelationships.houses.push(house);
  }

  // LIVE synchronization — no more frozen snapshots.
  house.children=state.divineFamily.immortalChildren.map(c=>c.name);
  house.demigods=state.demigods.map(d=>d.name);
  house.type=spouse.type==="Titan"?"Olympian-Titan House":"Olympian House";
  house.name=`House of ${getGod().name} & ${spouse.name}`;
  house.influence=clamp(55 + house.children.length*6 + house.demigods.length*4);
  house.unity=clamp(
    65 +
    Math.round((spouse.affection||60)/10) -
    Math.round((spouse.jealousy||0)/8) +
    Math.round(state.demigods.reduce((s,d)=>s+(d.divineSiblingBond||50),0)/Math.max(1,state.demigods.length)/15)
  );

  // Keep every demigod aware of the House they belong to.
  state.demigods.forEach(d=>{
   d.divineHouse=house.name;
   d.divineStepParent=spouse.name;
   d.divineParent=getGod().name;
   d.divineSiblings=state.divineFamily.immortalChildren.map(c=>c.name);
  });

  // Keep immortal children linked to the same House and demigod branch.
  state.divineFamily.immortalChildren.forEach(c=>{
   c.divineHouse=house.name;
   c.demigodSiblings=state.demigods.map(d=>d.name);
  });
 }

 // Remove impossible duplicate houses made by older builds.
 const seen=new Set();
 state.divineRelationships.houses=state.divineRelationships.houses.filter(h=>{
  const key=(h.founders||[]).slice().sort().join("|");
  if(seen.has(key))return false;
  seen.add(key);
  return true;
 });
}

function renderDivineHouses(){
 buildDivineHouses();renderAutonomousFamilySections();
 const houses=state.divineRelationships.houses||[];
 $("#divine-house-count").textContent=`${houses.length} Houses`;
 $("#divine-house-summary").innerHTML=`<p class="eyebrow">IMMORTAL DYNASTIES</p><h3>Divine marriages create houses containing immortal children, demigod branches, political alliances, and inherited rivalries</h3>`;
 $("#divine-house-list").innerHTML=houses.length?houses.map(h=>`<article class="card divine-house-card"><div class="card-row"><div class="council-head"><span class="relationship-avatar">${h.icon}</span><div><h3>${h.name}</h3><p>${h.type}</p></div></div><span class="tag gold">Unity ${h.unity}</span></div><div class="house-grid"><div class="house-stat"><strong>${h.influence}</strong><small>Influence</small></div><div class="house-stat"><strong>${h.children.length}</strong><small>Immortal Children</small></div><div class="house-stat"><strong>${h.demigods.length}</strong><small>Demigods</small></div></div><p>Founders: ${h.founders.join(" & ")}<br>Immortal children: ${h.children.join(", ")||"None"}<br>Demigod branch: ${h.demigods.join(", ")||"None"}</p></article>`).join(""):`<article class="card"><h3>No divine house yet</h3><p>A successful immortal marriage will found a new divine house.</p></article>`;
}

function autonomousImmortalRelationshipYearTurn(){
 const available=state.divineRelationships.roster.filter(r=>r.status!=="Married");
 if(available.length>=2&&Math.random()<.12){
  const pair=available.slice().sort(()=>Math.random()-.5).slice(0,2);
  const [a,b]=pair;if(!a||!b)return;
  a.autonomousPartner=b.name;b.autonomousPartner=a.name;
  a.memories.unshift(`Year ${state.year}: Began a private relationship with ${b.name}.`);
  b.memories.unshift(`Year ${state.year}: Began a private relationship with ${a.name}.`);
  if(Math.random()<.35){
   createAlert({priority:"important",category:"gods",icon:"💞",title:`Immortal Romance: ${a.name} & ${b.name}`,description:`The two immortals have begun courting without player intervention.`,location:"Mount Olympus",targetId:a.id,years:3});
  }
 }
 state.divineRelationships.roster.forEach(r=>{
  if(r.status==="Romantic"&&Math.random()<.22){r.affection=clamp(r.affection+rand(-2,5));r.trust=clamp(r.trust+rand(-2,4))}
 });
}

function stage3JealousyYearTurn(){
 const spouse=state.divineFamily.spouse;if(!spouse)return;
 const r=state.divineRelationships.roster.find(x=>x.name===spouse.name);if(!r)return;
 r.jealousy=spouse.jealousy=clamp((spouse.jealousy||0)+(state.demigods.some(d=>(d.fame||0)>55)?rand(2,7):rand(-2,2)));
 if(r.jealousy>=65&&state.demigods.length&&Math.random()<.28){
  startJealousyInvestigation(r);
 }
}

function startJealousyInvestigation(spouseRel){
 if(state.divineRelationships.activeInvestigation)return;
 const d=randomItem(state.demigods.filter(d=>d.status!=="Immortal"));if(!d)return;
 const creature=randomItem(state.creatureEcosystem.filter(c=>c.attitude!=="Friendly"));if(!creature)return;
 creature.territory=d.city||creature.territory;creature.behavior="Stalking a Demigod";
 const evidence=Math.random()<.72;
 state.divineRelationships.activeInvestigation={id:uid("investigation"),spouse:spouseRel.name,demigodId:d.id,creatureId:creature.id,evidence,clues:[],status:"Open"};
 createAlert({priority:"critical",category:"family",icon:"🐉",title:`Mysterious Beast Hunts ${d.name}`,description:`${creature.name} has begun stalking the demigod. Rumors suggest divine involvement, but the accusation is not yet proven.`,location:d.city||creature.territory,targetId:d.id,years:1,choices:[{id:"intervene",label:"Protect the Demigod",cost:"Favor",amount:15,effect:"intervene"},{id:"negotiate",label:"Investigate the Plot",cost:"Prestige",amount:8,effect:"negotiate"},{id:"delegate",label:"Send a Hero to Track It",cost:null,amount:0,effect:"delegate"},{id:"ignore",label:"Ignore the Rumors",cost:null,amount:0,effect:"ignore"}]});
 d.memories=d.memories||[];d.memories.unshift(`Year ${state.year}: A monster began hunting me, and I suspect my divine step-parent.`);
}

function renderDivineFamily(){const df=state.divineFamily,s=df.spouse;$("#divine-family-status").textContent=s?`Married to ${s.name}`:"Unwed";$("#divine-family-summary").innerHTML=`<p class="eyebrow">LIVING PANTHEON</p><h3>Marriage creates immortal children, jealousy, sibling bonds, inheritance and political consequences</h3><div class="stats"><div class="stat"><strong>${s?1:0}</strong><small>Spouse</small></div><div class="stat"><strong>${df.immortalChildren.length}</strong><small>Immortal Children</small></div><div class="stat"><strong>${state.demigods.length}</strong><small>Demigods</small></div></div>`;
 if(s){$("#divine-spouse-list").innerHTML=`<article class="card divine-spouse-card married-card ${s.jealousy>=70?"jealousy-high":s.jealousy>=35?"jealousy-medium":"jealousy-low"}"><div class="card-row"><div class="council-head"><span class="spouse-icon-large">${s.icon}</span><div><h3>${s.name}</h3><p>${s.type} spouse</p></div></div><span class="tag gold">Jealousy ${s.jealousy}</span></div><div class="family-stat-grid"><div class="family-stat"><strong>${s.affection}</strong><small>Affection</small></div><div class="family-stat"><strong>${s.trust}</strong><small>Trust</small></div><div class="family-stat"><strong>${s.compatibility}</strong><small>Compatibility</small></div></div><div class="courtship-grid"><button class="action-button" data-spouse="child">👶 Immortal Child</button><button class="action-button" data-spouse="reconcile">❤️ Reconcile Family</button><button class="action-button" data-spouse="gift">🎁 Gift</button><button class="action-button" data-spouse="confront">⚖️ Discuss Jealousy</button><button class="action-button" data-spouse="family">🌳 Family Gathering</button><button class="action-button" data-spouse="separate">💔 Separate</button></div></article>`;$$('[data-spouse]').forEach(b=>b.onclick=()=>spouseAction(b.dataset.spouse))}
 else{$("#divine-spouse-list").innerHTML=partnerCandidates().map(c=>{let x=df.courtships.find(v=>v.name===c.name)||{affection:0,trust:c.trust,compatibility:50};return `<article class="card divine-spouse-card"><div class="card-row"><div class="council-head"><span class="spouse-icon-large">${c.icon}</span><div><h3>${c.name}</h3><p>${c.type}</p></div></div><span class="tag gold">Affection ${x.affection}</span></div><button class="card-button" data-court="${c.id}">Court ${c.name}</button></article>`}).join('');$$('[data-court]').forEach(b=>b.onclick=()=>openCourtshipStage2(b.dataset.court))}
 $("#immortal-child-list").innerHTML=df.immortalChildren.length?df.immortalChildren.map(c=>`<article class="card immortal-child-card"><div class="card-row"><div class="council-head"><span class="child-icon-large">${c.icon}</span><div><h3>${c.name}</h3><p>${c.title} • Age ${c.age} • ${stageLabel(c.stage)}</p></div></div><span class="tag gold">${c.domain||"Awakening"}</span></div><div class="family-stat-grid"><div class="family-stat"><strong>${c.power}</strong><small>Power</small></div><div class="family-stat"><strong>${c.wisdom}</strong><small>Wisdom</small></div><div class="family-stat"><strong>${c.siblingBond}</strong><small>Demigod Bond</small></div></div><button class="card-button" data-child="${c.id}">Guide Child</button></article>`).join(''):'<article class="card"><h3>No immortal children yet</h3><p>Divine spouses can have fully immortal children.</p></article>';$$('[data-child]').forEach(b=>b.onclick=()=>openImmortalChildStage2(b.dataset.child));}
function openCourtshipStage2(id){const [kind,name]=id.split(':');let c=state.divineFamily.courtships.find(x=>x.name===name);const base=partnerCandidates().find(x=>x.name===name);if(!c){c={name,icon:base.icon,type:base.type,affection:0,trust:base.trust,compatibility:rand(40,90),jealousy:0,history:[]};state.divineFamily.courtships.push(c)}showModal(`<p class="eyebrow">DIVINE COURTSHIP</p><h2>${c.icon} ${c.name}</h2><p>Affection ${c.affection} • Trust ${c.trust} • Compatibility ${c.compatibility}</p><div class="courtship-grid">${divineCourtshipActions.map(a=>`<button class="action-button" data-courtact="${a.id}">${a.icon} ${a.name}</button>`).join('')}</div><button id="proposal" class="primary-button" ${c.affection<60||c.trust<50?'disabled':''}>💍 Propose Marriage</button>`);$$('[data-courtact]').forEach(b=>b.onclick=()=>courtshipAction(c,b.dataset.courtact));$('#proposal').onclick=()=>proposeMarriage(c)}
function courtshipAction(c,a){const x=divineCourtshipActions.find(v=>v.id===a);if(x.cost&&!spend(a==='council'?'prestige':'gold',x.cost))return;if(a==='gift'){c.affection+=10;c.trust+=5}if(a==='quest'){c.affection+=8;c.trust+=8}if(a==='council'){c.trust+=10}if(a==='date'){c.affection+=12;c.compatibility+=3}if(a==='family'){c.trust+=7;c.jealousy=Math.max(0,c.jealousy-5)}if(a==='promise'){c.affection+=6;c.trust+=9;state.divineReputation.honorable+=1}c.affection=clamp(c.affection);c.trust=clamp(c.trust);closeModal();renderAll();saveGame(false)}
function proposeMarriage(c){if(c.affection+c.trust+c.compatibility+Math.random()*80<190){showToast(`${c.name} is not ready to marry.`);return}state.divineFamily.spouse={...c,marriedYear:state.year,jealousy:rand(5,25)};state.divineFamily.marriages.unshift({spouse:c.name,year:state.year,type:c.type});let me=state.divineFamily.familyTree.find(x=>x.name===getGod().name),p=state.divineFamily.familyTree.find(x=>x.name===c.name);if(me)me.spouse=c.name;if(p){p.spouse=getGod().name;p.relation='Spouse'}state.prestige+=15;addLibraryEntry('people',`Marriage of ${getGod().name} and ${c.name}`,`Married in Year ${state.year}.`);closeModal();renderAll();saveGame(false)}
function spouseAction(a){const s=state.divineFamily.spouse;if(!s)return;if(a==='child'){if(!spend('favor',20))return;createImmortalChildStage2(s)}if(a==='reconcile'){s.jealousy=clamp(s.jealousy-18);state.divineReputation.merciful+=2}if(a==='gift'){if(!spend('gold',25))return;s.affection=clamp(s.affection+10);s.jealousy=clamp(s.jealousy-5)}if(a==='confront'){if(Math.random()*100<s.trust+state.divineReputation.wise)s.jealousy=clamp(s.jealousy-12);else s.jealousy=clamp(s.jealousy+8)}if(a==='family'){s.jealousy=clamp(s.jealousy-10);state.demigods.forEach(d=>d.divineSiblingBond=clamp((d.divineSiblingBond||50)+5))}if(a==='separate'){state.divineFamily.divorces.unshift({spouse:s.name,year:state.year});state.divineFamily.spouse=null}syncDemigodFamilyAwareness();renderAll();saveGame(false)}
function createImmortalChildStage2(s){const name=randomItem(['Asterion','Thaleia','Euphorion','Seleneia','Kallianeira','Dorian','Phoebia','Nereon','Theon','Lyra']),domain=randomItem(divineDomainPool),icon=randomItem(['✨','🌟','⚡','🌙','🔥','🌊','🦉','🌸']);const c={id:uid('immortal'),name,icon,title:`Young Deity of ${domain}`,domain:null,latentDomain:domain,age:0,stage:'infant',power:rand(20,40),wisdom:rand(20,45),courage:rand(20,45),loyalty:70,siblingBond:50,parents:[getGod().name,s.name],memories:[`Born in Year ${state.year}.`],pantheonStatus:'Child'};state.divineFamily.immortalChildren.push(c);state.divineFamily.familyTree.push({id:uid('family'),name:c.name,icon:c.icon,type:'Immortal Child',relation:'Child',parents:c.parents,spouse:null,children:[]});syncDemigodFamilyAwareness();createAlert({priority:'urgent',category:'family',icon:c.icon,title:`Immortal Child Born: ${c.name}`,description:`A new immortal child was born to ${getGod().name} and ${s.name}.`,location:'Mount Olympus',targetId:c.id,years:2});addLibraryEntry('people',c.name,`Immortal child born in Year ${state.year}.`)}
function stageLabel(s){return immortalChildStages.find(x=>x.id===s)?.name||s}
function openImmortalChildStage2(id){const c=state.divineFamily.immortalChildren.find(x=>x.id===id);showModal(`<p class="eyebrow">IMMORTAL CHILD</p><h2>${c.icon} ${c.name}</h2><p>${stageLabel(c.stage)} • ${c.domain||'Domain not awakened'}</p><div class="child-action-grid"><button class="action-button" data-guide="self">⚡ Train Yourself</button><button class="action-button" data-guide="athena">🦉 Athena</button><button class="action-button" data-guide="ares">⚔️ Ares</button><button class="action-button" data-guide="titan">⛓️ Titan Kin</button><button class="action-button" data-guide="siblings">🤝 Meet Demigod Siblings</button></div>`);$$('[data-guide]').forEach(b=>b.onclick=()=>{const a=b.dataset.guide;if(a==='self'){c.power+=5;c.loyalty+=6}if(a==='athena')c.wisdom+=8;if(a==='ares'){c.courage+=8;c.power+=3}if(a==='titan'){c.power+=8;c.loyalty-=4}if(a==='siblings'){c.siblingBond=clamp(c.siblingBond+10);state.demigods.forEach(d=>{d.divineSiblingBond=clamp((d.divineSiblingBond||50)+8);d.memories=d.memories||[];d.memories.unshift(`Year ${state.year}: Bonded with immortal sibling ${c.name}.`)})}closeModal();renderAll();saveGame(false)})}
function syncDemigodFamilyAwareness(){const s=state.divineFamily.spouse;state.demigods.forEach(d=>{d.divineParent=getGod().name;d.divineStepParent=s?.name||null;d.divineSiblings=state.divineFamily.immortalChildren.map(c=>c.name);if(d.divineSiblingBond===undefined)d.divineSiblingBond=50;if(d.familyTrust===undefined)d.familyTrust=50;if(!d.memories)d.memories=[]})}
function renderFamilyTree(){buildDivineHouses();syncAutonomousDivineFamilies();const m=state.divineFamily.familyTree;$('#family-tree-count').textContent=`${m.length+state.demigods.length} Members`;$('#family-tree-summary').innerHTML=`<p class="eyebrow">MULTI-GENERATION PANTHEON</p><h3>Olympians, Titans, spouses, immortal children and demigods share one family history</h3>`;$('#family-tree-list').innerHTML=m.map(x=>`<article class="card family-tree-card ${x.type==='Titan'?'family-tree-titan':x.type.includes('Immortal')?'family-tree-immortal':'family-tree-olympian'}"><div class="card-row"><div class="council-head"><span class="family-icon-large">${x.icon}</span><div><h3>${x.name}</h3><p>${x.type} • ${x.relation}</p></div></div><span class="tag gold">${x.spouse?`Spouse: ${x.spouse}`:'Unmarried'}</span></div><p>Parents: ${x.parents?.join(', ')||'Ancient lineage'}<br>Children: ${x.children?.join(', ')||'None'}</p></article>`).join('')+state.demigods.map(d=>`<article class="card family-tree-card family-tree-demigod"><div class="card-row"><div class="council-head"><span class="family-icon-large">${d.icon}</span><div><h3>${d.name}</h3><p>Demigod • Child of ${d.divineParent}</p></div></div><span class="tag gold">${d.status}</span></div><p>Divine House: ${d.divineHouse||'Not yet assigned'}<br>Step-parent: ${d.divineStepParent||'None'}<br>Immortal siblings: ${(d.divineSiblings||[]).join(', ')||'None'}<br>Sibling bond: ${d.divineSiblingBond}</p></article>`).join('')}
function renderAscensionCouncil(){const e=state.demigods.filter(d=>d.status!=='Immortal'&&((d.fame||0)>=45||(d.reputation||0)>=45||d.age>=18));$('#ascension-count').textContent=`${e.length} Eligible`;$('#ascension-summary').innerHTML='<p class="eyebrow">OLYMPUS VOTES</p><h3>Legendary demigods can petition for full immortality</h3>';$('#ascension-list').innerHTML=e.length?e.map(d=>`<article class="card ascension-card ascension-ready"><div class="card-row"><div class="council-head"><span class="child-icon-large">${d.icon}</span><div><h3>${d.name}</h3><p>Fame ${d.fame} • Reputation ${d.reputation}</p></div></div><span class="tag gold">${d.status}</span></div><p>Step-parent: ${d.divineStepParent||'None'} • Divine siblings: ${(d.divineSiblings||[]).join(', ')||'None'}</p><button class="card-button" data-asc="${d.id}">Call Ascension Council</button></article>`).join(''):'<article class="card"><h3>No demigods are ready</h3><p>Build fame, reputation, or reach adulthood.</p></article>';$$('[data-asc]').forEach(b=>b.onclick=()=>ascendVote(b.dataset.asc))}
function ascendVote(id){const d=state.demigods.find(x=>x.id===id),s=state.divineFamily.spouse;let votes=1;state.council.forEach(g=>{if(g.name===getGod().name)return;let score=(g.relationship||50)+(d.reputation||0)*.4+(d.fame||0)*.35+(d.divineSiblingBond||50)*.15;if(s&&g.name===s.name)score-=s.jealousy*.7;if(Math.random()*100<score)votes++});const pass=votes>=Math.floor(state.council.length/2)+1;if(pass){d.status='Immortal';d.immortal=true;d.domain=d.domain||randomItem(divineDomainPool);d.title=`Immortal of ${d.domain}`;state.divineFamily.familyTree.push({id:uid('family'),name:d.name,icon:d.icon,type:'Ascended Immortal',relation:'Ascended Child',parents:[getGod().name,d.mortalParent||'Mortal Parent'],spouse:null,children:[]});state.prestige+=20;addLibraryEntry('people',`${d.name}, ${d.title}`,`Ascended in Year ${state.year}.`)}else{d.familyTrust=clamp((d.familyTrust||50)-5);d.memories.unshift(`Year ${state.year}: Olympus rejected my ascension.`)}addActivity('🌟',`Ascension Vote: ${d.name}`,`${votes}/${state.council.length} voted yes. ${pass?'Ascension granted.':'Ascension rejected.'}`,pass?'success':'danger');renderAll();saveGame(false)}
function divineFamilyStage2YearTurn(){const df=state.divineFamily,s=df.spouse;df.immortalChildren.forEach(c=>{c.age++;c.stage=[...immortalChildStages].reverse().find(x=>c.age>=x.minAge).id;c.power+=rand(0,3);c.wisdom+=rand(0,2);if(!c.domain&&c.age>=8&&Math.random()<.35){c.domain=c.latentDomain;c.title=`Young Deity of ${c.domain}`;createAlert({priority:'urgent',category:'family',icon:c.icon,title:`Divine Awakening: ${c.name}`,description:`${c.name} awakened power over ${c.domain}.`,location:'Mount Olympus',targetId:c.id,years:2})}});if(s){const attention=state.demigods.length?state.demigods.reduce((n,d)=>n+(d.fame||0)+(d.reputation||0),0)/state.demigods.length:0;s.jealousy=clamp(s.jealousy+(attention>70?rand(3,8):rand(-3,3)));if(state.demigods.length&&s.jealousy>=65&&Math.random()<.35)stepParentPlot(s)}syncDemigodFamilyAwareness()}
function stepParentPlot(s){const d=randomItem(state.demigods.filter(x=>x.status!=='Immortal'));if(!d)return;const c=randomItem(state.creatureEcosystem.filter(x=>x.attitude!=='Friendly'))||state.creatureEcosystem[0];if(c){c.territory=d.city||randomItem(state.cities).name;c.behavior='Hunting a Demigod';d.memories.unshift(`Year ${state.year}: ${s.name} may have sent ${c.name} after me.`);createAlert({priority:'critical',category:'family',icon:'🐉',title:`Monster Sent After ${d.name}`,description:`Evidence suggests ${s.name} directed ${c.name} toward the demigod.`,location:d.city||c.territory,targetId:d.id,years:1,choices:[{id:'intervene',label:'Protect the Demigod',cost:'Favor',amount:15,effect:'intervene'},{id:'delegate',label:'Send a Hero',cost:null,amount:0,effect:'delegate'},{id:'negotiate',label:'Confront the Spouse',cost:'Prestige',amount:10,effect:'negotiate'},{id:'ignore',label:'Side With the Spouse',cost:null,amount:0,effect:'ignore'}]})}}
function renderLivingCitizens(){
 const all=Object.entries(state.citizens).flatMap(([city,people])=>people.map(p=>({...p,city}))).filter(p=>p.alive!==false);
 const filter=state.livingWorld.citizenFilter||"all";
 let shown=all;
 if(filter==="priest")shown=all.filter(p=>p.job.toLowerCase().includes("priest")||p.job.toLowerCase().includes("oracle"));
 if(filter==="merchant")shown=all.filter(p=>p.job.toLowerCase().includes("merchant")||p.job.toLowerCase().includes("trader"));
 if(filter==="soldier")shown=all.filter(p=>p.job.toLowerCase().includes("soldier")||p.job.toLowerCase().includes("guard"));
 if(filter==="family")shown=all.filter(p=>p.family!=="Lives alone");
 $("#living-citizen-count").textContent=`${all.length} Citizens`;
 $("#living-citizen-summary").innerHTML=`<p class="eyebrow">MORTAL SIMULATION</p><h3>Citizens now have homes, workplaces, beliefs, goals, relationships, schedules, and memories</h3><div class="stats"><div class="stat"><strong>${all.length}</strong><small>Living Citizens</small></div><div class="stat"><strong>${all.filter(p=>p.religion===getGod().name).length}</strong><small>Your Worshippers</small></div><div class="stat"><strong>${state.livingWorld.prayers.filter(p=>p.status==="Waiting").length}</strong><small>Prayers</small></div></div>`;
 $$(".citizen-filter").forEach(b=>b.classList.toggle("active",b.dataset.citizenFilter===filter));
 $$(".citizen-filter").forEach(b=>b.onclick=()=>{state.livingWorld.citizenFilter=b.dataset.citizenFilter;renderLivingCitizens()});
 $("#living-citizen-list").innerHTML=shown.slice(0,80).map(p=>`<article class="card living-citizen-card"><div class="card-row"><div class="council-head"><span class="citizen-avatar-large">${getCitizenAvatar(p)}</span><div><h3>${p.name}</h3><p>${p.job} • ${p.city} • Age ${p.age}</p></div></div><span class="tag gold">${p.personality}</span></div><div class="citizen-life-grid"><div class="life-stat"><strong>${p.home}</strong><small>Home</small></div><div class="life-stat"><strong>${p.workplace}</strong><small>Work</small></div><div class="life-stat"><strong>${p.religion}</strong><small>Belief</small></div><div class="life-stat"><strong>${p.goal}</strong><small>Goal</small></div><div class="life-stat"><strong>${p.wealth}</strong><small>Wealth</small></div><div class="life-stat"><strong>${p.happiness}</strong><small>Happiness</small></div></div><button class="card-button" data-living-citizen="${p.city}|${p.id}">Follow This Life</button></article>`).join("");
 $$("[data-living-citizen]").forEach(b=>b.onclick=()=>{const [city,id]=b.dataset.livingCitizen.split("|");openLivingCitizen(city,id)});
}

function getCitizenAvatar(p){
 const map={"Priest":"🙏","Oracle":"🔮","Merchant":"🪙","Soldier":"🛡️","Guard":"⚔️","Farmer":"🌾","Scholar":"📜","Artisan":"🔨","Sailor":"⛵"};
 const key=Object.keys(map).find(k=>p.job.includes(k));return key?map[key]:"👤";
}

function openLivingCitizen(city,id){
 const p=state.citizens[city].find(x=>x.id===id);
 showModal(`<p class="eyebrow">LIVING CITIZEN</p><h2>${getCitizenAvatar(p)} ${p.name}</h2><p class="muted">${p.personality} ${p.job} of ${city}. Goal: ${p.goal}.</p><div class="memory-grid">${p.memories.slice(0,5).map(m=>`<div class="memory-chip-v2"><strong>Memory</strong>${m}</div>`).join("")||'<div class="memory-chip-v2"><strong>Memory</strong>No major divine memory yet.</div>'}</div><div class="citizen-grid-v2"><button class="action-button" data-citizen-life="speak">💬 Speak</button><button class="action-button" data-citizen-life="bless">✨ Bless</button><button class="action-button" data-citizen-life="task">📜 Give Sacred Task</button><button class="action-button" data-citizen-life="follow">👁️ Follow Schedule</button><button class="action-button" data-citizen-life="promote">👑 Promote</button><button class="action-button" data-citizen-life="family">❤️ Help Family</button></div>`);
 $$("[data-citizen-life]").forEach(b=>b.onclick=()=>resolveLivingCitizenAction(p,city,b.dataset.citizenLife));
}

function resolveLivingCitizenAction(p,city,action){
 if(action==="speak"){p.happiness=clamp(p.happiness+3);p.memories.unshift(`Year ${state.year}: ${getGod().name} spoke directly with me.`);state.livingWorld.conversations.unshift({speaker:p.name,text:`I seek to ${p.goal.toLowerCase()}.`,year:state.year})}
 if(action==="bless"){if(!spend("favor",6))return;p.happiness=clamp(p.happiness+15);p.wealth=clamp(p.wealth+8);p.loyalty=clamp(p.loyalty+12);p.religion=getGod().name;p.memories.unshift(`Year ${state.year}: Received a personal blessing.`);state.divineReputation.merciful+=2}
 if(action==="task"){state.sideQuests.push({id:uid("side"),city,title:`Sacred Task for ${p.name}`,rewardGold:40,rewardXP:35,status:"Available"});p.reputation+=5;p.memories.unshift(`Year ${state.year}: Chosen for a sacred task.`)}
 if(action==="follow"){showToast(p.schedule.join(" • "));p.memories.unshift(`Year ${state.year}: My daily life was observed by a god.`)}
 if(action==="promote"){p.reputation+=15;p.skill+=8;p.wealth=clamp(p.wealth+12);p.job=randomItem(["Temple Official","City Magistrate","Royal Advisor","Heroic Retainer"])}
 if(action==="family"){if(!spend("gold",12))return;p.happiness=clamp(p.happiness+14);p.family="Protected family";state.divineReputation.merciful+=1}
 p.memories=p.memories.slice(0,10);closeModal();renderAll();saveGame(false);
}

function renderPrayers(){
 const waiting=state.livingWorld.prayers.filter(p=>p.status==="Waiting");
 $("#prayer-count-label").textContent=`${waiting.length} Waiting`;
 $("#prayer-summary").innerHTML=`<p class="eyebrow">MORTAL VOICES</p><h3>Answer, ignore, or twist individual prayers with permanent consequences</h3><div class="stats"><div class="stat"><strong>${waiting.length}</strong><small>Waiting</small></div><div class="stat"><strong>${state.livingWorld.prayerHistory.filter(p=>p.outcome==="Answered").length}</strong><small>Answered</small></div><div class="stat"><strong>${state.livingWorld.prayerHistory.length}</strong><small>Total Decisions</small></div></div>`;
 $("#prayer-list").innerHTML=waiting.length?waiting.map(p=>`<article class="card prayer-card ${p.urgent?"prayer-urgent":""}"><div class="card-row"><div class="council-head"><span class="citizen-avatar-large">${p.icon}</span><div><h3>${p.title}</h3><p>${p.citizen} • ${p.city}</p></div></div><span class="tag gold">${p.expiresYear-state.year} years</span></div><p>${p.text}</p><div class="prayer-choice-grid"><button class="action-button" data-prayer-answer="${p.id}">✨ Answer • ${p.cost} Favor</button><button class="action-button" data-prayer-ignore="${p.id}">🌑 Ignore</button><button class="action-button" data-prayer-twist="${p.id}">🐍 Twist Prayer</button></div></article>`).join(""):`<article class="card"><h3>No prayers are waiting</h3><p>Mortals will submit new petitions as years pass.</p></article>`;
 $$("[data-prayer-answer]").forEach(b=>b.onclick=()=>resolvePrayer(b.dataset.prayerAnswer,"Answered"));
 $$("[data-prayer-ignore]").forEach(b=>b.onclick=()=>resolvePrayer(b.dataset.prayerIgnore,"Ignored"));
 $$("[data-prayer-twist]").forEach(b=>b.onclick=()=>resolvePrayer(b.dataset.prayerTwist,"Twisted"));
}

function resolvePrayer(id,outcome){
 const p=state.livingWorld.prayers.find(x=>x.id===id);if(!p)return;
 if(outcome==="Answered"&&!spend("favor",p.cost))return;
 const citizen=state.citizens[p.city]?.find(c=>c.id===p.citizenId),city=getCity(p.city);
 if(outcome==="Answered"){state.faith+=12;state.prestige+=4;if(citizen){citizen.happiness=clamp(citizen.happiness+18);citizen.loyalty=clamp(citizen.loyalty+15);citizen.memories.unshift(`Year ${state.year}: My prayer "${p.title}" was answered.`)}if(city){city.happiness=clamp(city.happiness+4);city.player=clamp(city.player+3)}state.divineReputation[p.trait]=(state.divineReputation[p.trait]||0)+2}
 if(outcome==="Ignored"){if(citizen){citizen.happiness=clamp(citizen.happiness-8);citizen.loyalty=clamp(citizen.loyalty-6);citizen.memories.unshift(`Year ${state.year}: My prayer was ignored.`)}if(city)city.player=clamp(city.player-2)}
 if(outcome==="Twisted"){state.favor+=4;state.divineReputation.deceitful+=3;if(citizen){citizen.happiness=clamp(citizen.happiness-4);citizen.memories.unshift(`Year ${state.year}: My prayer was answered in a dangerous way.`)}if(p.id.includes("justice"))state.divineReputation.ruthless+=2}
 p.status=outcome;p.outcome=outcome;p.resolvedYear=state.year;state.livingWorld.prayerHistory.unshift(p);state.livingWorld.prayers=state.livingWorld.prayers.filter(x=>x.id!==id);
 addActivity(p.icon,`${p.title}: ${outcome}`,`${p.citizen} of ${p.city} will remember this decision.`,outcome==="Answered"?"success":outcome==="Ignored"?"danger":"myth");
 if(outcome==="Answered")state.livingChronicle.campaignStats.prayersAnswered++;
 recordAfterAction({icon:p.icon,title:`Prayer ${outcome}: ${p.title}`,summary:`${p.citizen} of ${p.city} will remember your response.`,category:"prayers",location:p.city,target:p.citizen,changes:[{label:"Citizen Happiness",value:citizen?`${citizen.happiness}`:"Changed",tone:outcome==="Answered"?"positive":"negative"},{label:"City Influence",value:city?`${Math.round(city.player)}`:"Changed"},{label:"Faith",value:`${state.faith}`}],severity:outcome==="Answered"?"success":outcome==="Ignored"?"danger":"mythic"});
 renderAll();saveGame(false);
}

function renderInteractiveTemples(){
 const temples=state.livingWorld.temples;
 $("#temple-count-label").textContent=`${temples.length} Temples`;
 $("#temple-summary").innerHTML=`<p class="eyebrow">ACTIVE WORSHIP</p><h3>Temples host priests, offerings, ceremonies, festivals, petitions, and rival influence</h3><div class="stats"><div class="stat"><strong>${temples.filter(t=>t.status==="Devoted").length}</strong><small>Devoted</small></div><div class="stat"><strong>${temples.reduce((s,t)=>s+t.offerings,0)}</strong><small>Offerings</small></div><div class="stat"><strong>${temples.filter(t=>t.highPriest).length}</strong><small>High Priests</small></div></div>`;
 $("#temple-list").innerHTML=temples.map(t=>`<article class="card temple-card ${t.status==="Devoted"?"temple-devoted":"temple-rival"}"><div class="card-row"><div class="council-head"><span class="temple-icon-large">${t.icon}</span><div><h3>${t.name}</h3><p>${t.city} • ${t.highPriest||"No High Priest"}</p></div></div><span class="tag gold">${t.status}</span></div><div class="citizen-life-grid"><div class="life-stat"><strong>${t.devotion}</strong><small>Devotion</small></div><div class="life-stat"><strong>${t.rivalInfluence}</strong><small>Rival Influence</small></div><div class="life-stat"><strong>${t.offerings}</strong><small>Offerings</small></div><div class="life-stat"><strong>${t.shrines}</strong><small>Shrines</small></div></div><button class="card-button" data-temple="${t.id}">Enter Temple</button></article>`).join("");
 $$("[data-temple]").forEach(b=>b.onclick=()=>openInteractiveTemple(b.dataset.temple));
}

function openInteractiveTemple(id){
 const t=state.livingWorld.temples.find(x=>x.id===id);
 showModal(`<p class="eyebrow">INTERACTIVE TEMPLE</p><h2>${t.icon} ${t.name}</h2><p class="muted">Devotion ${t.devotion}. Rival influence ${t.rivalInfluence}. Offerings ${t.offerings}.</p><div class="temple-action-grid">${templeActivityTemplates.map(a=>`<button class="action-button" data-temple-action="${a.id}">${a.icon} ${a.name}<br><small>${a.cost?a.cost+" Gold":"No cost"}</small></button>`).join("")}</div>`);
 $$("[data-temple-action]").forEach(b=>b.onclick=()=>resolveTempleAction(t,b.dataset.templeAction));
}

function resolveTempleAction(t,action){
 const a=templeActivityTemplates.find(x=>x.id===action);if(a.cost&&!spend("gold",a.cost))return;
 const city=getCity(t.city);
 if(action==="ceremony"){t.ceremonies++;t.devotion=clamp(t.devotion+8);state.faith+=12}
 if(action==="offering"){state.gold+=t.offerings;t.offerings=0;state.faith+=5}
 if(action==="miracle"){t.devotion=clamp(t.devotion+12);t.rivalInfluence=clamp(t.rivalInfluence-8);city.happiness=clamp(city.happiness+8)}
 if(action==="priest"){const people=state.citizens[t.city].filter(p=>p.job.includes("Priest")||p.job.includes("Oracle"));const p=people[0]||state.citizens[t.city][0];t.highPriest=p.name;p.job="High Priest";p.reputation+=15}
 if(action==="festival"){city.happiness=clamp(city.happiness+12);city.culture=clamp(city.culture+8);t.offerings+=20}
 if(action==="shrine"){t.shrines++;t.devotion=clamp(t.devotion+6);city.player=clamp(city.player+4)}
 t.status=t.devotion>t.rivalInfluence?"Devoted":"Contested";t.history.unshift(`Year ${state.year}: ${a.name}.`);closeModal();
 recordAfterAction({icon:a.icon,title:`${a.name} at ${t.name}`,summary:`Your action changed religious life in ${t.city}.`,category:"cities",location:t.city,target:t.name,changes:[{label:"Temple Devotion",value:`${t.devotion}`,tone:"positive"},{label:"Rival Influence",value:`${t.rivalInfluence}`},{label:"Offerings",value:`${t.offerings}`}],severity:"success"});
 renderAll();saveGame(false);
}

function renderLivingWars(){
 const wars=state.livingWorld.wars;
 $("#living-war-count").textContent=`${wars.filter(w=>w.status==="Active").length} Wars`;
 $("#living-war-summary").innerHTML=`<p class="eyebrow">ONGOING CONFLICTS</p><h3>Wars unfold across years with battles, alliances, divine intervention, and peace negotiations</h3><div class="stats"><div class="stat"><strong>${wars.filter(w=>w.status==="Active").length}</strong><small>Active</small></div><div class="stat"><strong>${wars.reduce((s,w)=>s+w.battles,0)}</strong><small>Battles</small></div><div class="stat"><strong>${wars.filter(w=>w.status==="Peace").length}</strong><small>Peace Treaties</small></div></div>`;
 $("#living-war-list").innerHTML=wars.length?wars.map(w=>`<article class="card living-war-card ${w.status==="Peace"?"war-peace":""}"><div class="card-row"><div><h3>⚔️ ${w.attacker} vs ${w.defender}</h3><p>${w.reason}</p></div><span class="tag gold">${w.status}</span></div><div class="citizen-life-grid"><div class="life-stat"><strong>${w.attackerStrength}</strong><small>${w.attacker}</small></div><div class="life-stat"><strong>${w.defenderStrength}</strong><small>${w.defender}</small></div><div class="life-stat"><strong>${w.battles}</strong><small>Battles</small></div><div class="life-stat"><strong>${w.morale}</strong><small>Morale</small></div></div>${w.status==="Active"?`<button class="card-button" data-living-war="${w.id}">Intervene in War</button>`:""}</article>`).join(""):`<article class="card"><h3>No active wars</h3><p>Kingdoms may declare war autonomously as years pass.</p></article>`;
 $$("[data-living-war]").forEach(b=>b.onclick=()=>openLivingWar(b.dataset.livingWar));
}

function openLivingWar(id){
 const w=state.livingWorld.wars.find(x=>x.id===id);
 showModal(`<p class="eyebrow">DYNAMIC WAR</p><h2>⚔️ ${w.attacker} vs ${w.defender}</h2><p>${w.reason}</p><div class="war-action-grid">${livingWarActions.map(a=>`<button class="action-button" data-war-action="${a.id}">${a.icon} ${a.name}<br><small>${a.cost?a.cost+(a.id==="peace"?" Prestige":" Favor"):"No cost"}</small></button>`).join("")}</div>`);
 $$("[data-war-action]").forEach(b=>b.onclick=()=>resolveLivingWarAction(w,b.dataset.warAction));
}

function resolveLivingWarAction(w,action){
 const a=livingWarActions.find(x=>x.id===action);
 if(action==="bless"){if(!spend("favor",a.cost))return;w.attackerStrength+=12;w.morale+=8;state.divineReputation.ambitious+=1}
 if(action==="hero"){const h=state.heroes.filter(h=>h.recruited&&h.status!=="Dead").sort((x,y)=>y.level-x.level)[0];if(h){w.attackerStrength+=h.level*5;h.reputation+=8;h.xp+=30;levelHero(h)}else showToast("No hero is available.")}
 if(action==="storm"){if(!spend("favor",a.cost))return;w.attackerStrength-=8;w.defenderStrength-=14;w.morale-=10;state.divineReputation.ruthless+=2}
 if(action==="peace"){if(!spend("prestige",a.cost))return;const success=Math.random()*100<state.divineReputation.wise+state.prestige*.25+35;if(success){w.status="Peace";w.history.unshift(`Year ${state.year}: Divine peace negotiated.`);state.divineReputation.honorable+=3}else w.morale-=5}
 if(action==="neutral"){w.history.unshift(`Year ${state.year}: Olympus remained neutral.`)}
 closeModal();renderAll();saveGame(false);
}

function renderCreatureEcosystem(){
 const creatures=state.creatureEcosystem;
 $("#creature-count-label").textContent=`${creatures.length} Creatures`;
 $("#creature-summary").innerHTML=`<p class="eyebrow">MYTHIC ECOLOGY</p><h3>Creatures hunt, migrate, nest, fight, gain legends, and react to heroes and Titans</h3><div class="stats"><div class="stat"><strong>${creatures.filter(c=>c.attitude==="Hostile").length}</strong><small>Hostile</small></div><div class="stat"><strong>${creatures.filter(c=>c.nest).length}</strong><small>Nests</small></div><div class="stat"><strong>${creatures.reduce((s,c)=>s+c.legend,0)}</strong><small>Total Legend</small></div></div>`;
 $("#creature-list").innerHTML=creatures.map(c=>`<article class="card creature-card ${c.attitude==="Friendly"?"creature-friendly":c.attitude==="Hostile"?"creature-hostile":"creature-roaming"}"><div class="card-row"><div class="council-head"><span class="creature-icon-large">${c.icon}</span><div><h3>${c.name}</h3><p>${c.behavior} • ${c.territory}</p></div></div><span class="tag gold">${c.attitude}</span></div><div class="citizen-life-grid"><div class="life-stat"><strong>${c.strength}</strong><small>Strength</small></div><div class="life-stat"><strong>${c.hunger}</strong><small>Hunger</small></div><div class="life-stat"><strong>${c.age}</strong><small>Age</small></div><div class="life-stat"><strong>${c.legend}</strong><small>Legend</small></div></div><button class="card-button" data-creature="${c.id}">Interact With Creature</button></article>`).join("");
 $$("[data-creature]").forEach(b=>b.onclick=()=>openCreatureInteraction(b.dataset.creature));
}

function openCreatureInteraction(id){
 const c=state.creatureEcosystem.find(x=>x.id===id);
 showModal(`<p class="eyebrow">LEGENDARY CREATURE</p><h2>${c.icon} ${c.name}</h2><p>${c.behavior} near ${c.territory}. Attitude: ${c.attitude}.</p><div class="creature-action-grid"><button class="action-button" data-creature-action="hunt">⚔️ Send Hunter</button><button class="action-button" data-creature-action="tame">🤝 Attempt to Tame</button><button class="action-button" data-creature-action="feed">🍖 Feed Creature • 15 Gold</button><button class="action-button" data-creature-action="move">🌲 Redirect Territory</button><button class="action-button" data-creature-action="worship">🙏 Allow Worship</button><button class="action-button" data-creature-action="observe">👁️ Observe</button></div>`);
 $$("[data-creature-action]").forEach(b=>b.onclick=()=>resolveCreatureAction(c,b.dataset.creatureAction));
}

function resolveCreatureAction(c,action){
 if(action==="hunt"){const h=state.heroes.filter(h=>h.recruited&&h.status!=="Dead").sort((a,b)=>b.strength-a.strength)[0];if(h){const win=h.strength+h.level*7+Math.random()*70>c.strength+45;if(win){c.attitude="Defeated";c.legend+=15;h.reputation+=12;h.xp+=40;levelHero(h)}else h.health=clamp(h.health-20)}}
 if(action==="tame"){const chance=state.divineReputation.merciful+state.divineReputation.wise+Math.random()*80;if(chance>90){c.attitude="Friendly";c.behavior="Following a Hero";state.prestige+=10}else c.attitude="Hostile"}
 if(action==="feed"){if(!spend("gold",15))return;c.hunger=clamp(c.hunger-35);if(c.attitude==="Hostile")c.attitude="Wary"}
 if(action==="move"){c.territory=randomItem(state.cities).name;c.behavior="Migrating"}
 if(action==="worship"){c.attitude="Worshipped";c.legend+=20;state.faith+=8;state.divineReputation.ambitious+=2}
 if(action==="observe"){c.legend+=2;addLibraryEntry("myths",`The Living Legend of ${c.name}`,`${c.name} was observed ${c.behavior.toLowerCase()} near ${c.territory}.`)}
 c.history.unshift(`Year ${state.year}: ${action}.`);closeModal();renderAll();saveGame(false);
}

function generatePrayer(){
 const cities=state.cities.filter(c=>state.citizens[c.name]?.length);
 if(!cities.length)return;
 const city=randomItem(cities),citizen=randomItem(state.citizens[city.name].filter(p=>p.alive!==false)),t=randomItem(prayerTemplates);
 if(!citizen)return;
 state.livingWorld.prayers.unshift({
  id:`${t.id}-${uid("prayer")}`,templateId:t.id,icon:t.icon,title:t.title,text:t.text,cost:t.cost,trait:t.trait,
  citizen:citizen.name,citizenId:citizen.id,city:city.name,status:"Waiting",createdYear:state.year,
  expiresYear:state.year+rand(2,4),urgent:Math.random()<.25
 });
}

function livingCitizenYearTurn(){
 Object.entries(state.citizens).forEach(([city,people])=>people.forEach(p=>{
  if(p.alive===false)return;
  p.age++;
  p.wealth=clamp(p.wealth+rand(-5,7));p.happiness=clamp(p.happiness+rand(-5,5));p.skill=clamp(p.skill+rand(0,3));
  if(Math.random()<.08)p.goal=randomItem(["Raise a family","Gain wealth","Serve a temple","Become famous","Travel","Join an army","Study philosophy"]);
  if(Math.random()<.06&&p.age>65){p.alive=false;state.souls.unshift({id:uid("soul"),name:p.name,role:p.job,city,glory:p.reputation,virtue:p.loyalty,crimes:rand(0,35),icon:getCitizenAvatar(p),status:"Awaiting Judgment",birthYear:state.year-p.age,parents:"Mortal family",deeds:p.memories});state.underworld.soulsArrived++;state.livingChronicle.campaignStats.deaths++;recordChronicleEvent({icon:"🕯️",title:`Death of ${p.name}`,text:`${p.job} of ${city} entered the Underworld at age ${p.age}.`,category:"deaths",severity:"normal",target:p.name,location:city,tags:["underworld"]})}
  if(Math.random()<.06)p.memories.unshift(`Year ${state.year}: ${randomItem(["Changed jobs","Made a new friend","Argued with a rival","Attended a festival","Witnessed a miracle","Heard a prophecy"])}.`);
  p.memories=p.memories.slice(0,10);
 }));
 if(Math.random()<.75)generatePrayer();
 state.livingWorld.prayers.slice().forEach(p=>{if(state.year>=p.expiresYear){p.status="Expired";p.outcome="Ignored by Time";state.livingWorld.prayerHistory.unshift(p);state.livingWorld.prayers=state.livingWorld.prayers.filter(x=>x.id!==p.id)}});
}

function templeYearTurn(){
 state.livingWorld.temples.forEach(t=>{
  t.offerings+=rand(3,12);t.devotion=clamp(t.devotion+rand(-3,5));t.rivalInfluence=clamp(t.rivalInfluence+rand(-3,4));
  if(t.highPriest)t.devotion=clamp(t.devotion+2);
  t.status=t.devotion>t.rivalInfluence?"Devoted":"Contested";
  if(t.rivalInfluence>75)createAlert({priority:"urgent",category:"cities",icon:"🏛️",title:`Rival Cult Seizes ${t.city}`,description:`Rival temple influence has reached ${t.rivalInfluence}.`,location:t.city,targetId:t.id,years:2});
 });
}

function livingWarYearTurn(){
 state.livingWorld.wars.filter(w=>w.status==="Active").forEach(w=>{
  const aLoss=rand(2,12),dLoss=rand(2,12);w.attackerStrength=clamp(w.attackerStrength-aLoss);w.defenderStrength=clamp(w.defenderStrength-dLoss);w.battles++;w.morale=clamp(w.morale+rand(-8,4));
  w.history.unshift(`Year ${state.year}: Battle ${w.battles}, losses ${aLoss}/${dLoss}.`);
  if(w.attackerStrength<15||w.defenderStrength<15||w.morale<15){w.status="Peace";w.history.unshift(`Year ${state.year}: The war ended.`)}
 });
 if(state.livingWorld.wars.filter(w=>w.status==="Active").length<3&&Math.random()<.18){
  const pair=state.kingdoms.slice().sort(()=>Math.random()-.5).slice(0,2);
  if(pair.length===2)state.livingWorld.wars.push({id:uid("war"),attacker:pair[0].name,defender:pair[1].name,reason:randomItem(["Border dispute","Broken alliance","Religious conflict","Dynastic claim","Trade rivalry"]),attackerStrength:pair[0].army,defenderStrength:pair[1].army,battles:0,morale:70,status:"Active",startedYear:state.year,history:[`Year ${state.year}: War declared.`]});
 }
}

function creatureEcosystemYearTurn(){
 state.creatureEcosystem.forEach(c=>{
  c.age++;c.hunger=clamp(c.hunger+rand(4,12));c.behavior=randomItem(creatureBehaviorTemplates);
  if(c.behavior==="Migrating"&&Math.random()<.55)c.territory=randomItem(state.cities).name;
  if(c.behavior==="Attacking Villages"){const city=getCity(c.territory);if(city){city.happiness=clamp(city.happiness-rand(4,10));city.unrest=clamp(city.unrest+rand(5,12));c.legend+=5;if(city.unrest>65)createAlert({priority:"critical",category:"monsters",icon:c.icon,title:`${c.name} Attacks ${city.name}`,description:`The roaming creature is ${c.behavior.toLowerCase()}.`,location:city.name,targetId:c.monsterId,years:1})}}
  if(c.behavior==="Following a Titan Cult")state.titanCouncil.rebellionStrength=clamp(state.titanCouncil.rebellionStrength+2);
  if(c.hunger>90)c.strength+=2;
  if(c.attitude==="Friendly")state.prestige+=1;
 });
}

function livingConversationYearTurn(){
 if(Math.random()<.38){
  const speakers=[
   ...state.heroes.filter(h=>h.recruited).map(h=>({name:h.name,icon:h.portrait,type:"hero"})),
   ...state.council.map(g=>({name:g.name,icon:g.icon,type:"god"})),
   ...state.demigods.filter(d=>d.status!=="Mortal Death").map(d=>({name:d.name,icon:d.icon,type:"demigod"}))
  ];
  const s=randomItem(speakers);if(!s)return;
  const text=randomItem(["requests a blessing before a dangerous journey.","warns of a dark omen.","asks you to support a political claim.","questions a recent divine decision.","offers information about a Titan cult.","asks for personal training."]);
  state.livingWorld.conversations.unshift({id:uid("conversation"),speaker:s.name,icon:s.icon,type:s.type,text,year:state.year,status:"Waiting"});
  createAlert({priority:"important",category:s.type==="god"?"gods":s.type==="hero"?"heroes":"family",icon:s.icon,title:`${s.name} Requests an Audience`,description:`${s.name} ${text}`,location:s.type==="god"?"Mount Olympus":"Greece",targetId:s.name,years:3,choices:[{id:"intervene",label:"Grant Audience",cost:null,amount:0,effect:"intervene"},{id:"negotiate",label:"Reply Later",cost:null,amount:0,effect:"negotiate"}]});
 }
}

function livingWorldStoryYearTurn(){
 const stories=[];
 if(state.livingWorld.wars.some(w=>w.status==="Active"))stories.push("A mortal war reshapes alliances and creates new heroes.");
 if(state.creatureEcosystem.some(c=>c.attitude==="Worshipped"))stories.push("A legendary creature is now worshipped by mortals.");
 if(state.livingWorld.temples.some(t=>t.rivalInfluence>t.devotion))stories.push("A rival cult gains control of a major temple.");
 if(state.dynasties.some(d=>d.status==="Rising"&&d.influence>80))stories.push("A dynasty is becoming powerful enough to form an empire.");
 if(state.livingWorld.prayerHistory.filter(p=>p.outcome==="Answered").length>5)stories.push("Mortals tell stories of a god who answers prayers.");
 if(stories.length){
  const text=randomItem(stories);state.livingWorld.worldStories.unshift({id:uid("story"),text,year:state.year});state.livingWorld.worldStories=state.livingWorld.worldStories.slice(0,80);generateProceduralMyth(`Living World: Year ${state.year}`,text);
 }
}
function renderLegendaryAdventures(){
 const active=state.legendaryAdventures.filter(q=>q.status==="Active");
 $("#adventure-status-label").textContent=active.length?`${active.length} Active`:"No Active Quest";
 $("#adventure-summary").innerHTML=`<p class="eyebrow">MYTHIC QUEST ENGINE</p><h3>Branching adventures connect heroes, gods, Titans, Atlantis, and the Underworld</h3><div class="stats"><div class="stat"><strong>${active.length}</strong><small>Active</small></div><div class="stat"><strong>${state.legendaryAdventures.filter(q=>q.status==="Completed").length}</strong><small>Completed</small></div><div class="stat"><strong>${state.legendaryArtifacts.filter(a=>a.owned).length}</strong><small>Artifacts</small></div></div>`;
 $("#legendary-quest-list").innerHTML=state.legendaryAdventures.map(q=>`<article class="card legendary-quest-card ${q.status==="Active"?"quest-active":q.status==="Completed"?"quest-completed":q.status==="Failed"?"quest-failed":""}"><div class="card-row"><div class="council-head"><span class="quest-icon-large">${q.icon}</span><div><h3>${q.name}</h3><p>${q.difficulty} • ${q.description}</p></div></div><span class="tag gold">${q.status}</span></div><div class="quest-stage-grid">${q.stages.map((s,i)=>`<div class="quest-stage ${i<q.currentStage?"complete":i===q.currentStage&&q.status==="Active"?"current":""}"><strong>${i+1}. ${s[0]}</strong><small>${s[1]}</small></div>`).join("")}</div><button class="card-button" data-quest="${q.id}">${q.status==="Available"?"Begin Quest":q.status==="Active"?"Continue Quest":"Review Legend"}</button></article>`).join("");
 $$("[data-quest]").forEach(b=>b.addEventListener("click",()=>handleLegendaryQuest(b.dataset.quest)));
 $("#adventure-location-list").innerHTML=state.adventureLocations.map(l=>`<article class="card adventure-location-card ${l.discovered?"location-discovered":""} ${l.danger>75?"location-dangerous":""}"><div class="card-row"><div class="council-head"><span class="adventure-location-icon">${l.icon}</span><div><h3>${l.name}</h3><p>${l.region} • Danger ${l.danger}</p></div></div><span class="tag gold">${l.discovered?(l.cleared?"Cleared":"Discovered"):"Hidden"}</span></div><p>${l.text}</p><button class="card-button" data-explore="${l.id}" ${!l.discovered?"disabled":""}>Explore Location</button></article>`).join("");
 $$("[data-explore]").forEach(b=>b.addEventListener("click",()=>exploreLegendaryLocation(b.dataset.explore)));
}
function handleLegendaryQuest(id){
 const q=state.legendaryAdventures.find(x=>x.id===id);
 if(q.status==="Completed"||q.status==="Failed"){showModal(`<p class="eyebrow">QUEST CHRONICLE</p><h2>${q.icon} ${q.name}</h2>${q.history.map(x=>`<div class="memory-chip">${x}</div>`).join("")||"<p>No history.</p>"}`);return}
 if(q.status==="Available"){
  const heroes=state.heroes.filter(h=>h.recruited&&h.status!=="Dead");if(!heroes.length){showToast("Recruit a hero first.");return}
  showModal(`<p class="eyebrow">ASSIGN HERO</p><h2>${q.icon} ${q.name}</h2><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-quest-hero="${h.id}">${h.portrait} ${h.name}<br><small>Level ${h.level}</small></button>`).join("")}</div>`);
  $$("[data-quest-hero]").forEach(b=>b.addEventListener("click",()=>{q.status="Active";q.heroId=b.dataset.questHero;q.currentStage=0;q.history.unshift(`Year ${state.year}: Quest begun.`);closeModal();showQuestScene(q)}));return;
 }
 showQuestScene(q);
}
function showQuestScene(q){
 const h=getHero(q.heroId),s=q.stages[q.currentStage];let o=document.querySelector(".cinematic-overlay");if(o)o.remove();
 o=document.createElement("div");o.className="cinematic-overlay";o.innerHTML=`<div class="cinematic-panel"><div class="cinematic-visual">${q.icon}</div><p class="eyebrow">CHAPTER ${q.currentStage+1}</p><h2>${s[0]}</h2><p class="muted">${q.description}</p><div class="stats"><div class="stat"><strong>${h.name}</strong><small>Champion</small></div><div class="stat"><strong>${s[1]}</strong><small>Location</small></div><div class="stat"><strong>${q.difficulty}</strong><small>Difficulty</small></div></div><div class="adventure-choice-grid"><button class="action-button" data-qchoice="wisdom">🦉 Investigate</button><button class="action-button" data-qchoice="force">⚔️ Use Force</button><button class="action-button" data-qchoice="battle">🛡️ Enter Tactical Battle</button><button class="action-button" data-qchoice="divine">✨ Divine Intervention • 12 Favor</button></div><button class="secondary-button" id="close-qscene">Return Later</button></div>`;document.body.appendChild(o);
 $$("[data-qchoice]").forEach(b=>b.addEventListener("click",()=>resolveQuestChoice(q,b.dataset.qchoice)));$("#close-qscene").onclick=()=>o.remove();
}
function resolveQuestChoice(q,c){
 const h=getHero(q.heroId);if(c==="divine"&&!spend("favor",12))return;if(c==="battle"){startQuestBattle(q);return}
 const score=c==="wisdom"?h.wisdom+h.leadership*.3:c==="force"?h.strength+h.courage*.3:(h.divineAffinity||70)+20;
 const success=score+Math.random()*70>55+q.currentStage*10+(q.difficulty==="Mythic"?15:q.difficulty==="Legendary"?8:0);
 if(success){h.xp+=35;h.reputation+=6;levelHero(h);q.history.unshift(`Year ${state.year}: ${q.stages[q.currentStage][0]} completed by ${c}.`);q.currentStage++;if(q.currentStage>=q.stages.length)completeQuest(q)}
 else{h.health=clamp(h.health-rand(12,25));q.history.unshift(`Year ${state.year}: Setback during ${q.stages[q.currentStage][0]}.`);if(h.health<20)createAlert({priority:"critical",category:"heroes",icon:h.portrait,title:`${h.name} Is Near Death`,description:`The hero was wounded during ${q.name}.`,location:q.stages[q.currentStage][1],targetId:h.id,years:1})}
 document.querySelector(".cinematic-overlay")?.remove();renderAll();saveGame(false);
}
function startQuestBattle(q){
 const h=getHero(q.heroId);q.battle={hero:h.health,enemy:100,morale:70,round:1,log:["Battle begins."]};renderQuestBattle(q);
}
function renderQuestBattle(q){
 const b=q.battle,h=getHero(q.heroId);let o=document.querySelector(".cinematic-overlay");if(o)o.remove();
 o=document.createElement("div");o.className="cinematic-overlay";o.innerHTML=`<div class="cinematic-panel"><div class="cinematic-visual">⚔️</div><p class="eyebrow">TACTICAL BATTLE • ROUND ${b.round}</p><h2>${q.stages[q.currentStage][0]}</h2><div class="stats"><div class="stat"><strong>${Math.round(b.hero)}%</strong><small>Hero</small></div><div class="stat"><strong>${Math.round(b.enemy)}%</strong><small>Enemy</small></div><div class="stat"><strong>${b.morale}</strong><small>Morale</small></div></div><div class="battle-choice-grid"><button class="action-button" data-battle="attack">⚔️ Attack</button><button class="action-button" data-battle="tactic">🦉 Tactic</button><button class="action-button" data-battle="ability">✨ Ability</button><button class="action-button" data-battle="defend">🛡️ Defend</button><button class="action-button" data-battle="miracle">⚡ Miracle • 12 Favor</button><button class="action-button" data-battle="retreat">🏃 Retreat</button></div><div class="battle-log">${b.log.map(x=>`<div class="battle-log-line">${x}</div>`).join("")}</div></div>`;document.body.appendChild(o);
 $$("[data-battle]").forEach(x=>x.onclick=()=>resolveQuestBattle(q,x.dataset.battle));
}
function resolveQuestBattle(q,a){
 const b=q.battle,h=getHero(q.heroId);if(a==="retreat"){q.battle=null;document.querySelector(".cinematic-overlay")?.remove();renderAll();return}if(a==="miracle"&&!spend("favor",12))return;
 let dmg=a==="attack"?h.strength*.35+Math.random()*18:a==="tactic"?h.wisdom*.35+Math.random()*18:a==="ability"?25+h.level*5:a==="miracle"?48:8;
 if(a==="defend"){b.hero=clamp(b.hero+8);b.morale=clamp(b.morale+12)}
 b.enemy=clamp(b.enemy-dmg);if(b.enemy>0)b.hero=clamp(b.hero-(10+Math.random()*18-(a==="defend"?8:0)));b.log.push(`${a}: ${Math.round(dmg)} damage.`);b.round++;
 if(b.enemy<=0){h.xp+=60;h.reputation+=12;h.health=Math.max(h.health,b.hero);levelHero(h);q.battle=null;q.currentStage++;q.history.unshift(`Year ${state.year}: Tactical victory.`);document.querySelector(".cinematic-overlay")?.remove();if(q.currentStage>=q.stages.length)completeQuest(q);renderAll();return}
 if(b.hero<=0){h.health=5;h.status="Wounded";q.battle=null;document.querySelector(".cinematic-overlay")?.remove();createAlert({priority:"critical",category:"heroes",icon:h.portrait,title:`${h.name} Is Defeated`,description:`The hero fell during ${q.name}.`,location:q.stages[q.currentStage][1],targetId:h.id,years:1});renderAll();return}
 renderQuestBattle(q);
}
function completeQuest(q){
 q.status="Completed";state.gold+=150;state.prestige+=50;state.completedLegends++;const a=state.legendaryArtifacts.find(a=>a.name===q.reward);if(a)a.owned=true;const h=getHero(q.heroId);if(h){h.titles.push(`Champion of ${q.name}`);h.reputation+=20}q.history.unshift(`Year ${state.year}: Quest completed and ${q.reward} claimed.`);addLibraryEntry("myths",q.name,`Completed in Year ${state.year}.`);if(a)addLibraryEntry("relics",a.name,a.text);createAlert({priority:"success",category:"heroes",icon:q.icon,title:`Legend Completed: ${q.name}`,description:`${q.reward} has been claimed.`,location:q.stages[q.stages.length-1][1],years:3});}
function exploreLegendaryLocation(id){
 const l=state.adventureLocations.find(x=>x.id===id),h=state.heroes.filter(x=>x.recruited&&x.status!=="Dead").sort((a,b)=>b.level-a.level)[0];if(!h){showToast("Recruit a hero.");return}
 l.visits++;const success=(h.strength+h.wisdom+h.courage)/3+h.level*5+Math.random()*70>l.danger+40;if(success){l.cleared=true;h.xp+=30;h.reputation+=5;state.gold+=rand(20,55);if(Math.random()<.25){const a=state.legendaryArtifacts.find(a=>!a.owned);if(a){a.owned=true;addLibraryEntry("relics",a.name,a.text)}}addActivity(l.icon,`${l.name} Explored`,`${h.name} cleared the location.`,"success")}else{h.health=clamp(h.health-rand(8,22));addActivity("⚠️",`Expedition Fails`,`${h.name} returns wounded from ${l.name}.`,"danger")}renderAll();saveGame(false);
}
function renderDynasties(){
 $("#dynasty-count-label").textContent=`${state.dynasties.length} Houses`;$("#dynasty-summary").innerHTML=`<p class="eyebrow">GENERATIONAL POWER</p><h3>Houses inherit influence, rivals, heirs, and artifacts</h3><div class="stats"><div class="stat"><strong>${state.dynasties.filter(d=>d.status==="Rising").length}</strong><small>Rising</small></div><div class="stat"><strong>${state.dynasties.reduce((s,d)=>s+d.heirs,0)}</strong><small>Heirs</small></div><div class="stat"><strong>${state.legendaryArtifacts.filter(a=>a.owned).length}</strong><small>Relics</small></div></div><button id="found-dynasty" class="primary-button">Found Heroic Dynasty • 40 Prestige</button>`;$("#found-dynasty").onclick=foundDynasty;
 $("#dynasty-list").innerHTML=state.dynasties.map(d=>`<article class="card dynasty-card"><div class="card-row"><div class="council-head"><span class="dynasty-icon">${d.icon}</span><div><h3>${d.name}</h3><p>${d.kingdom} • ${d.founder}</p></div></div><span class="tag gold">${d.status}</span></div><div class="dynasty-grid"><div class="dynasty-stat"><strong>${d.influence}</strong><small>Influence</small></div><div class="dynasty-stat"><strong>${d.wealth}</strong><small>Wealth</small></div><div class="dynasty-stat"><strong>${d.military}</strong><small>Military</small></div><div class="dynasty-stat"><strong>${d.heirs}</strong><small>Heirs</small></div></div><button class="card-button" data-dynasty="${d.id}">Support House</button></article>`).join("");$$("[data-dynasty]").forEach(b=>b.onclick=()=>{const d=state.dynasties.find(x=>x.id===b.dataset.dynasty);if(spend("gold",25)){d.influence=clamp(d.influence+10);d.wealth=clamp(d.wealth+8);d.history.unshift(`Year ${state.year}: Received divine support.`);renderAll();saveGame(false)}});
}
function foundDynasty(){
 if(!spend("prestige",40))return;const h=state.heroes.filter(h=>h.recruited&&h.reputation>=25).sort((a,b)=>b.reputation-a.reputation)[0];if(!h){state.prestige+=40;showToast("A hero needs 25 reputation.");return}state.dynasties.push({id:uid("dynasty"),name:`House of ${h.name}`,icon:h.portrait,kingdom:h.location,founder:h.name,influence:45,wealth:35,military:50,heirs:1,status:"Rising",history:[`Founded in Year ${state.year}.`]});h.titles.push("Dynasty Founder");renderAll();saveGame(false);
}
function adventureYearTurn(){
 const hidden=state.adventureLocations.filter(l=>!l.discovered);if(hidden.length&&Math.random()<.25){const l=randomItem(hidden);l.discovered=true;addActivity("🗺️","New Legendary Location",`${l.name} has been discovered.`,"myth")}
}
function dynastyYearTurn(){state.dynasties.forEach(d=>{d.influence=clamp(d.influence+rand(-5,7));d.wealth=clamp(d.wealth+rand(-4,7));d.military=clamp(d.military+rand(-4,6));if(Math.random()<.15)d.heirs++;d.status=d.influence>70?"Rising":d.influence<25?"Falling":"Stable";if(d.status==="Falling"&&Math.random()<.2)createAlert({priority:"urgent",category:"kingdoms",icon:d.icon,title:`${d.name} Faces Collapse`,description:`Influence has fallen to ${d.influence}.`,location:d.kingdom,targetId:d.id,years:2})})}
function renderAlertsCenter(){
 const active=state.alerts.filter(a=>a.status==="active"),critical=active.filter(a=>a.priority==="critical");
 $("#alerts-count-label").textContent=`${active.length} Active`;
 $("#alerts-summary").innerHTML=`<p class="eyebrow">WORLD ATTENTION SYSTEM</p><h3>${critical.length?`${critical.length} Mythic crises require action`:`${active.length} unresolved events are being tracked`}</h3><div class="stats"><div class="stat"><strong>${critical.length}</strong><small>Critical</small></div><div class="stat"><strong>${active.filter(a=>a.priority==="urgent").length}</strong><small>Urgent</small></div><div class="stat"><strong>${state.alertHistory.length}</strong><small>Resolved</small></div></div>`;
 const badge=$("#notification-badge"),bell=$("#notification-bell");
 if(active.length){badge.textContent=active.length;badge.classList.remove("hidden");bell.classList.add("has-alerts")}else{badge.classList.add("hidden");bell.classList.remove("has-alerts")}
 $$(".alert-filter").forEach(b=>b.classList.toggle("active",b.dataset.alertFilter===state.alertFilter));
 $$(".alert-filter").forEach(b=>b.onclick=()=>{state.alertFilter=b.dataset.alertFilter;renderAlertsCenter()});
 let alerts;
 if(state.alertFilter==="history")alerts=state.alertHistory;
 else if(state.alertFilter==="active")alerts=active;
 else alerts=active.filter(a=>a.priority===state.alertFilter);
 $("#alerts-list").innerHTML=alerts.length?alerts.map(a=>renderAlertCard(a,state.alertFilter==="history")).join(""):`<article class="card"><h3>No alerts in this category</h3><p>The world is currently stable.</p></article>`;
 $$("[data-alert-resolve]").forEach(b=>b.addEventListener("click",()=>openAlertInteraction(b.dataset.alertResolve)));
 $$("[data-alert-dismiss]").forEach(b=>b.addEventListener("click",()=>postponeAlert(b.dataset.alertDismiss)));
 $$("[data-alert-jump]").forEach(b=>b.addEventListener("click",()=>jumpToAlertTarget(b.dataset.alertJump)));
 $("#activity-feed-list").innerHTML=state.activityFeed.slice(0,35).map(x=>`<article class="card activity-card ${x.tone||""}"><div class="card-row"><h3>${x.icon} ${x.title}</h3><span class="pill">Year ${x.year}</span></div><p>${x.text}</p></article>`).join("")||`<article class="card"><h3>The world is quiet</h3><p>Autonomous actions and notifications will appear here.</p></article>`;
}

function renderAlertCard(a,history=false){
 const def=alertPriorityDefinitions[a.priority]||alertPriorityDefinitions.information;
 return `<article class="card alert-card ${def.className} ${a.status==="expired"?"alert-expired":""}"><div class="card-row"><div class="council-head"><span class="portrait">${a.icon}</span><div><p class="alert-priority">${def.icon} ${def.name}</p><h3>${a.title}</h3></div></div><span class="tag gold">${a.category}</span></div><p>${a.description}</p><p class="alert-timer">${history?`Outcome: ${a.outcome||a.status}`:`Time remaining: ${Math.max(0,a.expiresYear-state.year)} year(s) • ${a.location||"World"}`}</p>${history?"":`<div class="choice-row"><button class="choice-button good" data-alert-resolve="${a.id}">Respond Now</button><button class="choice-button bad" data-alert-dismiss="${a.id}">Postpone</button></div><button class="card-button alert-jump-button" data-alert-jump="${a.id}">Go to ${a.location||"Affected Area"}</button>`}</article>`;
}

function renderLivingAI(){
 const chars=state.aiCharacters;
 $("#living-ai-status").textContent=`${chars.length} Active Minds`;
 $("#living-ai-summary").innerHTML=`<p class="eyebrow">AUTONOMOUS SIMULATION</p><h3>Gods, Titans, heroes, rulers, demigods, and Underworld figures now remember and act independently</h3><div class="stats"><div class="stat"><strong>${chars.length}</strong><small>Characters</small></div><div class="stat"><strong>${state.aiDecisions.length}</strong><small>Decisions</small></div><div class="stat"><strong>${state.dynamicAchievements.length}</strong><small>Titles Earned</small></div></div>`;
 $("#living-ai-character-list").innerHTML=chars.slice(0,40).map(c=>`<article class="card ai-character-card"><div class="card-row"><div class="council-head"><span class="divine-avatar">${c.icon}</span><div><h3>${c.name}</h3><p>${c.type} • Opinion ${c.opinion}</p></div></div><span class="tag gold">${aiGoalTemplates.find(g=>g.id===c.goal)?.name||c.goal}</span></div><div class="personality-grid">${c.personality.map(id=>{const p=aiPersonalityTraits.find(x=>x.id===id);return `<div class="personality-chip"><strong>${p.icon} ${p.name}</strong>Personality</div>`}).join("")}<div class="goal-chip"><strong>🎯 Goal</strong>${aiGoalTemplates.find(g=>g.id===c.goal)?.name}</div></div><div class="meter ai-goal-progress"><span style="width:${c.goalProgress}%"></span></div><p class="muted">${c.lastAction}</p><button class="card-button" data-ai-character="${c.key}">View Memories & Influence</button></article>`).join("");
 $$("[data-ai-character]").forEach(b=>b.addEventListener("click",()=>openAICharacter(b.dataset.aiCharacter)));
 $("#ai-decision-list").innerHTML=state.aiDecisions.slice(0,25).map(d=>`<article class="card ai-decision-card"><div class="card-row"><h3>${d.icon} ${d.character}</h3><span class="pill">Year ${d.year}</span></div><p>${d.decision}</p><small class="muted">${d.result}</small></article>`).join("")||`<article class="card"><h3>No independent decisions yet</h3><p>Advance the year to let characters pursue their goals.</p></article>`;
}

function openAICharacter(key){
 const c=state.aiCharacters.find(x=>x.key===key);if(!c)return;
 showModal(`<p class="eyebrow">LIVING CHARACTER</p><h2>${c.icon} ${c.name}</h2><p class="muted">${c.type}. Opinion ${c.opinion}. Loyalty ${c.loyalty}. Fear ${c.fear}.</p><div class="memory-grid">${c.memories.slice(0,6).map(m=>`<div class="memory-chip-v2"><strong>Memory</strong>${typeof m==="string"?m:m.text||"Remembered event"}</div>`).join("")||'<div class="memory-chip-v2"><strong>Memory</strong>No important shared history yet.</div>'}</div><div class="ai-action-grid"><button class="action-button" data-ai-influence="support">🤝 Support Their Goal</button><button class="action-button" data-ai-influence="question">💬 Ask Their Intentions</button><button class="action-button" data-ai-influence="redirect">🧭 Redirect Their Goal</button><button class="action-button" data-ai-influence="warn">⚠️ Warn Them</button></div>`);
 $$("[data-ai-influence]").forEach(b=>b.addEventListener("click",()=>influenceAICharacter(c,b.dataset.aiInfluence)));
}

function influenceAICharacter(c,action){
 if(action==="support"){if(!spend("favor",8))return;c.opinion=clamp(c.opinion+8);c.loyalty=clamp(c.loyalty+5);c.goalProgress=clamp(c.goalProgress+15);rememberAI(c,`You supported the goal: ${aiGoalTemplates.find(g=>g.id===c.goal)?.name}.`)}
 if(action==="question"){c.opinion=clamp(c.opinion+3);rememberAI(c,"You asked about their private intentions.");addActivity("💬",`${c.name} Reveals an Intention`,`${c.name} is pursuing ${aiGoalTemplates.find(g=>g.id===c.goal)?.name}.`,"myth")}
 if(action==="redirect"){if(!spend("prestige",8))return;c.goal=randomItem(aiGoalTemplates).id;c.goalProgress=10;c.opinion=clamp(c.opinion-2);rememberAI(c,"You redirected their life goal.")}
 if(action==="warn"){c.fear=clamp(c.fear+8);c.goalProgress=Math.max(0,c.goalProgress-8);rememberAI(c,"You warned them against reckless action.")}
 closeModal();renderAll();saveGame(false);
}

function rememberAI(c,text){
 c.memories.unshift(`Year ${state.year}: ${text}`);c.memories=c.memories.slice(0,12);
}

function addActivity(icon,title,text,tone=""){
 state.activityFeed.unshift({id:uid("activity"),icon,title,text,tone,year:state.year});
 state.activityFeed=state.activityFeed.slice(0,120);
}

function createAlert(config){
 const related=state.notificationSettings.groupRelated&&state.alerts.find(a=>a.status==="active"&&a.category===config.category&&a.location===config.location&&a.priority===config.priority);
 if(related){
  related.description+=` ${config.description}`;
  related.relatedCount=(related.relatedCount||1)+1;
  related.expiresYear=Math.max(related.expiresYear,config.expiresYear||state.year+1);
  return related;
 }
 const alert={
  id:uid("alert"),status:"active",createdYear:state.year,
  expiresYear:config.expiresYear||state.year+(config.years||2),
  priority:config.priority||"important",category:config.category||"world",
  icon:config.icon||"🔔",title:config.title||"World Event",
  description:config.description||"",location:config.location||"World",
  targetType:config.targetType||null,targetId:config.targetId||null,
  choices:config.choices||defaultAlertChoices(config),
  source:config.source||"Living World",relatedCount:1
 };
 state.alerts.unshift(alert);
 addActivity(alert.icon,alert.title,alert.description,alert.priority==="critical"?"danger":"");
 if(alert.priority==="critical"&&state.notificationSettings.criticalPopups)state.urgentInterruptId=alert.id;
 else if(alert.priority==="urgent"&&state.notificationSettings.urgentPopups&&!state.urgentInterruptId)state.urgentInterruptId=alert.id;
 return alert;
}

function defaultAlertChoices(config){
 return[
  {id:"intervene",label:"Intervene Personally",cost:"Favor",amount:15,effect:"intervene"},
  {id:"delegate",label:"Send a Hero",cost:null,amount:0,effect:"delegate"},
  {id:"negotiate",label:"Negotiate",cost:"Prestige",amount:10,effect:"negotiate"},
  {id:"ignore",label:"Ignore the Crisis",cost:null,amount:0,effect:"ignore"}
 ];
}

function openAlertInteraction(id,asInterrupt=false){
 const a=state.alerts.find(x=>x.id===id);if(!a)return;
 const content=`<p class="eyebrow">${alertPriorityDefinitions[a.priority].name.toUpperCase()}</p><span class="interrupt-icon">${a.icon}</span><h2>${a.title}</h2><p class="muted">${a.description}</p><div class="stats"><div class="stat"><strong>${a.location}</strong><small>Location</small></div><div class="stat"><strong>${Math.max(0,a.expiresYear-state.year)}</strong><small>Years Left</small></div><div class="stat"><strong>${a.relatedCount||1}</strong><small>Linked Events</small></div></div><div class="alert-choice-grid">${a.choices.map(c=>`<button class="action-button alert-choice" data-alert-choice="${c.id}"><strong>${c.label}</strong><br><small>${c.cost?`${c.amount} ${c.cost}`:"No resource cost"}</small></button>`).join("")}</div>${a.priority!=="critical"?'<button id="close-alert-popup" class="secondary-button">Decide Later</button>':""}`;
 if(asInterrupt){
  let overlay=document.querySelector(".interrupt-overlay");if(overlay)overlay.remove();
  overlay=document.createElement("div");overlay.className="interrupt-overlay";overlay.innerHTML=`<div class="interrupt-panel">${content}</div>`;document.body.appendChild(overlay);
 }else showModal(content);
 $$("[data-alert-choice]").forEach(b=>b.addEventListener("click",()=>resolveAlertChoice(a,b.dataset.alertChoice,asInterrupt)));
 const close=$("#close-alert-popup");if(close)close.addEventListener("click",()=>{if(asInterrupt)document.querySelector(".interrupt-overlay")?.remove();else closeModal()});
}

function resolveAlertChoice(a,choiceId,asInterrupt){
 const choice=a.choices.find(c=>c.id===choiceId);if(!choice)return;
 if(choice.cost){
  const key=choice.cost.toLowerCase();
  if(!spend(key,choice.amount))return;
 }
 let result="";
 if(choice.effect==="intervene"){
  result=resolveDirectIntervention(a);state.divineReputation.heroic+=3;state.avatar.reputation+=3;
 }
 if(choice.effect==="delegate"){
  const hero=state.heroes.filter(h=>h.recruited&&h.health>20).sort((x,y)=>y.level-x.level)[0];
  if(hero){hero.xp+=35;hero.reputation+=6;hero.health=clamp(hero.health-rand(0,18));levelHero(hero);result=`${hero.name} was sent and contained the crisis.`}
  else{result="No hero was available. The intervention was only partly successful.";applyIgnoredAlertConsequence(a,.5)}
 }
 if(choice.effect==="negotiate"){
  const success=Math.random()*100<state.prestige*.35+state.divineReputation.wise+35;
  if(success){result="Negotiation prevented the worst outcome.";state.divineReputation.wise+=2}
  else{result="Negotiations failed and the crisis caused damage.";applyIgnoredAlertConsequence(a,.6)}
 }
 if(choice.effect==="ignore"){
  result="The crisis was ignored and the world suffered the consequences.";applyIgnoredAlertConsequence(a,1);state.divineReputation.tyrannical+=1;
 }
 completeAlert(a,result,choice.label);
 if(asInterrupt)document.querySelector(".interrupt-overlay")?.remove();else closeModal();
 renderAll();saveGame(false);showNextInterrupt();
}

function resolveDirectIntervention(a){
 if(a.category==="titans"){state.titans.forEach(t=>{if(t.name===a.targetId||t.sealCity===a.location)t.seal=clamp(t.seal+18)});state.tartarusStability=clamp(state.tartarusStability+8);return"Divine power reinforced the Titan prison."}
 if(a.category==="cities"||a.category==="monsters"){const c=getCity(a.location);if(c){c.unrest=clamp(c.unrest-15);c.happiness=clamp(c.happiness+8);c.protected=true}const m=state.monsters.find(m=>m.territory===a.location&&m.active);if(m)m.currentHealth=Math.max(1,m.currentHealth-45);return`${a.location} was protected by direct divine action.`}
 if(a.category==="heroes"){const h=getHero(a.targetId);if(h){h.health=100;h.energy=100;h.reputation+=5}return"The endangered hero was restored."}
 if(a.category==="underworld"){state.underworld.tartarusSecurity=clamp(state.underworld.tartarusSecurity+18);state.underworld.balance=clamp(state.underworld.balance+8);return"The Underworld breach was sealed."}
 if(a.category==="family"){const d=state.demigods.find(d=>d.id===a.targetId);if(d)d.corruption=clamp(d.corruption-25);return"The demigod was pulled back from corruption."}
 if(a.category==="naval"){const f=state.fleets.find(f=>f.id===a.targetId);if(f){f.health=100;f.status="Docked";f.location="Corinth"}return"The fleet was guided safely home."}
 if(a.category==="world"&&a.title.includes("Atlantis")){state.atlantis.stability=clamp(state.atlantis.stability+20);return"Atlantis gained time to prepare for disaster."}
 state.faith+=8;return"The divine intervention stabilizes the situation.";
}

function applyIgnoredAlertConsequence(a,severity=1){
 if(a.category==="titans"){const t=state.titans.find(t=>t.name===a.targetId)||randomItem(state.titans);t.seal=clamp(t.seal-Math.round(18*severity));state.titanWar+=Math.round(8*severity)}
 if(a.category==="cities"||a.category==="monsters"){const c=getCity(a.location);if(c){c.unrest=clamp(c.unrest+Math.round(18*severity));c.happiness=clamp(c.happiness-Math.round(10*severity));c.population=Math.max(100,c.population-Math.round(20*severity))}}
 if(a.category==="heroes"){const h=getHero(a.targetId);if(h){h.health=clamp(h.health-Math.round(45*severity));if(h.health<=5)h.status="Dead"}}
 if(a.category==="underworld"){state.underworld.tartarusSecurity=clamp(state.underworld.tartarusSecurity-Math.round(18*severity));state.tartarusStability=clamp(state.tartarusStability-Math.round(8*severity))}
 if(a.category==="family"){const d=state.demigods.find(d=>d.id===a.targetId);if(d)d.corruption=clamp(d.corruption+Math.round(18*severity))}
 if(a.category==="naval"){const f=state.fleets.find(f=>f.id===a.targetId);if(f)f.health=clamp(f.health-Math.round(35*severity))}
 if(a.category==="world"&&a.title.includes("Atlantis"))state.atlantis.stability=clamp(state.atlantis.stability-Math.round(18*severity));
}

function completeAlert(a,outcome,choice){
 a.status="resolved";a.outcome=outcome;a.choice=choice;a.resolvedYear=state.year;
 state.alerts=state.alerts.filter(x=>x.id!==a.id);
 state.alertHistory.unshift(a);state.alertHistory=state.alertHistory.slice(0,150);
 addActivity("✅",`${a.title} Resolved`,outcome,"success");
 addLibraryEntry("myths",`${a.title} — ${choice}`,`${outcome} The event occurred in Year ${state.year}.`);
 state.livingChronicle.campaignStats.crisesResolved++;
 recordChronicleEvent({icon:a.icon,title:`Resolved: ${a.title}`,text:outcome,category:a.category==="family"?"divine-family":a.category==="gods"||a.category==="titans"?"gods-titans":a.category,severity:"success",actor:getGod().name,target:a.targetId||a.title,location:a.location,tags:[a.category],major:a.priority==="critical"});
 if(state.urgentInterruptId===a.id)state.urgentInterruptId=null;
}

function postponeAlert(id){
 const a=state.alerts.find(x=>x.id===id);if(!a)return;
 if(a.priority==="critical"){showToast("Critical crises cannot be dismissed.");openAlertInteraction(id);return}
 a.postponed=true;addActivity("📌",`${a.title} Postponed`,`The event remains active until Year ${a.expiresYear}.`);
 renderAll();saveGame(false);
}

function jumpToAlertTarget(id){
 const a=state.alerts.find(x=>x.id===id);if(!a)return;
 const map={
  titans:"titans-view",cities:"cities-view",monsters:"monsters-view",heroes:"heroes-view",
  underworld:"underworld-view",family:"family-view",kingdoms:"kingdoms-view",
  gods:"divine-politics-view",naval:"naval-view",fate:"fate-view",world:"world-view"
 };
 activateView(map[a.category]||"world-view");
}

function activateView(viewId){
 $$(".view").forEach(v=>v.classList.toggle("active",v.id===viewId));
 $$(".nav-button").forEach(b=>b.classList.toggle("active",b.dataset.view===viewId));
 document.querySelector(`#${viewId}`)?.scrollIntoView({behavior:"smooth",block:"start"});
}

function showNextInterrupt(){
 const next=state.alerts.find(a=>a.status==="active"&&(a.priority==="critical"||a.priority==="urgent")&&!a.postponed);
 if(next){state.urgentInterruptId=next.id;setTimeout(()=>openAlertInteraction(next.id,true),100)}
}

function expireAlerts(){
 state.alerts.slice().forEach(a=>{
  if(state.year>=a.expiresYear){
   applyIgnoredAlertConsequence(a,1);
   a.status="expired";a.outcome="The decision deadline passed without intervention.";a.resolvedYear=state.year;
   state.alerts=state.alerts.filter(x=>x.id!==a.id);state.alertHistory.unshift(a);
   addActivity("⌛",`${a.title} Expired`,a.outcome,"danger");
  }
 });
}

function generateWorldAlerts(){
 const lowSeal=state.titans.filter(t=>t.status==="Sealed"&&t.seal<28);
 lowSeal.slice(0,1).forEach(t=>createAlert({priority:"critical",category:"titans",icon:"🔥",title:`${t.name} Attempts to Escape`,description:`The seal beneath ${t.sealCity} has fallen to ${t.seal}%.`,location:t.sealCity,targetId:t.name,years:1}));
 const attacked=state.cities.filter(c=>c.unrest>72);
 attacked.slice(0,1).forEach(c=>createAlert({priority:"critical",category:"cities",icon:"⚔️",title:`Crisis in ${c.name}`,description:`Unrest has reached ${Math.round(c.unrest)}% and the city may collapse.`,location:c.name,targetId:c.id,years:1}));
 const monster=state.monsters.find(m=>m.active&&getCity(m.territory)?.unrest>60);
 if(monster)createAlert({priority:"critical",category:"monsters",icon:monster.icon,title:`${monster.name} Assaults ${monster.territory}`,description:`The creature's ${monster.ability} is devastating the city.`,location:monster.territory,targetId:monster.id,years:1});
 const hero=state.heroes.find(h=>h.recruited&&h.health<25&&h.status!=="Dead");
 if(hero)createAlert({priority:"critical",category:"heroes",icon:hero.portrait,title:`${hero.name} Is Near Death`,description:`The hero has only ${hero.health}% health remaining.`,location:hero.location,targetId:hero.id,years:1});
 if(state.underworld.tartarusSecurity<35)createAlert({priority:"critical",category:"underworld",icon:"💀",title:"Tartarus Prison Breach",description:`Underworld security has fallen to ${state.underworld.tartarusSecurity}%.`,location:"Tartarus",years:1});
 if(state.atlantis.status!=="Hidden"&&state.atlantis.status!=="Sunk"&&state.atlantis.stability<28)createAlert({priority:"critical",category:"world",icon:"🔷",title:"Atlantis Begins to Sink",description:`Atlantean stability is only ${state.atlantis.stability}%.`,location:"Atlantis",years:1});
 const corrupt=state.demigods.find(d=>d.status!=="Immortal"&&d.corruption>68);
 if(corrupt)createAlert({priority:"urgent",category:"family",icon:"🧬",title:`${corrupt.name} Is Becoming Corrupted`,description:`Corruption has reached ${corrupt.corruption}%.`,location:corrupt.city,targetId:corrupt.id,years:2});
 const damagedFleet=state.fleets.find(f=>f.status==="At Sea"&&f.health<40);
 if(damagedFleet)createAlert({priority:"urgent",category:"naval",icon:damagedFleet.icon,title:`${damagedFleet.name} Is in Danger`,description:`The fleet has ${damagedFleet.health}% hull strength while at sea.`,location:damagedFleet.location,targetId:damagedFleet.id,years:2});
 if(state.familyDramaEvents.length)createAlert({priority:"urgent",category:"gods",icon:"🏛️",title:"Olympus Demands Attention",description:state.familyDramaEvents[0].text,location:"Mount Olympus",targetId:state.familyDramaEvents[0].id,years:2});
 if(state.souls.filter(s=>s.status==="Awaiting Judgment").length>=3)createAlert({priority:"important",category:"underworld",icon:"👻",title:"Judgment Hall Is Overcrowded",description:"Multiple important souls await final judgment.",location:"Hall of Judgment",years:3});
 if(state.wonders.some(w=>w.status==="Completed"))createAlert({priority:"success",category:"world",icon:"🗿",title:"A World Wonder Inspires the People",description:"Completed wonders are increasing cultural influence across the ancient world.",location:"Ancient World",years:3,choices:[{id:"celebrate",label:"Hold a Celebration",cost:"Gold",amount:20,effect:"intervene"},{id:"acknowledge",label:"Acknowledge",cost:null,amount:0,effect:"negotiate"}]});
}

function livingAIYearTurn(){
 buildAICharacterRegistry();
 const acting=state.aiCharacters.slice().sort(()=>Math.random()-.5).slice(0,Math.min(10,state.aiCharacters.length));
 acting.forEach(c=>{
  c.goalProgress=clamp(c.goalProgress+rand(4,15));
  const personality=c.personality[0],goal=aiGoalTemplates.find(g=>g.id===c.goal);
  let decision="",result="";
  if(c.type==="hero"){
   const h=state.heroes.find(h=>h.name===c.name);
   const actions=["explores a ruined sanctuary","patrols a threatened city","challenges a monster","mentors a younger hero","seeks a legendary artifact"];
   decision=`${c.name} ${randomItem(actions)}.`;
   if(h){h.xp+=15;h.reputation+=3;if(Math.random()<.2)discoverArtifact()}
   result="The hero's independent reputation grows.";
  }else if(c.type==="god"){
   const g=state.council.find(g=>g.name===c.name);
   decision=`${c.name} ${personality==="jealous"?"undermines a rival":"advances a divine political agenda"}.`;
   if(g){g.relationship=clamp(g.relationship+rand(-4,6));g.trust=clamp(g.trust+rand(-3,5))}
   result="Olympus politics shift without player direction.";
  }else if(c.type==="titan"){
   const t=state.titans.find(t=>t.name===c.name);
   decision=`${c.name} ${goal?.category==="titan"?"tests the prison seals":"recruits secret followers"}.`;
   if(t){t.influence+=rand(1,5);if(personality==="patient")t.seal=clamp(t.seal-2);else if(personality==="reckless")t.seal=clamp(t.seal-5)}
   result="Titan influence spreads beneath the surface.";
  }else if(c.type==="ruler"){
   const k=state.kingdoms.find(k=>k.ruler===c.name);
   const actions=["proposes an alliance","raises a new army","opens a trade route","plots against a rival kingdom","funds a temple"];
   decision=`${c.name} ${randomItem(actions)}.`;
   if(k){k.economy=clamp(k.economy+rand(-2,6));k.army=clamp(k.army+rand(-2,6))}
   result="The kingdom changes through autonomous rule.";
  }else if(c.type==="demigod"){
   const d=state.demigods.find(d=>d.name===c.name);
   decision=`${c.name} pursues ${goal?.name.toLowerCase()}.`;
   if(d){d.fame+=rand(1,5);d.reputation+=rand(1,4);if(personality==="ruthless")d.corruption=clamp(d.corruption+3)}
   result="The divine bloodline develops independently.";
  }else{
   decision=`${c.name} performs duties in the Underworld.`;
   state.underworld.balance=clamp(state.underworld.balance+rand(-1,2));
   result="The afterlife continues to function.";
  }
  c.lastAction=decision;rememberAI(c,decision);state.aiDecisions.unshift({id:uid("decision"),character:c.name,icon:c.icon,decision,result,year:state.year});
  addActivity(c.icon,c.name,decision,personality==="ruthless"||personality==="reckless"?"danger":"");
  if(c.goalProgress>=100){completeAIGoal(c);c.goal=randomItem(aiGoalTemplates).id;c.goalProgress=rand(5,20)}
 });
 state.aiDecisions=state.aiDecisions.slice(0,100);
 generateDynamicAchievement();
}

function completeAIGoal(c){
 const goal=aiGoalTemplates.find(g=>g.id===c.goal);
 addActivity("🌟",`${c.name} Completes a Goal`,`${goal.name} has been achieved.`,"success");
 c.opinion=clamp(c.opinion+3);
 if(goal.category==="legacy")state.prestige+=6;
 if(goal.category==="faith")state.faith+=8;
 if(goal.category==="titan")state.titanCouncil.rebellionStrength=clamp(state.titanCouncil.rebellionStrength+6);
 if(goal.category==="loyalty")state.divineReputation.honorable+=2;
}

function generateDynamicAchievement(){
 const candidates=[];
 if(state.titans.filter(t=>t.status==="Resealed").length>=2)candidates.push(["Titan Breaker","Resealed multiple Titans"]);
 if(state.cities.filter(c=>c.happiness>80).length>=4)candidates.push(["Guardian of Cities","Created prosperity in four cities"]);
 if(state.underworld.balance>90)candidates.push(["Guardian of Elysium","Maintained exceptional Underworld balance"]);
 if(state.divineReputation.wise>35)candidates.push(["Keeper of Wisdom","Built a reputation for wise divine rule"]);
 if(state.alertHistory.filter(a=>a.choice==="Intervene Personally").length>=5)candidates.push(["Answerer of Prayers","Personally resolved five urgent crises"]);
 candidates.forEach(([name,text])=>{
  if(!state.dynamicAchievements.some(a=>a.name===name)){state.dynamicAchievements.push({name,text,year:state.year});addActivity("🏆",`Title Earned: ${name}`,text,"success");state.prestige+=10}
 });
}
function renderUnderworld(){
 const u=state.underworld;
 $("#underworld-status").textContent=u.balance>=70?"Balanced":u.balance>=40?"Unstable":"In Crisis";
 $("#underworld-summary").innerHTML=`<p class="eyebrow">AFTERLIFE DOMAIN</p><h3>${u.balance}% balance between mortal death, judgment, and eternal order</h3><div class="meter ${u.balance<40?"red":"green"}"><span style="width:${u.balance}%"></span></div><div class="afterlife-stat-grid"><div class="afterlife-stat"><strong>${u.soulsArrived}</strong><small>Arrived</small></div><div class="afterlife-stat"><strong>${u.soulsJudged}</strong><small>Judged</small></div><div class="afterlife-stat"><strong>${u.cerberusLoyalty}</strong><small>Cerberus</small></div><div class="afterlife-stat"><strong>${u.tartarusSecurity}</strong><small>Security</small></div></div>${u.events.length?'<button id="open-underworld-event" class="primary-button">Resolve Underworld Event</button>':""}`;
 const eventBtn=$("#open-underworld-event");if(eventBtn)eventBtn.addEventListener("click",openUnderworldEvent);

 $("#underworld-region-list").innerHTML=underworldRegions.map(r=>`<article class="card underworld-region-card underworld-${r.type}"><div class="card-row"><div class="council-head"><span class="underworld-icon">${r.icon}</span><div><h3>${r.name}</h3><p>${r.text}</p></div></div><span class="tag gold">${r.type}</span></div><button class="card-button" data-underworld-region="${r.id}">Enter ${r.name}</button></article>`).join("");
 $$("[data-underworld-region]").forEach(b=>b.addEventListener("click",()=>enterUnderworldRegion(b.dataset.underworldRegion)));

 $("#soul-list").innerHTML=state.souls.length?state.souls.map(s=>`<article class="card soul-card ${s.status==="Awaiting Judgment"?"waiting":"judged"}"><div class="card-row"><div class="council-head"><span class="soul-icon">${s.icon}</span><div><h3>${s.name}</h3><p>${s.role} • ${s.city}</p></div></div><span class="tag gold">${s.status}</span></div><p>Virtue ${s.virtue} • Glory ${s.glory} • Crimes ${s.crimes}</p><button class="card-button" data-judge-soul="${s.id}" ${s.status!=="Awaiting Judgment"?"disabled":""}>Judge Soul</button></article>`).join(""):`<article class="card"><h3>No souls await judgment</h3><p>Important mortals and heroes will arrive as years pass.</p></article>`;
 $$("[data-judge-soul]").forEach(b=>b.addEventListener("click",()=>openSoulJudgment(b.dataset.judgeSoul)));

 $("#spirit-hero-list").innerHTML=state.spiritHeroes.length?state.spiritHeroes.map(h=>`<article class="card spirit-card"><div class="card-row"><div class="council-head"><span class="spirit-icon">${h.icon}</span><div><h3>${h.name}</h3><p>${h.title} • Honor ${h.honor}</p></div></div><span class="tag gold">${h.location}</span></div><button class="card-button" data-spirit-hero="${h.id}">Command Spirit Hero</button></article>`).join(""):`<article class="card"><h3>No spirit heroes yet</h3><p>Exceptional souls can continue serving beyond death.</p></article>`;
 $$("[data-spirit-hero]").forEach(b=>b.addEventListener("click",()=>openSpiritHero(b.dataset.spiritHero)));
}

function enterUnderworldRegion(id){
 const r=underworldRegions.find(x=>x.id===id);
 if(r.type==="ferry"){openCharonFerry();return}
 if(r.type==="judgment"){openJudgesHall();return}
 if(r.type==="tartarus"){openInteractiveTartarus();return}
 if(r.type==="palace"){openHadesPalace();return}
 if(r.type==="elysium"){openElysium();return}
 if(r.type==="punishment"){openPunishmentFields();return}
 if(r.type==="asphodel"){openAsphodel();return}
 openRiverStyx();
}

function openRiverStyx(){
 showModal(`<p class="eyebrow">RIVER STYX</p><h2>🌑 Boundary of Life and Death</h2><div class="underworld-action-grid"><button class="action-button" data-styx="oath">Swear a Binding Oath</button><button class="action-button" data-styx="bless">Bless Safe Passage</button><button class="action-button" data-styx="search">Search for Lost Soul</button></div>`);
 $$("[data-styx]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.styx;if(a==="oath"){state.divineReputation.honorable+=4;state.underworld.balance=clamp(state.underworld.balance+3)}if(a==="bless"){state.underworld.balance=clamp(state.underworld.balance+5);state.faith+=8}if(a==="search"){const soul=state.souls.find(s=>s.status==="Lost");if(soul)soul.status="Awaiting Judgment";else state.prestige+=3}recordUnderworld("River Styx",a);closeModal();renderAll();saveGame(false)}));
}

function openCharonFerry(){
 const charon=state.underworld.npc.find(n=>n.id==="charon");
 showModal(`<p class="eyebrow">CHARON'S FERRY</p><h2>⛴️ Passage of Souls</h2><p>Charon trust: ${charon.trust}</p><div class="underworld-action-grid"><button class="action-button" data-charon="pay">Pay for Forgotten Souls • 20 Gold</button><button class="action-button" data-charon="question">Question Charon</button><button class="action-button" data-charon="appoint">Appoint Assistant Ferryman</button></div>`);
 $$("[data-charon]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.charon;if(a==="pay"){if(!spend("gold",20))return;charon.trust=clamp(charon.trust+8);state.underworld.balance=clamp(state.underworld.balance+4)}if(a==="question"){charon.trust=clamp(charon.trust+3);state.divineMessages.unshift({from:"Charon",text:"Some souls arrive marked by Titan influence.",year:state.year})}if(a==="appoint"){const s=state.souls.find(s=>s.status==="Awaiting Judgment");if(s){s.status="Underworld Official";state.underworld.soulsJudged++}}recordUnderworld("Charon's Ferry",a);closeModal();renderAll();saveGame(false)}));
}

function openJudgesHall(){
 showModal(`<p class="eyebrow">HALL OF JUDGMENT</p><h2>⚖️ Minos, Rhadamanthus & Aeacus</h2><div class="underworld-action-grid"><button class="action-button" data-judges="review">Review Next Soul</button><button class="action-button" data-judges="law">Set Judgment Law</button><button class="action-button" data-judges="appeal">Hear an Appeal</button></div>`);
 $$("[data-judges]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.judges;if(a==="review"){const s=state.souls.find(s=>s.status==="Awaiting Judgment");if(s){closeModal();openSoulJudgment(s.id);return}else showToast("No soul awaits judgment.")}if(a==="law"){state.divineReputation.honorable+=3;state.underworld.balance=clamp(state.underworld.balance+4)}if(a==="appeal"){state.divineReputation.merciful+=2;state.underworld.balance=clamp(state.underworld.balance+2)}recordUnderworld("Hall of Judgment",a);closeModal();renderAll()}));
}

function openSoulJudgment(id){
 const s=state.souls.find(x=>x.id===id);
 showModal(`<p class="eyebrow">FINAL JUDGMENT</p><h2>${s.icon} ${s.name}</h2><p>${s.role} of ${s.city}. Virtue ${s.virtue}, Glory ${s.glory}, Crimes ${s.crimes}.</p><div class="soul-choice-grid">${soulJudgmentOptions.map(o=>`<button class="action-button soul-choice" data-soul-choice="${o.id}">${o.icon} ${o.name}<br><small>${o.text}</small></button>`).join("")}</div>`);
 $$("[data-soul-choice]").forEach(b=>b.addEventListener("click",()=>resolveSoulJudgment(s,b.dataset.soulChoice)));
}

function resolveSoulJudgment(s,choice){
 s.status=choice;state.underworld.soulsJudged++;
 if(choice==="elysium"){state.underworld.elysiumSouls++;state.divineReputation.merciful+=2;state.underworld.balance=clamp(state.underworld.balance+4)}
 if(choice==="asphodel"){state.underworld.asphodelSouls++;state.underworld.balance=clamp(state.underworld.balance+2)}
 if(choice==="punishment"){state.underworld.punishedSouls++;state.divineReputation.ruthless+=2;if(s.crimes>50)state.divineReputation.honorable+=2}
 if(choice==="return"){state.underworld.balance=clamp(state.underworld.balance-8);state.fateBalance=clamp(state.fateBalance-6);state.divineReputation.ambitious+=2}
 if(choice==="spirit"){createSpiritHeroFromSoul(s);state.divineReputation.heroic+=3}
 if(choice==="official"){state.underworld.balance=clamp(state.underworld.balance+3);state.prestige+=4}
 const record={id:uid("legacy"),name:s.name,birthYear:s.birthYear||"Unknown",deathYear:state.year,parents:s.parents||"Unknown",kingdom:s.city,deeds:s.deeds||[],judgment:choice,restingPlace:choice,summary:`${s.name}, ${s.role} of ${s.city}, was judged ${choice} in Year ${state.year}.`};
 state.underworld.legacyRecords.unshift(record);addLibraryEntry("people",`${s.name}: Complete Legacy`,record.summary);recordUnderworld("Soul Judgment",`${s.name} was sent to ${choice}`);closeModal();renderAll();saveGame(false);
}

function createSpiritHeroFromSoul(s){
 state.spiritHeroes.push({id:uid("spirit"),name:s.name,icon:"👻",title:`Spirit ${s.role}`,honor:s.glory+s.virtue,location:"Elysium",memories:[],power:Math.max(25,Math.round((s.glory+s.virtue)/2))});
}

function openSpiritHero(id){
 const h=state.spiritHeroes.find(x=>x.id===id);
 showModal(`<p class="eyebrow">SPIRIT HERO</p><h2>${h.icon} ${h.name}</h2><p>${h.title}. Honor ${h.honor}. Power ${h.power}.</p><div class="underworld-action-grid"><button class="action-button" data-spirit-action="vision">Guide Living Hero</button><button class="action-button" data-spirit-action="elysium">Defend Elysium</button><button class="action-button" data-spirit-action="tartarus">Fight Tartarus Escape</button><button class="action-button" data-spirit-action="return">Return Briefly to Mortals</button></div>`);
 $$("[data-spirit-action]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.spiritAction;if(a==="vision"){const living=state.heroes.find(x=>x.recruited);if(living){living.wisdom+=3;living.reputation+=4}}if(a==="elysium"){state.underworld.balance=clamp(state.underworld.balance+5);h.honor+=5}if(a==="tartarus"){state.underworld.tartarusSecurity=clamp(state.underworld.tartarusSecurity+6);h.power+=2}if(a==="return"){state.faith+=10;state.prestige+=6;state.fateBalance=clamp(state.fateBalance-2)}h.memories.unshift(`Year ${state.year}: ${a}`);recordUnderworld("Spirit Hero",`${h.name}: ${a}`);closeModal();renderAll()}));
}

function openInteractiveTartarus(){
 showModal(`<p class="eyebrow">TARTARUS PRISON</p><h2>🔥 Security ${state.underworld.tartarusSecurity}%</h2><div class="tartarus-grid">${state.titans.map(t=>`<button class="action-button" data-tartarus-titan="${t.id}">${t.icon} ${t.name}<br><small>Seal ${t.seal} • ${t.status}</small></button>`).join("")}</div><div class="underworld-action-grid"><button class="action-button" id="reinforce-all-tartarus">Reinforce All Chains • 35 Gold</button><button class="action-button" id="cerberus-patrol">Order Cerberus Patrol</button></div>`);
 $$("[data-tartarus-titan]").forEach(b=>b.addEventListener("click",()=>openTitanCouncilDialogue(b.dataset.tartarusTitan)));
 $("#reinforce-all-tartarus").addEventListener("click",()=>{if(!spend("gold",35))return;state.titans.forEach(t=>t.seal=clamp(t.seal+8));state.underworld.tartarusSecurity=clamp(state.underworld.tartarusSecurity+10);closeModal();renderAll()});
 $("#cerberus-patrol").addEventListener("click",()=>{state.underworld.cerberusLoyalty=clamp(state.underworld.cerberusLoyalty+5);state.underworld.tartarusSecurity=clamp(state.underworld.tartarusSecurity+6);closeModal();renderAll()});
}

function openHadesPalace(){
 const hades=state.underworld.npc.find(n=>n.id==="hades"),persephone=state.underworld.npc.find(n=>n.id==="persephone");
 showModal(`<p class="eyebrow">PALACE OF HADES</p><h2>👑 Court of the Dead</h2><p>Hades trust ${hades.trust}. Persephone trust ${persephone.trust}.</p><div class="underworld-action-grid"><button class="action-button" data-palace-action="hades">Speak with Hades</button><button class="action-button" data-palace-action="persephone">Speak with Persephone</button><button class="action-button" data-palace-action="treaty">Negotiate Underworld Treaty</button><button class="action-button" data-palace-action="souls">Review Soul Balance</button></div>`);
 $$("[data-palace-action]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.palaceAction;if(a==="hades"){hades.trust=clamp(hades.trust+5);state.divineReputation.honorable+=2}if(a==="persephone"){persephone.trust=clamp(persephone.trust+5);state.divineReputation.merciful+=2}if(a==="treaty"){state.underworld.balance=clamp(state.underworld.balance+8);state.council.find(g=>g.name==="Hades").relationship=clamp(state.council.find(g=>g.name==="Hades").relationship+8)}if(a==="souls")state.prestige+=3;recordUnderworld("Palace of Hades",a);closeModal();renderAll()}));
}

function openElysium(){
 showModal(`<p class="eyebrow">ELYSIUM</p><h2>🌟 Blessed Fields</h2><div class="underworld-action-grid"><button class="action-button" data-elysium="honor">Honor Legendary Dead</button><button class="action-button" data-elysium="champion">Recruit Spirit Champion</button><button class="action-button" data-elysium="festival">Hold Festival of Heroes</button></div>`);
 $$("[data-elysium]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.elysium;if(a==="honor"){state.prestige+=10;state.faith+=8}if(a==="champion"){const s=state.souls.find(s=>s.status==="elysium");if(s)createSpiritHeroFromSoul(s)}if(a==="festival"){state.spiritHeroes.forEach(h=>h.honor+=4);state.cities.forEach(c=>c.happiness=clamp(c.happiness+3))}recordUnderworld("Elysium",a);closeModal();renderAll()}));
}

function openPunishmentFields(){
 showModal(`<p class="eyebrow">FIELDS OF PUNISHMENT</p><h2>😈 Justice Beyond Death</h2><div class="underworld-action-grid"><button class="action-button" data-punishment="inspect">Inspect Punishments</button><button class="action-button" data-punishment="mercy">Grant Rare Mercy</button><button class="action-button" data-punishment="furies">Consult the Furies</button></div>`);
 $$("[data-punishment]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.punishment;if(a==="inspect")state.divineReputation.honorable+=2;if(a==="mercy"){state.divineReputation.merciful+=4;state.underworld.punishedSouls=Math.max(0,state.underworld.punishedSouls-1)}if(a==="furies"){state.divineReputation.ruthless+=2;state.titanCouncil.secrecy=clamp(state.titanCouncil.secrecy-4)}recordUnderworld("Fields of Punishment",a);closeModal();renderAll()}));
}

function openAsphodel(){
 showModal(`<p class="eyebrow">ASPHODEL MEADOWS</p><h2>🌾 Quiet Eternity</h2><div class="underworld-action-grid"><button class="action-button" data-asphodel="comfort">Comfort Lost Souls</button><button class="action-button" data-asphodel="memory">Restore a Forgotten Memory</button><button class="action-button" data-asphodel="guide">Appoint Spirit Guide</button></div>`);
 $$("[data-asphodel]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.asphodel;if(a==="comfort"){state.underworld.balance=clamp(state.underworld.balance+4);state.divineReputation.merciful+=2}if(a==="memory")state.prestige+=4;if(a==="guide"){const s=state.souls.find(s=>s.status==="asphodel");if(s)s.status="Underworld Guide"}recordUnderworld("Asphodel Meadows",a);closeModal();renderAll()}));
}

function openUnderworldEvent(){
 const e=state.underworld.events[0];if(!e)return;
 showModal(`<p class="eyebrow">UNDERWORLD EVENT</p><h2>${e.icon} ${e.title}</h2><p>${e.text}</p><div class="choice-row"><button id="underworld-event-good" class="choice-button good">${e.good}</button><button id="underworld-event-bad" class="choice-button bad">${e.bad}</button></div>`);
 $("#underworld-event-good").addEventListener("click",()=>resolveUnderworldEvent(e,true));
 $("#underworld-event-bad").addEventListener("click",()=>resolveUnderworldEvent(e,false));
}

function resolveUnderworldEvent(e,good){
 if(e.title.includes("Cerberus")){state.underworld.cerberusLoyalty=clamp(state.underworld.cerberusLoyalty+(good?6:2));state.underworld.tartarusSecurity=clamp(state.underworld.tartarusSecurity+(good?8:-3))}
 if(e.title.includes("Charon")){if(good){if(state.gold>=15)state.gold-=15;state.underworld.balance=clamp(state.underworld.balance+4)}else state.divineReputation.wise+=2}
 if(e.title.includes("Persephone")){state.divineReputation.merciful+=good?4:0;state.underworld.balance=clamp(state.underworld.balance+(good?3:1))}
 if(e.title.includes("Furies")){state.divineReputation.ruthless+=good?3:0;state.divineReputation.honorable+=good?2:0}
 if(e.title.includes("Elysium")){state.underworld.balance=clamp(state.underworld.balance+(good?6:4))}
 if(e.title.includes("Tartarus")){state.underworld.tartarusSecurity=clamp(state.underworld.tartarusSecurity+(good?6:-5));state.titanCouncil.secrecy=clamp(state.titanCouncil.secrecy-(good?3:8))}
 state.underworld.events=state.underworld.events.filter(x=>x.id!==e.id);recordUnderworld("Underworld Event",`${e.title}: ${good?e.good:e.bad}`);closeModal();renderAll();saveGame(false);
}

function createSoulFromWorld(){
 const heroCandidates=state.heroes.filter(h=>h.recruited&&h.age>55&&h.status!=="Dead");
 let name,role,city,glory,virtue,crimes,icon="👻",sourceId=null,deeds=[];
 if(heroCandidates.length&&Math.random()<.35){
  const h=randomItem(heroCandidates);name=h.name;role=h.title;city=h.location;glory=h.reputation+h.level*8;virtue=50+h.wisdom*.3;crimes=Math.max(0,state.divineReputation.ruthless*.2);icon=h.portrait;sourceId=h.id;deeds=h.titles||[];h.status="Dead";
 }else{
  const c=randomItem(state.citizens[randomItem(state.cities).name]);name=c.name;role=c.job;city=randomItem(state.cities).name;glory=rand(5,45);virtue=rand(20,85);crimes=rand(0,60);
 }
 const soul={id:uid("soul"),name,role,city,glory:Math.round(glory),virtue:Math.round(virtue),crimes:Math.round(crimes),icon,status:"Awaiting Judgment",sourceId,birthYear:Math.max(1,state.year-rand(20,70)),parents:"Recorded in mortal archives",deeds};
 state.souls.unshift(soul);state.underworld.soulsArrived++;addLog(`${name} Enters the Underworld`,`${role} of ${city} awaits judgment.`);
}

function recordUnderworld(title,text){
 addLog(title,text);
 state.underworld.legacyRecords=state.underworld.legacyRecords.slice(0,80);
}

function underworldYearTurn(){
 if(Math.random()<.42)createSoulFromWorld();
 if(Math.random()<.32){const e=randomItem(underworldEventTemplates);state.underworld.events.push({id:uid("underworldEvent"),...e,year:state.year});addLog(e.title,e.text)}
 state.underworld.balance=clamp(state.underworld.balance+rand(-3,3),0,100);
 state.underworld.tartarusSecurity=clamp(state.underworld.tartarusSecurity-(state.titanCouncil.rebellionStrength>70?4:1)+Math.floor(state.underworld.cerberusLoyalty/35),0,100);
 if(state.underworld.tartarusSecurity<35){const t=randomItem(state.titans);t.seal=clamp(t.seal-8);state.tartarusStability=clamp(state.tartarusStability-4);addLog("Tartarus Security Fails",`${t.name}'s prison weakens beneath the Underworld.`)}
 state.spiritHeroes.forEach(h=>{h.honor+=rand(0,3);if(Math.random()<.2)h.power+=1});
}
function renderLivingOlympus(){
 const lo=state.livingOlympus,owned=state.divineInventory.filter(i=>i.owned).length,equipped=state.divineInventory.filter(i=>i.equipped).length;
 $("#living-olympus-status").textContent=lo.events.length?`${lo.events.length} Events`:"Olympus Active";
 $("#living-olympus-summary").innerHTML=`<p class="eyebrow">DIVINE CAPITAL</p><h3>Explore Olympus, meet gods, research powers, and collect divine equipment</h3><div class="stats"><div class="stat"><strong>${lo.visits}</strong><small>Visits</small></div><div class="stat"><strong>${lo.influence}</strong><small>Influence</small></div><div class="stat"><strong>${owned}</strong><small>Items Owned</small></div></div>${lo.events.length?`<button id="open-olympus-events" class="primary-button">Resolve Olympus Events</button>`:""}`;
 const eventBtn=$("#open-olympus-events");if(eventBtn)eventBtn.addEventListener("click",openOlympusEvents);
 $("#living-olympus-location-list").innerHTML=livingOlympusLocations.map(l=>`<article class="card olympus-place-card"><div class="card-row"><div class="council-head"><span class="olympus-place-icon">${l.icon}</span><div><h3>${l.name}</h3><p>${l.owner} • ${l.text}</p></div></div><span class="tag gold">${l.type}</span></div><button class="card-button" data-living-olympus="${l.id}">Enter ${l.name}</button></article>`).join("");
 $$("[data-living-olympus]").forEach(b=>b.addEventListener("click",()=>enterLivingOlympusLocation(b.dataset.livingOlympus)));
 $("#divine-inventory-list").innerHTML=state.divineInventory.map(i=>`<article class="card divine-item-card ${i.equipped?"equipped":""} ${i.rarity==="Legendary"?"legendary":""}"><div class="card-row"><div class="council-head"><span class="divine-item-icon">${i.icon}</span><div><h3>${i.name}</h3><p>${i.slot} • ${i.rarity}</p></div></div><span class="tag gold">${i.owned?(i.equipped?"Equipped":"Owned"):`${i.cost} Gold`}</span></div><p>${i.effect}</p>${i.owned?`<button class="card-button" data-divine-item="${i.id}">${i.equipped?"Unequip":"Equip"}</button>`:""}</article>`).join("");
 $$("[data-divine-item]").forEach(b=>b.addEventListener("click",()=>toggleDivineItem(b.dataset.divineItem)));
}

function enterLivingOlympusLocation(id){
 const l=livingOlympusLocations.find(x=>x.id===id);state.livingOlympus.visits++;state.livingOlympus.influence=clamp(state.livingOlympus.influence+1,0,100);
 if(l.type==="research"){openAthenaResearch();return}
 if(l.type==="forge"){openDivineForge();return}
 if(l.type==="arena"){openAresArena();return}
 if(l.type==="market"){openHermesMarket();return}
 if(l.type==="festival"){openDionysusGardens();return}
 if(l.type==="hearth"){openHestiaHearth();return}
 if(l.type==="sea"){openPoseidonGate();return}
 if(l.type==="family"){openHeraPalace();return}
 if(l.type==="prophecy"){openApolloTemple();return}
 if(l.type==="hunt"){openArtemisGrove();return}
 if(l.type==="underworld"){openHadesEmbassy();return}
 openZeusThrone();
}

function openZeusThrone(){
 showModal(`<p class="eyebrow">ZEUS' THRONE ROOM</p><h2>⚡ Seat of Divine Authority</h2><div class="olympus-action-grid"><button class="action-button" data-zeus-action="decree">📜 Issue Sacred Decree</button><button class="action-button" data-zeus-action="council">🏛️ Summon Emergency Council</button><button class="action-button" data-zeus-action="dispute">⚖️ Settle Divine Dispute</button><button class="action-button" data-zeus-action="judgment">🌩️ Deliver Divine Judgment</button></div>`);
 $$("[data-zeus-action]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.zeusAction;if(a==="decree"){state.prestige+=10;state.divineReputation.honorable+=2}if(a==="council"){state.familyDramaEvents.push({id:uid("drama"),title:"Emergency Council of Olympus",icon:"🏛️",text:"The gods gather to debate a sudden crisis.",good:"Seek Consensus",bad:"Rule by Authority",year:state.year})}if(a==="dispute"){state.divineRivalries.pop();state.divineReputation.wise+=3}if(a==="judgment"){state.divineReputation.ruthless+=2;state.titanCouncil.rebellionStrength=clamp(state.titanCouncil.rebellionStrength-5)}recordOlympus("Zeus' Throne Room",a);closeModal();renderAll();saveGame(false)}));
}

function openHeraPalace(){
 showModal(`<p class="eyebrow">HERA'S PALACE</p><h2>🦚 Divine Family Court</h2><div class="olympus-action-grid"><button class="action-button" data-hera-action="marriage">💍 Arrange Divine Marriage</button><button class="action-button" data-hera-action="heir">👶 Recognize an Heir</button><button class="action-button" data-hera-action="reconcile">🤝 Reconcile Family</button><button class="action-button" data-hera-action="legitimacy">👑 Grant Legitimacy</button></div>`);
 $$("[data-hera-action]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.heraAction;if(a==="marriage")state.mortalRelationships.forEach(m=>m.relationship=clamp(m.relationship+4));if(a==="heir"){const d=state.demigods[0];if(d)d.councilFavor+=10}if(a==="reconcile"){state.familyDramaEvents=[];state.divineReputation.merciful+=3}if(a==="legitimacy"){const d=state.demigods.find(d=>d.status!=="Immortal");if(d){d.reputation+=10;d.fame+=8}}recordOlympus("Hera's Palace",a);closeModal();renderAll();saveGame(false)}));
}

function openAthenaResearch(){
 showModal(`<p class="eyebrow">ATHENA'S GREAT LIBRARY</p><h2>🦉 Divine Research</h2><div class="olympus-action-grid">${olympusResearchTemplates.map(r=>`<button class="action-button olympus-research" data-research="${r.id}" ${state.livingOlympus.research.includes(r.id)||state.gold<r.cost?"disabled":""}>${r.icon} ${r.name}<br><small>${r.cost} Gold</small></button>`).join("")}</div>`);
 $$("[data-research]").forEach(b=>b.addEventListener("click",()=>completeOlympusResearch(b.dataset.research)));
}

function completeOlympusResearch(id){
 const r=olympusResearchTemplates.find(x=>x.id===id);if(!spend("gold",r.cost))return;state.livingOlympus.research.push(r.id);
 if(id==="miracle-mastery")Object.keys(state.miracleCooldowns).forEach(k=>state.miracleCooldowns[k]=Math.max(0,state.miracleCooldowns[k]-1));
 if(id==="titan-lore"){state.titanCouncil.secrecy=clamp(state.titanCouncil.secrecy-15);state.titans.forEach(t=>t.trust=clamp(t.trust+3))}
 if(id==="heroic-theory")state.heroes.filter(h=>h.recruited).forEach(h=>h.xp+=25);
 if(id==="naval-astronomy")state.fleets.forEach(f=>{f.speed+=8;f.defense+=3});
 if(id==="fate-study")state.fateBalance=clamp(state.fateBalance+15,0,120);
 if(id==="divine-law"){state.divineReputation.honorable+=6;state.council.forEach(g=>g.relationship=clamp(g.relationship+3))}
 recordOlympus("Athena's Library",`Researched ${r.name}`);closeModal();renderAll();saveGame(false);
}

function openDivineForge(){
 const craftable=state.divineInventory.filter(i=>!i.owned);
 showModal(`<p class="eyebrow">HEPHAESTUS' DIVINE FORGE</p><h2>🔥 Craft Divine Equipment</h2><div class="market-grid-v2">${craftable.map(i=>`<button class="action-button olympus-forge" data-forge-item="${i.id}" ${state.gold<i.cost?"disabled":""}>${i.icon} ${i.name}<br><small>${i.cost} Gold</small></button>`).join("")||"<p>Every divine item has already been crafted.</p>"}</div>`);
 $$("[data-forge-item]").forEach(b=>b.addEventListener("click",()=>craftDivineItem(b.dataset.forgeItem)));
}

function craftDivineItem(id){
 const i=state.divineInventory.find(x=>x.id===id);if(!spend("gold",i.cost))return;i.owned=true;state.prestige+=5;recordOlympus("Hephaestus' Forge",`Crafted ${i.name}`);addLibraryEntry("relics",i.name,i.effect);closeModal();renderAll();saveGame(false);
}

function toggleDivineItem(id){
 const i=state.divineInventory.find(x=>x.id===id);if(!i.owned)return;
 if(!i.equipped)state.divineInventory.filter(x=>x.slot===i.slot).forEach(x=>x.equipped=false);
 i.equipped=!i.equipped;
 if(i.equipped)applyDivineItemBonus(i);
 renderAll();saveGame(false);
}

function applyDivineItemBonus(i){
 if(i.bonus.prestige)state.prestige+=i.bonus.prestige;
 if(i.bonus.fate)state.fateBalance=clamp(state.fateBalance+i.bonus.fate,0,120);
 if(i.bonus.tartarus)state.tartarusStability=clamp(state.tartarusStability+i.bonus.tartarus,0,130);
 if(i.bonus.faith)state.faith+=i.bonus.faith;
 if(i.bonus.restore){state.avatar.energy=100;state.heroes.filter(h=>h.recruited).forEach(h=>{h.health=100;h.energy=100})}
 if(i.bonus.combat)state.heroes.filter(h=>h.recruited).forEach(h=>h.strength+=2);
 if(i.bonus.city)state.cities.forEach(c=>{c.happiness=clamp(c.happiness+3);c.player=clamp(c.player+2)});
}

function openAresArena(){
 const heroes=state.heroes.filter(h=>h.recruited);
 showModal(`<p class="eyebrow">ARES' ARENA</p><h2>⚔️ Divine Combat Trials</h2><div class="arena-grid"><button class="action-button arena-card" id="hero-duel">Hero Duel</button><button class="action-button arena-card" id="demigod-trial">Demigod Trial</button><button class="action-button arena-card" id="god-sparring">God Sparring</button></div>`);
 $("#hero-duel").addEventListener("click",()=>resolveArenaContest("Hero Duel",heroes));
 $("#demigod-trial").addEventListener("click",()=>resolveArenaContest("Demigod Trial",heroes.filter(h=>h.id.startsWith("demi-"))));
 $("#god-sparring").addEventListener("click",()=>{state.prestige+=12;state.divineReputation.heroic+=4;recordOlympus("Ares' Arena","God-versus-god sparring");closeModal();renderAll()});
}

function resolveArenaContest(name,heroes){
 if(!heroes.length){showToast("No eligible hero.");return}
 const h=randomItem(heroes),score=h.strength+h.courage+Math.random()*100;if(score>130){h.reputation+=12;h.xp+=45;state.gold+=35;state.prestige+=8;h.titles.push(`${name} Champion`)}else h.health=clamp(h.health-20);levelHero(h);recordOlympus("Ares' Arena",`${h.name} entered ${name}`);closeModal();renderAll();saveGame(false);
}

function openHermesMarket(){
 const offers=state.divineInventory.filter(i=>!i.owned).slice(0,4);
 showModal(`<p class="eyebrow">HERMES' MARKETPLACE</p><h2>🪽 Rare Divine Goods</h2><div class="market-grid-v2">${offers.map(i=>`<button class="action-button market-card" data-market-item="${i.id}" ${state.gold<i.cost?"disabled":""}>${i.icon} ${i.name}<br><small>${Math.max(35,i.cost-20)} Gold</small></button>`).join("")}<button class="action-button market-card" id="buy-exotic-resources">📦 Exotic Resources<br><small>45 Gold</small></button><button class="action-button market-card" id="buy-divine-scroll">📜 Divine Scroll<br><small>35 Gold</small></button></div>`);
 $$("[data-market-item]").forEach(b=>b.addEventListener("click",()=>{const i=state.divineInventory.find(x=>x.id===b.dataset.marketItem),price=Math.max(35,i.cost-20);if(!spend("gold",price))return;i.owned=true;recordOlympus("Hermes' Marketplace",`Purchased ${i.name}`);closeModal();renderAll()}));
 $("#buy-exotic-resources").addEventListener("click",()=>{if(!spend("gold",45))return;state.wood+=15;state.stone+=15;state.bronze+=10;state.iron=(state.iron||0)+8;closeModal();renderAll()});
 $("#buy-divine-scroll").addEventListener("click",()=>{if(!spend("gold",35))return;state.questBoost=true;state.fateBalance=clamp(state.fateBalance+5,0,120);closeModal();renderAll()});
}

function openDionysusGardens(){
 showModal(`<p class="eyebrow">DIONYSUS' GARDENS</p><h2>🍇 Divine Celebration</h2><div class="olympus-action-grid"><button class="action-button olympus-garden" data-festival-type="small">Host Feast • 25 Gold</button><button class="action-button olympus-garden" data-festival-type="grand">Grand Olympian Festival • 60 Gold</button><button class="action-button olympus-garden" data-festival-type="reconcile">Festival of Reconciliation • 45 Gold</button></div>`);
 $$("[data-festival-type]").forEach(b=>b.addEventListener("click",()=>{const type=b.dataset.festivalType,cost=type==="small"?25:type==="grand"?60:45;if(!spend("gold",cost))return;state.cities.forEach(c=>c.happiness=clamp(c.happiness+(type==="grand"?10:5)));state.council.forEach(g=>g.relationship=clamp(g.relationship+(type==="reconcile"?7:3)));state.faith+=type==="grand"?25:12;recordOlympus("Dionysus' Gardens",type);closeModal();renderAll()}));
}

function openHestiaHearth(){
 showModal(`<p class="eyebrow">HESTIA'S HEARTH</p><h2>🔥 Sanctuary of Peace</h2><div class="olympus-action-grid"><button class="action-button olympus-hearth" data-hearth="heal">Heal All Heroes</button><button class="action-button olympus-hearth" data-hearth="family">Restore Family Bonds</button><button class="action-button olympus-hearth" data-hearth="cities">Calm City Unrest</button><button class="action-button olympus-hearth" data-hearth="avatar">Restore Avatar Energy</button></div>`);
 $$("[data-hearth]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.hearth;if(a==="heal")state.heroes.filter(h=>h.recruited).forEach(h=>{h.health=100;h.energy=100});if(a==="family"){state.familyDramaEvents=[];state.mortalRelationships.forEach(m=>m.relationship=clamp(m.relationship+5))}if(a==="cities")state.cities.forEach(c=>c.unrest=clamp(c.unrest-8));if(a==="avatar")state.avatar.energy=100;state.divineReputation.merciful+=2;recordOlympus("Hestia's Hearth",a);closeModal();renderAll()}));
}

function openPoseidonGate(){
 showModal(`<p class="eyebrow">POSEIDON'S SEA GATE</p><h2>🌊 Command the Seas</h2><div class="olympus-action-grid"><button class="action-button" data-sea-gate="fleet">Repair All Fleets</button><button class="action-button" data-sea-gate="expedition">Launch Sacred Expedition</button><button class="action-button" data-sea-gate="monster">Hunt Sea Monster</button><button class="action-button" data-sea-gate="storm">Calm All Storms</button></div>`);
 $$("[data-sea-gate]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.seaGate;if(a==="fleet")state.fleets.forEach(f=>f.health=100);if(a==="expedition"){const f=state.fleets[0];if(f){f.status="At Sea";f.mission="explore";f.yearsLeft=1}}if(a==="monster"){const m=state.monsters.find(m=>m.active&&["Storm Sea"].includes(m.territory));if(m)m.currentHealth=Math.max(1,m.currentHealth-40)}if(a==="storm")state.enterprises.forEach(e=>e.risk=Math.max(0,e.risk-.2));recordOlympus("Poseidon's Sea Gate",a);closeModal();renderAll()}));
}

function openApolloTemple(){
 const prophecy=randomItem(["A Titan will seek peace before war.","A child of divine blood will alter a kingdom.","Atlantis stands near a turning point.","A hero's greatest victory will come after defeat."]);
 showModal(`<p class="eyebrow">APOLLO'S SUN TEMPLE</p><h2>☀️ Prophecy & Healing</h2><p>${prophecy}</p><div class="olympus-action-grid"><button class="action-button" id="apollo-heal">Cure Plague</button><button class="action-button" id="apollo-inspire">Inspire the Arts</button><button class="action-button" id="apollo-record">Record Prophecy</button></div>`);
 $("#apollo-heal").addEventListener("click",()=>{state.cities.forEach(c=>c.happiness=clamp(c.happiness+4));state.heroes.forEach(h=>h.health=100);closeModal();renderAll()});
 $("#apollo-inspire").addEventListener("click",()=>{state.cities.forEach(c=>c.culture=clamp(c.culture+6));state.prestige+=8;closeModal();renderAll()});
 $("#apollo-record").addEventListener("click",()=>{addLibraryEntry("myths","Prophecy of Apollo",prophecy);state.questBoost=true;closeModal();renderAll()});
}

function openArtemisGrove(){
 showModal(`<p class="eyebrow">ARTEMIS' SACRED GROVE</p><h2>🌙 Hunt & Wilderness</h2><div class="olympus-action-grid"><button class="action-button" data-grove="track">Track Strongest Monster</button><button class="action-button" data-grove="bless">Bless Hunters</button><button class="action-button" data-grove="protect">Protect Wilderness</button></div>`);
 $$("[data-grove]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.grove;if(a==="track"){const m=state.monsters.filter(m=>m.active).sort((x,y)=>y.strength-x.strength)[0];if(m){m.currentHealth=Math.max(1,m.currentHealth-20);addLog("Artemis Reveals a Monster",`${m.name} is weakened and exposed.`)}}if(a==="bless")state.heroes.filter(h=>h.recruited).forEach(h=>h.trainingXP.exploration+=15);if(a==="protect")state.cities.forEach(c=>c.happiness=clamp(c.happiness+2));closeModal();renderAll()}));
}

function openHadesEmbassy(){
 showModal(`<p class="eyebrow">HADES' EMBASSY</p><h2>💀 Gate to the Underworld</h2><p>The embassy prepares souls, treaties, and passage for the coming Underworld expansion.</p><div class="olympus-action-grid"><button class="action-button" data-hades="soul">Negotiate for a Soul</button><button class="action-button" data-hades="tartarus">Inspect Tartarus Records</button><button class="action-button" data-hades="oath">Swear Underworld Oath</button></div>`);
 $$("[data-hades]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.hades;if(a==="soul"){const d=state.demigods.find(d=>d.status==="Mortal Death");if(d)d.status="Returned from Hades"}if(a==="tartarus")state.tartarusStability=clamp(state.tartarusStability+6,0,130);if(a==="oath"){state.divineReputation.honorable+=4;state.council.find(g=>g.name==="Hades").trust=clamp(state.council.find(g=>g.name==="Hades").trust+8)}recordOlympus("Hades' Embassy",a);closeModal();renderAll()}));
}

function openOlympusEvents(){
 const e=state.livingOlympus.events[0];if(!e){showToast("No Olympus events.");return}
 showModal(`<p class="eyebrow">DYNAMIC OLYMPUS EVENT</p><h2>${e.icon} ${e.title}</h2><p>${e.text}</p><div class="choice-row"><button id="olympus-event-good" class="choice-button good">${e.good}</button><button id="olympus-event-bad" class="choice-button bad">${e.bad}</button></div>`);
 $("#olympus-event-good").addEventListener("click",()=>resolveOlympusEvent(e,true));
 $("#olympus-event-bad").addEventListener("click",()=>resolveOlympusEvent(e,false));
}

function resolveOlympusEvent(e,good){
 if(e.title.includes("Council")){state.council.forEach(g=>g.relationship=clamp(g.relationship+(good?3:-2)));state.divineReputation.honorable+=good?3:0}
 if(e.title.includes("Relic")){if(good){if(state.gold>=50){state.gold-=50;const i=state.divineInventory.find(i=>!i.owned);if(i)i.owned=true}}else state.prestige+=2}
 if(e.title.includes("Disaster")){if(good){state.food+=40;state.tartarusStability=clamp(state.tartarusStability+4)}else state.fateBalance=clamp(state.fateBalance-5)}
 if(e.title.includes("Festival")){state.cities.forEach(c=>c.happiness=clamp(c.happiness+(good?6:-2)))}
 if(e.title.includes("Envoy")){state.titanCouncil.rebellionStrength=clamp(state.titanCouncil.rebellionStrength+(good?-5:5));state.divineReputation.merciful+=good?2:0}
 if(e.title.includes("Conspiracy")){state.titanCouncil.secrecy=clamp(state.titanCouncil.secrecy-(good?8:2))}
 state.olympusEventHistory.unshift({title:e.title,choice:good?e.good:e.bad,year:state.year});state.livingOlympus.events=state.livingOlympus.events.filter(x=>x.id!==e.id);recordOlympus("Olympus Event",`${e.title}: ${good?e.good:e.bad}`);closeModal();renderAll();saveGame(false);
}

function recordOlympus(location,action){
 state.olympusEventHistory.unshift({title:location,choice:action,year:state.year});
 state.olympusEventHistory=state.olympusEventHistory.slice(0,30);
 addLog(location,action);
}

function livingOlympusYearTurn(){
 if(Math.random()<.35){const e=randomItem(olympusEventTemplates);state.livingOlympus.events.push({id:uid("olympusEvent"),...e,year:state.year});addLog(e.title,e.text)}
 if(state.livingOlympus.research.includes("heroic-theory"))state.heroes.filter(h=>h.recruited).forEach(h=>h.xp+=5);
 if(state.livingOlympus.research.includes("divine-law"))state.council.forEach(g=>g.trust=clamp(g.trust+1));
 if(state.divineInventory.some(i=>i.id==="hermes-scroll"&&i.equipped))state.enterprises.forEach(e=>e.risk=Math.max(0,e.risk-.05));
 if(state.divineInventory.some(i=>i.id==="ring-prophecy"&&i.equipped))state.fateBalance=clamp(state.fateBalance+1,0,120);
}
function renderAvatar(){
 const a=state.avatar,form=avatarForms.find(f=>f.id===a.form)||avatarForms[0];
 $("#avatar-form-label").textContent=form.name;
 $("#avatar-summary").innerHTML=`<p class="eyebrow">INCARNATE DEITY</p><h3>${form.icon} ${getGod().name} walks the world in ${form.name}</h3><p>${form.text}</p><div class="stats"><div class="stat"><strong>${a.energy}</strong><small>Avatar Energy</small></div><div class="stat"><strong>${a.location}</strong><small>Location</small></div><div class="stat"><strong>${a.reputation}</strong><small>Mortal Fame</small></div></div><div class="meter avatar-energy"><span style="width:${a.energy/a.maxEnergy*100}%"></span></div>`;
 $("#avatar-form-list").innerHTML=`<div class="avatar-grid">${avatarForms.map(f=>{const unlocked=f.unlock();return `<article class="card avatar-form-card avatar-${f.id} ${a.form===f.id?"active-form":""} ${unlocked?"":"avatar-locked"}"><div class="card-row"><span class="avatar-form-icon">${f.icon}</span><span class="tag gold">${a.form===f.id?"Active":unlocked?"Available":"Locked"}</span></div><h3>${f.name}</h3><p>${f.text}</p><button class="card-button" data-avatar-form="${f.id}" ${!unlocked||a.form===f.id?"disabled":""}>Assume Form</button></article>`}).join("")}</div>`;
 $$("[data-avatar-form]").forEach(b=>b.addEventListener("click",()=>changeAvatarForm(b.dataset.avatarForm)));
 $("#avatar-action-list").innerHTML=avatarActions.map(x=>`<article class="card avatar-action-card"><div class="card-row"><div><span class="avatar-action-icon">${x.icon}</span><h3>${x.name}</h3></div><span class="tag gold">${x.cost} Energy</span></div><p>${x.text}</p><button class="card-button" data-avatar-action="${x.id}" ${a.energy<x.cost?"disabled":""}>Perform Action</button></article>`).join("")+state.avatarHistory.slice(0,8).map(h=>`<article class="card avatar-log"><div class="card-row"><h3>${h.icon} ${h.title}</h3><span class="pill">Year ${h.year}</span></div><p>${h.text}</p></article>`).join("");
 $$("[data-avatar-action]").forEach(b=>b.addEventListener("click",()=>performAvatarAction(b.dataset.avatarAction)));
}

function changeAvatarForm(id){
 const f=avatarForms.find(x=>x.id===id);if(!f||!f.unlock())return;
 if(state.avatar.energy<f.energyCost){showToast("Not enough Avatar Energy.");return}
 state.avatar.energy-=f.energyCost;state.avatar.form=id;state.avatar.hidden=id==="mortal"||id==="spirit";
 recordAvatar("Form Changed",`${getGod().name} assumes ${f.name}.`,f.icon);renderAll();saveGame(false);
}

function performAvatarAction(id){
 const action=avatarActions.find(x=>x.id===id);if(!action)return;
 if(state.avatar.energy<action.cost){showToast("Not enough Avatar Energy.");return}
 state.avatar.energy-=action.cost;
 if(id==="visit-city"){chooseAvatarCity();return}
 if(id==="speak-citizen"){chooseCitizenForAvatar();return}
 if(id==="train-hero"){chooseHeroForAvatarTraining();return}
 if(id==="bless-village"){avatarBlessVillage();return}
 if(id==="judge-criminal"){avatarJudgeCriminal();return}
 if(id==="visit-temple"){avatarVisitTemple();return}
 if(id==="attend-festival"){avatarAttendFestival();return}
 if(id==="explore-ruin"){avatarExploreRuin();return}
}

function chooseAvatarCity(){
 showModal(`<p class="eyebrow">DIVINE DESCENT</p><h2>Choose a City</h2><div class="avatar-location-grid">${state.cities.map(c=>`<button class="action-button avatar-location-button" data-avatar-city="${c.id}">${c.symbol} ${c.name}<br><small>Happiness ${c.happiness} • Unrest ${c.unrest}</small></button>`).join("")}</div>`);
 $$("[data-avatar-city]").forEach(b=>b.addEventListener("click",()=>enterCityAsAvatar(b.dataset.avatarCity)));
}

function enterCityAsAvatar(id){
 const c=state.cities.find(x=>x.id===id);state.avatar.location=c.name;state.avatar.visits++;c.happiness=clamp(c.happiness+3);c.player=clamp(c.player+4);
 const reaction=state.avatar.form==="divine"?"Crowds kneel as divine light fills the streets.":state.avatar.form==="mortal"?"You walk unnoticed and hear the city's honest concerns.":state.avatar.form==="spirit"?"You pass invisibly through homes and temples.":"The city trembles before your primordial form.";
 recordAvatar(`Arrival in ${c.name}`,reaction,c.symbol);
 showModal(`<p class="eyebrow">WALKING IN ${c.name.toUpperCase()}</p><h2>${c.symbol} ${c.name}</h2><p>${reaction}</p><div class="avatar-action-grid"><button class="action-button" data-city-avatar-action="market">🪙 Visit Agora</button><button class="action-button" data-city-avatar-action="palace">👑 Enter Palace</button><button class="action-button" data-city-avatar-action="temple">🙏 Inspect Temples</button><button class="action-button" data-city-avatar-action="people">💬 Meet Citizens</button><button class="action-button" data-city-avatar-action="train">⚔️ Train Local Hero</button><button class="action-button" data-city-avatar-action="miracle">✨ Perform Local Miracle</button></div>`);
 $$("[data-city-avatar-action]").forEach(b=>b.addEventListener("click",()=>resolveCityAvatarAction(c,b.dataset.cityAvatarAction)));
}

function resolveCityAvatarAction(c,action){
 if(action==="market"){c.wealth=clamp(c.wealth+5);state.gold+=15;recordGold(15,`Divine visit to ${c.name} market`)}
 if(action==="palace"){const k=state.kingdoms.find(k=>k.name===c.name);if(k){k.relation=clamp(k.relation+8);k.loyalty=clamp(k.loyalty+6)}}
 if(action==="temple"){c.player=clamp(c.player+8);c.rival=clamp(c.rival-5);state.faith+=12}
 if(action==="people"){const citizens=state.citizens[c.name];citizens.forEach(x=>{x.happiness=clamp(x.happiness+5);x.loyalty=clamp(x.loyalty+4)});state.avatar.reputation+=3}
 if(action==="train"){const h=state.heroes.find(h=>h.recruited&&h.location===c.name);if(h){h.xp+=35;h.reputation+=6;h.strength+=2;levelHero(h)}else showToast("No recruited hero is in this city.")}
 if(action==="miracle"){if(!spend("favor",12))return;c.happiness=clamp(c.happiness+12);c.unrest=clamp(c.unrest-10);state.faith+=15}
 recordAvatar(`Direct Action in ${c.name}`,`${getGod().name} personally used ${action}.`,c.symbol);closeModal();renderAll();saveGame(false);
}

function chooseCitizenForAvatar(){
 const c=getCity(state.avatar.location)||randomItem(state.cities),people=state.citizens[c.name];
 showModal(`<p class="eyebrow">MORTAL ENCOUNTER</p><h2>Citizens of ${c.name}</h2><div class="citizen-grid">${people.map(p=>`<button class="citizen-card" data-avatar-citizen="${p.id}"><strong>${p.name}</strong><small>${p.job} • Happy ${p.happiness}</small></button>`).join("")}</div>`);
 $$("[data-avatar-citizen]").forEach(b=>b.addEventListener("click",()=>avatarSpeakCitizen(c,b.dataset.avatarCitizen)));
}

function avatarSpeakCitizen(c,id){
 const p=state.citizens[c.name].find(x=>x.id===id);
 const truth=state.avatar.form==="mortal"||state.avatar.form==="spirit";
 const concern=c.unrest>45?"fear of disorder":c.wealth<35?"poverty and poor trade":c.rival>c.player?"growing rival worship":"hope for the city's future";
 showModal(`<p class="eyebrow">PERSONAL AUDIENCE</p><h2>${p.name}</h2><p>${truth?`${p.name} speaks honestly about ${concern}.`:`${p.name} is overwhelmed by your divine presence.`}</p><div class="choice-row"><button id="citizen-bless" class="choice-button good">Grant Personal Blessing</button><button id="citizen-task" class="choice-button bad">Give Sacred Task</button></div>`);
 $("#citizen-bless").addEventListener("click",()=>{p.happiness=clamp(p.happiness+18);p.loyalty=clamp(p.loyalty+12);state.faith+=5;state.divineReputation.merciful+=2;recordAvatar(`Blessed ${p.name}`,`${p.name}'s life was changed by direct divine favor.`,"✨");closeModal();renderAll()});
 $("#citizen-task").addEventListener("click",()=>{p.loyalty=clamp(p.loyalty+8);p.happiness=clamp(p.happiness-2);state.sideQuests.push({id:uid("side"),city:c.name,title:`Sacred Task Given to ${p.name}`,rewardGold:35,rewardXP:30,status:"Available"});state.divineReputation.ambitious+=1;closeModal();renderAll()});
}

function chooseHeroForAvatarTraining(){
 const heroes=state.heroes.filter(h=>h.recruited);
 showModal(`<p class="eyebrow">PERSONAL DIVINE TRAINING</p><h2>Choose a Hero</h2><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-avatar-train-hero="${h.id}">${h.portrait} ${h.name}<br><small>Level ${h.level}</small></button>`).join("")}</div>`);
 $$("[data-avatar-train-hero]").forEach(b=>b.addEventListener("click",()=>{const h=getHero(b.dataset.avatarTrainHero);h.xp+=55;h.reputation+=10;h.trainingXP.divine+=30;h.strength+=3;h.wisdom+=3;h.courage+=3;if(Math.random()<.35){h.skillPoints++;h.traits.push("Personally Trained by "+getGod().name)}levelHero(h);recordAvatar(`Trained ${h.name}`,`${h.name} receives direct instruction from ${getGod().name}.`,h.portrait);closeModal();renderAll();saveGame(false)}));
}

function avatarBlessVillage(){
 const c=state.cities.sort((a,b)=>a.happiness-b.happiness)[0];state.food+=45;c.happiness=clamp(c.happiness+16);c.loyalty=clamp((c.loyalty||50)+8);c.player=clamp(c.player+6);state.divineReputation.merciful+=3;state.avatar.reputation+=5;recordAvatar(`Blessed the Villages of ${c.name}`,"Harvests flourish and mortal devotion rises.","🌾");renderAll();saveGame(false);
}

function avatarJudgeCriminal(){
 showModal(`<p class="eyebrow">DIVINE JUDGMENT</p><h2>⚖️ A Criminal Is Brought Before You</h2><p>A thief stole temple offerings to feed a starving family.</p><div class="choice-row"><button id="judge-mercy" class="choice-button good">Show Mercy</button><button id="judge-punish" class="choice-button bad">Divine Punishment</button></div><button id="judge-trial" class="secondary-button">Order a Sacred Trial</button>`);
 $("#judge-mercy").addEventListener("click",()=>{state.divineReputation.merciful+=5;state.divineReputation.honorable+=2;state.faith+=4;recordAvatar("Merciful Judgment","The thief is forgiven and given work.","🕊️");closeModal();renderAll()});
 $("#judge-punish").addEventListener("click",()=>{state.divineReputation.ruthless+=5;state.divineReputation.tyrannical+=2;state.prestige+=5;recordAvatar("Harsh Judgment","The criminal is punished before the city.","⚡");closeModal();renderAll()});
 $("#judge-trial").addEventListener("click",()=>{state.divineReputation.wise+=3;state.divineReputation.honorable+=3;state.prestige+=3;recordAvatar("Sacred Trial","Witnesses and priests determine the truth.","⚖️");closeModal();renderAll()});
}

function avatarVisitTemple(){
 const c=getCity(state.avatar.location)||randomItem(state.cities);const rival=c.rival>c.player;
 if(state.avatar.form==="spirit"){c.rival=clamp(c.rival-10);state.titanCouncil.secrecy=clamp(state.titanCouncil.secrecy-5)}
 else{c.player=clamp(c.player+8);state.faith+=15}
 recordAvatar(`Temple Visit in ${c.name}`,rival?"You confront rival worship and hidden influence.":"Priests celebrate the arrival of their deity.","🙏");renderAll();saveGame(false);
}

function avatarAttendFestival(){
 const c=getCity(state.avatar.location)||randomItem(state.cities);c.happiness=clamp(c.happiness+14);c.culture=clamp(c.culture+12);c.player=clamp(c.player+5);state.faith+=12;state.prestige+=7;state.avatar.reputation+=6;recordAvatar(`Festival in ${c.name}`,`${getGod().name} attends in ${avatarForms.find(f=>f.id===state.avatar.form).name}.`,"🎉");renderAll();saveGame(false);
}

function avatarExploreRuin(){
 const hidden=state.discoveries.filter(d=>!d.found);
 const outcome=Math.random();
 if(hidden.length&&outcome<.4){const d=randomItem(hidden);d.found=true;d.yearFound=state.year;d.outcome=`Found personally by ${getGod().name}`;state.prestige+=12;recordAvatar(`Discovered ${d.name}`,d.text,d.icon);addLibraryEntry("places",d.name,d.text)}
 else if(outcome<.72){discoverArtifact();recordAvatar("Recovered a Lost Relic","A forgotten artifact is uncovered beneath ancient stones.","🏺")}
 else{const m=state.monsters.find(m=>m.active);if(m){m.currentHealth=Math.max(1,m.currentHealth-25);recordAvatar(`Encountered ${m.name}`,`The deity personally confronts the creature in a ruined sanctuary.`,m.icon)}else recordAvatar("Ancient Prophecy Found","The ruin reveals a warning about Olympus and Tartarus.","🔮")}
 renderAll();saveGame(false);
}

function recordAvatar(title,text,icon){
 state.avatarHistory.unshift({title,text,icon,year:state.year,form:state.avatar.form,location:state.avatar.location});
 state.avatarHistory=state.avatarHistory.slice(0,30);addLog(title,text);
}

function avatarYearTurn(){
 state.avatar.energy=clamp(state.avatar.energy+28,0,state.avatar.maxEnergy);
 if(state.avatar.form==="divine")state.faith+=3;
 if(state.avatar.form==="mortal")state.divineReputation.wise+=1;
 if(state.avatar.form==="spirit")state.fateBalance=clamp(state.fateBalance+1,0,120);
 if(state.avatar.form==="titan"){state.titanCouncil.rebellionStrength=clamp(state.titanCouncil.rebellionStrength+2);state.divineReputation.ruthless+=1}
 if(Math.random()<.2)state.directWorldEvents.push({id:uid("direct"),title:"A Mortal Requests Divine Intervention",year:state.year});
}
function renderDivinePolitics(){
 const alliances=state.divineAlliances.length,rivalries=state.divineRivalries.length,offices=state.divineTitles.filter(t=>t.holder).length;
 $("#divine-politics-status").textContent=rivalries>alliances?"Olympus Divided":alliances>=4?"Olympus United":"Olympus Watchful";
 $("#divine-politics-summary").innerHTML=`<p class="eyebrow">LIVING IMMORTALS</p><h3>Olympians pursue ambitions, form alliances, and compete for office</h3><div class="stats"><div class="stat"><strong>${alliances}</strong><small>Alliances</small></div><div class="stat"><strong>${rivalries}</strong><small>Rivalries</small></div><div class="stat"><strong>${offices}</strong><small>Offices</small></div></div><button id="call-office-election" class="primary-button">Call Divine Office Election</button>`;
 $("#call-office-election").addEventListener("click",openDivineOfficeElection);
 $("#divine-politics-list").innerHTML=state.council.map(g=>`<article class="card divine-politics-card"><div class="card-row"><div class="council-head"><span class="divine-avatar">${g.icon}</span><div><h3>${g.name}</h3><p>${g.mood} • ${g.ambition}</p></div></div><span class="tag council-office">${g.office||"No Office"}</span></div><div class="world-stats"><div class="world-stat"><strong>${g.relationship}</strong><small>Relation</small></div><div class="world-stat"><strong>${g.trust}</strong><small>Trust</small></div><div class="world-stat"><strong>${g.favorOwed}</strong><small>Favors</small></div><div class="world-stat"><strong>${g.memories.length}</strong><small>Memories</small></div></div><button class="card-button" data-divine-conversation="${g.name}">Speak with ${g.name}</button></article>`).join("");
 $$("[data-divine-conversation]").forEach(b=>b.addEventListener("click",()=>openDivineConversation(b.dataset.divineConversation)));
}
function openDivineConversation(name){
 const g=state.council.find(x=>x.name===name);
 showModal(`<p class="eyebrow">DIVINE CONVERSATION</p><h2>${g.icon} ${g.name}</h2><p class="muted">Mood: ${g.mood}. Trust: ${g.trust}. Ambition: ${g.ambition}.</p><div class="dialogue-choice-grid">${divineConversationTopics.map(t=>`<button class="action-button" data-conversation-topic="${t.id}">${t.icon} ${t.name}</button>`).join("")}</div><div class="memory-list">${g.memories.slice(0,4).map(m=>`<div class="memory-chip">${m}</div>`).join("")||'<div class="memory-chip">No major memories yet.</div>'}</div>`);
 $$("[data-conversation-topic]").forEach(b=>b.addEventListener("click",()=>resolveDivineConversation(g,b.dataset.conversationTopic)));
}
function resolveDivineConversation(g,topic){
 if(topic==="advice"){state.divineReputation.wise+=2;g.trust=clamp(g.trust+4);state.questBoost=true}
 if(topic==="promise"){state.divineReputation.honorable+=2;g.favorOwed++;g.trust=clamp(g.trust+6)}
 if(topic==="gift"){if(!spend("gold",25))return;g.relationship=clamp(g.relationship+10);g.trust=clamp(g.trust+7)}
 if(topic==="blessing"){if(!spend("favor",15))return;state.faith+=15;state.prestige+=5;g.trust=clamp(g.trust+3)}
 if(topic==="argue"){if(Math.random()*100<state.divineReputation.wise+g.relationship*.4){g.trust=clamp(g.trust+5);state.prestige+=5}else{g.relationship=clamp(g.relationship-8);g.trust=clamp(g.trust-6)}}
 if(topic==="alliance"){if(!state.divineAlliances.some(a=>a.includes(g.name)&&a.includes(getGod().name))){state.divineAlliances.push([getGod().name,g.name]);g.trust=clamp(g.trust+12)}}
 if(topic==="quest"){state.sideQuests.push({id:uid("side"),city:randomItem(state.cities).name,title:`Personal Quest of ${g.name}`,rewardGold:rand(55,105),rewardXP:rand(50,90),status:"Available"})}
 if(topic==="secret"){state.divineMessages.unshift({from:g.name,text:randomItem(["A Titan sympathizer sits in the Council.","A kingdom plans betrayal.","A demigod is watched by the Fates.","A rival seeks divine office."]),year:state.year});state.divineReputation.deceitful+=1}
 g.memories.unshift(`Year ${state.year}: ${topic}.`);g.memories=g.memories.slice(0,10);closeModal();renderAll();saveGame(false);
}
function openDivineOfficeElection(){
 const title=randomItem(state.divineTitles.filter(t=>!t.holder)||state.divineTitles),candidates=state.council.slice().sort((a,b)=>b.relationship-a.relationship).slice(0,5);
 showModal(`<p class="eyebrow">DIVINE OFFICE ELECTION</p><h2>${title.icon} ${title.name}</h2><p>${title.benefit}</p><div class="action-grid">${candidates.map(g=>`<button class="action-button" data-office-candidate="${g.name}">${g.icon} ${g.name}</button>`).join("")}</div>`);
 $$("[data-office-candidate]").forEach(b=>b.addEventListener("click",()=>{const candidate=state.council.find(g=>g.name===b.dataset.officeCandidate);let support=1;state.council.forEach(g=>{if(g.name!==candidate.name&&Math.random()*100<(g.relationship+candidate.trust)/2)support++});if(support>state.council.length/2){title.holder=candidate.name;title.yearAssigned=state.year;candidate.office=title.name;state.prestige+=10}addLog(`${title.name} Election`,`${candidate.name} received ${support} votes.`);closeModal();renderAll();saveGame(false)}));
}
function renderTitanCouncil(){
 const tc=state.titanCouncil;
 $("#titan-council-status").textContent=tc.infiltrated?"Infiltrated":tc.secrecy>65?"Hidden":tc.secrecy>35?"Exposed":"Open Rebellion";
 $("#titan-council-summary").innerHTML=`<p class="eyebrow">TITAN CONSPIRACY</p><h3>${tc.rebellionStrength}% rebellion strength</h3><div class="meter red"><span style="width:${tc.rebellionStrength}%"></span></div><div class="stats"><div class="stat"><strong>${tc.secrecy}</strong><small>Secrecy</small></div><div class="stat"><strong>${tc.activeAgendas.length}</strong><small>Agendas</small></div><div class="stat"><strong>${tc.meetings.length}</strong><small>Meetings</small></div></div><div class="titan-action-grid"><button id="infiltrate-titan-council" class="action-button">🕵️ Infiltrate<br><small>30 Prestige</small></button><button id="send-titan-spy" class="action-button">🪽 Send Spy<br><small>20 Favor</small></button><button id="offer-titan-summit" class="action-button">🕊️ Peace Summit</button></div>`;
 $("#infiltrate-titan-council").addEventListener("click",()=>{if(!spend("prestige",30))return;tc.infiltrated=true;tc.secrecy=25;renderAll();saveGame(false)});
 $("#send-titan-spy").addEventListener("click",()=>{if(!spend("favor",20))return;tc.secrecy=clamp(tc.secrecy-12);renderAll();saveGame(false)});
 $("#offer-titan-summit").addEventListener("click",()=>{tc.rebellionStrength=clamp(tc.rebellionStrength-8);state.divineReputation.merciful+=4;renderAll();saveGame(false)});
 $("#titan-council-list").innerHTML=state.titans.map(t=>`<article class="card titan-agenda-card"><div class="card-row"><div class="council-head"><span class="titan-avatar">${t.icon}</span><div><h3>${t.name}</h3><p>${t.currentGoal}</p></div></div><span class="tag gold">${t.status}</span></div><div class="world-stats"><div class="world-stat"><strong>${t.followers}</strong><small>Followers</small></div><div class="world-stat"><strong>${t.influence}</strong><small>Influence</small></div><div class="world-stat"><strong>${t.trust}</strong><small>Trust</small></div><div class="world-stat"><strong>${t.danger}</strong><small>Danger</small></div></div><button class="card-button" data-titan-dialogue="${t.id}">Negotiate with ${t.name}</button></article>`).join("")+tc.activeAgendas.slice(0,6).map(a=>`<article class="card agenda-active"><h3>${a.icon} ${a.name}</h3><p>${a.text}</p></article>`).join("");
 $$("[data-titan-dialogue]").forEach(b=>b.addEventListener("click",()=>openTitanCouncilDialogue(b.dataset.titanDialogue)));
}
function openTitanCouncilDialogue(id){
 const t=state.titans.find(x=>x.id===id);
 showModal(`<p class="eyebrow">TITAN NEGOTIATION</p><h2>${t.icon} ${t.name}</h2><p>Trust ${t.trust}. Followers ${t.followers}.</p><div class="titan-action-grid"><button class="action-button" data-titan-talk="bargain">🤝 Bargain</button><button class="action-button" data-titan-talk="threaten">⚡ Threaten</button><button class="action-button" data-titan-talk="followers">👥 Disband Followers</button><button class="action-button" data-titan-talk="alliance">⛓️ Secret Alliance</button><button class="action-button" data-titan-talk="betray">🗡️ Betray</button></div>`);
 $$("[data-titan-talk]").forEach(b=>b.addEventListener("click",()=>{const a=b.dataset.titanTalk;if(a==="bargain"){if(!spend("gold",25))return;t.trust=clamp(t.trust+10);t.followers+=5;applyTitanGift(t)}if(a==="threaten"){t.followers=Math.max(0,t.followers-10);state.divineReputation.ruthless+=3}if(a==="followers"){t.followers=Math.max(0,t.followers-15);state.titanCouncil.rebellionStrength=clamp(state.titanCouncil.rebellionStrength-5)}if(a==="alliance"){state.divineAlliances.push([getGod().name,t.name]);state.divineReputation.deceitful+=4}if(a==="betray"){t.trust=0;t.seal=clamp(t.seal+20);state.divineReputation.deceitful+=8}closeModal();renderAll();saveGame(false)}));
}
function renderDivineReputation(){
 const dominant=Object.entries(state.divineReputation).sort((a,b)=>b[1]-a[1])[0];
 $("#reputation-title").textContent=dominant[0][0].toUpperCase()+dominant[0].slice(1);
 $("#reputation-summary").innerHTML=`<p class="eyebrow">HOW IMMORTALS SEE YOU</p><h3>Your choices create a permanent divine reputation</h3>`;
 $("#reputation-list").innerHTML=`<div class="reputation-grid">${reputationTraits.map(r=>`<article class="reputation-node ${r.positive?"reputation-positive":"reputation-negative"}"><strong>${r.icon} ${r.name}</strong><div class="meter ${r.positive?"green":"red"}"><span style="width:${Math.min(100,state.divineReputation[r.id])}%"></span></div><small>${state.divineReputation[r.id]} influence</small></article>`).join("")}</div><div class="section-heading subheading"><div><p class="eyebrow">DIVINE OFFICES</p><h2>Titles</h2></div></div><div class="title-grid">${state.divineTitles.map(t=>`<article class="title-node ${t.holder?"title-held":""}"><strong>${t.icon} ${t.name}</strong><small>${t.holder?`Held by ${t.holder}`:"Vacant"}<br>${t.benefit}</small></article>`).join("")}</div>${state.divineMessages.slice(0,10).map(m=>`<article class="card secret-message"><h3>${m.from}</h3><p>${m.text}</p></article>`).join("")}`;
}
function divinePoliticsYearTurn(){
 state.council.forEach(g=>{g.trust=clamp(g.trust+rand(-4,4));g.relationship=clamp(g.relationship+rand(-3,3));if(Math.random()<.3)g.currentAgenda=randomItem(divineAgendaTemplates).id;if(Math.random()<.16){const other=randomItem(state.council.filter(x=>x.name!==g.name));if(g.trust>60&&!state.divineAlliances.some(a=>a.includes(g.name)&&a.includes(other.name)))state.divineAlliances.push([g.name,other.name]);else if(g.trust<35&&!state.divineRivalries.some(a=>a.includes(g.name)&&a.includes(other.name)))state.divineRivalries.push([g.name,other.name])}});
 if(Math.random()<.28){const e=randomItem(familyDramaTemplates);state.familyDramaEvents.push({id:uid("drama"),...e,year:state.year});addLog(e.title,e.text)}
}
function titanCouncilYearTurn(){
 const tc=state.titanCouncil;if(Math.random()<.55){const agenda=randomItem(titanCouncilAgendaTemplates),t=randomItem(state.titans);tc.activeAgendas.unshift({id:uid("agenda"),titan:t.name,year:state.year,...agenda});tc.activeAgendas=tc.activeAgendas.slice(0,12);tc.meetings.unshift({year:state.year,leader:t.name,agenda:agenda.name});tc.rebellionStrength=clamp(tc.rebellionStrength+agenda.risk,0,120);tc.secrecy=clamp(tc.secrecy+rand(-8,5),0,100);if(agenda.id==="weaken-seal"){t.seal=clamp(t.seal-10);state.tartarusStability=clamp(state.tartarusStability-4)}if(agenda.id==="corrupt-demigod"){const d=randomItem(state.demigods.filter(d=>d.status!=="Immortal"));if(d)d.corruption=clamp(d.corruption+12)}if(agenda.id==="fortress"){t.followers+=12;t.influence+=8}if(agenda.id==="challenge-god")state.titanWar+=8}}
function renderWorldExpansion(){
 const known=state.civilizations.filter(c=>c.known).length,alliances=state.civilizations.filter(c=>c.allied).length,wars=state.civilizations.filter(c=>c.atWar).length;
 $("#civilization-count").textContent=`${known} Known`;
 $("#world-expansion-summary").innerHTML=`<p class="eyebrow">THE ANCIENT WORLD</p><h3>${known} civilizations are known beyond Greece</h3><div class="stats"><div class="stat"><strong>${known}</strong><small>Known</small></div><div class="stat"><strong>${alliances}</strong><small>Allies</small></div><div class="stat"><strong>${wars}</strong><small>Wars</small></div></div>`;
 $("#civilization-list").innerHTML=state.civilizations.map(c=>`<article class="card civilization-card ${c.id==="atlantis"?"atlantis-card":""}"><div class="civilization-banner"><span class="civilization-icon">${c.icon}</span><div class="flex1"><h3>${c.name}</h3><p>${c.known?`${c.capital} • ${c.ruler} • ${c.government}`:"Undiscovered civilization"}</p></div><span class="tag gold">${c.known?(c.allied?"Allied":c.atWar?"At War":"Known"):"Hidden"}</span></div>${c.known?`<div class="world-stats"><div class="world-stat"><strong>${c.army}</strong><small>Army</small></div><div class="world-stat"><strong>${c.navy}</strong><small>Navy</small></div><div class="world-stat"><strong>${c.economy}</strong><small>Economy</small></div><div class="world-stat"><strong>${c.relation}</strong><small>Relation</small></div></div><p>${c.trait}</p><div class="memory-list">${c.memories.slice(0,3).map(m=>`<div class="memory-chip">${m}</div>`).join("")||'<div class="memory-chip">No shared history yet.</div>'}</div><button class="card-button" data-civilization="${c.id}">Interact with ${c.name}</button>`:`<p>${c.trait}</p><button class="card-button" disabled>Discover through naval exploration</button>`}</article>`).join("");
 $$("[data-civilization]").forEach(b=>b.addEventListener("click",()=>openCivilization(b.dataset.civilization)));
}

function openCivilization(id){
 const c=state.civilizations.find(x=>x.id===id);
 showModal(`<p class="eyebrow">FOREIGN DIPLOMACY</p><h2>${c.icon} ${c.name}</h2><p class="muted">${c.ruler} rules from ${c.capital}. Relationship ${c.relation}/100.</p><div class="world-action-grid"><button class="action-button" data-civ-action="trade">🪙 Propose Trade<br><small>15 Prestige</small></button><button class="action-button" data-civ-action="alliance">🤝 Propose Alliance<br><small>25 Prestige</small></button><button class="action-button" data-civ-action="gift">🎁 Send Royal Gift<br><small>35 Gold</small></button><button class="action-button" data-civ-action="war">⚔️ Declare War</button><button class="action-button" data-civ-action="hero">🛡️ Send Hero Embassy</button><button class="action-button" data-civ-action="myth">📜 Exchange Myths</button></div>`);
 $$("[data-civ-action]").forEach(b=>b.addEventListener("click",()=>resolveCivilizationAction(c,b.dataset.civAction)));
}

function resolveCivilizationAction(c,action){
 if(action==="trade"){if(!spend("prestige",15))return;c.tradeAgreement=true;c.relation=clamp(c.relation+10);state.gold+=25;rememberCivilization(c,"Greece opened a profitable trade agreement.");addLibraryEntry("places",`${c.name} Trade Agreement`,`${c.name} entered a commercial pact with Greece.`)}
 if(action==="alliance"){if(!spend("prestige",25))return;const success=Math.random()*100<c.relation+state.prestige*.1;if(success){c.allied=true;c.atWar=false;c.relation=clamp(c.relation+18);rememberCivilization(c,"A sacred alliance was formed with Olympus.");addLibraryEntry("places",`${c.name} Alliance`,`The civilization became an ally of Greece.`)}else rememberCivilization(c,"An alliance proposal was rejected.")}
 if(action==="gift"){if(!spend("gold",35))return;c.relation=clamp(c.relation+14);rememberCivilization(c,"Olympus sent a magnificent royal gift.")}
 if(action==="war"){c.atWar=true;c.allied=false;c.relation=clamp(c.relation-30);state.titanWar+=3;rememberCivilization(c,"War was declared by divine command.");addLibraryEntry("wars",`War with ${c.name}`,`Greece entered open conflict with ${c.name} in Year ${state.year}.`)}
 if(action==="hero"){const heroes=state.heroes.filter(h=>h.recruited);if(!heroes.length){showToast("Recruit a hero first.");return}closeModal();chooseHeroEmbassy(c);return}
 if(action==="myth"){state.prestige+=6;state.faith+=8;c.culture=clamp(c.culture+3);generateProceduralMyth(`The Myths of Greece Reach ${c.name}`,`Poets exchange stories between Greece and ${c.capital}.`)}
 closeModal();renderAll();saveGame(false);
}

function chooseHeroEmbassy(c){
 const heroes=state.heroes.filter(h=>h.recruited);
 showModal(`<p class="eyebrow">HERO EMBASSY</p><h2>Send a Hero to ${c.name}</h2><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-embassy-hero="${h.id}">${h.portrait} ${h.name}<br><small>Leadership ${h.leadership}</small></button>`).join("")}</div>`);
 $$("[data-embassy-hero]").forEach(b=>b.addEventListener("click",()=>{const h=getHero(b.dataset.embassyHero);const success=Math.random()*100<h.leadership*.7+h.wisdom*.25;if(success){c.relation=clamp(c.relation+18);h.reputation+=8;rememberPerson(h,`Negotiated successfully with ${c.name}.`);rememberCivilization(c,`${h.name} served as a respected ambassador.`);addLog(`${h.name} Wins Favor in ${c.name}`,"The embassy strengthens foreign relations.")}else{c.relation=clamp(c.relation-6);rememberPerson(h,`A difficult embassy to ${c.name} ended poorly.`)}closeModal();renderAll();saveGame(false)}));
}

function rememberCivilization(c,text){c.memories.unshift(`Year ${state.year}: ${text}`);c.memories=c.memories.slice(0,8)}
function rememberPerson(p,text){if(!p.memories)p.memories=[];p.memories.unshift(`Year ${state.year}: ${text}`);p.memories=p.memories.slice(0,10)}

function renderNaval(){
 const atSea=state.fleets.filter(f=>f.status==="At Sea").length,discoveries=state.discoveries.filter(d=>d.found).length;
 $("#fleet-count").textContent=`${state.fleets.length} Fleets`;
 $("#naval-summary").innerHTML=`<p class="eyebrow">NAVAL COMMAND</p><h3>${atSea} fleets are currently at sea</h3><div class="stats"><div class="stat"><strong>${state.fleets.length}</strong><small>Fleets</small></div><div class="stat"><strong>${atSea}</strong><small>At Sea</small></div><div class="stat"><strong>${discoveries}</strong><small>Discoveries</small></div></div><div class="fleet-action-grid">${fleetTemplates.map(f=>`<button class="action-button" data-build-fleet="${f.id}" ${state.gold<f.costGold?"disabled":""}>${f.icon} Build ${f.name}<br><small>${f.costGold} Gold</small></button>`).join("")}</div>`;
 $$("[data-build-fleet]").forEach(b=>b.addEventListener("click",()=>buildFleet(b.dataset.buildFleet)));
 $("#fleet-list").innerHTML=state.fleets.length?state.fleets.map(f=>`<article class="card fleet-card ${f.status==="At Sea"?"fleet-at-sea":f.health<45?"fleet-damaged":""}"><div class="fleet-banner"><span class="fleet-icon">${f.icon}</span><div class="flex1"><h3>${f.name}</h3><p>${f.status} • ${f.location}</p></div><span class="tag gold">${f.health}% Hull</span></div><div class="fleet-stats"><div class="fleet-stat"><strong>${f.attack}</strong><small>Attack</small></div><div class="fleet-stat"><strong>${f.defense}</strong><small>Defense</small></div><div class="fleet-stat"><strong>${f.cargo}</strong><small>Cargo</small></div><div class="fleet-stat"><strong>${f.crew}</strong><small>Crew</small></div></div><button class="card-button" data-fleet="${f.id}">Command Fleet</button></article>`).join(""):`<article class="card"><h3>No fleets constructed</h3><p>Build merchant ships, war galleys, triremes, exploration vessels, or a divine flagship.</p></article>`;
 $$("[data-fleet]").forEach(b=>b.addEventListener("click",()=>openFleetCommand(b.dataset.fleet)));
 $("#discovery-list").innerHTML=state.discoveries.map(d=>`<article class="card ruin-card ${d.found?"discovery-found":""}"><div class="card-row"><div><span class="portrait">${d.icon}</span><h3>${d.name}</h3></div><span class="tag gold">${d.found?`Found Year ${d.yearFound}`:"Undiscovered"}</span></div><p>${d.text}</p>${d.found?`<p class="muted">Outcome: ${d.outcome}</p>`:""}</article>`).join("");
}

function buildFleet(id){
 const t=fleetTemplates.find(x=>x.id===id);if(!spend("gold",t.costGold))return;
 if(state.wood<t.costWood){state.gold+=t.costGold;showToast("Not enough wood.");return}
 if(t.costBronze&&state.bronze<t.costBronze){state.gold+=t.costGold;showToast("Not enough bronze.");return}
 state.wood-=t.costWood;state.bronze-=t.costBronze||0;
 state.fleets.push({id:uid("fleet"),templateId:t.id,name:t.name,icon:t.icon,crew:t.crew,attack:t.attack,defense:t.defense,cargo:t.cargo,speed:t.speed,health:100,status:"Docked",location:"Corinth",mission:null,yearsLeft:0,experience:0});
 addLog(`${t.name} Constructed`,"A new fleet joins the naval forces of Greece.");renderAll();saveGame(false);
}

function openFleetCommand(id){
 const f=state.fleets.find(x=>x.id===id);
 showModal(`<p class="eyebrow">FLEET COMMAND</p><h2>${f.icon} ${f.name}</h2><p class="muted">${f.status} at ${f.location}. Hull ${f.health}%.</p><div class="fleet-action-grid"><button class="action-button" data-fleet-action="explore" ${f.status==="At Sea"?"disabled":""}>🧭 Explore Unknown Seas</button><button class="action-button" data-fleet-action="trade" ${f.status==="At Sea"?"disabled":""}>🪙 Establish Trade Voyage</button><button class="action-button" data-fleet-action="patrol" ${f.status==="At Sea"?"disabled":""}>⚔️ Hunt Pirates</button><button class="action-button" data-fleet-action="escort" ${f.status==="At Sea"?"disabled":""}>🛡️ Escort Merchants</button><button class="action-button" data-fleet-action="repair" ${f.health>=100?"disabled":""}>⚒️ Repair Fleet<br><small>20 Gold</small></button><button class="action-button" data-fleet-action="atlantis" ${state.atlantis.status==="Hidden"||f.status==="At Sea"?"disabled":""}>🔷 Sail to Atlantis</button></div>`);
 $$("[data-fleet-action]").forEach(b=>b.addEventListener("click",()=>resolveFleetCommand(f,b.dataset.fleetAction)));
}

function resolveFleetCommand(f,action){
 if(action==="repair"){if(!spend("gold",20))return;f.health=100;f.status="Docked"}
 if(["explore","trade","patrol","escort","atlantis"].includes(action)){f.status="At Sea";f.mission=action;f.yearsLeft=1;f.location="Mediterranean";addLog(`${f.name} Sets Sail`,`${action} mission begins.`)}
 closeModal();renderAll();saveGame(false);
}

function resolveFleetYear(){
 state.fleets.forEach(f=>{
  if(f.status!=="At Sea")return;
  f.yearsLeft--;
  if(f.yearsLeft>0)return;
  if(f.mission==="explore"){
   const hidden=state.discoveries.filter(d=>!d.found);
   if(hidden.length){
    const d=randomItem(hidden),success=Math.random()>Math.max(.05,d.risk-f.speed/250);
    if(success){d.found=true;d.yearFound=state.year;d.outcome=`Discovered by ${f.name}`;state.gold+=d.rewardGold;state.prestige+=15;f.experience+=15;addLibraryEntry("places",d.name,d.text);generateProceduralMyth(`${f.name} Discovers ${d.name}`,d.text);if(d.id==="atlantis")discoverAtlantis()}
    else{f.health=clamp(f.health-rand(18,38));d.outcome="Expedition failed";addLog(`${f.name} Returns Without Discovery`,"Storms and danger forced the expedition home.")}
   }
  }
  if(f.mission==="trade"){const amount=rand(45,100)+Math.floor(f.cargo*.25);state.gold+=amount;recordGold(amount,`${f.name} trade voyage`);f.experience+=8}
  if(f.mission==="patrol"){const success=Math.random()*100<f.attack+f.experience;if(success){state.gold+=40;state.prestige+=8;f.experience+=12;addLog(`${f.name} Defeats Pirates`,"Trade routes become safer.")}else f.health=clamp(f.health-rand(12,28))}
  if(f.mission==="escort"){state.enterprises.forEach(e=>e.risk=Math.max(0,e.risk-.25));state.gold+=30;f.experience+=8}
  if(f.mission==="atlantis")resolveAtlantisVisit(f);
  f.status="Docked";f.location="Corinth";f.mission=null;
 });
}

function discoverAtlantis(){
 state.atlantis.status="Discovered";state.atlantis.relation=35;
 const c=state.civilizations.find(c=>c.id==="atlantic-isles");if(c){c.known=true;c.name="Atlantis";c.capital="Poseidonia";c.ruler="High Queen Cleito";c.government="Sacred Technocracy";c.army=80;c.navy=98;c.economy=99;c.culture=96;c.relation=35;c.trait="Ancient technology and overwhelming naval power"}
 addLibraryEntry("places","Atlantis Discovered","A hidden civilization emerged from the western mists.");addLog("Atlantis Is Discovered","The legendary island civilization enters world politics.");
}

function resolveAtlantisVisit(f){
 if(state.atlantis.status==="Hidden")return;
 const outcomes=["Alliance Offer","Technology Exchange","Naval Challenge","Warning of the Flood"];
 const outcome=randomItem(outcomes);state.atlantis.choiceHistory.unshift({year:state.year,outcome});
 if(outcome==="Alliance Offer"){state.atlantis.relation=clamp(state.atlantis.relation+15);state.atlantis.status="Potential Ally"}
 if(outcome==="Technology Exchange"){state.bronze+=20;state.stone+=15;state.prestige+=12}
 if(outcome==="Naval Challenge"){if(f.attack+Math.random()*80>state.atlantis.power){state.prestige+=20;state.atlantis.relation+=8}else f.health=clamp(f.health-30)}
 if(outcome==="Warning of the Flood"){state.atlantis.stability=clamp(state.atlantis.stability-8);addLog("Atlantis Warns of Catastrophe","The island's priests predict a future sinking.")}
 generateProceduralMyth(`The Voyage to Atlantis`,`${f.name} returns after a ${outcome.toLowerCase()}.`);
}

function renderWonders(){
 const complete=state.wonders.filter(w=>w.status==="Completed").length,building=state.wonders.filter(w=>w.status==="Building").length;
 $("#wonder-count").textContent=`${complete} Completed`;
 $("#wonder-summary").innerHTML=`<p class="eyebrow">WORLD WONDERS</p><h3>${complete} wonders completed and ${building} under construction</h3><div class="stats"><div class="stat"><strong>${complete}</strong><small>Completed</small></div><div class="stat"><strong>${building}</strong><small>Building</small></div><div class="stat"><strong>${state.prestige}</strong><small>Prestige</small></div></div>`;
 $("#wonder-list").innerHTML=state.wonders.map(w=>`<article class="card wonder-card ${w.status==="Completed"?"wonder-complete":""}"><div class="wonder-banner"><span class="wonder-icon">${w.icon}</span><div class="flex1"><h3>${w.name}</h3><p>${w.region} • ${w.text}</p></div><span class="tag gold">${w.status}</span></div><div class="wonder-stats"><div class="wonder-stat"><strong>${w.costGold}</strong><small>Gold</small></div><div class="wonder-stat"><strong>${w.years}</strong><small>Years</small></div><div class="wonder-stat"><strong>${w.costStone||0}</strong><small>Stone</small></div><div class="wonder-stat"><strong>${w.costBronze||0}</strong><small>Bronze</small></div></div>${w.status==="Building"?`<div class="meter"><span style="width:${(w.years-w.yearsLeft)/w.years*100}%"></span></div><p class="muted">${w.yearsLeft} years remaining.</p>`:""}<button class="card-button" data-wonder="${w.id}" ${w.status!=="Available"?"disabled":""}>Begin Construction</button></article>`).join("");
 $$("[data-wonder]").forEach(b=>b.addEventListener("click",()=>beginWonder(b.dataset.wonder)));
}

function beginWonder(id){
 const w=state.wonders.find(x=>x.id===id);if(!spend("gold",w.costGold))return;
 if((w.costStone||0)>state.stone){state.gold+=w.costGold;showToast("Not enough stone.");return}
 if((w.costWood||0)>state.wood){state.gold+=w.costGold;showToast("Not enough wood.");return}
 if((w.costBronze||0)>state.bronze){state.gold+=w.costGold;showToast("Not enough bronze.");return}
 state.stone-=w.costStone||0;state.wood-=w.costWood||0;state.bronze-=w.costBronze||0;w.status="Building";w.yearsLeft=w.years;addLog(`${w.name} Construction Begins`,w.text);renderAll();saveGame(false);
}

function wonderYearTurn(){
 state.wonders.filter(w=>w.status==="Building").forEach(w=>{w.yearsLeft--;if(w.yearsLeft<=0){w.status="Completed";state.prestige+=40;state.faith+=25;applyWonderBonus(w);addLibraryEntry("places",w.name,`${w.name} was completed in Year ${state.year}. ${w.text}`);generateProceduralMyth(`${w.name} Rises`,w.text);addLog(`${w.name} Completed`,w.text)}});
}

function applyWonderBonus(w){
 if(w.id==="alexandria-lighthouse")state.fleets.forEach(f=>f.speed+=8);
 if(w.id==="colossus-rhodes"){state.fleets.forEach(f=>{f.attack+=7;f.defense+=7});getCity("Rhodes").happiness=clamp(getCity("Rhodes").happiness+15)}
 if(w.id==="artemis-temple")state.heroes.filter(h=>h.recruited).forEach(h=>h.trainingXP.exploration+=25);
 if(w.id==="halicarnassus-mausoleum")state.kingdoms.forEach(k=>k.relation=clamp(k.relation+5));
 if(w.id==="zeus-statue")state.council.forEach(g=>g.relationship=clamp(g.relationship+5));
 if(w.id==="knossos-palace"){getCity("Crete").culture=clamp(getCity("Crete").culture+20);discoverArtifact()}
}

function renderOlympicGamesV110(){
 const years=Math.max(0,state.nextOlympicYear-state.year);
 $("#olympic-year-label").textContent=years===0?"Games Ready":`In ${years} Years`;
 const champions=state.olympicHistory.filter(x=>x.place===1).length;
 $("#olympic-summary").innerHTML=`<p class="eyebrow">OLYMPIC CYCLE</p><h3>${years===0?"The Olympic Games may begin now":`The next Games begin in Year ${state.nextOlympicYear}`}</h3><div class="stats"><div class="stat"><strong>${champions}</strong><small>Champions</small></div><div class="stat"><strong>${state.olympicHistory.length}</strong><small>Entries</small></div><div class="stat"><strong>${state.olympics.lastWinner||"None"}</strong><small>Last Winner</small></div></div>${years===0?'<button id="open-full-olympics" class="primary-button">Begin Olympic Games</button>':""}`;
 const button=$("#open-full-olympics");if(button)button.addEventListener("click",openFullOlympics);
 $("#olympic-event-list").innerHTML=olympicEvents.map(e=>`<article class="card olympic-card"><div class="card-row"><div><span class="portrait">${e.icon}</span><h3>${e.name}</h3></div><span class="tag gold">${e.stat}</span></div><p>${e.text}</p></article>`).join("")+state.olympicHistory.slice(0,12).map(h=>`<article class="card ${h.place===1?"olympic-champion":""}"><div class="card-row"><h3>${h.event}: ${h.hero}</h3><span class="pill">#${h.place} • Year ${h.year}</span></div><p>${h.reward} Gold earned.</p></article>`).join("");
}

function openFullOlympics(){
 const heroes=state.heroes.filter(h=>h.recruited);
 if(!heroes.length){showToast("Recruit a hero first.");return}
 showModal(`<p class="eyebrow">OLYMPIC GAMES</p><h2>Select an Event</h2><div class="olympic-entry-grid">${olympicEvents.map(e=>`<button class="action-button" data-olympic-event="${e.id}">${e.icon} ${e.name}</button>`).join("")}</div>`);
 $$("[data-olympic-event]").forEach(b=>b.addEventListener("click",()=>chooseOlympicCompetitor(b.dataset.olympicEvent)));
}

function chooseOlympicCompetitor(eventId){
 const e=olympicEvents.find(x=>x.id===eventId),heroes=state.heroes.filter(h=>h.recruited);
 showModal(`<p class="eyebrow">${e.name.toUpperCase()}</p><h2>Choose Competitor</h2><div class="action-grid">${heroes.map(h=>`<button class="action-button" data-olympic-competitor="${h.id}">${h.portrait} ${h.name}<br><small>Level ${h.level}</small></button>`).join("")}</div>`);
 $$("[data-olympic-competitor]").forEach(b=>b.addEventListener("click",()=>resolveOlympicEvent(e,getHero(b.dataset.olympicCompetitor))));
}

function resolveOlympicEvent(e,h){
 const base=e.stat==="all"?(h.strength+h.wisdom+h.courage+h.leadership)/4:(h[e.stat]||h.energy||50);
 const score=base+h.level*8+h.reputation*.25+Math.random()*100;
 const place=score>165?1:score>130?2:score>105?3:4;
 const reward=place===1?100:place===2?65:place===3?40:10;
 state.gold+=reward;state.prestige+=place===1?25:place===2?14:place===3?8:2;h.reputation+=place===1?12:place===2?7:3;h.xp+=place===1?50:25;levelHero(h);
 state.olympicHistory.unshift({event:e.name,hero:h.name,heroId:h.id,place,reward,year:state.year});state.olympics.lastWinner=place===1?h.name:state.olympics.lastWinner;rememberPerson(h,`Placed #${place} in ${e.name}.`);
 if(place===1){h.titles.push(`Olympic Champion of ${e.name}`);addLibraryEntry("people",`${h.name}, Olympic Champion`,`${h.name} won ${e.name} in Year ${state.year}.`);generateProceduralMyth(`${h.name} Wins the ${e.name}`,`Crowds across Greece celebrate the new Olympic champion.`)}
 state.nextOlympicYear=state.year+4;closeModal();renderAll();saveGame(false);
}

function renderLibraryOfFate(){
 syncLibraryEntries();
 const category=state.libraryCategory||"all",entries=category==="all"?state.libraryEntries:state.libraryEntries.filter(e=>e.category===category);
 $("#library-entry-count").textContent=`${state.libraryEntries.length} Entries`;
 $("#library-summary").innerHTML=`<p class="eyebrow">ENCYCLOPEDIA OF YOUR WORLD</p><h3>The Library records people, places, wars, myths, relics, and prophecies</h3><div class="stats"><div class="stat"><strong>${state.libraryEntries.filter(e=>e.category==="people").length}</strong><small>People</small></div><div class="stat"><strong>${state.libraryEntries.filter(e=>e.category==="places").length}</strong><small>Places</small></div><div class="stat"><strong>${state.libraryEntries.filter(e=>e.category==="myths").length}</strong><small>Myths</small></div></div>`;
 $$(".library-tab").forEach(b=>b.classList.toggle("active",b.dataset.libraryCategory===category));
 $$(".library-tab").forEach(b=>b.onclick=()=>{state.libraryCategory=b.dataset.libraryCategory;renderLibraryOfFate()});
 $("#library-entry-list").innerHTML=entries.length?entries.slice(0,120).map(e=>`<article class="card library-entry ${e.category}"><div class="card-row"><h3>${e.title}</h3><span class="pill">${e.category}</span></div><p>${e.text}</p><small class="muted">First recorded Year ${e.year}</small></article>`).join(""):`<article class="card"><h3>No entries in this category</h3></article>`;
}

function addLibraryEntry(category,title,text){
 if(!state.libraryEntries)state.libraryEntries=[];
 const existing=state.libraryEntries.find(e=>e.category===category&&e.title===title);
 if(existing){existing.text=text;return}
 state.libraryEntries.unshift({id:uid("library"),category,title,text,year:state.year});
 state.libraryEntries=state.libraryEntries.slice(0,300);
}

function syncLibraryEntries(){
 state.heroes.filter(h=>h.recruited).forEach(h=>addLibraryEntry("people",h.name,`${h.title}. Level ${h.level}. Reputation ${h.reputation}. Known memories: ${(h.memories||[]).slice(0,2).join(" ")||"None yet."}`));
 state.demigods.forEach(d=>addLibraryEntry("people",d.name,`Demigod child of ${getGod().name} and ${d.mortalParent}. Age ${d.age}. Status: ${d.status}.`));
 state.civilizations.filter(c=>c.known).forEach(c=>addLibraryEntry("places",c.name,`${c.government} centered on ${c.capital}. ${c.trait}`));
 state.wonders.filter(w=>w.status==="Completed").forEach(w=>addLibraryEntry("places",w.name,w.text));
 state.artifacts.filter(a=>a.found).forEach(a=>addLibraryEntry("relics",a.name,a.effect));
 state.proceduralMyths.forEach(m=>addLibraryEntry("myths",m.title,m.text));
 state.kingdoms.forEach(k=>k.atWarWith.forEach(enemy=>addLibraryEntry("wars",`${k.name}-${enemy} War`,`A conflict between ${k.name} and ${enemy} recorded during the campaign.`)));
}

function civilizationYearTurn(){
 state.civilizations.filter(c=>c.known).forEach(c=>{
  c.economy=clamp(c.economy+rand(-2,4));c.relation=clamp(c.relation+rand(-3,3));
  if(c.tradeAgreement){const amount=rand(8,18);state.gold+=amount}
  if(c.atWar&&Math.random()<.35){const loss=rand(5,15);c.army=clamp(c.army-loss);state.prestige=Math.max(0,state.prestige-2);rememberCivilization(c,"A major battle was fought against Greek forces.")}
  if(c.allied&&Math.random()<.18){state.gold+=20;rememberCivilization(c,"The alliance sent tribute and supplies.")}
 });
 if(state.atlantis.status!=="Hidden"){
  state.atlantis.stability=clamp(state.atlantis.stability+rand(-5,2));
  if(state.atlantis.stability<25&&state.atlantis.status!=="Sunk"){state.atlantis.status="Sunk";addLibraryEntry("places","The Sinking of Atlantis",`Atlantis vanished beneath the sea in Year ${state.year}.`);generateProceduralMyth("Atlantis Sinks Beneath the Sea","Divine storms and failing foundations destroy the legendary island.");addLog("Atlantis Has Sunk","The ancient civilization disappears beneath the waves.")}
 }
}

function autonomousHeroYearTurn(){
 state.heroes.filter(h=>h.recruited&&!h.trainingStatus).forEach(h=>{
  const actions=["train","patrol","explore","romance","mentor","govern","write"];
  const action=randomItem(actions);
  if(action==="train"){h.xp+=15;h.trainingXP.combat+=8;rememberPerson(h,"Spent the year training independently.")}
  if(action==="patrol"){const c=getCity(h.location);if(c){c.unrest=clamp(c.unrest-4);h.reputation+=3;rememberPerson(h,`Patrolled and protected ${h.location}.`)}}
  if(action==="explore"&&Math.random()<.28){discoverArtifact();h.reputation+=4;rememberPerson(h,"Discovered clues to a lost relic.")}
  if(action==="romance"&&Math.random()<.18){h.traits.push("Romantic Bond");rememberPerson(h,"Formed a meaningful personal relationship.")}
  if(action==="mentor"){const younger=state.heroes.filter(x=>x.recruited&&x.id!==h.id&&x.level<h.level)[0];if(younger){younger.xp+=20;rememberPerson(h,`Mentored ${younger.name}.`);rememberPerson(younger,`Was mentored by ${h.name}.`)}}
  if(action==="govern"){const k=state.kingdoms.find(k=>k.name===h.location);if(k){k.loyalty=clamp(k.loyalty+4);h.leadership+=1;rememberPerson(h,`Helped govern ${h.location}.`)}}
  if(action==="write"){h.wisdom+=1;state.prestige+=2;rememberPerson(h,"Composed a philosophical or historical work.")}
  levelHero(h);
 });
}

function renderOlympus(){
 const visits=state.olympusVisits.length,ready=miracleTemplates.filter(m=>(state.miracleCooldowns[m.id]||0)<=0).length;
 $("#olympus-status").textContent=`${ready} Miracles Ready`;
 $("#olympus-summary").innerHTML=`<p class="eyebrow">DIVINE REALM</p><h3>Explore sacred halls, speak with Olympians, and cast interactive miracles</h3><div class="stats"><div class="stat"><strong>${visits}</strong><small>Visits</small></div><div class="stat"><strong>${ready}</strong><small>Miracles Ready</small></div><div class="stat"><strong>${state.customGods.length+state.ascendedGods.length}</strong><small>New Gods</small></div></div><div class="miracle-grid">${miracleTemplates.map(m=>`<button class="action-button miracle-button ${(state.miracleCooldowns[m.id]||0)>0?"miracle-cooldown":""}" data-miracle="${m.id}" ${(state.miracleCooldowns[m.id]||0)>0||state.favor<m.cost?"disabled":""}>${m.icon} ${m.name}<br><small>${m.cost} Favor • ${state.miracleCooldowns[m.id]||0} cooldown</small></button>`).join("")}</div>`;
 $$("[data-miracle]").forEach(b=>b.addEventListener("click",()=>castMiracle(b.dataset.miracle)));
 $("#olympus-location-list").innerHTML=olympusLocations.map(l=>`<article class="card olympus-location"><div class="card-row"><div class="council-head"><span class="location-icon">${l.icon}</span><div><h3>${l.name}</h3><p>${l.owner} • ${l.text}</p></div></div><span class="tag gold">${state.olympusVisits.filter(v=>v.locationId===l.id).length} Visits</span></div><button class="card-button" data-olympus-location="${l.id}">Enter ${l.name}</button></article>`).join("");
 $$("[data-olympus-location]").forEach(b=>b.addEventListener("click",()=>visitOlympusLocation(b.dataset.olympusLocation)));
}

function visitOlympusLocation(id){
 const l=olympusLocations.find(x=>x.id===id);
 showModal(`<p class="eyebrow">LIVING OLYMPUS</p><h2>${l.icon} ${l.name}</h2><p class="muted">${l.text}</p><div class="action-grid"><button class="action-button" data-location-action="speak">🗣️ Speak with ${l.owner}</button><button class="action-button" data-location-action="request">📜 Request Divine Aid</button><button class="action-button" data-location-action="offer">🏺 Bring an Offering<br><small>20 Gold</small></button><button class="action-button" data-location-action="quest">🌟 Seek Divine Quest</button></div>`);
 $$("[data-location-action]").forEach(b=>b.addEventListener("click",()=>resolveOlympusVisit(l,b.dataset.locationAction)));
}

function resolveOlympusVisit(l,action){
 const councilGod=state.council.find(g=>g.name===l.owner);
 state.olympusVisits.unshift({locationId:l.id,action,year:state.year});
 if(action==="speak"){if(councilGod){councilGod.relationship=clamp(councilGod.relationship+5);councilGod.mood="Engaged"}state.prestige+=3;generateProceduralMyth(`${getGod().name} Consults ${l.owner}`,`A divine conversation in ${l.name} changes the politics of Olympus.`)}
 if(action==="request"){if(!spend("favor",12))return;applyOlympusLocationEffect(l.action)}
 if(action==="offer"){if(!spend("gold",20))return;if(councilGod)councilGod.relationship=clamp(councilGod.relationship+9);state.faith+=10}
 if(action==="quest"){const q={id:uid("side"),city:randomItem(state.cities).name,title:`Divine Quest of ${l.owner}`,rewardGold:rand(45,90),rewardXP:rand(40,75),status:"Available"};state.sideQuests.push(q);addLog(q.title,`${l.owner} issues a sacred challenge.`)}
 closeModal();renderAll();saveGame(false);
}

function applyOlympusLocationEffect(action){
 if(action==="judgment"){const c=state.cities.sort((a,b)=>b.rival-a.rival)[0];c.rival=clamp(c.rival-10);state.prestige+=6}
 if(action==="wisdom"){state.questBoost=true;state.heroes.filter(h=>h.recruited).forEach(h=>h.wisdom+=1)}
 if(action==="forge"){state.bronze+=12;const h=state.heroes.find(h=>h.recruited);if(h){h.strength+=4;h.equipment.push("Olympian-forged Upgrade")}}
 if(action==="love"){state.mortalRelationships.forEach(m=>m.relationship=clamp(m.relationship+4));state.kingdoms.forEach(k=>k.loyalty=clamp(k.loyalty+3))}
 if(action==="travel"){state.heroes.filter(h=>h.recruited).forEach(h=>h.energy=100);state.enterprises.forEach(e=>e.risk=Math.max(0,e.risk-.12))}
 if(action==="festival"){state.cities.forEach(c=>{c.happiness=clamp(c.happiness+5);c.culture=clamp(c.culture+3)})}
 if(action==="underworld"){const dead=state.demigods.find(d=>d.status==="Mortal Death");if(dead){dead.status="Returned from Hades";dead.age=Math.max(18,dead.age-5);dead.corruption=clamp(dead.corruption+12)}else state.gold+=25}
 if(action==="hunt"){const m=state.monsters.find(m=>m.active);if(m)m.currentHealth=Math.max(1,m.currentHealth-30);state.heroes.filter(h=>h.recruited).forEach(h=>h.trainingXP.exploration+=10)}
}

function castMiracle(id){
 const m=miracleTemplates.find(x=>x.id===id);
 if(!spend("favor",m.cost))return;
 state.miracleCooldowns[id]=m.cooldown;
 if(m.effect==="storm"){const monster=state.monsters.find(x=>x.active);if(monster){monster.currentHealth=Math.max(1,monster.currentHealth-45);getCity(monster.territory).rival=clamp(getCity(monster.territory).rival-6)}}
 if(m.effect==="royal"){const k=state.kingdoms.sort((a,b)=>a.loyalty-b.loyalty)[0];k.loyalty=clamp(k.loyalty+15);k.economy=clamp(k.economy+10);k.relation=clamp(k.relation+8)}
 if(m.effect==="seas"){state.cities.filter(c=>c.coastal).forEach(c=>c.wealth=clamp(c.wealth+5));if(state.enterprises.length)state.enterprises[0].risk=0}
 if(m.effect==="wisdom"){const h=state.heroes.filter(h=>h.recruited).sort((a,b)=>a.wisdom-b.wisdom)[0];if(h){h.wisdom+=8;h.trainingXP.wisdom+=20}state.questBoost=true}
 if(m.effect==="war"){state.heroes.filter(h=>h.recruited).forEach(h=>{h.strength+=3;h.courage+=3});const k=state.kingdoms.find(k=>k.allies.length);if(k)k.army=clamp(k.army+10)}
 if(m.effect==="harvest"){state.food+=75;const c=state.cities.sort((a,b)=>a.happiness-b.happiness)[0];c.happiness=clamp(c.happiness+14);c.unrest=clamp(c.unrest-10)}
 if(m.effect==="heal"){state.heroes.filter(h=>h.recruited).forEach(h=>{h.health=100;h.energy=100})}
 if(m.effect==="fate"){state.fateBalance=clamp(state.fateBalance+10,0,120);state.demigods.forEach(d=>d.councilFavor+=2)}
 generateProceduralMyth(`${m.name} Changes Greece`,m.text);addLibraryEntry('myths',`${m.name} Changes Greece`,m.text);addLog(m.name,m.text);renderAll();saveGame(false);
}

function renderFate(){
 const balance=state.fateBalance;
 $("#fate-balance-label").textContent=balance>=70?"Balanced":balance>=40?"Strained":"Fate Unraveling";
 $("#fate-summary").innerHTML=`<p class="eyebrow">CLOTHO • LACHESIS • ATROPOS</p><h3 class="${balance<40?"fate-balance-danger":"fate-balance-good"}">${Math.round(balance)}% balance in the natural order</h3><div class="meter ${balance<40?"red":"green"}"><span style="width:${Math.min(100,balance)}%"></span></div><div class="stats"><div class="stat"><strong>${state.fateThreads.length}</strong><small>Threads Changed</small></div><div class="stat"><strong>${state.fateConsequences.length}</strong><small>Consequences</small></div><div class="stat"><strong>${state.demigods.filter(d=>d.fateProtection>0).length}</strong><small>Protected</small></div></div>`;
 const characters=[
  ...state.demigods.filter(d=>d.status!=="Immortal").map(d=>({id:d.id,type:"demigod",name:d.name,icon:d.icon,age:d.age,destiny:d.destiny,protected:d.fateProtection})),
  ...state.heroes.filter(h=>h.recruited).slice(0,6).map(h=>({id:h.id,type:"hero",name:h.name,icon:h.portrait,age:h.age||25,destiny:h.destiny,protected:h.fateProtection}))
 ];
 $("#fate-character-list").innerHTML=characters.length?characters.map(c=>`<article class="card fate-card ${c.protected>0?"protected":c.destiny==="Tragic"?"doomed":c.destiny==="Heroic"?"destined":""}"><div class="card-row"><div class="council-head"><span class="fate-icon">${c.icon}</span><div><h3>${c.name}</h3><p>${c.type} • Age ${c.age}</p></div></div><span class="tag gold">${c.destiny}</span></div><p>Fate protection: ${c.protected||0} years.</p><button class="card-button" data-fate-character="${c.type}|${c.id}">Alter This Thread</button></article>`).join(""):`<article class="card"><h3>No major threads yet</h3><p>Recruit heroes or create demigod descendants to shape destiny.</p></article>`;
 $$("[data-fate-character]").forEach(b=>b.addEventListener("click",()=>{const [type,id]=b.dataset.fateCharacter.split("|");openFateActions(type,id)}));
}

function openFateActions(type,id){
 const target=type==="demigod"?state.demigods.find(x=>x.id===id):getHero(id);
 showModal(`<p class="eyebrow">ALTER DESTINY</p><h2>🧵 ${target.name}</h2><p class="muted">Current destiny: ${target.destiny}. Changing fate can destabilize the natural order.</p><div class="fate-action-grid">${fateOptions.map(o=>`<button class="action-button fate-button" data-fate-action="${o.id}" ${state.favor<o.cost?"disabled":""}>${o.icon} ${o.name}<br><small>${o.cost} Favor • ${o.balance} balance</small></button>`).join("")}</div>`);
 $$("[data-fate-action]").forEach(b=>b.addEventListener("click",()=>resolveFateAction(target,b.dataset.fateAction)));
}

function resolveFateAction(target,id){
 const o=fateOptions.find(x=>x.id===id);if(!spend("favor",o.cost))return;
 state.fateBalance=clamp(state.fateBalance+o.balance,0,120);
 if(id==="greatness"){target.destiny="Heroic";target.reputation=(target.reputation||0)+12;if(target.fame!==undefined)target.fame+=12}
 if(id==="delay-death"){target.fateProtection=(target.fateProtection||0)+8;target.foreseenDeath=state.year+10}
 if(id==="reveal"){target.destiny=randomItem(["Heroic","Royal","Prophetic","Tragic"]);state.questBoost=true}
 if(id==="protect-line"){target.fateProtection=(target.fateProtection||0)+15;if(target.corruption!==undefined)target.corruption=clamp(target.corruption-8)}
 if(id==="cut-thread"){const tyrant=state.kingdoms.sort((a,b)=>a.loyalty-b.loyalty)[0];tyrant.ruler=`Regent of ${tyrant.name}`;tyrant.loyalty=clamp(tyrant.loyalty+10);generateProceduralMyth(`The Fates Remove a Tyrant`,`${target.name}'s thread becomes tied to the fall of a cruel ruler.`)}
 if(id==="restore"){state.titanWar=Math.max(0,state.titanWar-4);state.tartarusStability=clamp(state.tartarusStability+5)}
 state.fateThreads.unshift({target:target.name,action:o.name,year:state.year});addLog(`${o.name}: ${target.name}`,o.text);closeModal();renderAll();saveGame(false);
}

function renderAges(){
 const current=getCurrentAge();state.currentAgeId=current.id;
 $("#current-age-label").textContent=current.name;
 const span=current.endYear-current.startYear+1,progress=Math.min(100,Math.round((state.year-current.startYear)/span*100));
 $("#age-summary").innerHTML=`<p class="eyebrow">CURRENT ERA</p><h3>${current.icon} ${current.name}</h3><p>${current.text}</p><div class="meter"><span style="width:${progress}%"></span></div><div class="stats"><div class="stat"><strong>${state.year}</strong><small>Year</small></div><div class="stat"><strong>${progress}%</strong><small>Era Progress</small></div><div class="stat"><strong>${state.proceduralMyths.length}</strong><small>New Myths</small></div></div>`;
 $("#age-list").innerHTML=`<div class="age-timeline">${ageTemplates.map(a=>`<article class="age-stage ${a.id===current.id?"current":state.year>a.endYear?"complete":""}"><div class="card-row"><h3>${a.icon} ${a.name}</h3><span class="tag gold">Years ${a.startYear}-${a.endYear===9999?"∞":a.endYear}</span></div><p class="muted">${a.text}</p></article>`).join("")}</div><div class="section-heading subheading"><div><p class="eyebrow">GENERATED MYTHS</p><h2>Chronicle of Greece</h2></div></div>${state.proceduralMyths.slice(0,12).map(m=>`<article class="card myth-entry"><div class="card-row"><h3>${m.title}</h3><span class="pill">Year ${m.year}</span></div><p>${m.text}</p></article>`).join("")||'<article class="card"><h3>No new myths yet</h3><p>Miracles, bloodlines, wars, and Fate will generate unique legends.</p></article>'}`;
}

function getCurrentAge(){return ageTemplates.find(a=>state.year>=a.startYear&&state.year<=a.endYear)||ageTemplates[ageTemplates.length-1]}

function generateProceduralMyth(title,text){
 state.proceduralMyths.unshift({id:uid("myth"),title,text,year:state.year});
 state.proceduralMyths=state.proceduralMyths.slice(0,60);
}

function renderPantheon(){
 $("#custom-god-count").textContent=`${state.customGods.length} Created`;
 $("#pantheon-summary").innerHTML=`<p class="eyebrow">CREATE A DEITY</p><h3>Found new gods who gain followers, temples, miracles, and Council influence</h3><div class="pantheon-form"><label>Name<input id="new-god-name" maxlength="18" placeholder="Astraion"></label><label>Domain<select id="new-god-domain">${customGodDomains.map(d=>`<option>${d}</option>`).join("")}</select></label><label>Symbol<input id="new-god-symbol" maxlength="3" placeholder="🌟"></label><label>Sacred Animal<select id="new-god-animal">${sacredAnimals.map(d=>`<option>${d}</option>`).join("")}</select></label><label>Sacred Weapon<select id="new-god-weapon">${sacredWeapons.map(d=>`<option>${d}</option>`).join("")}</select></label><label>Personality<select id="new-god-personality"><option>Wise</option><option>Merciful</option><option>Ambitious</option><option>Unpredictable</option><option>Warlike</option><option>Protective</option></select></label></div><button id="create-custom-god" class="primary-button" ${state.prestige<80?"disabled":""}>Create Deity • 80 Prestige</button>`;
 $("#create-custom-god").addEventListener("click",createCustomGod);
 $("#custom-god-list").innerHTML=state.customGods.length?state.customGods.map(g=>`<article class="card custom-god-card"><div class="card-row"><div class="council-head"><span class="custom-god-icon">${g.icon}</span><div><h3>${g.name}</h3><p>God of ${g.domain} • ${g.personality}</p></div></div><span class="tag gold">${g.followers} Followers</span></div><p>Sacred animal: ${g.animal}. Sacred weapon: ${g.weapon}. Miracle: ${g.miracle}.</p><button class="card-button" data-custom-god="${g.id}">Promote Worship</button></article>`).join(""):`<article class="card"><h3>No custom gods yet</h3><p>Reach 80 Prestige to establish a new deity in your evolving pantheon.</p></article>`;
 $$("[data-custom-god]").forEach(b=>b.addEventListener("click",()=>promoteCustomGod(b.dataset.customGod)));
}

function createCustomGod(){
 const name=$("#new-god-name").value.trim(),domain=$("#new-god-domain").value,icon=$("#new-god-symbol").value.trim()||"🌟";
 if(!name){showToast("Enter a name for the deity.");return}
 if(state.customGods.some(g=>g.name.toLowerCase()===name.toLowerCase())){showToast("That god already exists.");return}
 if(!spend("prestige",80))return;
 const g={id:uid("god"),name,domain,icon,animal:$("#new-god-animal").value,weapon:$("#new-god-weapon").value,personality:$("#new-god-personality").value,miracle:`Blessing of ${domain}`,followers:75,temples:0,relationship:70};
 state.customGods.push(g);state.council.push({name:g.name,icon:g.icon,bias:g.domain.toLowerCase(),relationship:70,mood:"Newly Created",favorOwed:0});state.faith+=35;
 generateProceduralMyth(`${name}, God of ${domain}, Is Born`,`A new deity joins Olympus bearing the ${g.weapon} and the sacred sign of the ${g.animal}.`);addLog(`${name} Joins the Pantheon`,`The new god of ${domain} receives a Council seat.`);renderAll();saveGame(false);
}

function promoteCustomGod(id){
 const g=state.customGods.find(x=>x.id===id);if(!spend("gold",30))return;
 g.followers+=50;g.temples++;state.faith+=15;const c=randomItem(state.cities);c.player=clamp(c.player+5);addLog(`Temple of ${g.name} Founded`,`${c.name} begins worshipping the god of ${g.domain}.`);renderAll();saveGame(false);
}

function fateYearTurn(){
 [...state.heroes,...state.demigods].forEach(x=>{if(x.fateProtection>0)x.fateProtection--});
 if(state.fateBalance<50&&Math.random()<.4){
  const consequences=[
   "A prophecy is misunderstood and unrest spreads.",
   "A protected bloodline draws the attention of a Titan.",
   "A kingdom ruler dies earlier than expected.",
   "A monster survives a supposedly fatal wound.",
   "An Olympian becomes angry that destiny was altered."
  ];
  const text=randomItem(consequences);state.fateConsequences.unshift({text,year:state.year});state.titanWar+=3;state.tartarusStability=clamp(state.tartarusStability-3);addLog("Fate Strikes Back",text);
 }
 if(state.fateBalance>90)state.prestige+=4;
}

function miracleYearTurn(){Object.keys(state.miracleCooldowns).forEach(k=>state.miracleCooldowns[k]=Math.max(0,state.miracleCooldowns[k]-1))}

function worldSimulationTurn(){
 state.worldUnits.forEach(u=>{u.x=clamp(u.x+rand(-7,7),18,86);u.y=clamp(u.y+rand(-6,6),12,89)});
 if(Math.random()<.35){
  const hero=randomItem(state.heroes.filter(h=>h.recruited));
  if(hero)generateProceduralMyth(`${hero.name} Becomes Part of a New Legend`,`${hero.name}'s actions in ${hero.location} are retold by poets across Greece.`);
 }
 const current=getCurrentAge();
 if(current.id!==state.currentAgeId){state.currentAgeId=current.id;state.prestige+=30;state.faith+=25;generateProceduralMyth(`${current.name} Begins`,current.text);addLog(`${current.name} Begins`,current.text)}
}

function renderDemigodFamily(){
 const demigods=state.demigods.length,immortals=state.demigods.filter(d=>d.status==="Immortal").length,corrupted=state.demigods.filter(d=>d.corruption>=70).length;
 $("#demigod-count").textContent=`${demigods} Demigods`;
 $("#family-summary").innerHTML=`<p class="eyebrow">DIVINE DYNASTY</p><h3>${getGod().name}'s bloodline now spans ${demigods} demigods and ${immortals} immortals</h3><div class="stats"><div class="stat"><strong>${demigods}</strong><small>Demigods</small></div><div class="stat"><strong>${immortals}</strong><small>Ascended</small></div><div class="stat"><strong>${corrupted}</strong><small>Corrupted</small></div></div><div class="family-tree-board"><span class="family-person god">${getGod().symbol} ${getGod().name}</span>${state.demigods.slice(0,8).map(d=>`<span class="family-link">→</span><span class="family-person demigod">${d.icon} ${d.name}</span>`).join("")}</div>`;
 $("#mortal-relationship-list").innerHTML=state.mortalRelationships.map(m=>`<article class="card mortal-card"><div class="card-row"><div class="council-head"><span class="portrait">${m.icon}</span><div><h3>${m.name}</h3><p>${m.role} of ${m.city} • ${m.personality}</p></div></div><span class="tag gold">${m.status}</span></div><div class="genetics-grid"><div class="gene-stat"><strong>${m.strength}</strong><small>Strength</small></div><div class="gene-stat"><strong>${m.wisdom}</strong><small>Wisdom</small></div><div class="gene-stat"><strong>${m.courage}</strong><small>Courage</small></div><div class="gene-stat"><strong>${m.charisma}</strong><small>Charisma</small></div></div><div class="meter"><span style="width:${m.relationship}%"></span></div><p>Relationship ${m.relationship}/100 • Children ${m.children.length}</p><button class="card-button" data-mortal="${m.id}">Interact with ${m.name}</button></article>`).join("");
 $$("[data-mortal]").forEach(b=>b.addEventListener("click",()=>openMortalRelationship(b.dataset.mortal)));
 $("#demigod-list").innerHTML=state.demigods.length?state.demigods.map(d=>renderDemigodCard(d)).join(""):`<article class="card"><h3>No demigod children yet</h3><p>Build relationships with exceptional mortals to begin a divine bloodline.</p></article>`;
 $$("[data-demigod]").forEach(b=>b.addEventListener("click",()=>openDemigodDetail(b.dataset.demigod)));
}

function renderDemigodCard(d){
 const stage=getLifeStage(d.age),cls=d.status==="Immortal"?"immortal":d.corruption>=70?"corrupted":"";
 const badge=d.status==="Immortal"?"divine-stage":d.corruption>=70?"corruption-stage":"life-stage";
 return `<article class="card demigod-card ${cls}"><div class="card-row"><div class="council-head"><span class="portrait">${d.icon}</span><div><h3>${d.name}</h3><p>Child of ${getGod().name} and ${d.mortalParent}</p></div></div><span class="tag ${badge}">${d.status==="Immortal"?"God of "+d.domain:stage}</span></div><div class="genetics-grid"><div class="gene-stat"><strong>${d.strength}</strong><small>Strength</small></div><div class="gene-stat"><strong>${d.wisdom}</strong><small>Wisdom</small></div><div class="gene-stat"><strong>${d.courage}</strong><small>Courage</small></div><div class="gene-stat"><strong>${d.charisma}</strong><small>Charisma</small></div><div class="gene-stat"><strong>${d.leadership}</strong><small>Leadership</small></div><div class="gene-stat"><strong>${d.divineAffinity}</strong><small>Divinity</small></div><div class="gene-stat"><strong>${d.fame}</strong><small>Fame</small></div><div class="gene-stat"><strong>${d.corruption}</strong><small>Corruption</small></div></div><div class="meter apotheosis-meter"><span style="width:${getApotheosisProgress(d)}%"></span></div><p>Age ${d.age} • Education: ${d.education||"Not chosen"} • Deeds: ${d.deeds.length} • Apotheosis ${getApotheosisProgress(d)}%</p><button class="card-button" data-demigod="${d.id}">Guide ${d.name}</button></article>`;
}

function openMortalRelationship(id){
 const m=state.mortalRelationships.find(x=>x.id===id);
 showModal(`<p class="eyebrow">MORTAL RELATIONSHIP</p><h2>${m.icon} ${m.name}</h2><p class="muted">${m.role} of ${m.city}. ${m.personality}. Relationship ${m.relationship}/100.</p><div class="action-grid"><button class="action-button" data-mortal-action="bless">✨ Grant Blessing<br><small>10 Favor</small></button><button class="action-button" data-mortal-action="visit">🏛️ Visit in ${m.city}<br><small>10 Gold</small></button><button class="action-button" data-mortal-action="patron">🌟 Become Patron<br><small>15 Prestige</small></button><button class="action-button" data-mortal-action="romance">❤️ Pursue Divine Romance</button><button class="action-button" data-mortal-action="child" ${m.relationship>=75?"":"disabled"}>👶 Create Divine Heir</button><button class="action-button" data-mortal-action="distance">🌙 Keep Distance</button></div>`);
 $$("[data-mortal-action]").forEach(b=>b.addEventListener("click",()=>resolveMortalRelationship(m,b.dataset.mortalAction)));
}

function resolveMortalRelationship(m,action){
 if(action==="bless"){if(!spend("favor",10))return;m.relationship=clamp(m.relationship+10);m.status="Blessed";getCity(m.city).player=clamp(getCity(m.city).player+3)}
 if(action==="visit"){if(!spend("gold",10))return;m.relationship=clamp(m.relationship+8);m.status=m.relationship>=60?"Trusted Companion":"Friend"}
 if(action==="patron"){if(!spend("prestige",15))return;m.relationship=clamp(m.relationship+15);m.status="Divine Favorite";state.faith+=8}
 if(action==="romance"){const success=Math.random()*100<m.charisma*.45+m.relationship*.55;if(success){m.relationship=clamp(m.relationship+20);m.status="Divine Consort";addLog(`${getGod().name} and ${m.name} Form a Divine Bond`,`${m.city} celebrates the legendary union.`)}else{m.relationship=clamp(m.relationship-8);addLog(`${m.name} Rejects Divine Courtship`,"The mortal refuses to be treated as a pawn of Olympus.")}}
 if(action==="child"){createDemigod(m);closeModal();renderAll();saveGame(false);return}
 if(action==="distance"){m.relationship=clamp(m.relationship-10);m.status="Distant"}
 closeModal();renderAll();saveGame(false);
}

function createDemigod(m){
 const divineBase={strength:70,wisdom:70,courage:75,charisma:72,beauty:78,leadership:72,divineAffinity:88};
 const inherit=(a,b)=>clamp(Math.round((a+b)/2)+Math.floor(Math.random()*17)-8);
 const name=randomItem(demigodNames),gender=Math.random()<.5?"Son":"Daughter";
 const d={
  id:uid("demigod"),name,icon:gender==="Son"?"🧑":"👩",gender,mortalParent:m.name,city:m.city,age:0,status:"Demigod Child",
  strength:inherit(divineBase.strength,m.strength),wisdom:inherit(divineBase.wisdom,m.wisdom),courage:inherit(divineBase.courage,m.courage),
  charisma:inherit(divineBase.charisma,m.charisma),beauty:inherit(divineBase.beauty,m.beauty),leadership:inherit(divineBase.leadership,m.leadership),
  divineAffinity:inherit(divineBase.divineAffinity,m.divineAffinity),education:null,fame:0,glory:0,corruption:0,deeds:[],traits:[randomItem(["Divine-Touched","Bold","Curious","Radiant","Restless","Prophetic"])],
  reputation:0,heroId:null,domain:null,followers:0,councilFavor:0,upbringing:"Mortal Court"
 };
 state.demigods.push(d);m.children.push(d.id);
 syncDemigodFamilyAwareness();
 buildDivineHouses();
 const activeHouse=state.divineRelationships?.houses?.find(h=>h.founders?.includes(getGod().name)&&state.divineFamily.spouse&&h.founders?.includes(state.divineFamily.spouse.name));
 if(activeHouse){
  d.divineHouse=activeHouse.name;
  if(!activeHouse.demigods.includes(d.name))activeHouse.demigods.push(d.name);
 }
state.divineFamilyHistory.unshift({year:state.year,text:`${name}, ${gender.toLowerCase()} of ${getGod().name} and ${m.name}, is born in ${m.city}.`});state.prestige+=12;
 addLog(`A Demigod Is Born: ${name}`,`${gender} of ${getGod().name} and ${m.name}.`);
}

function openDemigodDetail(id){
 const d=state.demigods.find(x=>x.id===id),stage=getLifeStage(d.age);
 showModal(`<p class="eyebrow">DIVINE DESCENDANT</p><h2>${d.icon} ${d.name}</h2><p class="muted">Age ${d.age} • ${stage} • ${d.status}. Traits: ${d.traits.join(", ")}.</p><div class="education-grid">${educationPaths.map(e=>`<button class="education-option" data-education="${e.id}" ${d.age<7||d.education?"disabled":""}><strong>${e.icon} ${e.name}</strong><small>${e.text}</small></button>`).join("")}</div><div class="deed-grid">${demigodDeeds.map(x=>`<button class="deed-option" data-deed="${x.id}" ${d.age<x.requiredAge||d.status==="Immortal"?"disabled":""}><strong>${x.icon} ${x.name}</strong><small>Age ${x.requiredAge}+ • ${x.text}</small></button>`).join("")}</div><div class="action-grid"><button class="action-button" id="guide-mercy">🕊️ Teach Mercy</button><button class="action-button" id="guide-power">🔥 Encourage Power</button><button class="action-button" id="train-demigod">⚔️ Personal Training<br><small>15 Favor</small></button><button class="action-button" id="apotheosis-vote" ${getApotheosisProgress(d)>=80&&d.status!=="Immortal"?"":"disabled"}>🌟 Request Apotheosis Vote</button></div>`);
 $$("[data-education]").forEach(b=>b.addEventListener("click",()=>chooseDemigodEducation(d,b.dataset.education)));
 $$("[data-deed]").forEach(b=>b.addEventListener("click",()=>attemptDemigodDeed(d,b.dataset.deed)));
 $("#guide-mercy").addEventListener("click",()=>{d.corruption=clamp(d.corruption-12);d.charisma+=2;d.traits.push("Merciful");closeModal();renderAll();saveGame(false)});
 $("#guide-power").addEventListener("click",()=>{d.corruption=clamp(d.corruption+10);d.strength+=4;d.courage+=3;d.traits.push("Power-Hungry");closeModal();renderAll();saveGame(false)});
 $("#train-demigod").addEventListener("click",()=>{if(!spend("favor",15))return;d.strength+=3;d.wisdom+=3;d.courage+=3;d.divineAffinity+=2;d.reputation+=3;closeModal();renderAll();saveGame(false)});
 $("#apotheosis-vote").addEventListener("click",()=>openApotheosisVote(d));
}

function chooseDemigodEducation(d,id){
 const e=educationPaths.find(x=>x.id===id);d.education=e.name;d.city=e.city;d[e.focus]=clamp(d[e.focus]+12);d.traits.push(e.name.split(" ")[0]+" Trained");d.reputation+=5;
 addLog(`${d.name} Begins Education`,`${e.name} shapes the young demigod.`);closeModal();renderAll();saveGame(false);
}

function attemptDemigodDeed(d,id){
 const deed=demigodDeeds.find(x=>x.id===id);
 let power=(d.strength+d.wisdom+d.courage+d.leadership+d.divineAffinity)/5+d.reputation*.6;
 const success=Math.random()>(deed.risk-power/300);
 if(success){
  d.fame+=deed.fame;d.glory+=deed.glory;d.reputation+=10;d.deeds.push(deed.name);d.traits.push(deed.name==="Slay a Monster"?"Monster Slayer":deed.name==="Seal a Titan"?"Titan Binder":"Legendary Deed");
  state.prestige+=Math.round(deed.glory/2);state.completedLegends++;addLog(`${d.name}: ${deed.name}`,`The demigod succeeds and gains ${deed.fame} fame.`);
  if(deed.id==="slay-monster"){const m=state.monsters.find(m=>m.active);if(m){m.active=false;m.currentHealth=0}}
  if(deed.id==="seal-titan"){const t=state.titans.find(t=>["Escaped","Targeted"].includes(t.status));if(t){t.status="Resealed";t.seal=85;state.tartarusStability=clamp(state.tartarusStability+10)}}
  if(deed.id==="rule-kingdom"){const k=state.kingdoms.find(k=>k.name===d.city)||randomItem(state.kingdoms);k.ruler=`${d.name}, Demigod Ruler`;k.loyalty=clamp(k.loyalty+18)}
 }else{
  d.corruption=clamp(d.corruption+rand(4,14));d.reputation=Math.max(0,d.reputation-5);addLog(`${d.name} Fails: ${deed.name}`,"The defeat leaves a lasting mark.");
 }
 closeModal();renderAll();saveGame(false);
}

function getLifeStage(age){
 if(age<2)return"Infant";if(age<7)return"Child";if(age<13)return"Young Child";if(age<18)return"Teenager";if(age<30)return"Young Adult";if(age<55)return"Adult";return"Elder";
}

function getApotheosisProgress(d){
 return Math.min(100,Math.round(d.fame*.28+d.glory*.25+d.divineAffinity*.22+d.deeds.length*5+d.councilFavor*.1-d.corruption*.15));
}

function openApotheosisVote(d){
 const issue={title:`Grant Immortality to ${d.name}`,description:`The Council must decide whether ${d.name} has earned a divine domain and eternal life.`};
 const votes=state.council.map(g=>{
  let score=g.relationship-45+d.fame*.12+d.glory*.1+d.divineAffinity*.1-d.corruption*.2;
  if(["mercy","progress","wisdom","life"].includes(g.bias))score+=6;
  if(["order","law","balance"].includes(g.bias)&&d.corruption>40)score-=15;
  return{name:g.name,icon:g.icon,vote:score>25?"YES":score<8?"NO":"UNDECIDED"};
 });
 state.pendingVote={issue,titanId:null,votes,apotheosisDemigodId:d.id};
 showModal(`<p class="eyebrow">APOTHEOSIS COUNCIL</p><h2>🌟 ${issue.title}</h2><p class="muted">${issue.description}</p><div class="vote-board">${votes.map(v=>`<div class="vote-member ${v.vote.toLowerCase()}">${v.icon} ${v.name}<br><strong>${v.vote}</strong></div>`).join("")}</div><div class="choice-row"><button id="finalize-apotheosis" class="choice-button good">Support Ascension</button><button id="oppose-apotheosis" class="choice-button bad">Oppose Ascension</button></div>`);
 $("#finalize-apotheosis").addEventListener("click",()=>finalizeApotheosisVote(true));
 $("#oppose-apotheosis").addEventListener("click",()=>finalizeApotheosisVote(false));
}

function finalizeApotheosisVote(playerSupport){
 const p=state.pendingVote,d=state.demigods.find(x=>x.id===p.apotheosisDemigodId);let yes=playerSupport?1:0,no=playerSupport?0:1;
 p.votes.forEach(v=>{if(v.name===getGod().name)return;if(v.vote==="YES")yes++;else if(v.vote==="NO")no++;else{const g=state.council.find(x=>x.name===v.name);if(Math.random()*100<g.relationship+d.fame*.2)yes++;else no++}});
 const passed=yes>no;
 if(passed)ascendDemigod(d);else{d.councilFavor=Math.max(0,d.councilFavor-10);d.corruption=clamp(d.corruption+5);addLog(`${d.name}'s Apotheosis Is Rejected`,`${yes} voted YES and ${no} voted NO.`)}
 state.apotheosisVotes.unshift({demigod:d.name,yes,no,passed,year:state.year});state.councilHistory.unshift({title:`Apotheosis of ${d.name}`,yes,no,result:passed?"PASSED":"FAILED",year:state.year});state.pendingVote=null;closeModal();renderAll();saveGame(false);showToast(passed?`${d.name} has become a god!`:"Apotheosis was rejected.");
}

function ascendDemigod(d){
 d.status="Immortal";d.domain=randomItem(divineDomains);d.followers=100+d.fame*3;d.icon="🌟";d.corruption=Math.max(0,d.corruption-20);d.councilFavor=100;
 state.ascendedGods.push({id:d.id,name:d.name,icon:"🌟",domain:d.domain,followers:d.followers,relationship:80});
 state.council.push({name:d.name,icon:"🌟",bias:d.domain.toLowerCase(),relationship:80,mood:"Newly Ascended",favorOwed:1});
 state.faith+=50;state.prestige+=60;state.divineFamilyHistory.unshift({year:state.year,text:`${d.name} ascends as the god of ${d.domain}.`});
 addLog(`${d.name} Ascends to Godhood`,`${d.name} becomes the immortal deity of ${d.domain} and joins the Olympus Council.`);generateProceduralMyth(`The Apotheosis of ${d.name}`,`${d.name} rises from demigod hero to immortal deity of ${d.domain}.`);
}

function divineFamilyYearTurn(){
 state.demigods.forEach(d=>{
  if(d.status==="Immortal"){d.followers+=rand(5,20);state.faith+=Math.floor(d.followers/40);return}
  d.age++;
  if(d.age===7&&!d.education)addLog(`${d.name} Is Ready for Education`,"Choose a school from the House of Olympus.");
  if(d.age===16){d.status="Young Demigod";d.reputation+=5;addLog(`${d.name} Comes of Age`,"The demigod can now begin heroic deeds.")}
  if(d.age>=16&&d.heroId===null){
   const hero={id:`demi-${d.id}`,name:d.name,portrait:d.icon,title:`Demigod ${d.gender}`,cost:0,strength:d.strength,wisdom:d.wisdom,courage:d.courage,leadership:d.leadership,ability:"Divine Blood",location:d.city,recruited:true,level:1,xp:0,health:100,energy:100,status:"Awaiting a quest",age:d.age,equipment:[],traits:[...d.traits],skillPoints:1,className:d.education?.includes("Spartan")?"Champion":d.education?.includes("Academy")?"Scholar":"Demigod",learnedSkills:[],abilities:["Divine Blood"],trainingXP:{combat:0,leadership:0,diplomacy:0,wisdom:0,exploration:0,crafting:0,divine:30},reputation:d.reputation,titles:[],trainingStatus:null,skills:{power:false,tactics:false,leadership:false}};
   state.heroes.push(hero);d.heroId=hero.id;addLog(`${d.name} Becomes a Hero`,"The demigod joins the roster of playable heroes.");
  }
  if(d.corruption>=70&&d.status!=="Corrupted Demigod"){d.status="Corrupted Demigod";d.traits.push("Dark Champion");state.titanWar+=8;addLog(`${d.name} Falls to Corruption`,"The divine child may become a tyrant or Titan servant.")}
  if(d.corruption>=90&&Math.random()<.25){const k=randomItem(state.kingdoms);k.ruler=`${d.name}, Dark Demigod`;k.atWarWith=[...new Set([...k.atWarWith,randomItem(state.kingdoms.filter(x=>x.name!==k.name)).name])];addLog(`${d.name} Seizes ${k.name}`,"A corrupted branch of the divine family claims mortal power.")}
  if(d.age>75&&d.divineAffinity<75&&Math.random()<.12){d.status="Mortal Death";addLog(`${d.name} Dies a Mortal Death`,"The demigod enters legend but does not ascend.")}
 });
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
 if(id==="legend-maker"){const done=state.quests.filter(q=>q.status==="Completed").length+state.mythLog.length+state.demigods.reduce((s,d)=>s+d.deeds.length,0);const arts=state.artifacts.filter(a=>a.found).length;return Math.min(100,Math.round(done/10*55+arts/6*45))}
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
 if(p.apotheosisDemigodId){finalizeApotheosisVote(true);return}
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
 $("#audience-count").textContent=`${state.cityEvents.length} Decisions`;
 $("#audience-list").innerHTML=state.cityEvents.length?state.cityEvents.map(e=>`<article class="card city-event-card"><div class="card-row"><span class="portrait">${e.icon}</span><span class="tag gold">${e.city}</span></div><h3>${e.title}</h3><div class="choice-row"><button class="choice-button good" data-city-event-good="${e.id}">${e.good}</button><button class="choice-button bad" data-city-event-bad="${e.id}">${e.bad}</button></div></article>`).join(""):`<article class="card"><h3>The throne room is quiet</h3><p>City events will appear as years pass.</p></article>`;
 $$("[data-city-event-good]").forEach(b=>b.addEventListener("click",()=>resolveCityEvent(b.dataset.cityEventGood,true)));
 $$("[data-city-event-bad]").forEach(b=>b.addEventListener("click",()=>resolveCityEvent(b.dataset.cityEventBad,false)));
}
function resolveCityEvent(id,good){
 const i=state.cityEvents.findIndex(e=>e.id===id);if(i<0)return;const e=state.cityEvents[i],c=getCity(e.city);
 if(e.effect==="wisdom"){if(good){if(!spend("gold",25))return;c.culture=clamp(c.culture+14);state.prestige+=6}else c.culture=clamp(c.culture-4)}
 if(e.effect==="titan"){if(good){state.tartarusStability=clamp(state.tartarusStability+5);state.prestige+=4}else{c.happiness=clamp(c.happiness-8);state.titans.filter(t=>t.sealCity===c.name).forEach(t=>t.influence=Math.max(0,t.influence-15))}}
 if(e.effect==="gold"){const amount=rand(25,70);if(good){state.gold+=Math.round(amount/2);c.happiness=clamp(c.happiness+8)}else{state.gold+=amount;c.happiness=clamp(c.happiness-5)}recordGold(good?Math.round(amount/2):amount,e.title)}
 if(e.effect==="loyalty"){c.happiness=clamp(c.happiness+(good?10:-6));state.kingdoms.find(k=>k.name===c.name).loyalty=clamp(state.kingdoms.find(k=>k.name===c.name).loyalty+(good?10:-8))}
 if(e.effect==="plague"){if(good){if(!spend("gold",30))return;c.population=Math.max(100,c.population-5);c.happiness=clamp(c.happiness+5)}else{c.population=Math.max(100,c.population-25);c.unrest=clamp(c.unrest+12)}}
 if(e.effect==="hero"){const h=state.heroes.find(h=>h.location===c.name&&h.recruited);if(h){if(good){if(!spend("gold",20))return;h.reputation+=12;c.happiness=clamp(c.happiness+8)}else h.trainingXP.combat+=20}}
 state.cityEvents.splice(i,1);addLog(`${e.title} Resolved`,`${good?e.good:e.bad} was chosen in ${e.city}.`);renderAll();saveGame(false);
}
function renderTreasury(){
 $("#treasury-panel").innerHTML=`<div class="resource-grid">${[["🪙","Gold",state.gold],["🌾","Food",state.food],["🪨","Stone",state.stone],["🪵","Wood",state.wood],["🥉","Bronze",state.bronze],["🏛️","Prestige",state.prestige],["✨","Faith",state.faith],["⚡","Favor",state.favor]].map(r=>`<article class="card resource-card"><span class="resource-icon">${r[0]}</span><strong>${Math.floor(r[2])}</strong><small>${r[1]}</small></article>`).join("")}</div>`;
}

function confirmAdvanceYear(){
 const critical=state.alerts.filter(a=>a.status==="active"&&a.priority==="critical");
 if(critical.length){showToast("Resolve all Mythic Crisis alerts before advancing the year.");openAlertInteraction(critical[0].id,true);return}
 showModal(`<p class="eyebrow">ADVANCE TIME</p><h2>Advance to Year ${state.year+1}?</h2><p class="muted">Living characters will pursue goals, events may become urgent, and unresolved alerts can expire.</p><div class="choice-row"><button id="confirm-year" class="choice-button good">Advance Year</button><button id="cancel-year" class="choice-button bad">Cancel</button></div>`);$("#confirm-year").addEventListener("click",advanceYear);$("#cancel-year").addEventListener("click",closeModal)
}
function advanceYear(){
 state.year++;
 let monsterReports=0;
 const income=calculateYearlyIncome();state.gold+=income.total;recordGold(income.total,"Yearly income");expireAlerts();resolveEnterprises();resolveFleetYear();wonderYearTurn();resolveTrainingYear();cityYearTurn();kingdomYearTurn();civilizationYearTurn();autonomousHeroYearTurn();bloodlineYearTurn();divineFamilyYearTurn();divinePoliticsYearTurn();titanCouncilYearTurn();avatarYearTurn();livingOlympusYearTurn();underworldYearTurn();livingAIYearTurn();adventureYearTurn();dynastyYearTurn();livingCitizenYearTurn();templeYearTurn();livingWarYearTurn();creatureEcosystemYearTurn();livingConversationYearTurn();livingWorldStoryYearTurn();autonomousImmortalRelationshipYearTurn();pantheonGenerationsYearTurn();stage3JealousyYearTurn();livingChronicleYearTurn();stage6YearTurn();stage7YearTurn();divineFamilyStage2YearTurn();fateYearTurn();miracleYearTurn();worldSimulationTurn();
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
 generateWorldAlerts();
 addLog(`Year ${state.year} Begins`,`${monsterReports} monsters acted. ${state.aiDecisions.filter(d=>d.year===state.year).length} independent character decisions occurred. ${state.alerts.length} active alerts require attention.`);
 closeModal();renderAll();saveGame(false);showToast(`Year ${state.year} has begun.`);
 setTimeout(showNextInterrupt,180);
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
 if(city.unrest>65)createAlert({priority:"critical",category:"monsters",icon:m.icon,title:`${m.name} Devastates ${city.name}`,description:`${m.ability} has driven unrest to ${Math.round(city.unrest)}%.`,location:city.name,targetId:m.id,years:1});
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
    createAlert({priority:"critical",category:"titans",icon:t.icon,title:`${t.name} Has Escaped Tartarus`,description:`The Titan is leading an uprising from ${t.sealCity}.`,location:t.sealCity,targetId:t.name,years:1});
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
$("#notification-bell").addEventListener("click",()=>activateView("alerts-view"));
$("#modal-close").addEventListener("click",closeModal);
$("#modal").addEventListener("click",e=>{if(e.target.id==="modal")closeModal()});
$$(".nav-button").forEach(b=>b.addEventListener("click",()=>switchView(b.dataset.view)));
$$(".map-filter").forEach(b=>b.addEventListener("click",()=>{currentMapFilter=b.dataset.mapFilter;$$(".map-filter").forEach(x=>x.classList.toggle("active",x===b));renderMapMarkers()}));
$("#reset-button").addEventListener("click",()=>{if(!confirm("Delete your saved game?"))return;localStorage.removeItem(SAVE_KEY);state=null;selectedGodId=null;$("#game-screen").classList.remove("active");$("#start-screen").classList.add("active");$("#continue-button").classList.add("hidden");$("#begin-button").disabled=true;$("#begin-button").textContent="Select a God";renderGodSelection()});
renderGodSelection();
