import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';

import Button from '../button/button';
import { PaymentFormContainer, FormContainer } from './payments-styles';
const Payment = () => {

    const stripe = useStripe();
    const elements = useElements();
    
    const handlePayment = async(e) => {
        e.preventDefault();

        if(!stripe ||  !elements){
            return;
        }

        

    }


    return(
        <PaymentFormContainer>
            <FormContainer>
                <h3> Credit Card Payment </h3>
                <CardElement></CardElement>
                    <Button> Pay </Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default Payment;