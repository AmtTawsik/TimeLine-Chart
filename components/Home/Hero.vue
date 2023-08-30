<template>
  <div class="w-11/12 mx-auto mt-5">
    <div class="chart-container">
      <h5 class="md:text-2xl font-bold text-lg mb-2">{{ timelineData?.Qualyval?.name }}:</h5>
      <GChart :data="dataWithAnnotations" :options="options" :type="type" :settings="settings" />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { GChart } from "vue-google-charts";
import timelineData from "../../timelineData.json"; 
console.log(timelineData.Qualyval.name)


const columns = [
  { type: "string", id: "President" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" },
  { type: "string", role: "annotation" },
];

export default defineComponent({
  name: "GoogleChart",
  components: {
    GChart,
  },
  data() {
    return {
      timelineData
    };
  },
  setup() {
    const type = "Timeline";
    const rows = timelineData.Qualyval.datas.map(row => [
      row[0],
      new Date(row[1]),
      new Date(row[2]),
      row[3]
    ]);

    const dataWithAnnotations = [columns, ...rows];
    const options = {
      // Set responsive width and height
      width: "90%",
      height: 600,
      // Add more options as needed
    };
    const settings = {
      packages: ["timeline"],
    };

    return {
      type,
      dataWithAnnotations,
      options,
      settings,
    };
  },
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 100vh;
  /* Ensure the container takes full viewport height */
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
</style>
