export default class StringsTraslation {
    constructor() {
        if (StringsTraslation._instance) {
            return StringsTraslation._instance
        }
        StringsTraslation._instance = this;
        this.currentLanguage = "EN";
        this.lines = {
            "EN": {
                "Attorney": "Attorney",
                "NPC_Secretary": "Secretary",
                "NPC_Boss": "Boss",
                "PROP_ConOffice": "Console in the office",
                "Reaction_Say": "says",
                "Reaction_Display": "shows on display",
            },
            
            "RU": {
                "Attorney": "Адвокат",
                "NPC_Secretary": "Секретарь",
                "NPC_Boss": "Рукводитель",
                "PROP_ConOffice": "Информационная станция в офисе",
                "Reaction_Say": "говорит",
                "Reaction_Display": "отображает на экране",
            },
            "UA": {
                "Attorney": "Адвокат",
                "NPC_Secretary": "Секретар",
                "NPC_Boss": "Керівник",
                "PROP_ConOffice": "Інформаційна станція в офісі",
                "Reaction_Say": "каже",
                "Reaction_Display": "показує на екрані",
            }
            
        }
    }
}