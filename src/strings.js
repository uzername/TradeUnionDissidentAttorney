export default class StringsTraslation {
    constructor() {
        if (StringsTraslation._instance) {
            return StringsTraslation._instance
        }
        StringsTraslation._instance = this;
        this.currentLanguage = 'EN';
        this.lines = {
            'EN': {
                'Attorney': 'Attorney',
                'NPC_Secretary': 'Secretary',
                'NPC_Boss': 'Boss',
                'Reaction_say': 'says',
            },
            'RU': {
                'Attorney': 'Адвокат',
                'NPC_Secretary': 'Секретарь',
                'NPC_Boss': 'Рукводитель',
                'Reaction_say': 'говорит',
            },
            'UA': {
                'Attorney': 'Адвокат',
                'NPC_Secretary': 'Секретар',
                'NPC_Boss': 'Керівник',
                'Reaction_say': 'каже',
            }
        }
    }
}