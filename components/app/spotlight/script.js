import moment from 'moment';
import sadFox from '../../../assets/sad-fox.png';

export default {
  props: {
    view: Function,
    item: Object,
    failed: Boolean,
    failedMessage: String,
  },
  data: () => ({
    sadFox,
  }),
  filters: {
    timeFormat(value) {
      const time = parseFloat(value);
      return time.toFixed(2) + 's';
    },
    dateFormat(value) {
      return moment(value).format('DD/MM/YYYY');
    },
  },
};
