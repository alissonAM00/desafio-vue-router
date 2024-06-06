<template>
  <div>
    <div class="fondo">
      <header class="py-3">
        <div class="d-flex justify-content-center">
          <h1>
            UPPS!! este menu esta vacio
          </h1>
        </div>
        <div class="d-flex justify-content-center text-white">
            <h3 >Porfavor</h3></div>
        <div class=" d-flex justify-content-center py-5">
          <button
            class="btn Btn align-items-center"
          >
            <router-link class="text-decoration-none text-danger" to="/"
              >Regresa al inicio</router-link
            >
          </button>
        </div>
      </header>
      <main class="row">
        <div class="col">
          <img src="../assets/img/notfound.gif" alt="" />
        </div>
        <div class="col"></div>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  name: "NotFound",
};
</script>

<style scoped>
.fondo {
  background-image: url("../assets/img/frog.jpg");
  background-size: cover;
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