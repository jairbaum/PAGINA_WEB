<template>
    <body>
      <main>
        <div class="dropdown">
          <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
            <button class="dropdown-item" type="button">Action</button>
            <button class="dropdown-item" type="button">Another action</button>
            <button class="dropdown-item" type="button">Something else here</button>
          </div>
        </div>
  
        <div class="ms-auto">
          <div class="row mx-5 mt-5 text-center" style="width: auto;">
            <div
              class="card col-md-4 bg-transparent bg-opacity-10 my-4 mx-3 tarjeta" style="width: 25rem;"
              v-for="vehiculo in vehiculos"
              :key="vehiculo.id"
            >
              <img v-bind:src="vehiculo.imagen" class="card-img-top mt-2  rounde " />
              <div class="card-body bg-opacity-10">
                <h3 class="card-title bg-opacity-10">
                  {{ vehiculo.marca }} {{ vehiculo.modelo }} <br />{{
                    vehiculo.año
                  }}
                </h3>
                <h4 class="mt-4">COP {{ vehiculo.precio }}</h4>
                <router-link to="/" class="col-6 mx-5 px-5 btn btn-primary">Comprar</router-link>
              </div>
            </div>
          </div>
        </div>
      </main>  
    </body>
  </template>
  <script>
  export default {
    name: "vehiculo",
    data() {
      return {
        vehiculos: [],
      };
    },
    created() {
      fetch("http://127.0.0.1:8000/api/vehiculos/")
        .then((respuesta) => respuesta.json())
        .then((data) => (this.vehiculos = data))
        .catch((error) => {
          console.log("no se pudo " + error);
        });
    },
  };
  </script>