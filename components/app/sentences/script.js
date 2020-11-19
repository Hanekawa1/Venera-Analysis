export default {
  props: {
    sentences: Array,
  },
  filters: {
    htmlDecode(input) {
      const e = document.createElement('div');
      e.innerHTML = input;
      return e.childNodes[0].nodeValue;
    },
  },
};
