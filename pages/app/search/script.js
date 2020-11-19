import { mapActions, mapState } from 'vuex';

import socialMedia from '../../../assets/social-media.gif';
import orangeLogo from '../../../assets/orange-logo.png';

import Tooltip from '../../../components/app/tooltip/index.vue';
import FloatingText from '../../../components/app/floatingText/index.vue';
import Loading from '../../../components/app/loading/index.vue';

import api from '../../../config/api.js';

export default {
  layout: 'whiteBackground',
  components: {
    Tooltip,
    FloatingText,
    Loading,
  },
  data: () => ({
    socialMedia,
    orangeLogo,
    loading: false,
    valid: false,
    searchData: {
      query: '',
      limit: 0,
      note: '',
    },
    queryRules: [
      (v) => !!v || 'O campo pesquisa é obrigatório.',
      (v) =>
        v.length <= 20 || 'O campo pesquisa deve ter no máximo 20 caracteres.',
    ],
    email: '',
  }),
  methods: {
    async search() {
      if (this.searchData.query === '') {
        alert('O campo pesquisa é obrigatório.');
        return;
      }

      this.loading = true;
      await this.$axios
        .$get(api.getData, {
          params: {
            query: this.searchData.query,
            maximum: this.searchData.limit,
            note: this.searchData.note,
          },
        })
        .then((response) => {
          this.setID(response.id);
        })
        .catch((err) => {
          alert(err);
        });

      await this.$axios
        .$get(api.analysisData, {
          params: { id: this.idSearch },
        })
        .then((response) => {
          this.setSource('search');
        })
        .catch((err) => {
          alert(err);
        });
    },
    back() {
      this.$router.push('/');
    },
    ...mapActions({
      setID: 'setID',
      setSource: 'setSource',
    }),
  },
  computed: {
    ...mapState({
      idSearch: (state) => state.id,
    }),
  },
};
