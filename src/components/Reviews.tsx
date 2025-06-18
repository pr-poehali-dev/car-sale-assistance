import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Reviews = () => {
  const reviews = [
    {
      name: "Александр М.",
      car: "BMW X5 2018",
      rating: 5,
      text: "Продал машину за 2 недели! Очень довольен сервисом. Все честно, никаких скрытых комиссий. Рекомендую всем!",
      initials: "АМ",
    },
    {
      name: "Мария В.",
      car: "Toyota Camry 2020",
      rating: 5,
      text: "Отличная работа! Помогли продать автомобиль быстро и по хорошей цене. Очень профессиональный подход.",
      initials: "МВ",
    },
    {
      name: "Дмитрий К.",
      car: "Mercedes-Benz C-Class 2019",
      rating: 5,
      text: "Спасибо за качественную работу! Техосмотр провели тщательно, объявления разместили везде. Результат превзошел ожидания.",
      initials: "ДК",
    },
    {
      name: "Елена Р.",
      car: "Audi Q7 2017",
      rating: 5,
      text: "Очень удобно! Не пришлось заниматься продажей самостоятельно. Все взяли на себя, а я получила отличную цену.",
      initials: "ЕР",
    },
    {
      name: "Сергей П.",
      car: "Volkswagen Tiguan 2021",
      rating: 5,
      text: "Продавал через них уже второй автомобиль. Работают честно и качественно. Всегда на связи, отвечают на все вопросы.",
      initials: "СП",
    },
    {
      name: "Анна Л.",
      car: "Hyundai Tucson 2020",
      rating: 5,
      text: "Была скептически настроена, но результат приятно удивил! Продали быстро и по хорошей цене. Очень благодарна!",
      initials: "АЛ",
    },
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={
          i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-100 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Более 600 успешно проданных автомобилей — доверие наших клиентов
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 bg-white border-2 hover:border-red-200"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-gradient-to-br from-red-100 to-red-200 text-red-600 font-semibold">
                      {review.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {review.name}
                    </h3>
                    <p className="text-sm text-gray-600">{review.car}</p>
                  </div>
                </div>

                <div className="flex mb-3">{renderStars(review.rating)}</div>

                <p className="text-gray-700 text-sm leading-relaxed">
                  "{review.text}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-6 rounded-xl inline-block">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">600+</div>
                <div className="text-sm">Проданных авто</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5+</div>
                <div className="text-sm">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100%</div>
                <div className="text-sm">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
