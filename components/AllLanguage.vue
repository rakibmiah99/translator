<script setup>
const props = defineProps(['type'])
import {allLanguage, getLanguages} from "~/utils/languages";
import {useStore} from "~/composables/useStore";
const {fromLangStore} = useStore();


const languages = ref(allLanguage());
const selected = ref()

watch(selected, (lang) => {
  fromLangStore.value = lang;
})
</script>

<template>
  <UInputMenu
      v-model="selected"
      v-model:query="fromLangStore.name"
      :options="languages"
      placeholder="Select a language"
      option-attribute="name"
      by="code"
      class="w-[150px]"
  >
  </UInputMenu>
</template>

