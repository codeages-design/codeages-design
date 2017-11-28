class Switch {
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
    $(this.parent).on('click.cd.switch', this.el, event => this.clickEvent(event));
  }

  clickEvent(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);

    if ($this.parent().hasClass('checked')) {
      $this.parent().removeClass('checked');
    } else {
      $this.parent().addClass('checked');
    }

    this.callback && this.callback(event);
  }
}

function onoff(props, callback) {
  return new Switch(props, callback);
}

// DATA-API
$(document).on('click.cd.switch.data-api', '[data-toggle="cd-switch"]', function(event) {
  event.stopPropagation();
  let $this = $(event.currentTarget);

  if ($this.parent().hasClass('checked')) {
    $this.parent().removeClass('checked');
  } else {
    $this.parent().addClass('checked');
  }

});

export default onoff;
