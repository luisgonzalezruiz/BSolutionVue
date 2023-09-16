<template>

<v-app>
  <!-- :color="'deep-purple accent-4'" -->
    <v-app-bar density="compact" dark color="indigo">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title><span>BSolution</span></v-toolbar-title>
      <v-btn class="success">Ingreso</v-btn>
      <v-btn class="error">Salir</v-btn>

      <v-badge :content="18">
        <v-icon icon="$vuetify" size="large" color="info"></v-icon>
      </v-badge>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>



    <v-navigation-drawer app  v-model="drawer" fixed color="#ecf0f1">
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider">
      </v-list-item>

      <v-divider class="border-opacity-75" color="orange"></v-divider>


      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard"  :to="{name:'Home'}" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" :to="{name:'about'}" title="Test" value="test"></v-list-item>
        <v-list-item prepend-icon="mdi-plus" :to="{name:'productos'}" title="Productos" value="productos"></v-list-item>
        <v-list-item prepend-icon="mdi-store" :to="{name:'clientes'}" title="Clientes" value="clientes"></v-list-item>
        <v-list-item prepend-icon="mdi-minus" :to="{name:'proveedores'}" title="Proveedores" value="proveedores"></v-list-item>
        <v-list-item prepend-icon="mdi-pencil" :to="{name:'empleados'}" title="Empleados" value="empleados"></v-list-item>

      </v-list>

    </v-navigation-drawer>

 <!-- background-color: #fafafa; -->
    <v-main class="d-flex align-top justify-center" style="min-height: 300px; background-color: #fafafa;">
      <!-- fluid es para que el contain tome toda la pantalla -->
      <v-container fluid style="padding: 5px;">
          <router-view/>
      </v-container>
    </v-main>

    <v-footer :fixed="fixed" app color="#fafafa">
      <span>&copy; CITech - 2023</span>
    </v-footer>

</v-app>

</template>

<script setup>
/*   import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue' */
  import { ref } from 'vue'

  const drawer = ref(null)


</script>
