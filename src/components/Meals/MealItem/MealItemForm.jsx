import { useState } from 'react';
import { useRef } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = props => {
    const [amountIsValid, setAmountIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
        // By using refs we can access the data filled in by the user
        // when they submit the form.
        const enteredAmount = amountInputRef.current.value;
        // the above value will always be of type string, even if you've set the type of input to be number.To convert it into a number, simply add a '+':
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 ||
            enteredAmountNumber < 1 ||
            enteredAmountNumber > 5) {
            setAmountIsValid(false);
            return;
        }
        props.onAddToCart(enteredAmountNumber);
    }
    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <Input
                ref={amountInputRef}
                label="Amount"
                input={{
                    id: 'amount_' + props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1"
                }} />
            <button>+ Add</button>
            {
                !amountIsValid &&
                <p>Please enter a valid amount (1-5).</p>
            }
        </form>
    )
}

export default MealItemForm