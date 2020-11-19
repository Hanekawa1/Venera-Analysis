import { mapGetters, mapActions } from 'vuex';
import IndexImage from '../assets/index.png';
import LogoImage from '../assets/black-logo.png';
import Status from '../assets/status.gif';

export default {
  name: 'index',
  data: () => ({
    indexImage: IndexImage,
    logoCima: LogoImage,
    textWelcome:
      'Seja bem vindo(a) ao Venera, sua plataforma de análise de comentários',
    textIntroduction:
      'Quer saber o que as pessoas estão dizendo sobre sua Instituição de ensino?',
    status: Status,
    toggleHealthcheckInfo: false,
  }),
  computed: {
    ...mapGetters({
      teste: 'teste',
    }),
  },
  methods: {
    onHoverHealthcheck() {
      this.tryTeste();
      return !this.toggleHealthcheckInfo;
    },
    searchPage() {
      this.$router.push('/app/search');
    },
    historyPage() {
      this.$router.push('/app/history');
    },
    ...mapActions({
      tryTeste: 'tryTeste',
    }),
  },
};
