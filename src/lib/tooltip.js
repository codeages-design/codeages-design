import { getPosition } from '../utils';

const TRANSITION_DURATION = 300;

class Tooltip {
  constructor(props) {
    Object.assign(this, {
      body: document.body,
      parent: document,
      element: '[data-toggle="cd-tooltip"]',
      placement: 'top',
      offset: 10,
      delay: 0,
      title: 'Plase add title'
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
      container: $this.data('container') || event.currentTarget,
      title: $this.data('title'),
      placement : $this.data('placement'),
    });

    this.$template = $(document.createElement('div'))
                      .addClass(`cd-tooltip ${this.placement}`)
                      .html(this.title).appendTo(this.body);
    
    const position = getPosition(event.currentTarget);
    const width = this.$template[0].offsetWidth;
    const height = this.$template[0].offsetHeight;

    this.$template.css({
      top: position.top  - height - this.offset,
      left: position.left + position.width / 2 - width / 2
    });

    setTimeout(() => {
      this.$template.addClass('cd-in');
    }, TRANSITION_DURATION);
  }

  setCss(place) {
    let placement = {
      'top': function() {

      }
    }

    return placement[place];
  }

  closeEvent(event) {
    setTimeout(() => {
      this.$template.removeClass('cd-in');
    }, this.delay);

    setTimeout(() => {
      this.$template.remove();
    }, TRANSITION_DURATION + this.delay);
  }
}

function tooltip(props) {
  return new Tooltip(props);
}

export default tooltip;