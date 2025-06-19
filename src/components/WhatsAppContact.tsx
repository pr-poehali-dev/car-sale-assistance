import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const WhatsAppContact = () => {
  const whatsappNumber = "79991234567";
  const message = "Здравствуйте! Хочу продать автомобиль через ваш сервис.";

  const openWhatsApp = () => {
    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <Card className="bg-gradient-to-r from-green-600 to-green-700 border-0">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="bg-white p-3 rounded-full">
              <Icon name="MessageCircle" size={24} className="text-green-600" />
            </div>
            <div>
              <h3 className="text-white font-semibold text-lg">
                Быстрая связь в WhatsApp
              </h3>
              <p className="text-green-100 text-sm">
                Получите консультацию за 5 минут
              </p>
            </div>
          </div>
          <Button
            onClick={openWhatsApp}
            className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3"
          >
            <Icon name="MessageCircle" size={18} className="mr-2" />
            Написать
          </Button>
        </div>

        <div className="mt-4 text-center">
          <Button
            onClick={openWhatsApp}
            size="lg"
            className="w-full bg-white text-green-600 hover:bg-gray-100 text-lg py-4"
          >
            +7 (921) 099-39-93 — WhatsApp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default WhatsAppContact;
