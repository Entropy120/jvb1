// Ваши старые импорты
import img1 from './assets/WhatsApp Image 2021-11-19 at 21.13.png';
import img2 from './assets/WhatsApp Image 2021-11-19 at 21.13-1.png';
import img3 from './assets/WhatsApp Image 2021-11-19 at 21.13-2.png';
import img4 from './assets/WhatsApp Image 2021-11-19 at 21.13-3.png';

// НОВЫЕ ИМПОРТЫ (проверьте расширение .png или .jpg)
import manandcars from './assets/ManandCars.jpg';
import car1 from './assets/Car1.jpg';
import car2 from './assets/Car2.jpg';
import car3 from './assets/Car3.jpg';
import car4 from './assets/Car4.jpg';
import car5 from './assets/Car5.jpg';
import carheadlight from './assets/CarHeadlight.png';
import cartopview from './assets/CarTopView.png';
import photokirill1 from './assets/PhotoKirill1.png';
import photokirill2 from './assets/PhotoKirill2.png';
import React, { useState } from 'react';
import {
  Play,
  Menu,
  X,
  Check,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
  Video,
  Camera,
  ShieldCheck,
  Settings,
  Award,
  Clock,
  Info,
} from 'lucide-react';
export default function App() {
  // Состояние для модального окна
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Функция открытия окна
  const openModal = () => setIsModalOpen(true);

  return (
    <div className="font-sans text-gray-900 bg-white">
      <Header openModal={openModal} />
      <Hero openModal={openModal} />
      <Principles />
      <WhyGermany />
      <Guarantees />
      <SearchAbroad />
      <Timeline openModal={openModal} />
      <Calculator openModal={openModal} />
      <Examples />
      <FAQ />
      <About />
      <Footer />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

function Header({ openModal }) {
  const [isOpen, setIsOpen] = useState(false);

  // Ссылки для меню (одни для ПК, другие для мобилок)
  const navLinks = [
    { name: 'Автомобили из Германии', href: '#why-germany' },
    { name: 'Осмотр автомобиля', href: '#principles' },
    { name: 'Подбор автомобиля', href: '#search-abroad' },
    { name: 'Схема работы', href: '#timeline' },
    { name: 'Калькулятор', href: '#calculator' },
    { name: 'Популярные вопросы', href: '#faq' },
    { name: 'Кирилл Чернов', href: '#about' },
    { name: 'Контакты', href: '#footer' },
  ];

  return (
    <header className="bg-[#1a1c23] text-white py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Меню для ПК */}
        <div className="hidden lg:flex space-x-6 text-sm font-medium">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="hover:text-yellow-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Бургер для мобильных */}
        <button
          className="lg:hidden text-white z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Выпадающее мобильное меню */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-[#1a1c23] border-t border-gray-800 flex flex-col p-4 space-y-4 shadow-xl lg:hidden">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="hover:text-yellow-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}

function Hero({ openModal }) {
  return (
    <section className="relative bg-gradient-to-br from-[#2a3141] to-[#141822] text-white overflow-hidden min-h-[650px] flex flex-col justify-center">
      <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-10 items-center pt-10 pb-0">
        {/* Левая часть: Лого и фото */}
        <div className="flex flex-col items-center lg:items-start h-full justify-between relative">
          <div className="flex items-center gap-3 mb-8 self-start z-20">
            <Video className="text-red-600 w-10 h-10" />
            <span className="text-xl font-bold">avtorevizorro</span>
          </div>

          <div className="w-full flex justify-center lg:justify-start mt-auto">
            <img
              src={photokirill2}
              alt="Кирилл"
              className="w-full max-w-[280px] lg:max-w-[400px] max-h-[550px] object-contain object-bottom drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Правая часть: Текст и баннеры */}
        <div className="py-10 w-full">
          <div className="grid grid-cols-2 gap-4 mb-10 text-sm">
            <div>
              <p className="font-bold">zakaz@avtorevizorro.gmbh</p>
              <p className="text-gray-400">Написать нам</p>
            </div>
            <div>
              <p className="font-bold">8 (499) 229-21-00</p>
              <p className="text-gray-400">Ежедневно с 10 до 21</p>
            </div>
            <div className="col-span-2 mt-4">
              <button
                onClick={openModal}
                className="bg-[#44b556] hover:bg-green-600 px-6 py-2 rounded font-bold transition text-white"
              >
                WhatsApp
              </button>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            — Осмотр
            <br />
            — Подбор
            <br />— Доставка
          </h1>
          <p className="text-xl md:text-2xl font-medium mb-10">
            автомобилей из Германии 🇩🇪 и стран Европы 🇪🇺
          </p>

          <div className="relative mt-8 w-full max-w-lg select-none">
            <div className="bg-[#2d3446] p-6 rounded-t-lg">
              <p className="text-lg font-bold">В ПОИСКАХ ЛУЧШЕГО?</p>
            </div>
            <div className="bg-red-600 p-6 text-sm font-bold">
              ОТЛИЧНЫЕ АВТОМОБИЛИ ИЗ ЕВРОСОЮЗА,
              <br />
              КАЖДЫЙ ДЕНЬ!
            </div>
            <div className="bg-[#f5b027] text-black p-4 rounded-b-lg text-sm">
              Осмотр, подбор, доставка автомобилей из Германии и стран Европы
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Principles() {
  return (
    <section id="principles" className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-gray-900 leading-tight">
          Принципы работы, которые
          <br />
          стали нашей визитной карточкой
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 items-center max-w-6xl mx-auto">
          {/* Левая колонка */}
          <div className="space-y-12">
            <PrincipleItem
              icon={<ShieldCheck />}
              title="Мы принципиально не связываемся с хламом."
              text="Даже если это очень выгодная покупка, или нет объективных причин не связываться с автомобилем. Да, это не выгодно - зато мы спокойны за свою репутацию."
            />
            <PrincipleItem
              icon={<Award />}
              title="В нашей команде нет случайных людей."
              text="Все наши эксперты имеют многолетний опыт работы в области проверки автомобилей с пробегом, включая экспертный и опыт работы у официальных дилеров. А главное, квалификация каждого эксперта из нашей команды позволяет проверить состояние автомобиля БЕЗ специальных приборов, опираясь лишь на свой опыт и знания."
            />
          </div>

          {/* Центральное авто */}
          <div className="flex justify-center items-center w-full min-h-[400px]">
            <img
              src={cartopview}
              alt="Car Top View"

              className="w-full max-w-[250px] md:max-w-[350px] object-contain drop-shadow-2xl rotate-90"
            />
          </div>

          {/* Правая колонка */}
          <div className="space-y-12">
            <PrincipleItem
              icon={<Settings />}
              title="Высочайшие требования,"
              text="которые мы предъявляем к состоянию автомобиля. Да, эти требования завышены - зато наши клиенты ездят на безупречных автомобилях."
            />
            <PrincipleItem
              icon={<Clock />}
              title="Мы не экономим на оборудовании."
              text="В нашем распоряжении не только толщиномеры (измеритель толщины краски), фонари со специальным освещением, эндоскопы и сканеры, позволяющие быстро подключиться к электронным блокам, но и специализированные приборы, например для проверки целостности блока двигателя и их прокладок. Автомобили Porsche, BMW, Range Rover, Mercedes и Ауди мы проверяем с помощью дилерского диагностического сканера."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function PrincipleItem({ icon, title, text }) {
  return (
    <div className="flex flex-col items-start text-left">
      {/* Иконка в белом кружке с тенью */}
      <div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center text-blue-500 mb-4">
        {icon}
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">
        <strong className="text-gray-900 font-bold">{title}</strong> {text}
      </p>
    </div>
  );
}

function WhyGermany() {
  return (
    <section
      id="why-germany"
      className="bg-[#141822] text-white overflow-hidden"
    >
      <div className="grid lg:grid-cols-2 items-stretch">
        <div className="relative h-[300px] md:h-[400px] lg:h-auto min-h-[500px] w-full">
          <img
            src={carheadlight}
            alt="BMW Headlight"
            className="absolute inset-0 w-full h-full object-cover object-left"
          />
        </div>

        {/* Правая колонка с текстом */}
        <div className="py-16 px-6 lg:py-24 lg:px-16 flex flex-col justify-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#f5b027] leading-tight">
            Чем хороши
            <br />
            автомобили из Германии?
          </h2>
          <p className="text-gray-400 mb-8 text-sm md:text-base">
            При аналогичном пробеге, общее состояние машин в Германии лучше, чем
            в России.
          </p>

          <p className="font-bold mb-6 text-white text-sm md:text-base">
            Это обусловлено несколькими факторами:
          </p>

          <ul className="space-y-4 text-sm md:text-base text-gray-300">
            {[
              'отличным состоянием дорог',
              'качественным и своевременным сервисным обслуживанием',
              'гораздо меньшим количеством пробок',
              'отсутствием реагентов на дорогах',
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-4">
                <div className="w-6 h-6 rounded-full border border-gray-600 flex flex-shrink-0 items-center justify-center">
                  <span className="text-gray-400 text-[10px]">✓</span>
                </div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Guarantees() {
  const items = [
    {
      num: 1,
      title: 'Беспристрастность',
      desc: 'предлагаемого к покупке автомобиля',
      img: car1,
    },
    { num: 2, title: 'Гарантированно', desc: 'оригинальный пробег', img: car2 },
    {
      num: 3,
      title: 'Отличное техническое',
      desc: 'состояние, соответствующее диагностическому листу',
      img: car3,
    },
    { num: 4, title: 'Юридическую', desc: 'чистоту автомобилей', img: car4 },
    { num: 5, title: 'Абсолютную', desc: 'безопасность сделки', img: car5 },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-12">Мы гарантируем</h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {items.map((item) => (
            <div
              key={item.num}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition text-left relative"
            >
              <div className="w-full h-32 bg-gray-200 rounded-lg mb-4 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-2 right-2 bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold">
                {item.num}
              </div>
              <h3 className="font-bold text-sm mb-1">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SearchAbroad() {
  return (
    <section id="search-abroad" className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center max-w-4xl">
        <div className="w-12 h-12 mx-auto border-2 border-gray-300 rounded-xl flex items-center justify-center mb-6">
          <span className="text-2xl">🔖</span>
        </div>
        <h2 className="text-3xl font-bold mb-6">
          Подбор автомобиля за границей
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          В некоторых случаях машину выгоднее подобрать за рубежом, чем в
          России. Во-первых, она обойдется дешевле, а во-вторых, состояние
          некоторых машин намного лучше...
        </p>
        <div className="bg-[#4f58a5] text-white p-6 rounded-xl shadow-xl flex items-start gap-4 text-left max-w-2xl mx-auto">
          <Info className="flex-shrink-0 w-6 h-6" />
          <p className="text-sm">
            У нас отлажена система подбора автомобилей за границей и по качеству
            не уступает подбору в России
          </p>
        </div>
      </div>
    </section>
  );
}

function Timeline({ openModal }) {
  const steps = [
    'Оформление брифа на поиск авто',
    'Оплата наших услуг по договору',
    'Согласование шорт-листа',
    'Осмотр и отчёт',
    'Оплата вашего автомобиля',
    'Оплата таможенных платежей',
    'Доставка и получение а/м с ПТС',
  ];

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">
          Сроки и схема работы
        </h2>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 text-center max-w-sm mx-auto w-full relative">
            <div className="text-8xl font-black tracking-tighter mb-2 text-black">
              14<span className="text-6xl text-blue-600">+</span>
            </div>
            <div className="text-4xl font-bold uppercase mb-4 text-black">
              дней
            </div>
            <p className="text-gray-400 text-sm mb-8">средний срок доставки</p>
            <button
              onClick={openModal}
              className="bg-[#5c6bc0] hover:bg-blue-700 text-white w-full py-3 rounded-lg font-bold transition"
            >
              Отправить заявку
            </button>
          </div>

          <div className="relative border-l-2 border-dashed border-blue-200 pl-8 space-y-8">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="absolute -left-[45px] w-8 h-8 rounded-full bg-blue-100 text-blue-600 border-2 border-white shadow flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-black">{step}</h4>
                  {i === 2 && (
                    <p className="text-xs text-gray-400 mt-1">
                      2-3 модели подходящие под запрос
                    </p>
                  )}
                  {i === 4 && (
                    <p className="text-xs text-gray-400 mt-1">
                      Вы оплачиваете со своей карты
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Галерея из 4 фото под таймлайном */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20 w-full">
        <img
          src={img1}
          alt="Фото 1"
          className="w-full h-64 object-cover rounded-xl shadow-md hover:opacity-90 transition cursor-pointer"
        />
        <img
          src={img2}
          alt="Фото 2"
          className="w-full h-64 object-cover rounded-xl shadow-md hover:opacity-90 transition cursor-pointer"
        />
        <img
          src={img3}
          alt="Фото 3"
          className="w-full h-64 object-cover rounded-xl shadow-md hover:opacity-90 transition cursor-pointer"
        />
        <img
          src={img4}
          alt="Фото 4"
          className="w-full h-64 object-cover rounded-xl shadow-md hover:opacity-90 transition cursor-pointer"
        />
      </div>
    </section>
  );
}

function Calculator({ openModal }) {
  // Состояния калькулятора
  const [price, setPrice] = useState(15000);
  const [carAge, setCarAge] = useState('до 3-х лет');
  const [engineType, setEngineType] = useState('Бензиновый + Электрический');
  const [engineVolume, setEngineVolume] = useState(2000);
  const [inspection, setInspection] = useState({
    vin: false,
    testDrive: true,
    onSite: false,
    specialist: false,
  });
  const [delivery, setDelivery] = useState('border');

  // Массивы опций
  const ageOptions = ['до 3-х лет', 'от 3-5 лет', 'от 5 лет', 'от 30 лет'];
  const volumeOptions = [
    { label: 'до 2 000', value: 2000 },
    { label: 'до 3 000', value: 3000 },
    { label: 'до 4 000', value: 4000 },
    { label: 'до 5 000', value: 5000 },
  ];

  const deliveryServices = [
    { name: 'Страховка', price: 15 },
    { name: 'Услуга подбора автомобиля', price: 200 },
    { name: 'Услуги таможенного оформления', price: 90 },
    { name: 'Свидетельство СБКТС', price: 150 },
    { name: 'ГЛОНАСС', price: 100 },
    { name: 'Получение ЭПТС', price: 100 },
    { name: 'Консультации', price: 100 },
  ];

  // --- ЛОГИКА РАСЧЕТА ---
  const calculateCustoms = () => {
    const carPrice = Number(price) || 0;
    let fee = 0;

    if (carAge === 'до 3-х лет') {
      fee = carPrice * 0.2 + engineVolume * 1.5;
    } else if (carAge === 'от 3-5 лет') {
      fee = carPrice * 0.15 + engineVolume * 2.0;
    } else if (carAge === 'от 5 лет') {
      fee = carPrice * 0.1 + engineVolume * 2.5;
    } else {
      fee = carPrice * 0.05 + engineVolume * 1.0;
    }

    if (engineType === 'Электрический') fee = fee * 0.5;
    return Math.round(fee);
  };

  const customsFee = calculateCustoms();

  const calculateInspection = () => {
    let sum = 0;
    if (inspection.vin) sum += 15;
    if (inspection.testDrive) sum += 150;
    if (inspection.onSite) sum += 15;
    if (inspection.specialist) sum += 100;
    return sum;
  };

  const calculateDelivery = () => {
    const baseDelivery = delivery === 'border' ? 2500 : 3000;
    const servicesSum = deliveryServices.reduce(
      (acc, curr) => acc + curr.price,
      0,
    );
    return baseDelivery + servicesSum;
  };

  const totalInspection = calculateInspection();
  const totalDelivery = calculateDelivery();
  const totalSum = Number(price) + customsFee + totalInspection + totalDelivery;

  return (
    <section id="calculator" className="py-20 bg-[#f8f9fa]">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-3xl font-bold text-center mb-12 text-black">
          Сколько стоит подобрать,
          <br />
          растаможить и привезти автомобиль?
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col lg:flex-row gap-10">
          {/* Левая часть формы */}
          <div className="flex-1 space-y-8">
            {/* Блок 1 */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold">
                <span className="w-6 h-6 rounded-full border border-blue-600 flex items-center justify-center text-xs">
                  1
                </span>
                Сначала уточним стоимость автомобиля в Германии
              </div>

              <div className="space-y-6">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">
                    Сумма в Евро
                  </label>
                  <input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="w-full border rounded-lg p-3 text-sm focus:outline-blue-500 text-black font-bold"
                  />
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-2 block">
                    Возраст
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                    {ageOptions.map((age) => (
                      <button
                        key={age}
                        onClick={() => setCarAge(age)}
                        className={`py-2 rounded-lg transition-colors ${
                          carAge === age
                            ? 'bg-[#5c6bc0] text-white border border-[#5c6bc0]'
                            : 'border border-gray-300 text-black hover:bg-gray-50'
                        }`}
                      >
                        {age}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-1 block">
                    Тип двигателя
                  </label>
                  <select
                    value={engineType}
                    onChange={(e) => setEngineType(e.target.value)}
                    className="w-full border rounded-lg p-3 text-sm focus:outline-blue-500 text-black appearance-none bg-white"
                  >
                    <option>Бензиновый + Электрический</option>
                    <option>Бензиновый</option>
                    <option>Дизельный</option>
                    <option>Электрический</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs text-gray-500 mb-2 block">
                    Объём <span className="text-[10px]">см³</span>
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-xs">
                    {volumeOptions.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => setEngineVolume(opt.value)}
                        className={`py-2 rounded-lg transition-colors ${
                          engineVolume === opt.value
                            ? 'bg-[#5c6bc0] text-white border border-[#5c6bc0]'
                            : 'border border-gray-300 text-black hover:bg-gray-50'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg flex justify-between items-center border border-blue-100">
                  <span className="text-sm text-gray-600">
                    Таможенная пошлина (демо-расчет)
                  </span>
                  <span className="font-bold text-blue-700">
                    {customsFee} €
                  </span>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Блок 2 */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold">
                <span className="w-6 h-6 rounded-full border border-blue-600 flex items-center justify-center text-xs">
                  2
                </span>
                Стоимость осмотра
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-black">
                <label
                  className={`border p-3 rounded-lg flex items-center justify-between cursor-pointer transition ${inspection.vin ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-300'}`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={inspection.vin}
                      onChange={() =>
                        setInspection({ ...inspection, vin: !inspection.vin })
                      }
                    />
                    Проверка по VIN
                  </div>
                  <span className="font-bold">15 €</span>
                </label>

                <label
                  className={`border p-3 rounded-lg flex items-center justify-between cursor-pointer transition ${inspection.testDrive ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-300'}`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={inspection.testDrive}
                      onChange={() =>
                        setInspection({
                          ...inspection,
                          testDrive: !inspection.testDrive,
                        })
                      }
                    />
                    Тест-драйв
                  </div>
                  <span className="font-bold">150 €</span>
                </label>

                <label
                  className={`border p-3 rounded-lg flex items-center justify-between cursor-pointer transition ${inspection.onSite ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-300'}`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={inspection.onSite}
                      onChange={() =>
                        setInspection({
                          ...inspection,
                          onSite: !inspection.onSite,
                        })
                      }
                    />
                    Выездной осмотр
                  </div>
                  <span className="font-bold">15 €</span>
                </label>

                <label
                  className={`border p-3 rounded-lg flex items-center justify-between cursor-pointer transition ${inspection.specialist ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-300'}`}
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={inspection.specialist}
                      onChange={() =>
                        setInspection({
                          ...inspection,
                          specialist: !inspection.specialist,
                        })
                      }
                    />
                    Заключение специалиста
                  </div>
                  <span className="font-bold">100 €</span>
                </label>
              </div>

              <div className="mt-4 flex justify-between items-center border-t border-gray-100 pt-4">
                <span className="text-sm text-gray-500">
                  Общая стоимость осмотра
                </span>
                <span className="font-bold text-lg text-black">
                  {totalInspection} €
                </span>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Блок 3 */}
            <div>
              <div className="flex items-center gap-2 mb-4 text-blue-600 font-bold">
                <span className="w-6 h-6 rounded-full border border-blue-600 flex items-center justify-center text-xs">
                  3
                </span>
                Стоимость доставки
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-black mb-6">
                <label
                  className={`border p-3 rounded-lg flex items-start gap-3 cursor-pointer transition ${delivery === 'border' ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-300'}`}
                >
                  <input
                    type="radio"
                    name="delivery"
                    checked={delivery === 'border'}
                    onChange={() => setDelivery('border')}
                    className="mt-0.5"
                  />
                  <div className="flex-1">
                    <div className="mb-1">
                      Доставка автомобилем
                      <br />
                      до границы в Санкт-Петербурге
                    </div>
                    <div className="text-[10px] text-gray-400 mb-2">
                      до порта Бронка
                    </div>
                    <div className="font-bold text-right text-sm">2 500 €</div>
                  </div>
                </label>

                <label
                  className={`border p-3 rounded-lg flex items-start gap-3 cursor-pointer transition ${delivery === 'moscow' ? 'border-blue-500 bg-blue-50' : 'hover:border-gray-300'}`}
                >
                  <input
                    type="radio"
                    name="delivery"
                    checked={delivery === 'moscow'}
                    onChange={() => setDelivery('moscow')}
                    className="mt-0.5"
                  />
                  <div className="flex-1">
                    <div className="mb-1">
                      Доставка автомобилем
                      <br />
                      до офиса в Москве
                    </div>
                    <div className="font-bold text-right text-sm mt-4">
                      3 000 €
                    </div>
                  </div>
                </label>
              </div>

              <div className="space-y-3 text-xs text-gray-600 mb-4">
                {deliveryServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-b border-gray-100 pb-2"
                  >
                    <span>{service.name}</span>
                    <span className="font-bold text-black">
                      {service.price} €
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-between items-center border-t border-gray-100 pt-4">
                <span className="text-sm font-bold text-gray-800">
                  Общая стоимость доставки
                </span>
                <span className="font-bold text-lg text-black">
                  {totalDelivery} €
                </span>
              </div>
            </div>

            {/* ИТОГО */}
            <div className="bg-[#141822] text-white p-4 rounded-xl flex justify-between items-center mt-8 shadow-lg">
              <span className="font-bold">ИТОГО ВСЕГО:</span>
              <span className="text-2xl font-black text-yellow-400">
                {totalSum} €
              </span>
            </div>

            <button
              onClick={openModal}
              className="bg-[#5c6bc0] hover:bg-blue-700 text-white w-full py-4 rounded-lg font-bold transition shadow-lg mt-6 shadow-blue-500/30"
            >
              Отправить заявку
            </button>
          </div>

          {/* Правая часть - Только Примечание */}
          <div className="w-full lg:w-72 h-fit">
            <div className="bg-gray-50 p-6 rounded-xl text-xs text-gray-500 border-l-4 border-blue-600">
              <h4 className="font-bold text-gray-800 mb-2">Примечание</h4>
              <p className="mb-4">
                В подавляющем большинстве случаев из Германии ввозятся
                автомобили от 3-х до 5-ти лет.
              </p>
              <p className="mb-4">
                Это связано с особенностями таможенных пошлин — автомобили
                старше или младше таможить значительно дороже.
              </p>
              <p>
                На автомобиль старше 2007 года или имеющий экологический класс
                ниже ЕВРО4 оформление ПТС не возможно, пока автомобилю не
                исполнится 30 лет.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Examples() {
  const videoCovers = [car1, car2, car3, car4];
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4 text-black">
          Примеры автомобилей
        </h2>
        <p className="text-center text-gray-500 text-sm mb-12 max-w-xl mx-auto">
          В некоторых случаях машину выгоднее подобрать за рубежом, чем в
          России. Качество сборки иностранных заводов намного выше.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="group relative rounded-xl overflow-hidden cursor-pointer h-64"
            >
              <img
                src={videoCovers[item - 1]}
                alt="Video preview"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Play className="text-white fill-white ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const [openIndex, setOpenIndex] = useState(3); // По умолчанию открыт 4-й вопрос

  const faqs = [
    {
      q: 'Как заключить договор?',
      a: 'Вы можете заключить договор удаленно или в нашем офисе.',
    },
    {
      q: 'Как производится оплата?',
      a: 'Оплата производится в несколько этапов...',
    },
    {
      q: 'Возможна ли оплата после доставки?',
      a: 'Нет, автомобиль оплачивается до отправки...',
    },
    {
      q: 'Возможно ли оформление кредита через вас?',
      a: 'Нет. Мы работаем исключительно по полной предварительной оплате.',
    },
    {
      q: 'Что если автомобиль не понравится?',
      a: 'Мы подберем другой автомобиль согласно вашему брифу.',
    },
  ];

  return (
    <section id="faq" className="py-20 bg-[#141822] text-white">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-10 text-center lg:text-left">
            Популярные вопросы
          </h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-gray-700 pb-2">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex justify-between items-center py-4 text-left hover:text-blue-400 transition"
                >
                  <span className="font-bold text-sm">{faq.q}</span>
                  {openIndex === i ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} className="text-gray-500" />
                  )}
                </button>
                {openIndex === i && (
                  <div className="text-gray-400 text-xs leading-relaxed pb-4 pr-8">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <img
            src={manandcars}
            alt="Man and Cars"
            className="rounded-2xl w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-center lg:text-left mb-2 text-black">
              Кирилл Чернов
            </h2>
            <p className="text-gray-500 text-center lg:text-left mb-10 text-sm">
              Добро пожаловать! Меня зовут — Чернов Кирилл.
              <br />
              «Авторевизорро» — мой творческий псевдоним.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="text-blue-500 mt-1">
                  <Award size={24} />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Уже более <strong>20 лет я занимаюсь доставкой</strong>{' '}
                  автомобилей из Германии и США и помощью с проверкой перед
                  покупкой в Москве и по всей России.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="text-blue-500 mt-1">
                  <Settings size={24} />
                </div>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Так же в нашем сервисе Авторевизорро мы{' '}
                  <strong>
                    занимаемся ремонтом, обслуживанием и дооснащением
                  </strong>{' '}
                  автомобилей BMW, Porsche, Jaguar, Land Rover.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src={photokirill1}
              alt="Kirill"
              className="w-full object-contain max-h-[600px]"
            />
          </div>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { val: '20', text: 'лет опыта' },
            { val: '398', text: 'привезённых автомобилей' },
            { val: '13 976', text: 'проверенных автомобилей' },
            { val: '36', text: 'автомобилей с опасными скрытыми дефектами' },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] text-center flex flex-col justify-center border border-gray-100"
            >
              <div className="text-4xl font-black text-gray-900 mb-2">
                {stat.val}
              </div>
              <div className="text-xs text-gray-500 leading-tight">
                {stat.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer
      id="footer"
      className="bg-[#1e2025] text-gray-400 py-12 border-t border-gray-800"
    >
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
        <div>
          <h3 className="text-white text-xl font-bold mb-6">Контакты</h3>
          <div className="space-y-3 text-sm">
            <p className="text-white">+7 (499) 229-21-00</p>
            <p>zakaz@avtorevizorro.gmbh</p>
            <p>avtorevizorro@mail.ru</p>
          </div>
        </div>

        <div className="flex flex-col justify-center text-sm">
          <p>г. Москва,</p>
          <p>ул. Люблинская,</p>
          <p>д. 110, кор. 1</p>
        </div>

        <div className="flex gap-4">
          <a
            href="#"
            className="bg-white text-black flex flex-col items-center justify-center w-24 h-24 rounded-lg hover:bg-gray-200 transition p-2"
          >
            <Video className="text-red-600 mb-2" />
            <span className="text-[10px] text-center leading-tight">
              avtorevizorro
              <br />
              <span className="text-gray-500">395 000 подписчиков</span>
            </span>
          </a>
          <a
            href="#"
            className="bg-white text-black flex flex-col items-center justify-center w-24 h-24 rounded-lg hover:bg-gray-200 transition p-2"
          >
            <Camera className="text-blue-600 mb-2" />
            <span className="text-[10px] text-center leading-tight">
              @avtorevizorro
              <br />
              <span className="text-gray-500">17 200 подписчиков</span>
            </span>
          </a>
          <a
            href="#"
            className="bg-white text-black flex flex-col items-center justify-center w-24 h-24 rounded-lg hover:bg-gray-200 transition p-2"
          >
            <Camera className="text-blue-600 mb-2" />
            <span className="text-[10px] text-center leading-tight">
              @avtorevizorro
              <br />
              <span className="text-gray-500">5 200 подписчиков</span>
            </span>
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between text-xs text-gray-600">
        <p>© 2013-2022 «Авторевизорро»</p>
        <a href="#" className="hover:text-gray-400">
          Политика конфиденциальности
        </a>
        <p>Сайт создан — Zavtrak</p>
      </div>
    </footer>
  );
}

function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-opacity">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-fadeIn">
        {/* Кнопка закрытия */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition"
        >
          <X size={24} />
        </button>

        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">
            Оставить заявку
          </h3>
          <p className="text-gray-500 text-sm text-center mb-6">
            Оставьте свои контакты, и мы свяжемся с вами в ближайшее время,
            чтобы обсудить детали.
          </p>

          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              onClose();
              alert('Заявка отправлена!');
            }}
          >
            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                Ваше имя
              </label>
              <input
                type="text"
                required
                placeholder="Иван"
                className="w-full border rounded-lg p-3 text-sm focus:outline-blue-500 text-black"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                Телефон или WhatsApp
              </label>
              <input
                type="tel"
                required
                placeholder="+7 (999) 999-99-99"
                className="w-full border rounded-lg p-3 text-sm focus:outline-blue-500 text-black"
              />
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">
                Комментарий (необязательно)
              </label>
              <textarea
                rows="3"
                placeholder="Хочу подобрать BMW X5 до 20000 €"
                className="w-full border rounded-lg p-3 text-sm focus:outline-blue-500 text-black resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#5c6bc0] hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition shadow-lg mt-2"
            >
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
