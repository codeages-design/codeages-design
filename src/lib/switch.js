import Component from '../js/component';

class Switch extends Component {
  constructor(props) {
    super();

    this.options = {
      parent: document,
    };

    Object.assign(this.options, props);

    this.init();
  }

  init() {
    this.events();
  }

  events() {
    $(this.options.parent).on('click.cd.switch', this.options.el, event => this.clickEvent(event));
  }

  clickEvent(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);
    let value = false;

    if ($this.parent().hasClass('checked')) {
      $this.parent().removeClass('checked');
      value = false;
    } else {
      $this.parent().addClass('checked');
      value = true;
    }

    this.emit('change', value);
  }
}

function onoff(props) {
  return new Switch(props);
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
