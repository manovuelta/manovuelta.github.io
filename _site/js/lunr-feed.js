// builds lunr
var index = lunr(function () {
  this.field('title')
  this.field('author')
  this.field('content', {boost: 10})
  this.field('category')
  this.field('tags')
  this.ref('id')
});

index.add({
  title: "El Aroma que se Quedó",
  author: "José Luis Dávila",
  category: null,
  content: "\n\nEl Aroma que se Quedó de la Serie Documental Manovuelta\nProducido por Ecosur Films\nColectivo Manovuelta\n\n\nEn las Montañas Venezolanas ha existido la tradición durante varios siglos de la siembra del café como actividad principal agrí­cola de los pueblos campesinos, esta actividad se vio reducida durante épocas pasadas debido a los altos costos para mantener las siembras, razón que no permití­a soportar una producción sostenible que beneficiase a los campesinos productores.\n\nLas intermediaciones capitalistas para el procesamiento del café se encontraban en manos de empresarios explotadores, dueños de las lí­neas de producción y manufactura del producto final al consumidor, lo cual empobreció más el campo en estas regiones, obligando a la migración económica forzada a las ciudades, aumentando de esta manera los cordones de miseria.\n\n Foto: José Luis Dávila\n\nEl documental se propone, mediante una investigación exhaustiva, encontrar personajes claves que nos retraten la situación vivida en este pasado infortunado, y que a la vez mostrarán el hoy; en pleno proceso de transformación Agraria Nacional en 4 Estados Venezolanos, resaltando a los principales protagonistas, los campesinos obreros, sus familias; y cómo el control obrero y la democracia protagónica les ha permitido empoderarse de las lí­neas de producción y manufactura, cubriendo el ciclo completo, eliminando así­ las cadenas de especulación instaladas por el neoliberalismo en nuestro paí­s, en muchos casos impulsadas por las mafias del café de orden internacional con presencia de empresarios capitalistas de paí­ses vecinos interesados en el debilitamiento de nuestro poder de autoabastecimiento de los productos de primera necesidad para la sociedad venezolana.\n\n\nEl Aroma que se Quedó\n",
  tags: ["manovuelta","video"],
  id: 0
});
index.add({
  title: "Sobre el Tema del Urbanismo, La Comunicación y El Plan de la Patria.",
  author: "Carlos Garcí­a",
  category: null,
  content: "\n\nImagen tomada de la web: http://equilibriocosmico.blogspot.com\n\nEl plan de la patria en su conjunto es, un documento que anuncia el camino a transitar. Un camino que lanza su horizontal mirada al socialismo. Es así­ que, los objetivos de este programa, están direccionados hacia un cambio social profundo. Pensar lo humano, es pensar en las relaciones, o la manera en que nos relacionamos. Todo lo apuntalado al tema económico (que es lo que lamentablemente mueve al mundo, primando sobre lo humano) va de la mano con la reconstrucción de un tejido vincular, social, amoroso y mucho más humano (por lo menos del que tenemos). Pensar en la ciudad es pensar y sentir la manera en que nos desplegamos sobre la faz de la tierra, o pacha mama (El tema de la ciudad ya está muy bien esbozado en el libro de Mumford publicado abajo). En lo que a la ciudad o urbanismo se refiere en el plan de la patria en el obj. 3.4.12.2 se dice lo siguiente: \"Implementar la ciudad compacta como modelo de desarrollo sustentable, con edificaciones de baja altura y alta densidad\". La ciudad compacta es aquella que: \"presenta una estructura y trama urbana de cierta compacidad, está cohesionada socialmente, genera espacios de sociabilidad, crea un territorio con cercaní­a a los servicios, propicia el encuentro de actividades y permite el desarrollo de la vida en comunidad\" Para ello la vida pública y los espacios públicos deben ser en muchos casos retomados, (imprimiéndoles VIDA), potenciados, reconstruidos o sencillamente creados a partir de la construcción social de nuevos espacios de encuentro y aprendizaje. Siguiendo las orientaciones del plan de la patria, conseguimos lo siguiente en el obj. 3.4.12.16: \"Implementar un plan de habilitación de espacios públicos en los centros poblados\". Todos estos espacios públicos, o espacios de todas y de todos, adquieren sentido en la medida en que las relaciones sociales verticales y de carácter opresor vayan desapareciendo. Un trabajo liberador, una comunicación liberadora es pertinente con la nueva cosmovisión de la vida cotidiana y pública (entendamos que libertad no es hacer lo que nos venga en gana, la libertad para poderla ejercer, tiene sus limites. De otra manera caemos en un desenfreno mutilador de las intra e inter-relaciones con los otros y con lo otro que nos rodea). En todos estos espacios la generación de relaciones liberadoras es de un tenor fundamental, tanto así­ que en el plan de gobierno 2013-2109 menciona enfáticamente en su obj 3.4.12.19 lo siguiente: \"Incorporar en los planes y proyectos urbanos las actividades productivas que generen trabajo liberador para los nuevos habitantes\". Ahora bien, todo esto es posible si modificamos los mecanismos de relaciones personales, la nueva sociedad no puede construirse si no hay un modelo comunicacional nuevo, distinto, liberador e integrador (modelo comunicacional que va más allá de lo mediático, estamos hablando de formas de comunicarnos con los otros y con el mundo, formas de relacionarnos y vincularnos). Es de vital importancia entender que si no hay modificación de la subjetividad, todo lo demás que se haga es y será en vano, además de reproducir las mismas estructuras mentales, espirituales, sociales e históricas. La piedra angular para la edificación de una nueva sociedad en todos sus sentidos, está en generar un modelo de relacionamiento mucho más directo y natural, más genuino y menos material, apuntalado a la comuna, la vida comunal, es decir, en comunidad (comunidad, comuna, comunión, comunicación= código común) Es un modelo menos ávaro, donde las personas que hagan vida allí­ se conozcan, se inter-relacionen, reconstruyendo lo profundamente humano. Esto no es más que apuntar un poco más a la des-globalización o des-globo-colonización de la vida y pensar-nos y sentir-nos más en lo cotidiano, lo real, lo humano y la valoración de lo humano por encima de lo económico (actitud enunciada en nuestros discursos, pero no en la práctica). En sí­ntesis, es avizorar aquello que queremos ser, pero que aún no somos.\n\nQue esta última frase anterior deje claro que el nuevo hombre, el nuevo humano se ES, SIENDO, en la praxis, por ello las palabras de Teresa Parodi y del compañero Tato Iglesias tienen un dejo de erudición y de esperanza que sigue alimentando como humus la fértil tierra del corazón:\n\n\"Ando con el alma en vilo\nPero no padezco de otro mal mayor\nClaro, que me cuesta un poco\nConvencerme a diario que así­ está mejor\nSiento que aún puedo ser inocente\nPese a la insidia de alguna gente\nCon otros muchos que por valientes\nHan elegido siempre el amor\nMientras me dure la vida creo\nQue habré de andar con los mismos sueños\nY aunque me quedan no pocos miedos\nNi así­ me muevo de lo que soy\nBusco mirarme en los parecidos\nY hombro con hombro con ellos sigo\nAmando el cielo que compartimos,\nCréanmelo\"\nTeresa Parodi.\n\nEs necesario volver a retomar sin miedos ni prejuicios el tema de la revolución. Una revolución que necesariamente tiene que partir de esta realidad, aceptando que vivimos en el sistema capitalista, debemos pensar, actuar y animarnos a vivir desde otros paradigmas.\nNo sólo diciendo sino haciendo, buscando coherencia entre la palabra y el gesto. Poniendo la paciencia impaciente en esta construcción.\nY tenemos que ir todos sin discriminaciones, los intelectuales y los artistas, los cojos, los mudos y los ciegos, los que pueden y los que no pueden.\nEs darnos ánimo, encendernos los fueguitos, recuperar los ideales, tener siempre encendidas las luces del circo de la vida.\nAunque los payasos estén tristes, la soga de los trapecistas derruidas y la carpa remendada, el circo de una nueva vida debe continuar.\nEstá en nosotros\nTato Iglesias.\n\nLa ciudad en la historia, sus origenes, transformaciones y perspectivas\nLewis Mumford.\n\nPlan de la Patria 2013-2019\n",
  tags: [],
  id: 1
});
index.add({
  title: "La Emergencia de La Esperanza. Una nueva forma de articulación, una nueva forma de relacionarnos y de caminar",
  author: "Carlos Garcí­a",
  category: null,
  content: "\n\n\nAmérica Latina es un continente que, si bien sabemos es el más desigual del planeta y que tiene una historia marcada por la violencia de clase y racial, generada y cultivada por los colonizadores, también sabemos que es el continente que alberga la esperanza, las nuevas formas de organización o por lo menos somos el continente que abandera la consolidación de una nueva forma de organización social con potencia, nuevas maneras de lucha emergentes que contemplan las luchas por la tierra y por la dignidad de la tierra, los derechos de la mujer, de los afros, de los indí­genas, el reconocimiento de las culturas comunitarias, el reconocimiento como sujetos, como personas con historia, vida, proyecto y futuro por parte de los marginados y los condenados de la tierra como dijo alguna vez Fanón. América Latina es, la emergencia de nuestras raí­ces, de las formas de ser, estar y sentir opacadas y oprimidas por la lógica europea. Los colectivos, los movimientos sociales, las comunas, los consejos comunales son expresión de la emergente configuración política que va más allá de las estructuras tradicionales existentes e impuestas en nuestro continente por la lógica europea. Estas nuevas conformaciones son encuentros y re-encuentros con nuestras raí­ces; son a la final un re-encuentro con nos-otros mismos. Un viaje de vuelta a lo que somos, a la humanidad -la humanidad- como condición dependiente del humus, de la tierra, de la relación con la tierra, con la común-idad de vida. Por ello hablar de colectivos, de comunas, de cultura comunal es acercarnos, comprendernos y sentirnos de otra manera, es una onto-epistemologí­a distinta, es otra manera de conocer y de relacionarnos con el mundo. Dice el viejito Dussel que: \"el ser humano es esencialmente social, que eso de individuo no existe, pues todos somos interdependientes, si no fuese así­, no tendrí­amos ombligo\" y tiene razón porque somos seres que tenemos sentido de identidad a través de otro, tenemos identidad grupal, somos sujetos de la comunidad, no solos, nadie nace y existe solo, eso de la propiedad privada, de la posesión de la negación como sujeto es una visión empobrecida, miserable y oscura que vino con Europa, con Occidente. Europa nos consideraba y nos considera aún objetos, además de la beodez en considerar que la cosmovisión occidental del mundo es la mejor y por eso hay que imponerla en todo el mundo como lo dijo Berlusconi.\n\nEsta misma y arrogante visión es la que primó en los colonizadores y muchos de los próceres independentistas como el general de la Capa Roja, apodo puesto por los sangrientos asesinatos cometidos a los indí­genas en Venezuela o peor aún el caso Argentino donde Rivadavia contrató a un asesino Alemán para acabar indí­genas con la excusa de que no tení­an salvación por no tener sentido de la propiedad y ser anarquistas. Por ello no podemos fijarnos en las maneras organizativas ya melladas, que alojan al individualismo, la verticalidad, la dominación, y la jerarquización, necesitamos otros modos de encontrarnos, de pensarnos y sentirnos en comunidad, en con-junto. He ahí­ los movimientos, los colectivos, las comunas como el regreso a lo más profundo y sencillo de lo humano, a esa condición de ser vulnerable y dependiente de y con otros.\n\nLa invitación a nuevas formas de organización es, la invitación a la autonomí­a, a la autodeterminación, a la co-responsabilidad, al re-conocimiento, en sí­ntesis a la posibilidad de ser sujeto liberador, constructor de nuestro propio destino.\n\n\n\nColectivos y Comunidad. Casa del Costurero. Mérida, Venezuela. Foto: Colectivos del Costurero.\n\nEncontrarse en grupo, aprender en grupo, pensar-nos y sentir-nos en grupo es una ruptura epistemológica, es una concepción del mundo, una mirada del mundo desde otro lugar, es re-construir los canales comunicacionales, volvernos a entender, es re-construir-nos\n\nVolvernos a encontrar cara a cara, hombro con hombro es construir el tejido social a partir de lo cotidiano, de las necesidades.\n\nNecesitamos entonces cambiar un montón de matrices, las palabras con las cuales referenciamos el mundo, la manera de actuar, de pensar, de sentirâ€¦ Necesitamos para lograr una revolución de paradigma, mirarnos y admirarnos desde otro lugar, desde la esperanza de ser los nuevos humanos que debemos morar desde ahora sobre la madre tierra, Pacha Mama o Gaí­a, esta esperanza es vista por nosotros como proyecto como lo decí­a Freire, como un pro-yecto, un lanzarse hacia adelante que, sencillamente es el encuentro hombro con hombro y mirada a mirada de los indí­genas, los afros, los de abajo, los de a pata, los excluidos y los pobres en la planificación desde el aquí­ y el ahora de un futuro común en el que todos quepamos.\n\nLa constitución de la comuna como vuelta a la humanización, de los colectivos como cultura popular y grupal, de los movimientos sociales como articulación de luchas para elevar otras formas de ver el mundo, somos los parteros de una nueva humanidad que se direcciona a ser esperanza del nuevo mundo.\n\n\n\nHistoria de la lucha y la cultura zapatista 2007, Paraiso Tulijá, MAREZ Ricardo Flores Magón. Foto: S. Petersen\n\nFoto cabecera: Prensa Latina. 1ra Cumbre de Movimientos del ALBA 2009.\n",
  tags: [],
  id: 2
});
index.add({
  title: "I Asamblea Patriótica Estadal del GPPSB",
  author: "Prensa CENDITEL",
  category: null,
  content: "\n\nEn el ámbito de la consolidación de la Revolución que impulsa el Gobierno Bolivariano y con los acuerdos generados en el I congreso Nacional de los movimientos sociales del Gran Polo Patriótico Simón Bolí­var, el 21 de marzo, en el centro de convenciones Mucumbarila, se realizó la I Asamblea Patriótica Estadal de los Movimientos Sociales del Gran Polo Patriótico Simón Bolí­var del Estado Mérida, contando con la presencia de 15 sectores que hacen vida permanente como organizaciones sociales.\n\nEsta asamblea tuvo como objetivo principal trabajar de manera articulada con todos los movimientos sociales del estado, de tal modo que surja un plan de acción para la Defensa Integral del Paí­s. Debido a los ataques continuos con los que la derecha venezolana ha intentado desestabilizar la tranquilidad de nuestro paí­s, la sistemática guerra económica y, en los últimos dí­as, ante el ataque imperialista del gobierno de los EEUU, los movimientos sociales de Mérida se unen desde su posición consciente y combativa para hacer concretas el mandato del Comandante Chávez, el 8 de diciembre de 2012. ¡Unidad, Lucha, Batalla y Victoria!\n\nPara desarrollar dicha actividad y con la orientación de voceros de la Coordinación Nacional del GPPSB de Caracas, la discusión se organizó entre los diversos sectores sociales presentes, quienes se distribuyeron en cuatro mesas trabajo: Guerra Económica y Producción, Comunicación, Inteligencia Social y Formación. En ese ejercicio de discusión popular se nombraron cuatro voceros por mesa para mantener activo cada espacio y así­ fortalecer los objetivos y estrategias de acción planteadas.\n\nPrensa CENDITEL / Fotografí­as David Hernández\n\n\nI Asamblea Patriótica Estadal de los Movimientos Sociales del GPPSB del Estado Mérida\n\n\n\nI Asamblea Patriótica Estadal de los Movimientos Sociales del GPPSB del Estado Mérida\n\nVer resto de las fotos\n",
  tags: ["GPPSB","merida","manovuelta"],
  id: 3
});
index.add({
  title: "Venezuela. Nuestro Devenir Colectivo: La Constitución de nuestras Matrices de Aprendizaje. Carta para un Amigo del Sur.",
  author: "Carlos García",
  category: null,
  content: "\n\nSaludos compañero del sur del continente. Espero todo esté direccionándose hacia aquello que apuntalamos, que entre otras cosas es, la reconstrucción de las tramas vinculares, la modificación del sistema de relaciones vinculares no sólo entre nosotros los humanos, sino de nos-otros con lo otro, con aquello que, aún para nuestra cultura, sigue siendo reducido a meros objetos con valor de cambio. Compañero, le cuento un poco de lo que está llevándose a cabo en Venezuela, lo que viene gestándose desde distintas miradas. Esto para comprender lo que viene edificándose como Revolución Bolivariana de Venezuela.\n\nPara nosotros, es importante darle contexto latinoamericano a nuestro proceso social e histórico, pues, en este caso, el compañero Chávez canalizó la fuerza histórica latente (Un pueblo queriendo liberarse y ser); Chávez fungió como portavoz de un devenir-situación que debí­a ser modificado, fue un emergente social e histórico de una historia que no estaba siendo y que querí­a ser. (Querí­amos ser lo que somos originalmente y estaba negado y oprimido, los arquetipos profundos de los afros, indí­genas, y criollos...)\n\nAhora bien, el existente en el inconsciente colectivo de la nación, el existente total implí­cito era la urgente explicitación de brindar identidad a todos los oprimidos, excluidos y marginados, al proyecto inconcluso que otrora comenzó Simón Bolí­var. Esta acción emprendida desde el golpe de estado perpetrado en Febrero del año 1992 alojaba bajo su égida la condición de posibilidad de la reconstrucción del proyecto histórico que Bolí­var abanderó en tiempos de independencia. Es decir, Bolí­var no habiendo terminado de concretar ése proceso de independencia, cuyo sentido liberador radicó en instrumentar al pueblo en su carácter y condición de pueblo maduro, pueblo con la autonomí­a necesaria para emprender y construir su propio destino, quedó en una independencia, chucuta, en una emancipación que sólo cambió de opresor (sacamos a los españoles de estas tierras para para luego convertirnos en aquello que querí­amos expulsar).\n\nLa emancipación o la asunción plena del pueblo en su independencia como sujeto histórico y co-creador de la república quedó inconcluso.\n\nLa instauración de las cuatro repúblicas posteriores a la independencia de Venezuela del imperio español, al igual que los demás procesos emancipatorios del continente no fueron sino la primera etapa de un proceso llevado y conducido por pocos de conseguir bienes y poder y no de construir la autonomí­a necesaria del pueblo como co-responsable de sus actos, constructor de vida, patria y mundo. (Es el caso posterior a la independencia, muchos de los próceres de la gesta libertadora se convirtieron en los nuevos terratenientes, los nuevos esclavistas. Expulsaron al opresor de afuera pero reprodujeron al opresor de adentro, 300 años de relación opresora no fueron en vano. Recordemos que luego Zamora dándose cuenta de tal situación explicitó la contradicción y declaró \"Horror a la oligarquía\" \"Tierra y hombres libres\").\n\nLa manipulación del pueblo por parte de los que ostentaban el poder, condujo a una dependencia psicológica y fí­sica hacia el poder constituido y sus relaciones a tal punto que el mismo pueblo depositó siempre su voluntad en el patrón, jefe y todas las instancias que, instituidas e institucionalizadas asumí­an soberbiamente que podí­an resolver necesidades, obstáculos y dilemas presentados en la vida cotidiana. Siempre tení­amos que recurrir al poderoso, al que está arriba para que de modo caritativo nos dé respuesta.\n\nEsta depositación de nuestra voluntad en ése otro con poder (alcalde, diputados, gobernadores, presidentes etc.¦) Nos empujó, a nosotros pueblo hacia una condición de adaptación pasiva ante la realidad tal que, internalizamos la condición de masa y no de pueblo con la posibilidad de modificar la realidad. El pueblo llano, el de abajo, los de a pata fuimos relegados a ser masa electoral, cuyo significado de identidad estuvo reducida a la condición de voto, (esto en el caso de los que tuvieron el acceso a la educación, por lo menos a leer y a escribir, los que no sabí­an; sencillamente no existían.)\n\nLa Emergencia del Héroe.\n\n La Construcción de un Referente.\n\nUna nación, una cultura es posible transmitirla mediante el instrumento por excelencia que instala al ser humano en el mundo: la familia, y dependiendo del cómo hayan sido los modelos comunicacionales familiares y sus roles, (Mamá, Papá e hijo) será el despliegue y la actitud ante el mundo del nuevo ser, si los roles estuvieron invertidos o hubo disfuncionalidad, ausencia, o modelos comunicacionales paradojales etc, el nuevo ser se constituirá como un ser patológico, con dificultades para desplegarse sana y maduramente en el transcurrir de la vida. Haciendo una analogí­a familiar, Venezuela en parte ha sido un paí­s por lo menos hasta el año 1998, caracterizado por una madre cuya relación con sus hijos no fue satisfactoria, nos instaló mal en la patria, y un padre (representantes gubernamentales) que no brindó el marco de seguridad psicológica, (en unos casos no existió y en otros fue represivo, sin posibilidad de diálogo) esta ausencia y disfuncionalidad, constituyó a un pueblo huérfano, que trató méndigamente de sobrevivir y de acceder miserablemente a los derechos como sujetos de una nación.\n\nCuándo Chávez da el golpe de estado en el 1992 fue como el hijo rebelde que busca reparar todo el daño, que busca reparar las ausencias, los roles, los ví­nculos, la historia, al haber fracasado con el golpe, reconoció inmediatamente su responsabilidad en la rebelión. Esta asunción generó una sensación de seguridad en la población, sobre todo en los excluidos, pues aparecía en la historia de los últimos hasta entonces cuarenta años de democracia, alguien que se hacía responsable de sus actos, diciendo en la televisión:\n\n    por ahora los objetivos planteados no fueron logrados, ya es tiempo de evitar más derramamiento de sangre, ya es tiempo de reflexionar y vendrán nuevas situaciones, y el país tiene que enrumbarse definitivamente hacia un destino mejor así­ que oigan mi palabra, oigan al comandante Chávez que les lanza este mensaje.\n\n\nÉse por ahora dejó una sensación interesante en todos, pues Venezuela, un país que se encontraba con más de un 63% de pobreza y casi un 31% de pobreza extrema sintió por vez primera en muchos años la posibilidad de proyecto, un horizonte, un sentido para la vida de todos. Emergió entonces en el inconsciente colectivo un nuevo referente qué seguir y emular.\n\n\n\nFotografí­a por David Hernández liberada bajo licencia Creative Commons by-nc-sa\n\nLa Tarea por Ser el Cambio que Queremos Ver. \n\nUna de las actitudes que mostraba Chávez siempre fue su rebeldía, su carácter contestatario ante el poder constituido, su afán por destruir la lógica dominadora, opresora. También mostró una actitud que no se quedaba en la mera contestación sino en una actitud de modificación de sus propias estructuras, permanentemente rectificaba y ratificaba esquemas, no sólo la rebeldía estaba presente, sino una actitud revolucionaria, de constante transformación.\n\nEncarcelado comenzó a visibilizarse como sujeto que impulsaría y conduciría los cambios. La izquierda, así­ como los distintos grupos que se planteaban la refundación de la nación, vieron en él la posibilidad concreta de inaugurar una nueva etapa histórica. El planteo de Chávez fue la reconfiguración, la refundación del estado, un nuevo marco legal que permitiera darle carácter participativo y protagónico al pueblo, elevándolo de la condición de objeto a la condición de sujeto histórico posibilitador de la modificación de la realidad; la constituyente fue planteada, la creación de una nueva constitución.\n\nEn 1998 habiendo llegado al poder, se aprobó la nueva constitución, el nuevo marco legal que empujaría la transformación. A través de la nueva carta magna se posibilitó objetivamente el carácter de sujeto constructor de la realidad y no de mero objeto espectador como veníamos siendo.\n\nLa Resistencia al Cambio.\n\nYa teniendo este instrumento que nos invita a ser protagonistas de la construcción y despliegue de la nación, no es todavía la garantía del cambio. Es decir, esta condición objetiva carece de su par dialectico, todavía el cambio es condición de posibilidad porque aún teniendo las condiciones objetivas (marco legal que nos permite generar un cambio) no tenemos las condiciones subjetivas, la incorporación, la internalización en el sujeto de la idea de cambio, la condición de sujeto corresponsable aún no está siendo. Por ello es importante reconocer que una cosa es el reconocimiento de lo históricamente negado, y otra es la asunción de la condición de negado que quiere transformar la realidad.\n\nDurante más de 60 años al pueblo se le ha inducido la idea de la ascensión social, del tener para ser, esto dificulta la tarea de construir un sujeto histórico y social adaptado activamente a la realidad para generar los cambios profundos y la asunción en el ejercicio y no sólo el enunciado de lo que es el poder popular, es decir, la asunción de la democracia participativa y protagónica contemplada en todas las leyes. Aún nos encontramos en ése proceso de; dejar de ser una cosa para convertirnos en otra, bien lo decía Grammsci y lo recogía Chávez en el plan histórico de la nación, el plan de la patria para el gobierno del año 2013-2019,\n\n    \"Para avanzar hacia el socialismo, necesitamos de un poder popular capaz de desarticular las tramas de opresión, explotación y dominación que subsisten en la sociedad venezolana, capaz de configurar una nueva socialidad desde la vida cotidiana donde la fraternidad y la solidaridad corran parejas con la emergencia permanente de nuevos modos de planificar y producir la vida material de nuestro pueblo. Esto pasa por pulverizar completamente la forma de Estado burgués que heredamos, la que aún se reproduce a través de sus viejas y nefastas prácticas, y darle continuidad a la invención de nuevas formas de gestión política, lo nuevo no termina de nacer hasta que lo viejo no termine de morir\"\n\n\nTodo nuestro modo de ser así­ como nuestro devenir, nuestra forma de relacionarnos, de vincularnos, se constituyen en matrices de aprendizaje, todos nosotros así­ como la nación estamos constituidos de ví­nculos y recuerdos que sintetizan una forma de estar y ser.\n\nLas matrices de aprendizaje nuestras y la resistencia al cambio de las estructuras estereotipadas se acentúan en muchas personas incluyendo las que están impulsando los cambios, pues sabemos que la lógica formal, propia de las instituciones y de nuestra forma de ser y relacionarnos, se resisten por su carácter instituido a la transformación de sus Esquemas Conceptuales Referenciales y Operativos. Por ello se nos viene un problema de doble dimensión:\n\n\n    1) las personas que se encuentran haciendo vida en las instituciones tienden a rechazar nuevas formas de organización y de vinculación, nuevas formas de comunicación entre los sujetos.\n\n\n    2) mucha de la gente otrora excluida quiere y tiende a reproducir las estructuras estereotipadas, la del opresor, salta de oprimido a opresor. Por ello los cambios no se decretan, son praxis, y he ahí­ una ruptura epistemológica que nos planteamos: ¿Cómo reducir la brecha entre el decir y el hacer dentro del funcionamiento de las instituciones, y en la vida cotidiana? Pregunta esta que nos lleva a otra: ¿Cómo logramos acompañar a un pueblo en su proceso de la dependencia a la autonomía para que sea el ejecutor y el actor principal de los cambios sociales y en muchos casos dejar de ser el niño de pecho que espera amamantar? Preguntas estas de un tenor que, nos empuja a buscar la manera de visibilizar las experiencias de un grueso de organizaciones y barrios que en su afán de organizarse han construido ejemplos concretos de comunas y ejercicio del poder popular.\n\nEsta lucha entre lo instituyente y lo instituido, lo que quiere nacer y lo que no quiere terminar de morir es propio de los procesos de cambio, se dan entre sujetos concretos, hombres y mujeres que hacemos vida en los distintos espacios. Los cambios son en lo concreto y no hay nada más concreto que las relaciones que encarna el ser humano con los otros, con lo otro y con el mundo. Entendiéndonos como seres históricos y sociales, producidos y productores, habitantes y habituados de lo contextual, nos reconocemos entonces como sujetos producidos por una cultura capitalista con sus instituciones, sus relaciones y su lógica pero que, sabiéndonos producidos y por tanto condicionados más no determinados por tal cultura, nos asumimos como sujetos que podemos producir nueva cultura, nuevas relaciones que construyan el nuevo tejido social y forma de relacionarnos, por ello el planteo de la comuna que aloja la lógica de la reconstrucción de la trama vincular-social es la esperanza para la vuelta a la humanización. Por ello el llamado revolucionario, es la transformación de nuestro modo de vida y de concepción del mundo, el re-encuentro con lo humano, la larga marcha hacia la sociedad comunal es: común-icación, com-unión, común-ismo en sí­ntesis un código común. ¡Comuna o nada!\n\n\n\nLa Batalla por el Control de la Subjetividad.\n\nAhora en otro orden de ideas, lo que hemos vivido los últimos años en Venezuela ha estado signado por varias etapas, el proceso Bolivariano ha tenido sus dificultades. Chávez siendo el padre que ahora asumía la responsabilidad con sus hijos, donde por vez primera hubo ley, en otras palabras que posibilitaba encuadre y brindaba proyecto se enfrentó a una burguesía histórica y apátrida que no quería ni quiere permitir que los otros, los negados, los marginados tengamos existencia, es decir que seamos. Esta burguesía ha perpetrado hasta ahora varios intentos de golpe, desestabilización de todo tipo para derrocar la posibilidad de cambios profundos. Estas acciones aunadas a la construcción de una subjetividad uniforme y paranoica por parte de los mass media, de los distintos canales de tv, radio etc., que están direccionados desde que Chávez asumió el poder a generar confusión, odio, inconformidad y maximizando los errores, así­ como elevando los miedos a la pérdida y al ataque en toda la población han engendrado un clima social de incertidumbre.\n\nLa campaña de los medios ha sido brutal, sin precedentes en todo el mundo, la guerra de cuarta generación a través de todos los mecanismos de difusión han destruido el entramado vincular, el tejido social, hay una fragmentación de la realidad, de los ví­nculos, de los grupos. Hemos llegado hasta el punto que los medios, en el caso de los adeptos a la oposición han generado una disociación de la realidad, una disociación muy acentuada entre el sentir, el pensar y el hacer que los lleva a actos necrófilos en el que el otro es concebido como sujeto de sospecha y no de construcción. Pues por ahora se vuelca compleja la posibilidad o por lo menos se ha deteriorado la posibilidad del diálogo, de incorporar al otro, de aperturarse al otro en su antí­tesis para llegar a una sí­ntesis, lograr encuentros para poder incorporar a ése otro, por ahora es tarea titánica, pues la tv y los mass media  han servido de vehí­culo para mostrar una ventana fragmentada de la realidad, una realidad parcial direccionada a generar miedo, odio y a reforzar los esquemas conceptuales, referenciales y operativos estereotipados de un sector de la población que teme profundamente a los cambios.\n\nEn este escenario nos encontramos, tratando de mantenernos coherentes con el proyecto de transformación profunda y de vincularnos, encontrarnos hombro con hombro quienes estemos apostados al cambio, tratando desde el discenso de las fuerzas que creen en la revolución y con sus contradicciones construir la esperanza.\n\nAnte esta batalla nos planteamos la reconstrucción de las tramas vinculares, nosotros como agentes de cambio concretos, como sujetos históricos, Bolivarianos, Sur Americanos, nos asumimos como los heraldos de la transformación, nuestro ejemplo es la única posibilidad y la más fuerte convicción de nuestra prédica.\n\nEs así­ que nuestra tarea sigue siendo la planificación de la esperanza entendida como proyecto y no como espera.\n",
  tags: ["opinión","chavez","venezuela"],
  id: 4
});
index.add({
  title: "I Congreso Nacional de los Movimientos Sociales del GPPSB",
  author: "David Hernandez",
  category: null,
  content: "\n\nEntre los dí­as 5 y 8 de diciembre se celebró en San Antonio de Los Altos el I Congreso Nacional de los Movimientos Sociales del Gran Polo Patriótico Simón Bolí­var.\nDurante 4 dí­as, en la Universidad de los Trabajadores de América Latina, se reunieron delegados y voceros de variados colectivos y movimientos sociales de todo el paí­s para discutir el material originado en las plenarias regionales efectuadas semanas atrás en las diferentes regiones y generar el documento final que reúne propuestas para el cogobierno entre los movimientos de base que integran el Gran Polo Patriótico Simón Bolí­var y el Gobierno Nacional. Poder popular en su máxima expresión.\nEl documento resumen presentado al Presidente Nicolás Maduro en el acto de clausura celebrado en el Cuartel de la Montaña en la tarde noche del 8 de diciembre puede ser descargado en el siguiente enlace: Documento resumen del GPPSB\nFotos\n\n\nCongreso Nacional de los Movimientos Sociales del GPPSB\n\n\nEntrevista de VTV a Blanca Eekhout\n\n\nUniversidad de los Trabajadores de América Latina\n\nGalería completa\n\n\n\n",
  tags: ["GPPSB","congreso"],
  id: 5
});
index.add({
  title: "MGR: Latinoamerica",
  author: "David Hernandez",
  category: null,
  content: "Manovuelta Guerrilla Radio\nFecha: 19/03/2014\nTema: Actualidad local, nacional y latinoamericana.\nInvitados: Camila Cardus, Militante del Partido Comunista Marxista Leninista y colaboradora de Prensa Latina \n\n",
  tags: ["merida","manovuelta","venezuela","mgr","radio","opinión","oposición","política","actualidad","mundo"],
  id: 6
});
index.add({
  title: "MGR: Más guarimbas",
  author: "David Hernandez",
  category: null,
  content: "Manovuelta Guerrilla Radio\nFecha: 14/03/2014\nTema: Guarimbas, salud mental, redes sociales y organización popular. \n\n",
  tags: ["merida","manovuelta","venezuela","mgr","radio","opinión","oposición","política","guarimbas","actualidad","internet","redes sociales","salud mental"],
  id: 7
});
index.add({
  title: "MGR: Guarimbas",
  author: "David Hernandez",
  category: null,
  content: "Manovuelta Guerrilla Radio\nFecha: 07/03/2014\nTema: El tema recurrente por segundo mes, las guarimbas. Plan de la patria.\n\n",
  tags: ["merida","manovuelta","venezuela","mgr","radio","opinión","oposición","política","guarimbas","actualidad","plan de la patria"],
  id: 8
});
index.add({
  title: "MGR: Aniversario de Chávez",
  author: "David Hernandez",
  category: null,
  content: "Manovuelta Guerrilla Radio\nFecha: 05/03/2014\nTema: Aniversario de la siembra del Comandante Chávez. Movimientos sociales.\n\n",
  tags: ["merida","manovuelta","venezuela","mgr","radio","opinión","oposición","política","guarimbas","actualidad","Chávez","movimientos sociales"],
  id: 9
});
index.add({
  title: "MGR: Golpe suave",
  author: "David Hernandez",
  category: null,
  content: "Manovuelta Guerrilla Radio\nFecha: 28/02/2014\nTema: Gene Sharp y las tácticas del golpe suave para derrocar gobiernos.\n\n",
  tags: ["merida","manovuelta","venezuela","mgr","radio","opinión","oposición","política","guarimbas","actualidad","mundo","golpe"],
  id: 10
});
index.add({
  title: "MGR: Señor Anonymous",
  author: "David Hernandez",
  category: null,
  content: "Manovuelta Guerrilla Radio\nFecha: 17/02/2014\nTema: Guerra mediática a través de las redes.\nInvitados: \"Sr. Anonymous\" \n\n",
  tags: ["merida","manovuelta","venezuela","mgr","radio","entrevistas","opinión","oposición","política","guarimbas","actualidad","internet","redes sociales","anonymous"],
  id: 11
});
index.add({
  title: "MGR: Movimiento sexodiverso",
  author: "David Hernandez",
  category: null,
  content: "Manovuelta Guerrilla Radio\nFecha: 10/02/2014\nTema: Movimiento sexodiverso.\nInvitados: Freddy Medina (Comando polí­tico del PSUV Mérida), Carolina Peña y Dariana Monzón (Movimiento Sexodiverso) \n\n",
  tags: ["merida","manovuelta","venezuela","mgr","radio","entrevistas","opinión","polí­tica","actualidad","sexodiversidad"],
  id: 12
});
index.add({
  title: "MGR: Empiezan las guarimbas",
  author: "David Hernandez",
  category: null,
  content: "Manovuelta Guerrilla Radio\nFecha: 07/02/2014\nTema: Protestas en Mérida (inicio de las guarimbas) y guerra económica.\n\n",
  tags: ["merida","manovuelta","venezuela","mgr","radio","opinión","oposición","polí­tica","guarimbas"],
  id: 13
});
index.add({
  title: "MGR: Psiquiatrí­a, ciencia de la muerte.",
  author: "David Hernandez",
  category: null,
  content: "Manovuelta Guerrilla Radio\nFecha: 05/02/2014\nTema: Psiquiatrí­a, ciencia de la muerte.\nInvitados: Alejandro Carrizo\n\n",
  tags: ["manovuelta","venezuela","mgr","radio","psiquiatrí­a","entrevistas","psicologí­a"],
  id: 14
});
index.add({
  title: "MGR: FUMSEM",
  author: "David Hernandez",
  category: null,
  content: "Manovuelta Guerrilla Radio\nFecha: 03/02/2014\nTema: Ordenanza municipal para motorizados.\nInvitados: Fuerza Motorizada Socialista del Estado Mérida - FUMSEM\n\n",
  tags: ["merida","manovuelta","fumsem","venezuela","mgr","radio","entrevistas"],
  id: 15
});
console.log( jQuery.type(index) );
// builds reference data
var store = [{
  "title": "El Aroma que se Quedó",
  "author": "José Luis Dávila",
  "link": "/el-aroma-que-se-quedo.html",
  "image": null,
  "date": "April 26, 2015",
  "category": null,
  "excerpt": "El Aroma que se Quedó de la Serie Documental Manovuelta Producido por Ecosur Films Colectivo Manovuelta En las Montañas Venezolanas..."
},{
  "title": "Sobre el Tema del Urbanismo, La Comunicación y El Plan de la Patria.",
  "author": "Carlos Garcí­a",
  "link": "/urabnismo-comunicacion-plan-de-la-patria.html",
  "image": null,
  "date": "April 22, 2015",
  "category": null,
  "excerpt": "Imagen tomada de la web: http://equilibriocosmico.blogspot.com El plan de la patria en su conjunto es, un documento que anuncia el..."
},{
  "title": "La Emergencia de La Esperanza. Una nueva forma de articulación, una nueva forma de relacionarnos y de caminar",
  "author": "Carlos Garcí­a",
  "link": "/la-emergencia-de-la-esperanza.html",
  "image": null,
  "date": "March 26, 2015",
  "category": null,
  "excerpt": "América Latina es un continente que, si bien sabemos es el más desigual del planeta y que tiene una historia..."
},{
  "title": "I Asamblea Patriótica Estadal del GPPSB",
  "author": "Prensa CENDITEL",
  "link": "/i-asamblea-patriotica-estadal.html",
  "image": null,
  "date": "March 26, 2015",
  "category": null,
  "excerpt": "En el ámbito de la consolidación de la Revolución que impulsa el Gobierno Bolivariano y con los acuerdos generados en..."
},{
  "title": "Venezuela. Nuestro Devenir Colectivo: La Constitución de nuestras Matrices de Aprendizaje. Carta para un Amigo del Sur.",
  "author": "Carlos García",
  "link": "/venezuela-nuestro-devenir-colectivo.html",
  "image": null,
  "date": "March 24, 2015",
  "category": null,
  "excerpt": "Saludos compañero del sur del continente. Espero todo esté direccionándose hacia aquello que apuntalamos, que entre otras cosas es, la..."
},{
  "title": "I Congreso Nacional de los Movimientos Sociales del GPPSB",
  "author": "David Hernandez",
  "link": "/i-congreso-nacional-movimientos-sociales.html",
  "image": null,
  "date": "December 9, 2014",
  "category": null,
  "excerpt": "Entre los dí­as 5 y 8 de diciembre se celebró en San Antonio de Los Altos el I Congreso Nacional..."
},{
  "title": "MGR: Latinoamerica",
  "author": "David Hernandez",
  "link": "/mgr-latinoamerica.html",
  "image": null,
  "date": "March 20, 2014",
  "category": null,
  "excerpt": "Manovuelta Guerrilla Radio Fecha: 19/03/2014 Tema: Actualidad local, nacional y latinoamericana. Invitados: Camila Cardus, Militante del Partido Comunista Marxista Leninista..."
},{
  "title": "MGR: Más guarimbas",
  "author": "David Hernandez",
  "link": "/mgr-mas-guarimbas.html",
  "image": null,
  "date": "March 15, 2014",
  "category": null,
  "excerpt": "Manovuelta Guerrilla Radio\nFecha: 14/03/2014\nTema: Guarimbas, salud mental, redes sociales y organización popular. \n\n"
},{
  "title": "MGR: Guarimbas",
  "author": "David Hernandez",
  "link": "/mgr-guarimbas.html",
  "image": null,
  "date": "March 8, 2014",
  "category": null,
  "excerpt": "Manovuelta Guerrilla Radio\nFecha: 07/03/2014\nTema: El tema recurrente por segundo mes, las guarimbas. Plan de la patria.\n\n"
},{
  "title": "MGR: Aniversario de Chávez",
  "author": "David Hernandez",
  "link": "/mgr-aniversario-de-chavez.html",
  "image": null,
  "date": "March 6, 2014",
  "category": null,
  "excerpt": "Manovuelta Guerrilla Radio\nFecha: 05/03/2014\nTema: Aniversario de la siembra del Comandante Chávez. Movimientos sociales.\n\n"
},{
  "title": "MGR: Golpe suave",
  "author": "David Hernandez",
  "link": "/mgr-golpe-suave.html",
  "image": null,
  "date": "March 1, 2014",
  "category": null,
  "excerpt": "Manovuelta Guerrilla Radio\nFecha: 28/02/2014\nTema: Gene Sharp y las tácticas del golpe suave para derrocar gobiernos.\n\n"
},{
  "title": "MGR: Señor Anonymous",
  "author": "David Hernandez",
  "link": "/mgr-sr-anonymous.html",
  "image": null,
  "date": "February 18, 2014",
  "category": null,
  "excerpt": "Manovuelta Guerrilla Radio\nFecha: 17/02/2014\nTema: Guerra mediática a través de las redes.\nInvitados: \"Sr. Anonymous\" \n\n"
},{
  "title": "MGR: Movimiento sexodiverso",
  "author": "David Hernandez",
  "link": "/mgr-movimiento-sexodiverso.html",
  "image": null,
  "date": "February 11, 2014",
  "category": null,
  "excerpt": "Manovuelta Guerrilla Radio Fecha: 10/02/2014 Tema: Movimiento sexodiverso. Invitados: Freddy Medina (Comando polí­tico del PSUV Mérida), Carolina Peña y Dariana..."
},{
  "title": "MGR: Empiezan las guarimbas",
  "author": "David Hernandez",
  "link": "/mgr-empiezan-las-guarimbas.html",
  "image": null,
  "date": "February 8, 2014",
  "category": null,
  "excerpt": "Manovuelta Guerrilla Radio\nFecha: 07/02/2014\nTema: Protestas en Mérida (inicio de las guarimbas) y guerra económica.\n\n"
},{
  "title": "MGR: Psiquiatrí­a, ciencia de la muerte.",
  "author": "David Hernandez",
  "link": "/mgr-psiquiatria-ciencia-de-la-muerte.html",
  "image": null,
  "date": "February 6, 2014",
  "category": null,
  "excerpt": "Manovuelta Guerrilla Radio\nFecha: 05/02/2014\nTema: Psiquiatrí­a, ciencia de la muerte.\nInvitados: Alejandro Carrizo\n\n"
},{
  "title": "MGR: FUMSEM",
  "author": "David Hernandez",
  "link": "/mgr-fumsem.html",
  "image": null,
  "date": "February 4, 2014",
  "category": null,
  "excerpt": "Manovuelta Guerrilla Radio\nFecha: 03/02/2014\nTema: Ordenanza municipal para motorizados.\nInvitados: Fuerza Motorizada Socialista del Estado Mérida - FUMSEM\n\n"
}]
// builds search
$(document).ready(function() {
  $('input#search').on('keyup', function () {
    var resultdiv = $('#results');
    // Get query
    var query = $(this).val();
    // Search for it
    var result = index.search(query);
    // Show results
    resultdiv.empty();
    // Add status
    resultdiv.prepend('<p class="">Found '+result.length+' result(s)</p>');
    // Loop through, match, and add results
    for (var item in result) {
      var ref = result[item].ref;
      var searchitem = '<div class="result"><img src="'+store[ref].image+'" alt="'+store[ref].title+'" class="result-img"><div class="result-body"><a href="'+store[ref].link+'" class="post-title">'+store[ref].title+'</a><div class="post-date small">'+store[ref].category+' &times; '+store[ref].date+'</div><p>'+store[ref].excerpt+'</p></div>';
      resultdiv.append(searchitem);
    }
  });
});
