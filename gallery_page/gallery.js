
window.onload = function(){
    let preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
    randomHud();
};

const questions = [
    {
        rapper: 'Tveth feat. Lil Smooky',
        tracker: '𐤏',
        track: '/music/tveth/TVETH-pusto.mp3',
        question: 'Answer1 ??',
        options: [
            'Tveth feat. Lil Smooky',
            'Jeembo feat. Boulevard Depo',
            'Paharaoh',
            'BasicBoy feat. TomasMraz',
            '10 AGE',
            'Feduk',
        ],
        nickOptions:[
            'Tveth',
            'Jeembo',
            'Pharaoh',
            'BasicBoy',
            '10 AGE',
            'Feduk',
        ],
        nameOptions:[
            'Дмитрий Дмитриев',
            'Давид Джангирян',
            'Глеб Голубин',
            'Максим Окунев',
            'Дмитрий Панов',
            'Фёдор Инсаров',
        ],
        description:[
            'Первый музыкальные пробы пера в жанре хип-хопа пробует делать в 2009 году со своими товарищами по граффити.В 2011 выпускает свой первый релиз "Трапеза Помола". В ноябре 2017-го вступил в букинг-агенство Booking Machine.',
            'Российский хип-хоп-исполнитель армянского происхождения, автор песен, бывший участник творческих объединений «Dead Dynasty», «YungRussia» и «Booking Machine».',
            'Бывший участник Grindhouse и YungRussia, ныне — лидер творческого объединения Dead Dynasty. Творческое объединение Dead Dynasty, в котором состоит Pharaoh, являлось участником движения YungRussia, созданного музыкантом из Уфы Boulevard Depo.',
            'Российский хип-хоп исполнитель, автор песен, бывший участник движения молодых рэп-исполнителей «YungRussia» и действующий член творческого объединения «Dopeclvb».',
            'Дми́трий Алекса́ндрович Пано́в, более известный под сценическим псевдонимом 10AGE, — российский рэп-исполнитель и автор песен. Карьеру хип-хоп-музыканта начал в 2018 году, с тех пор выпустив множество синглов и один мини-альбом. Состоит на лейбле Legacy Music.',
            'Российский певец, хип-хоп- и хаус-рэп-исполнитель и автор песен. Сольную карьеру начал в 2010 году, с тех пор выпустил два мини-альбома и семь студийных альбомов. Дебютный альбом «Сезон пожарче», записанный совместно с Toobe, вышел 3 июня 2013 года.',
        ],
        photo:[
            'url(/img/tveth.jpg)',
            'url(/img/jeembo.jpg)',
            'url(/img/pharaoh.jpg)',
            'url(/img/basicboy.jpg)',
            'url(/img/10AGE.jpg)',
            'url(/img/feduk.jpg)',
        ],
        music: [
            '/music/tveth/TVETH-pusto.mp3',
            '/music/jeembo/JEEMBO_Chainsaw.mp3',
            '/music/pharaoh/pharaoh_puti.mp3',
            '/music/BasicBoy/BasicBoyStol.mp3',
            '/music/10AGE/10AGEZoo.mp3',
            '/music/feduk/feduk-27.mp3',
        ],

        rightAnswer: 0,
        avatar: 'url(/img/tveth.jpg)'
    },
    {
        rapper: 'Pharaoh',
        tracker: '𐤏',
        track: '/music/pharaoh/pharaoh_puti.mp3',
        question: 'Answer1 ??',
        options: [
            'Tveth feat. Lil Smooky',
            'Jeembo feat. Boulevard Depo',
            'Paharaoh',
            'BasicBoy feat. TomasMraz',
            '10 AGE',
            'Feduk',
        ],
        nickOptions:[
            'Tveth',
            'Jeembo',
            'Pharaoh',
            'BasicBoy',
            '10 AGE',
            'Feduk',
        ],
        nameOptions:[
            'Дмитрий Дмитриев',
            'Давид Джангирян',
            'Глеб Голубин',
            'Максим Окунев',
            'Дмитрий Панов',
            'Фёдор Инсаров',
        ],
        description:[
            'Первый музыкальные пробы пера в жанре хип-хопа пробует делать в 2009 году со своими товарищами по граффити.В 2011 выпускает свой первый релиз "Трапеза Помола". В ноябре 2017-го вступил в букинг-агенство Booking Machine.',
            'Российский хип-хоп-исполнитель армянского происхождения, автор песен, бывший участник творческих объединений «Dead Dynasty», «YungRussia» и «Booking Machine».',
            'Бывший участник Grindhouse и YungRussia, ныне — лидер творческого объединения Dead Dynasty. Творческое объединение Dead Dynasty, в котором состоит Pharaoh, являлось участником движения YungRussia, созданного музыкантом из Уфы Boulevard Depo.',
            'Макси́м И́горевич О́кунев, более известный под псевдонимом Basic Boy — российский хип-хоп исполнитель, автор песен, бывший участник движения молодых рэп-исполнителей «YungRussia» и действующий член творческого объединения «Dopeclvb»',
            'Дми́трий Алекса́ндрович Пано́в, более известный под сценическим псевдонимом 10AGE, — российский рэп-исполнитель и автор песен. Карьеру хип-хоп-музыканта начал в 2018 году, с тех пор выпустив множество синглов и один мини-альбом. Состоит на лейбле Legacy Music.',
            'Российский певец, хип-хоп- и хаус-рэп-исполнитель и автор песен. Сольную карьеру начал в 2010 году, с тех пор выпустил два мини-альбома и семь студийных альбомов. Дебютный альбом «Сезон пожарче», записанный совместно с Toobe, вышел 3 июня 2013 года.',
        ],
        photo:[
            'url(/img/tveth.jpg)',
            'url(/img/jeembo.jpg)',
            'url(/img/pharaoh.jpg)',
            'url(/img/basicboy.jpg)',
            'url(/img/10AGE.jpg)',
            'url(/img/feduk.jpg)',
        ],
        music: [
            '/music/tveth/TVETH-pusto.mp3',
            '/music/jeembo/JEEMBO_Chainsaw.mp3',
            '/music/pharaoh/pharaoh_puti.mp3',
            '/music/BasicBoy/BasicBoyStol.mp3',
            '/music/10AGE/10AGEZoo.mp3',
            '/music/feduk/feduk-27.mp3',
        ],
    
        rightAnswer: 2,
        avatar: 'url(/img/pharaoh.jpg)'
    },
    {
        rapper: 'Boulevard Depo',
        tracker: '𐤏',
        track: '/music/boulevard/Boulevard_DRUG.mp3',
        question: 'Answer2 ??',
        options: [
            'i6ix1ne',
            'Pharaoh',
            'Lil Morty',
            'Feduk',
            'Boulevard Depo',
            'Murda Killa',
        ],
        photo:[
            'url(/img/i61.jpg)',
            'url(/img/pharaoh.jpg)',
            'url(/img/morty.jpg)',
            'url(/img/feduk.jpg)',
            'url(/img/boulevar.jpg)',
            'url(/img/murda.jpg)',
        ],
        nickOptions:[
            'i61',
            'Pharaoh',
            'Lil Morty',
            'Feduk',
            'Boulevard Depo aka PowerPuff luv',
            'Murda Killa',
        ],
        music: [
            '/music/i61/i61.mp3',
            '/music/pharaoh/pharaoh_puti.mp3',
            '/music/morty/lil-morty.mp3',
            '/music/feduk/feduk-27.mp3',
            '/music/boulevard/Boulevard_DRUG.mp3',
            '/music/murda/Murda Killa.mp3',
        ],
        nameOptions:[
            'Фёдор Приходов',
            'Глеб Голубин',
            'Вячеслав Михайлов',
            'Фёдор Инсаров',
            'Артём  Кулик',
            'Максим Решетников',
        ],
        description:[
            'i61 (Айсиксван) – рэп-исполнитель. В детские годы слушал Многоточие и 50 Cent, увлекался граффити. Начал заниматься музыкой в 15 лет – именно в этом возрасте впервые читает рэп, пробуя себя в фристайле. Первый творческий продукт – релиз "Коты и плагиат". 2012 год – образование объединения "Dopeclvb", в которое входит Федор.',
            'Российский хип-хоп-исполнитель. Бывший участник Grindhouse и YungRussia, ныне — лидер творческого объединения Dead Dynasty.',
            'Рэпер из Харькова. Бывший участник объединения Dead Dynasty.',
            'Российский певец, хип-хоп- и хаус-рэп-исполнитель и автор песен. Сольную карьеру начал в 2010 году, с тех пор выпустил два мини-альбома и семь студийных альбомов.',
            'Артём Сергеевич Кулик, более известный под сценическим псевдонимом Boulevard Depo — российский хип-хоп исполнитель, автор песен, бывший участник и создатель крупного творческого объединения YungRussia. За свою музыкальную карьеру успел выпустить 5 студийных альбомов, 4 микстейпа, 4 мини-альбома и 7 синглов.',
            'Российский хип-хоп-исполнитель. Начал заниматься творчеством в 2012 году, участвовал в текстовом батле.',
        ],


        avatar: 'url(/img/boulevar.jpg)',
        rightAnswer: 4
    },
    {
        rapper: 'Jeembo',
        tracker: '𐤏',
        track: '/music/jeembo/JEEMBO_Chainsaw.mp3',
        question: 'Answer3 ??',
        options: [
            'Баста',
            'Jeembo',
            'Boulevard Depo',
            'BasicBoy',
            'i6ix1ne',
            'Guf',
        ],
        photo:[
            'url(/img/basta.jpg)',
            'url(/img/jeembo.jpg)',
            'url(/img/boulevar.jpg)',
            'url(/img/basicboy.jpg)',
            'url(/img/i61.jpg)',
            'url(/img/guf.jpeg)',
        ],
        nickOptions:[
            'Баста aka Nintendo aka Ноггано',
            'Jeembo',
            'Boulevard Depo aka PowerPuff luv',
            'Basic Boy',
            'i61',
            'Гуф',
        ],
        music: [
            '/music/basta/basta.mp3',
            '/music/jeembo/JEEMBO_Chainsaw.mp3',
            '/music/boulevard/Boulevard_DRUG.mp3',
            '/music/BasicBoy/BasicBoyStol.mp3',
            '/music/i61/i61.mp3',
            '/music/guf/GUF.mp3',
        ],
        nameOptions:[
            'Василий Вакуленко',
            'Давид Джангирян',
            'Артём Кулик',
            'Максим Окунев',
            'Фёдор Приходов',
            'Алексей Долматов',
        ],
        description:[
            'Российский музыкант, телерадиоведущий, актёр, сценарист, режиссёр и продюсер. С 2007 года — совладелец лейбла «Gazgolder». С октября 2019 года — владелец футбольного клуба СКА.',
            'Российский хип-хоп-исполнитель армянского происхождения, автор песен, бывший участник творческих объединений «Dead Dynasty», «YungRussia» и «Booking Machine»',
            'Артём Сергеевич Кулик, более известный под сценическим псевдонимом Boulevard Depo — российский хип-хоп исполнитель, автор песен, бывший участник и создатель крупного творческого объединения YungRussia. За свою музыкальную карьеру успел выпустить 5 студийных альбомов, 4 микстейпа, 4 мини-альбома и 7 синглов.',
            'Макси́м И́горевич О́кунев, более известный под псевдонимом Basic Boy — российский хип-хоп исполнитель, автор песен, бывший участник движения молодых рэп-исполнителей «YungRussia» и действующий член творческого объединения «Dopeclvb»',
            'i61 (Айсиксван) – рэп-исполнитель. В детские годы слушал Многоточие и 50 Cent, увлекался граффити. Начал заниматься музыкой в 15 лет – именно в этом возрасте впервые читает рэп, пробуя себя в фристайле. Первый творческий продукт – релиз "Коты и плагиат". 2012 год – образование объединения "Dopeclvb", в которое входит Федор.',
            'Российский рэп-исполнитель, сооснователь и участник группы CENTR. Сооснователь лейбла «ЦАО Records», основатель лейбла «ZM Nation». Обладатель премий RMA, Rock Alternative Music Prize и других.',
        ],
        avatar: 'url(/img/jeembo.jpg)',
        rightAnswer: 1
    },
    {
        rapper: 'Баста',
        tracker: '𐤏',
        track: '/music/basta/basta.mp3',
        question: 'Answer3 ??',
        options: [
            'Баста',
            'Jeembo',
            'Boulevard Depo',
            'BasicBoy',
            'i6ix1ne',
            'Guf',
        ],
        photo:[
            'url(/img/basta.jpg)',
            'url(/img/jeembo.jpg)',
            'url(/img/boulevar.jpg)',
            'url(/img/basicboy.jpg)',
            'url(/img/i61.jpg)',
            'url(/img/guf.jpeg)',
        ],
        nickOptions:[
            'Баста aka Nintendo aka Ноггано',
            'Jeembo',
            'Boulevard Depo aka PowerPuff luv',
            'Basic Boy',
            'i61',
            'Гуф',
        ],
        music: [
            '/music/basta/basta.mp3',
            '/music/jeembo/JEEMBO_Chainsaw.mp3',
            '/music/boulevard/Boulevard_DRUG.mp3',
            '/music/BasicBoy/BasicBoyStol.mp3',
            '/music/i61/i61.mp3',
            '/music/guf/GUF.mp3',
        ],
        nameOptions:[
            'Василий Вакуленко',
            'Давид Джангирян',
            'Артём Кулик',
            'Максим Окунев',
            'Фёдор Приходов',
            'Алексей Долматов',
        ],
        description:[
            'Российский музыкант, телерадиоведущий, актёр, сценарист, режиссёр и продюсер. С 2007 года — совладелец лейбла «Gazgolder». С октября 2019 года — владелец футбольного клуба СКА.',
            'Российский хип-хоп-исполнитель армянского происхождения, автор песен, бывший участник творческих объединений «Dead Dynasty», «YungRussia» и «Booking Machine»',
            'Артём Сергеевич Кулик, более известный под сценическим псевдонимом Boulevard Depo — российский хип-хоп исполнитель, автор песен, бывший участник и создатель крупного творческого объединения YungRussia. За свою музыкальную карьеру успел выпустить 5 студийных альбомов, 4 микстейпа, 4 мини-альбома и 7 синглов.',
            'Макси́м И́горевич О́кунев, более известный под псевдонимом Basic Boy — российский хип-хоп исполнитель, автор песен, бывший участник движения молодых рэп-исполнителей «YungRussia» и действующий член творческого объединения «Dopeclvb»',
            'i61 (Айсиксван) – рэп-исполнитель. В детские годы слушал Многоточие и 50 Cent, увлекался граффити. Начал заниматься музыкой в 15 лет – именно в этом возрасте впервые читает рэп, пробуя себя в фристайле. Первый творческий продукт – релиз "Коты и плагиат". 2012 год – образование объединения "Dopeclvb", в которое входит Федор.',
            'Российский рэп-исполнитель, сооснователь и участник группы CENTR. Сооснователь лейбла «ЦАО Records», основатель лейбла «ZM Nation». Обладатель премий RMA, Rock Alternative Music Prize и других.',
        ],
        avatar: 'url(/img/basta.jpg)',
        rightAnswer: 0
    },
    {
        rapper: 'Rocket',
        tracker: '𐤏',
        track: '/music/rokcet/ROCKET.mp3',
        question: 'Answer3 ??',
        options: [
            'Баста',
            'Jeembo',
            'Boulevard Depo',
            'BasicBoy',
            'i6ix1ne',
            'Rocket',
        ],
        photo:[
            'url(/img/basta.jpg)',
            'url(/img/jeembo.jpg)',
            'url(/img/boulevar.jpg)',
            'url(/img/basicboy.jpg)',
            'url(/img/i61.jpg)',
            'url(/img/rocket.jpg)',
        ],
        nickOptions:[
            'Баста aka Nintendo aka Ноггано',
            'Jeembo',
            'Boulevard Depo aka PowerPuff luv',
            'Basic Boy',
            'i61',
            'Гуф',
        ],
        music: [
            '/music/basta/basta.mp3',
            '/music/jeembo/JEEMBO_Chainsaw.mp3',
            '/music/boulevard/Boulevard_DRUG.mp3',
            '/music/BasicBoy/BasicBoyStol.mp3',
            '/music/i61/i61.mp3',
            '/music/rokcet/ROCKET.mp3',
        ],
        nameOptions:[
            'Василий Вакуленко',
            'Давид Джангирян',
            'Артём Кулик',
            'Максим Окунев',
            'Фёдор Приходов',
            'Дмитрий  Ухин ',
        ],
        description:[
            'Российский музыкант, телерадиоведущий, актёр, сценарист, режиссёр и продюсер. С 2007 года — совладелец лейбла «Gazgolder». С октября 2019 года — владелец футбольного клуба СКА.',
            'Российский хип-хоп-исполнитель армянского происхождения, автор песен, бывший участник творческих объединений «Dead Dynasty», «YungRussia» и «Booking Machine»',
            'Артём Сергеевич Кулик, более известный под сценическим псевдонимом Boulevard Depo — российский хип-хоп исполнитель, автор песен, бывший участник и создатель крупного творческого объединения YungRussia. За свою музыкальную карьеру успел выпустить 5 студийных альбомов, 4 микстейпа, 4 мини-альбома и 7 синглов.',
            'Макси́м И́горевич О́кунев, более известный под псевдонимом Basic Boy — российский хип-хоп исполнитель, автор песен, бывший участник движения молодых рэп-исполнителей «YungRussia» и действующий член творческого объединения «Dopeclvb»',
            'i61 (Айсиксван) – рэп-исполнитель. В детские годы слушал Многоточие и 50 Cent, увлекался граффити. Начал заниматься музыкой в 15 лет – именно в этом возрасте впервые читает рэп, пробуя себя в фристайле. Первый творческий продукт – релиз "Коты и плагиат". 2012 год – образование объединения "Dopeclvb", в которое входит Федор.',
            'Рэп-исполнитель. До известности занимался ресейлом одежды. Музыкальную карьеру начал в 2016-ом, когда представил EP "mood+-"',
        ],
        avatar: 'url(/img/rocket.jpg)',
        rightAnswer: 5
    },
    {
        rapper: 'Егор Крид feat. OG BUDA',
        tracker: '𐤏',
        track: '/music/kreed/egor_krid_zdraste.mp3',
        question: 'Answer 4 ??',
        options: [
            'Егор Крид feat. OG BUDA',
            'Тимати feat. Джиган',
            'Скруджи feat. Кристина Си',
            'Саша Скул feat. MurdaKilla',
            'Lizer feat. Flash',
            'Хаски',
        ],
        photo:[
            'url(/img/kreed.jpg)',
            'url(/img/timati.jpg)',
            'url(/img/skrudzhi.jpg)',
            'url(/img/skul.jpg)',
            'url(/img/lizer.jpg)',
            'url(/img/haski.jpg)',
        ],
        nickOptions:[
            'Егор Крид',
            'Тимати',
            'Скруджи',
            'Саша Скул',
            'Lizer',
            'Хаски',
        ],
        music: [
            '/music/kreed/egor_krid_zdraste.mp3',
            '/music/timati/timati.mp3',
            '/music/scryji/skrudzhi.mp3',
            '/music/skull/sasha.mp3',
            '/music/lizer/FLESH_LIZER.mp3',
            '/music/haski/haski.mp3',
        ],
        nameOptions:[
            'Егор Булаткин',
            'Тимур Юнуосв',
            'Эдуард Выграновский',
            'Александр Ткач',
            'Арсе́н Магома́дов',
            'Дмитрий Кузнецов',
        ],
        description:[
            'Российский певец, рэпер, автор песен, актёр. Сольную карьеру начал в 2011 году под псевдонимом «KReeD», сейчас выступает под именем Егор Крид. Является автором и исполнителем собственных песен.',
            'Российский хип-хоп-исполнитель, певец, музыкальный продюсер, актёр и предприниматель. Выпускник «Фабрики звёзд 4»',
            'Музыкант и рэп-исполнитель, участник лейбла Black Star. Его творчество – это мрачный андерграунд, музыка улиц и подворотен.',
            'Российский хип-хоп-исполнитель, один из основателей группы «Бухенвальд Флава».',
            'Рэп-исполнитель, автор песен, более известный по псевдониму LIZER. Бывший участник рэп-объединения «Закат 99.1»',
            'Российский хип-хоп-исполнитель. Известен необычной манерой исполнения песен, мрачными текстами и сложной рифмовкой с использованием ассонанса и аллитерации.',
        ],
        avatar: 'url(/img/kreed.jpg)',
        rightAnswer: 0
    },
    {
        rapper: 'Morgenstern',
        tracker: '𐤏',
        track: '/music/morgen/TEASER.mp3',
        question: 'Answer3 ??',
        options: [
            'ATL',
            'Morgenstern',
            'Boulevard Depo',
            'Truwer',
            'i6ix1ne',
            'Basic Boy',
        ],
        photo:[
            'url(/img/atl.jpg)',
            'url(/img/morgen.jpg)',
            'url(/img/boulevar.jpg)',
            'url(/img/truwer.jpg)',
            'url(/img/i61.jpg)',
            'url(/img/basicboy.jpg)',
        ],
        nickOptions:[
            'ATL',
            'Morgenstern',
            'Boulevard Depo aka PowerPuff luv',
            'Truwer',
            'i61',
            'BasicBoy',
        ],
        music: [
            '/music/atl/atl.mp3',
            '/music/morgen/morgenshtern.mp3',
            '/music/boulevard/Boulevard_DRUG.mp3',
            '/music/truwer/Truwer.mp3',
            '/music/i61/i61.mp3',
            '/music/BasicBoy/BasicBoyStol.mp3',
        ],
        nameOptions:[
            'Сергей Круппов',
            'Алишер Моргенштерн',
            'Артём Кулик',
            'Саян Жимбаев',
            'Фёдор Приходов',
            'Максим Окунев',,
        ],
        description:[
            'Российский хип-хоп-исполнитель. Бывший участник группы Aztecs, участник ACIDHOUZE',
            'Российский рэп- и поп-исполнитель, музыкант, шоумен. Первую известность получил в 2017 году благодаря пародиям на популярных музыкальных исполнителей того времени, которые публиковал на YouTube.',
            'Артём Сергеевич Кулик, более известный под сценическим псевдонимом Boulevard Depo — российский хип-хоп исполнитель, автор песен, бывший участник и создатель крупного творческого объединения YungRussia. За свою музыкальную карьеру успел выпустить 5 студийных альбомов, 4 микстейпа, 4 мини-альбома и 7 синглов.',
            'Саян Жимбаев, прославившийся под псевдонимом Truwer, родился 17 июля 1994 года. Его родной город Павлодар находится на северо-востоке Казахстана, недалеко от границы с Россией. Возможно, эта близость определяет языковые предпочтения музыканта, который, несмотря на национальность, читает рэп на русском языке.',
            'i61 (Айсиксван) – рэп-исполнитель. В детские годы слушал Многоточие и 50 Cent, увлекался граффити. Начал заниматься музыкой в 15 лет – именно в этом возрасте впервые читает рэп, пробуя себя в фристайле. Первый творческий продукт – релиз "Коты и плагиат". 2012 год – образование объединения "Dopeclvb", в которое входит Федор.',
            'Макси́м И́горевич О́кунев, более известный под псевдонимом Basic Boy — российский хип-хоп исполнитель, автор песен, бывший участник движения молодых рэп-исполнителей «YungRussia» и действующий член творческого объединения «Dopeclvb»',
        ],
        avatar: 'url(/img/morgen.jpg)',
        rightAnswer: 1
    },
    {
        rapper: 'playingtheangel',
        tracker: '𐤏',
        track: '/music/playingtheangel/playingtheangel_vtrecl.mp3',
        question: 'Answer 5 ??',
        options: [
            '10 AGE',
            'Ганвест',
            'ATL',
            'Jah Khalib',
            'pyrikenesis',
            'playingtheangel',
        ],
        photo:[
            'url(/img/10AGE.jpg)',
            'url(/img/ganvest.jpg)',
            'url(/img/atl.jpg)',
            'url(/img/jah.jpg)',
            'url(/img/pyro.jpg)',
            'url(/img/playingtheangel.jpg)',
        ],
        
        music: [
            '/music/10AGE/10AGEZoo.mp3',
            '/music/ganvest/ganvest.mp3',
            '/music/atl/atl.mp3',
            '/music/jah/jah.mp3',
            '/music/pyro/pyrokinesis.mp3',
            '/music/playingtheangel/playingtheangel_vtrecl.mp3',
        ],
        nickOptions:[
            '10 AGE',
            'Ганвест',
            'ATL',
            'Jah Khalib',
            'pyrikenesis',
            'playingtheangel',
        ],
        nameOptions:[
            'Дмитрий Панов',
            'Руслан Гоминов',
            'Сергей Круппов',
            'Бахтияр Мамедов',
            'Андрей Федорович',
            'Юрий Перфилов',
        ],
        description:[
            'Дми́трий Алекса́ндрович Пано́в, более известный под сценическим псевдонимом 10AGE, — российский рэп-исполнитель и автор песен. Карьеру хип-хоп-музыканта начал в 2018 году, с тех пор выпустив множество синглов и один мини-альбом. Состоит на лейбле Legacy Music.',
            'Казахстанский и российский хип-хоп- и рэп-исполнитель. Стал известен благодаря таким песням как «Дурман» и «Никотин»',
            'Российский хип-хоп-исполнитель. Бывший участник группы Aztecs, участник ACIDHOUZE',
            'Казахстанский русскоязычный рэпер, певец, битмейкер и продюсер.',
            'Популярный рэп- и хип-хоп-исполнитель российского музыкального андеграунда.',
            'Рэп-исполнитель. Состоял в "#каждаябарбистерва" – объединении, которое было создано Юрой и его товарищами.'
        ],
        avatar: 'url(/img/playingtheangel.jpg)',
        rightAnswer: 5
        
    },
    {
        rapper: 'T-fest',
        tracker: '𐤏',
        track: '/music/t-fest/t-fest_modost.mp3',
        question: 'Answer 6 ??',
        options: [
            'Face',
            'Morgenstern',
            'T-Fest',
            'Johnyboy',
            'ST',
            'Мот',
        ],
        photo:[
            'url(/img/face.jpg)',
            'url(/img/morgen.jpg)',
            'url(/img/tfest.jpg)',
            'url(/img/johny.jpg)',
            'url(/img/st.jpg)',
            'url(/img/mot.jpg)',
        ],
        music: [
            '/music/face/face.mp3',
            '/music/morgen/morgenshtern.mp3',
            '/music/t-fest/t-fest_modost.mp3',
            '/music/johny/johnyboy.mp3',
            '/music/st/ST.mp3',
            '/music/mot/byanka.mp3',
        ],
        nickOptions:[
            'Face',
            'Morgenstern',
            'T-Fest',
            'Johnyboy',
            'ST',
            'Мот',
        ],
        nameOptions:[
            'Иван Дремин',
            'Алишер Моргенштерн',
            'Кирилл Незборецкий',
            'Денис Василенко',
            'Алексáндр Степáнов',
            'Матвей Мельников',
        ],
        description:[
            'Face – рэп-исполнитель, получивший широкую известность после выхода клипа на трек «Гоша Рубчинский». Его раннее творчество, полное пародийного юмора и отсылок к молодежной интернет-культуре, относят к жанру «мем-рэп», но уже третий альбом «Пути неисповедимы» был наполнен остросоциальной лирикой и обострял злободневные проблемы российской действительности',
            'Российский рэп- и поп-исполнитель, музыкант, шоумен. Первую известность получил в 2017 году благодаря пародиям на популярных музыкальных исполнителей того времени, которые публиковал на YouTube.',
            'Хип-хоп, рэп исполнителя из Украины, артиста лейбла Василия Вакуленко «Gazgolder»',
            'Латвийский русскоязычный рэп-исполнитель. Выпустил шесть студийных альбомов: «Холод», «Мимо теней», «Моя книга грехов», «Вне времени», «Демоны проснутся в полночь», «ORBIT». C 2018 года — артист лейбла Zhara Music. ',
            'Российский рэп-исполнитель, бывший участник объединения Phlatline, финалист первого сезона шоу «Битва за респект». С 2011 года по декабрь 2013 года вместе с Dino MC 47 вёл программу RapInfo',
            'Российский музыкант, рэпер. С 1 марта 2013 года по настоящее время является артистом лейбла «Black Star Inc.»',
        ],
        avatar: 'url(/img/tfest.jpg)',
        rightAnswer: 2 
    },
    {
        rapper: 'ATL',
        tracker: '𐤏',
        track: '/music/atl/atl.mp3',
        question: 'Answer 5 ??',
        options: [
            '10 AGE',
            'Bumble Beezy',
            'ATL',
            'Jah Khalib',
            'pyrikenesis',
            'playingtheangel',
        ],
        photo:[
            'url(/img/10AGE.jpg)',
            'url(/img/bumble.jpg)',
            'url(/img/atl.jpg)',
            'url(/img/jah.jpg)',
            'url(/img/pyro.jpg)',
            'url(/img/playingtheangel.jpg)',
        ],
        
        music: [
            '/music/10AGE/10AGEZoo.mp3',
            '/music/bumble/bumble.mp3',
            '/music/atl/atl.mp3',
            '/music/jah/jah.mp3',
            '/music/pyro/pyrokinesis.mp3',
            '/music/playingtheangel/playingtheangel_vtrecl.mp3',
        ],
        nickOptions:[
            '10 AGE',
            'Bumble Beezy',
            'ATL',
            'Jah Khalib',
            'pyrikenesis',
            'playingtheangel',
        ],
        nameOptions:[
            'Дмитрий Панов',
            'Антон Ватлин',
            'Сергей Круппов',
            'Бахтияр Мамедов',
            'Андрей Федорович',
            'Юрий Перфилов',
        ],
        description:[
            'Дми́трий Алекса́ндрович Пано́в, более известный под сценическим псевдонимом 10AGE, — российский рэп-исполнитель и автор песен. Карьеру хип-хоп-музыканта начал в 2018 году, с тех пор выпустив множество синглов и один мини-альбом. Состоит на лейбле Legacy Music.',
            'Анто́н Андре́евич Ватлин, более известный под сценическим псевдонимом Bumble Beezy — российский хип-хоп-исполнитель и автор песен. Известен широкой аудитории быстрой манерой исполнения, а также большой музыкальной продуктивностью.',
            'Российский хип-хоп-исполнитель. Бывший участник группы Aztecs, участник ACIDHOUZE',
            'Казахстанский русскоязычный рэпер, певец, битмейкер и продюсер.',
            'Популярный рэп- и хип-хоп-исполнитель российского музыкального андеграунда.',
            'Рэп-исполнитель. Состоял в "#каждаябарбистерва" – объединении, которое было создано Юрой и его товарищами.'
        ],
        avatar: 'url(/img/atl.jpg)',
        rightAnswer: 2
        
    },
    {
        rapper: 'Bumble Beezy',
        tracker: '𐤏',
        track: '/music/bumble/bumble.mp3',
        question: 'Answer 5 ??',
        options: [
            '10 AGE',
            'Bumble Beezy',
            'ATL',
            'Jah Khalib',
            'pyrikenesis',
            'playingtheangel',
        ],
        photo:[
            'url(/img/10AGE.jpg)',
            'url(/img/bumble.jpg)',
            'url(/img/atl.jpg)',
            'url(/img/jah.jpg)',
            'url(/img/pyro.jpg)',
            'url(/img/playingtheangel.jpg)',
        ],
        
        music: [
            '/music/10AGE/10AGEZoo.mp3',
            '/music/bumble/bumble.mp3',
            '/music/atl/atl.mp3',
            '/music/jah/jah.mp3',
            '/music/pyro/pyrokinesis.mp3',
            '/music/playingtheangel/playingtheangel_vtrecl.mp3',
        ],
        nickOptions:[
            '10 AGE',
            'Bumble Beezy',
            'ATL',
            'Jah Khalib',
            'pyrikenesis',
            'playingtheangel',
        ],
        nameOptions:[
            'Дмитрий Панов',
            'Антон Ватлин',
            'Сергей Круппов',
            'Бахтияр Мамедов',
            'Андрей Федорович',
            'Юрий Перфилов',
        ],
        description:[
            'Российский рэп-исполнитель и автор песен. Карьеру хип-хоп-музыканта начал в 2018 году, с тех пор выпустив множество синглов и один мини-альбом. Состоит на лейбле Legacy Music.',
            'Анто́н Андре́евич Ватлин, более известный под сценическим псевдонимом Bumble Beezy — российский хип-хоп-исполнитель и автор песен. Известен широкой аудитории быстрой манерой исполнения, а также большой музыкальной продуктивностью.',
            'Российский хип-хоп-исполнитель. Бывший участник группы Aztecs, участник ACIDHOUZE',
            'Казахстанский русскоязычный рэпер, певец, битмейкер и продюсер.',
            'Популярный рэп- и хип-хоп-исполнитель российского музыкального андеграунда.',
            'Рэп-исполнитель. Состоял в "#каждаябарбистерва" – объединении, которое было создано Юрой и его товарищами.'
        ],
        avatar: 'url(/img/bumble.jpg)',
        rightAnswer: 1
        
    },
    {
        rapper: 'ANIKV',
        tracker: '𐤏',
        track: '/music/anika/anikv.mp3',
        question: 'Answer 6 ??',
        options: [
            'Face',
            'Morgenstern',
            'T-Fest',
            'Johnyboy',
            'ST',
            'ANIKV',
        ],
        photo:[
            'url(/img/face.jpg)',
            'url(/img/morgen.jpg)',
            'url(/img/tfest.jpg)',
            'url(/img/johny.jpg)',
            'url(/img/st.jpg)',
            'url(/img/anika.jpg)',
        ],
        music: [
            '/music/face/face.mp3',
            '/music/morgen/morgenshtern.mp3',
            '/music/t-fest/t-fest_modost.mp3',
            '/music/johny/johnyboy.mp3',
            '/music/st/ST.mp3',
            '/music/anika/anikv.mp3',
        ],
        nickOptions:[
            'Face',
            'Morgenstern',
            'T-Fest',
            'Johnyboy',
            'ST',
            'ANIKV',
        ],
        nameOptions:[
            'Иван Дремин',
            'Алишер Моргенштерн',
            'Кирилл Незборецкий',
            'Денис Василенко',
            'Алексáндр Степáнов',
            'Анна Пурцен',
        ],
        description:[
            'Face – рэп-исполнитель, получивший широкую известность после выхода клипа на трек «Гоша Рубчинский».Раннее творчество, полное пародийного юмора и отсылок к молодежной интернет-культуре, но уже третий альбом «Пути неисповедимы» был наполнен остросоциальной злобой',
            'Российский рэп- и поп-исполнитель, музыкант, шоумен. Первую известность получил в 2017 году благодаря пародиям на популярных музыкальных исполнителей того времени, которые публиковал на YouTube.',
            'Хип-хоп, рэп исполнителя из Украины, артиста лейбла Василия Вакуленко «Gazgolder»',
            'Латвийский русскоязычный рэп-исполнитель. Выпустил шесть студийных альбомов: «Холод», «Мимо теней», «Моя книга грехов», «Вне времени», «Демоны проснутся в полночь», «ORBIT». C 2018 года — артист лейбла Zhara Music. ',
            'Российский рэп-исполнитель, бывший участник объединения Phlatline, финалист первого сезона шоу «Битва за респект». С 2011 года по декабрь 2013 года вместе с Dino MC 47 вёл программу RapInfo',
            'Анна Онанова или Анна Пурцен, более известная как Anikv, — мультижанровый музыкальный исполнитель и автор песен; участник творческого объединения Gazgolder.',
        ],
        avatar: 'url(/img/anika.jpg)',
        rightAnswer: 5
    },
    {
        rapper: 'Truwer',
        tracker: '𐤏',
        track: '/music/truwer/Truwer.mp3',
        question: 'Answer3 ??',
        options: [
            'Баста',
            'Jeembo',
            'Boulevard Depo',
            'Truwer',
            'i6ix1ne',
            'Скриптонит',
        ],
        photo:[
            'url(/img/basta.jpg)',
            'url(/img/jeembo.jpg)',
            'url(/img/boulevar.jpg)',
            'url(/img/truwer.jpg)',
            'url(/img/i61.jpg)',
            'url(/img/scrip.jpg)',
        ],
        nickOptions:[
            'Баста aka Nintendo aka Ноггано',
            'Jeembo',
            'Boulevard Depo aka PowerPuff luv',
            'Truwer',
            'i61',
            'Скриптонит',
        ],
        music: [
            '/music/basta/basta.mp3',
            '/music/jeembo/JEEMBO_Chainsaw.mp3',
            '/music/boulevard/Boulevard_DRUG.mp3',
            '/music/truwer/Truwer.mp3',
            '/music/i61/i61.mp3',
            '/music/skriptonit/skriptonit.mp3',
        ],
        nameOptions:[
            'Василий Вакуленко',
            'Давид Джангирян',
            'Артём Кулик',
            'Саян Жимбаев',
            'Фёдор Приходов',
            'Адиль Жалелов',
        ],
        description:[
            'Российский музыкант, телерадиоведущий, актёр, сценарист, режиссёр и продюсер. С 2007 года — совладелец лейбла «Gazgolder». С октября 2019 года — владелец футбольного клуба СКА.',
            'Российский хип-хоп-исполнитель армянского происхождения, автор песен, бывший участник творческих объединений «Dead Dynasty», «YungRussia» и «Booking Machine»',
            'Артём Сергеевич Кулик, более известный под сценическим псевдонимом Boulevard Depo — российский хип-хоп исполнитель, автор песен, бывший участник и создатель крупного творческого объединения YungRussia. За свою музыкальную карьеру успел выпустить 5 студийных альбомов, 4 микстейпа, 4 мини-альбома и 7 синглов.',
            'Саян Жимбаев, прославившийся под псевдонимом Truwer, родился 17 июля 1994 года. Его родной город Павлодар находится на северо-востоке Казахстана, недалеко от границы с Россией. Возможно, эта близость определяет языковые предпочтения музыканта, который, несмотря на национальность, читает рэп на русском языке.',
            'i61 (Айсиксван) – рэп-исполнитель. В детские годы слушал Многоточие и 50 Cent, увлекался граффити. Начал заниматься музыкой в 15 лет – именно в этом возрасте впервые читает рэп, пробуя себя в фристайле. Первый творческий продукт – релиз "Коты и плагиат". 2012 год – образование объединения "Dopeclvb", в которое входит Федор.',
            'Ади́ль Оралбе́кович Жале́лов, урожд. — Кулмагамбе́тов, более известный под сценическим псевдонимом Скриптони́т, — казахстанский исполнитель и музыкальный продюсер, основатель лейбла Musica36.',
        ],
        avatar: 'url(/img/truwer.jpg)',
        rightAnswer: 3
    },
    {
        rapper: '104',
        tracker: '𐤏',
        track: '/music/104/104_JOOT.mp3',
        question: 'Answer3 ??',
        options: [
            '104',
            'Jeembo',
            'Boulevard Depo',
            'Truwer',
            'i6ix1ne',
            'Скриптонит',
        ],
        photo:[
            'url(/img/104.jpg)',
            'url(/img/jeembo.jpg)',
            'url(/img/boulevar.jpg)',
            'url(/img/truwer.jpg)',
            'url(/img/i61.jpg)',
            'url(/img/scrip.jpg)',
        ],
        nickOptions:[
            '104',
            'Jeembo',
            'Boulevard Depo aka PowerPuff luv',
            'Truwer',
            'i61',
            'Скриптонит',
        ],
        music: [
            '/music/104/104_JOOT.mp3',
            '/music/jeembo/JEEMBO_Chainsaw.mp3',
            '/music/boulevard/Boulevard_DRUG.mp3',
            '/music/truwer/Truwer.mp3',
            '/music/i61/i61.mp3',
            '/music/skriptonit/skriptonit.mp3',
        ],
        nameOptions:[
            'Юрий Дробитько',
            'Давид Джангирян',
            'Артём Кулик',
            'Саян Жимбаев',
            'Фёдор Приходов',
            'Адиль Жалелов',
        ],
        description:[
            'Молодой рэп-исполнитель из Казахстана, выступающий под псевдонимом 104.Стал популярен после того как его коллега рэпер Скриптонит начал сотрудничество с российским музыкальным лейблом Gazgolder',
            'Российский хип-хоп-исполнитель армянского происхождения, автор песен, бывший участник творческих объединений «Dead Dynasty», «YungRussia» и «Booking Machine»',
            'Артём Сергеевич Кулик, более известный под сценическим псевдонимом Boulevard Depo — российский хип-хоп исполнитель, автор песен, бывший участник и создатель крупного творческого объединения YungRussia. За свою музыкальную карьеру успел выпустить 5 студийных альбомов, 4 микстейпа, 4 мини-альбома и 7 синглов.',
            'Саян Жимбаев, прославившийся под псевдонимом Truwer, родился 17 июля 1994 года. Его родной город Павлодар находится на северо-востоке Казахстана, недалеко от границы с Россией. Возможно, эта близость определяет языковые предпочтения музыканта, который, несмотря на национальность, читает рэп на русском языке.',
            'i61 (Айсиксван) – рэп-исполнитель. В детские годы слушал Многоточие и 50 Cent, увлекался граффити. Начал заниматься музыкой в 15 лет – именно в этом возрасте впервые читает рэп, пробуя себя в фристайле. Первый творческий продукт – релиз "Коты и плагиат". 2012 год – образование объединения "Dopeclvb", в которое входит Федор.',
            'Ади́ль Оралбе́кович Жале́лов, урожд. — Кулмагамбе́тов, более известный под сценическим псевдонимом Скриптони́т, — казахстанский исполнитель и музыкальный продюсер, основатель лейбла Musica36.',
        ],
        avatar: 'url(/img/104.jpg)',
        rightAnswer: 0
    },
    {
        rapper: 'Saluki',
        tracker: '𐤏',
        track: '/music/saluki/saluki.mp3',
        question: 'Answer 6 ??',
        options: [
            'Face',
            '104',
            'T-Fest',
            'Johnyboy',
            'Saluki',
            'ANIKV',
        ],
        photo:[
            'url(/img/face.jpg)',
            'url(/img/104.jpg)',
            'url(/img/tfest.jpg)',
            'url(/img/johny.jpg)',
            'url(/img/saluki.jpg)',
            'url(/img/anika.jpg)',
        ],
        music: [
            '/music/face/face.mp3',
            '/music/104/104_JOOT.mp3',
            '/music/t-fest/t-fest_modost.mp3',
            '/music/johny/johnyboy.mp3',
            '/music/saluki/saluki.mp3',
            '/music/anika/anikv.mp3',
        ],
        nickOptions:[
            'Face',
            '104',
            'T-Fest',
            'Johnyboy',
            'Saluki',
            'ANIKV',
        ],
        nameOptions:[
            'Иван Дремин',
            'Юрий Дробитько',
            'Кирилл Незборецкий',
            'Денис Василенко',
            'Арсений Несатый',
            'Анна Пурцен',
        ],
        description:[
            'Face – рэп-исполнитель, получивший широкую известность после выхода клипа на трек «Гоша Рубчинский». Его раннее творчество, полное пародийного юмора и отсылок к молодежной интернет-культуре, относят к жанру «мем-рэп», но уже третий альбом «Пути неисповедимы» был наполнен остросоциальной лирикой и обострял злободневные проблемы российской действительности',
            'Молодой рэп-исполнитель из Казахстана, выступающий под псевдонимом 104.Стал популярен после того как его коллега рэпер Скриптонит начал сотрудничество с российским музыкальным лейблом Gazgolder',
            'Хип-хоп, рэп исполнителя из Украины, артиста лейбла Василия Вакуленко «Gazgolder»',
            'Латвийский русскоязычный рэп-исполнитель. Выпустил шесть студийных альбомов: «Холод», «Мимо теней», «Моя книга грехов», «Вне времени», «Демоны проснутся в полночь», «ORBIT». C 2018 года — артист лейбла Zhara Music. ',
            'Российский хип-хоп-исполнитель, продюсер и автор песен. Бывший участник творческого объединения «Dead Dynasty»',
            'Анна Онанова или Анна Пурцен, более известная как Anikv, — мультижанровый музыкальный исполнитель и автор песен; участник творческого объединения Gazgolder.',
        ],
        avatar: 'url(/img/saluki.jpg)',
        rightAnswer: 4
    },
    {
        rapper: 'Скриптонит',
        tracker: '𐤏',
        track: '/music/skriptonit/skriptonit.mp3',
        question: 'Answer3 ??',
        options: [
            'Баста',
            'Jeembo',
            'Boulevard Depo',
            'Truwer',
            'i6ix1ne',
            'Скриптонит',
        ],
        photo:[
            'url(/img/basta.jpg)',
            'url(/img/jeembo.jpg)',
            'url(/img/boulevar.jpg)',
            'url(/img/truwer.jpg)',
            'url(/img/i61.jpg)',
            'url(/img/scrip.jpg)',
        ],
        nickOptions:[
            'Баста aka Nintendo aka Ноггано',
            'Jeembo',
            'Boulevard Depo aka PowerPuff luv',
            'Truwer',
            'i61',
            'Скриптонит',
        ],
        music: [
            '/music/basta/basta.mp3',
            '/music/jeembo/JEEMBO_Chainsaw.mp3',
            '/music/boulevard/Boulevard_DRUG.mp3',
            '/music/truwer/Truwer.mp3',
            '/music/i61/i61.mp3',
            '/music/skriptonit/skriptonit.mp3',
        ],
        nameOptions:[
            'Василий Вакуленко',
            'Давид Джангирян',
            'Артём Кулик',
            'Саян Жимбаев',
            'Фёдор Приходов',
            'Ади́ль Жале́лов',
        ],
        description:[
            'Российский музыкант, телерадиоведущий, актёр, сценарист, режиссёр и продюсер. С 2007 года — совладелец лейбла «Gazgolder». С октября 2019 года — владелец футбольного клуба СКА.',
            'Российский хип-хоп-исполнитель армянского происхождения, автор песен, бывший участник творческих объединений «Dead Dynasty», «YungRussia» и «Booking Machine»',
            'Артём Сергеевич Кулик, более известный под сценическим псевдонимом Boulevard Depo — российский хип-хоп исполнитель, автор песен, бывший участник и создатель крупного творческого объединения YungRussia. За свою музыкальную карьеру успел выпустить 5 студийных альбомов, 4 микстейпа, 4 мини-альбома и 7 синглов.',
            'Саян Жимбаев, прославившийся под псевдонимом Truwer, родился 17 июля 1994 года. Его родной город Павлодар находится на северо-востоке Казахстана, недалеко от границы с Россией. Возможно, эта близость определяет языковые предпочтения музыканта, который, несмотря на национальность, читает рэп на русском языке.',
            'i61 (Айсиксван) – рэп-исполнитель. В детские годы слушал Многоточие и 50 Cent, увлекался граффити. Начал заниматься музыкой в 15 лет – именно в этом возрасте впервые читает рэп, пробуя себя в фристайле. Первый творческий продукт – релиз "Коты и плагиат". 2012 год – образование объединения "Dopeclvb", в которое входит Федор.',
            'Казахстанский исполнитель и музыкальный продюсер, основатель лейбла Musica36',
        ],
        avatar: 'url(/img/scrip.jpg)',
        rightAnswer: 5
    },
];


const photo = document.getElementById('rapper__photo'),
      nick = document.getElementById('rapperNick'),
      nameRapper = document.getElementById('rapperName'),
      bio = document.getElementById('repperBio'),
      audiosrc = document.getElementById('audio'),
      audioPlay = document.querySelector('#audio__play'),
      left = document.getElementById('left'),
      right = document.getElementById('right');

let indexOfQuestion, //index of current question
    indexOfPage = 0;
let completedAnswers = [];

const randomQuestion = () =>{
let randomNumber = Math.floor(Math.random() * questions.length);
let hitDuplicate = false;
    if(completedAnswers.length > 0){
        completedAnswers.forEach(item =>{
            if(item == randomNumber){
                hitDuplicate = true;
            }
        });
        if (hitDuplicate){
            randomQuestion();
        } else{
            indexOfQuestion = randomNumber;
        }
    };
    if(completedAnswers == 0){
        indexOfQuestion = randomNumber;
    }
};
completedAnswers.push(indexOfQuestion);


window.addEventListener('load', ()=>{

randomQuestion();

});

function randomHud(){
    let counter = Math.floor(Math.random() * 6);
    randomQuestion();
    nameRapper.innerHTML = questions[indexOfQuestion].nameOptions[counter];
    nick.innerHTML = questions[indexOfQuestion].nickOptions[counter];
    bio.innerHTML = questions[indexOfQuestion].description[counter];
    audioPlay.setAttribute('src', questions[indexOfQuestion].music[counter]);
    photo.style.backgroundImage = questions[indexOfQuestion].photo[counter];
    photo.style.backgroundSize = '110%';
    photo.style.backgroundRepeat = 'no-repeat';
    playButton.style.backgroundImage = 'url(/audio/play.png)'
};

left.addEventListener('click',() =>{
    randomHud();
})
right.addEventListener('click',() =>{
    randomHud();
})

const playButton = document.querySelector('.play__button'),
      muteButton = document.querySelector('.mute__button'),
      durationTime= document.querySelector('.current__duration'),
      currentTime= document.querySelector('.current__time'),
      progress = document.getElementById('progress');

const playOrPayse = () => {
    if (!audioPlay.paused && !audioPlay.ensed) {
      audioPlay.pause();
      playButton.style.backgroundImage = 'url(/audio/play.png)'
    }
    else{
      audioPlay.play()
      playButton.style.backgroundImage = 'transition: 0.3s';
      playButton.style.backgroundImage = 'url(/audio/pause.png)';
      updateTime = setInterval(update, 500);
    }
  }

const Payse = () => {
    audioPlay.pause();
    playButton.style.backgroundImage = 'url(/audio/play.png)'
}
const playing = () => {
    audioPlay.play();
    playButton.style.backgroundImage = 'url(/audio/pause.png)'
}
const muteOrspeaker = () => {
    if (audioPlay.muted === true) {
      audioPlay.muted = false
      muteButton.style.backgroundImage = 'url(/audio/speaker.png)';
    }else{
      audioPlay.muted = true
      muteButton.style.backgroundImage = 'url(/audio/mute.png)';
    }
  }
  audioPlay.onloadeddata = () => {
    let minutes= parseInt(audioPlay.duration/60);
    let seconds= parseInt(audioPlay.duration%60);
          if(`${seconds}`.length<2){
              durationTime.innerHTML = `${minutes}:0${seconds}`
          } else{ durationTime.innerHTML = `${minutes}:${seconds}`}
          if(`${minutes}`.length<2){
              durationTime.innerHTML = `0${minutes}:${seconds}`
          } else{ durationTime.innerHTML = `${minutes}:${seconds}`}
  };
  const update = () => {
    if(!audioPlay.ended){
      let playerMinute = parseInt(audioPlay.currentTime/60);
      let playerSecond = parseInt(audioPlay.currentTime%60);
      if(`${playerSecond}`.length<2){
          currentTime.innerHTML = `${playerMinute}:0${playerSecond}`;
        } else {currentTime.innerHTML = `${playerMinute}:${playerSecond}`;}
  
    }else{
      currentTime.innerHTML = `0:00`;
      playButton.style.backgroundImage = 'url(/audio/play.png)';
  
  
    }
  }
  const clickedBar= (e) => {
    if (!audioPlay.ended) {
      let moveX = e.pageX - defaultBar.offsetLeft;
      let newTime = moveX*audioPlay.duration/barSize;
      audioPlay.currentTime = newTime;
      progresBar.style.width = `${moveX}px`;
  
    }
  }
  playButton.addEventListener('click',playOrPayse,false);
muteButton.addEventListener('click', muteOrspeaker,false);
const volume = document.getElementById('volumne');

volume.addEventListener('change', function changeVolume(elix){
  audioPlay.volume = elix.target.value / 100;
  audioPlay.muted = false
  if(!audioPlay.volume){
    muteButton.style.backgroundImage = 'url(/audio/mute.png)'
}else{
    muteButton.style.backgroundImage = 'url(/audio/speaker.png)'
}
});
const valueChanged = (e) => (e.style.setProperty('--value', e.value));
let mouseDownOnSlider = false;
audioPlay.addEventListener("loadeddata", () => {
    progress.value = 0;
});
audioPlay.addEventListener("timeupdate", () => {
    if (!mouseDownOnSlider) {
        progress.value = audioPlay.currentTime / audioPlay.duration * 100;
    valueChanged(progress);
    }
});
progress.addEventListener("change", () => {
    const pct = progress.value / 100;
    audioPlay.currentTime = (audioPlay.duration || 0) * pct;
});
progress.addEventListener("mousedown", () => {
    mouseDownOnSlider = true;
});
progress.addEventListener("mouseup", () => {
    mouseDownOnSlider = false;
});