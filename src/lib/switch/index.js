import Switch from './switch';

function onoff(props) {
  return new Switch(props);
}

// DATA-API
$(document).on('click.cd.switch.data-api', '[data-toggle="cd-switch"]', function(event) {
  event.stopPropagation();
  let $this = $(event.currentTarget);

  if ($this.parent().hasClass('checked')) {
    $this.parent().removeClass('checked');
  } else {
    $this.parent().addClass('checked');
  }

});

export default onoff;