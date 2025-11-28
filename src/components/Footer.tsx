import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">DigiLux</h3>
            <p className="text-primary-foreground/80 mb-4 text-sm">
              Премиальные цифровые продукты для тех, кто ценит качество и инновации
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-primary-foreground hover:text-accent">
                <Icon name="Facebook" size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-primary-foreground hover:text-accent">
                <Icon name="Twitter" size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-primary-foreground hover:text-accent">
                <Icon name="Instagram" size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-primary-foreground hover:text-accent">
                <Icon name="Linkedin" size={18} />
              </Button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Образование</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Дизайн</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Аудио</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Сервисы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Информация</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">О нас</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Доставка</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Оплата</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Возврат</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Помощь</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li><a href="#" className="hover:text-accent transition-colors">Контакты</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Поддержка</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Политика конфиденциальности</a></li>
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 my-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/70">
          <p>© 2024 DigiLux. Все права защищены</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-accent transition-colors">Условия использования</a>
            <a href="#" className="hover:text-accent transition-colors">Политика cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
