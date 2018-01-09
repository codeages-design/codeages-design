import Tooltip from './tooltip-class';

import { getPosition, getUUID } from '../js/utils';

class Popover extends Tooltip {
  constructor(props) {
    super();

    const options = {
      el: '[data-toggle="cd-popover"]',
      type: 'popover',
      content: 'plase add content',
    };

    Object.assign(this.options, options, props);

    console.log(this.options);

    this.init();
  }
  
  template() {
    const popoverEl = $(document.createElement('div'))
                      .addClass('cd-popover')
                      .attr('id', getUUID(this.options.type));
                      
    const html = `
      <div class="popover-arrow"></div>
      <div class="popover-inner">
        <div class="popover-title">
          ${this.options.title}
        </div>
        <div class="popover-content">
          ${this.options.content}
        </div>
      </div>
    `;

    return popoverEl.html(html);
  }
}

function popover(props) {
  return new Popover(props);
}

export default popover;