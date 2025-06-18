import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const ClientDashboard = () => {
  const [isLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <Card className="bg-white/10 backdrop-blur-sm border-white/20 max-w-md mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl text-white text-center flex items-center justify-center">
            <Icon name="User" size={24} className="mr-3 text-red-400" />
            Личный кабинет
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-gray-300 text-center">
            Войдите для доступа к личному кабинету
          </p>
          <div className="space-y-3">
            <Button className="w-full bg-red-600 hover:bg-red-700 text-white">
              <Icon name="LogIn" size={18} className="mr-2" />
              Войти
            </Button>
            <Button
              variant="outline"
              className="w-full border-white/30 text-white hover:bg-white hover:text-gray-900"
            >
              Регистрация
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white/10 backdrop-blur-sm border-white/20 mb-6">
        <CardHeader>
          <CardTitle className="text-2xl text-white flex items-center">
            <Icon name="User" size={24} className="mr-3 text-red-400" />
            Добро пожаловать, Александр!
          </CardTitle>
        </CardHeader>
      </Card>

      <Tabs defaultValue="cars" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="cars">Мои авто</TabsTrigger>
          <TabsTrigger value="deals">Сделки</TabsTrigger>
          <TabsTrigger value="docs">Документы</TabsTrigger>
          <TabsTrigger value="settings">Настройки</TabsTrigger>
        </TabsList>

        <TabsContent value="cars" className="space-y-4">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=80&h=60&fit=crop"
                    alt="BMW X5"
                    className="w-16 h-12 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-white font-semibold">BMW X5 2018</h3>
                    <p className="text-gray-300 text-sm">2.0 л, автомат</p>
                  </div>
                </div>
                <Badge className="bg-green-600">Активно</Badge>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Оценка</p>
                  <p className="text-white font-semibold">2 850 000 ₽</p>
                </div>
                <div>
                  <p className="text-gray-400">Просмотры</p>
                  <p className="text-white font-semibold">127</p>
                </div>
                <div>
                  <p className="text-gray-400">Звонки</p>
                  <p className="text-white font-semibold">8</p>
                </div>
                <div>
                  <p className="text-gray-400">Дней в продаже</p>
                  <p className="text-white font-semibold">12</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="deals" className="space-y-4">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <div className="text-center text-gray-300">
                <Icon
                  name="Handshake"
                  size={48}
                  className="mx-auto mb-4 text-red-400"
                />
                <p>У вас пока нет активных сделок</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="docs" className="space-y-4">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-6">
              <div className="text-center text-gray-300">
                <Icon
                  name="FileText"
                  size={48}
                  className="mx-auto mb-4 text-red-400"
                />
                <p>Документы будут доступны после начала сделки</p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="settings" className="space-y-4">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Настройки профиля</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-gray-300 text-sm">Email</label>
                <p className="text-white">alex@example.com</p>
              </div>
              <div className="space-y-2">
                <label className="text-gray-300 text-sm">Телефон</label>
                <p className="text-white">+7 (999) 123-45-67</p>
              </div>
              <Button className="bg-red-600 hover:bg-red-700">
                Редактировать профиль
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ClientDashboard;
