<template>
    <body>
      <main class="container mt-3">
        <div class="row"><br /><br /><br /><br /><br /><br /></div>
        <div class="row my-5">
          <div class="col-md-4 offset-md-4">
            <section class="bg-transparent bg-gradient rounded">
              <form
                class="card card-body bg-transparent bg-gradient rounded"
                v-on:submit.prevent="ingresar();"
              >
                <h1 class="text-center">INGRESAR</h1>
                <br />
                <!-- username -->
                <div class="mb-3">
                  <label for="username">Usuario:</label>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    class="form-control bg-transparent bg-gradient"
                    placeholder="Username"
                    v-model="ingreso.username"
                  />
                </div>
                <!-- contraseñas -->
                <div class="mb-3">
                  <label for="contraseña1">Contraseña:</label>
                  <input
                    type="password"
                    name="contraseña"
                    id="password"
                    class="form-control bg-transparent bg-gradient"
                    placeholder="Contraseña"
                    v-model="ingreso.password"
                  />
                </div>
                <input type="submit" value="INGRESAR" class="btn btn-primary">
              </form>
            </section>
          </div>
        </div>
      </main>
    </body>
  </template>
  <script>
  export default {
    name: "ingresar",
    data() {
      return {
        ingreso: {
          username:'',
          password: ''
        },
      };
    },
    methods: {
      ingresar() {
        let url = "http://127.0.0.1:8000/api/login/";
        let ingreso = this.ingreso;
        let post = {
          method: "POST",
          body: JSON.stringify(ingreso),
          headers: {
            "content-Type": "application/json",
          },
        }
        fetch(url,post)
        .then((response) => {
                    if(response.status==200){
                    localStorage.setItem(this.ingreso.username);
                    this.$router.push('/');}
                    else{
                      
                    }
        });
      },
    },
  };
  </script>