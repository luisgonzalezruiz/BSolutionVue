<template>
  <v-card color="" border="">
    <!-- onload="resizeIframe(this)" -->
    <iframe id="iframe" title="Dashboard_Ventas" 
            width="100%" height="700" 
            src="https://app.powerbi.com/view?r=eyJrIjoiOWJmNTg4NDItZjYwZi00MzNhLWI0MDItZTM4MTZkNGMxYTc4IiwidCI6IjQ3NmQ5OWNiLWUxY2QtNDVkZC1hM2MwLTgwZDEyZGQyNTA1ZSJ9" frameborder="0" allowFullScreen="true">
  
    </iframe>

<!--     <object data='https://app.powerbi.com/view?r=eyJrIjoiOWJmNTg4NDItZjYwZi00MzNhLWI0MDItZTM4MTZkNGMxYTc4IiwidCI6IjQ3NmQ5OWNiLWUxY2QtNDVkZC1hM2MwLTgwZDEyZGQyNTA1ZSJ9' 
    type="text/html" width="100%" height="100%">
    </object> -->

  </v-card>

</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { DxScrollView } from 'devextreme-vue/scroll-view';
import { DxButton } from 'devextreme-vue/button';
import { DxDropDownButton, DxItem as DxDropDownItem } from 'devextreme-vue/drop-down-button';
import {  DxToolbar,  DxItem as DxToolbarItem,} from 'devextreme-vue/toolbar';
// eslint-disable-next-line import/no-unresolved
import { getContact } from '@/data'; // 'dx-template-gallery-data';
import type { Contact } from '@/types/contact';

import ContactForm from '@/components/library/contact-form.vue';
import ContactCards from '@/components/utils/contact-cards.vue';

const contactId = 12;
const contactName = ref('');
const contactData = ref<Contact>();
const isLoading = ref(false);

const alto_iframe = ref(700);

async function loadData() {
  isLoading.value = true;
  const data = await getContact(contactId);

  contactData.value = data;
  contactName.value = data.name;
  isLoading.value = false;

  alto_iframe.value = 700; // iframe.contentWindow.document.body.scrollHeight + "px";

}

const refresh = () => {
  loadData();
};

onMounted(() => {
  loadData();
});

const copyOptions = {
  text: 'Copy',
  icon: 'copy',
  stylingMode: 'text',
};

const refreshOptions = {
  text: 'Refresh',
  icon: 'refresh',
  onClick: refresh,
  stylingMode: 'text',
};

function resizeIframe(iframe) {
    iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
}

</script>

<style scoped lang="scss">
// @use "@/variables" as *;
@import '@/variables.scss';
//@use "sass:math";


@media only screen and (max-width: 875px) {
  :deep(.contact-name-toolbar-item) {
    min-width: calc(var(--left-panel-width) + var(--right-panel-width) - 145px);
  }
}

.dx-toolbar {
  margin-bottom: calc(var(--toolbar-margin-bottom) / 2);

  :deep(.dx-toolbar-label > div) {
    @include header();
  }
}

.view-wrapper {
  --left-panel-width: 400px;
  --right-panel-width: 360px;

  padding: var(--content-padding) var(--content-padding) 0 var(--content-padding);

  .panels {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;

    .left {
      flex: 1 var(--left-panel-width);
      margin-top: 8px;
    }

    .right {
      flex: 1 calc(100% - var(--left-panel-width) - 20px);
      margin-top: 8px;
      min-width: 340px;
    }
  }
}
</style>