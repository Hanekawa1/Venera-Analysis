import moment from 'moment';
import { mapActions } from 'vuex';
import Spotlight from '../../../components/app/spotlight/index.vue';
import orangeLogo from '../../../assets/orange-logo.png';
import api from '../../../config/api.js';

export default {
  layout: 'whiteBackground',
  components: {
    Spotlight,
  },
  data: () => ({
    orangeLogo,
    loading: true,
    failedFetch: false,
    top3: [],
    headers: [
      { text: 'Pesquisa', value: 'query' },
      { text: 'Anotação', value: 'note' },
      { text: 'Quantidade max.', value: 'maximum' },
      { text: 'Quantidade total', value: 'count' },
      { text: 'Tempo de análise', value: 'time' },
      { text: 'Data Realizada', value: 'date' },
      { text: 'Status', value: 'status' },
      { text: 'Visualizar', value: 'view' },
    ],
    items: [],
  }),
  methods: {
    view(id) {
      this.setID(id);
      this.setSource('history');
      this.$router.push('/app/analysis');
    },
    back() {
      this.$router.push('/');
    },
    applyFilters(response) {
      return response.filter((i) => {
        i.date = moment(i.date).format('DD/MM/YYYY');
        i.time = i.time.toFixed(2) + 's';
        let count = 0;
        i.comments.map((el) => {
          count += el.content.length;
        });

        i.count = count;
      });
    },
    ...mapActions({
      setID: 'setID',
      setSource: 'setSource',
    }),
  },
  async mounted() {
    await this.$axios
      .$get(api.getTopSearches)
      .then((response) => {
        if (response.status === 404) {
          this.failedFetch = true;
          return;
        }

        this.applyFilters(response);
        this.top3 = response;
      })
      .catch((err) => {
        this.failedFetch = true;
        alert(err);
      });

    await this.$axios
      .$get(api.getSearches)
      .then((response) => {
        if (response.status === 404) {
          this.loading = false;
          return;
        }
        this.applyFilters(response);
        this.items = response;
        this.loading = false;
      })
      .catch((err) => {
        this.loading = false;
        alert(err);
      });
  },
};
