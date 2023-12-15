export const VoyageBelek = {
    title: 'Voyage Belek',
    logo: {
      src: 'VoyageBelek.png',
      height: '60'
    },
    languages: [
        {
            id: 1,
            lang: "TR",
            langNative: "Türkçe",
        }, {
            id: 2,
            lang: "EN",
            langNative: "English",
        }, {
            id: 3,
            lang: "DE",
            langNative: "Deutsch",
        }, {
            id: 4,
            lang: "RU",
            langNative: "Русский",
        }
    ],
    menu: [
        {
            id: 1,
            key: 'information',
            icon: 'infobook',
            link: {
                url: '/info/1',
                target: '_self'
            },
            detail: {
                tr: 'https://drive.google.com/file/d/1UzNh0xugabgiDmjauybkuBJlXj4WhVJx/preview',
                en: 'https://drive.google.com/file/d/11By2MsLzI8nn0at5j-R0BBH4ue170CyD/preview',
                ru: 'https://drive.google.com/file/d/1cQ5kW-rIQNRnCxXW7CeozXS3tNgzw2Kd/preview',
                de: 'https://drive.google.com/file/d/1av7RlkcIghobdvKXVo1XsWAxDYJAQ7g8/preview',
            }
        },
        {
            id: 2,
            key: 'restaurants',
            icon: 'food',
            link: {
                url: 'https://voyage-belek.gomymenu.com',
                target: '_blank'
            },
        },
        {
            id: 3,
            key: 'map',
            icon: 'map',
            link: {
                url: '/info/3',
                target: '_self'
            },
            detail: {
                tr: 'https://drive.google.com/file/d/1EtDXqY_zEdZ3wmrMDnzqXsjHYK8yysnu/preview',
                en: 'https://drive.google.com/file/d/1EtDXqY_zEdZ3wmrMDnzqXsjHYK8yysnu/preview',
                ru: 'https://drive.google.com/file/d/1EtDXqY_zEdZ3wmrMDnzqXsjHYK8yysnu/preview',
                de: 'https://drive.google.com/file/d/1EtDXqY_zEdZ3wmrMDnzqXsjHYK8yysnu/preview',

            }
        },
        {
            id: 4,
            key: 'spa',
            icon: 'spa',
            link: {
                url: '/info/4',
                target: '_self'
            },
            detail: {
                tr: 'https://drive.google.com/file/d/1ifTGdQ39miT3QJIKFCNWILl6OQMDt40_/preview',
                en: 'https://drive.google.com/file/d/1ifTGdQ39miT3QJIKFCNWILl6OQMDt40_/preview',
                ru: 'https://drive.google.com/file/d/1ifTGdQ39miT3QJIKFCNWILl6OQMDt40_/preview',
                de: 'https://drive.google.com/file/d/1ifTGdQ39miT3QJIKFCNWILl6OQMDt40_/preview',

            }
        },
    ]
}
