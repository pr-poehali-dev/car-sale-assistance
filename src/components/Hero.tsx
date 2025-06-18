import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-red-900 text-white py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-red-600 p-4 rounded-full">
              <Icon name="Car" size={48} className="text-white" />
            </div>
          </div>

          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white to-red-200 bg-clip-text text-transparent">
            🚗 Помощь в Продаже Вашего автомобиля 🚗
          </h1>

          <p className="text-xl mb-8 text-gray-200 leading-relaxed">
            Хотите быстро и выгодно продать свой автомобиль?
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Clock"
                  size={32}
                  className="text-red-400 mx-auto mb-3"
                />
                <p className="text-sm">
                  Нет времени заниматься продажей самостоятельно?
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Icon
                  name="Plane"
                  size={32}
                  className="text-red-400 mx-auto mb-3"
                />
                <p className="text-sm">
                  Нужно срочно уезжать и некогда ждать покупателей?
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6 text-center">
                <Icon
                  name="HelpCircle"
                  size={32}
                  className="text-red-400 mx-auto mb-3"
                />
                <p className="text-sm">
                  Никогда раньше не продавали машину и не знаете, с чего начать?
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-xl mb-8">
            <h3 className="text-2xl font-bold mb-4">
              Мы предлагаем отличное решение!
            </h3>
            <p className="text-lg">
              Быстрая и надежная продажа вашего автомобиля
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Бесплатная консультация
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg"
            >
              <Icon name="Calculator" size={20} className="mr-2" />
              Узнать стоимость
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
