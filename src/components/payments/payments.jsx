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
        
        const response = await fetch('/.netlify/functions/create-payment-intent', {
            method: 'post',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({ amount: 10000})
        }).then( res => res.json());


        const clientSecret = response.paymentIntent.client_secret;
        
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement),
                billing_details: {
                    name: 'Bla Bla'
                }
            }
        });

        if(paymentResult.error){
            alert(paymentResult.error);
        }else{
            if(paymentResult.paymentIntent.status ==='succeeded'){
                alert('Payment Successful');
            }
        }
        

    };


    return(
        <PaymentFormContainer>
            <FormContainer onSubmit={handlePayment}>
                <h3> Credit Card Payment </h3>
                <CardElement></CardElement>
                    <Button> Pay </Button>
            </FormContainer>
        </PaymentFormContainer>
    )
}

export default Payment;