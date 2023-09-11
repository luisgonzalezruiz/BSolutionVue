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
            <DxTab
              title="Phone"
            >
              <DxSimpleItem
                data-field="Phone"
              />
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
    </div>
  </v-card>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import {  DxForm, DxSimpleItem, DxGroupItem, DxTabbedItem, DxTabPanelOptions, DxTab, } from 'devextreme-vue/form';
//import service from './data.js';
import 'devextreme-vue/text-area';

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
  font-size: 28px;
  text-align: center;
  margin-bottom: 20px;
}
</style>
