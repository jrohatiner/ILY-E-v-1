mapboxgl.accessToken = 'pk.eyJ1IjoiYWNoaWNrYW5kYWNsaWNrIiwiYSI6ImNsbDZwenYxZTAxNnMzY3ByZTRxdjN5amgifQ.TM9PSKFurgbnXKB9S7zzlA';

const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v12',
    center: [-77.04, 38.907],
    zoom: 2.15,
    projection: 'globe'
});

map.on('load', () => {
    map.addSource('places', {
        'type': 'geojson',
        'data': {
            'type': 'FeatureCollection',
            'features': [
                // ... your features here
            ]
        }
    });

    map.addLayer({
        'id': 'places',
        'type': 'symbol',
        'source': 'places',
        'layout': {
            'icon-image': ['get', 'icon'],
            'icon-allow-overlap': true
        }
    });

    map.on('click', 'places', (e) => {
        const coordinates = e.features[0].geometry.coordinates.slice();
        const description = e.features[0].properties.description;

        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        new mapboxgl.Popup()
            .setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    map.on('mouseenter', 'places', () => {
        map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'places', () => {
        map.getCanvas().style.cursor = '';
    });
    
    map.addSource('mapbox-dem', {
        "type": "raster-dem",
        "url": "mapbox://mapbox.mapbox-terrain-dem-v1",
        "tileSize": 512,
        "maxzoom": 14
    });

    map.setTerrain({
        "source": "mapbox-dem",
        "exaggeration": 2
    });

    var popup = new AnimatedPopup({
        openingAnimation: {
            duration: 1000,
            easing: 'easeOutElastic',
            transform: 'scale'
        },
        closingAnimation: {
            duration: 300,
            easing: 'easeInBack',
            transform: 'scale'
        }
    }).setLngLat([-96, 37.8]).setHTML('Hello World!').addTo(map);
});

map.setPaintProperty('places', 'fill-opacity-transition', {
    "duration": 300,
    "delay": 0
});
