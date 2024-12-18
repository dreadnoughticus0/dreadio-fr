const { combineStats, makeAuto, makeOver, makeDeco, makeGuard, makeBird, makeRadialAuto, weaponArray } = require('../facilitators.js')
const { base, statnames, dfltskl, smshskl } = require('../constants.js')
require('./generics.js')
const g = require('../gunvals.js')

// Basic tank for basic stuff
Class.basic = {
    PARENT: "genericTank",
    LABEL: "Tank",
    DANGER: 4,
    /*BODY: {
        ACCELERATION: base.ACCEL * 1,
        SPEED: base.SPEED * 1,
        HEALTH: base.HEALTH * 1,
        DAMAGE: base.DAMAGE * 1,
        PENETRATION: base.PENETRATION * 1,
        SHIELD: base.SHIELD * 1,
        REGEN: base.REGEN * 1,
        FOV: base.FOV * 1,
        DENSITY: base.DENSITY * 1,
        PUSHABILITY: 1,
        HETERO: 3
    },*/
    GUNS: [
        {
            POSITION: {
                LENGTH: 18,
                WIDTH: 8,
                ASPECT: 1,
                X: 0,
                Y: 0,
                ANGLE: 0,
                DELAY: 0
            },
            PROPERTIES: {
                SHOOT_SETTINGS: combineStats([g.basic]),
                TYPE: "bullet",
                /*COLOR: "grey",
                LABEL: "",
                STAT_CALCULATOR: 0,
                WAIT_TO_CYCLE: false,
                AUTOFIRE: false,
                SYNCS_SKILLS: false,
                MAX_CHILDREN: 0,
                ALT_FIRE: false,
                NEGATIVE_RECOIL: false*/
            }
        }
    ]
}

Class.basic.UPGRADES_TIER_1 = []
    Class.basic.UPGRADES_TIER_2 = []
        Class.basic.UPGRADES_TIER_3 = []
