import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from '@/components/ui/sheet';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';
import type { Product } from './ProductCard';

interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
}

export default function Cart({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: CartProps) {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-2xl">Корзина</SheetTitle>
        </SheetHeader>
        
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-[60vh] text-center">
            <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mb-4">
              <Icon name="ShoppingCart" size={40} className="text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Корзина пуста</h3>
            <p className="text-muted-foreground mb-6">Добавьте товары из каталога</p>
            <Button onClick={onClose}>
              Перейти к покупкам
            </Button>
          </div>
        ) : (
          <>
            <ScrollArea className="flex-1 -mx-6 px-6 my-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 py-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold mb-1 line-clamp-1">{item.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{item.category}</p>
                      
                      <div className="flex items-center gap-2">
                        <div className="flex items-center border rounded-lg">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          >
                            <Icon name="Minus" size={14} />
                          </Button>
                          
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          >
                            <Icon name="Plus" size={14} />
                          </Button>
                        </div>
                        
                        <span className="font-bold ml-auto">
                          {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                        </span>
                      </div>
                    </div>
                    
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8 text-destructive hover:text-destructive"
                      onClick={() => onRemoveItem(item.id)}
                    >
                      <Icon name="Trash2" size={16} />
                    </Button>
                  </div>
                ))}
              </div>
            </ScrollArea>
            
            <Separator className="my-4" />
            
            <SheetFooter className="flex-col gap-4">
              <div className="flex items-center justify-between text-lg">
                <span className="font-semibold">Итого:</span>
                <span className="text-2xl font-bold">
                  {total.toLocaleString('ru-RU')} ₽
                </span>
              </div>
              
              <Button size="lg" className="w-full gap-2">
                Оформить заказ
                <Icon name="ArrowRight" size={18} />
              </Button>
              
              <Button size="lg" variant="outline" className="w-full" onClick={onClose}>
                Продолжить покупки
              </Button>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
