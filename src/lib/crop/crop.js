import Component from '../../js/component';

class Crop extends Component {
  constructor(props) {
    super();

    this.options = {
      event: null,
      src: '',
    }

    Object.assign(this.options, props);

    this.init();
  }

  init() {
    this.crop();
  }

  crop() {
    let event = this.options.event;
    let src = this.options.src;

    let image = new Image();
    let $this = $(event.currentTarget);

    image.onload = () => {
      let width = image.width;
      let height = image.height;
      let cropWidth = this.options.cropWidth || $this.data('crop-width');
      let cropHeight = this.options.cropHeight || $this.data('crop-height');

      let scale = this.imageScale({
        naturalWidth: width,
        naturalHeight: height,
        cropWidth,
        cropHeight
      });

      let imageAttr = {
        'src': src,
        'natural-width': width,
        'natural-height': height,
        'width': scale.width,
        'height': scale.height,
      };

      this.emit('success', imageAttr);
    };

    image.src = src;
  }

  imageScale({ naturalWidth, naturalHeight, cropWidth, cropHeight }) {
    let width = cropWidth;
    let height = cropHeight;
  
    let naturalScale = naturalWidth / naturalHeight;
    let cropScale = cropWidth / cropHeight;
  
    if (naturalScale > cropScale) {
      width = naturalScale * cropWidth;
    } else {
      height =  cropHeight / naturalScale;
    }
  
    return {
      width,
      height
    }
  }
}

export default Crop;