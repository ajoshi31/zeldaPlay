import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Character } from './Character/character';

export class InMemoryDataService implements InMemoryDbService {

  createDb() {

    const EXP = 11000;

    const characters: Character[] = [
      {
        name: 'Bryte',
        size: 'tiny',
        ac: 17,
        flat_footed: 10,
        touch: 17,
        race: 'Fairy',
        subRace: 'Nayru',
        craftOne: 'Fairy Made Armor',
        craftTwo: 'Magic Potions',
        profession: 'Armor Smith',
        attributes: [
          {
            name: 'Strength',
            value: 10,
            modifier: 0
          },
          {
            name: 'Dexterity',
            value: 14,
            modifier: 2
          },
          {
            name: 'Constitution',
            value: 12,
            modifier: 1
          },
          {
            name: 'Intelligence',
            value: 13,
            modifier: 1
          },
          {
            name: 'Wisdom',
            value: 24,
            modifier: 7
          },
          {
            name: 'Charisma',
            value: 16,
            modifier: 3
          }
        ],
        health: 116,
        maxHealth: 116,
        magic: 57,
        maxMagic: 57,
        exp: EXP,
        skills: [
          {
            skillName: 'Acrobatics',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Appraise',
            trained: false,
            ranks: 0,
            modifier: 'Intelligence',
            racial: 0,
            item: 0,
            misc: 0
          },
          {
            skillName: 'Bluff',
            trained: false,
            ranks: 0,
            modifier: 'Charisma',
            racial: 0,
            item: 0,
            misc: 0
          },
          {
            skillName: 'Climb',
            trained: false,
            ranks: 0,
            modifier: 'Strength',
            racial: 0,
            item: 0,
            misc: 0
          },
          {
            skillName: 'Craft 1',
            trained: true,
            ranks: 3,
            modifier: 'Intelligence',
            racial: 0,
            item: 0,
            misc: 5
          },
          {
            skillName: 'Craft 2',
            trained: true,
            ranks: 2,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Diplomacy',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Escape Artist',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Fly',
            trained: true,
            ranks: 1,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Handle Animal',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Heal',
            trained: true,
            ranks: 2,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Intimidate',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Strength',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Geography)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (History)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Language)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Local)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Magic)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Monster)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Nature)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Nobility)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Religion)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Perception',
            trained: true,
            ranks: 1,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Perform (Music)',
            trained: true,
            ranks: 2,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Perform',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Profession',
            trained: false,
            ranks: 2,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Ride',
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Sense Motive',
            ranks: 3,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Sleight of Hand',
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Stealth',
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Survival',
            ranks: 0,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Swim',
            ranks: 0,
            racial: 0,
            modifier: 'Strength',
            item: 0,
            misc: 0
          }
        ],
        weaponSkills: [
          {
            skillName: 'Short Swords',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Long Swords',
            ranks: 0,
            trained: false,
            racial: 0
          },
          {
            skillName: 'Dual Swords',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Great Swords',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Light Shields',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Heavy Shields',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Tower Shields',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'One-Handed Hammers',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Two-Handed Hammers',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Spears',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Halberds',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Naginatas',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Boomerangs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Slings',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Bows',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Small Bombs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Medium Bombs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Large Bombs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Bombs (Other)',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Fire Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Ice Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Lightning Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Tornado Rods',
            trained: true,
            ranks: 9,
            racial: 0
          },
          {
            skillName: 'Sand Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Whips',
            trained: true,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Ball & Chains',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Unarmed',
            trained: false,
            ranks: 0,
            racial: 0
          }
        ],
        magicSkills: [
          {
            skillName: 'Din',
            modifier: 'Intelligence',
            ranks: 0
          },
          {
            skillName: 'Nayru',
            modifier: 'Wisdom',
            ranks: 8
          },
          {
            skillName: 'Farore',
            modifier: 'Charisma',
            ranks: 1
          }
        ],
        rangedWeapons: [
          {
            name: 'Tornado Rod',
            attack: 8,
            numberOfAttacks: 1,
            critRange: [20],
            cirtDamage: 3,
            range: 30,
            modifier: 'Wisdom',
            // tslint:disable-next-line:max-line-length
            description: 'A powerful rod of wind. When the weilder takes a turn to charge this rod up, it can blast enemies ackwards with a powerful gust of wind. Costs 2MP to charge up.'
          }
        ]
      }, {
        name: 'Rya',
        size: 'normal',
        ac: 17,
        flat_footed: 10,
        touch: 17,
        race: 'Gerudo',
        craftOne: 'Fairy Made Armor',
        craftTwo: 'Magic Potions',
        profession: 'Armor Smith',
        attributes: [
          {
            name: 'Strength',
            value: 10,
            modifier: 0
          },
          {
            name: 'Dexterity',
            value: 14,
            modifier: 2
          },
          {
            name: 'Constitution',
            value: 12,
            modifier: 1
          },
          {
            name: 'Intelligence',
            value: 13,
            modifier: 1
          },
          {
            name: 'Wisdom',
            value: 24,
            modifier: 7
          },
          {
            name: 'Charisma',
            value: 16,
            modifier: 3
          }
        ],
        health: 116,
        maxHealth: 116,
        magic: 57,
        maxMagic: 57,
        exp: EXP,
        skills: [
          {
            skillName: 'Acrobatics',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Appraise',
            trained: false,
            ranks: 0,
            modifier: 'Intelligence',
            racial: 0,
            item: 0,
            misc: 0
          },
          {
            skillName: 'Bluff',
            trained: false,
            ranks: 0,
            modifier: 'Charisma',
            racial: 0,
            item: 0,
            misc: 0
          },
          {
            skillName: 'Climb',
            trained: false,
            ranks: 0,
            modifier: 'Strength',
            racial: 0,
            item: 0,
            misc: 0
          },
          {
            skillName: 'Craft 1',
            trained: true,
            ranks: 3,
            modifier: 'Intelligence',
            racial: 0,
            item: 0,
            misc: 5
          },
          {
            skillName: 'Craft 2',
            trained: true,
            ranks: 2,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Diplomacy',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Escape Artist',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Fly',
            trained: true,
            ranks: 1,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Handle Animal',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Heal',
            trained: true,
            ranks: 2,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Intimidate',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Strength',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Geography)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (History)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Language)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Local)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Magic)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Monster)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Nature)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Nobility)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Religion)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Perception',
            trained: true,
            ranks: 1,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Perform (Music)',
            trained: true,
            ranks: 2,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Perform',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Profession',
            trained: false,
            ranks: 2,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Ride',
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Sense Motive',
            ranks: 3,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Sleight of Hand',
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Stealth',
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Survival',
            ranks: 0,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Swim',
            ranks: 0,
            racial: 0,
            modifier: 'Strength',
            item: 0,
            misc: 0
          }
        ],
        weaponSkills: [
          {
            skillName: 'Short Swords',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Long Swords',
            ranks: 0,
            trained: false,
            racial: 0
          },
          {
            skillName: 'Dual Swords',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Great Swords',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Light Shields',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Heavy Shields',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Tower Shields',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'One-Handed Hammers',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Two-Handed Hammers',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Spears',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Halberds',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Naginatas',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Boomerangs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Slings',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Bows',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Small Bombs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Medium Bombs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Large Bombs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Bombs (Other)',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Fire Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Ice Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Lightning Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Tornado Rods',
            trained: true,
            ranks: 9,
            racial: 0
          },
          {
            skillName: 'Sand Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Whips',
            trained: true,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Ball & Chains',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Unarmed',
            trained: false,
            ranks: 0,
            racial: 0
          }
        ],
        magicSkills: [
          {
            skillName: 'Din',
            modifier: 'Intelligence',
            ranks: 0
          },
          {
            skillName: 'Nayru',
            modifier: 'Wisdom',
            ranks: 8
          },
          {
            skillName: 'Farore',
            modifier: 'Charisma',
            ranks: 1
          }
        ],
        rangedWeapons: [
          {
            name: 'Tornado Rod',
            attack: 8,
            numberOfAttacks: 1,
            critRange: [20],
            cirtDamage: 3,
            range: 30,
            modifier: 'Wisdom',
            // tslint:disable-next-line:max-line-length
            description: 'A powerful rod of wind. When the weilder takes a turn to charge this rod up, it can blast enemies ackwards with a powerful gust of wind. Costs 2MP to charge up.'
          }
        ]
      }, {
        name: 'Greyson',
        size: 'normal',
        ac: 17,
        flat_footed: 10,
        touch: 17,
        race: 'Goron',
        subRace: 'Rock Spine',
        craftOne: 'Fairy Made Armor',
        craftTwo: 'Magic Potions',
        profession: 'Armor Smith',
        attributes: [
          {
            name: 'Strength',
            value: 10,
            modifier: 0
          },
          {
            name: 'Dexterity',
            value: 14,
            modifier: 2
          },
          {
            name: 'Constitution',
            value: 12,
            modifier: 1
          },
          {
            name: 'Intelligence',
            value: 13,
            modifier: 1
          },
          {
            name: 'Wisdom',
            value: 24,
            modifier: 7
          },
          {
            name: 'Charisma',
            value: 16,
            modifier: 3
          }
        ],
        health: 116,
        maxHealth: 116,
        magic: 57,
        maxMagic: 57,
        exp: EXP,
        skills: [
          {
            skillName: 'Acrobatics',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Appraise',
            trained: false,
            ranks: 0,
            modifier: 'Intelligence',
            racial: 0,
            item: 0,
            misc: 0
          },
          {
            skillName: 'Bluff',
            trained: false,
            ranks: 0,
            modifier: 'Charisma',
            racial: 0,
            item: 0,
            misc: 0
          },
          {
            skillName: 'Climb',
            trained: false,
            ranks: 0,
            modifier: 'Strength',
            racial: 0,
            item: 0,
            misc: 0
          },
          {
            skillName: 'Craft 1',
            trained: true,
            ranks: 3,
            modifier: 'Intelligence',
            racial: 0,
            item: 0,
            misc: 5
          },
          {
            skillName: 'Craft 2',
            trained: true,
            ranks: 2,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Diplomacy',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Escape Artist',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Fly',
            trained: true,
            ranks: 1,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Handle Animal',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Heal',
            trained: true,
            ranks: 2,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Intimidate',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Strength',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Geography)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (History)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Language)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Local)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Magic)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Monster)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Nature)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Nobility)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Religion)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Perception',
            trained: true,
            ranks: 1,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Perform (Music)',
            trained: true,
            ranks: 2,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Perform',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Profession',
            trained: false,
            ranks: 2,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Ride',
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Sense Motive',
            ranks: 3,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Sleight of Hand',
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Stealth',
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Survival',
            ranks: 0,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Swim',
            ranks: 0,
            racial: 0,
            modifier: 'Strength',
            item: 0,
            misc: 0
          }
        ],
        weaponSkills: [
          {
            skillName: 'Short Swords',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Long Swords',
            ranks: 0,
            trained: false,
            racial: 0
          },
          {
            skillName: 'Dual Swords',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Great Swords',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Light Shields',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Heavy Shields',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Tower Shields',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'One-Handed Hammers',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Two-Handed Hammers',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Spears',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Halberds',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Naginatas',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Boomerangs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Slings',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Bows',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Small Bombs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Medium Bombs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Large Bombs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Bombs (Other)',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Fire Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Ice Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Lightning Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Tornado Rods',
            trained: true,
            ranks: 9,
            racial: 0
          },
          {
            skillName: 'Sand Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Whips',
            trained: true,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Ball & Chains',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Unarmed',
            trained: false,
            ranks: 0,
            racial: 0
          }
        ],
        magicSkills: [
          {
            skillName: 'Din',
            modifier: 'Intelligence',
            ranks: 0
          },
          {
            skillName: 'Nayru',
            modifier: 'Wisdom',
            ranks: 8
          },
          {
            skillName: 'Farore',
            modifier: 'Charisma',
            ranks: 1
          }
        ],
        rangedWeapons: [
          {
            name: 'Tornado Rod',
            attack: 8,
            numberOfAttacks: 1,
            critRange: [20],
            cirtDamage: 3,
            range: 30,
            modifier: 'Wisdom',
            // tslint:disable-next-line:max-line-length
            description: 'A powerful rod of wind. When the weilder takes a turn to charge this rod up, it can blast enemies ackwards with a powerful gust of wind. Costs 2MP to charge up.'
          }
        ]
      }, {
        name: 'Golo',
        size: 'normal',
        ac: 17,
        flat_footed: 10,
        touch: 17,
        race: 'Hylian',
        subRace: 'Farmer',
        craftOne: 'Fairy Made Armor',
        craftTwo: 'Magic Potions',
        profession: 'Armor Smith',
        attributes: [
          {
            name: 'Strength',
            value: 10,
            modifier: 0
          },
          {
            name: 'Dexterity',
            value: 14,
            modifier: 2
          },
          {
            name: 'Constitution',
            value: 12,
            modifier: 1
          },
          {
            name: 'Intelligence',
            value: 13,
            modifier: 1
          },
          {
            name: 'Wisdom',
            value: 24,
            modifier: 7
          },
          {
            name: 'Charisma',
            value: 16,
            modifier: 3
          }
        ],
        health: 116,
        maxHealth: 116,
        magic: 57,
        maxMagic: 57,
        exp: EXP,
        skills: [
          {
            skillName: 'Acrobatics',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Appraise',
            trained: false,
            ranks: 0,
            modifier: 'Intelligence',
            racial: 0,
            item: 0,
            misc: 0
          },
          {
            skillName: 'Bluff',
            trained: false,
            ranks: 0,
            modifier: 'Charisma',
            racial: 0,
            item: 0,
            misc: 0
          },
          {
            skillName: 'Climb',
            trained: false,
            ranks: 0,
            modifier: 'Strength',
            racial: 0,
            item: 0,
            misc: 0
          },
          {
            skillName: 'Craft 1',
            trained: true,
            ranks: 3,
            modifier: 'Intelligence',
            racial: 0,
            item: 0,
            misc: 5
          },
          {
            skillName: 'Craft 2',
            trained: true,
            ranks: 2,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Diplomacy',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Escape Artist',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Fly',
            trained: true,
            ranks: 1,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Handle Animal',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Heal',
            trained: true,
            ranks: 2,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Intimidate',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Strength',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Geography)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (History)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Language)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Local)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Magic)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Monster)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Nature)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Nobility)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Knowledge (Religion)',
            trained: true,
            ranks: 0,
            racial: 0,
            modifier: 'Intelligence',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Perception',
            trained: true,
            ranks: 1,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Perform (Music)',
            trained: true,
            ranks: 2,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Perform',
            trained: false,
            ranks: 0,
            racial: 0,
            modifier: 'Charisma',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Profession',
            trained: false,
            ranks: 2,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Ride',
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Sense Motive',
            ranks: 3,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Sleight of Hand',
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Stealth',
            ranks: 0,
            racial: 0,
            modifier: 'Dexterity',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Survival',
            ranks: 0,
            racial: 0,
            modifier: 'Wisdom',
            item: 0,
            misc: 0
          },
          {
            skillName: 'Swim',
            ranks: 0,
            racial: 0,
            modifier: 'Strength',
            item: 0,
            misc: 0
          }
        ],
        weaponSkills: [
          {
            skillName: 'Short Swords',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Long Swords',
            ranks: 0,
            trained: false,
            racial: 0
          },
          {
            skillName: 'Dual Swords',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Great Swords',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Light Shields',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Heavy Shields',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Tower Shields',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'One-Handed Hammers',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Two-Handed Hammers',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Spears',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Halberds',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Naginatas',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Boomerangs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Slings',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Bows',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Small Bombs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Medium Bombs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Large Bombs',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Bombs (Other)',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Fire Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Ice Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Lightning Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Tornado Rods',
            trained: true,
            ranks: 9,
            racial: 0
          },
          {
            skillName: 'Sand Rods',
            trained: true,
            ranks: 3,
            racial: 0
          },
          {
            skillName: 'Whips',
            trained: true,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Ball & Chains',
            trained: false,
            ranks: 0,
            racial: 0
          },
          {
            skillName: 'Unarmed',
            trained: false,
            ranks: 0,
            racial: 0
          }
        ],
        magicSkills: [
          {
            skillName: 'Din',
            modifier: 'Intelligence',
            ranks: 0
          },
          {
            skillName: 'Nayru',
            modifier: 'Wisdom',
            ranks: 8
          },
          {
            skillName: 'Farore',
            modifier: 'Charisma',
            ranks: 1
          }
        ],
        rangedWeapons: [
          {
            name: 'Tornado Rod',
            attack: 8,
            numberOfAttacks: 1,
            critRange: [20],
            cirtDamage: 3,
            range: 30,
            modifier: 'Wisdom',
            // tslint:disable-next-line:max-line-length
            description:  'A powerful rod of wind. When the weilder takes a turn to charge this rod up, it can blast enemies ackwards with a powerful gust of wind. Costs 2MP to charge up.'
          }
        ]
      }
    ];
    return {characters};
  }
}
