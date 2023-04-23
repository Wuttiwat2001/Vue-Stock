<template>
    <Bar
    v-if="loaded"
    :options="chartOptions"
    :data="chartData"
    :style="myStyles"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  props: {
    chartData: {
        type: Object,
      },
  },
  data() {
    return {
      chartOptions: {
        responsive: true
      },
      loaded: false
    }
  },
  computed:{
    myStyles(){
      return{
        position: 'relative'
      }
    }
  },
  mounted(){
    this.loaded = true
  }
}
</script>