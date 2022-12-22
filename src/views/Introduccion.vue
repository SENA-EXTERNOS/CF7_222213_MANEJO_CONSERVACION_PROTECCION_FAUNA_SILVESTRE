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
        p Estimado aprendiz: le damos la bienvenida a esta nueva experiencia de aprendizaje. El siguiente es el componente formativo de Manejo, conservación y protección de la fauna silvestre, en el cual se verán temas relacionados con el cambio climático, el tráfico ilegal de algunas especies, marco normativo y regulatorio en Colombia; también conoceremos algunos tipos de especies exóticas e invasoras, aspectos importantes frente al turismo de naturaleza y algunas estrategias de conservación de la fauna silvestre, entre otras temáticas relevantes.

        p A continuación encontrará información útil para introducir y contextualizar las diferentes temáticas que serán tratadas. Le invitamos a prestar mucha atención al siguiente video. 

        p ¡Éxitos en esta nueva experiencia!

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
