import React from "react";
import PropTypes from 'prop-types';

import Ishop_item from "./Ishop_item";

class Ishop_ProductList extends React.PureComponent {

    static propTypes = {
        itemList:       PropTypes.array,
        currIndex:      PropTypes.number,
        isActive:       PropTypes.bool,
        modeAddNew:     PropTypes.bool,

    };
    static defaultProps = {
        itemList:           null,
        currIndex:          0,
        isActive:           false,
        modeAddNew:         false,
    };

    classComp = "Ishop_ProductList";

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
        let state = {
            ...Ishop_ProductList.defaultProps,
        };
        let value = null;
        if ( props !== null && props !== undefined ) {
            state = {
                ...state,
                ...props,
                options: {
                    ...state.options,
                }
            };
            if ( props.options !== null && props.options !== undefined ) {
                state.options = {
                    ...state.options,
                    ...props.options,
                }
            }
            if ( props.defValue !== null && props.defValue !== undefined ) {
                value = props.defValue;
            }
        }


        value = ( value !== null ) ? value : '';

        if ( state.itemList !== null && state.itemList !== undefined && state.itemList.length > 0 ) {
            state.itemList = state.itemList.map( ( item, index ) => {
                return {
                    ...item,
                    arrItemIndex:   index,
                    isSelected:     ( item[ state.asValue ] === value ),
                }
            } );
        }

        this.setState( {
            ...state,
            value: value,
        }, () => {
            console.log( '%c%s', 'color: green', 'Ishop_ProductList: prepareProps: state: ',
                this.state );
        } );
    };


    isNotEmpty = ( value ) => ( value !== null && value !== undefined && value.length > 0 );
    isExists = ( value ) => ( value !== undefined && value !== null );

    getThisProduct = (e) => {
        let clickProduct = e.target.dataset.index;

        this.setState({
            checkedIndex: parseInt(clickProduct, 10),
        }, () => {
            console.log("checkedIndex", this.state.checkedIndex)
        })
    };

    handleOptionChange = (changeEvent) => {
        let indexActive = changeEvent.currentTarget.dataset.index;
        this.setState({
            currIndex: parseInt(indexActive,10),
        }, () => {
        })
    };
    addNewItem = (value) => {
        let copyArr = [...this.state.itemList];
        copyArr.push(value);
        this.setState({
            itemList: copyArr,
            modeAddNew: !this.state.modeAddNew,
        }, () => {
        })
    };
    addNewProduct = () => {
        this.setState({
            modeAddNew: true,
        })
    };
    cancelEdit = (value) => {
        this.setState({
            modeAddNew: value,
        })
    };

    renderItems = () => {
        return (
            this.state.itemList.map( ( item, index ) => {
                return(
                    <li className={ this.classComp + "__product" } key={index}>
                        <input type ="radio"
                               id = { this.classComp + "__input-" + index }
                               data-index = { index }
                               className = { this.classComp + "__item-input" }
                               checked = { ( this.isExists( this.state.currIndex ) )
                                   ? this.state.currIndex === item.arrItemIndex
                                   : this.state.defIndex === item.arrItemIndex }
                               onChange = { () => {} }
                               onClick = { this.handleOptionChange }
                               value = { item.value }/>
                        <label htmlFor={ this.classComp + "__input-" + index } className={ this.classComp + "__label" }>
                            { item.titleProduct }
                        </label>
                    </li>

                )
            })
        )

    };

    render() {
        return (
            <div className={ this.classComp }>
                <div className={ this.classComp + "__header" }>
                    Продукция Samsung
                </div>
                <div className={ this.classComp + "__content" }>

                    <ul className={ this.classComp + "__product-list"}>
                        {this.renderItems()}
                        <li className={ this.classComp + "__add-product" }
                            onClick={ this.addNewProduct }>
                            + Добавить модель
                        </li>
                    </ul>
                    <Ishop_item itemObj = { this.state.itemList[this.state.currIndex] }
                                cbChanged= { this.addNewItem }
                                cbMode= { this.cancelEdit }
                                modeAdd = { this.state.modeAddNew }/>
                </div>
            </div>
        );
    }
}

export default Ishop_ProductList;