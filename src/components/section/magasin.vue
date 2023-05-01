<template>
    <div class="container">
        <div class="magasin-content">
            <div class="texte">

                <div class="select">
                    <input class="effect-6" type="text" placeholder="Magasin ou Region...">
                    <span class="focus-border"></span>
                </div>
                <div class="select" v-for="(marker, index) in markers" :key="index" @click="showPopup(marker)">
                    <div @click="toggleSelect(index)" class="button">
                        <span>Magasin {{ marker.nom }}</span>
                        <span class="icon material-symbols-outlined " :class="marker.show ? 'close' : ''">
                            <i class="fa-solid fa-chevron-down"></i>
                        </span>
                    </div>
                    <div :class="`select-block ${marker.show ? 'open' : ''}`">
                        <div class="scroll">
                            <div class="content-header">
                                <div class="content">
                                    <p>Region:</p>
                                    <span>{{ marker.localite }}</span>
                                </div>
                                <div class="content">
                                    <p>Collecteur:</p>
                                    <span>{{ marker.collecteur }}</span>
                                </div>
                                <div class="content">
                                    <p>Description:</p>
                                    <span>{{ marker.description }}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            <div class="maps">
                <div class="map-wrap">
                    <a href="https://www.maptiler.com" class="watermark"><img
                            src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo" /></a>
                    <div class="map" ref="mapContainer"></div>

                </div>
            </div>
        </div>

    </div>
</template>

<script>

import { Map, NavigationControl, Marker, Popup } from 'maplibre-gl';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
import axiosClient from '@/axiosClient';
export default {
    name: 'CPtMagasin',
    components: {

    },

    data() {
        return {
            show: false,
            magasins: '',
            marker: ''
        };
    },

    setup() {
        const mapContainer = shallowRef(null);
        const map = shallowRef(null);
        const markers = shallowRef([]);
        onMounted(async () => {
            const apiKey = 'R0tHx9tGeRGXSyvwlX0q';
            const initialState = { lng: 11.52, lat: 3.91, zoom: 10 };

            map.value = markRaw(new Map({
                container: mapContainer.value,
                style: `https://api.maptiler.com/maps/ad28fe8c-deb1-4b20-a08e-65d8e0998fa1/style.json?key=${apiKey}`,
                center: [initialState.lng, initialState.lat],
                zoom: initialState.zoom
            }));
            map.value.addControl(new NavigationControl(), 'top-right');

            const response = await axiosClient.get('/simro/magasin');
            markers.value = response.data;

            markers.value.forEach(marker => {
                marker.show = false;
                const newMarker = new Marker({ color: "#FF0000" })
                    .setLngLat([marker.longitude, marker.latitude])
                    .addTo(map.value);

                const popupContent = `<div><h3>Magasin ${marker.nom}</h3><p> <h4>Description:</h4> ${marker.description}</p></div>`;
                newMarker.setPopup(new Popup().setHTML(popupContent));
            });
        }),

            onUnmounted(() => {
                map.value?.remove();
            })

        function showPopup(marker) {
            // this.markers[index].show = !this.markers[index].show;
            const coordinates = [marker.longitude, marker.latitude];
            map.value.flyTo({ center: coordinates, zoom: 13 });
            new Popup()
                .setLngLat(coordinates)
                .setHTML(`<div><h3>Magasin ${marker.nom}</h3><p><h4>Description:</h4> ${marker.description}</p></div>`)
                .addTo(map.value);
            if (map.value.getZoom() > 16) {
                map.value.zoomTo(16, { duration: 500, center: coordinates });
            }
        }

        return {
            map, mapContainer, markers,
            showPopup
        };
    },
    methods: {
        toggleSelect(index) {
            console.log(this.markers[index].show);

            this.markers[index].show = !this.markers[index].show;
        },


    }
}
</script>

<style lang="css" scoped>
.magasin-content {
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    /* align-items: center; */
    justify-content: space-evenly;
    box-shadow: var(--box-shadow);
    justify-content: space-between;


}

.magasin-content .texte {
    width: 98%;
    max-width: 290px;
    height: auto;
    /* display: flex; */
    flex-direction: column;
    justify-content: space-evenly;
    padding: 10px;

    color: var(--blanc);

}

.magasin-content .texte .texte-content {
    /* display: flex; */
    justify-content: flex-start;
    padding: 10px;
    align-items: center;


}

@media (max-width: 768px) {
    .magasin-content {
        max-width: 600px;
        width: 90%;
        flex-direction: column;

    }

    .magasin-content .texte {
        width: 100%;
        max-width: 100%;
        display: flex;
        align-items: center;



    }
}

input[type="text"] {

    color: #333;
    width: 100%;
    padding: 12px 10px;
    border-radius: 50px;
    font-size: 14px;
    outline: 0;
    border: none;
    box-shadow: var(--shadow-small);
}

:focus {
    outline: none;
}




.maps {
    width: 100%;
    height: 450px;
    padding: 10px;
    background-color: var(--blanc);

}

@import '~maplibre-gl/dist/maplibre-gl.css';

.map-wrap {
    position: relative;
    width: 100%;
    height: 100%;
}

.map {
    position: absolute;
    width: 100%;
    height: 100%;
}

.watermark {
    position: absolute;
    left: 10px;
    bottom: 10px;
    z-index: 999;
}

.mapboxgl-popup,
.maplibregl-popup {
    top: -26px !important;

}

.mapboxgl-popup-close-button,
.maplibregl-popup-close-button {
    border: none !important;
    right: 4px !important;
}




.select {
    text-align: left;
    width: 100%;
    position: relative;
    max-width: 500Px;
}

.select .button {
    position: relative;
    width: 100%;
    background-color: var(--blanc);
    padding: 15px 20px;
    font-size: 14px;
    color: #5f6368ff;
    cursor: pointer;
    transition: all 0.3s;
    box-shadow: var(--shadow-small);
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    margin-top: 15px;

}

.select .select-block {
    width: 100%;
    position: relative;
    background-color: var(--blanc);
    opacity: 0;
    transition: all 0.3s;
    display: none;
    box-shadow: var(--shadow-small);
    color: #5f6368ff;

}

.select .select-block .scroll {

    overflow-y: auto;
}

.select .select-block.open {

    display: block;
    opacity: 1;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;

}

.content-header {
    margin: 0;
    padding: 0 0 10px 10px;
}

.content-header .content {

    display: flex;
}

.content-header .content p {
    font-weight: bolder;
}

.content-header .content span {
    font-size: 14px;
    text-transform: lowercase;
    width: 100%;

}


.select .icon {
    position: absolute;
    right: 10px;
    top: 15px;
    transition: all 0.3s;
}

.select .icon.close {
    transform: rotate(180deg);
}
</style>