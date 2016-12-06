import { Component } from 'react';
import Modal from 'react-modal';

import Users from './Users.jsx';
import * as constants from '../constants/constants';

class ReactModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
        modalIsOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentWillReceiveProps(nextProps) {
      this.setState({
          modalIsOpen: nextProps.modalIsOpen
      });
  }

  openModal() {
    this.props.openModal();
  }

  closeModal() {
    this.props.closeModal();
  }

  render() {

    const {
        ADD_USER,
        CLOSE,
        ADD_USERS_ENTRY,
        EMAIL,
        FIRST_NAME,
        LAST_NAME
    } = constants;

    const {
        modalIsOpen
    } = this.state;
    return (
      <div>
        <a className="button is-primary add-user-btn" onClick={this.openModal}>{ADD_USER}</a>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={this._closeModal}
            className="ModalClass"
            overlayClassName="OverlayClass"
            contentLabel={ADD_USER}>
            <div>{ADD_USERS_ENTRY}</div>
            <form>
                <label>{EMAIL}</label>
                <input type="text" />
                <label>{FIRST_NAME}</label>
                <input type="text" />
                <label>{LAST_NAME}</label>
                <input type="text" />
                <a className="button is-primary add-user-btn" onClick={this.closeModal}>{CLOSE}</a>
            </form>
        </Modal>
      </div>
    );
  }
}

export default ReactModal;
