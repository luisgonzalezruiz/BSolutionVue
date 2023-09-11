<template>
  <v-container class="fill-height">
      <v-responsive class="align-center text-center fill-height">
        <v-img height="300" src="@/assets/logo.svg" />

        <div class="text-body-2 font-weight-light mb-n1">Welcome to</div>

        <h1 class="text-h2 font-weight-bold">Vuetify</h1>

        <div class="py-14" />

        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
              <v-text-field
            clearable
            label="Label"
            prepend-icon="$vuetify"
            variant="outlined"
          ></v-text-field>

          </v-col>

          <v-col cols="auto">
            <v-text-field
              clearable
              label="Label"
              prepend-icon="$vuetify"
              variant="outlined"
            ></v-text-field>
          </v-col>

          <v-col cols="auto">
                <v-text-field
                  base-color="blue"
                  clearable
                  label="Label"
                  prepend-icon="$vuetify"
                  variant="outlined"
                ></v-text-field>
          </v-col>
        </v-row>

      </v-responsive>

      <v-card  class="mx-auto"  max-width="344" title="User Registration" >
          <v-container>
            <v-text-field
              v-model="first"
              color="primary"
              label="First name"
              variant="underlined"
            ></v-text-field>

            <v-text-field
              v-model="last"
              color="primary"
              label="Last name"
              variant="underlined"
            ></v-text-field>

            <v-text-field
              v-model="email"
              color="primary"
              label="Email"
              variant="underlined"
            ></v-text-field>

            <v-text-field
              v-model="password"
              color="primary"
              label="Password"
              placeholder="Enter your password"
              variant="underlined"
            ></v-text-field>

            <v-checkbox
              v-model="terms"
              color="secondary"
              label="I agree to site terms and conditions"
            ></v-checkbox>
            <v-card
                class="mx-auto"
                color="grey-lighten-3"
                max-width="400"
              >
              <v-card-text>
                    <v-text-field
                      :loading="loading"
                      density="compact"
                      variant="solo"
                      label="Search templates"
                      append-inner-icon="mdi-magnify"
                      single-line
                      hide-details
                      @click:append-inner="onClick"
                    ></v-text-field>
              </v-card-text>
            </v-card>

          </v-container>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn color="success">
              Complete Registration

              <v-icon icon="mdi-chevron-right" end></v-icon>
            </v-btn>
          </v-card-actions>
      </v-card>
  </v-container>

  <!-- <v-footer>Test</v-footer> -->
</template>

<script setup>
  import { ref } from 'vue';

  const loaded = ref(false);
  const loading = ref(false);

 function onClick () {
  loading.value = true

  setTimeout(() => {
    loading.value = false
    loaded.value = true
  }, 2000)
}
  //
</script>
