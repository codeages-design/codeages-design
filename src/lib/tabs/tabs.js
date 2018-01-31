import Component from '../../js/component';

class Tabs extends Component {
  constructor(props) {
    super();

    this.options = {
      parent: document,
      isLoading: false,
      url: null,
    };

    Object.assign(this.options, props);

    this.init();
  }

  init() {
    this.getData();
    
    this.events();
  }

  events() {
    $(this.options.parent).on('click.cd.tabs', `${this.options.el}`, (event) => this.clickEvent(event));
  }

  loading() {
    if (this.options.isLoading) {
      $(this.options.target).html(cd.loading());
    }
  }

  getData(event) {
    this.loading();

    $.get({
      url: event ? $(event.currentTarget).data('url') : this.options.url
    }).done((res) => {
      this.emit('success', res);
    }).fail((res) => {
      this.emit('error', res);
    })
  }

  clickEvent(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);
    let $parent = $this.parent();
    
    if ($parent.hasClass('active')) {
      return;
    }

    $parent.addClass('active').siblings().removeClass('active');

    this.getData(event);
  }
}

export default Tabs;
