<script>
import { Doughnut } from 'vue-chartjs';

export default {
  extends: Doughnut,
  // eslint-disable-next-line
  props: ['chartData', 'options'],
  mounted() {
    this.renderChart(this.chartData, this.options);
  },
  methods: {
    update() {
      this.$data._chart.update();
    },
  },
};
</script>
