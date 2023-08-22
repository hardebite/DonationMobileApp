import React from 'react';
import {PayWithFlutterwave} from 'flutterwave-react-native';
const Flutter = () => {
  const handleOnRedirect = () => {
    console.log('sadi');
  };

  const generateRef = length => {
    var a =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split(
        '',
      );
    var b = [];
    for (var i = 0; i < length; i++) {
      var j = (Math.random() * (a.length - 1)).toFixed(0);
      b[i] = a[j];
    }
    return b.join('');
  };

  return (
    <PayWithFlutterwave
      onRedirect={handleOnRedirect}
      options={{
        tx_ref: '12345678wertiasdfghjxcvbnertyui',
        authorization: 'MY_PUBLIC_KEY',
        customer: {
          email: 'user@gmail.com',
        },
        amount: 2000,
        currency: 'NGN',
        payment_options: 'card',
      }}
    />
  );
};
export default Flutter;

// import React from 'react';
// import {PayWithFlutterwave} from 'flutterwave-react-native';
// import {FlutterWaveButton, closePaymentModal} from 'flutterwave-react-v3';
// import {Text, View} from 'react-native';
// import style from './style';

// const Flutter = () => {
//   const config = {
//     public_key: 'FLWPUBK-**************************-X',
//     tx_ref: Date.now(),
//     amount: 100,
//     currency: 'NGN',
//     payment_options: 'card,mobilemoney,ussd',
//     customer: {
//       email: 'user@gmail.com',
//       phone_number: '070********',
//       name: 'john doe',
//     },
//     customizations: {
//       title: 'My store',
//       description: 'Payment for items in cart',
//       logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
//     },
//   };

//   const fwConfig = {
//     ...config,
//     text: 'Pay with Flutterwave!',
//     callback: response => {
//       console.log(response);
//       closePaymentModal(); // this will close the modal programmatically
//     },
//     onClose: () => {},
//   };

//   return (
//     <Text>
//       <FlutterWaveButton {...fwConfig} />;
//     </Text>
//   )
// };
// export default Flutter;
