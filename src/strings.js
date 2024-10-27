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
                'Attorney': '�������',
                'NPC_Secretary': '���������',
                'NPC_Boss': '�����������'
            },
            'UA': {
                'Attorney': '�������',
                'NPC_Secretary': '���������',
                'NPC_Boss': '�����������'
            }
        }
    }
}