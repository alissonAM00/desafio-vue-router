<template lang="">
  <!-- cartas -->
    <div class="card h-100">
          <img :src="plato.imagen" class="card-img-top" alt="colaciones" />
          <div class="card-body">
            <h5 class="card-title fw-bold">{{plato.nombre}}</h5>
            <p class="card-text">
             {{plato.descripcion}}
            </p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">{{plato.cantidad}}</li>
            <li class="list-group-item">{{plato.precio}}</li>
          </ul>
          <div class="card-body">
            <a href="#" class="card-link">Ver más</a>
            <a href="#" class="card-link">Comprar</a>
      </div>
    </div>
 
</template>
<script>
export default {
  data(){
    return {
      findMe: this.datosContacto
    }
  },
  name:'Card',
  props:{
    plato: Object,
  },
  created(){
    console.log(this.findMe)
  }
}
</script>
