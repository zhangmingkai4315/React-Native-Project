var Ctrip = React.createClass({

  render: function() {
    return (
      <ul>
        <li>Ctrip</li>
        <li>{this.props.children}</li>
      </ul>
    );
  }

});

var Elong=React.createClass({
  render:function(){
    return (
      <ul>
        <li>elong</li>
      </ul>
    )
  }
})

var root=<Ctrip><Elong/></Ctrip>;
console.log(root)
