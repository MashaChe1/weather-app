import React from "react";
import NavComponent from "./NavComponent";
import FormComponent from "./FormComponent";

// функциональеый компонент
// все компоненты должны называться  с заглавной буквы, что бы JSX не путал его с HTML
// компоненты в реакте практически тоже самое что и функции в javascripte
// компонент принимает аргументы, которые называется properties-props.
// все пропетис, котрые были переданны компоненту хранятся в переменной 'props'.
// у компонента могут быть propertis по умолчанию 
// Properties нельзя изменить в компоненте, их модно изменить в компоненте, который их передал. 
// Коспонент должен возвращаь Реакт элемент JSX

export default function HeaderComponent(props) {
  // ... - speading v javascripte. 
  // spreading - смотрит все значения в объекте и передает их каждой по отдельности.
  // props = {name :'Mary', surname: 'Chebotareva'} = spreading = передаст в таком виде --> 
  // <FormComponent name="Mary" surname="Chebotareva">
  return (
    <>
      <NavComponent />
      <FormComponent {...props} /> 
    </>
  );
}

// properties(характеристики) по умолчанию передаются как объект.
// Default properties используются только в том случае, есть при использовании компонента -->
//не были переданны properties через атрибуты
HeaderComponent.defaultProps = {
  firstName: "Mary",
  lastName: "Chebotareva",
};
