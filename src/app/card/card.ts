export class Skill {
  skillId: string;
  name: string;
  description: string;
  triggerTypes: number;
  atkAds: number;
  defAds: number;
  agiAds: number;
  costAds: number;
  goldAds: number;
  turnAds: number;
  source: number;
  destination: number;
  action: string;
  condition: string;

  constructor() {
    this.skillId = this.generateGuid();
    this.name = "New Skill";
    this.description = "Describe your skill here";
    this.triggerTypes = 0;
    this.atkAds = 0;
    this.defAds = 0;
    this.agiAds = 0;
    this.costAds = 0;
    this.goldAds = 0;
    this.turnAds = 0;
    this.source = 0;
    this.destination = 0;
    this.action = "Draw";
    this.condition = "True";
  }

  generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}

export class Card {
  cardId: string;
  cardType: string;
  name: string;
  imageUrl: string;
  description: string;
  isRealeaseReady: boolean;
  voiceLine: string;
  job: string;
  race: string;
  attackType: string;
  intent: string;
  gender: string;
  animationType: string;
  cost: number;
  atk: number;
  def: number;
  agility: number;
  skills: Skill[];
  constructor(cardId: string, cardType: string, name: string, imageUrl: string, description: string, isRealeaseReady: boolean, voiceLine: string, job: string, race: string, attackType: string, intent: string, gender: string, animationType: string, cost: number, atk: number, def: number, agility: number, skills: Skill[]) {
      this.cardId = cardId;
      this.cardType = cardType;
      this.name = name;
      this.imageUrl = imageUrl;
      this.description = description;
      this.isRealeaseReady = isRealeaseReady;
      this.voiceLine = voiceLine;
      this.job = job;
      this.race = race;
      this.attackType = attackType;
      this.intent = intent;
      this.gender = gender;
      this.animationType = animationType;
      this.cost = cost;
      this.atk = atk;
      this.def = def;
      this.agility = agility;
      this.skills = skills;
  }
}

// Example instantiation
// const exampleSkillDetails = new SkillDetails(1, 2, 4, 5, 7, 9, 2, 1, "Action1", "True");
// const exampleSkill = new Skill("b73fd31e-d733-4477-8c58-2c5e04421de4", "New Skill xXx", "New Skill Description", exampleSkillDetails, 1);
// const exampleCard = new Card("49234c8d-c7e0-4cdc-b83e-18085edc546b", "Minion", "Timo", "https://cdn.discordapp.com/attachments/1199324977544052786/1199325109161308252/fira.png", "Some thing about timo", true, "0", "None", "Human", "F_EXPLOSION_1", "AffinityKill", "F", "E_CLOUDS_1", 1, 2, 3, 4, [exampleSkill]);
