import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import HeaderComponent from "./Header/HeaderComponent";
import dataTypes from "./Header/type.json";
import { useCookies } from "react-cookie";
import CurrentComponent from "./Body/CurrentComponent";
import { Routes, Route } from 'react-router-dom';
import ForecastComponent from "./Body/ForecastComponent";


function App() {
  const [form, setForm] = useState(null);

  const [cookies, setCookie] = useCookies(['weather']);

  console.log(cookies.weather);

  function handleOnSubmit(event) {

    event.preventDefault();

    const city = event.target.city.value;
    const unit = event.target.unit.value;
    let selectedTypes = [];

    for (const dtype of event.target.dataType) {
      if (dtype.checked === true) {
        selectedTypes.push(dtype.value);
      }
    }

    let excludeDataType = dataTypes.filter(
      (dtype) => !selectedTypes.includes(dtype.value)
    );

    const language = event.target.language.value;
    const updateData = {
      city,
      unit,
      language,
      excludeDataType,
    }

    setForm(updateData);
    setCookie('weather', updateData)
  }

  // Мы оставили хедерКомпонент статичным при изменении ссылки
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
            setCookie={setCookie}
          />
        </Col>
      </Row>
      <Row>
        <Col>
        {/* Внутки компонента Routes описываем ссылки
        Каждая ссылка это Route компонет, который запускается при ссылке определенной в path="/"
        В элемент пишем компонент, который будет обрабатываться.
        что бы передать любой параметр в компонент в Route path пишется двоеточие и завание переменной. :city = Tallinn
        */}
          <Routes>
            <Route path="/" element={ <CurrentComponent form={form} cookie={cookies.weather} /> }/>
            <Route path="/current/:city" element={ <CurrentComponent form={form} cookie={cookies.weather} /> }/>
            <Route path="/forecast" element={ <ForecastComponent form={form} cookie={cookies.weather} /> }/>
          </Routes>
        </Col>
      </Row>
    </Container>
  );
}


export default App;

            
            

