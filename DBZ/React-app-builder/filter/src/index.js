import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Filter from './App';
import registerServiceWorker from './registerServiceWorker';

let arrItems = [
    {
        title: 'Хлеб',
    }, {
        title: 'Батон',
    }, {
        title: 'Сметана',
    }, {
        title: 'Пиво',
    }, {
        title: 'Творог',
    }, {
        title: 'Гречка',
    }, {
        title: 'Масло сливочное',
    }, {
        title: 'Сыр твердый',
    }, {
        title: 'Кетчуп',
    }, {
        title: 'Картошка',
    }, {
        title: 'Пельмени',
    }, {
        title: 'Свинина',
    }, {
        title: 'Кефир',
    }, {
        title: 'Молоко',
    }, {
        title: 'Йогурт',
    },{
        title: 'Ягоды',
    },{
        title: 'Кондитерские изделия',
    },{
        title: 'Говядина',
    },{
        title: 'Квас',
    },{
        title: 'Чай',
    },{
        title: 'Кофе',
    },
];

ReactDOM.render(<Filter arrItems = { arrItems } />, document.getElementById('root'));
registerServiceWorker();
