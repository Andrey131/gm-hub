export type RaceType = {
  id: string;
  name: string;
  source: string;
  content: RaceContentType[];
};

export type RaceContentType = {
  blockType: string;
  title: string;
  body: string | RaceContentType[];
};

export const races: RaceType[] = [
  {
    id: "1",
    name: "Human",
    source: "PH",
    content: [
      {
        blockType: "common",
        title: "МНОГОЛИКИЕ",
        body: "Со своей склонностью к миграции и завоеваниям, люди более разнообразны физически, чем другие распространенные расы. Не существует типичной внешности человека. Рост отдельного представителя может составлять от 5 до 6 футов (от 152 до 184 сантиметров), а вес — от 125 до 250 фунтов (от 60 до 112 килограмм). Оттенок кожи у людей варьируется от почти чёрного до очень бледного, а волосы — от чёрного до светлого тонов (волнистые, кудрявые или прямые); мужчины могут носить волосы на лице, густые или редкие. Многие люди имеют примесь нечеловеческой крови, выдающей черты эльфа, орка, или предков другого происхождения. Люди достигают совершеннолетия около двадцати лет, и редко проживают одно столетие.",
      },
      {
        blockType: "common",
        title: "РАЗНООБРАЗИЕ ВО ВСЁМ",
        body: "Люди являются самыми приспособленным и амбициозным народом среди распространённых рас. Их вкусы, нравы и обычаи сильно отличаются во множестве разных земель, где они поселились. Однако там, где они селятся, они остаются надолго: строят города, стоящие веками, и великие королевства, сохраняющиеся множество столетий. У отдельного человека может быть относительно короткая продолжительность жизни, но человеческая нация и культура сохраняет традиции от своих истоков на время, намного превышающее память одного человека. Они живут сегодняшним днём, что весьма хорошо подходит для приключенческой жизни, и позволяет вдобавок строить планы на будущее, со стремлением оставить после себя прочное наследие. Индивидуально или в группах, люди легко приспосабливаются к ситуации, и всегда остаются внимательными к изменяющейся политической и социальной динамике.",
      },
      {
        blockType: "common",
        title: "ПРОЧНЫЕ ИНСТИТУТЫ",
        body: "Там, где один эльф или дварф могут взять ответственность за охрану особого места или великой тайны, человек создаёт священные порядки и институты. В то время как кланы дварфов и старейшины полуросликов передают свои традиции новым поколениям, человеческие храмы, государства, библиотеки и своды законов запечатлевают их традиции в анналах истории. Люди мечтают о бессмертии, но (за исключением тех, кто становится нежитью или достигает божественного восхождения, чтобы избежать оков смерти) достигают его, когда продолжают жить в памяти, после смерти. Хотя некоторые люди могут быть ксенофобами, в целом их общество очень смешано. На землях людей обитает большое количество нечеловеческих рас, по сравнению с количеством людей, живущих на землях нелюдей.",
      },
      {
        blockType: "common",
        title: "ВОПЛОЩЕНИЕ АМБИЦИЙ",
        body: "Люди, ищущие приключений, являются самыми смелыми и амбициозными представителями смелой и амбициозной расы.\n Они стремятся заработать славу в глазах своих товарищей, накапливая власть, богатство и популярность. Более чем другие народы люди борются за цель, а не за расширение территорий или процветание отдельных фракций.",
      },
      {
        blockType: "note",
        title: "ВТОРЫЕ ЛУЧШИЕ ДРУЗЬЯ ДЛЯ КАЖДОГО",
        body: "Так же легко как они смешиваются друг с другом, люди ассимилируются с представителями других рас. Они могут ужиться почти со всеми, хотя и редко сближаются. Люди служат послами, дипломатами, магистрами, торговцами и чиновниками всех мастей. <p/><b>О дварфах.</b> «Это крепкий народ, верные друзья, и они держат своё слово. И всё же, их жажда золота однажды погубит их». <p/><b>Об эльфах.</b> «Лучше не бродить в эльфийских лесах. Они не любят незваных гостей, и вы будете, вероятно, околдованы или изрешечены стрелами. Но если эльф сможет преодолеть проклятую расовую гордость и общаться с вами как с равным, вы можете многому у него научиться». <p/><b>О полуросликах.</b> «Трудно превзойти ужин в доме полурослика, примерно так же трудно как не проломить голову о его потолок; хорошая еда и хорошие истории перед уютным тёплым очагом. Если бы у полуросликов была бы еще толика амбиций, они могли бы действительно чего-то стоить».",
      },
      {
        blockType: "common",
        title: "ЧЕЛОВЕЧЕСКИЕ ИМЕНА И ЭТНОСЫ",
        body: "Поскольку культура людей самая разнообразная среди всех существующих рас, у них нет типичных имён. Некоторые родители дают своим детям имена из других наречий, например, из Дварфского или Эльфийского (произносимые более или менее правильно), но большинство родителей даёт имена, связанные с культурой своего региона или традициями предков. <p/>Культура быта и физические характеристики людей могут сильно меняться в зависимости от региона. В Забытых Королевствах, например, одежда, архитектура, кухня, музыка, и литература в северо-западных землях Серебряных Пустошей отличаются от тех, что есть в далёком Тёрмише или Импилтуре на востоке, и совсем не похожи на их аналоги в далёком Кара-Туре. Физические характеристики людей различаются в соответствии с переселениями их предков, поэтому люди Серебряных Пустошей имеют все возможные сочетания цветов кожи. <p/>В Забытых Королевствах широко известны девять этнических групп, хотя более дюжины других находятся в более локализованных областях Фаэруна. Эти группы и типичные имена их представителей могут быть использованы в качестве примера, вне зависимости от того, из какого мира ваш человек.",
      },
    ],
  },
  {
    id: "2",
    name: "Gnome",
    source: "PH",
    content: [
      {
        blockType: "common",
        title: "МНОГОЛИКИЕ",
        body: "Со своей склонностью к миграции и завоеваниям, люди более разнообразны физически, чем другие распространенные расы. Не существует типичной внешности человека. Рост отдельного представителя может составлять от 5 до 6 футов (от 152 до 184 сантиметров), а вес — от 125 до 250 фунтов (от 60 до 112 килограмм). Оттенок кожи у людей варьируется от почти чёрного до очень бледного, а волосы — от чёрного до светлого тонов (волнистые, кудрявые или прямые); мужчины могут носить волосы на лице, густые или редкие. Многие люди имеют примесь нечеловеческой крови, выдающей черты эльфа, орка, или предков другого происхождения. Люди достигают совершеннолетия около двадцати лет, и редко проживают одно столетие.",
      },
      {
        blockType: "common",
        title: "РАЗНООБРАЗИЕ ВО ВСЁМ",
        body: "Люди являются самыми приспособленным и амбициозным народом среди распространённых рас. Их вкусы, нравы и обычаи сильно отличаются во множестве разных земель, где они поселились. Однако там, где они селятся, они остаются надолго: строят города, стоящие веками, и великие королевства, сохраняющиеся множество столетий. У отдельного человека может быть относительно короткая продолжительность жизни, но человеческая нация и культура сохраняет традиции от своих истоков на время, намного превышающее память одного человека. Они живут сегодняшним днём, что весьма хорошо подходит для приключенческой жизни, и позволяет вдобавок строить планы на будущее, со стремлением оставить после себя прочное наследие. Индивидуально или в группах, люди легко приспосабливаются к ситуации, и всегда остаются внимательными к изменяющейся политической и социальной динамике.",
      },
    ],
  },
  {
    id: "3",
    name: "Elf",
    source: "PH",
    content: [
      {
        blockType: "common",
        title: "СТРОЙНЫЕ И ИЗЯЩНЫЕ",
        body: "Обладая неземным изяществом и тонкими чертами, эльфы кажутся людям и представителям других рас чересчур красивыми. В среднем, они немного ниже людей, их рост колеблется от 5 до 6 футов (от 150 до 185 сантиметров). Они стройнее людей, и весят от 100 до 145 фунтов (от 45 до 65 килограмм). Мужчины и женщины почти одинакового роста, и мужчины весят лишь незначительно больше.<p/> Цвета кожи у эльфов включают в себя все человеческие оттенки, а также цвета с медным, бронзовым и голубовато-белым отливом. Волосы помимо человеческих цветов могут быть зелёными или синими, а глаза приобретать цвет жидкого золота или серебра. У эльфов не растут волосы на лице, и почти отсутствуют волосы на теле. Они предпочитают элегантную одежду ярких цветов и простые, но красивые украшения.",
      },
      {
        blockType: "common",
        title: "НЕПОДВЛАСТНЫЙ ВРЕМЕНИ ВЗГЛЯД",
        body: "Эльфы способны жить более 700 лет, что даёт им более широкий взгляд на проблемы, беспокоящие короткоживущие расы. События чаще кажутся им забавными, чем волнующими, и ими чаще движет любопытство, чем жадность. В случае мелких происшествий они чаще проявляют равнодушие и остаются в стороне. В случае же преследования цели, выполнения задания или изучения нового навыка эльфы остаются собранными и целеустремлёнными. Они не торопятся заводить друзей или врагов, а прощают еще медленнее. На мелкие оскорбления они отвечают пренебрежением, на крупные же — местью.<p/> Подобно молодым ветвям дерева эльфы проявляют гибкость перед лицом опасности. Они верят в дипломатию и предпочитают с помощью компромисса уладить разногласие прежде чем оно перешло в насилие. Они способны отступить перед лицом вторжения вглубь своих лесов, уверенные, что просто смогут подождать, пока захватчики уйдут. Но если придёт нужда, эльфы способны проявить свою воинскую сторону, продемонстрировав владение мечом, луком и стратегией.",
      },
      {
        blockType: "common",
        title: "СКРЫТЫЕ ЛЕСНЫЕ КОРОЛЕВСТВА",
        body: "Большинство эльфов живёт в маленьких лесных деревнях, спрятанных среди деревьев. Эльфы охотятся на дичь, собирают пищу и растят овощи. Их навыки и магия позволяют им прокормить себя без вырубки леса и вспахивания земли. Они талантливы в ремёслах, изготавливают качественную одежду и предметы искусства. Их контакты с другими народами обычно ограничены, но некоторые эльфы всё же преуспели в торговле, выменивая свои товары на металлы, которые эльфы не любят добывать сами. <p/>Эльфы, встречающиеся за пределами родных земель, чаще всего оказываются путешествующими менестрелями, артистами или мудрецами. Людские дворяне соревнуются за услуги эльфа-наставника, способного обучить их детей фехтованию или магии.",
      },
      {
        blockType: "common",
        title: "ИССЛЕДОВАНИЯ И ПРИКЛЮЧЕНИЯ",
        body: "Эльфы берутся за приключения из страсти к путешествиям. Благодаря большому сроку жизни, они могут посвятить столетия изучению и исследованию. Им не нравится темп человеческого общества, упорядоченный изо дня в день, но полностью меняющийся за десятилетие, и они предпочитают найти себе занятие, позволяющее им часто путешествовать, устанавливая свой собственный темп жизни. Эльфам также нравится оттачивать своё воинское мастерство, или добиваться великой волшебной мощи, и приключения способствуют этому. Некоторые могут присоединиться к повстанцам, борющимся против угнетателей, а другие становятся борцами за моральные ценности.",
      },
      {
        blockType: "common",
        title: "ЭЛЬФИЙСКИЕ ИМЕНА",
        body: "Эльфы считаются детьми, пока они не объявят себя взрослыми, где-то вскоре после сотого дня рождения. До этого времени их называют детским именем. <br/>Достигая зрелости, эльф выбирает себе новое, взрослое имя, хотя те, кто знал его под детским именем, могут продолжать пользоваться им. Имя каждого взрослого эльфа уникально, хотя может отражать имена уважаемых личностей или членов семьи. Мужские и женские имена различаются лишь незначительно, и чёткой границы тут нет. Также каждый эльф носит фамилию, обычно это сочетание нескольких эльфийских слов. Некоторые эльфы, путешествующие среди людей, переводят фамилию на Общий, другие сохраняют эльфийскую версию. <p/><b>Детские имена:</b> Ара, Брин, Валь, Дель, Иннил, Лаэль, Мелла, Наиль, Наэрис, Раэль, Ринн, Сай, Силлин, Тиа, Фанн, Фаэн, Эрин <p/><b>Мужские взрослые имена:</b> Адран, Арамиль, Араннис, Ауст, Аэлар, Бейро, Берриан, Варис, Галинндан, Ивеллиос, Иммераль, Каррик, Куарион, Лаусиан, Миндартис, Паэлиас, Перен, Риардон, Ролен, Совелисс, Тамиорн, Таривол, Терен, Хадарай, Химо, Хэйян, Эниалис, Эрдан, Эреван <p/><b>Женские взрослые имена:</b> Адрие, Альтеа, Анастрианна, Андрасте, Антинуа, Бетринна, Бирель, Вадания, Валанте, Джеленетт, Друсилиа, Йелениа, Каэлинн, Квеленна, Квиласи, Кейлет, Ксанафия, Лешанна, Лиа, Миали, Мэриэль, Найвара, Сариэль, Силакви, Теирастра, Тиа, Фелосиаль, Шава, Шанайра, Энна <p/><b>Фамилии (перевод на Общий):</b> Амакиир (Сверкающий Цветок), Амастасия (Звёздный Цветок), Галанодель (Лунный Шёпот), Ильфелкиир (Сверкающий Бутон), Ксилосент (Золотой Лепесток), Лиадон (Серебряный Лист), Найло (Ночной Бриз), Сианодель (Лунный Ручей), Холимион (Алмазная Роса)",
      },
      {
        blockType: "note",
        title: "ВЫСОКОМЕРНЫЕ, НО ЛЮБЕЗНЫЕ",
        body: "Хотя эльфы могут быть высокомерными, они обычно любезны даже с теми, кто не оправдал их высоких ожиданий. Как правило, это все не-эльфы. Но всё же, они способны найти что-то хорошее почти в каждом.<p/>О дварфах. «Дварфы – скучные, неотёсанные болваны. Но свой недостаток чувства юмора, утончённости и манер они способны компенсировать отвагой. И смею заметить, изделия их лучших кузнецов способны сравниться с эльфийскими».  <p/>О полуросликах. «Полурослики — народ простых удовольствий, и это не повод их презирать. Они хороший народ, заботятся друг о друге и ухаживают за своими садами, и они доказали, что они намного крепче, чем это может показаться, когда возникает такая необходимость».  <p/>О людях. «Вся эта поспешность, их амбиции и стремление совершить что-нибудь, прежде чем окончатся их краткие жизни — всё это кажется иногда настолько бесполезным. Но взгляните на то, чего они добились, и вы начнёте ценить их достижения. Если бы только они могли немного сбавить обороты и приобрести хоть толику изящества».",
      },
      {
        blockType: "common",
        title: "ОСОБЕННОСТИ ЭЛЬФОВ",
        body: "Ваш персонаж эльф обладает рядом разнообразных качеств, отражающих тысячелетия эльфийского совершенствования. <p/><b>Увеличение характеристик.</b> Значение вашей Ловкости увеличивается на 2. <p/><b>Возраст.</b> Несмотря на то, что физически эльфы взрослеют в том же возрасте, что и люди, их понимание о взрослении выходит за рамки физического развития, и располагается в сфере житейского опыта. Обычно эльф получает статус взрослого и взрослое имя в возрасте 100 лет, и может прожить до 750 лет. <p/><b>Мировоззрение.</b> Любое. <p/><b>Размер.</b> Рост эльфов колеблется между 5 и 6 футами (152 и 183 сантиметрами), у них стройное телосложение. Ваш размер — Средний. <p/><b>Скорость.</b> Ваша базовая скорость ходьбы составляет 30 футов. <p/><b>Тёмное зрение.</b> Привыкнув к сумраку леса и ночному небу, вы обладаете превосходным зрением в темноте и при тусклом освещении. На расстоянии в 60 футов вы при тусклом освещении можете видеть так, как будто это яркое освещение, и в темноте так, как будто это тусклое освещение. В темноте вы не можете различать цвета, только оттенки серого. <p/><b>Обострённые чувства.</b> Вы владеете навыком Восприятие. <p/><b>Наследие фей.</b> Вы совершаете с преимуществом спасброски от состояния «очарованный», и вас невозможно магически усыпить. <p/><b>Транс.</b> Эльфы не спят. Вместо этого они погружаются в глубокую медитацию, находясь в полубессознательном состоянии до 4 часов в сутки (обычно такую медитацию называют трансом). Во время этой медитации вы можете грезить о разных вещах. Некоторые из этих грёз являются ментальными упражнениями, выработанными за годы тренировок. После такого отдыха вы получаете все преимущества, которые получает человек после 8 часов сна. <p/><b>Языки.</b> Вы можете говорить, читать и писать на Общем и Эльфийском языках. Эльфийский язык текучий, с утончёнными интонациями и сложной грамматикой. Эльфийская литература богата и разнообразна, а стихи и песни известны среди представителей других рас. Многие барды учат эльфийский язык, чтобы добавить песни в свой репертуар. <p/><p/><b>Разновидности.</b> Древний раскол среди эльфийских народов привёл к возникновению трёх видов: высших эльфов, лесных эльфов и тёмных эльфов, которых обычно называют дроу. Выберите один из этих видов. В некоторых мирах они делятся еще сильнее, (например на солнечных и лунных эльфов в мире Забытых Королевств) так что если хотите, можете выбрать более уточнённый вариант. Но помимо этого в мультивселенной D&D существует множество видов эльфов. С разрешения вашего Мастера вы можете выбрать один из них.",
      },
      {
        blockType: "spoiler",
        title: "ВЫСШИЙ ЭЛЬФ",
        body: "Поскольку вы — высший эльф, у вас острый ум и вы знакомы, по крайней мере, с основами магии. Во многих мирах D&D существует два вида высших эльфов. Один вид (который включает серых эльфов и эльфов долин Серого Ястреба, сильванести Саги о Копье и солнечных эльфов Забытых Королевств) высокомерен и замкнут, считая себя выше не-эльфов и даже других эльфов. Другой вид (включающий высших эльфов Серого Ястреба, квалинести из Саги о Копье и лунных эльфов из Забытых Королевств) более распространён и дружелюбен, и часто встречается среди людей и других рас. <p/>У солнечных эльфов Фаэруна (также называемых золотыми эльфами или эльфами восхода) бронзовая кожа и волосы медного, чёрного или золотистого оттенка. У них золотые, серебристые или чёрные глаза. Лунные эльфы (также называемые серебряными или серыми эльфами) гораздо бледнее, с алебастровой кожей, имеющей иногда оттенок синего. У них часто серебристо-белые, чёрные или синие волосы, но и различные оттенки светлых, коричневых и рыжих тонов также не являются редкими. У них синие или зелёные глаза с золотыми вкраплениями. <p/><b>Увеличение характеристик.</b> Значение вашего Интеллекта увеличивается на 1. <p/><b>Владение эльфийским оружием.</b> Вы владеете длинным мечом, коротким мечом, коротким и длинным луками. <p/><b>Заговор.</b> Вы знаете один заговор из списка заклинаний волшебника. Базовой характеристикой заклинаний для его использования является Интеллект. <p/><b>Дополнительный язык.</b> Вы можете говорить, читать и писать на ещё одном языке, на ваш выбор.",
      },
      {
        blockType: "spoiler",
        title: "ЛЕСНОЙ ЭЛЬФ",
        body: "Поскольку вы — лесной эльф, у вас обострённые чувства и интуиция, и ваши стремительные ноги несут вас быстро и незаметно через ваши родные леса. Эта категория включает диких эльфов Серого Ястреба и кагонести из Саги о Копье, а также расы, называемые лесными эльфами Серого Ястреба и Забытых Королевств. В Фаэруне лесные эльфы (также называемые дикими или зелёными) являются затворниками, не доверяющими не-эльфам.<p/>Кожа лесных эльфов, как правило, имеет медный оттенок, иногда со следами зелёного. У них часто коричневые и чёрные волосы, но иногда они бывают светлого или бронзового оттенков. У них зелёные, карие или орехового цвета глаза. <p/><b>Увеличение характеристик.</b> Значение вашей Мудрости увеличивается на 1.  <p/><b>Владение эльфийским оружием.</b> Вы владеете длинным мечом, коротким мечом, коротким и длинным луком. <p/><b>Быстрые ноги.</b> Ваша базовая скорость ходьбы увеличивается до 35 футов. <p/><b>Маскировка в дикой местности.</b> Вы можете предпринять попытку спрятаться, даже если вы слабо заслонены листвой, сильным дождём, снегопадом, туманом или другими природными явлениями.",
      },
      {
        blockType: "spoiler",
        title: "ТЁМНЫЙ ЭЛЬФ (ДРОУ)",
        body: "Как дроу, вы прониклись магией Подземья, подземного царства чудес и ужасов, которое редко можно увидеть на поверхности. Вы чувствуете себя в тени как дома и благодаря своей врожденной магии учитесь призывать и свет, и тьму. У ваших сородичей обычно ярко-белые волосы и разноцветная сероватая кожа. <p/>Культ богини Лолс, Королевы Пауков, развратил некоторые из старейших городов дроу, особенно в мирах Орта и Торила. Эберрон, Кринн и другие царства на данный момент избежали влияния культа. Везде, где таится культ, герои-дроу стоят на передовой в войне против него, стремясь разорвать паутину Лолс. <p/>Подробнее с лором дроу можно ознакомится в статье «Бестиарий: Дроу» <p/><b>Увеличение характеристик.</b> Значение вашей Харизмы увеличивается на 1. <p/><b>Превосходное тёмное зрение.</b> Ваше тёмное зрение имеет радиус 120 футов. <p/><b>Чувствительность к солнцу.</b> Вы совершаете с помехой броски атаки и проверки Мудрости (Восприятие), основанные на зрении, если вы, цель вашей атаки или изучаемый предмет расположены на прямом солнечном свете. <p/><b>Магия дроу.</b> Начиная с 3-го уровня, вы можете накладывать заклинание огонь фей [faerie fire] с помощью этой особенности. Начиная с 5-го уровня вы также можете накладывать заклинание тьма [darkness] с помощью этой особенности. После накладывания одного из этих заклинаний с помощью особенности вы должны закончить продолжительный отдых, прежде чем сможете вновь наложить его таким образом.  <p/>Кроме того, вы знаете заговор пляшущие огоньки [dancing lights]. Базовой характеристикой для этих заклинаний является Харизма. <p/><b>Владение оружием дроу.</b> Вы владеете рапирой, коротким мечом и ручным арбалетом.",
      },
    ],
  },
  {
    id: "4",
    name: "Dwarf",
    source: "PH",
    content: [
      {
        blockType: "common",
        title: "МНОГОЛИКИЕ",
        body: "Со своей склонностью к миграции и завоеваниям, люди более разнообразны физически, чем другие распространенные расы. Не существует типичной внешности человека. Рост отдельного представителя может составлять от 5 до 6 футов (от 152 до 184 сантиметров), а вес — от 125 до 250 фунтов (от 60 до 112 килограмм). Оттенок кожи у людей варьируется от почти чёрного до очень бледного, а волосы — от чёрного до светлого тонов (волнистые, кудрявые или прямые); мужчины могут носить волосы на лице, густые или редкие. Многие люди имеют примесь нечеловеческой крови, выдающей черты эльфа, орка, или предков другого происхождения. Люди достигают совершеннолетия около двадцати лет, и редко проживают одно столетие.",
      },
      {
        blockType: "common",
        title: "РАЗНООБРАЗИЕ ВО ВСЁМ",
        body: "Люди являются самыми приспособленным и амбициозным народом среди распространённых рас. Их вкусы, нравы и обычаи сильно отличаются во множестве разных земель, где они поселились. Однако там, где они селятся, они остаются надолго: строят города, стоящие веками, и великие королевства, сохраняющиеся множество столетий. У отдельного человека может быть относительно короткая продолжительность жизни, но человеческая нация и культура сохраняет традиции от своих истоков на время, намного превышающее память одного человека. Они живут сегодняшним днём, что весьма хорошо подходит для приключенческой жизни, и позволяет вдобавок строить планы на будущее, со стремлением оставить после себя прочное наследие. Индивидуально или в группах, люди легко приспосабливаются к ситуации, и всегда остаются внимательными к изменяющейся политической и социальной динамике.",
      },
    ],
  },
  {
    id: "5",
    name: "Half-orc",
    source: "PH",
    content: [
      {
        blockType: "common",
        title: "МНОГОЛИКИЕ",
        body: "Со своей склонностью к миграции и завоеваниям, люди более разнообразны физически, чем другие распространенные расы. Не существует типичной внешности человека. Рост отдельного представителя может составлять от 5 до 6 футов (от 152 до 184 сантиметров), а вес — от 125 до 250 фунтов (от 60 до 112 килограмм). Оттенок кожи у людей варьируется от почти чёрного до очень бледного, а волосы — от чёрного до светлого тонов (волнистые, кудрявые или прямые); мужчины могут носить волосы на лице, густые или редкие. Многие люди имеют примесь нечеловеческой крови, выдающей черты эльфа, орка, или предков другого происхождения. Люди достигают совершеннолетия около двадцати лет, и редко проживают одно столетие.",
      },
      {
        blockType: "common",
        title: "РАЗНООБРАЗИЕ ВО ВСЁМ",
        body: "Люди являются самыми приспособленным и амбициозным народом среди распространённых рас. Их вкусы, нравы и обычаи сильно отличаются во множестве разных земель, где они поселились. Однако там, где они селятся, они остаются надолго: строят города, стоящие веками, и великие королевства, сохраняющиеся множество столетий. У отдельного человека может быть относительно короткая продолжительность жизни, но человеческая нация и культура сохраняет традиции от своих истоков на время, намного превышающее память одного человека. Они живут сегодняшним днём, что весьма хорошо подходит для приключенческой жизни, и позволяет вдобавок строить планы на будущее, со стремлением оставить после себя прочное наследие. Индивидуально или в группах, люди легко приспосабливаются к ситуации, и всегда остаются внимательными к изменяющейся политической и социальной динамике.",
      },
    ],
  },
  {
    id: "6",
    name: "Halfling",
    source: "PH",
    content: [
      {
        blockType: "common",
        title: "МНОГОЛИКИЕ",
        body: "Со своей склонностью к миграции и завоеваниям, люди более разнообразны физически, чем другие распространенные расы. Не существует типичной внешности человека. Рост отдельного представителя может составлять от 5 до 6 футов (от 152 до 184 сантиметров), а вес — от 125 до 250 фунтов (от 60 до 112 килограмм). Оттенок кожи у людей варьируется от почти чёрного до очень бледного, а волосы — от чёрного до светлого тонов (волнистые, кудрявые или прямые); мужчины могут носить волосы на лице, густые или редкие. Многие люди имеют примесь нечеловеческой крови, выдающей черты эльфа, орка, или предков другого происхождения. Люди достигают совершеннолетия около двадцати лет, и редко проживают одно столетие.",
      },
      {
        blockType: "common",
        title: "РАЗНООБРАЗИЕ ВО ВСЁМ",
        body: "Люди являются самыми приспособленным и амбициозным народом среди распространённых рас. Их вкусы, нравы и обычаи сильно отличаются во множестве разных земель, где они поселились. Однако там, где они селятся, они остаются надолго: строят города, стоящие веками, и великие королевства, сохраняющиеся множество столетий. У отдельного человека может быть относительно короткая продолжительность жизни, но человеческая нация и культура сохраняет традиции от своих истоков на время, намного превышающее память одного человека. Они живут сегодняшним днём, что весьма хорошо подходит для приключенческой жизни, и позволяет вдобавок строить планы на будущее, со стремлением оставить после себя прочное наследие. Индивидуально или в группах, люди легко приспосабливаются к ситуации, и всегда остаются внимательными к изменяющейся политической и социальной динамике.",
      },
    ],
  },
];
