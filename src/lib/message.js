const TRANSITION_DURATION = 300;

class Message {
  constructor(props) {
    this.options = {
      type: '',
      message: '',
      action: {
        title: '',
        url: '',
        template: ''
      },
      delay: 3000,
      animate: {
        enter: 'cd-animated cd-fadeInDownSmall',
        exit: 'cd-animated cd-fadeOutUp'
      },
      offset: 80,
      z_index: 9999,
    };
    Object.assign(this.options, props);

    this.$message = null;
    this.$body = $(document.body);

    this.init();
  }

  init() {
    this.template();
    this.timeout = setTimeout(() => this.close(), this.options.delay);
  }

  template() {
    this.$message = $(document.createElement('div')).addClass('cd-message-warp');

    let actionHtml = '';
    if (this.options.action.template) {
      actionHtml = `<span class="cd-message-action">${this.options.action.template}</span>`;
    } else if (this.options.action.title) {
      actionHtml = `<span class="cd-message-action"><a href="${this.options.action.url}" target="_blank">${this.options.action.title}</a></span>`;
    }

    const html = `
      <div class="cd-message cd-message-${this.options.type}">
        <i class="cd-icon cd-icon-${this.options.type}"></i>
        <span>${this.options.message}</span>
        ${actionHtml}
      </div>
    `;

    this.$message.addClass(this.options.animate.enter).css({
      top: this.options.offset + 'px',
      left: 0,
      right: 0,
      'z-index': this.options.z_index,
      position: 'fixed',
    });

    this.$message.html(html).appendTo(this.$body);

    clearInterval(this.timeout);
  }

  close() {
    this.$message.removeClass(this.options.animate.enter).addClass(this.options.animate.exit);

    setTimeout(() => {
      this.$message.remove();
      this.$message = null;
    }, TRANSITION_DURATION);
  }
}

function message(props) {
  return new Message(props);
}

export default message;