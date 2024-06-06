<template>
  <div class="text-center contacto">
    <header>
      <h1 class="text-white">Contactanos</h1>
      <button class="btn  Btn">
        <router-link class="text-decoration-none text-danger" to="/"
          >Volver al inicio</router-link
        >
      </button>
    </header>
    <main class="container">
      <section class="border bg-info px-5 my-5 rounded-5 opacity-50">
        <h3><strong>DIrección:</strong>
        <span>av.Ricacomida #199</span></h3>
        <h3><strong>email:</strong>
        <span>suricatafood@suricata.cl</span></h3>
        <h3><strong>telefono:</strong>
        <span>+56912345678</span></h3>
      </section>
    </main>
  </div>
</template>
  
  <script>
export default {
  name: "ContactoView",
  components: {},
};
</script>

  <style scoped>
.contacto {
  background-image: url("../assets/img/resto.png");
  background-size: cover;
  height: 100vh;
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
  0px 5px 10px rgba(5, 5, 5, 0.212),
  0px -10px 10px rgb(124, 54, 255) inset;
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