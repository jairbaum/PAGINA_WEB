<template>
    <body>
  
    <main class="container my-5">
      <div class="row">
        <div class="col-md-4 offset-md-4 mt-5">
          <section class="bg-transparent bg-gradient rounded">
            <form v-on:submit.prevent="registrar();" class="card card-body bg-transparent rounded" >
              <h1 class="text-center">REGISTRARSE</h1>
              <br />
              <!-- username -->
              <div class="mb-3">
                <label for="username">Usuario:</label>
                <input
                  type="text"
                  name="username"
                  class="form-control bg-transparent bg-gradient"
                  placeholder="Username"
                  v-model="registro.username"
                />
              </div>
              <!-- email -->
              <div class="mb-3">
                  <label for="email">Correo Electronico:</label>
                  <input
                    type="text"
                    name="email"
                    class="form-control bg-transparent bg-gradient"
                    placeholder="Correo Electronico"
                    v-model="registro.email"
                  />
                </div>
              
              <!-- contraseñas -->
              <div class="mb-3">
                <label for="contraseña1">Contraseña:</label>
                <input
                  type="password"
                  name="contraseña"
                  class="form-control bg-transparent bg-gradient"
                  placeholder="Contraseña"
                  v-model="registro.password"
                />
              </div>
              <!-- repetir contraseña -->
              <div class="mb-3">
                <label for="confirmarcontraseña">Confirmar Contraseña:</label>
                <input
                  type="password"
                  name="confirmarcontraseña"
                  class="form-control bg-transparent bg-gradient"
                  placeholder="Confirmar Contraseña"
                />
              </div>
              <input type="submit" class="btn btn-primary" value="REGISTRARSE"/> 
            </form>
          </section>
        </div>
      </div>
    </main>    
  </body>
  </template>
  <script>
      
  // import { required, minLength } from 'vuelidate/lib/validators';
  export default {
    name: "Registrar",
    data() {
      return {
        completo:false,
        registro: {
          username:'',
          email: '',
          password: '',
        },
      };
    },
    methods:{
      registrar(){
        let url='http://127.0.0.1:8000/api/registrar/';
        let user= this.registro;
        let post= {
          method: 'POST',
          body: JSON.stringify(user),
          headers:{
            'content-Type':'application/json'
          }
        }
              fetch(url,post)
              .then(respuesta => respuesta.json())
              this.$router.push('/')
  
      }
    },
    // validations:{
    //   registro: {
    //       first_name:{required, minLength: minLength(3)},
    //       last_name:{required, minLength: minLength(3) },
    //       username:{required,minLength: minLength(6) },
    //       password:{required, minLength: minLength(7)},
    //       email:{required,minLength: minLength(8) },
    //     }
    // }
       
          
  };
  </script>