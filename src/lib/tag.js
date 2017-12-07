class Tag {
  constructor(props) {
    this.options = {
      parent: document,
    };

    Object.assign(this.options, props);

    this.init();
  }

  init() {
    this.events();
  }

  events() {
    $(this.options.parent).on('click.cd.tag.close', this.options.closeEl, (event) => this.closeEvent(event));
  }

  closeEvent(event) {
    let $this = $(event.currentTarget);
    let $parent = $this.parent();
    $parent.addClass('cd-hide');
    
    setTimeout(() => {
      $parent.remove();
    }, 300);

    if (typeof this.option.close == 'function') {
      this.option.close(event);
    }
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
