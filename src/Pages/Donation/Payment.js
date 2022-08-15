import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import CheckoutForm from "./CheckoutForm";
const stripePromise = loadStripe(
  "pk_test_51L1B4TILMBFd3sQdeIP6t2YJz0HbnsXqxyG9jGmJQOBjOPN3vzKMHoAYIQTp080HttDA3dAejYgfepL4oCkgOCWr00Bn3BxCcC"
);
const Payment = () => {
  return (
    <div className="w-full lg:-mt-96 mb-60 lg:w-2/6 px-8 py-12 ml-auto bg-primary rounded-2xl">
      <div className="flex flex-col text-white">
        <h1 className="font-bold capitalize text-3xl my-4">Make a Payment</h1>
      </div>
      <div className="card-body">
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;