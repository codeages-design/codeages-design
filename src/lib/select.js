
import SelectSingle from './select-single';
import SelectMulti from './select-multi';

function select(props) {
  if (props.type === 'multi') {
    return new SelectMulti(props);
  } else {
    return new SelectSingle(props);
  }
}

export default select;