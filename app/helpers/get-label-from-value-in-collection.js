import { helper } from '@ember/component/helper';

export function getLabelFromValueInCollection(params, hash) {
  let array = hash["array"];
  let value = hash["value"];

  if(!array || !value){
    return null;
  }

  let item = array.filter(item => {
    return item.value === value;
  })[0];

  if(item){
    return item.label;
  }
  else return null;
}

export default helper(getLabelFromValueInCollection);
