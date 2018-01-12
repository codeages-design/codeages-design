class AutoComplete {
  constructor(props) {
    this.options = {
      parent: document,
      el: null,
      sources: [],
      selectKey: null,
      highClass: 'active'
    };

    Object.assign(this.options, props);

    this.$el = $(this.options.el);
    this.input = `${this.options.el} input`;
    this.$input = $(this.input);
    this.optionsEl = null;
    
    this.init();
  }

  init() {
    $(this.options.parent).on('input', this.input, (event) => this.changeEvent(event));
    $(this.options.parent).on('blur', this.options.el, (event) => this.blurEvent(event));
  }

  changeEvent(event) {
    let $this = $(event.currentTarget);
    let value = $this.val();

    this.render(value);

    this.$el.addClass('cd-in');
  }

  blurEvent(event) {
    setTimeout(() => {
      this.close();
    }, 200);
  }

  close() {
    this.$el.removeClass('cd-in');
    this.optionsEl && this.optionsEl.remove();
  }

  async getSources(value) {
    const sources = [];
    const sourcesTemp = [];
    const cache = {};

    if (cache[value]) {
      return cache[value];
    }

    if (this.options.sources instanceof Function) {
      sourcesTemp.push(...await this.options.sources(value));
      
    } else if (this.options.sources instanceof Array) {
      sourcesTemp.push(...this.options.sources);
    }

    if (this.options.selectKey) {
      sourcesTemp.map((item) => {
        sources.push(item[this.options.selectKey]);
      });
    } else {
      sources.push(...sourcesTemp);
    }

    cache[value] = sources;

    return sources;
  }

  async render(value) {
    this.optionsEl && this.optionsEl.remove();

    this.optionsEl = $(document.createElement('ul'))
                    .addClass('select-options');
                  
    let sources = await this.getSources(value);
    sources.map((item) => {
      if (!value || item.indexOf(value) === -1) {
        return;
      }

      item = item.replace(value, `<span class="${this.options.highClass}">${value}</span>`);

      let itemEl = $(document.createElement('li')).html(item).on('click', (event) => {
        let $this = $(event.currentTarget);
        this.$input.val($this.text());
        this.close();
      });

      this.optionsEl.append(itemEl);
    });

    this.optionsEl.appendTo(this.$el);
  }
}

function autocomplete(props) {
  return new AutoComplete(props);
}

export default autocomplete;