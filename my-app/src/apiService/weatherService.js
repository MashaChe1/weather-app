import { weather_api_key, weather_api_url } from "../keys";
import cities from '../Header/cities.json';


//асинхронная функция, которая возвращает промис
//запрос на сервер на ендпоинт: weather который отвечает за текущую погоду
// async function выполяется отдельно от всего. Она предназначена для 
// того что бы код продолжал обрабатываться не ожидая ответа сервера. 
//Главные ключи в ассинхронной фуекции async i await.
//async пишется перед обозначением функции для котого что бы обозначить что это за функция js движку
//await пишется перед функцией, которая будет выполнять запрос
export async function getCurrentWeather(data) {

   // fetch функция делает запрос. Запросы бывают 2х основных типов: get i post
   // fetcj принимает разные параметры. Он может принимать как string tak i object
   // если мы передали fetch string, что это URL и нужно сделать get запрос
   // если object , то это уже зависит от настроек, которые мы зададим
   
   //URLSearchPArams это класс, помогающий работать с параметрами, передаваемые в fetch
   //URLSearchParams делает из объека string с URL форматом. Ссылка. 
   //URLSearchParams - данный объект выдаст, след. строчку : lat=54.33&lon=l36.21&units=metric&lang=ru i td...
   // fetch получает следующую строчку "https://api.openweathermap.org/data/2.5/weather?lat=54.33&lon=l36.21&units=metric&lang=ru i td..."
  
   const response = await fetch(weather_api_url + '/weather?' + new URLSearchParams({
    lat: cities[data.city].lat,
    lon: cities[data.city].lng,
    units: data.unit,
    lang: data.language,
   appid: weather_api_key
   }));

   // дожидаемся ответа от сервера и все парсим в объект
   // .json() = JSON.parse(js_string);
   return await response.json();
};

export async function getForecastWeather(data) {
  
   const response = await fetch(weather_api_url + '/forecast?' + new URLSearchParams({
    lat: cities[data.city].lat,
    lon: cities[data.city].lng,
    units: data.unit,
    lang: data.language,
    appid: weather_api_key
   }));

   return await response.json();
}
    
