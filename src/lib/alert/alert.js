import Component from '../../js/component';

class Alert extends Component {
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
    $(this.options.parent).on('click.cd.alert.close', `${this.options.el} .close`, (event) => this.closeEvent(event));
  }

  closeEvent(event) {
    let $this = $(event.currentTarget);
    let $parent = $this.parent();
    $parent.addClass('cd-hide');
    
    setTimeout(() => {
      $parent.remove();
    }, 300);

    this.emit('close', $parent);
  }
}

export default Alert;
