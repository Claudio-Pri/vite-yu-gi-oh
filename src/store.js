import { reactive } from 'vue';

export const store = reactive({
    allCards: [],
    allArchetypes: [],
    selectedArchetype: '',
});