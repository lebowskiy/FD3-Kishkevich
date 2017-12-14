import React from 'react';
import PropTypes from 'prop-types';


import './App.css';

class Filter extends React.PureComponent {

    static propTypes = {
        arrItems:           PropTypes.array,
        searchItem:        PropTypes.string,

    };
    static defaultProps = {
        arrItems: null,
        searchItem: "",
        isSort: false,
    };

    classComp = "Filter";

    constructor(props) {
        super(props);
        this.state = {
            ...props
        }
    };
    componentWillMount(props) {
        this.handleSort(props)
    }
    componentWillReceiveProps(nextProps) {
        this.handleSort(nextProps)
    }

    sortArray = (elem1,elem2) => {
        let x = elem1.title.toLowerCase();
        let y = elem2.title.toLowerCase();
        if (x < y) {return -1;}
        if (x > y) {return 1;}
        return 0;
    };

    handleSearch = (e) => {
        let findingItem = e.target.value.toLowerCase();
        this.setState ({
            searchItem: findingItem,
            isSearch: true,
        }, () => {
            console.log("searchItem", this.state.searchItem)
        });
    };

    handleSort = () => {
        let getArray = [...this.state.arrItems];
        if ( !this.state.isSort ) {
            let getSortArr = getArray.sort(this.sortArray);
            this.setState({
                isSort: true,
                arrItems: getSortArr,
            }, () => {
            })
        } else {
            this.setState({
                isSort: false,
                arrItems: this.props.arrItems,
            }, () => {
            })
        }
    };


    isNotEmpty = ( value ) => ( value !== null && value !== undefined && value.length > 0 );

    renderInput = () => {
      return (
          <div className = { this.classComp + "__header" }>
              <input type = "text"
                     className = { this.classComp + "__search" }
                     onChange = { this.handleSearch }/>
              <input type = "checkbox"
                     className = { this.classComp + "__sort" }
                     checked = { this.state.isSort }
                     onChange = { this.handleSort }/>
          </div>


      )
    };

    renderItems = () => {
        let searchItem = this.state.searchItem.trim().toLowerCase();
        let copyArr = [...this.state.arrItems];
        let filtredArr = [];
        if ( this.isNotEmpty( searchItem ) ) {
            filtredArr = copyArr.filter( ( item ) => {
                return item.title.toLowerCase().match( searchItem )
            } );
            return (
                filtredArr.map((item,index) => {
                    return (
                        <li key = { index }
                            className = { this.classComp + "__item" }>
                            { item.title }
                        </li>
                        )
                })
            )
        } else {
            return (
                copyArr.map( ( item, index ) => {
                    return (
                        <li className = { this.classComp + "__item" }
                            key = { index }>
                            { item.title }
                        </li>
                    )
                } )
            )

        }
    };

    render() {
    return (
          <div className={ this.classComp }>
              <h3>Продукты</h3>
              { this.renderInput() }
              <ul className={ this.classComp + "__list" }>

                  { this.renderItems() }
              </ul>
          </div>
    );
  }
}

export default Filter;
