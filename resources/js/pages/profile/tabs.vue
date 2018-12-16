<template>
  <div>
    <b-container grid-list-xs>
      <b-card overlay
        style="max-height:10rem" 
        img-src="https://picsum.photos/900/150/?image=36"
        img-alt="Card Image"
        class="text-center"
        text-variant="white"
        title="Cti-BUAP"
        sub-title="110 seguidores | 2posts | 10 siguiendo">
        <p class="card-text">
          Mexico  unio abril 2018
        </p>
      </b-card>  
    </b-container>

    <b-nav fill tabs>
      <b-nav-item active>Blog</b-nav-item>
      <b-nav-item>Comentarios</b-nav-item>
      <b-nav-item>Respuestas</b-nav-item>
      <b-nav-item-dropdown id="nav7_ddown" text="Recompensa" extra-toggle-classes="nav-link-custom" right>
        <b-dropdown-item>Recompensa de Curacion</b-dropdown-item>
        <b-dropdown-item>Recompensa de Autor</b-dropdown-item>
      </b-nav-item-dropdown>
      <b-nav-item> Monedero</b-nav-item>
      <b-nav-item> Configuración</b-nav-item>
    </b-nav>
  </div>
</template>

<script>
  export default {
    name: 'tabs'
  }
</script>

<style scoped>

</style>