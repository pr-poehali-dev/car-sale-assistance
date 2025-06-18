import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";
import WhatsAppContact from "@/components/WhatsAppContact";
import AutoPortals from "@/components/AutoPortals";

const Contact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Свяжитесь с нами</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Обратитесь за бесплатной консультацией и оцените качество
            обслуживания
          </p>
        </div>

        <div className="mb-12">
          <WhatsAppContact />
        </div>

        <div className="mb-12">
          <AutoPortals />
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl text-white flex items-center">
                <Icon
                  name="MessageSquare"
                  size={24}
                  className="mr-3 text-red-400"
                />
                Бесплатная консультация
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Ваше имя
                  </label>
                  <Input
                    placeholder="Введите ваше имя"
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Телефон
                  </label>
                  <Input
                    placeholder="+7 (999) 123-45-67"
                    className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Марка и модель автомобиля
                </label>
                <Input
                  placeholder="Например: BMW X5 2018"
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Дополнительная информация
                </label>
                <Textarea
                  placeholder="Расскажите подробнее о вашем автомобиле..."
                  className="bg-white/10 border-white/30 text-white placeholder:text-gray-400 min-h-[100px]"
                />
              </div>

              <Button
                size="lg"
                className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg"
              >
                <Icon name="Send" size={20} className="mr-2" />
                Отправить заявку
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    <Icon name="MapPin" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Наше расположение
                    </h3>
                    <p className="text-gray-300">
                      Санкт-Петербург
                      <br />
                      Услуги по всей России
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    <Icon name="Phone" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Телефон
                    </h3>
                    <p className="text-gray-300">+79219099952</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-start">
                  <div className="bg-red-600 p-3 rounded-full mr-4">
                    <Icon name="Clock" size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">
                      Время работы
                    </h3>
                    <p className="text-gray-300">
                      Понедельник - Воскресенье
                      <br />
                      09:00 - 21:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Быстрый звонок</h3>
              <p className="mb-4 text-red-100">
                Получите консультацию прямо сейчас!
              </p>
              <Button
                size="lg"
                className="w-full bg-white text-red-600 hover:bg-gray-100"
              >
                <Icon name="Phone" size={20} className="mr-2" />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
