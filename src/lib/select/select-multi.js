import SelectSingle from './select-single';
import tag from '../tag';

class SelectMulti extends SelectSingle {
  constructor(props) {
    super(props);
  }

  init() {
    this.isInit = true;
    this.input = `${this.options.el} input`;
    this.$selectOption = $(this.selectOption);
    this.$selectValue = $(this.selectValue);
    this.$input = $(this.input);

    this.events();
    this.initOption();
  }

  fillEvent(event) {
    event.stopPropagation();

    let $this = $(event.currentTarget);

    let text = $this.text();
    let value = $this.data('value');

    this.emit('beforeChange', value, text);

    if ($this.hasClass('checked')) {
      $this.removeClass('checked');
      this.removeTag($this.index());
      this.removeOption($this.index(), value, text);
    } else {
      $this.addClass('checked');
      this.addOption($this.index(), value, text);
    }
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

  changeValue(text) {
    let value = '';

    this.$selectOption.each(function() {
      if ($(this).hasClass('checked')) {
        value = value + $(this).data('value') + ',';
      }
    });

    value = value.substr(0, value.length - 1);

    this.$input.val(value);

    if (!this.isInit) {
      this.emit('change', value, text);
    }
  }

  initOption() {
    let self = this;

    if (this.options.type === 'single') {
      return;
    }

    this.$selectOption.each(function(index) {
      if ($(this).hasClass('checked')) {
        self.addOption(index, $(this).data('value'), $(this).text());
      }
    });

    this.isInit = false;
  }

  addOption(index, value, text) {
    $(document.createElement('span'))
      .addClass('cd-tag')
      .attr('contenteditable', false)
      .attr('data-target', `${this.options.el}${index}`)
      .html(`
        ${text}
        <i class="cd-icon cd-icon-danger"></i>
      `)
      .appendTo(this.$selectValue);

    tag({
      el: `[data-target="${this.options.el}${index}"]`,
    }).on('close', () => {
      this.removeOption(index, value, text);
    })

    this.changeValue(text);
  }

  removeOption(index, value, text) {
    this.$selectOption.each(function(optionIndex) {
      if (optionIndex === index) {
        $(this).removeClass('checked');
      }
    });
    this.changeValue(text);
  }

  removeTag(index) {
    $(`[data-target="${this.options.el}${index}"]`).remove();
  }
}

export default SelectMulti;