import { mapState } from 'vuex';
import moment from 'moment';
import DoughnutExample from '../../../components/DoughnutChart.vue';
import Sentences from '../../../components/app/sentences/index.vue';
import orangeLogo from '../../../assets/orange-logo.png';
import Tooltip from '../../../components/app/tooltip/index.vue';
import api from '../../../config/api.js';

export default {
  components: { DoughnutExample, Sentences, Tooltip },
  layout: 'whiteBackground',
  data: () => ({
    document: {},
    analysis: {},
    chartsData: {},
    chartDataSourceData: [],
    orangeLogo,
    sentiment: '',
    showQuantity: true,
    showSource: false,
    newSearch: true,
    chartData: {},
    chartDataSource: {},
    options: {
      title: {
        display: true,
        text: 'Quantidade de avaliações',
      },
    },
    optionsSource: {
      title: {
        display: true,
        text: 'Quantidade de comentários por fonte',
      },
    },
  }),
  async mounted() {
    await this.$axios
      .$get(api.getByID, {
        params: {
          id: this.idSearch,
        },
      })
      .then((response) => {
        this.document = response;
        this.analysis = response.analysis;
        this.chartData = response.analysis.chartsDataSentiment;
        this.chartDataSource = response.analysis.chartsDataSource;

        if (response.analysis.totalAverage > 0.6) {
          this.sentiment = 'positive';
        } else if (response.analysis.totalAverage < 0.4) {
          this.sentiment = 'negative';
        } else {
          this.sentiment = 'neutral';
        }

        this.changeChart();
      })
      .catch((err) => {
        alert(err);
      });
  },
  filters: {
    percentFormat(value) {
      const percent = parseFloat(value);
      return percent.toFixed(2);
    },
    timeFormat(value) {
      const time = parseFloat(value);
      return time.toFixed(2) + 's';
    },
    dateFormat(value) {
      return moment(value).format('DD/MM/YYYY');
    },
    htmlDecode(input) {
      const e = document.createElement('div');
      e.innerHTML = input;
      return e.childNodes[0].nodeValue;
    },
  },
  methods: {
    back() {
      this.$router.push('/');
    },
    changeChart() {
      this.showQuantity = !this.showQuantity;
      this.showSource = !this.showSource;
    },
    async deleteSearch() {
      await this.$axios
        .$delete(api.deleteSearch, {
          params: { id: this.idSearch },
        })
        .then((response) => {
          alert(response.message);
        })
        .catch((err) => {
          alert(err);
        });
      this.$router.push('/');
    },
  },
  computed: {
    ...mapState({
      idSearch: (state) => state.id,
      source: (state) => state.source,
    }),
  },
};
