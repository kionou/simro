<template>
    <div class="container">
      <div class="magasin-content">
        <div class="texte">
          <div class="select">
            <input class="effect-6" type="text" v-bind:placeholder="$t('magasin.placeholder')" />
            <span class="focus-border"></span>
          </div>
          <div class="select" v-for="(marker, index) in markers" :key="index">
            <div @click="showPopup(marker)" class="button">
              <span>{{ $t('magasin.sous_titre')}} {{ marker.nom }}</span>
            </div>
          </div>
        </div>
        <div class="maps_container">
          <div class="map" ref="mapContainer"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import L from 'leaflet';
  import 'leaflet/dist/leaflet.css';
  import axiosClient from '@/axiosClient';

  
  export default {
    name: 'CPtMagasin',
  
    data() {
      return {
        markers: [],
      };
    },
  
    async created() {
        
      const response = await axiosClient.get('/magasin');
      this.markers = response.data;

 
  
      const map = L.map('mapContainer').setView([7.369722, 12.354722], 4.5);
  
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
  
      this.markers.forEach(marker => {
        if (this.isValidCoordinates(marker.longitude, marker.latitude)) {
          const newMarker = L.marker([marker.latitude, marker.longitude]).addTo(map);
  
          const popupContent = `
            <div>
              <h3>{{ $t('magasin.sous_titre') }} ${marker.nom}</h3>
              <p><h4>{{ $t('magasin.description') }}:</h4> ${marker.description}</p>
            </div>
          `;
  
          newMarker.bindPopup(popupContent);
        }
      });
    },
  
    methods: {
      showPopup(marker) {
        this.$refs.mapContainer.map.setView([marker.latitude, marker.longitude], 8);
      },
  
      isValidCoordinates(longitude, latitude) {
        return (
          typeof longitude === 'number' &&
          typeof latitude === 'number' &&
          longitude >= -180 &&
          longitude <= 180 &&
          latitude >= -90 &&
          latitude <= 90
        );
      },
    },
  };
  </script>
  
  <style scoped>
  .magasin-content {
    max-width: var(--max-width);
    margin: 0 auto;
    display: flex;
    justify-content: space-evenly;
    box-shadow: var(--box-shadow);
    justify-content: space-between;


}

.magasin-content .texte {
    width: 98%;
    max-width: 290px;
    height: 450px;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 10px;
    color: var(--blanc);
    overflow-y: scroll;

}

.magasin-content .texte .texte-content {
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

.map {
    width: 100vw;
    height: 100vh;
  }


.maps_container{
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
  </style>
  