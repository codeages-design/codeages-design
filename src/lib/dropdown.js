class Dropdown {
  constructor(props) {
    this.options = {
      parent: document,
      trigger: 'hover'
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

      if (typeof self.options.hide === 'function') {
        self.options.hide();
      }
    })
  } 

  clickEvent(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);
    let isActive = $this.hasClass('cd-in');
  
    this.clear(event);
  
    if (!isActive) {
      $this.addClass('cd-in');

      if (typeof this.options.show === 'function') {
        this.options.show();
      }
    }
  }

  hoverEvent(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);

    if ($this.hasClass('cd-in')) {
      $this.removeClass('cd-in');
      if (typeof this.options.hide === 'function') {
        this.options.hide();
      }
    } else {
      $this.addClass('cd-in');
      if (typeof this.options.show === 'function') {
        this.options.show();
      }
    }
  }
}

function dropdown(props) {
  return new Dropdown(props);
}

// DATA-API
function clear(event) {
  $('[data-toggle="cd-dropdown"][data-trigger="click"]').each(function() {
    let $this = $(this);

    if (!$this.hasClass('cd-in')) {
      return;
    }

    $this.removeClass('cd-in');
  })
}

function clickEvent(event) {
  event.stopPropagation();
  let $this = $(event.currentTarget);
  let isActive = $this.hasClass('cd-in');

  clear(event);

  if (!isActive) {
    $this.toggleClass('cd-in');
  }
}

function hoverEvent(event) {
  event.stopPropagation();
  let $this = $(event.currentTarget);

  if ($this.data('trigger') === 'click') {
    return;
  }

  $this.toggleClass('cd-in');
}

$(document)
  .on('click.cd.dropdown.data-api', clear)
  .on('click.cd.dropdown.data-api', '[data-toggle="cd-dropdown"][data-trigger="click"]', clickEvent)
  .on('mouseenter.cd.dropdown.data-api', '[data-toggle="cd-dropdown"]', hoverEvent)
  .on('mouseleave.cd.dropdown.data-api', '[data-toggle="cd-dropdown"]', hoverEvent)

export default dropdown;