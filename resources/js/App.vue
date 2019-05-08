<template>
  <div>
    <!-- Renderizado Dinamico de Layouts bind con funcion layout-->
    <component v-bind:is="layout"></component>
  </div>
</template>

<script>
//Importacion de Layouts
import NoFlexboxLayout from "./layouts/NoFlexbox.vue";
import DefaultLayout from "./layouts/Default.vue";
import SimpleLayout from "./layouts/Simple.vue";
import LandingLayout from "./layouts/Landing.vue";

export default {
  name: "App",
  components: {
    DefaultLayout,
    NoFlexboxLayout,
    SimpleLayout,
    LandingLayout
  },
  computed: {
    layout() {
      //Funcion para Layouts Dinamicos mas info aqui ::: https://itnext.io/anyway-heres-how-to-create-a-multiple-layout-system-with-vue-and-vue-router-b379baa91a05
      return (this.$route.meta.layout || "default") + "-layout";
    }
  }
};
</script>

<style lang="scss">
</style>