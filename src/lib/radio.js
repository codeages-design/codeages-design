class Radio {
  constructor(props, callback) {
    Object.assign(this, {
      parent: document,
      callback
    }, props);

    this.init();
  }

  init() {
    this.events();
  }

  events() {
    $(this.parent).on('click.cd.radio', this.el, event => this.clickEvent(event));
  }

  clickEvent(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);

    $this.parent().addClass('checked')
         .siblings().removeClass('checked');
         
    this.cb(event);
    this.callback && this.callback(event);
  }

  // @todo 废弃，请使用callback代替
  cb() {

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

