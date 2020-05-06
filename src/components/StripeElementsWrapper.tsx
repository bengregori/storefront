import { Elements } from '@stripe/react-stripe-js';
import { IAppState } from '../store/app';
import { Stripe } from '@stripe/stripe-js';
import { stripePromiseSelector } from '../store/cms';
import { useSelector } from 'react-redux';
import React from 'react';

interface Props {
  type: 'donation' | 'main';
}

const StripeElementsWrapper: React.FC<Props> = ({ children, type }) => {
  const stripePromise = useSelector<IAppState, Promise<Stripe | null> | null>(stripePromiseSelector(type));

  return <Elements stripe={stripePromise}>{children}</Elements>;
};

export default StripeElementsWrapper;