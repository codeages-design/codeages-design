const TRANSITION_DURATION = 300;

class Message {
  constructor(props) {
    Object.assign(this, {
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
    }, props);

    this.$message = null;
    this.$body = $(document.body);

    this.init();
  }

  init() {
    this.template();
    setTimeout(() => this.close(), this.delay);
  }

  template() {
    this.$message = $(document.createElement('div')).addClass('cd-message-warp');

    let actionHtml = '';
    if (this.action.template) {
      actionHtml = `<span class="cd-message-action">${this.action.template}</span>`;
    } else if (this.action.title) {
      actionHtml = `<span class="cd-message-action"><a href="${this.action.url}" target="_blank">${this.action.title}</a></span>`;
    }

    const html = `
      <div class="cd-message cd-message-${this.type}">
        <i class="cd-icon cd-icon-${this.type}"></i>
        <span>${this.message}</span>
        ${actionHtml}
      </div>
    `;

    this.$message.addClass(this.animate.enter).css({
      top: this.offset + 'px',
      left: 0,
      right: 0,
      'z-index': this.z_index,
      position: 'fixed',
    });

    this.$message.html(html).appendTo(this.$body);
  }

  close() {
    this.$message.removeClass(this.animate.enter).addClass(this.animate.exit);

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