const TRANSITION_DURATION = 300;
const BACKDROP_TRANSITION_DURATION = 150;

class Confirm {
  constructor(props) {
    Object.assign(this, {
      title: '',
      content: '',
      okText: 'Confirm',
      cancelText: 'Cancel',
      confirmClass: '',
    }, props);

    this.$backdrop =  null;
    this.$body = $(document.body);
    this.$modal = null;

    this.init();
  }

  init() {
    this.addDrop();

    let html = this.template();
    this.$modal = $(html);
    this.$modal.appendTo(this.$body.addClass('cd-modal-open'));

    setTimeout(() => {
      this.$modal.addClass('cd-in');
    }, TRANSITION_DURATION);

    this.events();
  }

  events() {
    this.$modal.on('click', '[data-toggle="cd-confirm-cancel"]', event => this.cancelEvent(event));
    this.$modal.on('click', '[data-toggle="cd-confirm-ok"]', event => this.okEvent(event, this.$modal));
  }

  cancelEvent(event) {
    this.rmConfirm(event);
    this.cancel(event);
  }

  okEvent(event, $confirm) {
    this.rmConfirm(event);
    this.confirm(event, $confirm);
  }

  rmConfirm(event) {
    this.$modal.removeClass('cd-in');
    
    setTimeout(() => {
      this.$body.removeClass('cd-modal-open');
      this.$modal.remove();
      this.rmDrop();
    }, TRANSITION_DURATION);
  }

  cancel(event) {

  }

  ok(event, $confirm) {

  }

  template() {
    let modalHeader = this.title ? `
      <div class="modal-header">
        <h4 class="modal-title">${this.title}</h4>
      </div>
    ` : '';

    let modalBody = `
      <div class="modal-body">
        <div class="cd-pb24 cd-text-gray-dark">
          ${this.content}
        </div>
      </div>
    `;

    let modalFooter = `
      <div class="modal-footer">
        <button class="cd-btn cd-btn-link-default cd-btn-lg" type="button" data-toggle="cd-confirm-cancel">
          ${this.cancelText}
        </button>
        <button class="cd-btn cd-btn-link-primary cd-btn-lg" type="button" data-toggle="cd-confirm-confirm" data-url="${this.confirmUrl}">
          ${this.okText}
        </button>
      </div>
    `;

    return `
      <div class="cd-modal ${this.confirmClass} cd-fade" style="display:block">
        <div class="cd-modal-dialog cd-modal-dialog-sm">
          <div class="modal-content">
            ${modalHeader}
            ${modalBody}
            ${modalFooter}
          </div>
        </div>
      </div>
    `;
  }

  rmDrop() {
    this.$backdrop.remove();
    this.$backdrop = null;
  }

  addDrop() {
    this.$backdrop = $(document.createElement('dev'));
    this.$backdrop.addClass('cd-modal-backdrop cd-fade').appendTo(this.$body);

    setTimeout(() => {
      this.$backdrop.addClass('cd-in');
    }, BACKDROP_TRANSITION_DURATION);
  }
}

function confirm(props) {
  return new Confirm(props);
}

export default confirm;