var App = React.createClass({
  render: function(){
    return(
      <div>
        <input type='button' value='Hello World!' onClick={this.handleHelloWorldClick}/>
        <Form />
      </div>
    )
  },
  handleHelloWorldClick: function(){
    alert('Hi!');
  }
});

var Form = React.createClass({
  render: function(){
    return (
      <form onSubmit={this.handleSubmit}>
        <br/>
        <input type='text' onKeyPress={this.handleKeyPress}/>
        <br/>
        Checkbox time <input type='checkbox' onClick={this.handleCheckboxClick}/>
        <br/>
        <input type='submit' />
      </form>
    );
  },
  handleSubmit: function(e){
    e.preventDefault();
    console.log("SO AWESOME!");
  },
  handleKeyPress: function(e){
    console.log(e.charCode);
  },
  handleCheckboxClick: function(e){
    console.log('event :', e);
  }
});

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
    return <div onClick={this.handleClick}>
      hello { this.state.first + " " + this.state.last }
    </div>;
  }
});

ReactDOM.render(<InterfaceComponent />, document.getElementById('entry-point'));
