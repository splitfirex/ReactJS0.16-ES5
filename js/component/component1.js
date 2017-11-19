var Cp1 = createReactClass({

    getInitialState: function () {
        return {}
    },
    
    render: function () {
        return <div onClick={this.props.onClick}>Testing! {this.props.hello}</div>;
    }
});
