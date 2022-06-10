import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import HeaderComponent from "./Header/HeaderComponent";
import dataTypes from "./Header/type.json";
import MapComponent from "./Body/MapComponent";
import { useCookies } from "react-cookie";

function App() { // главный компонент Реакта, который рендериться в наш главный див с айди Руут 
  const [form, setForm] = useState(null); 
  //useState это хук который отвечает за состояние компонента.
  // Все хуки в реакте начинаются с словом use.
  // useState возвращает массив с двумя элементами: 1.текущее значение состояния и 2. функцию для его обновления. 
  // при обновлении состояния у нас происходит Rerender компонента и реакт подхватывает это и отправляет в наш браузер. 
  // useState как и многие хуки принимают параметры - значения начального состояния.  вэтом примере значение НОЛЬ. 

  const [cookies, setCookie, removeCookie] = useCookies(['weather']);

  // это хук с бополнительного пакета npm react-cookie.
  // useCookie принимает массив с названиями будущих Печенек.
  // useCookie возвращиет так же массих с 3 элементами: 1. объект: cookie = {weather: null}; 2. функция которая назначает и создает наш кууки. 3. функция которая удаляет наш куукие
  // useCookie не обновляет (render) компонент.

  console.log(cookies.weather);
  // Для выведения информации в DeveloperTools



  // обработчик submit события
  function handleOnSubmit(event) {
    //запрещаем ему действовать по умолчанию
    event.preventDefault();
    // получаем информацию от пользователя, то что он вписал в инпут
    // event.valut = {событие}.{данныйДом}.{имяТега}.{егоЗначение}
    const city = event.target.city.value;
    const unit = event.target.unit.value;
    let selectedTypes = [];

    for (const dtype of event.target.dataType) {
      if (dtype.checked === true) {
        selectedTypes.push(dtype.value);
      }
    }

    // filter как и forEach i map i for проходит по всему массиву [] но оставляет только нужные значения
    // filter вернет массив с нужными данными 
    // .includes смотрит на массив и ищет есть ли в нем значения полученные из аргумента(в этом примере это dataType).
    // и возвращает true ili false
    let excludeDataType = dataTypes.filter(
      (dtype) => !selectedTypes.includes(dtype.value)
    );
    // console.log(selectedTypes);
    const language = event.target.language.value;
    const updateData = {
      city,
      unit,
      language,
      excludeDataType,
    }

    // setForm - это функция, меняющая - state (состояние) компонента и запускает ререндер
    setForm(updateData);
    // создание cookies 
    setCookie('weather', updateData )
  }

  // наш компонент должен возвращать всегда реакт элемент: JSX 
  // JSX: javascript s html, который совмещает их спобности вместе.
  // JSX требует root элемент, у него должен быть один главный элемент: html ili react component
  // для указания Javascript используется фигурные скобки 
  // Properties передаются в компонет как атрибут HTML
  return (
    <Container>
      <Row>
        <Col>
          <HeaderComponent
            firstName="Mary"
            handleOnSubmitForm={handleOnSubmit}
            setForm={setForm}
            form={form}
            cookie={cookies.weather}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <MapComponent 
          form={form} 
          cookie={cookies.weather} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
