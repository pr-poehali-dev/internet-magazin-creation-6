import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'Zap',
    title: 'Моментальная доставка',
    description: 'Получите товар сразу после оплаты на вашу электронную почту'
  },
  {
    icon: 'Shield',
    title: 'Безопасные платежи',
    description: 'Все транзакции защищены современными протоколами шифрования'
  },
  {
    icon: 'HeadphonesIcon',
    title: 'Поддержка 24/7',
    description: 'Наша команда всегда готова помочь с любыми вопросами'
  },
  {
    icon: 'RotateCcw',
    title: 'Гарантия возврата',
    description: '14 дней на возврат средств, если товар не подошёл'
  }
];

export default function Delivery() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Доставка и условия</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы обеспечиваем максимальное удобство при покупке цифровых товаров
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon name={feature.icon as any} size={28} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-6">Как это работает</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Выберите товар</h4>
                  <p className="text-muted-foreground">Просмотрите каталог и добавьте нужные продукты в корзину</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Оформите заказ</h4>
                  <p className="text-muted-foreground">Заполните данные и выберите удобный способ оплаты</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Получите товар</h4>
                  <p className="text-muted-foreground">Сразу после оплаты получите ссылку для скачивания на email</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
