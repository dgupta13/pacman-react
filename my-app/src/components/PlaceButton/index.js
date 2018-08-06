import React from 'react'
import Modal from 'react-modal'

class PlaceButton extends React.Component {
  constructor () {
    super();
    this.state = {
      showModal: false
    };
    
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }
  
  handleOpenModal () {
    this.setState({ showModal: true });
  }
  
  handleCloseModal () {
    this.setState({ showModal: false });
  }
  
  render () {
    return (
      <div>
        <button onClick={this.handleOpenModal}>PLACE</button>
        <Modal 
           isOpen={this.state.showModal}
           ariaHideApp={false}
        >
        <form>
           X: <input name="xValue" type="text" />
           Y: <input name="yValue" type="text" />
           FACING: <input name="facingValue" type="text" />
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.handleCloseModal}>Close</button>
        </Modal>
      </div>
    );
  }
}

export default PlaceButton