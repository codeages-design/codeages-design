import Component from '../../js/component';
import loading from '../loading';

const TRANSITION_DURATION = 300;
const BACKDROP_TRANSITION_DURATION = 150;

class Modal extends Component {
  constructor(props) {
    super();

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

    this.destroy();
    this.events();
  }

  events() {
    this.$modal.on('click.cd.modal.ok', '[data-toggle="cd-modal-ok"]', event => this.okEvent(event));
    this.$modal.on('click.cd.modal.cancel', '[data-toggle="cd-modal-cancel"]', event => this.cancelEvent(event));

    if (this.options.maskClosable) {
      this.$modal.on('click.cd.modal.mask', event => this.close());
    }
  }

  okEvent(event) {
    this.emit('ok', this.$modal, this);
  }

  cancelEvent(event) {
    this.close();

    this.emit('cancel', this.$modal, this);
  }

  close() {
    this.$modal.removeClass('cd-in');
    
    setTimeout(() => {
      this.$body.removeClass('cd-modal-open');
      this.$modal.css({
        display: 'none'
      });
      this.rmDrop();
    }, TRANSITION_DURATION);
  }

  destroy() {
    this.$modal.off('click.cd.modal.ok');
    this.$modal.off('click.cd.modal.cancel');
    this.$modal.off('click.cd.modal.mask');
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

export default Modal;
