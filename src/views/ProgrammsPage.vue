<template>
    <div id="page-wrap">
       <ProgrammsGrid :programms="programms" />
    </div>
</template>

<script>
import axios from 'axios';
import ProgrammsGrid from '../components/ProgrammsGrid.vue';
export default {
    name: 'ProgrammsPage',
    components: {
        ProgrammsGrid
    },
    data() {
        return {
            programms: [],
        }
    },
    async created() {
        const result = await axios.get('/api/programms');
        const programms = result.data;
        this.programms = programms;
    }
}
</script>

