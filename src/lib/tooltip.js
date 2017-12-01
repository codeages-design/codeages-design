import { getPosition, uuid } from '../utils';

const TRANSITION_DURATION = 300;

class Tooltip {
  constructor(props) {
    Object.assign(this, {
      parent: document,
      container: document.body,
      viewport: document.body,
      element: '[data-toggle="cd-tooltip"]',
      placement: 'top',
      offset: 10,
      delay: 0,
      title: 'Plase add title',
      type: 'tooltip'
    }, props);
   
    this.init();
  }

  init() {
    this.events();
  }

  events() {
    $(this.parent).on('mouseenter.cd.tooltip', this.element, (event) => this.showEvent(event));
    $(this.parent).on('mouseleave.cd.tooltip', this.element, (event) => this.closeEvent(event));
  }

  showEvent(event) {
    event.stopPropagation();
    let $this = $(event.currentTarget);

    Object.assign(this, {
      container: $this.data('container') ? $this.data('container') : this.container,
      title: $this.data('title') ? $this.data('title') : this.title,
      placement : $this.data('placement') ? $this.data('placement') : this.placement,
    });
    
    this.$template ? this.$template.remove() : null;

    this.$template = $(document.createElement('div'))
                      .addClass('cd-tooltip')
                      .attr('id', this.getUID(this.type))
                      .html(this.title);

    this.container ? this.$template.appendTo(this.container) : this.$template.insertAfter($this);
    
    const position = getPosition(event.currentTarget);
    const width = this.$template[0].offsetWidth;
    const height = this.$template[0].offsetHeight;

    this.$template.css(
      this.setCss(position, width, height)
    ).addClass(this.placement);

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.$template.addClass('cd-in');
    }, TRANSITION_DURATION + this.delay);
  }

  getUID(prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix));
    return prefix;
  }

  checkPlacement(position, width, height) {
    if (!/^(top|bottom|left|right)(Top|Bottom|Left|Right)?$/g.test(this.placement)) {
      throw new Error('Plase setting this right placement');
    }

    const viewportPos = getPosition(this.viewport);

    switch(this.placement) {
      case 'bottom':
        if (position.bottom + height > viewportPos.bottom) {
          return 'top';
        }
        break;
      case 'bottomLeft':
        if (position.bottom + height > viewportPos.bottom) {
          return 'topLeft';
        }
        break;
      case 'bottomRight':
        if (position.bottom + height > viewportPos.bottom) {
          return 'topRight';
        }
        break;
      case 'top': 
        if (position.top    - height < viewportPos.top) {
          return 'bottom';
        }
        break;
      case 'topLeft': 
        if (position.top    - height < viewportPos.top) {
          return 'bottomLeft';
        }
        break;
      case 'topRight': 
        if (position.top    - height < viewportPos.top) {
          return 'bottomRight';
        }
        break;
      case 'right':
        if (position.right  + width  > viewportPos.width) {
          return 'left';
        }
        break;
      case 'rightTop':
        if (position.right  + width  > viewportPos.width) {
          return 'leftTop';
        }
        break;
      case 'rightBottom':
        if (position.right  + width  > viewportPos.width) {
          return 'leftBottom';
        }
        break;
      case 'left':
        if (position.left   - width  < viewportPos.left) {
          return 'right';
        }
        break;
      case 'leftTop':
        if (position.left   - width  < viewportPos.left) {
          return 'rightBottom';
        }
        break;
      case 'leftBottom':
        if (position.left   - width  < viewportPos.left) {
          return 'rightBottom';
        }
        break;
    }

    return this.placement;
  }

  setCss(position, width, height) {
    this.placement = this.checkPlacement(position, width, height);

    const placements = {
      topLeft: {
        top: position.top  - height - this.offset,
        left: position.left
      },
      top: {
        top: position.top  - height - this.offset,
        left: position.left + position.width / 2 - width / 2
      },
      topRight: {
        top: position.top  - height - this.offset,
        left: position.left + position.width - width
      },
      leftTop: {
        top: position.top,
        left: position.left - width - this.offset
      },
      left: {
        top: position.top + position.height / 2 - height / 2,
        left: position.left - width - this.offset
      },
      leftBottom: {
        top: position.top + position.height - height,
        left: position.left - width - this.offset
      },
      rightTop: {
        top: position.top,
        left: position.left + position.width + this.offset
      },
      right: {
        top: position.top + position.height / 2 - height / 2,
        left: position.left + position.width + this.offset
      },
      rightBottom: {
        top: position.top + position.height - height,
        left: position.left + position.width + this.offset
      },
      bottomLeft: {
        top: position.top + position.height + this.offset,
        left: position.left
      },
      bottom: {
        top: position.top + position.height + this.offset,
        left: position.left + position.width / 2 - width / 2
      },
      bottomRight: {
        top: position.top + position.height + this.offset,
        left: position.left + position.width - width
      },
    }

    return placements[this.placement];
  }

  closeEvent(event) {
    this.$template.removeClass('cd-in');

    clearTimeout(this.timeout);

    this.timeout = setTimeout(() => {
      this.$template.remove();
      this.$template = null;
    }, TRANSITION_DURATION);
  }
}

function tooltip(props) {
  return new Tooltip(props);
}

export default tooltip;