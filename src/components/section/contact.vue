<template>
  <div>
    <h2>contact</h2>
    <div class="contact-content">
      <div class="texte">

        <div class="texte-content">
          <div class="icon">
            <i class="fa-solid fa-location-dot"></i>
          </div>
          <p>
            Rond point Cité Keur Gorgui,
          </p>

        </div>
        <div class="texte-content">
          <div class="icon">
            <i class="fa-solid fa-phone"></i>
          </div>

          <p>
            +237 222 89 56 23 77
          </p>

        </div>
        <div class="texte-content">
          <div class="icon">
            <i class="fa-solid fa-envelope"></i>
          </div>

          <p>
            Email: simro@gmail.com
          </p>

        </div>
        <div class="texte-content">
          <div class="icon">
            <i class="fa-solid fa-clock"></i>
          </div>

          <p>
            Du Lundi au Vendredi <br> 08h00 à 18h00
          </p>

        </div>

      </div>
      <div class="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1990.220815269343!2d11.526605055353668!3d3.928899648961301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bc74c724818fb%3A0x1149b51f007ab3ed!2sSIMRO%20UNIVERS%20TECHNOLOGIES!5e0!3m2!1sfr!2sci!4v1679835161584!5m2!1sfr!2sci"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>


    </div>
  </div>
</template>

<script>
export default {
  name: 'CptContact',

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
.contact h2 {
  text-align: center;
  padding: 20px;
  font-weight: bold;
  font-size: 30px;
  line-height: 36px;
  color: var(--vert);
  text-transform: uppercase;
}

.contact-content {
  max-width: var(--max-width);
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-shadow: var(--box-shadow);
  justify-content: space-between;
  background-color: var(--vert);

}

.contact-content .texte {
  width: 98%;
  max-width: 290px;
  height: 340PX;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: var(--vert);
  color: var(--blanc);

}

.contact-content .texte .texte-content {
  display: flex;
  justify-content: flex-start;
  padding: 10px;
  align-items: center;


}

.contact-content .texte .texte-content .icon {
  width: 35px;
  height: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 10px;
  background-color: hsl(162.17deg 89.52% 62.43% / 52%);
}

.contact-content .texte .texte-content i {
  font-size: 15px;

}

.contact-content .texte .texte-content-card p {
  text-align: center;
}

.maps {
  width: 100%;
  height: 450px;
  padding: 10px;
  background-color: var(--blanc);

}

iframe {
  width: 100%;
  height: 100%;
}

@media (max-width: 768px) {
  .contact-content {
    max-width: 600px;
    width: 90%;
    flex-direction: column;

  }

}</style>