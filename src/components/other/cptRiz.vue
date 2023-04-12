<template>
    
                <section class="table__header">
                    <h1> Marché de Pitoa </h1> 
                  <p v-if="toggle">Le prix des prduits semences dans la Region du Centre</p> 
                  <i class="fa-solid fa-bars" @click="ouvert"></i>
           
        </section>

        <section class="table__body"  >
            <table>
                <thead>
                    <tr>
                        <th> Marchés </th>

                        <th> Date </th>
                        <th> Riz local étuvé </th>
                        <th> Riz local non étuvé </th>
                        <th> Riz paddy </th>
                        <th> Riz importé</th>
                        <th> Riz importé(étuvé) </th>
                        <th> Farine </th>
                     
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Lagdo</td>

                        <td class="date">11 - 12 - 23</td >
                        <td> 800 F CFA</td>
                        <td> 600 F CFA</td>
                        <td> 1000 F CFA</td>
                        <td> 1200 F CFA</td>
                        <td> 1100 F CFA</td>
                        <td> 750 F CFA </td>

                       
                    </tr>
                    <tr>
                        <td>Ngong</td>

                        <td class="date">11 - 12 - 23</td >
                        <td> 800 F CFA</td>
                        <td> 600 F CFA</td>
                        <td> 1000 F CFA</td>
                        <td> 1200 F CFA</td>
                        <td> 1100 F CFA</td>
                        <td> 750 F CFA </td>
                       
                    </tr>
                
                    <tr>
                        <td>Pitoa</td>
                        <td class="date">11 - 12 - 23</td >
                        <td> 800 F CFA</td>
                        <td> 600 F CFA</td>
                        <td> 1000 F CFA</td>
                        <td> 1200 F CFA</td>
                        <td> 1100 F CFA</td>
                        <td> 750 F CFA </td>
                       
                    </tr>
                    <tr>
                        <td> Touboro</td>

                        <td class="date">11 - 12 - 23</td >
                        <td> 800 F CFA</td>
                        <td> 600 F CFA</td>
                        <td> 1000 F CFA</td>
                        <td> 1200 F CFA</td>
                        <td> 1100 F CFA</td>
                        <td> 750 F CFA </td>
                       
                    </tr>
                    <tr>
                        <td> Beka</td>

                        <td class="date">11 - 12 - 23</td >
                        <td> 800 F CFA</td>
                        <td> 600 F CFA</td>
                        <td> 1000 F CFA</td>
                        <td> 1200 F CFA</td>
                        <td> 1100 F CFA</td>
                        <td> 750 F CFA </td>
                       
                    </tr>
                    <tr>
                        <td> Tchontchi</td>

                        <td class="date">11 - 12 - 23</td >
                        <td> 800 F CFA</td>
                        <td> 600 F CFA</td>
                        <td> 1000 F CFA</td>
                        <td> 1200 F CFA</td>
                        <td> 1100 F CFA</td>
                        <td> 750 F CFA </td>
                       
                    </tr>
                    
                </tbody>
            </table>
        </section>

</template>

<script>
export default {
    name: 'CptRiz',

    data() {
        return {
            toggle:true
            
        };
    },

    mounted() {
        
    },

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
    max-height: calc(89% - 1.6rem);
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

tbody tr:nth-child(even) {
    background-color: #0000000b;
}

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

</style>