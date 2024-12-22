initMap();

async function initMap() {
    // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты основного модуля API
    await ymaps3.ready;

    const {YMap, YMapDefaultSchemeLayer} = ymaps3;

    // Иницилиазируем карту
    const map = new YMap(
        // Передаём ссылку на HTMLElement контейнера
        document.getElementById('map'),

        // Передаём параметры инициализации карты
        {
            location: {
                center: [69.381502,53.30124013562887],
                zoom: 12,
                controls: ['zoomControl'],
            },{
                // Ограничение области перемещения карты
                restrictMapArea: [
                    [55.0, 36.0], // Левый нижний угол
                    [56.5, 38.5]  // Правый верхний угол
                ],
                minZoom: 5, // Минимальный уровень зума
                maxZoom: 15 // Максимальный уровень зума
            }
        }
    );

    myMap.controls.add('zoomControl', {
        size: 'small',
        float: 'right'
    });


    // Добавляем слой для отображения схематической карты
    map.addChild(new YMapDefaultSchemeLayer());

    map.addChild(new YMapDefaultSchemeLayer({
        theme: "dark", 
        customization: [
            {
                "tags": {
                    "any": [
                        "urban_area",
                        "locality"
                    ]
                },
                "elements": "geometry",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": [
                        "terrain",
                        "bathymetry",
                        "landscape"
                    ],
                    "none": "land"
                },
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": [
                        "park",
                        "cemetery"
                    ]
                },
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": [
                        "vegetation"
                    ]
                },
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": [
                        "industrial",
                        "construction_site",
                        "medical",
                        "sports_ground",
                        "beach"
                    ]
                },
                "types": "polygon",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": "transit",
                    "none": [
                        "transit_location",
                        "transit_line",
                        "transit_schema",
                        "is_unclassified_transit"
                    ]
                },
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": "urban_area",
                    "none": [
                        "residential",
                        "industrial",
                        "cemetery",
                        "park",
                        "medical",
                        "sports_ground",
                        "beach",
                        "construction_site"
                    ]
                },
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": [
                        "building",
                        "address",
                        "fence"
                    ]
                },
                "stylers": {
                    "visibility": "off"
                }
            }
        ]
    }));
}









