<template>
    <div class="grid-wrap">
        <ProgrammsGridItem
            v-for="programm in programms"
            :key="programm.id"
            :programm="programm"/>
    </div>
</template>

<script>
import ProgrammsGridItem from './ProgrammsGridItem.vue';

export default {
    name: 'ProgrammsGrid',
    props: ['programms'],
    components: {
        ProgrammsGridItem
    },
}
</script>

<style scoped>
  .grid-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 16px;
  }
</style>