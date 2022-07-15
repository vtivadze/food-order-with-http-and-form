import { useRef } from 'react';

import classes from './Checkout.module.css';

const Checkout = (props) => {
  const nameInputRref = useRef();
  const streetInputRref = useRef();
  const postalCodeInputRref = useRef();
  const cityInputRref = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enterdName = nameInputRref.current.value;
    const enteredStreet = streetInputRref.current.value;
    const enterdPostalCode = postalCodeInputRref.current.value;
    const enterdCity = cityInputRref.current.value;
  };

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={classes.control}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRref} />
      </div>
      <div className={classes.control}>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRref} />
      </div>
      <div className={classes.control}>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRref} />
      </div>
      <div className={classes.control}>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRref} />
      </div>
      <div className={classes.actions}>
        <button type='button' onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;