class Alert {
  constructor(props) {
    Object.assign(this, {
      parent: document,
    }, props);

    this.init();
  }

  init() {
    this.events();
  }

  events() {
    $(this.parent).on('click.cd.alert.close', this.closeEl, (event) => this.closeEvent(event));
  }

  closeEvent(event) {
    let $this = $(event.currentTarget);
    let $parent = $this.parent();
    $parent.addClass('cd-alert-hide');
    
    setTimeout(() => {
      $parent.remove();
    }, 300);

    this.cb();
  }

  cb() {

  }
}

function alert(props) {
  return new Alert(props);
}

// DATA-API
$(document).on('click.cd.alert.close.data-api', '[data-toggle="cd-alert-close"]', function(event) {
  event.stopPropagation();
  let $this = $(event.currentTarget);
  let $parent = $this.parent();
  $parent.addClass('cd-alert-hide');
  
  setTimeout(() => {
    $parent.remove();
  }, 300);
});

export default alert;
