import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Pricing = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            💰 Стоимость наших услуг
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Прозрачные условия сотрудничества без скрытых платежей
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-red-200 bg-gradient-to-br from-red-50 to-white">
              <CardHeader className="text-center">
                <div className="bg-red-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Icon name="Percent" size={32} className="text-white" />
                </div>
                <CardTitle className="text-3xl text-red-600">5%</CardTitle>
                <p className="text-gray-600">от итоговой суммы сделки</p>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center justify-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Никаких скрытых платежей
                  </li>
                  <li className="flex items-center justify-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Оплата только после продажи
                  </li>
                  <li className="flex items-center justify-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Полное сопровождение сделки
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-white">
              <CardHeader className="text-center">
                <div className="bg-blue-600 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                  <Icon name="Settings" size={32} className="text-white" />
                </div>
                <CardTitle className="text-xl text-blue-600">
                  Техосмотр
                </CardTitle>
                <p className="text-gray-600">индивидуальная стоимость</p>
              </CardHeader>
              <CardContent className="text-center">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center justify-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Зависит от марки и модели
                  </li>
                  <li className="flex items-center justify-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Фото и видео фиксация
                  </li>
                  <li className="flex items-center justify-center">
                    <Icon
                      name="Check"
                      size={16}
                      className="text-green-500 mr-2"
                    />
                    Обязательный этап
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-gradient-to-r from-gray-900 to-red-900 text-white">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-center">
                🚗 Условия сотрудничества
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Icon
                      name="Home"
                      size={20}
                      className="text-red-400 mr-3 mt-1"
                    />
                    <p>
                      Оставляете автомобиль себе и показываете его покупателям
                      лично
                    </p>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="ShieldCheck"
                      size={20}
                      className="text-red-400 mr-3 mt-1"
                    />
                    <p>
                      Либо оставляйте автомобиль на нашей охраняемой платной
                      парковке
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <Icon
                      name="AlertTriangle"
                      size={20}
                      className="text-yellow-400 mr-3 mt-1"
                    />
                    <p className="text-sm">
                      <strong>Обязательное условие:</strong> Предварительное
                      техническое обследование автомобиля с фиксацией дефектов
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-4"
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Рассчитать стоимость
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
