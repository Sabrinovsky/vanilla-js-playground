function subject(value) {
  const subscribers = [];
  let lastValue = value;

  function setValue(value) {
    lastValue = value;
    subscribers.forEach((observer) => observer(lastValue));
  }

  function subscribe(subscriber) {
    subscribers.push(subscriber);
    subscriber(lastValue);
    return () => {
      let obs = subscribers.find((sub) => sub === subscriber);
      if (obs) {
        subscribers.splice(subscribers.indexOf(obs), 1);
      }
    };
  }

  return {
    setValue,
    subscribe,
    value: () => lastValue,
  };
}
