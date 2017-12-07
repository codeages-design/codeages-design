class Checkbox {
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
    $(this.options.parent).on('click.cd.checkbox', this.options.el, event => this.clickEvent(event));
  }

  clickEvent(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);

    if ($this.parent().hasClass('checked')) {
      $this.parent().removeClass('checked');
    } else {
      $this.parent().addClass('checked');
    }
    
    if (typeof this.callback === 'function') {
      this.callback(event);
    }
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

