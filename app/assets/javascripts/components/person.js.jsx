/** @jsx React.DOM */

var Person = React.createClass({
  render: function() {
    return (
      <div className="person">
        <strong>{this.props.person.email}</strong>
      </div>
    );
  }
});