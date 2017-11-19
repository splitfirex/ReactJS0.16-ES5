var Cp2 = createReactClass({

    getInitialState: function () {
        return {}
    },

    _onClick: function () {
        alert("Click working");
    },

    render: function () {
        return <Cp1 onClick={this._onClick} hello={this.props.hello}></Cp1>;
    }
});

Cp2.defaultProps = {
    hello: 'Hello Mary',
}