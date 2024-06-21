import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  VoiceLines = Array<string>();
  AttackTypes = Array<string>();
  AnimationTypes = Array<string>();
  Genders = Array<string>();
  Jobs = Array<string>();
  Races = Array<string>();
  Intent = Array<string>();
  CardTypes = Array<string>();

  constructor() {

    this.VoiceLines.push("0");
    this.VoiceLines.push("1");
    this.VoiceLines.push("2");
    this.VoiceLines.push("3");
    this.VoiceLines.push("4");
    this.VoiceLines.push("5");
    this.VoiceLines.push("6");
    this.VoiceLines.push("7");
    this.VoiceLines.push("8");
    this.VoiceLines.push("9");

    this.AttackTypes.push("F_EXPLOSION_1");
    this.AttackTypes.push("F_EXPLOSION_CLOUDS_1");
    this.AttackTypes.push("F_FIRE_VORTEXT_1");
    this.AttackTypes.push("F_HEARTH_1");
    this.AttackTypes.push("F_ICE_1");
    this.AttackTypes.push("F_LIGHT_1");
    this.AttackTypes.push("F_LIGHTNING_1");
    this.AttackTypes.push("F_NEUTRAL_1");
    this.AttackTypes.push("F_NEUTRAL_2");
    this.AttackTypes.push("F_SWORD_1");
    this.AttackTypes.push("F_TEXT_SLASH_1");
    this.AttackTypes.push("F_WATER_1");

    this.AnimationTypes.push("E_CLOUDS_1");
    this.AnimationTypes.push("E_EXPLOSION_1");
    this.AnimationTypes.push("E_EXPLOSION_COLOR_1");
    this.AnimationTypes.push("E_FIRE_CIRCLE_1");
    this.AnimationTypes.push("E_GHOST_1");
    this.AnimationTypes.push("E_FIRE_SHIELD_1");
    this.AnimationTypes.push("E_LIGHT_1");
    this.AnimationTypes.push("E_LIGHT_2");
    this.AnimationTypes.push("E_LIGHTING_1");
    this.AnimationTypes.push("E_LOVE_1");
    this.AnimationTypes.push("E_SPARK_1");
    this.AnimationTypes.push("E_WATER_1");

    this.Genders.push("F");
    this.Genders.push("M");
    this.Genders.push("B");

    this.Jobs.push("None");
    this.Jobs.push("Knight");
    this.Jobs.push("Mage");
    // this.Jobs.push("Lancer");
    this.Jobs.push("Archer");
    this.Jobs.push("Arch-Mage");

    this.Races.push("Human");
    this.Races.push("Elf");
    this.Races.push("Ore");
    this.Races.push("Undead");
    this.Races.push("Elemental");
    this.Races.push("Reptile");
    this.Races.push("Demi-Human");
    this.Races.push("Beast");
    this.Races.push("Dwarf");
    this.Races.push("Dragon");
    this.Races.push("Mech");


    this.Intent.push("Mediator");
    this.Intent.push("Kill");
    this.Intent.push("Disintegrate");

    this.CardTypes.push("Minion");
    this.CardTypes.push("Spell");
  }

  generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      const r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }
}
