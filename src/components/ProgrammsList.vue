<template>
    <div v-if="programms.length > 0">
    <ProgrammsListItem
        v-for="programm in programms"
        v-on:remove-from-cart="$emit('remove-from-cart', $event)"
        :key="programm.id"
        :programm="programm"
    />
    </div>
    <p v-else>No programms available</p>
</template>

<script>
import ProgrammsListItem from './ProgrammsListItem.vue';

export default {
    name: 'ProgrammsList',
    props: ['programms'],
    components: {
    ProgrammsListItem,
},

}
</script>