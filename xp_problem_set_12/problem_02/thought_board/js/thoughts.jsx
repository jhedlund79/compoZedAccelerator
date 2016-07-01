var InterfaceComponent = React.createClass({
  getInitialState : function() {
    return {
      first : "chris",
      last  : "pitt"
    };
  },
  handleClick : function() {
    this.replaceState({
      first : "bob"
    });
  },
  render : function() {
    return (<div onClick={this.handleClick}>
      hello { this.state.first + " " + this.state.last }
    </div>)
  }
});

ReactDOM.render(<InterfaceComponent />, document.getElementById('entry-point'));
