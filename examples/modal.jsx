var React = require('react');
var Modal = require('fluxes/components/modal.jsx');

module.exports = React.createClass({
  openModal: function() {
    this.refs.modal.open();
  },

  closeModal: function() {
    this.refs.modal.close();
  },

  alert: function(message) {
    alert(message);
  },

  render: function() {
    return (
      <div>
        <button className="btn btn-primary"
                onClick={this.openModal}>
          Open Modal
        </button>

        <Modal title="Modal Example"
               onClose={this.alert.bind(this, 'The modal is closed')}
               onOpen={this.alert.bind(this, 'The modal will open')}
               ref="modal">
          <div className="modal-body">
            This is a modal example
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary" onClick={this.closeModal}>OK</button>&nbsp;
            <button className="btn btn-default" data-dismiss="modal">Cancel</button>
          </div>
        </Modal>
      </div>
    );
  }
});
