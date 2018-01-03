import { getUUID } from '../js/utils';

class Select {
  constructor(props) {
    this.options = {
      type: 'single',
      parent: document,
    };

    Object.assign(this.options, props);

    this.selectOption = `${this.options.el} .select-options li`;
    this.selectValue = `${this.options.el} .select-value`;
    this.input = `${this.options.el} input`;

    this.$el = $(this.options.el);
    this.$selectOption = $(this.selectOption);
    this.$selectValue = $(this.selectValue);
    this.$input = $(this.input);

    this.init();
  }

  init() {
    this.events();
    this.initOption();
  }

  events() {
    $(this.options.parent).on('click.cd.select.clear', (event) => this.clear(event));
    $(this.options.parent).on('click.cd.celect.fill', this.selectOption, (event) => this[`${this.options.type}FillEvent`](event))
    $(this.options.parent).on('click.cd.celect', this.selectValue, (event) => this[`${this.options.type}Event`](event))
  }

  clear(event) {
    if (!this.$el.hasClass('cd-in')) {
      return;
    }
    this.$el.removeClass('cd-in');
  }

  singleFillEvent(event) {
    let $this = $(event.currentTarget);
    if ($this.hasClass('checked')) {
      return;
    }

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

  multiFillEvent(event) {
    event.stopPropagation();

    let $this = $(event.currentTarget);

    if ($this.hasClass('checked')) {
      $this.removeClass('checked');
      this.removeTag($this.index());
      this.removeOption($this.index(), $this.text());
    } else {
      $this.addClass('checked');
      this.addOption($this.index(), $this.text());
    }
  }

  multiEvent(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);

    let isActive = this.$el.hasClass('cd-in');
    
    this.clear(event);

    if (!isActive) {
      this.$el.addClass('cd-in');
    }
  }

  changeValue() {
    let value = '';
    this.$selectOption.each(function() {
      if ($(this).hasClass('checked')) {
        value = value + $(this).text() + ',';
      }
    });

    value = value.substr(0, value.length - 1);

    console.log('value', value);

    this.$input.val(value);
  }

  initOption() {
    let self = this;

    if (this.options.type === 'single') {
      return;
    }

    this.$selectOption.each(function(index) {
      if ($(this).hasClass('checked')) {
        self.addOption(index, $(this).text());
      }
    });
  }

  addOption(index, value) {
    $(document.createElement('span'))
      .addClass('cd-tag')
      .attr('contenteditable', false)
      .attr('data-target', `${this.options.el}${index}`)
      .html(`
        ${value}
        <i class="cd-icon cd-icon-danger"></i>
      `)
      .appendTo(this.$selectValue);

    let self = this;
    cd.tag({
      closeEl: `[data-target="${this.options.el}${index}"] i`,
      close(event) {
        event.stopPropagation();
        self.removeOption(index, value);
      }
    });

    this.changeValue(index, value);
  }

  removeOption(index, value) {
    this.$selectOption.each(function(optionIndex) {
      if (optionIndex === index) {
        $(this).removeClass('checked');
      }
    });
    this.changeValue();
  }

  removeTag(index) {
    $(`[data-target="${this.options.el}${index}"]`).remove();
  }
}

function select(props) {
  return new Select(props);
}

export default select;