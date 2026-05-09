export type KitCategory = 'Parejas' | 'Sensorial' | 'Autocuidado' | 'Creativo' | 'Tecnología';

export interface Kit {
  id: string;
  name: string;
  description: string;
  price: number;
  category: KitCategory;
  image: string;
}

export type CustomizationLevel = 'Básico' | 'Standard' | 'Premium';

export interface CustomizationOptions {
  level: CustomizationLevel;
  color: string;
  message: string;
}

export type OrderStatus = 'Personalizando' | 'Empacado' | 'En camino' | 'Entregado';

export interface Order {
  id: string;
  kitId: string;
  status: OrderStatus;
  customization: CustomizationOptions;
}
