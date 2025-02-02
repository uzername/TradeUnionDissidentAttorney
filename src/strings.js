/**
 * Here is localization. here is typo lol . But I won't fix it
 */
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

                ConOffice_Initial: "This is Console in the office. What do you want to know about?",
                ConOffice_GunHandling: "Gun Handling Manual",
                ConOffice_GunHandlingText: "Every field investigator receives a pistol for their self-defence. It is a single-shot weapon that launches projectiles that fly straight, split in air into smaller parts or even chase opponents. This is a miracle of technology! Please be careful with it near friends and partners.",
                ConOffice_HistoryReview: "History And Society",
                ConOffice_HistoryReviewText: "For years, the city of Diamond was ruled by kings and queens. Then the Revolution happened, the king was forced to flee, and the trade unions became very influential and seized power. The trade unions control various sectors of the city's economy: the Transport Trade Union, the Trade Union Association of Manufacturing Companies, the Greening and Plant Growing Trade Union, the Justice Trade Union, the Cinema and Theater Trade Union, the Medical Trade Union. The Military and Police Forces. They are governed by the Trade Union Council. The city of Diamond has tense relations with the neighboring Monarchy. In the city of Diamond itself, a movement of Dissidents is gaining strength, who do not agree with the activities of the trade unions.",
                ConOffice_LawsHandbook: "Laws Handbook",
                ConOffice_LawsHandbookText: "This is a brief overview of laws. Every person who is detained in jail has right to request investigator from Justice Trade Union. Investigator should carry a special Mandate filled by their Boss which allows them to access areas required for collecting evidence. Investigators may carry weapons, but they should be concealed. Military and police should not interfere work of investigators.", 
                ConOffice_CommandBack: "== BACK ==",
                ConOffice_CommandShutdown: "== SHUTDOWN ==",

                Secretary_Intro: "Good morning. You are on time today! There is a lot of job for you. The Boss is waiting at her office upstairs, she has already prepared the work plan for today.",
                Secretary_Q1OnMyWay: "Okay, on my way",
                Secretary_Q1GoodBye: "See you later!",
                Secretary_Q1WhatAreE: "What do those pictures with E mean?",
                Secretary_A1WhatAreE: "Those are motivational posters. E is a call for action and interactivity. E - to act!",

                Boss_Intro: "Good morning. We have received many requests for assistance from those who have been detained for obstructing trade union activities.",
                Boss_Q1Investigation: "I think, I recall investigation routine. May you please fill in a Mandate and then I shall a visit a Correctional Center",
                Boss_Q1: "Perhaps they were detained correctly, the city-state of Diamond has many opponents: both external and internal.",
                Boss_Q2: "The Diamond City leadership is too preoccupied with finding traitors, this needs to be resolved!",
                Boss_Q1InvestigationA: "Here it is. Now you may conduct your investigation freely. Do not forget to visit armory and pick up weapons",
                Boss_Q1A1: "My experience suggests that all those who sought help are not guilty. You should find evidence that proves it. At the same time, investigate the activities of trade unions.",
                Boss_Q2A1: "Really, the city-state of Diamond has many opponents, but those who have sought our help are not guilty. We need evidence of this.",
                Boss_Q3: "Who are those people who were detained?",
                Boss_Q3A1: "The list includes - Musician, Mechanic, Medic. Visit them in the Correctional Center"
            },
            
            "RU": {
                "Attorney": "Адвокат",
                "NPC_Secretary": "Секретарь",
                "NPC_Boss": "Рукводитель",
                "PROP_ConOffice": "Информационная станция в офисе",

                "Reaction_Say": "говорит",
                "Reaction_Display": "отображает на экране",

                ConOffice_Initial: "Это Информационная Консоль. О чём вы хотите узнать?",
                ConOffice_GunHandling: "Использование Оружия Дальнего Боя",
                ConOffice_GunHandlingText: "Каждый следователь получает пистолет для самообороны. Это однозарядное оружие, которое стреляет снарядами, летящими прямо, разделяющимися в воздухе на более мелкие части или даже преследующими противников. Это чудо техники! Пожалуйста, будьте осторожны с ним рядом с друзьями и партнерами.",
                ConOffice_HistoryReview: "История И Общество",
                ConOffice_HistoryReviewText: "Много лет городом Бриллиант управляли короли и королевы. Затем произошла революция, король был вынужден бежать, а профсоюзы стали очень влиятельными и захватили власть в свои руки. Профсоюзы контролируют разные отрасли экономики города: Профсоюз Транспорта, Профсоюзное Объединение Производственных Компаний, Профсоюз Озеленения и Растениеводства, Профсоюз Правосудия, Профсоюз Кино и Театра, Профсоюз Медицины. Военные силы и Полиция. Ими управляет Совет Профсоюзов. Город Бриллиант имеет напряженные отношения с соседней Монархией. В городе Бриллиант набирает силу движение Диссидентов, которые не согласны с деятельностью профсоюзов.",
                ConOffice_LawsHandbook: "Правоведение",
                ConOffice_LawsHandbookText: "Это краткий обзор законов. Каждый человек, находящийся в тюрьме, имеет право запросить следователя из профсоюза правосудия. Следователь должен иметь специальный мандат, заполненный его начальником, который позволяет ему получать доступ к зонам, для сбора доказательств. Следователи могут носить оружие, но оно должно быть скрыто. Военные и полиция не должны вмешиваться в работу следователей.",
                ConOffice_CommandBack: "== НАЗАД ==",
                ConOffice_CommandShutdown: "== ВЫКЛЮЧИТЬ ==",

                Secretary_Intro: "Доброе утро. Сегодня вы пришли вовремя! Вас ждет много дел.Руководитель в своем кабинете на верхнем этаже, она уже подготовила план работы на сегодня.",
                Secretary_Q1OnMyWay: "Хорошо, уже иду",
                Secretary_Q1GoodBye: "Встретимся позже!",
                Secretary_Q1WhatAreE: "Что означают эти картинки с буквой E?",
                Secretary_A1WhatAreE: "Это мотивационные плакаты. Е — призыв к действию и интерактивности. Е — значит действовать!",

                Boss_Intro: "Доброе утро. К нам поступило много обращений о помощи от тех, кого задержали за препятствование деятельности профсоюзов",
                Boss_Q1Investigation: "Я знаю последовательность расследования. Пожалуйста, заполните Поручение, а затем я посетю Исправительный Центр",
                Boss_Q1: "Возможно их задержали по справедливости, у города-государства Бриллиант много противников: как внешних, так и внутренних",
                Boss_Q2: "Руководство Бриллианта слишком обеспокоено поиском предателей, нужно навести в этом порядок!",
                Boss_Q1InvestigationA: "Вот оно. Теперь вы можете свободно проводить расследование. Не забудьте посетить комнату хранения оружия",
                Boss_Q1A1: "Мой опыт подсказывает, что все обратившиеся за помощью не виновны. Но нам нужны доказательства. И вы их найдете. Заодно расследуете деятельность профсоюзов",
                Boss_Q2A1: "Действительно, у города-государства Бриллиант много противников, но обратившиеся за нашей помощью не должны. Нам нужны доказательства этого.",
                Boss_Q3: "От кого поступили обращения?",
                Boss_Q3A1: "В списке значится – Музыкант, Механик, Медик. Посетите их в Исправительном Центре"
            },
            "UA": {
                "Attorney": "Адвокат",
                "NPC_Secretary": "Секретар",
                "NPC_Boss": "Керівник",
                "PROP_ConOffice": "Інформаційна станція в офісі",

                "Reaction_Say": "каже",
                "Reaction_Display": "показує на екрані",

                ConOffice_Initial: "Це Інформаційна Консоль. Про що ви хочете дізнатись?",
                ConOffice_GunHandling: "Використання Стрілецького Озброєння",
                ConOffice_GunHandlingText: "Працівник може отримати пістолет для самозахисту. Це однозарядна зброя, яка запускає снаряди, які летять прямо, розколюються в повітрі на менші частини або навіть переслідують супротивників. Це чудо техніки! Будьте обережні з ним поряд з друзями та партнерами.",
                ConOffice_HistoryReview: "Історія та Суспільство",
                ConOffice_HistoryReviewText: "Протягом років містом Діамант керували королі та королеви. Потім сталась Революція, король був змушений втекти, а профспілки стали дуже впливовими і захопили владу в свої руки. Профспілки контролюють різні галузі економіки міста: Профспілка Транспорту, Профспілкове Об’єднання Виробничих Компаній, Профспілка Озеленення та Рослинництва, Профспілка Правосуддя, Профспілка Кіно і Театру, Профспілка Медицини. Військові Сили та Поліція. Ними керує Рада Профспілок. Місто Діамант має напружені стосунки з сусідньою Монархією. В самому місці Діамант набирає сил рух Дисидентів, які не згодні з діяльністю профспілок.",
                ConOffice_LawsHandbook: "Правознавство",
                ConOffice_LawsHandbookText: "Це короткий огляд законів. Кожна особа, яка перебуває під вартою, має право звернутися до слідчого від Профспілки Правосуддя. Слідчий повинен мати спеціальне Доручення, надане його начальником, яке дозволяє їм отримати доступ до місць, для збору доказів. Слідчі можуть мати при собі зброю, але її треба приховати. Військові та поліція не повинні втручатися в роботу слідчих.",
                ConOffice_CommandBack: "== НАЗАД ==",
                ConOffice_CommandShutdown: "== ВИМКНУТИ ==",

                Secretary_Intro: "Доброго ранку. Сьогодні ви прийшли вчасно! На вас чекає багато справ. Керівник у своєму кабінеті на верхньому поверсі, вона вже підготувала план роботи на сьогодні",
                Secretary_Q1OnMyWay: "Добре, вже йду",
                Secretary_Q1GoodBye: "Зустрінемось згодом!",
                Secretary_Q1WhatAreE: "Що означають ті картинки з Е?",
                Secretary_A1WhatAreE: "Це мотиваційні плакати. E — це заклик до дії та інтерактивності. Е - значить діяти!",

                Boss_Intro: "Доброго ранку. До нас надійшло багато звернень про допомогу від тих, кого затримали за перешкоджання діяльності профспілок",
                Boss_Q1Investigation: "Я знаю послідовність розслідування. Будь ласка, заповніть Доручення, а потім я відвідаю Виправний Центр",
                Boss_Q1: "Можливо їх затримали по справедливості, у міста-держави Діамант багато противників : як зовнішніх, так і внутрішніх",
                Boss_Q2: "Керівництво Діаманта занадто переймається пошуком зрадників, потрібно навести у цьому порядок!",
                Boss_Q1InvestigationA: "Ось воно. Тепер ви можете вільно проводити розслідування. Не забудьте відвідати кімнату зберігання зброї",
                Boss_Q1A1: "Мій досвід підказує, що всі ті хто звернувся за допомогою не винні. Але нам потрібні докази. І ви їх знайдете. Заодно розслідуєте діяльність профспілок",
                Boss_Q2A1: "Насправді, у міста- держави Діамант багато противників, але ті хто звернувся за нашою допомогою не винні.Нам потрібні докази цього",
                Boss_Q3: "Від кого надійшли звернення?",
                Boss_Q3A1: "У списку значиться - Музикант, Механік, Медик. Відвідайте їх у Виправному Центрі",
            }
            
        }
    }
}