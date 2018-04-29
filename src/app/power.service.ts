import { Injectable } from '@angular/core';
import { Power, Weapon, stat_detail, statblock } from './Power'
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { MessageService } from './message.service';
import { parseString } from 'xml2js';
import { MOCK_XML } from './mock-character';

@Injectable()
export class PowerService {


  fakePowers(): Power[] {

    var new_id: number = 0;


    var power_array: Power[] = new Array();
    let stats = new statblock();

    parseString(MOCK_XML, { attrkey: 'name' }, function (err, result) {

      //console.log(result.D20Character.CharacterSheet[0].StatBlock[0]);

      result.D20Character.CharacterSheet[0].StatBlock[0].Stat.forEach(stat => {

        //console.log(stat.alias[0].name);
        if ("Strength" == stat.alias[0].name.name) {
          stats.str = stat.name;

        }
        if ("Constitution" == stat.alias[0].name.name) {
          stats.con = stat.name;
        }
        //console.log(stat.alias[0].name.name)


      });
      console.log(stats);


      result.D20Character.CharacterSheet[0].PowerStats[0].Power.forEach(power => {
        let new_power = new Power();
        new_power.name = power.name.name;
        new_power.id = new_id++;
        new_power.misc = new Array();

        power.specific.forEach(element => {
          switch (element.name.name) {
            case "Action Type": {
              new_power.actionType = element._.trim();
              break;
            }
            case "Attack Type": {
              new_power.attackType = element._.trim();
              break;
            }
            case "Display": {
              new_power.display = element._.trim();
              break;
            }
            case "Keywords": {
              new_power.keywords = element._.trim();
              break;
            }
            case "Target": {
              new_power.target = element._.trim();
              break;
            }
            case "Targets": {
              new_power.targets = element._.trim();
              break;
            }
            case "Power Usage": {
              new_power.usage = element._.trim();
              break;
            }
            case "Flavor": {
              new_power.flavor = element._.trim();
              break;
            }
            default: {

              new_power.misc.push([element.name.name, element._]);
              //console.dir(new_power);
            }
          };

        });


        if (power.Weapon) {
          //console.log(power.Weapon)
          power.Weapon.forEach(weapon_itr => {
            let new_weapon = new Weapon();
            new_weapon.AttackBonus = weapon_itr.AttackBonus[0];
            new_weapon.AttackStat = weapon_itr.AttackStat[0];
            new_weapon.Conditions = weapon_itr.Conditions[0];
            //new_weapon.CritComponents = weapon_itr.CritComponents[0];
            new_weapon.Damage = weapon_itr.Damage[0];
            new_weapon.Defense = weapon_itr.Defense[0];
            new_weapon.name = weapon_itr.name.name;
            




            new_power.weapons.push(new_weapon);
          }
          );
        }
        power_array.push(new_power)
        console.dir(new_power);

      });
      //console.dir(power_array);



    });
    return power_array;
  }

  getPowers(): Observable<Power[]> {
    // TODO: send the message _after_ fetching the powers
    this.messageService.add('PowerService: fetched powers');



    var power_array: Power[] = this.fakePowers();


    return of(power_array);
  }



  getPower(id: number): Observable<Power> {
    // TODO: send the message _after_ fetching the power
    this.messageService.add(`PowerService: fetched power id=${id}`);

    return of(this.fakePowers().find(power => power.id === id))
  }

  constructor(private messageService: MessageService) { }

}
