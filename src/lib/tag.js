class Tag {
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
    $(this.parent).on('click.cd.tag.close', this.closeEl, (event) => this.closeEvent(event));
  }

  closeEvent(event) {
    let $this = $(event.currentTarget);
    let $parent = $this.parent();
    $parent.addClass('cd-hide');
    
    setTimeout(() => {
      $parent.remove();
    }, 300);

    this.close(event);
  }

  close(event) {
    
  }
}

function tag(props) {
  return new Tag(props);
}

// DATA-API
$(document).on('click.cd.tag.close.data-api', '[data-toggle="cd-tag-close"]', function(event) {
  event.stopPropagation();
  let $this = $(event.currentTarget);
  let $parent = $this.parent();
  $parent.addClass('cd-hide');
  
  setTimeout(() => {
    $parent.remove();
  }, 300);
});

export default tag;
