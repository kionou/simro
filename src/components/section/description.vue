<template>
    <div>
        <div class="content">
        <h2>Bienvenue A Simro</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis explicabo laboriosam vero, quis ullam aperiam, incidunt repellendus culpa est obcaecati tempora quibusdam maiores minima quisquam sed tempore harum assumenda voluptatibus!</p>
        <div class="content-card">
          <div class="card">
            <div class="image">
              <img src="@/assets/images/vision.jpg" alt="">
            </div>
            <h4>Nos missions</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat perferendis tempore incidunt. Minima iste consequuntur facilis totam! Facilis, autem accusantium? Nisi quidem consectetur culpa asperiores nulla natus aliquid cum a!</p>
          </div>
          <div class="card">
            <div class="image">
              <img src="@/assets/images/vision.jpg" alt="">
            </div>
            <h4>Notre vision</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat perferendis tempore incidunt. Minima iste consequuntur facilis totam! Facilis, autem accusantium? Nisi quidem consectetur culpa asperiores nulla natus aliquid cum a!</p>
          </div>
          <div class="card">
            <div class="image">
              <img src="@/assets/images/vision.jpg" alt="">
            </div>
            <h4>Nos valeurs</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat perferendis tempore incidunt. Minima iste consequuntur facilis totam! Facilis, autem accusantium? Nisi quidem consectetur culpa asperiores nulla natus aliquid cum a!</p>
          </div>

        </div>


      </div>
    </div>
</template>

<script>
export default {
    name: 'CptDescription',

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
}
 .content p{
  padding: 10px;
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
height: 261px;
margin:  10px;


  }

}

</style>