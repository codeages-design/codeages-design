
import Checkbox from './checkbox';

function checkbox(props) {
  return new Checkbox(props);
}

// DATA-API
$(document).on('click.cd.checkbox.data-api', '[data-toggle="cd-checkbox"]', function(event) {
  event.stopPropagation();
  let $this = $(event.currentTarget);

  if ($this.parent().hasClass('checked')) {
    $this.parent().removeClass('checked');
  } else {
    $this.parent().addClass('checked');
  }
});

export default checkbox;