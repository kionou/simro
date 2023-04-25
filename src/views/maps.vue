

   <template>
   
      <mgl-map class="ccc"
              mapStyle="https://api.maptiler.com/maps/streets/style.json?key=R0tHx9tGeRGXSyvwlX0q"
        :zoom=13
        :center="[11.51, 3.84]"
      
      >
      <mgl-marker v-for="(marker, index) in markers" :key="index" :coordinates="validateCoordinates(marker.coordinates)" color="#000" :offset="[0 , 0]" ></mgl-marker>

        <mgl-navigation-control />
      </mgl-map>
 
  </template>
  
  <script>
  import { MglMap, MglMarker,MglNavigationControl } from 'vue-maplibre-gl'
  
  export default {
    name: 'App',
    components: {
      MglMap,
      MglMarker,
      MglNavigationControl
    },
    data() {
      return {
        markers: [
          { coordinates: [11.51, 3.84]},
          { coordinates: [0,0] }
        ]
      }
    },
    methods: {
      validateCoordinates(coordinates) {
  const [lng, lat] = coordinates;
  if (lat < -90 || lat > 90) {
    console.error(`Invalid coordinates: latitude must be between -90 and 90. Received: ${lat}`);
    return [0, lat];
  }
  if (lng < -180 || lng > 180) {
    console.error(`Invalid coordinates: longitude must be between -180 and 180. Received: ${lng}`);
    return [0, lat];
  }
  return [lng, lat];
}
    }
  }
  </script>
  
  <style lang="css" scoped >
  @import "~vue-maplibre-gl/dist/vue-maplibre-gl.css";
 

  </style>
  