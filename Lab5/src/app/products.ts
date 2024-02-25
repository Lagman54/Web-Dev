export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
    rating: number;
    url: string;
    likeCount: number;
}

export const products = [
    {
        id: 1,
        categoryId: 1,
        name: 'Apple 20W USB-C Power Adapter',
        price: 2022,
        description: 'Зарядное устройство Apple 20W USB-C Power Adapter белый',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h95/h0e/63961934823454.jpg?format=gallery-medium',
        rating: 4.5,
        url: 'https://kaspi.kz/shop/p/apple-20w-usb-c-power-adapter-belyi-100984093/?c=750000000',
        likeCount: 0,
    },
    {
        id: 2,
        categoryId: 1,
        name: 'Apple iPhone 13 128Gb Midnight',
        price: 289_604,
        description: 'Смартфон Apple iPhone 13 128Gb Midnight черный',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h32/h70/84378448199710.jpg?format=gallery-medium',
        rating: 5,
        url: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-midnight-chernyi-102298404/?c=750000000',
        likeCount: 0,
    },
    {
        id: 3,
        categoryId: 1,
        name: 'Xiaomi Redmi Note 12 Pro 4G 8 ГБ/256 ГБ',
        price: 120_270,
        description: 'Смартфон Xiaomi Redmi Note 12 Pro 4G 8 ГБ/256 ГБ серый',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h02/ha0/79846423199774.jpg?format=gallery-medium',
        rating: 5,
        url: 'https://kaspi.kz/shop/p/xiaomi-redmi-12c-4-gb-128-gb-seryi-109149311/?c=750000000',
        likeCount: 0,
    },
    {
        id: 4,
        categoryId: 1,
        name: 'Xiaomi Redmi 12 4G 8 ГБ/256',
        price: 77_777,
        description: 'Смартфон Xiaomi Redmi 12 4G 8 ГБ/256 ГБ черный',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h75/hbc/81335343775774.png?format=gallery-medium',
        rating: 5,
        url: 'https://kaspi.kz/shop/p/xiaomi-redmi-12-4g-8-gb-256-gb-chernyi-110918152/?c=750000000',
        likeCount: 0,
    },
    {
        id: 7,
        categoryId: 1,
        name: 'Чехол Smart Case для Apple iPhone 13 прозрачный',
        price: 7200,
        description: 'тип: накладка с защитой камеры\n' + 'совместимый бренд: Apple\n' + 'материал: силикон\n' + 'совместимые модели: iPhone 13',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h13/h10/64408714674206.jpg?format=gallery-medium',
        rating: 5,
        url: 'https://kaspi.kz/shop/p/smart-case-dlja-apple-iphone-13-prozrachnyi-106185651/?c=750000000',
        likeCount: 0,
    },

    {
        id: 5,
        categoryId: 2,
        name: 'Агуша',
        price: 299,
        description: 'Детское пюре Агуша Яблоко-клубника-малина 90 г',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h53/hc1/63957671575582.jpg?format=gallery-medium',
        rating: 5,
        url: 'https://kaspi.kz/shop/p/agusha-jabloko-klubnika-malina-90-g-100623509/?c=750000000',
        likeCount: 0,
    },
    {
        id: 6,
        categoryId: 2,
        name: 'Вешалка напольная Vannashop',
        price: 10_439,
        description: 'Вешалка напольная Vannashop металл, 150x60x110 см, 0758',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/he8/h4a/64423576666142.jpg?format=gallery-medium',
        rating: 4.5,
        url: 'https://kaspi.kz/shop/p/veshalka-napol-naja-vannashop-metall-150x60x110-sm-0758-106863224/?c=750000000',
        likeCount: 0,
    },
    {
        id: 8,
        categoryId: 2,
        name: 'Стул N-12',
        price: 7200,
        description: 'Стул N-12, 81x50x25',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/63900105277470.jpg?format=gallery-medium',
        rating: 5,
        url: 'https://kaspi.kz/shop/p/stul-n-12-81x50x25-sm-belyi-100189414/?c=750000000',
        likeCount: 0,
    },
    {
        id: 19,
        categoryId: 2,
        name: 'MSQ premium 02 диван, обивка текстиль, 80x210x75 см, синий',
        price: 52000,
        description: 'механизм трансформации: еврокнижка\n' +
            'обивка: текстиль\n' +
            'высота: 80.0 см\n' +
            'ширина: 210.0 см\n' +
            'глубина: 75.0 см\n' +
            'комплектация: диван\n' +
            'цвет: синий\n' +
            'страна: Казахстан',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hdf/h51/64448519307294.jpg?format=gallery-medium',
        rating: 5,
        url: 'https://kaspi.kz/shop/p/msq-premium-02-divan-obivka-tekstil-80x210x75-sm-sinii-104375942/?c=750000000',
        likeCount: 0,
    },
    {
        id: 20,
        categoryId: 2,
        name: 'Стул N-13',
        price: 7500,
        description: 'Стул N-13, 81x50x25',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h59/h3b/63900105277470.jpg?format=gallery-medium',
        rating: 5,
        url: 'https://kaspi.kz/shop/p/stul-n-12-81x50x25-sm-belyi-100189414/?c=750000000',
        likeCount: 0,
    },

    {
        id: 9,
        categoryId: 3,
        name: 'Logitech G102',
        price: 9243,
        description: 'Мышь Logitech G102 Lightsync черный',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
        rating: 5,
        url: 'https://kaspi.kz/shop/p/logitech-g102-lightsync-chernyi-100956618/?c=750000000',
        likeCount: 0,
    },
    {
        id: 10,
        categoryId: 3,
        name: 'SSD Kingston SA400S37 480 ГБ',
        price: 9243,
        description: 'тип: SSD\n' +
            'форм-фактор: 2.5\n' +
            'емкость: 480.0 Гб\n' +
            'интерфейсы: SATA\n' +
            'скорость чтения: 500.0 МБ/с\n' +
            'скорость записи: 450.0 МБ/с',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h70/hb2/63763877920798.jpg?format=gallery-medium',
        rating: 5,
        url: 'https://kaspi.kz/shop/p/ssd-kingston-sa400s37-480-gb-6800659/?c=750000000',
        likeCount: 0,
    },
    {
        id: 11,
        categoryId: 3,
        name: 'Wi-Fi роутер Xiaomi Mi Wi-Fi Router 4A Gigabit Edition',
        price: 10989,
        description: 'тип: SSD\n' +
            'форм-фактор: 2.5\n' +
            'емкость: 480.0 Гб\n' +
            'интерфейсы: SATA\n' +
            'скорость чтения: 500.0 МБ/с\n' +
            'скорость записи: 450.0 МБ/с',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h9e/ha1/63832974196766.jpg?format=gallery-medium',
        rating: 4.5,
        url: 'https://kaspi.kz/shop/p/wi-fi-router-xiaomi-mi-wi-fi-router-4a-gigabit-edition-100044713/?c=750000000',
        likeCount: 0,
    },
    {
        id: 12,
        categoryId: 3,
        name: 'Мышь X-Game XM-770OUB черный',
        price: 568,
        description: 'Мышь X-Game XM-770OUB черный',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb2/hc2/64119540187166.jpg?format=gallery-medium',
        rating: 4.5,
        url: 'https://kaspi.kz/shop/p/x-game-xm-770oub-chernyi-9101354/?c=750000000',
        likeCount: 0,
    },
    {
        id: 13,
        categoryId: 3,
        name: 'Подставка для ноутбука Creative Bracket UN-60',
        price: 9243,
        description: 'тип: без охлаждения\n' +
            'максимальная диагональ ноутбука: 15.6, ,17, ,14, ,15, ,16\n' +
            'подсветка: Нет',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h0a/ha5/64119036379166.jpg?format=gallery-medium',
        rating: 5,
        url: 'https://kaspi.kz/shop/p/creative-bracket-un-60-101298013/?c=750000000',
        likeCount: 0,
    },

    {
        id: 14,
        categoryId: 4,
        name: 'Велосипед Focus fcs16 16 дюйм 2022 S синий',
        price: 92430,
        description: 'велосипед',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/hb4/h93/80497082695710.png?format=gallery-medium',
        rating: 5,
        url: 'https://kaspi.kz/shop/p/focus-fcs16-16-djuim-2022-s-sinii-104956192/?c=750000000',
        likeCount: 0,
    },
    {
        id: 15,
        categoryId: 4,
        name: 'Велосипед Wentana 24 2021 15 черный-зеленый',
        price: 92430,
        description: 'велосипед',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h91/hab/64342865215518.jpg?format=gallery-medium',
        rating: 5,
        url: 'https://kaspi.kz/shop/p/wentana-24-2021-15-chernyi-zelenyi-101699550/?c=750000000',
        likeCount: 0,
    },
    {
        id: 16,
        categoryId: 4,
        name: 'Велосипед Gold Fly Детский велосипед Shimmer*Shine-20-01 20 дюйм 2023 S желтый',
        price: 109890,
        description: 'велосипед',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h02/ha3/80475504508958.jpg?format=gallery-medium',
        rating: 4.5,
        url: 'https://kaspi.kz/shop/p/gold-fly-detskii-velosiped-shimmer-shine-20-01-20-djuim-2023-s-zheltyi-110058869/?c=750000000',
        likeCount: 0,
    },
    {
        id: 17,
        categoryId: 4,
        name: 'Велосипед IKS-ZET IZ-600 26 дюйм 2022 17 дюймов бирюзовый',
        price: 56800,
        description: 'велосипед',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h43/h2a/63959880204318.jpg?format=gallery-medium',
        rating: 4.5,
        url: 'https://kaspi.kz/shop/p/iks-zet-iz-600-26-djuim-2022-17-djuimov-birjuzovyi-104391927/?c=750000000',
        likeCount: 0,
    },
    {
        id: 18,
        categoryId: 4,
        name: 'Взрослый велосипед TAUX 26р-р. 2021 26 дюйм 2021 17 дюймов оранжевый',
        price: 92430,
        description: 'велосипед',
        imageUrl: 'https://resources.cdn-kaspi.kz/img/m/p/h6c/h76/66296048779294.jpg?format=gallery-medium',
        rating: 5,
        url: 'https://kaspi.kz/shop/p/taux-vzroslyi-velosiped-taux-26r-r-2021-26-djuim-2021-17-djuimov-oranzhevyi-107790251/?c=750000000',
        likeCount: 0,
    },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
