class Alert {
  constructor(props) {
    Object.assign(this, {
      parent: document
    }, props);

    this.init();
  }

  init() {
    this.events();
  }

  events() {
    
  }

}