import { Character } from '../character';
import { Attributes } from '../enums/attributes.enum';
import { Skills } from '../enums/skills.enum';
import { Weapons } from '../enums/weapon-skills.enum';

export class Zora extends Character {
  constructor(subRace?: string) {
    super();

    this.race = 'Zora';
    this.subRace = subRace;

    this.skills[Skills['Swim']].racial = 4;

    this.attributes[Attributes['Dexterity']].value += 2; // Dexterity

    this.skills[Skills['Acrobatics']].trained = true; // Acrobatics
    this.skills[Skills['CraftOne']].trained = true; // Craft 1
    this.skills[Skills['CraftTwo']].trained = true; // Craft 2
    this.skills[Skills['Perception']].trained = true; // Perception
    this.skills[Skills['Swim']].trained = true; // Swim

    this.weaponSkills[Weapons['Spear']].trained = true; // Spears

    switch (subRace) {
      case 'River': {
        this.attributes[Attributes['Constitution']].value -= 2; // Con Neg
        this.attributes[Attributes['Intelligence']].value += 2; // Int Buff

        this.skills[Skills['Diplomacy']].trained = true; // Diplomacy
        this.skills[Skills['Heal']].trained = true; // Heal;
        this.skills[Skills['Knowledge History']].trained = true; // Knowledge (History)
        this.skills[Skills['Knowledge Nature']].trained = true; // Knowledge(Nature)
        this.skills[Skills['Perform Other']].trained = true; // Perform (Other)

        break;
      }
      case 'Ocean': {
        this.attributes[Attributes['Strength']].value += 2;
        this.attributes[Attributes['Wisdom']].value -= 2;

        this.skills[Skills['Diplomacy']].trained = true; // Diplomacy
        this.skills[Skills['Escape Artist']].trained = true; // Escape Artist
        this.skills[Skills['Intimidate']].trained = true; // Intimidate
        this.skills[Skills['Knowledge Nature']].trained = true; // Knowledge (Nature)

        break;
      }
      case 'Swamp': {
        this.attributes[Attributes['Strength']].value -= 2;
        this.attributes[Attributes['Constitution']].value += 2;

        this.skills[Skills['Bluff']].trained = true; // Bluff
        this.skills[Skills['Escape Artist']].trained = true; // Escape Artist
        this.skills[Skills['Intimidate']].trained = true; // Intimidate
        this.skills[Skills['Sense Motive']].trained = true; // Sense Motive
        this.skills[Skills['Stealth']].trained = true; // Stealth

        break;
      }
    }
  }
}
