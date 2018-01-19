import Component from '../js/component';

class Checkbox extends Component {
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
    
    this.emit('change', $this.val());
  }
}

function checkbox(props) {
  return new Checkbox(props);
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

