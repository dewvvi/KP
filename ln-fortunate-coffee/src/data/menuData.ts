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
    image: '/assets/menu/lucky_noodle.jpg',
    description: 'Mie lezat disajikan dengan pangsit lembut, jamur cincang gurih harum, sayur pakcoy segar, potongan jeruk sonkit, dan kuah kaldu hangat khas Fortunate Coffee.',
    tag: 'Favorit'
  },
  {
    id: 'green-noodle',
    name: 'Green Noodle',
    category: 'Noodles',
    price: 30000,
    image: '/assets/menu/green_noodle.jpg',
    description: 'Mie hijau bernutrisi disajikan di atas nampan kayu dengan irisan tomat segar, jamur kecap spesial, pangsit renyah, sayur pakcoy, dan kuah kaldu segar.',
  },
  {
    id: 'tom-mee-soa',
    name: 'Tom Mee Soa',
    category: 'Noodles',
    price: 25000,
    image: '/assets/menu/tom_mee_soa.jpg',
    description: 'Mee soa lembut dalam kuah hangat gurih segar dengan tahu, rumput laut nori, jamur, sayur pakcoy, dan perasan jeruk sonkit.',
  },
  {
    id: 'coconut-spicy-noodle',
    name: 'Coconut Spicy Noodle',
    category: 'Noodles',
    price: 25000,
    image: '/assets/menu/coconut_spicy_noodle.jpg',
    description: 'Mie kuah kari santan pedas gurih berempah dengan kembang kol, jamur kuping, wortel manis, jagung pipil, dan sayuran hijau segar.',
  },
  {
    id: 'miso-ramen',
    name: 'Miso Ramen',
    category: 'Noodles',
    price: 25000,
    image: '/assets/menu/miso_ramen.jpg',
    description: 'Ramen khas dengan kuah pasta miso kedelai fermentasi gurih, jagung manis, jamur shiitake, rumput laut wakame, tauge, tahu goreng, dan pakcoy.',
  },
  {
    id: 'spaghetti-tomato-sauce',
    name: 'Spaghetti Tomato Sauce',
    category: 'Noodles',
    price: 25000,
    image: '/assets/menu/spaghetti_tomato.jpg',
    description: 'Pasta spaghetti al dente berbalut saus tomat segar racikan herbal khas Italia dengan taburan paprika merah-hijau dan brokoli kukus.',
  },
  {
    id: 'spaghetti-green-sauce',
    name: 'Spaghetti Green Sauce',
    category: 'Noodles',
    price: 25000,
    image: '/assets/menu/spaghetti_green.jpg',
    description: 'Spaghetti dengan saus creamy green pesto spesial, jagung manis, tumis jamur shimeji harum, tomat ceri, dan brokoli segar.',
  },
  {
    id: 'spaghetti-carbonara',
    name: 'Spaghetti Carbonara',
    category: 'Noodles',
    price: 30000,
    image: '/assets/menu/spaghetti_carbonara.jpg',
    description: 'Spaghetti saus krim carbonara gurih lembut bertabur lada hitam segar, keju nabati, dan tumisan jamur pilihan.',
  },
  {
    id: 'pasta-macaroni',
    name: 'Pasta Macaroni',
    category: 'Noodles',
    price: 20000,
    image: '/assets/menu/pasta_macaroni.jpg',
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
    image: '/assets/menu/chinese_herb_soup.jpg',
    description: 'Sup herbal tradisional Tiongkok dalam pot tembikar dengan ramuan rempah berkhasiat, angco merah, goji berry, tahu lembut, dan jamur herbal beraroma khas.',
    tag: 'Favorit'
  },
  {
    id: 'pindang-soup',
    name: 'Pindang Soup',
    category: 'Soup',
    price: 25000,
    image: '/assets/menu/pindang_soup.jpg',
    description: 'Sup kuah pindang nusantara bercita rasa asam segar gurih dengan potongan nanas manis, tomat ceri, kacang panjang, dan jagung muda pipil.',
  },
  {
    id: 'seaweed-soup',
    name: 'Seaweed Soup',
    category: 'Soup',
    price: 25000,
    image: '/assets/menu/seaweed_soup.jpg',
    description: 'Sup rumput laut bening bernutrisi tinggi dengan tahu sutra lembut, potongan tomat segar, dan buah goji berry merah penambah stamina.',
  },
  {
    id: 'dumpling-soup',
    name: 'Dumpling Soup',
    category: 'Soup',
    price: 20000,
    image: '/assets/menu/dumpling_soup.jpg',
    description: 'Sup kuah bening gurih berisi pangsit dumpling sayuran kenyal lembut, sawi pakcoy hijau segar, dan taburan bawang goreng harum.',
  },
  {
    id: 'tomyum-soup',
    name: 'Tomyum Soup',
    category: 'Soup',
    price: 25000,
    image: '/assets/menu/tomyum_soup.jpg',
    description: 'Sup tomyum khas dengan kaldu asam pedas beraroma serai dan daun jeruk, tahu dadu, jamur shimeji, jagung muda, dan wortel ukir.',
  },

  // ==========================================
  // RICE (Nasi)
  // ==========================================
  {
    id: 'spicy-herb-fried-rice',
    name: 'Spicy herb fried rice',
    category: 'Rice',
    price: 25000,
    image: '/assets/menu/Spicy_herb_fried_rice.jpg',
    description: 'Nasi goreng berbumbu rempah dengan cita rasa pedas gurih, disajikan bersama irisan mentimun dan sayuran segar sebagai pelengkap.',
  },
  {
    id: 'hainan-rice',
    name: 'Hainan rice',
    category: 'Rice',
    price: 30000,
    image: '/assets/menu/hainan_rice.jpg',
    description: 'Nasi Hainan beraroma gurih yang disajikan bersama potongan ayam berbumbu, sayuran hijau, saus pelengkap, dan semangkuk kuah hangat.',
  },
  {
    id: 'japanese-curry-rice',
    name: 'Japanese curry rice',
    category: 'Rice',
    price: 25000,
    image: '/assets/menu/japanese_curry_rice.jpg',
    description: 'Nasi hangat dengan irisan ayam katsu berlapis tepung renyah, disiram saus kari Jepang yang gurih dengan tambahan sayuran sebagai pelengkap.',
  },
  {
    id: 'nori-rice',
    name: 'Nori rice',
    category: 'Rice',
    price: 20000,
    image: '/assets/menu/nori_rice.jpg',
    description: 'Sajian nasi dengan taburan rumput laut nori dan pelengkap kerupuk renyah, mentimun segar, selada, serta sambal yang menambah cita rasa gurih.',
  },

  // ==========================================
  // FOOD (Hidangan Makanan Utama & Pendamping)
  // ==========================================
  {
    id: 'fruit-pie',
    name: 'Fresh Fruit Pie',
    category: 'Food',
    price: 20000,
    image: '/assets/menu/fruit_pie.jpg',
    description: 'Pie renyah dengan isian krim lembut yang dihiasi potongan buah segar seperti kiwi, stroberi, anggur, dan buah naga.',
  },
  {
    id: 'fruit-salad',
    name: 'Fresh Fruit Salad',
    category: 'Food',
    price: 50000,
    image: '/assets/menu/fruit_salad.jpg',
    description: 'Salad buah segar berisi aneka potongan buah pilihan dengan saus creamy yang lembut dan taburan biji-bijian.',
  },
  {
    id: 'vegetable-salad',
    name: 'Healthy Vegetable Salad',
    category: 'Food',
    price: 30000,
    image: '/assets/menu/vegetable_salad.jpg',
    description: 'Salad sayuran segar dengan selada, jagung manis, tomat ceri, kacang-kacangan, dan saus creamy yang lezat.',
  },
  {
    id: 'fortunate-fruit-raw',
    name: 'Fortunate Fruit Raw',
    category: 'Food',
    price: 30000,
    image: '/assets/menu/fortunate_fruit_raw.jpg',
    description: 'Hidangan aneka buah segar seperti pepaya, melon, nanas, stroberi, anggur, dan mentimun yang disajikan bersama saus cocolan khas.',
  },

  // ==========================================
  // COFFEE (Kopi)
  // ==========================================
    {
    id: 'cappuccino',
    name: 'Cappuccino',
    category: 'Coffee',
    price: 30000,
    image: '/assets/menu/cappuccino.jpg',
    description: 'Perpaduan espresso dan susu panas dengan lapisan foam lembut yang menghasilkan rasa kopi creamy dan seimbang.',
  },
  {
    id: 'espresso-single-blend',
    name: 'Espresso Single Blend',
    category: 'Coffee',
    price: 22000,
    image: '/assets/menu/espresso_single_blend.jpg',
    description: 'Seduhan espresso murni dengan aroma kopi khas, rasa kuat, dan karakter kopi yang pekat.',
  },
  {
    id: 'americano-hot',
    name: 'Americano Hot',
    category: 'Coffee',
    price: 25000,
    image: '/assets/menu/americano_hot.jpg',
    description: 'Perpaduan espresso dan air panas dengan cita rasa kopi autentik, aroma khas, dan rasa yang ringan.',
  },
  {
    id: 'coffee-beer',
    name: 'Coffee Beer',
    category: 'Coffee',
    price: 35000,
    image: '/assets/menu/coffee_beer.jpg',
    description: 'Minuman kopi dingin dengan lapisan foam lembut dan cita rasa kopi unik yang menyegarkan.',
  },

  // ==========================================
  // SOY MILK (Susu Kedelai Nabati)
  // ==========================================
  {
    id: 'choco-latte',
    name: 'Choco Latte',
    category: 'Soy Milk',
    price: 27000,
    image: '/assets/menu/choco_latte.jpg',
    description: 'Perpaduan cokelat dan susu kedelai dengan rasa manis, tekstur creamy, dan sensasi menyegarkan.',
  },
  {
    id: 'taro-latte',
    name: 'Taro Latte',
    category: 'Soy Milk',
    price: 27000,
    image: '/assets/menu/taro_latte.jpg',
    description: 'Minuman susu kedelai dengan perpaduan rasa taro yang lembut, manis, dan creamy.',
  },
  {
    id: 'matcha-latte',
    name: 'Matcha Latte',
    category: 'Soy Milk',
    price: 27000,
    image: '/assets/menu/matcha_latte.jpg',
    description: 'Perpaduan matcha dan susu kedelai dengan aroma teh hijau khas serta rasa lembut dan creamy.',
  },
  {
    id: 'fortunate-coffee',
    name: 'Fortunate Coffee',
    category: 'Soy Milk',
    price: 35000,
    image: '/assets/menu/fortunate_coffee.jpg',
    description: 'Perpaduan kopi dan susu kedelai dengan cita rasa kopi khas, tekstur lembut, dan sensasi creamy.',
  },

  // ==========================================
  // ICE CREAM
  // ==========================================
    {
    id: 'ice-cream-coffee',
    name: 'Ice Cream Coffee',
    category: 'Ice Cream',
    price: 15000,
    image: '/assets/menu/ice_cream_coffee.jpg',
    description: 'Es krim rasa kopi dengan perpaduan rasa manis dan aroma kopi khas, dilengkapi taburan almond yang renyah.',
  },
  {
    id: 'ice-cream-strawberry',
    name: 'Ice Cream Strawberry',
    category: 'Ice Cream',
    price: 15000,
    image: '/assets/menu/ice_cream_strawberry.jpg',
    description: 'Es krim stroberi dengan rasa manis dan sedikit asam yang menyegarkan, dilengkapi taburan almond.',
  },
  {
    id: 'ice-cream-mango',
    name: 'Ice Cream Mango',
    category: 'Ice Cream',
    price: 15000,
    image: '/assets/menu/ice_cream_mango.jpg',
    description: 'Es krim mangga dengan cita rasa buah tropis yang manis dan segar, disajikan dengan taburan almond.',
  },
  {
    id: 'ice-cream-matcha',
    name: 'Ice Cream Matcha',
    category: 'Ice Cream',
    price: 15000,
    image: '/assets/menu/ice_cream_matcha.jpg',
    description: 'Es krim matcha dengan aroma teh hijau khas, perpaduan rasa manis dan sedikit pahit yang lembut.',
  },

  // ==========================================
  // DRINK (Minuman)
  // ==========================================
  {
    id: 'apple-beet',
    name: 'Apple Beet Juice',
    category: 'Drink',
    price: 20000,
    image: '/assets/menu/apple_beet.jpg',
    description: 'Jus segar perpaduan buah apel dan buah bit dengan rasa manis alami serta warna merah yang menarik.',
  },
  {
    id: 'carrot-tomato',
    name: 'Carrot Tomato Juice',
    category: 'Drink',
    price: 20000,
    image: '/assets/menu/carrot_tomato.jpg',
    description: 'Jus kombinasi wortel dan tomat dengan cita rasa segar, sedikit manis, serta perpaduan rasa buah dan sayuran.',
  },
  {
    id: 'avocado-papaya',
    name: 'Avocado Papaya Juice',
    category: 'Drink',
    price: 20000,
    image: '/assets/menu/avocado_papaya.jpg',
    description: 'Minuman sehat perpaduan alpukat dan pepaya dengan tekstur lembut, rasa manis alami, dan sensasi creamy.',
  },
  {
    id: 'apple-lemon',
    name: 'Apple Lemon Juice',
    category: 'Drink',
    price: 20000,
    image: '/assets/menu/apple_lemon.jpg',
    description: 'Jus perpaduan buah apel dan lemon dengan rasa manis dan asam yang seimbang serta sensasi menyegarkan.',
  },

  // ==========================================
  // BREAD (Roti & Toast)
  // ==========================================
  {
    id: 'sweet-potato-bread',
    name: 'Sweet Potato Bread',
    category: 'Bread',
    price: 12000,
    image: '/assets/menu/sweet_potato_bread.jpg',
    description: 'Roti lembut berisi ubi jalar manis dengan tekstur empuk dan aroma harum, dipanggang hingga berwarna keemasan dengan cita rasa manis yang nikmat.',
    tag: 'Favorit'
  },
  {
    id: 'coconut-bread',
    name: 'Coconut Bread',
    category: 'Bread',
    price: 12000,
    image: '/assets/menu/coconut_bread.jpg',
    description: 'Roti lembut dengan taburan kelapa yang memberikan aroma khas dan cita rasa gurih manis dalam setiap gigitan.',
  },
  {
    id: 'chocolate-bread',
    name: 'Chocolate Bread',
    category: 'Bread',
    price: 12000,
    image: '/assets/menu/chocolate_bread.jpg',
    description: 'Roti lembut dengan isian dan taburan cokelat yang kaya rasa, cocok untuk pencinta camilan manis.',
  },
  {
    id: 'strawberry-bread',
    name: 'Strawberry Bread',
    category: 'Bread',
    price: 12000,
    image: '/assets/menu/strawberry_bread.jpg',
    description: 'Roti lembut dengan isian stroberi yang manis dan sedikit asam, memberikan sensasi rasa buah yang menyegarkan.',
  },

  // ==========================================
  // BURGER
  // ==========================================
    {
    id: 'fortunate-beet-burger',
    name: 'Fortunate Beet Burger',
    category: 'Burger',
    price: 25000,
    image: '/assets/menu/fortunate_beet_burger.jpg',
    description: 'Burger dengan roti lembut berwarna kemerahan, dilengkapi patty gurih, sayuran segar, dan saus spesial, disajikan bersama kentang goreng.',
  },
  {
    id: 'fortunate-pumkin-burger',
    name: 'Fortunate Pumpkin Burger',
    category: 'Burger',
    price: 25000,
    image: '/assets/menu/fortunate_pumpkin_burger.jpg',
    description: 'Burger dengan roti berbahan labu yang lembut, dilengkapi isian sayuran dan patty gurih serta saus pelengkap, disajikan bersama kentang goreng.',
  },
  {
    id: 'fortunate-original-burger',
    name: 'Fortunate Original Burger',
    category: 'Burger',
    price: 25000,
    image: '/assets/menu/fortunate_original_burger.jpg',
    description: 'Burger klasik dengan roti lembut, patty gurih, dan sayuran segar serta saus pilihan, disajikan bersama kentang goreng.',
  },

  // ==========================================
  // PIZZA
  // ==========================================
  {
    id: 'fortunate-pizza',
    name: 'Fortunate Pizza',
    category: 'Pizza',
    price: 40000,
    image: '/assets/menu/fortunate_pizza.jpg',
    description: 'Pizza dengan perpaduan saus gurih, jagung, sayuran, dan aneka topping pilihan di atas adonan pizza yang dipanggang hingga matang.',
  },
  {
    id: 'fortunate-fruit-pizza',
    name: 'Fortunate Fruit Pizza',
    category: 'Pizza',
    price: 50000,
    image: '/assets/menu/fortunate_fruit_pizza.jpg',
    description: 'Pizza dengan kombinasi aneka potongan buah dan topping pilihan di atas adonan lembut, menghadirkan perpaduan rasa manis dan segar.',
  },
  {
    id: 'fortunate-cheese-pizza',
    name: 'Fortunate Cheese Pizza',
    category: 'Pizza',
    price: 50000,
    image: '/assets/menu/fortunate_cheese_pizza.jpg',
    description: 'Pizza dengan saus tomat, taburan keju melimpah, dan bumbu pilihan di atas adonan yang dipanggang hingga matang.',
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
