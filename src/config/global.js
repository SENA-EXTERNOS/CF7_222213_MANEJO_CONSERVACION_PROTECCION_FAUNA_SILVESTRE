export default {
  global: {
    componenteFormativo: 'Manejo, conservación y protección de fauna silvestre',
    descripcionCurso:
      'El manejo de fauna es un proceso ordenado de toma de decisiones basado en conocimientos científicos que busca satisfacer las demandas a las que la fauna se ve expuesta por alteraciones como cambio climático, especies invasoras, tráfico ilegal, etc. Dicho manejo brinda soluciones para estas alteraciones y garantiza la prestación de servicios ecosistémicos para las comunidades con las que interactúa.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Afectaciones y riesgos de la fauna silvestre',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Monitoreo técnico y participativo de la fauna silvestre',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Conservación, protección y manejo de la fauna silvestre',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Monitoreo técnico y participativo de la fauna silvestre',
      referencia:
        'Ministerio del Ambiente (2016).<i> Monitoreo biológico.</i> Curso: <i>Gestión de la vida silvestre en el Ecuador.</i> ',
      tipo: 'Guía en pdf',
      link:
        'https://es.slideshare.net/crissanty1606/unidad-3-monitoreo-biologico',
    },
    {
      tema: 'Conservación, protección y manejo de la fauna silvestre',
      referencia:
        'Franquesa, M. (s.f.). <i>Los medios como herramienta en la conservación de la biodiversidad. INECOL. </i>',
      tipo: 'Página web',
      link:
        'https://www.inecol.mx/inecol/index.php/es/ct-menu-item-25/ct-menu-item-27/17-ciencia-hoy/160-los-medios-como-herramienta-en-la-conservacion-de-la-biodiversidad ',
    },
    {
      tema: 'Conservación, protección y manejo de la fauna silvestre',
      referencia:
        'Conrado, L. (2019). <i>Validación de protocolos de manejo de fauna silvestre en el hogar de paso del centro agroecológico en el departamento de La Guajira. </i>[Tesis de pregrado, Universidad Cooperativa de Colombia, Colombia]. Repositorio Institucional UCC.',
      tipo: 'Tesis ',
      link:
        'https://repository.ucc.edu.co/bitstream/20.500.12494/10576/1/2019_validacion_protocolos.pdf',
    },
    {
      tema: 'Conservación, protección y manejo de la fauna silvestre ',
      referencia:
        'Centro Federado de Ciencias Forestales-UNALM (2020). <i>VIDEOCONFERENCIA: "Experiencias en Manejo de Fauna Silvestre" - Mg. Sc. Joao Freitas</i> [video]. YouTube. ',
      tipo: 'Videoconferencia ',
      link: 'https://www.youtube.com/watch?v=vxjiqXod3mQ ',
    },
  ],
  glosario: [
    {
      termino: 'Bancos de esperma',
      significado:
        'conservación de esperma que puede ser utilizado cuando sea necesario en procesos de manejo y conservación de fauna. ',
    },
    {
      termino: 'Bioblitz',
      significado:
        'recopilación de datos de especies faunísticas en un espacio y tiempo determinados. ',
    },
    {
      termino: 'Cañonismo',
      significado:
        'actividad al aire libre que implica caminata, nadar, escalar rocas y descender por ellas. ',
    },
    {
      termino: 'Diseño muestral',
      significado:
        'estrategias que serán utilizadas en una actividad de monitoreo para la obtención de datos. ',
    },
    {
      termino: 'Efecto invernadero',
      significado:
        'gases que atrapan el calor y lo absorben para mantener la tierra caliente. ',
    },
    {
      termino: 'Espeleología',
      significado:
        'deporte extremo que consiste en la exploración de las formaciones en las rocas conocidas como cavernas.',
    },
    {
      termino: 'Horticultura',
      significado: 'técnicas de cultivo relacionadas con las huertas.',
    },
    {
      termino: 'Información taxonómica',
      significado:
        'es toda aquella información concerniente a la posición de una especie en un sistema jerárquico de clasificación por dominios, reinos, filos, clase, orden, familia, género y especie.',
    },
    {
      termino: 'Unidad de manejo ambiental',
      significado:
        'predios utilizados exclusivamente para la conservación de especies de fauna silvestre.',
    },
    {
      termino: 'Zoocriaderos',
      significado:
        'lugares dedicados al mantenimiento, cría y aprovechamiento de especies de fauna silvestre.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arnaud, G. (2020).<em> Estrategias de conservación de los vertebrados de México. </em>',
      link:
        'https://www.researchgate.net/profile/Gustavo-Arnaud/publication/348340238_Estrategia_conservacion_de_vertebrados_en_Mexico/links/5ff8f28f299bf1408880eb92/Estrategia-conservacion-de-vertebrados-en-Mexico.pdf',
    },
    {
      referencia:
        'Castañeda, A. (2019). <em>Protocolo de monitoreo participativo sobre biodiversidad asociada a ecosistemas forestales nativos.</em>',
      link:
        'https://simef.minagri.gob.cl/Protocolo_preliminar_monitoreo_participativo_2019.pdf',
    },
    {
      referencia:
        'Chacón, O. (2021).<em> La educación ambiental frente al cambio climático y sus efectos sobre la biodiversidad, 32(2). </em> ',
      link:
        'https://revistas.uned.ac.cr/index.php/biocenosis/article/view/3904/5174',
    },
    {
      referencia:
        'Corredor, M. (2022). <em>Elementos para el estudio de la protección de animales silvestres ante la comisión de los delitos de caza, comercialización y tráfico:</em> una aproximación normativa y doctrinal. [Tesis especialización, Universidad Jorge Tadeo Lozano,Colombia] ',
      link:
        'https://expeditiorepositorio.utadeo.edu.co/bitstream/handle/20.500.12010/27618/Trabajo%20de%20Grado-%20Daniela%20Corredor.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'Organización Latinoamericana y del Caribe de Entidades Fiscalizadoras Superiores (2021). <em>Olacefs.</em> Lucha contra la Corrupción Transnacional.',
      link:
        'https://olacefs.com/ctct/document/el-trafico-de-especies-como-un-caso-paradigmatico-de-corrupcion-transnacional-potenciales-aportaciones-del-control-externo-gubernamental/',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
