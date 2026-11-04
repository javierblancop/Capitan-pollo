import { APP_IMAGES } from '../assets/images';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'pollos' | 'camperos' | 'raciones' | 'salsas' | 'postres' | 'bebidas' | 'navidad';
  image?: string;
  isPopular?: boolean;
  isSpecialty?: boolean;
  allergens?: string[];
  options?: {
    name: string;
    choices: string[];
  }[];
}

export const CATEGORIES = [
  { id: 'todos', label: 'Toda la Carta' },
  { id: 'navidad', label: '🎄 Especial Navidad' },
  { id: 'pollos', label: 'Pollos Asados & Menús' },
  { id: 'camperos', label: 'Camperos Malagueños' },
  { id: 'raciones', label: 'Raciones & Guarnición' },
  { id: 'salsas', label: 'Salsas Caseras' },
  { id: 'postres', label: 'Postres Caseros' },
  { id: 'bebidas', label: 'Bebidas' },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  // ESPECIAL NAVIDAD
  {
    id: 'menu-navidad-familiar',
    name: '🎄 Gran Menú Navideño para Compartir (4-6 personas)',
    description: '2 Pollos asados camperos con aliño festivo de hierbas aromáticas + cazuela grande de patatas al jugo con manzana asada y piñones + bandeja de 12 croquetas caseras + tarta de queso al turrón + botella de Cava o Vino de la tierra.',
    price: 38.50,
    category: 'navidad',
    image: APP_IMAGES.polloAsadoNavidad,
    isPopular: true,
    isSpecialty: true,
    allergens: ['Consultar alérgenos según complementos'],
    options: [
      {
        name: 'Bebida Navideña',
        choices: ['Botella de Cava Brut', 'Botella de Vino Tinto Crianza', 'Refrescos Variados (2 x 1.5L)'],
      },
      {
        name: 'Guarnición de Patatas',
        choices: ['Patatas al jugo con piñones y manzana', 'Patatas fritas caseras XXL', 'Mitad al jugo y mitad fritas'],
      },
    ],
  },
  {
    id: 'pollo-relleno-navideno',
    name: '🎅 Pollo Asado Relleno Tradicional de Navidad',
    description: 'Pollo de campo entero relleno artesanalmente con carne magra sazonada, orejones, pasas, ciruelas, piñones y manzana reineta. Asado lentamente y bañado en reducción de Pedro Ximénez y jugo del asador.',
    price: 19.90,
    category: 'navidad',
    image: APP_IMAGES.polloAsadoNavidad,
    isPopular: true,
    isSpecialty: true,
    allergens: ['Frutos de cáscara', 'Sulfitos'],
    options: [
      {
        name: 'Corte',
        choices: ['Entero listo para trinchar', 'Trinchado y emplatado con su jugo aparte'],
      },
    ],
  },
  {
    id: 'tarta-queso-turron',
    name: '✨ Tarta de Queso Casera con Turrón de Jijona',
    description: 'Edición especial de Navidad: nuestra aclamada tarta de queso horneada fundida con auténtico turrón blando de Jijona de almendra tostada y miel. Cremosa y festiva.',
    price: 5.00,
    category: 'navidad',
    image: APP_IMAGES.tartaQuesoCasera,
    isPopular: true,
    isSpecialty: true,
    allergens: ['Lácteos', 'Huevo', 'Frutos de cáscara', 'Gluten'],
  },

  // POLLOS ASADOS
  {
    id: 'pollo-entero',
    name: 'Pollo Asado Entero al Aliño Capitán',
    description: 'Pollo de corral asado lentamente con nuestro aliño casero secreto de hierbas mediterráneas, ajo, limón y aceite de oliva virgen extra. Piel crujiente y carne jugosa con abundante jugo natural.',
    price: 11.50,
    category: 'pollos',
    image: APP_IMAGES.hero,
    isPopular: true,
    isSpecialty: true,
    allergens: ['Sin Gluten'],
    options: [
      {
        name: 'Corte',
        choices: ['Entero sin cortar', 'Cortado en 4 piezas', 'Cortado en 8 piezas'],
      },
      {
        name: 'Extra de Jugo',
        choices: ['Con jugo estándar', 'Con extra de jugo del asador (+0.50€)'],
      },
    ],
  },
  {
    id: 'medio-pollo',
    name: 'Medio Pollo Asado con Jugo',
    description: 'Media pieza de pollo asado al punto, tierna y dorada, regada con el jugo natural del asador. Ideal para una comida individual completa.',
    price: 6.50,
    category: 'pollos',
    image: APP_IMAGES.polloAsadoAlino,
    isPopular: false,
    allergens: ['Sin Gluten'],
    options: [
      {
        name: 'Corte',
        choices: ['Pieza entera', 'Cortado en 2 trozos'],
      },
    ],
  },
  {
    id: 'menu-capitan-individual',
    name: 'Menú Capitán Individual',
    description: 'Medio pollo asado al aliño de la casa + ración de patatas fritas caseras o al jugo + refresco o cerveza de 33cl a elegir.',
    price: 9.90,
    category: 'pollos',
    image: APP_IMAGES.polloAsadoAlino,
    isPopular: true,
    allergens: ['Sin Gluten (con patatas fritas)'],
    options: [
      {
        name: 'Guarnición',
        choices: ['Patatas fritas caseras', 'Patatas asadas al jugo del pollo'],
      },
      {
        name: 'Bebida',
        choices: ['Coca-Cola Normal', 'Coca-Cola Zero', 'Fanta Naranja', 'Fanta Limón', 'Cerveza Victoria Málaga', 'Agua Mineral'],
      },
    ],
  },
  {
    id: 'menu-familiar-capitan',
    name: 'Menú Familiar Capitán Pollo (4-5 personas)',
    description: '2 Pollos asados enteros + ración extragrande de patatas fritas o al jugo + ensaladilla rusa o ensalada mixta + 2 botes de salsa casera a elegir + botella 1.5L de refresco.',
    price: 29.50,
    category: 'pollos',
    image: APP_IMAGES.galeriaAsadorFuego,
    isPopular: true,
    isSpecialty: true,
    allergens: ['Consultar alérgenos según ensalada'],
    options: [
      {
        name: 'Patatas',
        choices: ['Patatas fritas caseras XXL', 'Patatas asadas al jugo XXL', 'Mitad fritas y mitad al jugo'],
      },
      {
        name: 'Entrante',
        choices: ['Ensaladilla Rusa Casera', 'Ensalada Mixta de la Huerta', 'Pimientos asados artesanos'],
      },
      {
        name: 'Bebida Familiar',
        choices: ['Coca-Cola 1.5L', 'Coca-Cola Zero 1.5L', 'Fanta Naranja 1.5L', 'Cerveza 1L'],
      },
    ],
  },

  // CAMPEROS MALAGUEÑOS
  {
    id: 'campero-capitan',
    name: 'Campero Capitán Pollo Especial (El Rey de la Casa)',
    description: 'Pan de mollete campero tostado y crujiente, relleno generoso de pollo asado desmigado y jugoso, queso fundido, bacon ahumado crujiente, huevo a la plancha, cebolla caramelizada, tomate, lechuga fresca y nuestra mayonesa casera suave.',
    price: 7.90,
    category: 'camperos',
    image: APP_IMAGES.camperoMalagueno,
    isPopular: true,
    isSpecialty: true,
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
    options: [
      {
        name: 'Toque picante',
        choices: ['Sin picante', 'Con un toque picante suave', 'Con salsa brava picante'],
      },
      {
        name: 'Salsa base',
        choices: ['Mayonesa casera', 'Alioli casero', 'Salsa barbacoa', 'Sin salsa'],
      },
    ],
  },
  {
    id: 'campero-bbq',
    name: 'Campero Barbacoa & Bacon Crunch',
    description: 'Pollo asado desmigado macerado en salsa barbacoa ahumada, doble bacon crujiente, cebolla frita crujiente, queso cheddar fundido y lechuga fresca.',
    price: 7.50,
    category: 'camperos',
    image: APP_IMAGES.camperoBbqBacon,
    isPopular: true,
    allergens: ['Gluten', 'Lácteos'],
  },
  {
    id: 'campero-clasico',
    name: 'Campero Clásico Malagueño',
    description: 'La tradición de Málaga: jamón york seleccionado de calidad, doble queso Edam fundido, lechuga fresca, rodajas de tomate natural y mayonesa casera en pan campero prensado a la plancha.',
    price: 6.50,
    category: 'camperos',
    image: APP_IMAGES.camperoMalagueno,
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
  },
  {
    id: 'campero-serrano-queso',
    name: 'Campero Serrano Ibérico',
    description: 'Jamón serrano de bodega, queso semicurado fundente, rodajas de tomate aliñadas con aceite de oliva virgen extra y orégano en mollete campero bien tostado.',
    price: 7.20,
    category: 'camperos',
    image: APP_IMAGES.camperoMalagueno,
    allergens: ['Gluten', 'Lácteos'],
  },
  {
    id: 'campero-vegetal-completo',
    name: 'Campero Vegetal con Huevo',
    description: 'Doble huevo a la plancha, queso suave fundido, espárragos blancos, maíz dulce, tomate de la huerta, lechuga y mayonesa suave en pan campero tostado.',
    price: 6.80,
    category: 'camperos',
    image: APP_IMAGES.camperoMalagueno,
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
  },

  // RACIONES & GUARNICIÓN
  {
    id: 'patatas-al-jugo',
    name: 'Patatas Asadas al Jugo del Pollo',
    description: 'Patatas panaderas confitadas lentamente en los propios jugos del asador con ajo, laurel y especias. Tiernas, sabrosas y aromáticas.',
    price: 4.00,
    category: 'raciones',
    image: APP_IMAGES.patatasAsadasJugo,
    isPopular: true,
    isSpecialty: true,
    allergens: ['Sin Gluten'],
  },
  {
    id: 'croquetas-pollo',
    name: 'Croquetas Caseras de Pollo Asado (6 uds)',
    description: 'Croquetas caseras elaboradas con el pollo asado del asador desmigado, bechamel cremosa infusionada y rebozado de pan rallado rústico muy crujiente.',
    price: 5.50,
    category: 'raciones',
    image: APP_IMAGES.croquetasPollo,
    isPopular: true,
    allergens: ['Gluten', 'Lácteos', 'Huevo'],
  },
  {
    id: 'empanadas-artesanas',
    name: 'Empanadas Caseras Rellenas (Unidad)',
    description: 'Empanada artesanal de masa crujiente dorada al horno. Relleno abundante de carne suave especiada o pollo asado al verdeo con huevo duro y aceituna.',
    price: 2.80,
    category: 'raciones',
    image: APP_IMAGES.empanadasArtesanas,
    isPopular: true,
    allergens: ['Gluten', 'Huevo'],
    options: [
      {
        name: 'Sabor de Empanada',
        choices: ['Pollo Asado Casero', 'Carne Suave Criolla', 'Jamón y Queso Fundido'],
      },
    ],
  },
  {
    id: 'patatas-fritas-caseras',
    name: 'Ración de Patatas Fritas Caseras',
    description: 'Patatas recién cortadas y fritas al momento en aceite limpio, doradas y crujientes por fuera, tiernas por dentro. Con su punto justo de sal marina.',
    price: 3.50,
    category: 'raciones',
    image: APP_IMAGES.polloAsadoAlino,
    allergens: ['Sin Gluten'],
  },
  {
    id: 'ensaladilla-rusa',
    name: 'Ensaladilla Rusa Tradicional Casera',
    description: 'Receta familiar con patata en su punto, atún claro, zanahoria cocida, guisantes, huevo duro y mayonesa casera bien fría.',
    price: 4.50,
    category: 'raciones',
    allergens: ['Huevo', 'Pescado'],
  },
  {
    id: 'pimientos-asados',
    name: 'Pimientos Rojos Asados al Carbón Aliñados',
    description: 'Pimientos rojos asados pelados a mano, macerados con ajo picado, aceite de oliva virgen extra malagueño y vinagre de jerez.',
    price: 4.20,
    category: 'raciones',
    allergens: ['Sin Gluten'],
  },

  // SALSAS
  {
    id: 'salsa-alino-secreto',
    name: 'Tarrina de Aliño Secreto Capitán Pollo',
    description: 'Nuestra mítica reducción de jugos del asado con hierbas provenzales, ajo asado, limón natural y especias.',
    price: 1.50,
    category: 'salsas',
  },
  {
    id: 'salsa-alioli-casero',
    name: 'Alioli Casero de Mortero',
    description: 'Alioli suave y cremoso elaborado a diario con ajo natural y aceite virgen.',
    price: 1.50,
    category: 'salsas',
    allergens: ['Huevo'],
  },
  {
    id: 'salsa-brava-casera',
    name: 'Salsa Brava Tradicional Picante',
    description: 'Salsa brava artesanal con pimentón de la Vera y el punto picante justo.',
    price: 1.50,
    category: 'salsas',
  },

  // POSTRES CASEROS
  {
    id: 'tarta-queso-casera',
    name: 'Nuestra Famosa Tarta de Queso Horneada',
    description: 'El postre estrella más aplaudido por nuestros clientes de Torremolinos. Tarta de queso cremosa estilo casero al horno con superficie caramelizada y corazón meloso.',
    price: 4.50,
    category: 'postres',
    image: APP_IMAGES.tartaQuesoCasera,
    isPopular: true,
    isSpecialty: true,
    allergens: ['Lácteos', 'Huevo', 'Gluten'],
  },
  {
    id: 'tarta-abuela',
    name: 'Tarta de la Abuela (Chocolate y Galleta)',
    description: 'Capas de galleta remojada en leche, crema pastelera casera y cobertura untuosa de chocolate negro artesano.',
    price: 4.00,
    category: 'postres',
    allergens: ['Lácteos', 'Gluten', 'Huevo'],
  },
  {
    id: 'flan-huevo-casero',
    name: 'Flan Casero de Huevo con Caramelo',
    description: 'Flan tradicional al baño maría con huevos de granja, leche entera y caramelo líquido tostado.',
    price: 3.50,
    category: 'postres',
    allergens: ['Lácteos', 'Huevo'],
  },

  // BEBIDAS
  {
    id: 'cerveza-victoria',
    name: 'Cerveza Victoria Málaga (33cl)',
    description: '«Malagueña y Exquisita», bien fría de barril en lata o botellín.',
    price: 1.80,
    category: 'bebidas',
    allergens: ['Gluten'],
  },
  {
    id: 'refresco-lata',
    name: 'Refrescos 33cl (Coca-Cola, Fanta, Aquarius, Nestea)',
    description: 'Selecciona tu refresco favorito bien frío.',
    price: 1.80,
    category: 'bebidas',
    options: [
      {
        name: 'Variedad',
        choices: ['Coca-Cola Original', 'Coca-Cola Zero', 'Fanta Naranja', 'Fanta Limón', 'Aquarius Limón', 'Nestea al Limón'],
      },
    ],
  },
  {
    id: 'agua-mineral',
    name: 'Agua Mineral Natural 500ml',
    description: 'Botella de agua mineral fría.',
    price: 1.20,
    category: 'bebidas',
  },
  {
    id: 'refresco-familiar',
    name: 'Refresco Familiar 1.5L',
    description: 'Botella grande para compartir en familia.',
    price: 2.90,
    category: 'bebidas',
    options: [
      {
        name: 'Sabor',
        choices: ['Coca-Cola 1.5L', 'Coca-Cola Zero 1.5L', 'Fanta Naranja 1.5L'],
      },
    ],
  },
];

export interface CartItem {
  item: MenuItem;
  quantity: number;
  selectedOptions?: { [key: string]: string };
  specialInstructions?: string;
}

export const RESTAURANT_INFO = {
  name: 'Capitán Pollo',
  subtitle: 'Asador Tradicional & Camperos Malagueños',
  address: 'Av. Joan Miró, 4, 29620 Torremolinos, Málaga',
  phone: '+34 612 56 88 58',
  phoneClean: '34612568858',
  phoneDisplay: '612 56 88 58',
  googleMapsUrl: 'https://maps.google.com/?q=Av.+Joan+Miro+4+Torremolinos+Malaga',
  hours: [
    { day: 'Lunes', hours: 'Cerrado por descanso', isOpen: false },
    { day: 'Martes', hours: '09:00 - 16:00', isOpen: true },
    { day: 'Miércoles', hours: '09:00 - 16:00', isOpen: true },
    { day: 'Jueves', hours: '09:00 - 16:00', isOpen: true },
    { day: 'Viernes', hours: '09:00 - 16:00', isOpen: true },
    { day: 'Sábado', hours: '09:00 - 16:00', isOpen: true },
    { day: 'Domingo', hours: '09:00 - 16:00', isOpen: true },
  ],
  glovoUrl: 'https://glovoapp.com/es/es/torremolinos/capitan-pollo-trm/',
  rating: 4.8,
  totalReviews: 194,
};

export const REVIEWS = [
  {
    id: 1,
    author: 'Carlos Morales',
    date: 'Hace 2 semanas',
    rating: 5,
    tag: 'Cliente habitual',
    text: 'Los mejores pollos de Torremolinos con diferencia. El aliño casero tiene un toque a hierbas y limón que no encuentras en ningún otro lado. Y el campero Capitán Pollo es enorme, crujiente y jugosísimo. 10 de 10.',
  },
  {
    id: 2,
    author: 'Laura Gómez',
    date: 'Hace 1 mes',
    rating: 5,
    tag: 'Encargo por WhatsApp',
    text: 'El matrimonio que atiende es encantador, súper simpáticos y atentos. Encargué por WhatsApp a mediodía para recoger a las 14:15 y fue llegar, pagar y recoger calentito sin hacer ni un minuto de cola. ¡Y no os vayáis sin pedir la tarta de queso casera!',
  },
  {
    id: 3,
    author: 'Miguel Ángel Ruiz',
    date: 'Hace 3 semanas',
    rating: 5,
    tag: 'Comida para la playa',
    text: 'Siempre que vamos a pasar el día a la playa en Torremolinos paramos en Av. Joan Miró a por un pollo con patatas al jugo. Calidad excelente a precio súper asequible. Las patatas con el caldo del pollo son una locura.',
  },
  {
    id: 4,
    author: 'Andrea Pellicer',
    date: 'Hace 1 mes',
    rating: 5,
    tag: 'Camperos',
    text: 'Hacía tiempo que no comía un campero malagueño tan bien hecho: pan mollete crujiente, bien prensado y con pollo asado de verdad desmigado dentro en vez del típico fiambre. Repetiremos seguro.',
  },
];
