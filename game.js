const SAVE_KEY="ageOfOlympusSaveV100";

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
 ensureLivingCityData();ensureV100Data();renderWorld();renderCityDevelopment();renderTraining();renderOlympus();renderFate();renderAges();renderPantheon();renderDivineFamily();renderKingdoms();renderEconomy();renderArtifacts();renderLegacy();renderTitans();renderCouncil();renderPowersPlaceholder();renderHeroes();renderMonsters();renderQuests();renderThrone();renderTreasury();renderLog();
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
 $("#map-markers").insertAdjacentHTML("beforeend",state.worldUnits.map(u=>`<div class="world-unit ${u.type}" style="left:${u.x}%;top:${u.y}%" title="${u.label}">${u.icon}</div>`).join(""));
 $$("[data-map-type]").forEach(b=>b.addEventListener("click",()=>selectMapItem(b.dataset.mapType,b.dataset.mapId)));
}
function selectMapItem(type,id){
 const panel=$("#selected-map-panel");panel.className="selected-map-panel";
 if(type==="city"){const c=state.cities.find(x=>x.id===id);panel.innerHTML=`<div class="card-row"><div><p class="eyebrow">CITY</p><h2>${c.symbol} ${c.name}</h2></div><span class="pill">${c.player>c.rival?"Your influence":"Rival influence"}</span></div><p class="muted">${c.trait}</p><div class="stats"><div class="stat"><strong>${c.population}</strong><small>Population</small></div><div class="stat"><strong>${c.buildings.length}</strong><small>Buildings</small></div><div class="stat"><strong>${Math.round(c.unrest)}%</strong><small>Unrest</small></div></div><button class="card-button" id="open-city-build">Develop City</button>`;$("#open-city-build").addEventListener("click",()=>openCityBuild(c.id))}
 if(type==="hero"){const h=getHero(id);panel.innerHTML=`<p class="eyebrow">HERO</p><h2>${h.portrait} ${h.name}</h2><p class="muted">${h.title}. Level ${h.level}. ${h.location}. ${h.status}.</p><button class="card-button" id="open-hero-detail">Manage Hero</button>`;$("#open-hero-detail").addEventListener("click",()=>openHeroDetail(h.id))}
 if(type==="monster"){const m=state.monsters.find(x=>x.id===id);panel.innerHTML=`<p class="eyebrow">ROAMING MONSTER</p><h2>${m.icon} ${m.name}</h2><p class="muted">${m.objective}. Threatening ${m.territory}. Phase ${m.phase}/3.</p><div class="meter orange"><span style="width:${m.currentHealth/m.health*100}%"></span></div><button class="card-button" id="fight-map-monster" ${state.heroes.some(h=>h.recruited)?"":"disabled"}>Begin Boss Battle</button>`;$("#fight-map-monster").addEventListener("click",()=>chooseHeroForBattle(m.id))}
 if(type==="event"){const e=state.mapEvents.find(x=>x.id===id);panel.innerHTML=`<p class="eyebrow">WORLD EVENT</p><h2>${e.icon} ${e.title}</h2><p class="muted">${e.text}</p><button class="card-button" id="ack-event">Acknowledge</button>`;$("#ack-event").addEventListener("click",()=>{state.mapEvents=state.mapEvents.filter(x=>x.id!==e.id);state.faith+=5;addLog(e.title,e.text);renderAll()})}
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
 generateProceduralMyth(`${m.name} Changes Greece`,m.text);addLog(m.name,m.text);renderAll();saveGame(false);
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

function renderDivineFamily(){
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
 state.demigods.push(d);m.children.push(d.id);state.divineFamilyHistory.unshift({year:state.year,text:`${name}, ${gender.toLowerCase()} of ${getGod().name} and ${m.name}, is born in ${m.city}.`});state.prestige+=12;
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

function confirmAdvanceYear(){showModal(`<p class="eyebrow">ADVANCE TIME</p><h2>Advance to Year ${state.year+1}?</h2><p class="muted">Monsters will roam, rival gods will act, cities will produce resources, and myths may unfold.</p><div class="choice-row"><button id="confirm-year" class="choice-button good">Advance Year</button><button id="cancel-year" class="choice-button bad">Cancel</button></div>`);$("#confirm-year").addEventListener("click",advanceYear);$("#cancel-year").addEventListener("click",closeModal)}
function advanceYear(){
 state.year++;
 let monsterReports=0;
 const income=calculateYearlyIncome();state.gold+=income.total;recordGold(income.total,"Yearly income");resolveEnterprises();resolveTrainingYear();cityYearTurn();kingdomYearTurn();bloodlineYearTurn();divineFamilyYearTurn();fateYearTurn();miracleYearTurn();worldSimulationTurn();
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
 addLog(`Year ${state.year} Begins`,`${monsterReports} monsters acted. ${getCurrentAge().name} continues. Tartarus stability is ${Math.round(state.tartarusStability)}%. Fate balance is ${Math.round(state.fateBalance)}%.`);
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
