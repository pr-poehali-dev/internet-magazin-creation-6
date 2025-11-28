import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Contacts() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Мы всегда рады ответить на ваши вопросы и помочь с выбором
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <Card className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground mb-2">
                    Напишите нам на почту
                  </p>
                  <a href="mailto:support@digilux.ru" className="text-accent hover:underline font-medium">
                    support@digilux.ru
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground mb-2">
                    Звоните с 9:00 до 21:00 МСК
                  </p>
                  <a href="tel:+78001234567" className="text-accent hover:underline font-medium">
                    +7 (800) 123-45-67
                  </a>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border/50">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Icon name="MessageCircle" size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Мессенджеры</h3>
                  <p className="text-muted-foreground mb-3">
                    Пишите нам в удобном формате
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Icon name="MessageCircle" size={16} />
                      Telegram
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Icon name="MessageCircle" size={16} />
                      WhatsApp
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-border/50">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Оставьте сообщение</h3>
              
              <form className="space-y-5">
                <div>
                  <Label htmlFor="name">Ваше имя</Label>
                  <Input 
                    id="name" 
                    placeholder="Иван Иванов" 
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="ivan@example.com" 
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="subject">Тема</Label>
                  <Input 
                    id="subject" 
                    placeholder="Вопрос о товаре" 
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Сообщение</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Опишите ваш вопрос..."
                    rows={5}
                    className="mt-2 resize-none"
                  />
                </div>

                <Button size="lg" className="w-full gap-2">
                  Отправить сообщение
                  <Icon name="Send" size={18} />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
