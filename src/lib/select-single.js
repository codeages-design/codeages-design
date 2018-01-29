import Component from '../js/component';

class SelectSingle extends Component {
  constructor(props) {
    super();

    this.options = {
      parent: document,
    };

    Object.assign(this.options, props);

    this.selectOption = `${this.options.el} .select-options li`;
    this.selectValue = `${this.options.el} .select-value`;
    this.$el = $(this.options.el);

    this.init();
  }

  init() {
    this.events();
  }

  events() {
    $(this.options.parent).on('click.cd.select.clear', (event) => this.clear(event));
    $(this.options.parent).on('click.cd.celect.fill', this.selectOption, (event) => this.fillEvent(event));
    $(this.options.parent).on('click.cd.celect', this.selectValue, (event) => this.clickEvent(event));
  }

  clear(event) {
    if (!this.$el.hasClass('cd-in')) {
      return;
    }
    this.$el.removeClass('cd-in');
  }

  fillEvent(event) {
    let $this = $(event.currentTarget);
    if ($this.hasClass('checked')) {
      return;
    }

    let text = $this.text();
    let value = $this.data('value');

    this.emit('beforeChange', value, text);

    $this.addClass('checked').siblings().removeClass('checked');

    let $parent = $this.closest(this.options.el);
    let $selectValue = $parent.find('.select-value');
    let $input = $parent.find('input');

    $selectValue.text(text);
    $input.val(value);

    this.emit('change', value, text);
  }

  clickEvent(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);
    let $parent = $this.closest(this.options.el);

    let isActive = $parent.hasClass('cd-in');
    
    this.clear(event);

    if (!isActive) {
      $parent.addClass('cd-in');
    }
  }
}

export default SelectSingle;