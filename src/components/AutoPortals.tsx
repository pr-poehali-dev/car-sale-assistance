import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AutoPortals = () => {
  const portals = [
    {
      name: "Авито",
      icon: "Globe",
      color: "bg-green-600 hover:bg-green-700",
      url: "https://avito.ru",
      description: "Размещение на крупнейшей площадке",
    },
    {
      name: "Дром",
      icon: "Car",
      color: "bg-blue-600 hover:bg-blue-700",
      url: "https://drom.ru",
      description: "Специализированный автопортал",
    },
    {
      name: "Авто.ру",
      icon: "Zap",
      color: "bg-orange-600 hover:bg-orange-700",
      url: "https://auto.ru",
      description: "Быстрое размещение объявлений",
    },
  ];

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20">
      <CardHeader>
        <CardTitle className="text-2xl text-white flex items-center">
          <Icon name="Share2" size={24} className="mr-3 text-red-400" />
          Размещение на автопорталах
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-gray-300 mb-6">
          Мы разместим ваше объявление на популярных площадках для максимального
          охвата
        </p>

        <div className="grid gap-4">
          {portals.map((portal) => (
            <div
              key={portal.name}
              className="flex items-center justify-between p-4 bg-white/5 rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-3 rounded-full ${portal.color}`}>
                  <Icon
                    name={portal.icon as any}
                    size={20}
                    className="text-white"
                  />
                </div>
                <div>
                  <h3 className="text-white font-semibold">{portal.name}</h3>
                  <p className="text-gray-400 text-sm">{portal.description}</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="border-white/30 text-white hover:bg-white hover:text-gray-900"
              >
                Подключить
              </Button>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-red-600 to-red-700 p-4 rounded-lg mt-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-white font-semibold">
                Автоматическое размещение
              </h3>
              <p className="text-red-100 text-sm">Один клик — все площадки</p>
            </div>
            <Button className="bg-white text-red-600 hover:bg-gray-100">
              <Icon name="Rocket" size={16} className="mr-2" />
              Активировать
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AutoPortals;
