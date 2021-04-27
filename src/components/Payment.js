import React from 'react';
import PropTypes from 'prop-types';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

class ReactCreditCards extends React.Component {
  constructor(props) {
    super(props); 
    this.state={
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    }
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  }

    handleInputChange = (e) => {
    const { name, value } = e.target;
    if(name==="expiry"){
      let newValue=value.slice(value.length-2,value.length)+"/"+value.slice(2,4);
      this.setState({ [name]: newValue });
    }else{
      this.setState({ [name]: value });
    }
  }
  render() {
    return(      
    <div id="PaymentForm">
        <Cards
          cvc={this.state.cvc}
          expiry={this.state.expiry}
          focused={this.state.focus}
          name={this.state.name}
          number={this.state.number}
        />
        <form>
        	<input
            type="tel"
            name="number"
            placeholder="Card Number"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="number"
            name="cvc"
            placeholder="CVC"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
          <input
            type="month" 
            min="Date.now()" 
            name="expiry"
            placeholder="EXPIRY"
            onChange={this.handleInputChange}
            onFocus={this.handleInputFocus}
          />
        </form>
      </div>
    );
  }

}

export default ReactCreditCards;