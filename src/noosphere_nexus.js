export class OmniStateOfMind {
    constructor() {
        if (OmniStateOfMind._instance) {
            return OmniStateOfMind._instance
        }
        OmniStateOfMind._instance = this;
        this.AllCharacterInfo = {
            "Attorney": new StateOfSingleBeing(),

            "NPC_Boss": new StateOfSingleBeing(),
            "NPC_Secretary": new StateOfSingleBeing()

        }
    }
}
export class StateOfSingleBeing {
    constructor() {
        // items stored.
        this.Inventory = Array(3).fill(null);
        // different kinds of ammunitions and their quantity
        this.Ammo = Array(3).fill(0);
        // which weapons does the being have? for Attorney: 0 is rapier and shield, 1 is pistol and 2 is reserved
        this.Weapons = Array(3).fill(null);
        // this one is complicated. It has variables related to character
        this.LifeMilestones = {}
;
    }
}
