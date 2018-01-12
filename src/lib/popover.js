import Tooltip from './tooltip-class';

import { getUUID } from '../js/utils';

class Popover extends Tooltip {
  constructor(props) {
    const options = {
      el: '[data-toggle="cd-popover"]',
      type: 'popover',
      content: 'plase add content',
    };

    Object.assign(options, props);

    super(options);
  }

  template() {
    const popoverEl = $(document.createElement('div'))
                      .addClass('cd-popover')
                      .attr('id', getUUID(this.options.type));
                      
    const html = `
      <div class="popover-arrow"></div>
      <div class="popover-title">
        ${this.options.title}
      </div>
      <div class="popover-content">
        ${this.options.content}
      </div>
    `;

    return popoverEl.html(html);
  }
}

function popover(props) {
  return new Popover(props);
}

export default popover;