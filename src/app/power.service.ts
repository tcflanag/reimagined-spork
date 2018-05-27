import { Injectable } from '@angular/core';
import { Power, Weapon, stat_detail, statblock, Character } from './Power'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { parseString } from 'xml2js';
import { MOCK_XML } from './mock-character';




@Injectable()
export class PowerService {

  fakeCharacter(): Character {

    var new_character = new Character();

    var new_id: number = 0;
    let item_power_re = new RegExp("Power (\\((\\w*)\\) )?\\*\\s*([^\\(]*?)?\\s*\\(([^\\(]*)?\\)\n([\\s\\S]*)?")
    let tier_strip_re = new RegExp("\\((Heroic|Paragon|Epic) Tier\\)", "i");
    new_character.powers = new Array();
    let stats = new_character.stats = new statblock();

    parseString(MOCK_XML, { attrkey: 'name' }, function (err, result) {
      //console.log(result);
      //console.log(err);
      //console.log(result.D20Character.CharacterSheet[0].StatBlock[0]);

      result.D20Character.CharacterSheet[0].StatBlock[0].Stat.forEach(stat => {

        //console.log(stat.alias[0].name);
        if ("Strength" == stat.alias[0].name.name) {
          stats.str = stat.name;

        }
        else if ("Constitution" == stat.alias[0].name.name) {
          stats.con = stat.name;
        }
        else if ("Dexterity" == stat.alias[0].name.name) {
          stats.dex = stat.name;
        }
        else if ("Wisdom" == stat.alias[0].name.name) {
          stats.wis = stat.name;
        }
        else if ("Intelligence" == stat.alias[0].name.name) {
          stats.int = stat.name;
        }
        else if ("Charisma" == stat.alias[0].name.name) {
          stats.cha = stat.name;
        }
        else if ("Reflex Defense" == stat.alias[0].name.name) {
          stats.ref = stat.name;
        }
        else if ("Will Defense" == stat.alias[0].name.name) {
          stats.will = stat.name;
        }
        else if ("Fortitude Defense" == stat.alias[0].name.name) {
          stats.fort = stat.name;
        }
        else if ("AC" == stat.alias[0].name.name) {
          stats.ac = stat.name;
        }
        else if ("Hit Points" == stat.alias[0].name.name) {
          stats.hp = stat.name;
        }
        else if ("Healing Surges" == stat.alias[0].name.name) {
          stats.max_surges = stat.name;
        }


      });
      stats.hit_mod = new stat_detail();
      stats.hit_mod.value = 2;
      stats.regen = new stat_detail();
      stats.regen.value = 4;
      
      //console.log(stats)

      result.D20Character.CharacterSheet[0].LootTally[0].loot.forEach(loot_item => {
        //console.dir(loot_item)
        if (loot_item.name.count > 0) {
          loot_item.RulesElement.forEach(loot_element => {

            loot_element.specific.forEach(specifics => {
              //console.log(specifics)
              if (item_power_re.test(specifics._)) {
                var item_power_details = item_power_re.exec(specifics._.trim());
                let new_power = new Power();

                //console.log(item_power_details)
                new_power.actionType = item_power_details[4].replace(" ","_");;
                if (typeof item_power_details[3] === "undefined" || item_power_details[3] == "Consumable") {
                  new_power.usage = "At-Will";
                }
                else {
                  new_power.usage = item_power_details[3];
                }
                //console.log(new_power.usage);
                new_power.id = new_id++;

                new_power.name = loot_element.name.name.replace(tier_strip_re, "");
                //new_power.misc = loot_element
                new_power.misc = new Array();
                var detail_re = new RegExp("([^:]*):(.*)");
                new_power.keywords = item_power_details[2];
                item_power_details[5].split(/\r?\n/).forEach(details => {
                  if (detail_re.test(details)) {
                    var out = detail_re.exec(details);
                    new_power.misc.push([out[1], out[2]])
                  }
                  else {
                    new_power.misc.push(["", details])
                  }

                  
                })
                new_character.powers.push(new_power)

              }

            })

          })
        }
      })

      result.D20Character.CharacterSheet[0].PowerStats[0].Power.forEach(power => {
        let new_power = new Power();
        new_power.name = power.name.name;
        new_power.id = new_id++;
        new_power.misc = new Array();

        power.specific.forEach(element => {
          var name: string = element.name.name;

          if (name == "Action Type") {
            new_power.actionType = element._.trim().replace(" ","_");

          }
          else if (name == "Attack Type") {
            new_power.attackType = element._.trim();

          }
          else if (name == "Display") {
            new_power.display = element._.trim();

          }
          else if (name == "Keywords") {
            new_power.keywords = element._.trim();

          }
          else if (name == "Target") {
            new_power.target = element._.trim();

          }
          else if (name == "Targets") {
            new_power.targets = element._.trim();

          }
          else if (name == "Power Usage") {
            new_power.usage = element._.trim();

          }
          else if (name == "Flavor") {
            new_power.flavor = element._.trim();

          }
          else if (name == "Level" ||
            name == "Power Type" ||
            name == "Class" ||
            name.startsWith("_")) {
            // Drop this stuff
          }
          else {

            new_power.misc.push([element.name.name, element._]);
            //console.dir(new_power);
          }


        });


        if (power.Weapon) {
          //console.log(power.Weapon)a
          power.Weapon.forEach(weapon_itr => {
            let new_weapon = new Weapon();
            new_weapon.AttackBonus = weapon_itr.AttackBonus[0];
            new_weapon.AttackStat = weapon_itr.AttackStat[0];
            new_weapon.Conditions = weapon_itr.Conditions[0];
            //new_weapon.CritComponents = weapon_itr.CritComponents[0];
            new_weapon.Damage = weapon_itr.Damage[0];
            new_weapon.Defense = weapon_itr.Defense[0];
            new_weapon.name = weapon_itr.name.name;
            new_weapon.CritDamage = weapon_itr.CritDamage[0]





            new_power.weapons.push(new_weapon);
          }
          );
        }
        new_character.powers.push(new_power)
        //console.dir(new_power);

      });
      //console.dir(power_array);



    });
    return new_character;
  }

  getCharacter(): Observable<Character> {
    // TODO: send the message _after_ fetching the powers
    this.messageService.add('PowerService: fetched powers');

    var char: Character = this.fakeCharacter();

    return of(char);
  }


  constructor(private messageService: MessageService) { }

}
