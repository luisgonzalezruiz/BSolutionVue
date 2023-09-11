<template>
  <v-card color="#ecf0f1" border="">
    <v-row>
      <v-col>
          <div class="dx-fieldset">
            <div class="dx-field">
              <div class="dx-field-label">Default mode</div>
              <div class="dx-field-value">
                <DxTextBox
                  value="John Smith"
                  :input-attr="{ 'aria-label': 'Name' }"
                />
              </div>
            </div>
            <div class="dx-field">
              <div class="dx-field-label">With placeholder</div>
              <div class="dx-field-value">
                <DxTextBox
                  placeholder="Enter full name here..."
                  :input-attr="{ 'aria-label': 'Full Name' }"
                />
              </div>
            </div>
            <div class="dx-field">
              <div class="dx-field-label">With clear button</div>
              <div class="dx-field-value">
                <DxTextBox
                  :show-clear-button="true"
                  :input-attr="{ 'aria-label': 'Name' }"
                  value="John Smith"
                />
              </div>
            </div>
            <div class="dx-field">
              <div class="dx-field-label">Password mode</div>
              <div class="dx-field-value">
                <DxTextBox
                  :show-clear-button="true"
                  mode="password"
                  :input-attr="{ 'aria-label': 'Password' }"
                  placeholder="Enter password"
                  value="f5lzKs0T"
                />
              </div>
            </div>
            <div class="dx-field">
              <div class="dx-field-label">Text mask</div>
              <div class="dx-field-value">
                <DxTextBox
                  :mask-rules="rules"
                  :input-attr="{ 'aria-label': 'Mask' }"
                  mask="+1 (X00) 000-0000"
                />
              </div>
            </div>
            <div class="dx-field">
              <div class="dx-field-label">Disabled</div>
              <div class="dx-field-value">
                <DxTextBox
                  :disabled="true"
                  :input-attr="{ 'aria-label': 'Name' }"
                  value="John Smith"
                />
              </div>
            </div>
          </div>
      </v-col>

      <v-col>
        <v-layout>
          <div class="dx-fieldset">
            <div class="dx-field">
                <div class="dx-field-label">Default mode</div>
                <div class="dx-field-value">
                  <DxTextBox
                    value="John Smith"
                    :input-attr="{ 'aria-label': 'Name' }"
                  />
                </div>
            </div>
            <div class="dx-field">
                <div class="dx-field-label">Default mode</div>
                <div class="dx-field-value">
                  <DxTextBox
                    value="John Smith"
                    :input-attr="{ 'aria-label': 'Name' }"
                  />
                </div>
            </div>
          </div>
        </v-layout>

      </v-col>

      <v-col>
        <v-form v-model="valid">
          <v-container>
            <v-row>
              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="firstname"
                  :rules="nameRules"
                  :counter="10"
                  label="First name"
                  required
                  hide-details
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="lastname"
                  :rules="nameRules"
                  :counter="10"
                  label="Last name"
                  hide-details
                  required
                ></v-text-field>
              </v-col>

              <v-col
                cols="12"
                md="4"
              >
                <v-text-field
                  v-model="email"
                  :rules="emailRules"
                  label="E-mail"
                  hide-details
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" md="12">
        <v-tabs v-model="tab" color="deep-purple-accent-4"  align-tabs="center" >
            <v-tab :value="1">Landscape</v-tab>
            <v-tab :value="2">City</v-tab>
            <v-tab :value="3">Abstract</v-tab>
          </v-tabs>
          <v-window v-model="tab">
            <v-window-item v-for="n in 3" :key="n" :value="n" >
              <v-container fluid>
                <v-row>
                  <v-col  v-for="i in 6" :key="i" cols="12" md="4">
                    <v-img
                      :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                      :lazy-src="`https://picsum.photos/10/6?image=${i * n * 5 + 10}`"
                      aspect-ratio="1"
                    ></v-img>
                  </v-col>
                </v-row>
              </v-container>
            </v-window-item>
          </v-window>
      </v-col>






<!--       <v-col cols="12" md="6">
        <h2>row 2, col 1</h2>
      </v-col>
      <v-col cols="12" md="6">
        <h2>row 2, col 2</h2>
      </v-col> -->
    </v-row>
  </v-card>

</template>

<script setup>
  import { ref } from 'vue';
  import DxTextBox from 'devextreme-vue/text-box';


  const tab = ref(null);

  //const loaded = ref(false);
  //const loading = ref(false);

/*
 function onClick () {
  loading.value = true

  setTimeout(() => {
    loading.value = false
    loaded.value = true
  }, 2000)
}
*/

</script>
