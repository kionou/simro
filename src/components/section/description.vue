<template>
    <div>
        <div class="content">
          {{ array1 }}
        <h2>Bienvenue A Simro</h2>
        <p>SIMRO, plus qu’une plateforme d’information, un véritable outil d’aide à la prise de décision de la production.</p>
        <div class="content-card">
          <div class="card">
            <div class="image">
              <img src="@/assets/images/mission1.jpg" alt="">
            </div>
            <h4>Nos missions</h4>
            <p>1.	Mettre à la disposition des utilisateurs de informations de meilleure qualité sur les marchés ;</p>
            <p>2.	Planifier en toute connaissance de cause de la production et la commercialisation des produits agricoles en connaissance de cause ; </p>
            <p>3.	Renforcer la mise en relation des acteurs ; </p>
            <p>4.	Améliorer la rentabilité des exploitations agricoles à travers les meilleurs prix obtenus sur le marché ; </p>
            <p>5.	S’orienter vers des bonnes pratiques de gestion du savoir. </p>

          </div> 
          <div class="card">
            <div class="image">
              <img src="@/assets/images/goal.svg" alt="">
            </div>
            <h4>Nos valeurs</h4>
            <p>1-	Fiabilité et impartialité : elle est le reflet des conditions des marchés ;</p>
            <p>2-	Accessibilité : elle est disponible pour tous les intéressés ;</p>
            <p>3-	Représentativité : elle est représentative pour le producteur et l’acheteur.</p>

          </div>
          <div class="card">
            <div class="image">
              <img src="@/assets/images/vision.jpg" alt="">
            </div>
            <h4>Notre vision</h4>
            <p>Créer un cadre où toute monde a accès aux informations de qualité sur les marchés, pour un commerce équitable. </p>
          </div>

        </div>

{{ textes }}
      </div>
    </div>
</template>

<script>
// import axiosClient from '@/axiosClient';
export default {
    name: 'CptDescription',

    data() {
        return {
            textes:'',
            array1:''
        };
    },

    
    //   async mounted() {
    //     try {
    //   const response = await axiosClient.get('/simro/marche');
    //   console.log('response.data.texte',response.data.texte);
    //    this.textes = response.data.texte
    //   this.array1 = response.data.texte.shift()
    //   console.log(' this.array1', this.array1);
    //   console.log('this.textes',this.textes);

          
    //     } catch (error) {
    //       console.log(error);
    //     }
  
    // },

    methods: {
        
    },
};
</script>

<style lang="css" scoped>
 .content{
  max-width: var(--max-width);
  margin: 0 auto;
  height: auto;
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;


}
 .content h2{
  text-align: center;
    padding: 20px;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    text-transform: uppercase;
    color: var(--vert);
}
 .content p{
  padding-bottom: 5px;
  text-align: center;

}
 .content .content-card{
width: 100%;
height: auto;
display: flex;
justify-content: space-around;
text-align: justify;
margin-top: 10px;


}

 .content .content-card .card{
  width: 30%;
  height: 99%;
  margin: 0 10px;
      display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding:10px;
    border-radius: var(--raduis);
    box-shadow: var(--shadow-medium);

}
.card h4{
  padding: 10px 0;

}
 .content .content-card .card .image{
  width: 90px;
  height: 90px;

}
 .content .content-card .card .image img{
  width: 100%;
  height: 100%;
}
@media (max-width: 768px) {
   .content .content-card{

flex-direction: column;
align-items: center;


}
 .content .content-card .card{

width: 100%;
max-width: 290px;
/* height: 261px; */
margin:  10px;


  }

}

</style>