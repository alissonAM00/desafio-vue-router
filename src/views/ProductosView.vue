<template>
  <div class="productos">
    <header class="text-center">
      <h1>Nuestros Productos</h1>
      <button class="btn  Btn">
        <router-link class="text-decoration-none text-danger" to="/"
          >Volver al inicio</router-link
        >
      </button>
    </header>
  <main >
    <div class="row g-4">
      <div
        class="col-12 col-md-6 col-lg-3"
        v-for="(plato, index) in platos"
        :key="index"
      >
        <Card :plato="plato" />
      </div>
    </div>
  </main>
  </div>
</template>
  
<script>
import Card from "@/components/Card.vue";
export default {
  name: "ProductosView",
  props: ["platos"],
  components: {
    Card,
  },
  created() {
    console.log(this.platos);
  },
};
</script>
<style scoped>
.productos{
  background-image: url("../assets/img/restaurant2.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.Btn {
  position: relative;
  width: 150px;
  height: 55px;
  border-radius: 45px;
  border: none;
  background-color: rgb(69, 50, 105);
  color: white;
  box-shadow: 0px 10px 10px rgb(128, 114, 153) inset,
    0px 5px 10px rgba(5, 5, 5, 0.212), 0px -10px 10px rgb(124, 54, 255) inset;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.Btn::before {
  width: 70%;
  height: 2px;
  position: absolute;
  background-color: rgba(250, 250, 250, 0.678);
  content: "";
  filter: blur(1px);
  top: 7px;
  border-radius: 50%;
}

.Btn::after {
  width: 70%;
  height: 2px;
  position: absolute;
  background-color: rgba(250, 250, 250, 0.137);
  content: "";
  filter: blur(1px);
  bottom: 7px;
  border-radius: 50%;
}

.Btn:hover {
  animation: jello-horizontal 0.9s both;
}

@keyframes jello-horizontal {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}
</style>