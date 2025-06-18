import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Advantages = () => {
  const advantages = [
    {
      icon: "Shield",
      title: "Более 5 лет опыта",
      description:
        "Реализовали свыше 600 автомобилей различных марок и моделей",
    },
    {
      icon: "Globe",
      title: "Широкое покрытие",
      description:
        "Размещение на крупнейших онлайн-платформах и продвижение в соцсетях",
    },
    {
      icon: "Car",
      title: "Удобные условия",
      description:
        "Оставляйте автомобиль себе или на нашей охраняемой парковке",
    },
    {
      icon: "Search",
      title: "Техосмотр",
      description:
        "Предварительное обследование с фиксацией дефектов на фото и видео",
    },
    {
      icon: "Users",
      title: "Профессионалы",
      description:
        "Доверьте проверку, рекламу и оформление сделки специалистам",
    },
    {
      icon: "MapPin",
      title: "По всей России",
      description: "Услуги доступны в Санкт-Петербурге и по всей России",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            ⚡ Наши преимущества
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Почему стоит выбрать нас для продажи вашего автомобиля
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((advantage, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 border-2 hover:border-red-200 group"
            >
              <CardHeader className="text-center">
                <div className="bg-gradient-to-br from-red-100 to-red-200 p-4 rounded-full w-16 h-16 mx-auto mb-4 group-hover:from-red-600 group-hover:to-red-700 transition-all duration-300">
                  <Icon
                    name={advantage.icon}
                    size={32}
                    className="text-red-600 group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <CardTitle className="text-xl text-gray-900 group-hover:text-red-600 transition-colors duration-300">
                  {advantage.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {advantage.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
