<template>
  <div>
    <b-breadcrumb :items="items"></b-breadcrumb>
    Halo 5
    GTA V
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Tienda de Juguetes",
          href: "/#/inicio",
          name: "Inicio",
        },
        {
          text: "Electronicos",
          href: "/#/inicio/electronicos",
          name: "Electronicos",
        },
        {
          text: "Videojuegos",
          href: "/#/inicio/electronicos/video",
          name: "Video",
        },
      ],
    };
  },
};
</script>
    
<style>
</style>