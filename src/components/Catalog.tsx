import { useState } from 'react';
import ProductCard, { type Product } from './ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface CatalogProps {
  onAddToCart: (product: Product) => void;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Премиум подписка на образовательную платформу',
    category: 'Образование',
    price: 4990,
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80',
    rating: 4.9,
    reviews: 342,
    featured: true
  },
  {
    id: '2',
    name: 'Профессиональный набор шаблонов дизайна',
    category: 'Дизайн',
    price: 7990,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80',
    rating: 4.8,
    reviews: 218,
    featured: true
  },
  {
    id: '3',
    name: 'Курс по развитию soft skills',
    category: 'Образование',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
    rating: 4.9,
    reviews: 456
  },
  {
    id: '4',
    name: 'Библиотека звуковых эффектов HD',
    category: 'Аудио',
    price: 3490,
    image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80',
    rating: 4.7,
    reviews: 189
  },
  {
    id: '5',
    name: 'Пакет векторных иллюстраций',
    category: 'Дизайн',
    price: 2990,
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&q=80',
    rating: 4.8,
    reviews: 267,
    featured: true
  },
  {
    id: '6',
    name: 'Годовая подписка на облачное хранилище Pro',
    category: 'Сервисы',
    price: 8990,
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
    rating: 4.9,
    reviews: 523
  }
];

const categories = ['Все', 'Образование', 'Дизайн', 'Аудио', 'Сервисы'];

export default function Catalog({ onAddToCart }: CatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState('Все');

  const filteredProducts = selectedCategory === 'Все' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Наш каталог</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Эксклюзивная коллекция цифровых продуктов премиум класса
          </p>
        </div>

        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              className={`cursor-pointer px-6 py-2 text-sm font-medium transition-all ${
                selectedCategory === category 
                  ? 'bg-primary text-primary-foreground' 
                  : 'hover:bg-accent hover:text-accent-foreground'
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id} 
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} onAddToCart={onAddToCart} />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" variant="outline" className="gap-2">
            Загрузить ещё
            <Icon name="ChevronDown" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
