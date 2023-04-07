<template>
  
       
                <section class="table__header">
            <h1> Marché de Pitoa </h1> 
            <p>Les informations sur le marché de Pito</p>  
            <div class="btn">
                <button @click="layout = 'prix'" :class="{active:layout === 'prix'}">
                    Prix
                </button>
                <button @click="layout = 'stock'" :class="{active:layout === 'stock'}">
                    Stock
                </button>
            </div>
        </section>

        <section class="table__body" v-if="layout === 'prix'" >
            <table>
                <thead>
                    <tr>
                        <th> Oignon </th>
                        <th> Tas </th>
                        <th> Sachet 100g </th>
                        <th> Sachet 250g </th>
                        <th> Sachet 500g </th>
                        <th> Sachet 1kg </th>
                        <th> Sac 25kg </th>
                        <th> Sac 50kg </th>
                        <th> 3 litres </th>
                        <th> 5 litres </th>
                     
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Graine </td>
                        <td>50 F CFA</td>
                        <td> 100 F CFA </td>
                        <td> 150 F CFA </td>
                        <td>250 F CFA</td>
                        <td> 500 F CFA </td>
                        <td> 16000 F CFA </td>
                        <td>30000 F CFA</td>
                        <td> -- F CFA </td>
                        <td> -- F CFA </td>
                       
                       
                    </tr>
                    <tr>
                        <td> Bulbe </td>
                        <td>50 F CFA</td>
                        <td> 100 F CFA </td>
                        <td> 150 F CFA </td>
                        <td>250 F CFA</td>
                        <td> 500 F CFA </td>
                        <td> 16000 F CFA </td>
                        <td>30000 F CFA</td>
                        <td> -- F CFA </td>
                        <td> -- F CFA </td>
                       
                    </tr>
                    <tr>
                        <td> Lamelle séchée </td>
                        <td>50 F CFA</td>
                        <td> 100 F CFA </td>
                        <td> 150 F CFA </td>
                        <td>250 F CFA</td>
                        <td> 500 F CFA </td>
                        <td> 16000 F CFA </td>
                        <td>30000 F CFA</td>
                        <td> -- F CFA </td>
                        <td> -- F CFA </td>
                       
                    </tr>
                    <tr>
                        <td> Poudre </td>
                        <td>50 F CFA</td>
                        <td> 100 F CFA </td>
                        <td> 150 F CFA </td>
                        <td>250 F CFA</td>
                        <td> 500 F CFA </td>
                        <td> 16000 F CFA </td>
                        <td>30000 F CFA</td>
                        <td> -- F CFA </td>
                        <td> -- F CFA </td>
                       
                    </tr>
                  
                   
                

                    
                </tbody>
            </table>
        </section>

        <section class="table__body"  v-if="layout === 'stock'" >
            <table>
                <thead>
                    <tr>
                        <th> Type d'Oignon </th>
                        <th> Tas </th>
                        <th> Sachet 100g </th>
                        <th> Sachet 250g </th>
                        <th> Sachet 500g </th>
                        <th> Sachet 1kg </th>
                        <th> Sac 25kg </th>
                        <th> Sac 50kg </th>
                        <th> 3 litres </th>
                        <th> 5 litres </th>
                        

                      
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Graine </td>
                        <td>Oui</td>
                        <td> Non </td>
                        <td>Non </td>
                        <td>Oui</td>
                        <td> Oui </td>
                        <td> Oui </td>
                        <td>Non </td>
                        <td> Non </td>
                        <td> Non </td>

                       
                    </tr>
                    <tr>
                        <td> Bulbe </td>
                        <td>Oui</td>
                        <td> Non </td>
                        <td>Non </td>
                        <td>Oui</td>
                        <td> Oui </td>
                        <td> Oui </td>
                        <td>Non </td>
                        <td> Non </td>
                        <td> Non </td>
                       
                    </tr>
                
                    <tr>
                        <td> Lamelle séchée </td>
                        <td>Oui</td>
                        <td> Non </td>
                        <td>Non </td>
                        <td>Oui</td>
                        <td> Oui </td>
                        <td> Non </td>
                        <td>Non </td>
                        <td> Non </td>
                        <td> Non </td>
                       
                    </tr>
                    <tr>
                        <td> Poudre </td>
                        <td>Oui</td>
                        <td> Non </td>
                        <td>Non </td>
                        <td>Oui</td>
                        <td> Oui </td>
                        <td> Oui </td>
                        <td>Oui </td>
                        <td> Non </td>
                        <td> Non </td>
                       
                    </tr>
                 
                    
                </tbody>
            </table>
        </section>

          
 
</template>

<script>
export default {
    name: 'CptOignon',

    data() {
        return {
            layout:'prix',
            
        };
    },

    mounted() {
        
    },

    methods: {
        
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
}

.table__header .btn {
    width: 100%;
    /* max-width: 400px; */
    padding: 0 .8rem;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    /* border: 1px solid blue; */
    margin-top: 16px;
}
.table__header .btn button{
    padding: 15px 50px;
    border-radius: 30px;
    border: none;
    background-color: var(--vert);
    color: var(--blanc);
    cursor: pointer;
    margin-right: 10px;

}
.table__header p{
    font-size: 14px;
    text-transform: initial;

}
.table__header .btn  button.active {
    background-color: var(--blanc);
    color: var(--vert);
    cursor: pointer;
    border: 1px solid var(--vert);
}

@media (max-width: 768px) {
    .table__header {
  
    font-size: 14px;
}


}
@media (max-width: 500px) {
/* .table__header .btn {
    width: initial;
    max-width: 300px;
    flex-direction: column;
    margin-left: 15px;
} */
.table__header {

  padding: .8rem 0.5rem; 
  font-size: 11px;

}

.table__header .btn button{
    padding: 10px 30px;
    border-radius: 15px;
}

}
@media (max-width: 375px) {
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
    text-align: center;
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
        min-width: 12.1rem;
    }
}

@media (max-width: 768px) {
    .sidebar.close {
        width: 30px;
    }

    .sidebar.close~.two-section {
        left: 30px;
        width: calc(100% - 30px);
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