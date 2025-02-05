export class OmniStateOfMind {
    constructor() {
        if (OmniStateOfMind._instance) {
            return OmniStateOfMind._instance
        }
        OmniStateOfMind._instance = this;
        this.AllCharacterInfo = {
            "Attorney": new StateOfSingleBeing(),

            "NPC_Boss": new StateOfSingleBeing(),
            "NPC_Secretary": new StateOfSingleBeing(),

            "PROP_ConOffice": new StateOfSingleBeing()
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
        this.LifeMilestones = {};
        // this one is used in lengthy interactions
        this.StateOfDialog = -1;
        // what is current `reset` or default state of dialog
        this.StateOfDialogReset = -1;
    }
}

export const ConOffice_States = {
    Initial : -1,
    GunManual: 0,
    HistoryManual: 1,
    LawsManual: 2
}
export const NPCSecretary_States = {
    Initial : -1,
    SmallTalkE: 0
}
export const NPCBoss_States = {
    // Initial -> PickupMandate or Q1 or Q2
    // Q1 or Q2 -> Q3
    // Q3 -> PickupMandate
    // 
    Initial: -1,
    PickupMandate: 0,
    Q1: 1,
    Q2: 2,
    Q3: 3
}
