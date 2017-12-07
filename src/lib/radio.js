class Radio {
  constructor(props, callback) {
    this.options = {
      parent: document,
    };

    Object.assign(this.options, props);

    this.callback = callback;

    this.init();
  }

  init() {
    this.events();
  }

  events() {
    $(this.options.parent).on('click.cd.radio', this.options.el, event => this.clickEvent(event));
  }

  clickEvent(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);

    $this.parent().addClass('checked')
         .siblings().removeClass('checked');

    if (typeof this.callback == 'function') {
      this.callback(event);
    }
  }
}

function radio(props, callback) {
  return new Radio(props, callback);
}

// DATA-API
$(document).on('click.cd.radio.data-api', '[data-toggle="cd-radio"]', function(event) {
  event.stopPropagation();
  let $this = $(event.currentTarget);

  $this.parent().addClass('checked')
       .siblings().removeClass('checked');

});

export default radio;

