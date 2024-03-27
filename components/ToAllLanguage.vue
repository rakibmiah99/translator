<script setup>
import {allLanguage, getLanguages} from "~/utils/languages";
import {useStore} from "~/composables/useStore";
const {toLangStore} = useStore();


const languages = ref(allLanguage());
const selected = ref()

watch(selected, (lang) => {
  toLangStore.value = lang;
})
</script>

<template>
  <UInputMenu
      v-model="selected"
      v-model:query="toLangStore.name"
      :options="languages"
      placeholder="Select a language"
      option-attribute="name"
      by="code"
      class="w-[150px]"
  >
  </UInputMenu>
</template>

