import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

export default function Index() {
  const services = [
    {
      icon: "Settings",
      title: "Токарная обработка",
      description: "Высокоточная обработка деталей на современных токарных станках с ЧПУ",
      features: ["Диаметр до 500мм", "Длина до 2000мм", "Точность 0.01мм"]
    },
    {
      icon: "Drill",
      title: "Сверлильные работы", 
      description: "Сверление отверстий любой сложности в различных металлах и сплавах",
      features: ["Диаметр до 50мм", "Глубина до 300мм", "Любые углы"]
    },
    {
      icon: "Box",
      title: "Фрезерная обработка",
      description: "Фрезерование сложных контуров и поверхностей на станках с ЧПУ",
      features: ["3D обработка", "Сложные контуры", "Серийное производство"]
    }
  ];

  const materials = [
    "Нержавеющая сталь",
    "Углеродистая сталь", 
    "Алюминиевые сплавы",
    "Латунь и бронза",
    "Титановые сплавы",
    "Чугун"
  ];

  const portfolio = [
    {
      image: "/img/b4616b69-28ca-4590-a967-dbbe3ccceb55.jpg",
      title: "Токарная обработка",
      description: "Высокоточная обработка валов, осей и деталей вращения"
    },
    {
      image: "/img/9b55fc99-ffb0-45bf-b1f4-abad178fbb63.jpg", 
      title: "Сверлильные работы",
      description: "Профессиональное сверление отверстий любого диаметра"
    },
    {
      image: "/img/cadd4652-8786-4a5d-bbce-4a246e1c382a.jpg",
      title: "Фрезерная обработка",
      description: "Точная обработка плоскостей и сложных контуров"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-steel-900 via-steel-800 to-steel-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-steel-900/95 backdrop-blur-sm border-b border-steel-700 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Settings" className="text-steel-300" size={24} />
              <span className="text-xl font-bold text-white">МеталлОбработка</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#hero" className="text-steel-300 hover:text-white transition-colors">Главная</a>
              <a href="#services" className="text-steel-300 hover:text-white transition-colors">Услуги</a>
              <a href="#portfolio" className="text-steel-300 hover:text-white transition-colors">Портфолио</a>
              <a href="#contact" className="text-steel-300 hover:text-white transition-colors">Контакты</a>
            </div>
            <Button className="bg-steel-600 hover:bg-steel-500 text-white border-steel-500">
              Заказать звонок
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-steel-900/90 to-steel-800/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Высокоточная
              <span className="block bg-gradient-to-r from-steel-300 to-steel-100 bg-clip-text text-transparent">
                Металлообработка
              </span>
            </h1>
            <p className="text-xl text-steel-300 mb-8 max-w-2xl mx-auto">
              Профессиональные услуги токарной, сверлильной и фрезерной обработки. 
              Работаем с различными металлами и сплавами на современном оборудовании.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-steel-600 hover:bg-steel-500 text-white px-8 py-3 text-lg">
                <Icon name="Phone" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="border-steel-500 text-steel-200 hover:bg-steel-700 px-8 py-3 text-lg">
                <Icon name="FileText" className="mr-2" size={20} />
                Скачать прайс
              </Button>
            </div>
          </div>
        </div>
        
        {/* Technical decoration */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-steel-800 to-transparent"></div>
        <div className="absolute top-1/2 left-10 w-1 h-32 bg-gradient-to-b from-transparent via-steel-500 to-transparent opacity-50"></div>
        <div className="absolute top-1/3 right-10 w-1 h-40 bg-gradient-to-b from-transparent via-steel-400 to-transparent opacity-30"></div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-steel-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-white mb-4">Наши услуги</h2>
            <p className="text-steel-300 text-lg max-w-2xl mx-auto">
              Полный спектр услуг металлообработки на высокоточном оборудовании
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-steel-700/50 border-steel-600 hover:bg-steel-700/70 transition-all duration-300 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-steel-600 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-steel-200" size={32} />
                  </div>
                  <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <CardDescription className="text-steel-300 mb-6">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-2">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center justify-center text-steel-200">
                        <Icon name="Check" className="mr-2 text-steel-400" size={16} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-16 bg-steel-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Виды металлов и сплавов</h3>
            <p className="text-steel-300">Работаем с широким спектром материалов</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {materials.map((material, index) => (
              <div key={index} className="bg-steel-700/30 border border-steel-600 rounded-lg p-4 text-center hover:bg-steel-600/50 transition-colors animate-scale-in" style={{animationDelay: `${index * 0.05}s`}}>
                <span className="text-steel-200 text-sm font-medium">{material}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-steel-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Наши работы</h2>
            <p className="text-steel-300 text-lg">Примеры выполненных проектов</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {portfolio.map((item, index) => (
              <Card key={index} className="bg-steel-700/50 border-steel-600 overflow-hidden hover:scale-105 transition-transform duration-300 animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-900/70 to-transparent"></div>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{item.title}</CardTitle>
                  <CardDescription className="text-steel-300">
                    {item.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-steel-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Свяжитесь с нами</h2>
              <p className="text-steel-300 text-lg">Обсудим ваш проект и предложим оптимальное решение</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-steel-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Phone" className="text-steel-200" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Телефон</h3>
                    <p className="text-steel-300">+7 (932) 321-51-25</p>
                    <p className="text-steel-300"></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-steel-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Mail" className="text-steel-200" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Email</h3>
                    <p className="text-steel-300">ipgalios@mail.ru</p>
                    <p className="text-steel-300"></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-steel-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="MapPin" className="text-steel-200" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Адрес</h3>
                    <p className="text-steel-300">г. Тюмень, ул. Широтная улица, 8а/256 </p>
                    <p className="text-steel-300"></p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-steel-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Clock" className="text-steel-200" size={24} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2">Режим работы</h3>
                    <p className="text-steel-300">Пн-Пт: 9:00 - 18:00</p>
                    <p className="text-steel-300">Сб: 10:00 - 15:00</p>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="bg-steel-700/50 border border-steel-600 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Получить расчет стоимости</h3>
                <p className="text-steel-300 mb-8">
                  Отправьте нам чертежи или описание деталей, и мы подготовим коммерческое предложение в течение 24 часов.
                </p>
                
                <div className="space-y-4">
                  <Button className="w-full bg-steel-600 hover:bg-steel-500 text-white py-3">
                    <Icon name="FileText" className="mr-2" size={20} />
                    Отправить чертежи
                  </Button>
                  
                  <Button variant="outline" className="w-full border-steel-500 text-steel-200 hover:bg-steel-700 py-3">
                    <Icon name="MessageCircle" className="mr-2" size={20} />
                    Написать в WhatsApp
                  </Button>
                  
                  <Button variant="outline" className="w-full border-steel-500 text-steel-200 hover:bg-steel-700 py-3">
                    <Icon name="Phone" className="mr-2" size={20} />
                    Заказать обратный звонок
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-steel-900 border-t border-steel-700 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Settings" className="text-steel-300" size={24} />
                <span className="text-xl font-bold text-white">МеталлОбработка</span>
              </div>
              <p className="text-steel-400">Профессиональные услуги металлообработки с 2015 года</p>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-steel-400">
                <li>Токарная обработка</li>
                <li>Сверлильные работы</li>
                <li>Фрезерная обработка</li>
                <li>Слесарные работы</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Материалы</h4>
              <ul className="space-y-2 text-steel-400">
                <li>Нержавеющая сталь</li>
                <li>Алюминиевые сплавы</li>
                <li>Латунь и бронза</li>
                <li>Углеродистая сталь</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-steel-400">
                <li>+7 (932) 321-51-25</li>
                <li>ipgalios@mail.ru</li>
                <li>г. Тюмень, ул. Широтная улица, 8а/256</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-steel-700 mt-8 pt-8 text-center">
            <p className="text-steel-400">
              © 2024 МеталлОбработка. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}