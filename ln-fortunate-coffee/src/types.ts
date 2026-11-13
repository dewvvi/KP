export type CategoryType =
  | 'Noodles'
  | 'Soup'
  | 'Rice'
  | 'Food'
  | 'Coffee'
  | 'Soy Milk'
  | 'Ice Cream'
  | 'Drink'
  | 'Bread'
  | 'Burger'
  | 'Pizza';

export interface MenuItem {
  id: string;
  name: string;
  shortName?: string;
  category: CategoryType;
  price: number;
  image: string;
  description: string;
  tag?: 'Favorit' | 'Baru' | 'Rekomendasi';
  calories?: string;
}

export interface CartItem {
  item: MenuItem;
  quantity: number;
  note?: string;
}

export interface OrderReceipt {
  orderNumber: string;
  tableNumber: string;
  createdAt: string;
  items: CartItem[];
  total: number;
  status: 'Menunggu Pembayaran' | 'Sedang Diproses' | 'Selesai';
}
