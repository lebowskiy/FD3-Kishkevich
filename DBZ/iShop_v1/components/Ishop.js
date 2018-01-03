import React from "react";
import PropTypes from 'prop-types';

import IshopProductList from './Ishop_ProductList';
import './App.scss';


class Ishop extends React.PureComponent {

    static propTypes = {
        cbChanged:  PropTypes.func,
    };
    static defaultProps = {
        itemObj: null,
        modeAdd: false,
        itemlist: [
            {
                id: "232136",
                titleProduct: "Samsung Galaxy S8",
                imgName: "./images/galaxy-s8.png",
                inStock: "5",
                price: "1 100 бел.руб.",
                productDescription: "Главная особенность дизайна - это практически полное отсутствие боковых рамок и закругленные края экрана. Какую бы из диагоналей – 5,8” или 6,2” – Вы ни выбрали, благодаря симметричному дизайну и эргономике вам будет удобно пользоваться смартфоном даже одной рукой.",
            },
            {
                id: "232sadas136",
                titleProduct: "Samsung Galaxy Note 8",
                imgName: "./images/note-8.png",
                inStock: "10",
                price: "1 890 бел.руб.",
                productDescription: "Экран Galaxy Note8 с диагональю 6,3\" – больше пространства для новых возможностей. Он стал еще больше, но по-прежнему легко помещается в руке. С электронным пером S Pen у вас еще больше возможностей для самовыражения. Создавайте собственные эмоджи и даже уникальные анимированные сообщения. С электронным пером S Pen все имеет значение.",
            },
            {
                id: "23213asdas6",
                titleProduct: "Samsung Galaxy A",
                imgName: "./images/galaxy-a.png",
                inStock: "10",
                price: "850 бел.руб.",
                productDescription: "Плавные линии корпуса, отсутствие выступов камеры, утонченная и элегантная отделка позволяют получить настоящее удовольствие от использования смартфона. Будьте законодателями трендов, а не просто следуйте им. Стильные цветовые решения идеально гармонируют с корпусом из стекла и металла, создавая динамичный и цельный образ. Три модных цвета на выбор превосходно дополнят ваш стиль.",
            },
            {
                id: "23dsad2136",
                titleProduct: "Samsung Galaxy J7",
                imgName: "./images/galaxy-j.png",
                inStock: null,
                price: "754 бел.руб.",
                productDescription: "Samsung Galaxy J7 - это пример того, когда стиль находится в гармонии с функциональностью. Созданный с вниманием к деталям, Galaxy J7 отличается удивительным гладким корпусом из металла. Отсутствие выступа камеры обеспечивает более комфортное ощущение телефона в руке. Смартфон обладает Full HD экраном 5,5”, а защитное стекло 2.5D гарантирует большую прочность.",
            },
        ],
    };

    classComp = "Ishop";

    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    };
    componentWillMount() {
        this.prepareProps( this.state );
    }

    componentWillReceiveProps( newProps ) {
        this.prepareProps( newProps );
    }
    prepareProps = ( props ) => {
        let newState = {
            ...Ishop.defaultProps,
        };

        let value = null;
        if ( this.isExists( props ) ) {
            newState = {
                ...newState,
                ...props,
            };
        }

        if ( this.isExists( this.state.value ) ) { value = this.state.value; }

        value = ( value !== null ) ? value : '';

        this.setState( {
            ...newState,
            value: value,
        }, () => {

        } );
    };

    changed = ( value ) => {
        if ( this.state.cbChanged ) { this.state.cbChanged( value ) }
    };

    isNotEmpty = ( value ) => ( value !== null && value !== undefined && value.length > 0 );
    isExists = ( value ) => ( value !== undefined && value !== null );


    render() {
        return (
            <div className={ this.classComp }>
                <IshopProductList itemList = { this.state.itemlist }/>
            </div>
        );
    }
}

export default Ishop;