<template>
    <div class="container">
        <div class="titre">
           
        <img src="@/assets/images/logo3.png" alt=""  >
          <div class="textes">
            <p class="fr">Système d'Information sur les Marchés du Riz et de l'Oignon au Cameroun</p>
            <hr>
            <p class="en">Information System on Rice and Onion Markets in Cameroon</p>
          
        </div>
        </div>
        <div class="texte">
            <h2>404</h2>
            <h1>Not found</h1>
            <p>La page n'a pas été trouvée sur ce serveur</p>
        </div>

        <div class="boutton"  @click="$router.push({ path: '/' })"
                style="cursor: pointer">
            <button>Accueil</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'SimroError',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--blanc);

}

.titre  {

    display: flex;
    justify-content: center;
    align-items: center;
  font-family: 'Playfair Display', serif;
  padding: 30px 10px;

  }
  .titre  img {
  height: 7rem;
  border: none;
  width:auto ;
  margin-right: 25px;
}
hr{
  margin: 5px 0;
  border: 1px solid ;
}
.fr{
  color: var(--red);
}

.en{
  color: var(--vert);
  text-align: center;
}
.textes{
    font-size: 16px;
}

.texte{
    font-family: "Ubuntu","Open Sans",sans-serif;
    text-align: center;
    padding: 40px 0;

}

.texte h2{
    font-size: 100px;
    font-weight: 400;
    line-height: 1.1;
    color: #333359;
}
.texte h1{
    font-size: 40px;
    font-weight: 400;
    line-height: 1.1;
    color: #333359;

}
.texte p{
    font-size: 15px;
    margin: 15px 0;
    color: #6b7c93;
   

}
.boutton{
    text-align: center;

    padding: 20px 10px;
}
.boutton button, .boutton button:hover {
    display: inline-block;
    text-align: center;
    margin: 0;
    position: relative;
    border: none;
    cursor: pointer;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-weight: 600;
    line-height: 1.5;
    text-decoration: none;
    vertical-align: middle;
    background-image: none;
    letter-spacing: initial;
    text-transform: uppercase;
    color: var(--blanc);
    background-color: var(--vert);
    border: none;
    box-shadow: var(--shadow-medium);
    font-size: 14px;
    padding: 8px 16px;
    border-width: 0;
    border-style: solid;
    border-radius: 4px;
    text-decoration: none;
}

@media (max-width: 720px) {
    .titre  img {
  height: 5rem;
}

.textes{
    font-size: 14px;
}
}

@media (max-width: 620px) {
    .titre  img {
  height: 4rem;
}

.textes{
    font-size: 12px;
}
}

@media (max-width: 530px) {
    .titre  {
        flex-direction: column;
        text-align: center;

  }
    .titre  img {
        margin-right: 0;
        margin-bottom: 15px;
}
}
</style>