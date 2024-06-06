<template>
  <div class="home">
       <header class="container">
        <h1 class="bienvenida text-center">Bienvenidos a Suricata food</h1>
      </header>
      <main >
    <section class="container">
      <h2 class="text-center">No te puedes perder esta oportunidad</h2>
      <div class="row intro d-flex justify-content-around text-center rounded-5 ">
        <div class="col col-12 col-ms-6 col-lg-3">
          <strong>menu del dia</strong>
          <img src="../assets/img/menu.jpg" alt="" class="rounded-5">
        </div>
        <div class="col-12 col-ms-6 col-lg-3 ">
          <strong>La Hora Feliz </strong>
          <img src="../assets/img/happy.jpeg" alt="" class="rounded-5">
        </div>
        <div class="col-12 col-ms-6 col-lg-3 ">
          <strong>reservas</strong>
          <img src="../assets/img/reserva.jpeg" alt="" class="rounded-5">
        </div>
      </div>
    </section>
    <section class="container">
      <div class="salida text-end  py-3 " >
        <strong >Eventos y Promociones nuevas cada semana!!</strong>
      </div>
    </section>
    
       <section >
      <div id="carouselExample" class="carousel slide">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="../assets/img/bebidas.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/cafeyte.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/desayunos.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/dulces.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/empanadas.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/colaciones.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/verduras.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/ensalada.jpeg"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="../assets/img/coctel.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
        
      </div>
    </section>
  </main>
  
   
  </div>
</template>
<script>
export default {
  name: "HomeView",

  components: {},
};
</script>
<style scoped>
.carousel-item img {
  height: 50vh;
  object-position: center;
}

h2{
  color:rgba(31, 144, 193, 0.897);
}
.home {
  background-image: url("../assets/img/restaurant.jpg");
  background-size: cover;
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  
}
.bienvenida{
  color:rgba(16, 169, 235, 0.897);
}
.intro img{
  height: 200px;
  width: 100%;
}
.intro, .salida{
  color: #f5f5f5;
}


</style>