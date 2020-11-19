import { mapState } from 'vuex';

export default {
  data: () => ({
    step: 0,
    status: [
      'Bisbilhotando redes sociais',
      'Fuçando em coisas alheias',
      'Analisando o sentimento dos comentários',
      'Procurando a raposa fugitiva',
      'Montando gráficos e outras coisas',
      'Preparando o café e os biscoitos',
      'Quase lá...',
    ],
    currentStatus: 'Iniciando busca...',
    x: true,
  }),
  mounted() {
    setInterval(() => {
      this.changeText();
    }, 7000);
  },
  methods: {
    changeText() {
      this.x = !this.x;

      this.currentStatus = this.status[this.step];
      this.step += 1;
      if (this.step === status.length) {
        this.step = 1;
      }

      setTimeout(() => {
        this.x = !this.x;
      }, 2000);
    },
  },
  watch: {
    step() {
      if (this.step === 6) {
        clearInterval();
      }
    },
    source() {
      if (this.source === 'search') {
        this.$router.push('/app/analysis');
      }
    },
  },
  computed: {
    ...mapState({
      source: (state) => state.source,
    }),
  },
};
