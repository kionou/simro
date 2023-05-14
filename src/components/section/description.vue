<template>
    <div>
        <div class="content">
         
        <h2>{{ $t('description.titre')}}</h2>
        <p>{{ $t('description.corps')}}</p>
        <div class="content-card">
          <div class="card">
            <div class="image">
              <img src="@/assets/images/vision.jpg" alt="">
            </div>
            <h4>{{ $t('description.vision_titre')}}</h4>
            <p>{{ $t('description.vision_corps')}} </p>
          </div>
          <div class="card">
            <div class="image">
              <img src="@/assets/images/mission1.jpg" alt="">
            </div>
            <h4>{{ $t('description.mission_titre')}}</h4>
            <p>{{ $t('description.mission_corps')}}</p>

          </div> 
         
          <div class="card">
            <div class="image">
              <img src="@/assets/images/goal.svg" alt="">
            </div>
            <h4>{{ $t('description.valeur_titre')}}</h4>
            <p>{{ $t('description.valeur_corps')}}</p>
          </div>
        </div>
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