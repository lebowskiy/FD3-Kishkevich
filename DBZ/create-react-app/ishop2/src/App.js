import React, { Component } from 'react';
import './App.css';
import Ishop_ProductList from './Ishop_ProductList';

class App extends Component {
    itemlist = [
        {
            titleProduct: "Samsung Galaxy S8",
            imgName: "GalaxyS8",
            inStock: "5",
            price: "1 100 бел.руб.",
            productDescription: "Главная особенность дизайна - это практически полное отсутствие боковых рамок и закругленные края экрана. Какую бы из диагоналей – 5,8” или 6,2” – Вы ни выбрали, благодаря симметричному дизайну и эргономике вам будет удобно пользоваться смартфоном даже одной рукой.",
        },
        {
            titleProduct: "Samsung Galaxy Note 8",
            imgName: "GalaxyNote8",
            inStock: "10",
            price: "1 890 бел.руб.",
            productDescription: "Экран Galaxy Note8 с диагональю 6,3\" – больше пространства для новых возможностей. Он стал еще больше, но по-прежнему легко помещается в руке. С электронным пером S Pen у вас еще больше возможностей для самовыражения. Создавайте собственные эмоджи и даже уникальные анимированные сообщения. С электронным пером S Pen все имеет значение.",
        },
        {
            titleProduct: "Samsung Galaxy A",
            imgName: "GalaxyA",
            inStock: "10",
            price: "850 бел.руб.",
            productDescription: "Плавные линии корпуса, отсутствие выступов камеры, утонченная и элегантная отделка позволяют получить настоящее удовольствие от использования смартфона. Будьте законодателями трендов, а не просто следуйте им. Стильные цветовые решения идеально гармонируют с корпусом из стекла и металла, создавая динамичный и цельный образ. Три модных цвета на выбор превосходно дополнят ваш стиль.",
        },
        {
            titleProduct: "Samsung Galaxy J7",
            imgName: "GalaxyJ",
            inStock: null,
            price: "754 бел.руб.",
            productDescription: "Samsung Galaxy J7 - это пример того, когда стиль находится в гармонии с функциональностью. Созданный с вниманием к деталям, Galaxy J7 отличается удивительным гладким корпусом из металла. Отсутствие выступа камеры обеспечивает более комфортное ощущение телефона в руке. Смартфон обладает Full HD экраном 5,5”, а защитное стекло 2.5D гарантирует большую прочность.",
        },
    ];

  render() {
    return (
        <div>
            <Ishop_ProductList itemList = {this.itemlist}/>
        </div>
    );
  }
}

export default App;
