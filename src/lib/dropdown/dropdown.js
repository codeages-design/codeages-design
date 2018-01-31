import Component from '../../js/component';

class Dropdown extends Component {
  constructor(props) {
    super();

    this.options = {
      parent: document,
      trigger: 'click'
    };

    Object.assign(this.options, props);

    this.init();
  }

  init() {
    this.events();
  }

  events() {
    if (this.options.trigger === 'hover') {
      $(this.options.parent).on('mouseenter.cd.dropdown', this.options.el, (event) => this.hoverEvent(event));
      $(this.options.parent).on('mouseleave.cd.dropdown', this.options.el, (event) => this.hoverEvent(event));
    } else if (this.options.trigger === 'click') {
      $(this.options.parent).on('click.cd.dropdown', (event) => this.clear(event));
      $(this.options.parent).on('click.cd.dropdown', this.options.el, (event) => this.clickEvent(event));
    }
  }

  clear() {
    let self = this;

    $(this.options.el).each(function() {
      let $this = $(this);
  
      if (!$this.hasClass('cd-in')) {
        return;
      }
  
      $this.removeClass('cd-in');
      
      self.emit('hide');
    })
  } 

  clickEvent(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);
    let isActive = $this.hasClass('cd-in');
  
    this.clear();
  
    if (!isActive) {
      $this.addClass('cd-in');

      this.emit('show');
    }
  }

  hoverEvent(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);

    if ($this.hasClass('cd-in')) {
      $this.removeClass('cd-in');
      this.emit('hide');
    } else {
      $this.addClass('cd-in');
      this.emit('show');
    }
  }
}

export default Dropdown;
