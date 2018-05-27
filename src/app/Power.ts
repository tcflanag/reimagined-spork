
export class Character {
    stats: statblock;
    powers: Power[];
}

export class Power {
    id: number;
    name: string;
    weapons: Weapon[] = new Array();
    usage: string;
    display: string;
    keywords: string;
    actionType: string;
    attackType: string;
    target: string;
    targets: string;
    attack: string;
    hit: string;
    misc: [string,string][];
    flavor: string;
}

export class Weapon {
    AttackBonus: number;
    HitComponents: string;

    AttackStat: string;
    Conditions: string;  //Should this be array of strings?
    CritComponents: string;
    CritDamage: string;
    CritRange: string;
    Damage: string;
    DamageComponents: string;
    Defense: string;
    name: string;

}



export class stat_detail {
    value: number;
    details: string;
}

export class statblock {
    str: stat_detail;
    con: stat_detail;
    dex: stat_detail;
    wis: stat_detail;
    int: stat_detail;
    cha: stat_detail;

    ac: stat_detail;
    ref: stat_detail;
    fort: stat_detail;
    will: stat_detail;

    hp: stat_detail;
    max_surges: stat_detail;

    regen: stat_detail;
    hit_mod: stat_detail;
    
}
