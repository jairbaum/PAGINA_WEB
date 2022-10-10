<template>
  <body>
    <main class="container py-5 mt-5 mb-5 ">
      <div class="row"><br><br><br></div>
      <section class="card card-body ms-auto p-5 bg-transparent bg-gradient ">
        <h1 class="text-center">
          DistriCar
        </h1>
        <br>
        <h3 class="text-center">
          DistriCar es una empresa dedicada a brindar una ayuda para que pudas vender o encontrar el carro de tus sueños 
        </h3>
        <div>
              <h2 class="mt-5 text-center">
                ¿Que deseas hacer?
              </h2>
                <router-link to="/Vehiculos" class="btn btn-primary mt-5 col-md-5 mx-auto ms-5">COMPRAR VEHICULO</router-link>
                <router-link to="/Vehiculos/Subir" class="btn btn-primary mt-5 col-md-5 col-4 mx-auto ms-5">VENDER VEHICULO</router-link>  
        </div>
    
      </section>
    </main>
  </body> 
</template>