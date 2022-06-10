import React, { useEffect, useRef } from "react";
import { Container, Form, Col, Row } from "react-bootstrap";
import cities from "./cities.json";
import dataTypes from "./type.json";

export default function FormComponent(props) {

  //useRef используется, как доступ получить доступ в браузерный/обычный DOM. 
  //Реакт - это фиртуальный дом, и он же создает обычный дом который видно в браузере. 
  //что бы назначить на какой элемент мы будем ссылаться, мы используем трибут ref={} в HTML ili JSX
  // мы получаем все дерево DOM в объекте current .formElement.current
  const formElement = useRef(null);

  // useEffect по большей степени ипользуется для работы с обычным DOM
  // useEffect запускаетмся, когда рендер компонента закончился
  // useEffect не влияет на состояние компонета, он не запускает ренер или ререндер в отличии от useState
  useEffect(() => {
    if (props.form === null) {
      props.setForm({
        city: props.selectedCity,
        unit: props.unit,
      });
    }
  });

  // он запускается при введении данных от пользователя в импут HTML тегов
  // input существует только в формах и инпут тегов

  function OnInput() {
    // в самом обработчике стоит функция, берущая наш reference (ссылку) на элемент/форму DOM, и назначает ему новое событие
    // Это новое событие запуска submit функцию формы.
    console.log(formElement);

    formElement.current.dispatchEvent(
      new Event("submit", { cancelable: true, bubbles: true })
    );
  }

  //onInput i onSubmit = это эвенты(события), который запускает браузер = события ХТМЛ - это вещи, которые происходят в элементами.
  // события исходят из браузера
  // у события должен быть обработчик, а это - javascript функция 
  // событие передает обработчику 1. DOM структуру элеменьа, на котором висит прослушка события 
  // event.target - тут будет вся DOM структура


  // form используется для получения данных от пользователя и послать их на сервер для обработки 
  // Form использует два главных протакола post i get 
  // post отправляет данные
  // get для получения данных
  // По умолчанию он отправляет данные через метод post, а если хотим поменять прописываем метод = "get"
  // v Form используются инпут теги для сбора данных

  //v reacte каждый элемент должен быть уникальным, это нужно для отслеживания любых изменений в компоненте. Тем самым рендерить только
  // то что необходимо
  //
  return (
    <Container>
      <Form
        ref={formElement}
        onInput={OnInput}
        onSubmit={props.handleOnSubmitForm}>
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="city">
              <Form.Label>Choose city</Form.Label>
              <Form.Select
                defaultValue={(props.cookie || {}).city || props.selectedCity}
                name="city"
                aria-label="Default select example">
                <option>Open this select menu</option>
                {cities.map((city, i) => (
                  <option value={i} key={city.name}>
                    {city.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="language">
              <Form.Label>Choose language</Form.Label>
              <Form.Select
                defaultValue={(props.cookie || {}).language || props.language}
                name="language"
                aria-label="Default select example"
              >
                <option>Choose language</option>
                {["en", "fi", "ru"].map((language) => (
                  <option key={language}>{language}</option>
                ))}
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="unit">
              <Form.Label>Choose unit</Form.Label>
              {["standard", "metric", "imperial"].map(unit => {

                let isChecked = props.unit === unit;
                if ((props.cookie || {}).unit) {
                  isChecked = props.cookie.unit === unit;
                }

                return (<Form.Check
                  key={unit}
                  id={unit}
                  name="unit"
                  type="radio"
                  defaultChecked={isChecked}
                  label={unit}
                  value={unit}
                />)
              }
              )}
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="dataType">
              <Form.Label>Choose Data type</Form.Label>
              {dataTypes.map(dtype => {

                let isSelected = props.dataType.value === dtype.value;
                if ((props.cookie || {}).excludeDataType) {
                  let exclude = props.cookie.excludeDataType.find(type => type.value === dtype.value);
                  if (exclude) {
                    isSelected = false;
                  } else {
                    isSelected = true;
                  }
                }
                return (
                  <Form.Check
                    key={dtype.value}
                    id={dtype.value}
                    type="checkbox"
                    name="dataType"
                    defaultChecked={isSelected}
                    label={dtype.label}
                    value={dtype.value}
                  />
                )
              }

              )}
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

FormComponent.defaultProps = {
  selectedCity: 0,
  language: "en",
  dataType: dataTypes.find((type) => type.label === "Daily"),
  unit: "metric",
};
