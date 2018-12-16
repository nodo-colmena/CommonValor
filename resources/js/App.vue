<template>
    <div>  <!-- Renderizado Dinamico de Layouts bind con funcion layout-->
       <component v-bind:is="layout"></component> 
    </div>
</template>

<script>

//Importacion de Layouts 
import NoFlexboxLayout from './layouts/NoFlexbox.vue'
import DefaultLayout from './layouts/Default.vue'
import SimpleLayout from './layouts/Simple.vue'

export default {
  name: 'App',
  components:{
    DefaultLayout,
    NoFlexboxLayout,
    SimpleLayout
  },
  computed: {
    layout() {  //Funcion para Layouts Dinamicos mas info aqui ::: https://itnext.io/anyway-heres-how-to-create-a-multiple-layout-system-with-vue-and-vue-router-b379baa91a05
      return (this.$route.meta.layout || 'default') + '-layout';
    }
  }
}
</script>

<style lang="scss">

</style>


/*
Usar Bootstrap con Vue.js es un poco complicado, debido a la gran dependencia de los 
componentes dinámicos de Bootstrap en jQuery. 

Bootstrap-Vue no solo es compatible con los componentes y el sistema de cuadrícula 
de Bootstrap, sino que también incluye la compatibilidad con las Directivas Vue.js , 
que nos brinda el conjunto completo de características del ecosistema Vue.js.
Ademas de que sus componentes son rederizados mas rapido que los de bootstrap normal

mas info: https://medium.com/@BjornKrols/integrating-and-customising-bootstrap-4-in-vue-js-cbc29ba7688e

*/ */