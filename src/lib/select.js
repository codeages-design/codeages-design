class Select {
  constructor(props) {
    this.options = {
      type: 'single',
      parent: document,
    };

    Object.assign(this.options, props);

    this.$el = $(this.options.el);
    this.$selectValue = this.$el.find('.select-value');
    this.$input = this.$el.find('input');

    this.init();
  }

  init() {
    this.events();
  }

  clear(event) {
    if (!this.$el.hasClass('cd-in')) {
      return;
    }
    this.$el.removeClass('cd-in');
  }

  events() {
    $(this.options.parent).on('click.cd.select.single', (event) => this.clear(event));
    $(this.options.parent).on('click.cd.celect.single.value', `${this.options.el} .select-options li`, (event) => this.getValueEvent(event))
    $(this.options.parent).on('click.cd.celect.single', `${this.options.el} .select-value`, (event) => this.singleEvent(event))
  }

  getValueEvent(event) {
    let $this = $(event.currentTarget);
    $this.addClass('checked').siblings().removeClass('checked');

    let value = $this.text();
    this.$selectValue.text(value);
    this.$input.val(value);
  }

  singleEvent(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);

    let isActive = this.$el.hasClass('cd-in');
    
    this.clear(event);

    if (!isActive) {
      this.$el.addClass('cd-in');
    }
  }
}

function select(props) {
  return new Select(props);
}

export default select;