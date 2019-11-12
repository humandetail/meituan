export default {
  formatJSON (data, key) {
    // console.log(data);
    return data.map((item) => {
      if (item[key]) {
        item[key] = item[key].split(',');
      }

      return item;
    });
  },

  /**
   * 去除字符中的空格
   * @param { String } str 需要去除空格的字符串
   * @returns String 
   */
  trimSpace (str) {
    str = '' + str;
    return str.replace(/\s+/g, '');
  },

  json2Arr (str) {
    return JSON.parse(str);
  },

  str2Arr (str) {
    return str.split(',');
  },

  replace2Space (str) {
    return str.replace(/,/g, ' ');
  },

  /**
   * 函数节流
   * @param { Function } fn 需要节流的函数 
   * @param { Number } delay 触发函数的毫秒数 
   */
  throttle (fn, delay) {
    let t = null,
        begin = new Date().getTime();
    return function () {
      let args = arguments,
          _self = this,
          cur = new Date().getTime();

      clearTimeout(t);

      if (cur - begin >= delay) {
        fn.apply(_self, args);
        begin = cur;
      } else {
        t = setTimeout(() => {
          fn.apply(_self, args);
        }, delay);
      }
      
    }
  }
}