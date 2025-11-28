import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { Badge } from '@/components/ui/badge';

interface HeaderProps {
  cartItemsCount: number;
  onCartClick: () => void;
}

export default function Header({ cartItemsCount, onCartClick }: HeaderProps) {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная' },
    { id: 'catalog', label: 'Каталог' },
    { id: 'delivery', label: 'Доставка' },
    { id: 'contacts', label: 'Контакты' }
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <h1 className="text-2xl font-bold tracking-tight">DigiLux</h1>
            
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-accent ${
                    activeSection === item.id ? 'text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="Search" size={20} />
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="relative"
              onClick={onCartClick}
            >
              <Icon name="ShoppingCart" size={20} />
              {cartItemsCount > 0 && (
                <Badge 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-accent text-accent-foreground"
                >
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
            
            <Button variant="ghost" size="icon">
              <Icon name="User" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
