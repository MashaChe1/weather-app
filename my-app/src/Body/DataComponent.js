import React from "react";
import { Table } from "react-bootstrap";
import { sentenceCase } from 'change-case';


export default function DataComponent(props) {

   // мы может передать React element функцию, которая вернет массив, а React сам его обработает

   function generateRows() {
      if (props.weather) {
         const tr = [];

         // for loop которая берет данные из props.weather что является ответом с сервера
         // Object.entries = предварительно определенная функция js, которая работает с объектами. типо Array, String
         // она возвращает массив в котором лежат данные объекта в виде массива с двумя элементами
         // 1. ключ или название объекта, 2. его значение. [[key, value] [key, value]]
         // {key1: 'value1', key2: 'value2', key3: 'value3' } = [[key1, value1 ],[key2, value2],[key3, value3]]
         for (const [key, value] of Object.entries(props.weather.main)) {

            // .push для добовления элементов в массив 
            tr.push (<tr key={key}>
               <td>{sentenceCase(key)}</td>
               <td>{value}</td>
            </tr>)
         }

         tr.push (<tr key="description">
            <td>Description</td>
            <td>{props.weather.weather[0].description}</td>
         </tr>)

         return tr;
      }
   }
   return (
      <Table striped>
         <thead>
            <tr>
               <th>Data</th>
               <th>Value</th>
            </tr>
         </thead>
         <tbody>
            {generateRows()}
         </tbody>
      </Table>
   )
}