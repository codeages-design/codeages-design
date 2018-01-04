import { getPosition, getMousePos } from '../js/utils';

const RATE_MAX = 5;

class Rate {
  constructor(props, callback) {
    this.options = {
      el: null,
      score: 0,
    };

    Object.assign(this.options, props);

    this.$rate = null;
    this.$el = $(this.options.el);

    this.tempScore = this.options.score;

    this.verify();
    this.init();
  }

  verify() {
    if (parseInt(this.options.score) > RATE_MAX || parseInt(this.options.score) < 0) {
      throw new Error(`to score, please enter an integer from 0 to ${RATE_MAX}`);
    }
  }

  init() {
    this.$rate = $(document.createElement('ul')).addClass('cd-rate');

    this.addStar(this.options.score);
    this.$el.before(this.$rate);

    this.event();
  }

  addStar(score) {
    let star = ({className = ''}) => {
      return `
        <li class="rate-star ${className}">
          <i class="cd-icon cd-icon-star"></i>
        </li>
      `;
    };
   
    for (let i = 1; i <= RATE_MAX; i ++) {
      let starNode = star({
        className: i <= score ? 'rate-star-full' : ''
      })

      this.$rate.append(starNode);
    }
  }


  event() {
    this.$rate.on('mousemove.cd.rate', (event) => this.mousemove(event));
    this.$rate.on('mouseleave.cd.rate', (event) => this.mouseleave(event));
    this.$rate.on('click.cd.rate', (event) => this.select(event));
  }

  mousemove(event) {
    const ratePos = getPosition(event.currentTarget);
    const mousePos = getMousePos(event);

    const starWidth = ratePos.width / RATE_MAX;

    this.tempScore = Math.ceil((parseInt(mousePos.x) - parseInt(ratePos.x)) / starWidth);

    this.adjustStar(this.tempScore);
  }

  mouseleave(event) {
    this.tempScore = this.options.score;
    this.adjustStar(this.tempScore);
  }

  select(event) {
    this.options.score = this.tempScore;
    this.$el.val(this.options.score);
  }

  adjustStar(score) {
    this.$rate.children().each(function(index) {
      if (index < score) {
        $(this).addClass('rate-star-full');
      } else {
        $(this).removeClass('rate-star-full');
      }
    });
  }
}

function rate(props, callback) {
  return new Rate(props, callback);
}

export default rate;
