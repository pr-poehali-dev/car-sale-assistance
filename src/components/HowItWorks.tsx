import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: "Phone",
      title: "Бесплатная консультация",
      description:
        "Свяжитесь с нами для получения подробной информации о процессе продажи",
    },
    {
      number: "2",
      icon: "Search",
      title: "Техническое обследование",
      description:
        "Проводим детальную проверку автомобиля с фото и видео фиксацией",
    },
    {
      number: "3",
      icon: "FileText",
      title: "Размещение объявлений",
      description: "Создаем и размещаем объявления на всех крупных площадках",
    },
    {
      number: "4",
      icon: "Users",
      title: "Показ покупателям",
      description: "Организуем показы автомобиля потенциальным покупателям",
    },
    {
      number: "5",
      icon: "HandHeart",
      title: "Оформление сделки",
      description:
        "Помогаем с оформлением всех документов и проведением сделки",
    },
    {
      number: "6",
      icon: "Banknote",
      title: "Получение денег",
      description: "Вы получаете деньги, мы - комиссию 5% от суммы сделки",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Как это работает
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Простой и понятный процесс продажи вашего автомобиля
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card
                key={index}
                className="relative bg-white hover:shadow-xl transition-all duration-300 border-2 hover:border-red-200"
              >
                <div className="absolute -top-4 -left-4 bg-gradient-to-br from-red-600 to-red-700 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                  {step.number}
                </div>

                <CardContent className="p-6 text-center">
                  <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-full w-16 h-16 mx-auto mb-4">
                    <Icon name={step.icon} size={32} className="text-red-600" />
                  </div>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
