// SEED DATA

export const SEED_POSTS = [
  {
    id: '1',
    title: '¿Qué opinan del nuevo álbum de Mdou Moctar?',
    author: 'frederik_waal',
    date: '27 jul 2026',
    tags: ['blues', 'world', 'guitarra'],
    excerpt:
      'Acabo de escuchar Funeral for Justice por primera vez y no sé si estoy preparado para hablar de ello. Esa guitarra en el primer tema me dejó paralizado. ¿Alguien más lo ha escuchado ya?',
    body: 'Acabo de escuchar Funeral for Justice por primera vez y no sé si estoy preparado para hablar de ello. Esa guitarra en el primer tema me dejó paralizado.\n\n¿Alguien más lo ha escuchado ya? Tengo la sensación de que es de esos discos que cambian algo en cómo escuchas el resto de música. Me recuerda la primera vez que puse Afrique Victime, esa misma mezcla de rabia política y belleza técnica sin concesiones.\n\nLo que me llama la atención es cómo ha evolucionado su producción. Antes era más cruda, más directa. Aquí hay capas que no había antes. Sin perder nada de la urgencia.\n\n¿Os parece que marca una evolución real o es más de lo mismo? Yo creo que da un paso claro hacia adelante.',
    imageUrl: 'https://images.unsplash.com/photo-1761774805261-f6174d599dcc?w=1200&h=800&fit=crop&auto=format',
    likes: 47,
    comments: [
      { id: 'c1-1', author: 'pilar_montoya', date: '27 jul 2026', text: 'Afrique Victime fue revelador para mí. No esperaba algo tan político y visceral al mismo tiempo. Este nuevo parece ir todavía más lejos.' },
      { id: 'c1-2', author: 'noiseghost', date: '27 jul 2026', text: 'El tema que da título al disco ya justifica el álbum entero. Esa guitarra al final es catártica. Gracias por compartirlo.' },
      { id: 'c1-3', author: 'audiophile_mx', date: '27 jul 2026', text: '¿Alguien lo ha visto en directo? He leído que sus conciertos son otra dimensión completamente.' },
      { id: 'c1-4', author: 'carmen_velarde', date: '27 jul 2026', text: 'Yo lo vi en Primavera Sound. En directo es demoledor. Te cambia la escucha del disco.' },
    ],
  },
  {
    id: '2',
    title: '¿Es Rosalía la artista más importante del flamenco contemporáneo?',
    author: 'carmen_velarde',
    date: '25 jul 2026',
    tags: ['flamenco', 'experimental', 'pop'],
    excerpt:
      'Llevo semanas dándole vueltas a esta pregunta. El Mal Querer lo cambió todo para mí, pero ¿representa realmente al flamenco o es algo completamente nuevo usando el flamenco como materia prima?',
    body: 'Llevo semanas dándole vueltas a esta pregunta. El Mal Querer lo cambió todo para mí, pero ¿representa realmente al flamenco o es algo completamente nuevo usando el flamenco como materia prima?\n\nHay puristas que dicen que no es flamenco, que es pop experimental con estética flamenca. Y hay gente que dice que eso es exactamente lo que el flamenco ha sido siempre: una tradición viva que se transforma.\n\nMi posición: no me importa la etiqueta. Lo que hace es genuino y honesto, y eso es lo que debería importar en la música.\n\n¿Vosotros cómo lo veis? ¿Qué artistas contemporáneos creéis que están haciendo algo comparable con otras tradiciones?',
    imageUrl: 'https://images.unsplash.com/photo-1580656449278-e8381933522c?w=900&h=600&fit=crop&auto=format',
    musicLink: 'https://open.spotify.com/album/0VvkEGFFLMsVcuOZxpqsId',
    likes: 83,
    comments: [
      { id: 'c2-1', author: 'magneticfield', date: '25 jul 2026', text: 'Para mí es la artista más importante del pop español del siglo, independientemente del género.' },
      { id: 'c2-2', author: 'driftmodule', date: '26 jul 2026', text: 'El debate "¿es flamenco o no?" es irrelevante y distrae de lo que realmente importa: que es una artista transformadora.' },
      { id: 'c2-3', author: 'frederik_waal', date: '26 jul 2026', text: 'La comparación con Camarón de la Isla me parece justa. Él también fue acusado de traicionar la tradición. La historia lo reivindicó.' },
    ],
  },
  {
    id: '3',
    title: 'Thread: recomendaciones de jazz para alguien que viene del rock',
    author: 'pilar_montoya',
    date: '22 jul 2026',
    tags: ['jazz', 'electrónico', 'recomendaciones'],
    excerpt:
      'Mi pareja lleva años escuchando rock alternativo y quiere entrar en el jazz. Le he puesto Kind of Blue y le pareció "agradable pero aburrido". ¿Por dónde empezaría alguien como él?',
    body: 'Mi pareja lleva años escuchando rock alternativo (Radiohead, Sonic Youth, Pixies) y quiere entrar en el jazz. Le he puesto Kind of Blue y le pareció "agradable pero aburrido".\n\n¿Por dónde empezaría alguien que viene de ahí? Creo que necesita algo con más urgencia y textura, no los discos de jazz más accesibles.\n\nYo le pondría Bitches Brew de Miles Davis, que tiene esa misma energía experimental. O Ornette Coleman. Pero quiero más opiniones.\n\n¿Qué discos o artistas usaríais como puerta de entrada para alguien con ese perfil?',
    imageUrl: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=900&h=600&fit=crop&auto=format',
    likes: 61,
    comments: [
      { id: 'c3-1', author: 'noiseghost', date: '22 jul 2026', text: 'Promises de Floating Points con Pharoah Sanders. Es exactamente el puente perfecto: tiene estructura de jazz pero textura electrónica que alguien del rock va a reconocer.' },
      { id: 'c3-2', author: 'audiophile_mx', date: '23 jul 2026', text: 'Sun Ra. Nada de Kind of Blue. Algo del Arkestra. Si viene del rock ruidoso va a entender esa energía caótica inmediatamente.' },
      { id: 'c3-3', author: 'frederik_waal', date: '23 jul 2026', text: 'Kamasi Washington, The Epic. Más accesible que Ornette pero con la misma ambición.' },
      { id: 'c3-4', author: 'carmen_velarde', date: '24 jul 2026', text: 'Yo empezaría por el post-jazz: GoGo Penguin, Portico Quartet, BadBadNotGood.' },
      { id: 'c3-5', author: 'driftmodule', date: '24 jul 2026', text: 'Secundo a BadBadNotGood. Su versión de Odd Future es la mejor puerta de entrada para gente que no tiene prejuicios sobre qué "debe" sonar el jazz.' },
    ],
  },
  {
    id: '4',
    title: '¿Alguien más siente que el post-punk colombiano merece más atención?',
    author: 'noiseghost',
    date: '19 jul 2026',
    tags: ['post-punk', 'colombia', 'alternativo'],
    excerpt:
      'Bogotá mezcla la dureza del post-punk con influencias caribeñas de una manera que ningún otro lugar del mundo está haciendo. Meridian Brothers son apenas el principio.',
    body: 'Bogotá tiene una escena que mezcla la dureza del post-punk con influencias caribeñas de una manera que ningún otro lugar del mundo está haciendo. Meridian Brothers, Mitú, Los Pirañas... ¿por qué no llegan a más gente?\n\nNo es falta de calidad. Es falta de visibilidad. Los sellos europeos no saben muy bien dónde meterlos y los algoritmos no los recomiendan porque no encajan en ninguna categoría limpia.\n\nYo los descubrí por casualidad y me cambió lo que entendía como "alternativo". ¿Alguien más los conoce? ¿Qué otras escenas regionales sentís que están infravaloradas?',
    imageUrl: 'https://images.unsplash.com/photo-1779911842527-95a7a4ad71b9?w=900&h=600&fit=crop&auto=format',
    likes: 39,
    comments: [
      { id: 'c4-1', author: 'magneticfield', date: '19 jul 2026', text: 'Los Pirañas son increíbles. Cumbia experimental que suena como si Can hubiera crecido en Barranquilla.' },
      { id: 'c4-2', author: 'pilar_montoya', date: '20 jul 2026', text: 'En la misma línea: la escena de Lagos. África occidental está produciendo algunas de las cosas más interesantes del momento.' },
    ],
  },
  {
    id: '5',
    title: 'Los mejores discos de ambient de los últimos diez años — armamos una lista',
    author: 'driftmodule',
    date: '15 jul 2026',
    tags: ['ambient', 'drone', 'electrónico'],
    excerpt:
      'Propongo que entre todos armemos una lista de los mejores discos de ambient de la última década. Empiezo: A Winged Victory for the Sullen, Hiroshi Yoshimura, William Basinski. ¿Qué añadís?',
    body: 'Propongo que entre todos armemos una lista de los mejores discos de ambient de la última década. Empiezo con los míos:\n\n— A Winged Victory for the Sullen – Atomos (2014)\n— Hiroshi Yoshimura – Music for Nine Post Cards (reissue)\n— William Basinski – On Reflection (2015)\n— Grouper – Ruins (2014)\n— Stars of the Lid – And Their Refinement of the Decline (reissue)\n\nSé que algunas son reediciones, pero creo que cuentan porque es cuando las descubrí y cuando llegaron a más gente.\n\n¿Qué añadís a la lista? Especialmente curioso por cosas menos conocidas.',
    imageUrl: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=900&h=600&fit=crop&auto=format',
    likes: 55,
    comments: [
      { id: 'c5-1', author: 'audiophile_mx', date: '15 jul 2026', text: 'Ólafur Arnalds, re:member (2018). La línea entre ambient y neoclásico se difumina de manera muy hermosa ahí.' },
      { id: 'c5-2', author: 'frederik_waal', date: '16 jul 2026', text: 'Tim Hecker, Ravedeath 1972. Denso, oscuro, incómodo. No sé si es ambient o drone metal pero es imprescindible.' },
      { id: 'c5-3', author: 'carmen_velarde', date: '16 jul 2026', text: 'Julianna Barwick, Nepenthe. Si no la conocéis, es urgente. Voz procesada como si fuera un instrumento orquestal.' },
    ],
  },
]
