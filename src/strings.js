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
                'NPC_Boss': 'Boss'
            },
            'RU': {
                'Attorney': 'Адвокат',
                'NPC_Secretary': 'Секретарь',
                'NPC_Boss': 'Рукводитель'
            },
            'UA': {
                'Attorney': 'Адвокат',
                'NPC_Secretary': 'Секретарь',
                'NPC_Boss': 'Рукводитель'
            }
        }
    }
}