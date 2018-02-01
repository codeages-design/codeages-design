import Component from '../../js/component';

class Upload extends Component {
  constructor(props) {
    super();

    this.options = {
      parent: document,
      fileTypes: ['image/bmp', 'image/jpeg', 'image/png'],
      isLimitFileType: false,
      fileSize: 2,
    }

    Object.assign(this.options, props);

    this.init();
  }

  init() {
    this.events();
  }

  events() {
    $(this.options.parent).on('change.cd.upload', this.options.el, event => this.uploadEvent(event));
  }

  uploadEvent(event) {
    let target = event.currentTarget;
    let fr = new FileReader();

    if (!this.catch(event)) {
      return;
    };

    fr.onload = (e) => {
      let src = e.target.result;

      this.emit('success', event, $(target)[0].files[0], src);
    }

    fr.readAsDataURL($(target)[0].files[0]);
  }

  catch(event) {
    // 文件大小限制
    const FILE_SIZE_LIMIT = 'FILE_SIZE_LIMIT';
    // 文件类型限制
    const FLIE_TYPE_LIMIT = 'FLIE_TYPE_LIMIT';

    let el = event.currentTarget;
    let file = $(el)[0].files[0];

    if (file.size > this.options.fileSize * 1024 * 1024) {
      this.emit('error', FILE_SIZE_LIMIT);
      return false;
    }

    if (this.options.isLimitFileType && !this.options.fileTypes.includes(file.type)) {
      this.emit('error', FLIE_TYPE_LIMIT);
      return false;
    }

    return true;
  }
}

export default Upload;
