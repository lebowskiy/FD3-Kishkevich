import React from "react";
import PropTypes from 'prop-types';

import samsungs8 from './img/galaxy-s8.png';
import galaxynote8 from './img/note-8.png';
import galaxya from './img/galaxy-a.png';
import galaxyj from './img/galaxy-j.png';

class Ishop_item extends React.PureComponent {

    static propTypes = {
        itemObj: PropTypes.object,
        modeAdd: PropTypes.bool,

    };
    static defaultProps = {
        itemObj: null,
        modeAdd: true,
    };

    classComp = "Ishop_item";

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
            ...Ishop_item.defaultProps,
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


    isNotEmpty = ( value ) => ( value !== null && value !== undefined && value.length > 0 );
    isExists = ( value ) => ( value !== undefined && value !== null );


    renderImg = () => {
        switch (this.state.itemObj.imgName) {
            case "GalaxyS8":
                return samsungs8;
            case "GalaxyNote8":
                return galaxynote8;
            case "GalaxyA":
                return galaxya;
            case "GalaxyJ":
                return galaxyj;
            default:
                return null;
        }
    };

    renderDefItem = () => {
        return (
            <div className={ this.classComp + "__default" }>
                <div className={ this.classComp + '__img-box'}>
                    <img src={this.renderImg()} alt = {this.state.itemObj.titleProduct} className={ this.classComp + '__img-box__image' }/>
                </div>
                <div className={ this.classComp + '__content-box' }>

                    <div className={ this.classComp + '__content-box__title' }>
                        { this.state.itemObj.titleProduct }
                    </div>
                    <div className={ this.classComp + '__content-box__description' }>
                        Описание
                        <p>
                            { this.state.itemObj.productDescription }                      </p>
                    </div>
                    <div className={ this.classComp + '__content-box__price' }>
                        Цена:
                        <span>
                            { this.state.itemObj.price }
                        </span>
                    </div>
                    <div className={ this.classComp + '__content-box__in-stock' }>
                        Кол-во:
                        <span className={ (this.isNotEmpty(this.state.itemObj.inStock)) ? "" : "disable" }>
                            { (this.isNotEmpty(this.state.itemObj.inStock)) ? this.state.itemObj.inStock : "Нет в наличии"}
                        </span>
                    </div>
                    <button className={ this.classComp + '__content-box__button' }>
                        Купить
                    </button>
                </div>
            </div>
        )
    };

    renderNewItemEditor = () => {
        return (
            <div className={ this.classComp + "__add-product" }>
                <div className={ this.classComp + '__img-box'}>
                </div>
                <div className={ this.classComp + '__content-box' }>
                    <div className={ this.classComp + '__content-box__title' }>
                        Название модели:
                        <input type="text"/>
                    </div>
                    <div className={ this.classComp + '__content-box__description' }>

                    </div>
                    <div className={ this.classComp + '__content-box__price' }>

                    </div>
                    <div className={ this.classComp + '__content-box__in-stock' }>
                    </div>
                </div>
            </div>
        )
    };

    render() {
        return (
            <div className={ this.classComp }>
                {
                    (this.state.modeAdd === false) ?
                        this.renderDefItem()  :
                        this.renderNewItemEditor()
                }
            </div>
        );
    }
}

export default Ishop_item;