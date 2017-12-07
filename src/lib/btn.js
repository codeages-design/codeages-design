class Btn {
  constructor(props) {
    this.options = {
      text: 'loading...'
    };

    Object.assign(this.options, props);

    this.$el = $(this.options.el);
    this.oldText = this.$el.html();
    this.text = this.$el.data('loadingText') || this.options.text;
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