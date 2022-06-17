import React, {useState, useEffect} from "react";
import DataComponent from "./DataComponent";
import MapComponent from "./MapComponent";
import { getCurrentWeather } from "../apiService/weatherService";
import { useParams } from "react-router-dom";

export default function CurrentComponent (props) {

  const [ weather, setWeather ] = useState(null);


  // Для того что бы получить параметры вбитые в ссылку после знака вопроса используется хук useParams, который при наличии параметра назначает
  // переменную с ключом и значением.
  // useParams не связан с state (состояние) компонента 
  const params = useParams();
  
  
  const get = () => {

    const data = props.form || props.cookie;

    if (params.city) {
      data.city = params.city;
    }

    // getCurrentWeather возвращает нам Promis
    // что бы обработать объект мы должны использовать .then() в которую прописываем callBack функцию
    // callBack функция принимает то, что мы вернули из ассинхронной функции await response.json
    // .then запускается когда promis вернул позитивный ответ (resolved)

    getCurrentWeather(data)
      .then((response) => {
        setWeather(response);
        console.log('response', response);
    })

    // catch часть ассинхронной функции, которая запускается при наличии ошибки во всей структуре и при ответе (reject)
    // запустится если в getCurretWeather будет ошибка и если .then будет ошибка
      .catch((error) => {
      console.log('error in api call', error)
    });
  }

  // use Effect может следить за изменениями в переменных переданные ему - это называют dependency - зависимость.
  // Передаем в виде массива.
  // при любых изменениях в зависимостях запускается функция внутри useEffect
  
    useEffect (() => {
      if(props.form || props.cookie )
    get();
  }, [props.form, params]);

  

   return (
      <>
      <DataComponent {...props} weather={weather}/>
      {weather && (<MapComponent {...props} weather={weather}/>)}
      </>
   )
}