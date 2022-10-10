<template> 
  <body >
<nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container">
    <a class="navbar-brand" href="#">DistriCar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/Ingresar" class="nav-link">Ingresar</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/Registrarse" class="nav-link">Registrarse</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/Vehiculos" class="nav-link">Vehiculos</router-link> 
        </li>
        <li class="nav-item">
          <router-link to="/Vehiculos/Subir" class="nav-link">Subir Vehiculo</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<router-view/> 
</body>
<!-- <footer>
<ul>
  <li>
    <p>
      GRUPO 4 <br>  JIMMY ARANGO--
    </p>
  </li>
</ul>
</footer> -->
</template>
