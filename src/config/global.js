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
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Cambio climático',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Especies exóticas invasoras',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Tráfico ilegal',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Marco regulatorio y sancionatorio',
            hash: 't_1_4',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Monitoreo técnico y participativo de la fauna silvestrez',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Parámetros y medición',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Instrumentos y herramientas',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Registros',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Conservación, protección y manejo de la fauna silvestre',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Estrategias de prevención',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Estrategias de manejo y gestión',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Procedimientos y disposición final y preventiva',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Turismo de naturaleza',
            hash: 't_3_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.5',
            titulo: 'Estrategias de divulgación',
            hash: 't_3_5',
          },
        ],
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
      tema: 'Monitoreo participativo',
      referencia:
        'MAE-CEPP. (2016). <em>Monitoreo biológico. Curso: Gestión de la vida silvestre en el Ecuador</em>. Segunda edición. Quito. ',
      tipo: '',
      link: '',
    },
    {
      tema: 'Material divulgativo ',
      referencia:
        'Franquesa-Soler, M. (S.f). <em>Los medios como herramienta en la conservación de la biodiversidad.</em> ',
      tipo: '',
      link: '',
    },
    {
      tema: 'Disposición final y preventiva ',
      referencia:
        'Conrado E, LJ. (2019). <em>Validación de protocolos de manejo de fauna silvestre en el hogar de paso del centro agroecológico en el departamento de La Guajira</em>. [Tesis de pregrado, Universidad Cooperativa de Colombia]. ',
      tipo: '',
      link: '',
    },
    {
      tema: 'Manejo de fauna silvestre ',
      referencia:
        'Centro Federado de Ciencias Forestales-UNALM. (4 de mayo de 2020). <em>VIDEOCONFERENCIA: "Experiencias en Manejo de Fauna Silvestre" - Mg. Sc. Joao Freitas</em>. [Archivo de vídeo]. YouTube. ',
      tipo: '',
      link: '',
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
        'Arnaud G. (2020). <em>Estrategias de conservación de los vertebrados de México.</em>',
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
        'Chacón C, O. (2021). <em>La educación ambiental frente al cambio climático y sus efectos sobre la biodiversidad.</em> ',
      link:
        'https://revistas.uned.ac.cr/index.php/biocenosis/article/view/3904/5174',
    },
    {
      referencia:
        'Corredor C, MD. (2022). <em>Elementos para el estudio de la protección de animales silvestres ante la comisión de los delitos de caza, comercialización y tráfico: una aproximación normativa y doctrinal</em>. [Tesis especialización, Universidad Jorge Tadeo Lozano]',
      link:
        'https://expeditiorepositorio.utadeo.edu.co/bitstream/handle/20.500.12010/27618/Trabajo%20de%20Grado-%20Daniela%20Corredor.pdf?sequence=1&isAllowed=y',
    },
    {
      referencia:
        'OLACEFS. (2021). <em>El tráfico de especies como un caso paradigmático de corrupción transnacional: potenciales aportaciones del control externo gubernamental.</em>',
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
