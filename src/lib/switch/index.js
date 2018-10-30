import Switch from './switch';

function onoff(props) {
  return new Switch(props);
}

// DATA-API
$(document).on('click.cd.switch.data-api', '[data-toggle="cd-switch"]', function(event) {
  event.stopPropagation();
  let $this = $(event.currentTarget);
  let value = false;
  if ($this.parent().hasClass('checked')) {
    $this.parent().removeClass('checked');
    $this.val(0);
  } else {
    $this.parent().addClass('checked');
    $this.val(1);
  }

});

export default onoff;