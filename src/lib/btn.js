import Component from '../js/component';

class Btn extends Component {
  constructor(props) {
    super();

    this.options = {
      text: 'loading...'
    };

    Object.assign(this.options, props);

    this.handlers = {};

    this.$el = $(this.options.el);
    this.oldText = this.$el.html();
    this.text = this.$el.data('loadingText') || this.options.text;
  }

  loading(callback) {
    this.$el.html(this.text).prop('disabled', true);

    if (typeof callback === 'function') {
      callback();
    };

    return this;
  }

  reset(callback) {
    this.$el.html(this.oldText).prop('disabled', false);

    if (typeof callback === 'function') {
      callback();
    };

    return this;
  }
}

function btn(props) {
  return new Btn(props);
}

export default btn;