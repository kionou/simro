<template>
    <div class="map-wrap">
      <a href="https://www.maptiler.com" class="watermark"><img
          src="https://api.maptiler.com/resources/logo.svg" alt="MapTiler logo"/></a>
      <div class="map" ref="mapContainer"></div>
     
    </div>
  </template>
<script>
import { Map, NavigationControl, Marker, Popup } from 'maplibre-gl';
import { shallowRef, onMounted, onUnmounted, markRaw } from 'vue';
import axios from 'axios';

export default {
  name: "MapR",

  setup () {
    const mapContainer = shallowRef(null);
    const map = shallowRef(null);
    const markers = shallowRef([]);
    onMounted(async () => {
       const apiKey = 'R0tHx9tGeRGXSyvwlX0q';
      const initialState = { lng: 11.52, lat: 3.91, zoom: 10 };

      map.value = markRaw(new Map({
        container: mapContainer.value,
         style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${apiKey}`,
        center: [initialState.lng, initialState.lat],
        zoom: initialState.zoom
      }));
      map.value.addControl(new NavigationControl(), 'top-right');

      const response = await axios.get('https://simro.onrender.com/simro/magasin');
      markers.value = response.data;
      
      markers.value.forEach(marker => {
        marker.show = false;
        const newMarker = new Marker({color: "#FF0000"})
          .setLngLat([marker.longitude, marker.latitude])
          .addTo(map.value);

        const popupContent = `<div><h3>${marker.nom}</h3><p>${marker.description}</p></div>`;
        newMarker.setPopup(new Popup().setHTML(popupContent));
      });
    }),

    onUnmounted(() => {
      map.value?.remove();
    })

    function showPopup() {
      console.log('rrr',this.marker);
      const coordinates = [this.marker.longitude, this.marker.latitude];
      map.value.flyTo({ center: coordinates, zoom: 14 });
      new Popup()
        .setLngLat(coordinates)
        .setHTML(`<div><h3>${this.marker.nom}</h3><p>${this.marker.description}</p></div>`)
        .addTo(map.value);
    }

    return {
      map, mapContainer, markers,
        showPopup
    };
  },
 

};
</script>
  <style scoped>
  @import '~maplibre-gl/dist/maplibre-gl.css';
  
  .map-wrap {
    position: relative;
    width: 100%;
    height:100%;
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
  </style>