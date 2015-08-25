## Confirmation

Confirmation Component

```js
var React = require('react');
var ConfirmationAction = require('fluxes/actions/confirmation');
var Confirmation = require('fluxes/components/confirmation.jsx');

module.exports = React.createClass({
  deleteUser: function() {
    ConfirmationAction.ask({
      message: 'Do you really want to delete this user?',
      onConfirmed: function() {
        alert('Deleted');
      },
      onCancelled: function() {
        alert('Cancelled');
      }
    })
  },

  render: function() {
    return (
      <div>
        <button className="btn btn-primary"
                onClick={this.deleteUser}>
          Delete User
        </button>

        <Confirmation/>
      </div>
    );
  }
});

```