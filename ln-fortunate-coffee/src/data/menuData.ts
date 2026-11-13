import { MenuItem, CategoryType } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // ==========================================
  // NOODLES (Mie & Pasta)
  // ==========================================
  {
    id: 'lucky-noodle',
    name: 'Lucky Noodle',
    category: 'Noodles',
    price: 20000,
    image: '/assets/menu/lucky_noodle.png',
    description: 'Mie lezat disajikan dengan pangsit lembut, jamur cincang gurih harum, sayur pakcoy segar, potongan jeruk sonkit, dan kuah kaldu hangat khas Fortunate Coffee.',
    tag: 'Favorit'
  },
  {
    id: 'green-noodle',
    name: 'Green Noodle',
    category: 'Noodles',
    price: 30000,
    image: '/assets/menu/green_noodle.png',
    description: 'Mie hijau bernutrisi disajikan di atas nampan kayu dengan irisan tomat segar, jamur kecap spesial, pangsit renyah, sayur pakcoy, dan kuah kaldu segar.',
  },
  {
    id: 'tom-mee-soa',
    name: 'Tom Mee Soa',
    category: 'Noodles',
    price: 25000,
    image: '/assets/menu/tom_mee_soa.png',
    description: 'Mee soa lembut dalam kuah hangat gurih segar dengan tahu, rumput laut nori, jamur, sayur pakcoy, dan perasan jeruk sonkit.',
  },
  {
    id: 'coconut-spicy-noodle',
    name: 'Coconut Spicy Noodle',
    category: 'Noodles',
    price: 25000,
    image: '/assets/menu/coconut_spicy_noodle.png',
    description: 'Mie kuah kari santan pedas gurih berempah dengan kembang kol, jamur kuping, wortel manis, jagung pipil, dan sayuran hijau segar.',
  },
  {
    id: 'miso-ramen',
    name: 'Miso Ramen',
    category: 'Noodles',
    price: 25000,
    image: '/assets/menu/miso_ramen.png',
    description: 'Ramen khas dengan kuah pasta miso kedelai fermentasi gurih, jagung manis, jamur shiitake, rumput laut wakame, tauge, tahu goreng, dan pakcoy.',
  },
  {
    id: 'spaghetti-tomato-sauce',
    name: 'Spaghetti Tomato Sauce',
    category: 'Noodles',
    price: 25000,
    image: '/assets/menu/spaghetti_tomato.png',
    description: 'Pasta spaghetti al dente berbalut saus tomat segar racikan herbal khas Italia dengan taburan paprika merah-hijau dan brokoli kukus.',
  },
  {
    id: 'spaghetti-green-sauce',
    name: 'Spaghetti Green Sauce',
    category: 'Noodles',
    price: 25000,
    image: '/assets/menu/spaghetti_green.png',
    description: 'Spaghetti dengan saus creamy green pesto spesial, jagung manis, tumis jamur shimeji harum, tomat ceri, dan brokoli segar.',
  },
  {
    id: 'spaghetti-carbonara',
    name: 'Spaghetti Carbonara',
    category: 'Noodles',
    price: 30000,
    image: '/assets/menu/spaghetti_carbonara.png',
    description: 'Spaghetti saus krim carbonara gurih lembut bertabur lada hitam segar, keju nabati, dan tumisan jamur pilihan.',
  },
  {
    id: 'pasta-macaroni',
    name: 'Pasta Macaroni',
    category: 'Noodles',
    price: 20000,
    image: '/assets/menu/pasta_macaroni.png',
    description: 'Macaroni lembut dengan saus keju creamy dipadu topping jamur krispi gurih renyah dan brokoli segar.',
  },

  // ==========================================
  // SOUP
  // ==========================================
  {
    id: 'chinese-herb-soup',
    name: 'Chinese Herb Soup',
    category: 'Soup',
    price: 50000,
    image: '/assets/menu/chinese_herb_soup.png',
    description: 'Sup herbal tradisional Tiongkok dalam pot tembikar dengan ramuan rempah berkhasiat, angco merah, goji berry, tahu lembut, dan jamur herbal beraroma khas.',
    tag: 'Favorit'
  },
  {
    id: 'pindang-soup',
    name: 'Pindang Soup',
    category: 'Soup',
    price: 25000,
    image: '/assets/menu/pindang_soup.png',
    description: 'Sup kuah pindang nusantara bercita rasa asam segar gurih dengan potongan nanas manis, tomat ceri, kacang panjang, dan jagung muda pipil.',
  },
  {
    id: 'seaweed-soup',
    name: 'Seaweed Soup',
    category: 'Soup',
    price: 25000,
    image: '/assets/menu/seaweed_soup.png',
    description: 'Sup rumput laut bening bernutrisi tinggi dengan tahu sutra lembut, potongan tomat segar, dan buah goji berry merah penambah stamina.',
  },
  {
    id: 'dumpling-soup',
    name: 'Dumpling Soup',
    category: 'Soup',
    price: 20000,
    image: '/assets/menu/dumpling_soup.png',
    description: 'Sup kuah bening gurih berisi pangsit dumpling sayuran kenyal lembut, sawi pakcoy hijau segar, dan taburan bawang goreng harum.',
  },
  {
    id: 'tomyum-soup',
    name: 'Tomyum Soup',
    category: 'Soup',
    price: 25000,
    image: '/assets/menu/tomyum_soup.png',
    description: 'Sup tomyum khas dengan kaldu asam pedas beraroma serai dan daun jeruk, tahu dadu, jamur shimeji, jagung muda, dan wortel ukir.',
  },

  // ==========================================
  // RICE (Nasi)
  // ==========================================
  {
    id: 'nasi-goreng-spesial',
    name: 'Nasi Goreng Spesial',
    category: 'Rice',
    price: 30000,
    image: '/src/assets/images/nasi_goreng_spesial_1794461547468.jpg',
    description: 'Nasi goreng harum rempah istimewa dengan telur mata sapi, kerupuk renyah, mentimun segar, sambal ulek gurih khas Fortunate Coffee.',
    tag: 'Favorit'
  },
  {
    id: 'nasi-bakar-jamur',
    name: 'Nasi Bakar Jamur',
    category: 'Rice',
    price: 28000,
    image: '/src/assets/images/nasi_bakar_jamur_1794461548081.jpg',
    description: 'Nasi gurih dibungkus daun pisang yang dibakar harum, berisikan jamur bumbu rempah manis gurih dan daun kemangi wangi.',
  },
  {
    id: 'nasi-goreng-tom',
    name: 'Nasi Goreng Tom Yum',
    category: 'Rice',
    price: 28000,
    image: '/assets/menu/tom_mee_soa.png',
    description: 'Nasi goreng dengan sensasi cita rasa tom yum asam segar pedas lembut, disajikan dengan potongan sayuran dan tahu gurih.',
  },
  {
    id: 'nasi-tim-jamur-jahe',
    name: 'Nasi Tim Jamur Jahe',
    category: 'Rice',
    price: 26000,
    image: '/src/assets/images/nasi_tim_jamur_jahe_1794461563889.jpg',
    description: 'Nasi tim lembut hangat disiram tumisan jamur bumbu jahe wangi dan daun bawang dengan kuah kaldu sayuran hangat.',
  },

  // ==========================================
  // FOOD (Hidangan Makanan Utama & Pendamping)
  // ==========================================
  {
    id: 'tahu-jamur-crispy',
    name: 'Tahu Jamur Crispy',
    category: 'Food',
    price: 22000,
    image: '/assets/menu/pasta_macaroni.png',
    description: 'Potongan tahu sutra dan jamur enoki berlapis tepung bumbu renyah keemasan, disajikan dengan saus cocolan asam manis pedas.',
    tag: 'Favorit'
  },
  {
    id: 'tempe-mendoan-special',
    name: 'Tempe Mendoan Special',
    category: 'Food',
    price: 18000,
    image: '/src/assets/images/nasi_bakar_jamur_1794461548081.jpg',
    description: 'Tempe berbalut adonan daun bawang gurih lembut khas Loving Nature, disajikan hangat dengan sambal kecap rawit pedas manis.',
  },
  {
    id: 'salad-sayur-wijen',
    name: 'Salad Sayur Saus Wijen',
    category: 'Food',
    price: 25000,
    image: '/assets/menu/green_noodle.png',
    description: 'Campuran selada segar, tomat ceri manis, edamame, jagung manis, dan timun jepang dengan dressing saus wijen sangrai khas Jepang.',
  },
  {
    id: 'french-fries-herbs',
    name: 'French Fries Herbs',
    category: 'Food',
    price: 20000,
    image: '/assets/menu/pasta_macaroni.png',
    description: 'Kentang goreng renyah bertabur rempah rosemary dan garam laut alami, gurih dan cocok sebagai teman santai.',
  },

  // ==========================================
  // COFFEE (Kopi)
  // ==========================================
  {
    id: 'kopi-susu-fortunate',
    name: 'Kopi Susu Fortunate',
    category: 'Coffee',
    price: 22000,
    image: '/src/assets/images/kopi_susu_fortunate_1794461563402.jpg',
    description: 'Paduan espresso arabika pilihan dengan susu nabati oat lembut dan sentuhan manis alami gula aren organik.',
    tag: 'Favorit'
  },
  {
    id: 'americano-klasik',
    name: 'Americano Klasik',
    category: 'Coffee',
    price: 18000,
    image: '/src/assets/images/kopi_susu_fortunate_1794461563402.jpg',
    description: 'Ekstraksi espresso murni beraroma nutty dan cokelat lembut, disajikan hangat atau dingin menyegarkan.',
  },
  {
    id: 'cappuccino-oat',
    name: 'Cappuccino Oat',
    category: 'Coffee',
    price: 24000,
    image: '/src/assets/images/kopi_susu_fortunate_1794461563402.jpg',
    description: 'Espresso kaya rasa dengan busa susu oat tebal lembut dan taburan bubuk kayu manis wangi di atasnya.',
  },
  {
    id: 'caramel-macchiato',
    name: 'Caramel Macchiato',
    category: 'Coffee',
    price: 26000,
    image: '/src/assets/images/kopi_susu_fortunate_1794461563402.jpg',
    description: 'Lapisan susu nabati lembut, espresso kental aromatik, dan lelehan saus karamel lezat yang memanjakan lidah.',
  },

  // ==========================================
  // SOY MILK (Susu Kedelai Nabati)
  // ==========================================
  {
    id: 'fresh-soy-milk-original',
    name: 'Fresh Soy Milk Original',
    category: 'Soy Milk',
    price: 15000,
    image: '/src/assets/images/kopi_susu_fortunate_1794461563402.jpg',
    description: 'Susu kedelai murni non-GMO segar buatan sendiri tanpa pengawet, kaya protein dan beraroma kedelai alami.',
    tag: 'Favorit'
  },
  {
    id: 'soy-milk-pandan',
    name: 'Soy Milk Pandan',
    category: 'Soy Milk',
    price: 18000,
    image: '/assets/menu/green_noodle.png',
    description: 'Susu kedelai segar dipadukan dengan ekstrak sari daun pandan wangi alami dan sentuhan gula tebu tebu murni.',
  },
  {
    id: 'soy-milk-black-sesame',
    name: 'Soy Milk Black Sesame',
    category: 'Soy Milk',
    price: 20000,
    image: '/src/assets/images/kopi_susu_fortunate_1794461563402.jpg',
    description: 'Kombinasi sehat susu kedelai segar dengan pasta wijen hitam sangrai yang gurih, wangi, dan menyehatkan.',
  },
  {
    id: 'soy-milk-brown-sugar',
    name: 'Soy Milk Brown Sugar',
    category: 'Soy Milk',
    price: 20000,
    image: '/src/assets/images/kopi_susu_fortunate_1794461563402.jpg',
    description: 'Susu kedelai dingin segar dengan saus gula aren cair legit, manis alami yang pas dan menyegarkan dahaga.',
  },

  // ==========================================
  // ICE CREAM
  // ==========================================
  {
    id: 'vegan-vanilla-ice-cream',
    name: 'Vanilla Bean Ice Cream',
    category: 'Ice Cream',
    price: 22000,
    image: '/assets/menu/dumpling_soup.png',
    description: 'Es krim nabati lembut berbasis santan kelapa dan biji vanila Madagaskar asli, manis lembut tanpa produk susu.',
    tag: 'Favorit'
  },
  {
    id: 'matcha-ice-cream',
    name: 'Matcha Green Tea Ice Cream',
    category: 'Ice Cream',
    price: 25000,
    image: '/assets/menu/green_noodle.png',
    description: 'Es krim matcha murni kualitas premium asal Jepang dengan rasa teh hijau pekat berpadu rasa manis lembut creamy.',
  },
  {
    id: 'dark-chocolate-gelato',
    name: 'Dark Chocolate Gelato',
    category: 'Ice Cream',
    price: 25000,
    image: '/assets/menu/spaghetti_carbonara.png',
    description: 'Gelato cokelat hitam pekat kaya antioksidan dengan sensasi bittersweet intens yang lumer di lidah.',
  },
  {
    id: 'coconut-strawberry-swirl',
    name: 'Coconut Berry Swirl',
    category: 'Ice Cream',
    price: 25000,
    image: '/assets/menu/spaghetti_tomato.png',
    description: 'Es krim kelapa creamy dengan pusaran selai buah stroberi segar asam manis alami yang menyegarkan.',
  },

  // ==========================================
  // DRINK (Minuman)
  // ==========================================
  {
    id: 'es-teh-lemongrass',
    name: 'Es Teh Lemongrass',
    category: 'Drink',
    price: 15000,
    image: '/src/assets/images/kopi_susu_fortunate_1794461563402.jpg',
    description: 'Seduhan teh melati wangi dengan batang serai segar geprek dan perasan jeruk nipis alami yang menyegarkan dahaga.',
    tag: 'Favorit'
  },
  {
    id: 'jus-hijau-segar',
    name: 'Jus Hijau Segar',
    category: 'Drink',
    price: 25000,
    image: '/assets/menu/green_noodle.png',
    description: 'Jus cold-pressed dari kombinasi apel hijau renyah, seledri stick segar, nanas madu, dan perasan lemon tanpa gula.',
  },
  {
    id: 'lemonade-mint-cooler',
    name: 'Lemonade Mint Cooler',
    category: 'Drink',
    price: 20000,
    image: '/assets/menu/tom_mee_soa.png',
    description: 'Perasan sari buah lemon segar dengan daun mint remas dan air soda dingin, manis asam menyegarkan seketika.',
  },
  {
    id: 'earl-grey-tea',
    name: 'Earl Grey Tea Hangat/Dingin',
    category: 'Drink',
    price: 18000,
    image: '/src/assets/images/kopi_susu_fortunate_1794461563402.jpg',
    description: 'Teh hitam klasik beraroma minyak bergamot elegan khas Inggris, disajikan dengan irisan lemon segar.',
  },

  // ==========================================
  // BREAD (Roti & Toast)
  // ==========================================
  {
    id: 'roti-sourdough-panggang',
    name: 'Roti Sourdough Panggang',
    category: 'Bread',
    price: 22000,
    image: '/assets/menu/lucky_noodle.png',
    description: 'Roti sourdough fermentasi alami dipanggang renyah di luar dan lembut di dalam, disajikan dengan selai buah dan vegan butter.',
    tag: 'Favorit'
  },
  {
    id: 'garlic-butter-toast',
    name: 'Garlic Butter Toast Vegan',
    category: 'Bread',
    price: 20000,
    image: '/assets/menu/spaghetti_tomato.png',
    description: 'Roti tebal panggang renyah berbalur mentega nabati bawang putih harum dan taburan daun peterseli kering gurih.',
  },
  {
    id: 'cinnamon-raisin-toast',
    name: 'Cinnamon Raisin Toast',
    category: 'Bread',
    price: 22000,
    image: '/assets/menu/pasta_macaroni.png',
    description: 'Roti kismis manis lembut dengan aroma kayu manis semerbak, dipanggang hangat dengan taburan gula aren halus.',
  },
  {
    id: 'roti-bakar-cokelat-pisang',
    name: 'Roti Bakar Cokelat Pisang',
    category: 'Bread',
    price: 25000,
    image: '/assets/menu/spaghetti_carbonara.png',
    description: 'Roti bakar isi irisan pisang manis legit dan lelehan cokelat nabati pekat, camilan manis favorit keluarga.',
  },

  // ==========================================
  // BURGER
  // ==========================================
  {
    id: 'fortunate-mushroom-burger',
    name: 'Fortunate Mushroom Burger',
    category: 'Burger',
    price: 32000,
    image: '/assets/menu/lucky_noodle.png',
    description: 'Burger roti wijen empuk dengan patty jamur portobello gurih juicy, selada segar, tomat, dan saus vegan mayo spesial.',
    tag: 'Favorit'
  },
  {
    id: 'crispy-tofu-burger',
    name: 'Crispy Tofu Patty Burger',
    category: 'Burger',
    price: 28000,
    image: '/assets/menu/coconut_spicy_noodle.png',
    description: 'Patty tahu marinasi rempah berbalut tepung renyah keemasan dengan saus barbekyu manis gurih dan irisan mentimun.',
  },
  {
    id: 'green-veggie-burger',
    name: 'Green Veggie Burger',
    category: 'Burger',
    price: 30000,
    image: '/assets/menu/green_noodle.png',
    description: 'Burger sayuran hijau sehat dari perpaduan edamame, bayam, wortel, dan saus alpukat creamy yang gurih alami.',
  },
  {
    id: 'black-pepper-burger',
    name: 'Black Pepper Patty Burger',
    category: 'Burger',
    price: 32000,
    image: '/assets/menu/miso_ramen.png',
    description: 'Patty nabati panggang disiram saus lada hitam wangi yang hangat dan gurih, disajikan dengan selada dan irisan bawang bombai.',
  },

  // ==========================================
  // PIZZA
  // ==========================================
  {
    id: 'margherita-pizza-vegan',
    name: 'Pizza Margherita Vegan',
    category: 'Pizza',
    price: 45000,
    image: '/assets/menu/spaghetti_tomato.png',
    description: 'Adonan pizza tipis renyah panggang kayu bakar dengan saus tomat segar Italia, keju mozarella nabati leleh, dan daun basil wangi.',
    tag: 'Favorit'
  },
  {
    id: 'mushroom-truffle-pizza',
    name: 'Mushroom Truffle Pizza',
    category: 'Pizza',
    price: 50000,
    image: '/assets/menu/spaghetti_carbonara.png',
    description: 'Pizza istimewa dengan aneka tumisan jamur shiitake dan kancing, sentuhan minyak truffle wangi aromatik, dan keju nabati.',
  },
  {
    id: 'sweet-corn-pepper-pizza',
    name: 'Sweet Corn & Pepper Pizza',
    category: 'Pizza',
    price: 42000,
    image: '/assets/menu/pasta_macaroni.png',
    description: 'Pizza renyah dengan taburan jagung manis pipil, irisan paprika merah & hijau segar, saus tomat rempah, dan lelehan keju.',
  },
  {
    id: 'four-seasons-veggie-pizza',
    name: 'Four Seasons Veggie Pizza',
    category: 'Pizza',
    price: 48000,
    image: '/assets/menu/spaghetti_green.png',
    description: 'Pizza 4 kuadran dengan topping jamur, brokoli segar, tomat ceri, dan zaitun hitam berpadu saus pesto dan keju nabati.',
  }
];

export interface CategoryItem {
  id: CategoryType;
  label: string;
  emoji?: string;
}

export const CATEGORIES: CategoryItem[] = [
  { id: 'Noodles', label: 'Noodles' },
  { id: 'Soup', label: 'Soup', emoji: '🍲' },
  { id: 'Rice', label: 'Rice', emoji: '🍛' },
  { id: 'Food', label: 'Food', emoji: '🥗' },
  { id: 'Coffee', label: 'Coffee', emoji: '☕' },
  { id: 'Soy Milk', label: 'Soy Milk', emoji: '🥛' },
  { id: 'Ice Cream', label: 'Ice Cream', emoji: '🍨' },
  { id: 'Drink', label: 'Drink', emoji: '🍹' },
  { id: 'Bread', label: 'Bread', emoji: '🍞' },
  { id: 'Burger', label: 'Burger', emoji: '🍔' },
  { id: 'Pizza', label: 'Pizza', emoji: '🍕' },
];

export const formatRupiah = (val: number): string => {
  return `Rp${val.toLocaleString('id-ID')}`;
};
