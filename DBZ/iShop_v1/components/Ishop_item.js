import React from "react";
import ReactDOM from "react-dom";
import PropTypes from 'prop-types';


class IshopItem extends React.PureComponent {

    static propTypes = {
        itemObj:    PropTypes.object,
        modeAdd:    PropTypes.bool,
        cbChanged:  PropTypes.func,
        cbMode:     PropTypes.func,
        cbDelete:   PropTypes.func,

    };
    static defaultProps = {
        itemObj: null,
        modeAdd: false,
        modeEdit: false,
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
            ...IshopItem.defaultProps,
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

    cancelEdit = () => {
      this.setState({
          modeAdd: false,
          modeEdit: false,
      },() => {
          this.state.cbMode(this.state.modeAdd)
      })
    };

    validForm = (e) => {
        if(e.currentTarget.value.length <= 0) {
            e.currentTarget.value = "введите данные"
        } else {
            console.log('e.currentTarget.dataset.type',e.currentTarget.dataset.type);
            switch (e.currentTarget.dataset.type) {
                case "url":
                    this.setState({
                        imgUrl: e.currentTarget.value
                    }, () => {
                        console.log("url", this.state.imgUrl)
                    });
                    break;
                case "title":
                    this.setState({
                        title: e.currentTarget.value
                    }, () => {
                        console.log("title", this.state.title)
                    });
                    break;
                case "description":
                    this.setState({
                        description: e.currentTarget.value
                    }, () => {
                        console.log("description", this.state.description)
                    });
                    break;
                case "price":
                    this.setState({
                        price: e.currentTarget.value
                    }, () => {
                        console.log("price", this.state.price)
                    });
                    break;
                case "stock":
                    this.setState({
                        stock: e.currentTarget.value
                    }, () => {
                        console.log("stock", this.state.stock)
                    });
                    break;
            }
        }
    };

    clearForm = (e) => {
        if (e.currentTarget.value)
        e.currentTarget.value = ""
    };

    saveAttributes = () => {
        console.log("newObject", this.state.newObject);
        let newObject = {};
        if(this.state.imgUrl !== undefined && this.state.title !== undefined) {
            if(this.state.description !== undefined && this.state.price !== undefined) {
                if(this.state.stock !== undefined) {
                    this.setState({
                        newObject: {
                            titleProduct: this.state.title,
                            imgName: this.state.imgUrl,
                            inStock: this.state.stock,
                            price: this.state.price,
                            productDescription: this.state.description,
                        },
                        modeAdd: false,
                    }, () => {
                        this.changed(this.state.newObject);
                        console.log("newObject", this.state.newObject);
                    });


                }
            }
        }

    };

    saveEdits = () => {
        if(this.state.imgUrl !== undefined && this.state.title !== undefined) {
            if ( this.state.description !== undefined && this.state.price !== undefined ) {
                if ( this.state.stock !== undefined ) {
                    this.setState( {
                        itemObj: {
                            titleProduct: this.state.title,
                            imgName: this.state.imgUrl,
                            inStock: this.state.stock,
                            price: this.state.price,
                            productDescription: this.state.description,
                        },
                        modeEdit: false,
                    }, () => {
                        // this.changed(this.state.itemObj);
                        console.log( "newObject", this.state.itemObj );
                    } );
                }
            }
        }
    };

    editItem = (e) => {
        console.log("this.state.itemObj",this.state.itemObj);
        this.setState({
            modeEdit: true,
        })
    };

    deleteItem = (e) => {
        let currentItem = this.state.itemObj.id;
        console.log("current", currentItem);
        let isDelete = confirm("Вы действительно хотите удалить?");
        if(isDelete === true) {
            this.state.cbDelete(currentItem);
        } else {
            null;
        }


    };

    renderDefItem = () => {
        if(this.state.modeEdit === false) {
            return (
                <div className={ this.classComp + "__default" } data-index = { this.state.itemObj.id }>
                    <div className={ this.classComp + "__buttons-edit" }>
                        <button className={ this.classComp + "__button-edit" }
                                onClick={ (event) => this.editItem(event) }>
                            Редактировать
                        </button>
                        <button className={ this.classComp + "__button-delete" }
                                onClick={ (event) => this.deleteItem(event) }>
                            Удалить
                        </button>
                    </div>
                    <div className={ this.classComp + '__img-box'}>
                        <img src={this.state.itemObj.imgName}
                             alt = {this.state.itemObj.titleProduct}
                             className={ this.classComp + '__img-box__image' }/>
                    </div>
                    <div className={ this.classComp + '__content-box' }>

                        <div className={ this.classComp + '__content-box__title' }>
                            { this.state.itemObj.titleProduct }
                        </div>
                        <div className={ this.classComp + '__content-box__description' }>
                            Описание
                            <p>
                                { this.state.itemObj.productDescription }
                            </p>
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
        } else {
            return(
                <div className = { this.classComp + "__editor-container" }>
                    <div className = { this.classComp + "__editor" }>
                        <div className={ this.classComp + "__add-product-image" }>
                            <label htmlFor="">Введите URL картинки</label>
                            <input type="text"
                                   data-type="url"
                                   onFocus={this.clearForm}
                                   onBlur={this.validForm}/>
                        </div>
                        <div className={ this.classComp + "__add-product" }>
                            <div className={ this.classComp + '__content-box' }>
                                <div className={ this.classComp + '__content-box__title' }>
                                    <label htmlFor="title">Название модели:</label>
                                    <input type="text"
                                           defaultValue={ this.state.itemObj.titleProduct }
                                           id="title"
                                           data-type="title"
                                           onBlur={this.validForm} />
                                </div>
                                <div className={ this.classComp + '__content-box__description-new' }>
                                    <label htmlFor="description">Описание модели:</label>
                                    <textarea
                                        defaultValue={ this.state.itemObj.productDescription }
                                        id="description"
                                        data-type="description"
                                        onBlur={this.validForm}/>
                                </div>
                                <div className={ this.classComp + '__content-box__price-new' }>
                                    <label htmlFor="title">Цена модели:</label>
                                    <input type="text"
                                           id="title"
                                           defaultValue={ this.state.itemObj.price }
                                           data-type="price"
                                           onBlur={this.validForm}/>
                                </div>
                                <div className={ this.classComp + '__content-box__in-stock-new' }>
                                    <label htmlFor="title">Количество на складе:</label>
                                    <input type="text"
                                           id="title"
                                           defaultValue={ this.state.itemObj.inStock }
                                           data-type="stock"
                                           onBlur={this.validForm}/>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="buttons">
                        <button onClick = { this.saveEdits }>Сохранить</button>
                        <button onClick = { this.cancelEdit }>Отмена</button>
                    </div>
                </div>
            )
        }

    };

    renderNewItemEditor = () => {
        return (
            <div className = { this.classComp + "__editor-container" }>
                <div className = { this.classComp + "__editor" }>
                    <div className={ this.classComp + "__add-product-image" }>
                        <label htmlFor="">Введите URL картинки</label>
                        <input type="text"
                               data-type="url"
                               onFocus={this.clearForm}
                               onBlur={this.validForm}/>
                    </div>
                    <div className={ this.classComp + "__add-product" }>
                        <div className={ this.classComp + '__content-box' }>
                            <div className={ this.classComp + '__content-box__title' }>
                                <label htmlFor="title">Название модели:</label>
                                <input type="text"
                                       id="title"
                                       data-type="title"
                                       onBlur={this.validForm} />
                            </div>
                            <div className={ this.classComp + '__content-box__description-new' }>
                                <label htmlFor="description">Описание модели:</label>
                                <textarea
                                    id="description"
                                    data-type="description"
                                    onBlur={this.validForm}/>
                            </div>
                            <div className={ this.classComp + '__content-box__price-new' }>
                                <label htmlFor="title">Цена модели:</label>
                                <input type="text"
                                       id="title"
                                       data-type="price"
                                       onBlur={this.validForm}/>
                            </div>
                            <div className={ this.classComp + '__content-box__in-stock-new' }>
                                <label htmlFor="title">Количество на складе:</label>
                                <input type="text"
                                       id="title"
                                       data-type="stock"
                                       onBlur={this.validForm}/>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="buttons">
                    <button onClick = { this.saveAttributes }>Сохранить</button>
                    <button onClick = { this.cancelEdit }>Отмена</button>
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

export default IshopItem;