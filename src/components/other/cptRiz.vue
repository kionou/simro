<template>
                <section class="table__header">
                    <h1> Marché de Pitoa </h1>

                  <p v-if="toggle">Le prix des produits {{ produits[0]?.famille_produit }} dans la Region {{ selected.nom_region}} </p> 
                  <i class="fa-solid fa-bars" @click="ouvert"></i>
        </section>
        <div class="alert" v-if="alertRegion">
            {{ alertRegion }}
        </div>
        <section class="table__body" v-else >
            <table>
                <thead>
                   
                    <tr  >
                        <th> Marchés </th>

                        <th> Date </th>
                        <th v-for="produit in produits" :key='produit.id'> {{ produit.nom_produit }} </th>
                      
                     
                    </tr>
                </thead>
                <tbody>

                    <tr v-for="(prixproduit, index) in prix" :key="index">
          <td>{{ prixproduit.marche }}</td>
          <td class="date">{{ prixproduit.produits[0].date_enquete }}</td>
          <template v-for="produit in produits" :key="produit.code_produit">
            <td>
              {{
                prixproduit.produits.reduce((acc, curr) => {
                  if (curr.produit === produit.nom_produit) {
                    return curr.prix_kg;
                  }
                  return acc;
                }, "--")
              }}
              F CFA
            </td>
          </template>
        </tr>

             
                    
                </tbody>
            </table>
        </section>

</template>

<script>
export default {
    name: 'CptRiz',
    props:['prix' , 'produits' , 'alertRegion' , 'selected'],

    data() {
        return {
            toggle:true,
         

        };
    
            
            
        
    },

//     computed: {
//     produitsFiltres() {
//       return this.produits.filter(produit => {
//         return this.prix.some(prixProduit => {
//           return prixProduit.produits.some(prix => {
//             return prix.produit === produit.nom_produit;
//           });
//         });
//       });
//     }
//   }









    // mounted() {
    //     console.log('rrrhhh',this.produits);
    // },

    methods: {
     async ouvert(){
        console.log('gggg');
    let sidebar = document.querySelector(".sidebar");
    let titre = document.querySelector('.titre')
    console.log(titre);
    sidebar.classList.toggle("close");
    titre.classList.toggle("act");
    this.toggle = !this.toggle

    },
    },
};
</script>

<style lang="css" >

.table__header {
    width: 100%;
    padding: .8rem 2rem;
    display: flex;
    font-size: 16px;
    text-transform: uppercase;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.table__header p{
    font-size: 14px;
    text-transform: initial;

}
.table__header i {
    position: absolute;
    top: 4px;
    left: 5px;
    cursor:pointer;
    visibility: hidden;

}
/* .table__header .btn  button.active {
    background-color: var(--blanc);
    color: var(--vert);
    cursor: pointer;
    border: 1px solid var(--vert);
} */

@media (max-width: 768px) {
    .table__header {
  
    font-size: 12px;
}


}


.table__body {
    width: 99%;
    max-height: calc(89% - 9.6rem);
    margin: .8rem auto;
    overflow: auto;
    overflow: overlay;
}

.table__body::-webkit-scrollbar{
    width: 0.5rem;
    height: 0.5rem;
}

.table__body::-webkit-scrollbar-thumb{
    border-radius: .5rem;
    background-color: #0004;
    visibility: hidden;
}

.table__body:hover::-webkit-scrollbar-thumb{ 
    visibility: visible;
}

table {
    width: 100%;
}

table, th, td {
    border-collapse: collapse;
    padding: 10px;
    text-align:center;
    font-size: 12px;
}

.date{
    color: var(--red);

}

thead th {
    position: sticky;
    top: 0;
    left: 0;
    background-color: var(--vert);
    text-transform: capitalize;
    color: var(--blanc);
}

/* tbody:nth-child(odd) tr:nth-child(even) {
  background-color: red;
} */

tbody:nth-child(odd) tr:nth-child(odd) {
  background-color: #0000000b;
}

tbody:nth-child(even) tr:nth-child(even) {
  background-color: #0000000b;
}

/* tbody:nth-child(even) tr:nth-child(odd) {
  background-color: red;
} */
/* tbody tr:nth-child(2n+2) {
    background-color: #0000000b;
} */

tbody tr {
    --delay: .1s;
    transition: .5s ease-in-out var(--delay), background-color 0s;
}

tbody tr.hide {
    opacity: 0;
    transform: translateX(100%);
}


tbody tr td,
tbody tr td p,
tbody tr td img {
    transition: .2s ease-in-out;
}

tbody tr.hide td,
tbody tr.hide td p {
    padding: 0;
    font: 0 / 0 sans-serif;
    transition: .2s ease-in-out .5s;
}


@media (max-width: 1000px) {
    td:not(:first-of-type) {
        min-width: 10rem;
    }
}

@media (max-width: 768px) {
    .table__header i{
        visibility: visible;
    
    }
    .table__header  p{
        display: none;
    
    }
    .sidebar.close {
        width: 40px;
    }

    .sidebar.close~.two-section {
        left: 40px;
        width: calc(100% - 40px);
    }

    .sidebar.close .nav-links li .link_name {
        opacity: 0;
        pointer-events: none;
    }
    table, th, td {
    font-size: 12px;
}
}


.alert{
text-align: center;
padding: 70px;
color: var(--red);


}

</style>