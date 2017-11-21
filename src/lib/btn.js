class Btn {
  constructor(props) {
    Object.assign(this, {
      text: 'loading...'
    }, props);

    this.$el = $(this.el);
    this.oldText = this.$el.html();
    this.text = this.$el.data('loadingText') || this.text;

    this.init();
  }

  init() {
  }

  loading() {
    this.$el.html(this.text).prop('disabled', true);
    return this;
  }

  reset() {
    this.$el.html(this.oldText).prop('disabled', false);
    return this;
  }
}

function btn(props) {
  return new Btn(props);
}

export default btn;