import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  reviews: number;
  featured?: boolean;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <Card className="group overflow-hidden border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-xl">
      <div className="relative overflow-hidden bg-muted/30">
        {product.featured && (
          <Badge className="absolute top-3 left-3 z-10 bg-accent text-accent-foreground">
            <Icon name="Star" size={12} className="mr-1" />
            Хит
          </Badge>
        )}
        
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <Button
          size="icon"
          variant="secondary"
          className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
        >
          <Icon name="Heart" size={18} />
        </Button>
      </div>
      
      <CardContent className="p-5">
        <div className="flex items-center justify-between mb-2">
          <Badge variant="secondary" className="text-xs font-medium">
            {product.category}
          </Badge>
          
          <div className="flex items-center gap-1 text-sm">
            <Icon name="Star" size={14} className="text-accent fill-accent" />
            <span className="font-medium">{product.rating}</span>
            <span className="text-muted-foreground">({product.reviews})</span>
          </div>
        </div>
        
        <h3 className="font-semibold text-lg mb-3 line-clamp-2">
          {product.name}
        </h3>
        
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold">
            {product.price.toLocaleString('ru-RU')} ₽
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0">
        <Button 
          className="w-full gap-2" 
          onClick={() => onAddToCart(product)}
        >
          <Icon name="ShoppingCart" size={18} />
          В корзину
        </Button>
      </CardFooter>
    </Card>
  );
}
