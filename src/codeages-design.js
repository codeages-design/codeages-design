import 'jquery';

import radio from './lib/radio';
import confirm from './lib/confirm';
import loading from './lib/loading';
import upload from './lib/upload';
import table from './lib/table';
import alert from './lib/alert';

import './less/codeages-design.less';

let codeAgesDisign = {
  radio,
  confirm,
  loading,
  upload,
  table,
  alert
};

window.cd = codeAgesDisign;