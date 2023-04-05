<template>
  <div class="corps-state">
    <div class="corps-statistique-group">
      <div class="corps-statistique-titre">
        <h2 class="titre1">promotion {{stats.promotion}}</h2>
      </div>
      <div class="corps-statistique2">
        <div class="corps-statistique1">
          <div class="corps-statistique-stat1 ">
            <h3 class="titre2">{{ stats.realtime }}</h3>
            <span></span>
            <p class="etud">ÉTUDIANTS EN PRÉSENTIEL</p>
          </div>
          <div class="corps-statistique-stat1">
            <h3 class="titre2">{{ stats.online}}</h3>
            <span></span>
            <p class="etud">ETUDIANTS EN LIGNE</p>
          </div>
          <div class="corps-statistique-stat1">
            <h3 class="titre2">{{ stats.online + stats.realtime }}</h3>
            <span></span>
            <br>
            <p class="certs">CERTIFIÉS DE <br>NaN</p>
          </div>
          <div class="corps-statistique-stat1 bordre">
            <h3 class="titre2">55</h3>
            <span></span>
            <br>
            <p class="certs">TAUX <br>D'INSERTION</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:"slideComponent",
  props: ['stats']

}
</script>

<style scoped>

.corps-state{
  min-width: 100%;
  width:100%;
  text-align:center;
}
.corps-statistique-group{
  max-width: var(--max-width);
  background-color: var(--bg2);
  border-radius: 20px;
 margin-right: 10px;
 margin-left: 10px;
}

.corps-statistique1{
  display: flex;
  flex-direction: row;
  padding: 0px 10px;
  justify-content: space-around;
  align-items: center;
  align-content: center;
}
.corps-statistique2{
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-content: center;
}

.corps-statistique-titre .titre1 {
  padding: .8rem;
  text-align: center;
  font-weight: 500;
  font-size: 1.7rem;
  color: var(--blanc);
  text-transform: uppercase;
}

.corps-statistique-stat1 {
  border-right: 3px solid var(--violet);
  border-left:none;
  border-top: none;
  border-bottom:  none;
  border-collapse: collapse;
  width: 25%;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.corps-statistique-stat1 .titre2 {
  border-bottom: 4px solid var(--blanc);
  width: 60px;
  font-size: 30px;
  color: var(--violet);
  text-align: center;
}

.corps-statistique-stat1 .cert {
  text-align: center;
  font-size:18px;
  width:150px;
} 


</style>