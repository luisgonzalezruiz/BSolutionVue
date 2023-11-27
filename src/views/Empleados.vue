<template>

  <v-card>
    <div class="long-title"><h3>Personal details</h3></div>
    <div id="form-container">
      <DxForm  id="form"  :col-count="2" :form-data="employee"  >
        <DxGroupItem caption="System Information" >
          <DxSimpleItem data-field="ID" />
          <DxSimpleItem data-field="FirstName" />
          <DxSimpleItem data-field="LastName"  />
          <DxSimpleItem data-field="HireDate"  />
          <DxSimpleItem data-field="Position"  />
          <DxSimpleItem data-field="OfficeNo"  />
        </DxGroupItem>
        <DxGroupItem
          caption="Personal Data"
        >
          <DxSimpleItem
            data-field="BirthDate"
          />
          <DxGroupItem
            caption="Home Address"
          >
            <DxSimpleItem
              data-field="Address"
            />
            <DxSimpleItem
              data-field="City"
            />
            <DxSimpleItem
              data-field="State"
            />
            <DxSimpleItem
              data-field="Zipcode"
            />
          </DxGroupItem>
        </DxGroupItem>
        <DxGroupItem
          caption="Contact Information"
        >
          <DxTabbedItem>
            <DxTabPanelOptions
              :defer-rendering="false"
            />
            <DxTab title="Phone">
              <DxSimpleItem  data-field="Phone" />
              <DxGroupItem caption="System Information" >
                <DxSimpleItem data-field="ID" />
                <DxSimpleItem data-field="FirstName" />
                <DxSimpleItem data-field="LastName"  />
                <DxSimpleItem data-field="HireDate"  />
                <DxSimpleItem data-field="Position"  />
                <DxSimpleItem data-field="OfficeNo"  />
              </DxGroupItem>
            </DxTab>
            <DxTab
              title="Skype"
            >
              <DxSimpleItem
                data-field="Skype"
              />
            </DxTab>
            <DxTab
              title="Email"
            >
              <DxSimpleItem
                data-field="Email"
              />
            </DxTab>
          </DxTabbedItem>
        </DxGroupItem>
      </DxForm>

      <dx-button
        text="Edit"
        icon="edit"
        styling-mode="outlined"
        type="default"
      />

      <div class="messages">
          <dx-button
            icon="belloutline"
            styling-mode="text"
          />
          <div class="dx-badge">
            4
          </div>
        </div>

    </div>
    {{ productos }}
  </v-card>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { DxButton } from 'devextreme-vue/button';
import {  DxForm, DxSimpleItem, DxGroupItem, DxTabbedItem, DxTabPanelOptions, DxTab, } from 'devextreme-vue/form';

//import service from './data.js';
import 'devextreme-vue/text-area';

import axios from 'axios'
const productos = ref([]);

//const RUTA_SERVIDOR = process.env.VITE_APP_RUTA_API;
const RUTA_SERVIDOR = process.env.URL;
//const RUTA_SERVIDOR = import.meta.env.VITE_APP_RUTA_AP;

console.log(RUTA_SERVIDOR);

const employee = {
      ID: 1,
      FirstName: 'John',
      LastName: 'Heart',
      CompanyName: 'Super Mart of the West',
      Position: 'CEO',
      OfficeNo: '901',
      BirthDate: new Date(1964, 2, 16),
      HireDate: new Date(1995, 0, 15),
      Address: '351 S Hill St.',
      City: 'Los Angeles',
      State: 'CA',
      Zipcode: '90013',
      Phone: '+1(213) 555-9392',
      Email: 'jheart@dx-email.com',
      Skype: 'jheart_DX_skype',
};

const axiosConfig = {
   headers: {
      Authorization: "Bearer " + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Imx1aXNAZ21haWwuY29tIiwidXNlck5NIjoibHVpcyIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL25hbWUiOiJsdWlzR29uemFsZXoiLCJ1c2VySWQiOiIxIiwiZW1wbG95ZWVJZCI6IjEiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3JvbGUiOlsiQWRtaW4iLCJQZXJtaXNzaW9ucy5Qcm9kdWN0cy5WaWV3IiwiUGVybWlzc2lvbnMuUHJvZHVjdHMuQWRkIl0sImp0aSI6ImZlZjkwMWFjLWY0ZTMtNDEyNS04ODAwLTM5NWM5YzgxNWJmNCIsImV4cCI6MTY5NDU4ODk5M30._NQob_tPD6eVOl_toGkE_D5cflStvE_C3IbKbZhfZyI'
   }
}

onMounted(() => {
    axios.get("http://localhost:4000/api/producto",axiosConfig)
        .then((response) => {
            productos.value = response.data.data;
            console.log(response.data.data);
        });
})

</script>

<style scoped>
#form-container {
  margin: 10px;
}

.long-title h3 {
  font-family:
    'Segoe UI Light',
    'Helvetica Neue Light',
    'Segoe UI',
    'Helvetica Neue',
    'Trebuchet MS',
    Verdana;
  font-weight: 200;
  font-size: 25px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
