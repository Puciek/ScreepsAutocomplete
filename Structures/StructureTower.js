/**
 * Remotely attacks or heals creeps, or repairs structures.
 * Can be targeted to any object in the room.
 * However, its effectiveness highly depends on the distance.
 * Each action consumes energy.
 *
 * @class
 * @extends {OwnedStructure}
 */
StructureTower = function() { };

StructureTower.prototype =
{
    /**
     *
     *
     * @type {number}
     */
    energy: 0,

    /**
     *
     *
     * @type {number}
     */
    energyCapacity: 0,

    /**
     * Remotely attack any creep in the room.
     *
     * @type {function}
     *
     * @param {Creep} target The target creep.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_RCL_NOT_ENOUGH}
     */
    attack: function(target) { },


    /**
     * Remotely heal any creep in the room.
     *
     * @type {function}
     *
     * @param {Creep} target The target creep.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_RCL_NOT_ENOUGH}
     */
    heal: function(target) { },


    /**
     * Remotely repair any structure in the room.
     *
     * @type {function}
     *
     * @param {Spawn|Structure} target The target structure.
     *
     * @return {number|OK|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_RCL_NOT_ENOUGH}
     */
    repair: function(target) { },


    /**
     * Transfer energy from the structure to a creep.
     * You can transfer resources to your creeps from hostile structures as well.
     *
     * @type {function}
     *
     * @param {Creep} target The creep object which energy should be transferred to.
     * @param {number|undefined|null} [amount] The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     *
     * @return {number|OK|ERR_NOT_OWNER|ERR_NOT_ENOUGH_RESOURCES|ERR_INVALID_TARGET|ERR_FULL|ERR_NOT_IN_RANGE}
     */
    transferEnergy: function(target, amount) { }
};
