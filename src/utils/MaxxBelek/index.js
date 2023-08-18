export const MaxxBelek = {
    title: 'Maxx Royal Belek',
    logo: {
      src: 'MaxxBelek.png',
      height: '40',
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
            id: 'room',
            key: 'room_information',
            icon: 'infobook',
            link: {
                url: '/info/room',
                target: '_self'
            },
            detail: {
                tr: 'https://drive.google.com/file/d/1ccvIM1vpGBng_5ciXea0WK3rLmbzsXMr/preview',
                en: 'https://drive.google.com/file/d/1ccvIM1vpGBng_5ciXea0WK3rLmbzsXMr/preview',
                ru: 'https://drive.google.com/file/d/1ccvIM1vpGBng_5ciXea0WK3rLmbzsXMr/preview',
                de: 'https://drive.google.com/file/d/1ccvIM1vpGBng_5ciXea0WK3rLmbzsXMr/preview',
            }
        },
        {
            id: 'room-service',
            key: 'room_service',
            icon: 'food',
            link: {
                url: 'https://mb.maxxroyal.com/#/?r=297',
                target: '_blank'
            },
        },
        {
            id: 'service',
            key: 'services',
            icon: 'paidservice',
            link: {
                url: '/info/service',
                target: '_self'
            },
            detail: {
                tr: 'https://drive.google.com/file/d/1Sl5-OnfJsD59Ql-brhEjI-aXdhuaUQ0p/preview',
                en: 'https://drive.google.com/file/d/1Sl5-OnfJsD59Ql-brhEjI-aXdhuaUQ0p/preview',
                ru: 'https://drive.google.com/file/d/1Sl5-OnfJsD59Ql-brhEjI-aXdhuaUQ0p/preview',
                de: 'https://drive.google.com/file/d/1Sl5-OnfJsD59Ql-brhEjI-aXdhuaUQ0p/preview',

            }
        },
        {
            id: 'map',
            key: 'map',
            icon: 'map',
            link: {
                url: '/info/map',
                target: '_self'
            },
            detail: {
                tr: 'https://drive.google.com/file/d/1tLAOmc_lzmwr8di5Tax_78FVXos_uTBe/preview',
                en: 'https://drive.google.com/file/d/1tLAOmc_lzmwr8di5Tax_78FVXos_uTBe/preview',
                ru: 'https://drive.google.com/file/d/1tLAOmc_lzmwr8di5Tax_78FVXos_uTBe/preview',
                de: 'https://drive.google.com/file/d/1tLAOmc_lzmwr8di5Tax_78FVXos_uTBe/preview',

            }
        },
    ]
}
