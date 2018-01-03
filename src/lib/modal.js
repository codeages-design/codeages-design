const TRANSITION_DURATION = 300;
const BACKDROP_TRANSITION_DURATION = 150;

import loading from './loading';

class Modal {
  constructor(props) {
    this.options = {
      el: null,
      ajax: false,
      url: '',
      maskClosable: true
    };

    Object.assign(this.options, props);

    this.$modal = null;
    this.$backdrop =  null;
    this.$body = $(document.body);

    this.init();
  }

  init() {
    this.addDrop();

    this.$modal = $(this.options.el).css({
      display: 'block'
    });

    if (this.options.ajax) {
      this.$modal.html(loading({isFixed: true}));
      this.$modal.load(this.options.url);
    }

    this.$body.addClass('cd-modal-open');

    setTimeout(() => {
      this.$modal.addClass('cd-in');
    }, TRANSITION_DURATION);

    this.events();
  }

  events() {
    this.$modal.on('click.cd.modal.cancel', '[data-toggle="cd-modal-cancel"]', event => this.cancelEvent(event));
    this.$modal.on('click.cd.modal.ok', '[data-toggle="cd-modal-ok"]', event => this.okEvent(event));

    if (this.options.maskClosable) {
      this.$modal.on('click.cd.modal.mask', event => this.rmModal());
    }
  }

  cancelEvent(event) {
    this.rmModal();

    if (typeof this.options.cancel === 'function') {
      this.options.cancel(event, this.$modal, this);
    }
  }

  okEvent(event) {
    if (typeof this.options.ok === 'function') {
      this.options.ok(event, this.$modal, this);
    }
  }

  rmModal() {
    this.$modal.removeClass('cd-in');
    
    setTimeout(() => {
      this.$body.removeClass('cd-modal-open');
      this.$modal.css({
        display: 'none'
      });
      this.rmDrop();
    }, TRANSITION_DURATION);
  }

  addDrop() {
    this.$backdrop = $(document.createElement('div'))
                      .addClass('cd-modal-backdrop cd-fade')
                      .appendTo(this.$body);
    
    setTimeout(() => {
      this.$backdrop.addClass('cd-in');
    }, BACKDROP_TRANSITION_DURATION);
  }

  rmDrop() {
    this.$backdrop.remove();
  }
}

function modal(props) {
  return new Modal(props);
}

export default modal;
