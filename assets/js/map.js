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
                // Координаты центра карты
                center: [100.28133603255901,69.36563991583309],

                // Уровень масштабирования
                zoom: 10
            }
        }
    );

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
                    "any": "poi",
                    "none": [
                        "outdoor",
                        "park",
                        "cemetery",
                        "medical"
                    ]
                },
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": "road"
                },
                "types": "point",
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": [
                        "food_and_drink",
                        "shopping",
                        "commercial_services"
                    ]
                },
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": [
                        "traffic_light"
                    ]
                },
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": [
                        "entrance"
                    ]
                },
                "stylers": {
                    "visibility": "off"
                }
            },
            {
                "tags": {
                    "any": [
                        "road"
                    ],
                    "none": [
                        "road_1",
                        "road_2",
                        "road_3",
                        "road_4",
                        "road_5",
                        "road_6",
                        "road_7"
                    ]
                },
                "elements": "label.icon",
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


