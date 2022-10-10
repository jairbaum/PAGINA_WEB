<template>
    <body>
    <main class="container">
        <div class="row mt-5">
            <div class="col-md-4 offset-md-4 mt-5">
                <section class="bg-transparent bg-gradient rounded">
                <form class="card card-body bg-transparent bg-gradient rounded">
                    <h1 class="text-center">
                        SUBIR VEHICULO
                    </h1>
                    <br>
                    <!-- Marca -->
                    <div class="mb-3 ">
                        <label for="marca">Marca:</label>
                        <input type="text" name="marca" class="form-control bg-transparent bg-gradient" placeholder="Marca">
                    </div>
                    <!-- Modelo -->
                    <div class="mb-3">
                        <label for="modelo">Modelo:</label>
                        <input type="text" name="modelo" class="form-control bg-transparent bg-gradient" placeholder="Modelo">
                    </div>
                    <!-- Año -->
                    <div class="mb-3">
                        <label for="Año">Año:</label>
                        <input type="number" name="Año" class="form-control bg-transparent bg-gradient" placeholder="Año">
                    </div>
                    <!-- precio -->
                    <div class="mb-3">
                        <label for="precio">Precio:</label>
                        <input type="number" name="Precio" class="form-control bg-transparent bg-gradient" placeholder="Precio">
                    </div>
                    <!-- Usado -->
                    <div class="mb-3">
                        <label for="Usado">Usado:</label>
                        <input type="checkbox" name="Usado" class="form-check-input mx-2 bg-transparent bg-gradient" placeholder="Usado">
                    </div>
                    <!-- Imagen -->
                    <div class="custom-file mb-4">
                        <label class="custom-file-label " >Seleccionar Archivo</label>
                        <input type="file" class="custom-file-input bg-transparent bg-gradient" >
                      </div>

                    <button class="btn btn-primary">
                        PUBLICAR
                    </button>

                </form>
            </section>
            </div>
        </div>
    </main>
        
  </body>
</template>
<script>
     export default{
        name:'vehiculoPost',
        data(){
          return{
            
            }
          }
        ,
        // created(){
        //     let url='http://127.0.0.1:8000/api/vehiculos/'
        //     fetch(url,)
        //     .then(respuesta => respuesta.json())
        //     .then(data=> this.vehiculos=data)
        //     this.$router.push('/')
        // },
      };
</script>