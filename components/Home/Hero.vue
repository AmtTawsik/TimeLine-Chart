<template>
  <div class="w-11/12 mx-auto mt-5">
    <div class="chart-container">
      <GChart :data="dataWithAnnotations" :options="options" :type="type" :settings="settings" />
    </div>
  </div>
</template>

<script>
import { defineComponent, h } from "vue";
import { GChart } from "vue-google-charts";

const columns = [
  { type: "string", id: "President" },
  { type: "date", id: "Start" },
  { type: "date", id: "End" },
  { type: "string", role: "annotation" },
];

const rows = [
  ["Washington", new Date(2020, 8, 10), new Date(2021, 11, 10), "Project 1"],
  ["Adams & kasem", new Date(2021, 1, 1), new Date(2021, 8, 10), "Project 2"],
  ["Jefferson", new Date(2021, 8, 1), new Date(2021, 11, 10), "Project 3"],
  ["Asif & Rofik", new Date(2021, 3, 30), new Date(2022, 4, 4), "Project 4"],
  ["John & Suvojit", new Date(2022, 2, 4), new Date(2022, 5, 4), "Project 5"],
  ["Hasib, Rahul & Wami", new Date(2022, 2, 4), new Date(2022, 7, 4), "Project 6"],
  ["Sehab", new Date(2021, 5, 15), new Date(2021, 8, 20), "Project 7"],
  ["Fahim & Mubin", new Date(2022, 3, 10), new Date(2022, 6, 25), "Project 8"],
  ["Abdullah", new Date(2021, 8, 1), new Date(2021, 11, 10), "Project 9"],
  ["Melbura", new Date(2023, 1, 15), new Date(2023, 4, 5), "Project 10"],
  ["Nenson", new Date(2022, 5, 10), new Date(2022, 8, 20), "Project 11"],
  ["Rohan", new Date(2021, 0, 15), new Date(2021, 3, 30), "Project 12"],
  ["Galib", new Date(2022, 7, 15), new Date(2022, 10, 25), "Project 13"]
];

export default defineComponent({
  name: "GoogleChart",
  components: {
    GChart,
  },
  setup() {
    const type = "Timeline";
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
