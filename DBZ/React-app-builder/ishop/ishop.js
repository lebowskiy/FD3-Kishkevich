var Ishop = React.createClass({

    displayName: 'Ishop',

    propTypes: {
        arrItems: React.PropTypes.array.isRequired,
    },

    render: function() {

        var buildProducts=this.props.arrItems.map( (item, index) => {
            console.log("count", item.count);
            return (
                React.DOM.div({
                    className:'Ishop__container'},
                    React.DOM.div({
                        className:'Ishop__item',
                        key:index},
                        React.DOM.div({
                            className: 'Ishop__item-title'
                        },item.title + " " + index),
                        React.DOM.img({
                            className: 'Ishop__item-img',
                            src: item.urlImg,
                        },),
                            React.DOM.div({
                                className: "Ishop__item-price " + (item.count.length > 0 ? "" : "underfined")
                            }, ((item.count.length > 0) ? "Price: " + item.price : "Товара нет в наличии")),
                            React.DOM.div({
                                className: 'Ishop__item-count ' + (item.count.length > 0 ? "" : "disabled")
                                },"Amount: " + item.count ),
                    ),
                )
            )
        })

        return React.DOM.div( {className:'Ishop'},
            React.DOM.div( {className:'Ishop'}, buildProducts ),
        );
    },

});