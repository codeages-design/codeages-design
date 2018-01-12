import { getPosition, getUUID } from '../js/utils';

const TRANSITION_DURATION = 300;

const elements = [];
let trigger = '';

class Tooltip {
  constructor(props) {
    this.options = {
      parent: document,
      container: document.body,
      viewport: document.body,
      el: '[data-toggle="cd-tooltip"]',
      placement: 'top',
      offset: 10,
      delay: 0,
      title: 'plase add title',
      type: 'tooltip',
      trigger: 'hover'
    };

    Object.assign(this.options, props);

    trigger = this.options.trigger;
    this.timeout = null;

    this.init();
  }

  init() {
    if (typeof Tooltip.instance === 'object' 
        && elements.includes(this.options.el)) {
      return Tooltip.instance;
    }

    Tooltip.instance = this;
    elements.push(this.options.el);
    

    this.events();
  }

  events() {
    $(this.options.parent).on(`mouseenter.cd.${this.options.type}`, this.options.el, (event) => this.mouseenterEvent(event));
    $(this.options.parent).on(`mouseleave.cd.${this.options.type}`, this.options.el, (event) => this.mouseleaveEvent(event));
    $(this.options.parent).on(`click.cd.${this.options.type}`, this.options.el, (event) => this.clickEvent(event));
    $(document).on(`click.cd.${this.options.type}.close`, (event) => this.documentEvent(event));
  }

  mouseenterEvent(event) {
    console.log('mouseenterEvent');
    if (this.isHover(event)) {
      this.show(event);
    }
  }

  mouseleaveEvent(event) {
    if (this.isHover(event)) {
      this.close(event);
    }
  }

  clickEvent(event) {
    if (this.isHover(event)) {
      return;
    }

    if (this.$template) {
      this.close(event);
    } else {
      this.show(event);
    }
  }

  documentEvent(event) {
    if (this.isHover(event)) {
      return;
    }

    if (this.$template) {
      this.close(event);
    }
  }

  isHover(event) {
    let $this = $(event.currentTarget);
    return ($this.data('trigger') || trigger) === 'hover';
  }

  show(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);

    Object.assign(this.options, {
      container: $this.data('container') ? $this.data('container') : this.options.container,
      title: $this.data('title') ? $this.data('title') : this.options.title,
      content: $this.data('content') ? $this.data('content') : this.options.content,
      placement: $this.data('placement') ? $this.data('placement') : this.options.placement,
    });
    
    this.$template && this.$template.remove();

    this.$template = this.template();

    this.options.container ? this.$template.appendTo(this.options.container) : this.$template.insertAfter($this);
    
    const position = getPosition(event.currentTarget);
    const width = this.$template[0].offsetWidth;
    const height = this.$template[0].offsetHeight;

    this.$template.css(
      this.setCss(position, width, height)
    ).addClass(this.options.placement);

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.$template.addClass('cd-in');
    }, TRANSITION_DURATION + this.options.delay);
  }

  template() {
    return $(document.createElement('div'))
          .addClass('cd-tooltip')
          .attr('id', getUUID(this.options.type))
          .html(this.options.title);
  }

  checkPlacement(position, width, height) {
    if (!/^(top|bottom|left|right)(Top|Bottom|Left|Right)?$/g.test(this.options.placement)) {
      throw new Error('Plase setting this right placement');
    }

    const viewportPos = getPosition(this.options.viewport);

    switch(this.options.placement) {
      case 'bottom':
      case 'bottomLeft':
      case 'bottomRight':
        if (position.bottom + height > viewportPos.height) {
          return this.options.placement.replace(/^bottom/, 'top');
        }
        break;
      case 'top': 
      case 'topLeft': 
      case 'topRight': 
        if (position.top    - height < viewportPos.top) {
          return this.options.placement.replace(/^top/, 'bottom');
        }
        break;
      case 'right':
      case 'rightTop':
      case 'rightBottom':
        if (position.right  + width  > viewportPos.width) {
          return this.options.placement.replace(/^right/, 'left');
        }
        break;
      case 'left':
      case 'leftTop':
      case 'leftBottom':
        if (position.left   - width  < viewportPos.left) {
          return this.options.placement.replace(/^left/, 'right');
        }
        break;
    }

    return this.options.placement;
  }

  setCss(position, width, height) {
    this.options.placement = this.checkPlacement(position, width, height);

    const placements = {
      topLeft: {
        top: position.top  - height - this.options.offset,
        left: position.left
      },
      top: {
        top: position.top  - height - this.options.offset,
        left: position.left + position.width / 2 - width / 2
      },
      topRight: {
        top: position.top  - height - this.options.offset,
        left: position.left + position.width - width
      },
      leftTop: {
        top: position.top,
        left: position.left - width - this.options.offset
      },
      left: {
        top: position.top + position.height / 2 - height / 2,
        left: position.left - width - this.options.offset
      },
      leftBottom: {
        top: position.top + position.height - height,
        left: position.left - width - this.options.offset
      },
      rightTop: {
        top: position.top,
        left: position.left + position.width + this.options.offset
      },
      right: {
        top: position.top + position.height / 2 - height / 2,
        left: position.left + position.width + this.options.offset
      },
      rightBottom: {
        top: position.top + position.height - height,
        left: position.left + position.width + this.options.offset
      },
      bottomLeft: {
        top: position.top + position.height + this.options.offset,
        left: position.left
      },
      bottom: {
        top: position.top + position.height + this.options.offset,
        left: position.left + position.width / 2 - width / 2
      },
      bottomRight: {
        top: position.top + position.height + this.options.offset,
        left: position.left + position.width - width
      },
    }

    return placements[this.options.placement];
  }

  close(event) {
    this.$template.removeClass('cd-in');

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.$template.remove();
      this.$template = null;
    }, TRANSITION_DURATION);
  }
}

export default Tooltip;