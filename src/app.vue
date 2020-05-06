<template>
  <div id="app">
    <h1>Yellow dots</h1>

    <table>
      <tr>
        <th></th>
        <th>Row Parity</th>
        <th colspan="4">Time</th>
        <th colspan="3">Date</th>
        <th></th>
        <th>Separator</th>
        <th colspan="4">Serial</th>
        <th>?</th>
      </tr>
      <tr>
        <th></th>
        <th v-for="idx in 15">{{ idx }}</th>
      </tr>
      <tr v-for="n in 8" :key="n">
        <th>{{ n === 1 ? "Column Parity" : Math.pow(2, 8 - n) }}</th>
        <td v-for="column in 15" :key="column">
          <input v-if="n !== 1" type="checkbox" :value="Math.pow(2, 8 - n)" v-model="columns[column - 1]">
          <input v-else type="checkbox">
        </td>
      </tr>
      <tr>
        <td></td>
        <td v-for="column in 15" :key="column">
          {{ total[column - 1] }}
        </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td colspan="4">{{ total[4] | zero }}:{{ total[1] | zero }}</td>
        <td colspan="3">{{ 2000 + total[7] }}-{{ total[6] | zero }}-{{ total[5] | zero }}</td>
        <td></td>
        <td></td>
        <td colspan="4">
          {{ total[13] | zero }}{{ total[12] | zero }}{{ total[11] | zero }}{{ total[10] | zero }}
          or
          {{ total[12] | zero }}{{ total[11] | zero }}{{ total[10] | zero }}
        </td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

const sum = (values: number[]) => values.reduce((a, b) => a + b, 0);

@Component({
  filters: {
    zero(value: number) {
      return value.toString(10).padStart(2, "0");
    }
  }
})

export default class Main extends Vue {
  columns = Array(15).fill([])

  get total() {
    return this.columns.map(sum);
  }
};
</script>

<style>
table {
  border-collapse: collapse;
}

table, th, td {
  border: 1px solid black;
  text-align: center;
  vertical-align: middle;
}

td, th {
  padding: 10px;
}
</style>
