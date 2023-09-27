<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Afectaciones y riesgos de la fauna silvestre

    .row.justify-content-center.align-items-center.p-4.bgr1-tema1
      .col-lg-7.p-4
        p La vida silvestre, comprendida como toda aquella que se desarrolla libremente sin depender del hombre, se ve expuesta todo el tiempo a amenazas. Estas amenazas están relacionadas sobre todo con la caza, práctica entendida como el acto de atacar a un animal con un ánimo recreativo, sin ningún otro fin que implica la captura, la mutilación o su muerte.

      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img1.png", alt="alt")

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img2.png", alt="alt")

      .col-lg-8
        p.mt-3 También está la comercialización, o sea la compra y venta de especies de animales salvajes y sus productos derivados a cambio de una retribución económica. El tráfico de especies está vinculado con la venta ilegal, pero también se refiere a la extracción de las especies de los ambientes naturales y la reducción del hábitat a causa de actividades como la agricultura, la ganadería y los nuevos desarrollos urbanos, los cuales obligan a la fauna a moverse de manera involuntaria de los ecosistemas que habitan, haciéndola susceptible de sufrir accidentes (ser atropellada) o facilitar su caza y captura por encontrarse vulnerable fuera de sus hábitats. Veamos en la siguiente infografía cinco especies de animales vertebrados que están en peligro crítico de extinción en Colombia:

        .tarjeta.color-secundario.p-3.mb-5.mt-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/img19.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-3.text-white.text-center Cinco animales en peligro de extinción en Colombia
                .col-sm-auto.p-2
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Cinco_animales_extincion.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download

    .row.mt-5
      p Algunas características importantes acerca del cambio climático son relevantes para comprender cómo incide en los procesos de desarrollo de cuidado y conservación de la fauna silvestre, veamos:

    h2 Cambio climático

    .row.justify-content-center.align-items-center.mt-5
      .col-lg-12
        figure
          img(src="@/assets/curso/temas/tema1/img3.svg", alt="alt")

    .row.mt-5
      p El cambio climático está relacionado con las modificaciones que presentan las condiciones climáticas en un ecosistema determinado.

    .row.justify-content-center.align-items-center.bgr2-tema1
      .col-lg-12
        SlyderB(:datos="datosSlyder").p-4


    h2.mt-5 Especies exóticas invasoras

    .row
      p Una vez conocidas las características del cambio climático, pasaremos a ver por qué es importante conocer las principales especies exóticas invasoras que pueden provocar una pérdida de la diversidad biológica.
      p Las especies exóticas invasoras son una de las principales causas de pérdida de diversidad biológica.

    SlyderF(columnas="col-lg-6 col-xl-4").my-5
      .tarjeta.color-acento-botones.p-4.width-tarjeta
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img8.svg' alt='AvatarTop')
        p.text-center Se trata de animales, plantas, hongos y microorganismos que han sido introducidos en un medio que no corresponde a su hábitat natural.

      .tarjeta.color-acento-botones.p-4.width-tarjeta
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img9.svg' alt='AvatarTop')
        p.text-center Allí, en el medio en el que fueron introducidos, estos se reproducen con mayor frecuencia y se imponen sobre las especies locales y las obligan a competir por alimento, agua y espacio.

      .tarjeta.color-acento-botones.p-4.width-tarjeta
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img10.svg' alt='AvatarTop')
        p.text-center Estas especies son introducidas de manera intencional mediante la piscicultura, el comercio de mascotas, horticultura y procesos de control biológico.

      .tarjeta.color-acento-botones.p-4.width-tarjeta
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img11.svg' alt='AvatarTop')
        p.text-center Cuando se hace de manera involuntaria es por medio del transporte terrestre y marítimo, viajes e investigación científica, lo que deja efectos negativos en la economía de los países por las pérdidas agrícolas que cuestan mucho dinero.

      .tarjeta.color-acento-botones.p-4.width-tarjeta
        .row.justify-content-center.mb-3
          .col-8
            img(src='@/assets/curso/temas/tema1/img12.svg' alt='AvatarTop')
        p.text-center También, muchos ecosistemas pierden su diversidad biológica, y esta pérdida termina afectando el bienestar humano por la escasez de alimentos que conlleva a desnutrición, hambrunas y enfermedades. 

   
    h2 Tráfico ilegal

    .row
      p El tráfico ilegal de fauna silvestre es una actividad mercantil que se da por la extracción ilícita de especies amenazadas de su ambiente natural y su comercialización ilegal.


    .row
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false").bgr-tarjeta2
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.bgr-tarjeta-color.text-center La alta demanda de estas especies está relacionada con los valores médicos, afrodisíacos y el estatus que confiere tener algunas especies y sus derivados o la posesión de mascotas exóticas.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img13.svg')})`}")

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false").bgr-tarjeta2
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.bgr-tarjeta-color.text-center En Colombia los traficantes agreden y secuestran a los animales para venderlos en las ciudades, ya sea como mascotas, carne, piel o sangre. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img14.svg')})`}")

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false").bgr-tarjeta2
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.bgr-tarjeta-color.text-center Los animales también son considerados “medicina natural”, afrodisíacos y una fuente de ingresos extras para los campesinos que tienen acceso a los ecosistemas en los que habitan y que encuentran en su caza, captura y tráfico una fuente de ingresos. Todo es un actuar normalizado que bajo ninguna circunstancia se relaciona con un delito, pues los campesinos desconocen la normativa sobre dichos asuntos.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img15.svg')})`}")

      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false").bgr-tarjeta2
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              p.bgr-tarjeta-color.text-center Por tanto, la práctica del tráfico ilegal de fauna es una amenaza para la biodiversidad porque acelera las tasas de extinción. Los elefantes, los tiburones y los tigres son algunos de los animales más amenazados en el mundo.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img16.svg')})`}")



    h2.mt-5 Marco regulatorio y sancionatorio

    .row
      p Desde 1972 hasta el 2021 en Colombia se han expedido once leyes y decretos relacionados con la protección de la fauna silvestre. Cada cual reglamenta:

    .bg--img_03
      .row.justify-content-center.mb-4
        .col-lg-4
          figure(data-aos="zoom-in")
            img(src="@/assets/curso/temas/tema1/img17.svg", alt="alt").img400.m-auto
        .col-lg-8.mt-3
          AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
            .row(titulo="Ley 5 de 1972:")
              .col-12
                p.mb-0 fundación y funcionamiento de juntas protectoras de animales.

            .row(titulo="Decreto 497 de 1973:")
              .col-12
                p.mb-0 definición de las juntas defensoras de animales como “entidades de carácter educativo que propenderán a través de sus miembros a crear sentimientos de protección hacia los animales en general y evitar los malos tratos a los que puedan ser sometidos” (Corredor, 2022).

            .row(titulo="Ley 23 de 1973:")
              .col-12
                p.mb-0 expedición Código de recursos naturales y protección al medio ambiente.

            .row(titulo="Decreto 2811 de 1974:")
              .col-12
                p.mb-0 por el cual se dicta el Código nacional de recursos renovables y de protección al medio ambiente y se introduce el concepto de “animal” al considerarlo como un recurso biológico y clasificarlo de manera general en doméstico, silvestre y recurso hidrobiológico.

            .row(titulo="Decreto 1608 de 1978:")
              .col-12
                p.mb-0 reglamentación del Código nacional de recursos renovables y de protección al medio ambiente.

            .row(titulo="Ley 71 de 1981:")
              .col-12
                p.mb-0 aprobación de la Convención sobre el comercio internacional de especies amenazadas de fauna y flora silvestres.

            .row(titulo="Ley 84 de 1989:")
              .col-12
                p.mb-0 adopción del Estatuto nacional de protección de los animales.

            .row(titulo="Constitución política de 1991:")
              .col-12
                p.mb-0 la consideración, manejo y conservación de los recursos naturales y el medio ambiente se hicieron norma (los animales siguen siendo considerados como un recurso natural).

            .row(titulo="Ley 599 del 2000:")
              .col-12
                p.mb-0 delitos contra los recursos naturales y el medio ambiente.

            .row(titulo="Ley 1774 de 2016:")
              .col-12
                p.mb-0 reconocimiento de los animales como seres capaces de sentir y no como cosas, tipificación de algunas conductas relacionadas con el maltrato a los animales y establecimiento de procedimientos sancionatorios de carácter policivo y judicial.

            .row(titulo="Ley 2153 de 2021:")
              .col-12
                p.mb-0 creación de un sistema de información, registro y monitoreo que permita prevenir y controlar el tráfico ilegal de fauna y flora silvestres en el territorio nacional y se dictan otras disposiciones (Corredor, 2022).

    .row.justify-content-center.align-items-center.p-4.bgr3-tema1.mt-5
      .col-lg-4
        figure
          img(src="@/assets/curso/temas/tema1/img18.svg", alt="alt")

      .col-lg-7.p-4
        p.text-white La fauna ha representado a lo largo de la historia múltiples usos para la humanidad, entre estos se destacan aquellos con fines alimenticios, medicinales, lúdicos y para crear vestimentas; además de los valores culturales, simbólicos y espirituales que le han sido conferidos y se relacionan con la forma de ver y actuar en el mundo que tienen las personas que interactúan con ella. En el siguiente apartado se expone cómo se maneja el monitoreo técnico y participativo de la fauna silvestre.

      


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        texto:
          'El cambio climático genera incremento de las tormentas, sequías y deslizamientos.',
        imagen: require('@/assets/curso/temas/tema1/img4.svg'),
      },
      {
        texto:
          'Debido al cambio climático suben las temperaturas, hay alteraciones en el ciclo del agua, acidificación de los océanos, inundaciones y, en consecuencia, pérdidas de hábitat y de especies de fauna y flora.',
        imagen: require('@/assets/curso/temas/tema1/img5.svg'),
      },
      {
        texto:
          'Las especies más vulnerables ante tal alteración son las aves, los anfibios y los arrecifes de coral (Chacón, 2021).',
        imagen: require('@/assets/curso/temas/tema1/img6.svg'),
      },
      {
        texto:
          'Las consecuencias ya mencionadas son producto del efecto invernadero, una combinación de ondas de alta frecuencia con gases como dióxido de carbono (CO2), metano (CH4), óxido nitroso (N2O), hidrofluorocarbonos (HFC), perfluorocarbonos (PFC) y hexafluoruro de azufre (SF6) que retienen el calor y ocasionan cambios muchas veces irreversibles en los ecosistemas y sus dinámicas.',
        imagen: require('@/assets/curso/temas/tema1/img7.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
