<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.p-4.bgr1-intro.text-white
      .col-lg-7.p-4
        p Apreciado aprendiz, bienvenido a este componente formativo, donde se apropiará de temas relacionados con el cambio climático, el tráfico ilegal de algunas especies, y el marco normativo y regulatorio en Colombia; también podrá conocer, mediante el estudio responsable del mismo, algunos tipos de especies exóticas e invasoras, aspectos importantes frente al turismo de la naturaleza y algunas estrategias de conservación de la fauna silvestre, entre otras.

        p En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.

      .col-lg-4
        figure
          img(src="@/assets/curso/temas/introduccion/img1.svg", alt="alt")

    .row.justify-content-center.align-items-center.mb-5.mt-5          
      .col-lg-12(data-aos="fade-left")     
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)            
              
    
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
