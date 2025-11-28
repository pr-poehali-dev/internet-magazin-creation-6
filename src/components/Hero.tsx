import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              Премиум цифровые товары
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Элегантные решения для цифровой жизни
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Эксклюзивная коллекция премиальных цифровых продуктов, курсов и подписок для тех, кто ценит качество
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="gap-2">
                Смотреть каталог
                <Icon name="ArrowRight" size={18} />
              </Button>
              
              <Button size="lg" variant="outline" className="gap-2">
                <Icon name="Play" size={18} />
                Узнать больше
              </Button>
            </div>
            
            <div className="flex items-center gap-8 mt-12 pt-8 border-t">
              <div>
                <div className="text-3xl font-bold">500+</div>
                <div className="text-sm text-muted-foreground">Продуктов</div>
              </div>
              <div>
                <div className="text-3xl font-bold">10К+</div>
                <div className="text-sm text-muted-foreground">Клиентов</div>
              </div>
              <div>
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-sm text-muted-foreground">Рейтинг</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-3xl"></div>
            <img
              src="https://cdn.poehali.dev/projects/fe81ca84-234f-46f9-88b3-253057c6b35f/files/450b22b8-e309-493a-af6f-3af00be8b502.jpg"
              alt="Premium Digital Products"
              className="relative rounded-3xl shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
