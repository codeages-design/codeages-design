import Component from '../js/component';

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

function dropdown(props) {
  return new Dropdown(props);
}

// DATA-API
function clear() {
  $('[data-toggle="cd-dropdown"]').each(function() {
    let $this = $(this);

    if ($this.data('trigger') === 'hover') {
      return;
    }

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

  if ($this.data('trigger') === 'hover') {
    return;
  }

  clear();

  if (!isActive) {
    $this.toggleClass('cd-in');
  }
}

function hoverEvent(event) {
  event.stopPropagation();
  let $this = $(event.currentTarget);

  if ($this.data('trigger') !== 'hover') {
    return;
  }

  $this.toggleClass('cd-in');
}

$(document)
  .on('click.cd.dropdown.data-api', clear)
  .on('click.cd.dropdown.data-api', '[data-toggle="cd-dropdown"]', clickEvent)
  .on('mouseenter.cd.dropdown.data-api', '[data-toggle="cd-dropdown"]', hoverEvent)
  .on('mouseleave.cd.dropdown.data-api', '[data-toggle="cd-dropdown"]', hoverEvent)

export default dropdown;