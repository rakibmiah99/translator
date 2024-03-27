<template>
    <div class="mt-6">

      <div class="flex gap-2">
        <div class="w-[50%] h-[300px]">
          <AllLanguage/>
          <UTextarea
              class="w-full mt-2"
              textareaClass="h-[300px]  rounded-none"
              autoresize
              placeholder="Search..."
              v-model="textStore"
              :model-value="textStore"
          />
        </div>
        <div class="w-[50%] h-[300px]">
          <div class="text-right">
            <ToAllLanguage class="inline-block"/>
          </div>
          <UTextarea
              class="w-full h-full mt-2 rounded-none"
              autoresize
              disabled
              placeholder="Search..."
              textareaClass="h-[300px]  rounded-none"
              :model-value="output"
          />
        </div>
      </div>
    </div>
</template>

<script setup>
import {translate} from "~/composables/api.js";
import {useStore} from "~/composables/useStore.js";
import {allLanguage} from "~/utils/languages.js";
import ToAllLanguage from "~/components/ToAllLanguage.vue";
const {fromLangStore, toLangStore, textStore} = useStore();

const output = ref();
let timeout;
watch(textStore, (value) => {
  output.value = 'translating...';
  clearTimeout(timeout)
  timeout = setTimeout(async () => {
    output.value = await fetchText(value);
  }, 3000)
})
const fetchText = async (text) => {
  let data = await translate(toLangStore.value.code ?? 'bn', text)
  console.log(data)
  data = data[0];
  let detectLanguage = data.detectedLanguage.language;
  let translation = data.translations[0];
  fromLangStore.value = allLanguage().find((item) => item.code === detectLanguage);
  toLangStore.value = allLanguage().find((item) => item.code === translation.to);
  return translation.text;
}

</script>