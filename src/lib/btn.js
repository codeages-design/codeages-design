import Component from '../js/component';

class Btn extends Component {
  constructor(props) {
    super();

    this.options = {
      loadingText: 'loading...'
    };

    Object.assign(this.options, props);

    this.handlers = {};

    this.$el = $(this.options.el);
    this.oldText = this.$el.text();
    this.loadingText = this.$el.data('loadingText') || this.options.loadingText;
  }

  loading(callback) {
    this.$el.html(this.loadingText).prop('disabled', true);

    if (typeof callback === 'function') {
      callback(this.$el);
    };

    return this;
  }

  reset(callback) {
    this.$el.html(this.oldText).prop('disabled', false);

    if (typeof callback === 'function') {
      callback(this.$el);
    };

    return this;
  }
}

function btn(props) {
  return new Btn(props);
}

export default btn;