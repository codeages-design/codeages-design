class Checkbox {
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
    $(this.parent).on('click.cd.checkbox', this.el, event => this.clickEvent(event));
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

function checkbox(props, callback) {
  return new Checkbox(props, callback);
}

// DATA-API
$(document).on('click.cd.checkbox.data-api', '[data-toggle="cd-checkbox"]', function(event) {
  event.stopPropagation();
  let $this = $(event.currentTarget);

  if ($this.parent().hasClass('checked')) {
    $this.parent().removeClass('checked');
  } else {
    $this.parent().addClass('checked');
  }
});

export default checkbox;

