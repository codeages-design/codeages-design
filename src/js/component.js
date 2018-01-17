class Component {
  constructor() {

  }

  on(eventName, callback) {
    if (typeof this[eventName] !== 'function') {
      throw new Error(`${eventName} event does not exist`);
    };

    this[eventName](callback);
  }
}

export default Component;