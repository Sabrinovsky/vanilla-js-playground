// /* eslint-disable @typescript-eslint/no-unused-vars */
// type PaymentStrategy = {
//   processPayment: (amount: number) => string,
// };

const paypalPayment = {
  processPayment: (amount) => {
    return `Paypal payment of $${amount}`;
  },
};

const picpayPayment = {
  processPayment: (amount) => {
    return `Picpay payment of $${amount}`;
  },
};

const creditPayment = {
  processPayment: (amount) => {
    return `Credit payment of $${amount}`;
  },
};

function paymentProcessor() {
  let strategy = null;

  function setStrategy(newStrategy) {
    strategy = newStrategy;
  }

  function processPayment(amount) {
    if (!strategy) {
      throw new Error("Strategy is not set");
    }
    return strategy.processPayment(amount);
  }

  return {
    processPayment,
    setStrategy,
  };
}

const payment = paymentProcessor();
payment.setStrategy(paypalPayment);

console.log(payment.processPayment(100));
