import Dropdown from './dropdown';

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