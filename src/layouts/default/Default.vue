<template>

<v-app>
  <!-- :color="'deep-purple accent-4'" -->
    <v-app-bar density="compact" dark color="blue">
      <!-- <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon> -->
      <v-app-bar-nav-icon @click="rail = !rail"></v-app-bar-nav-icon>
      <v-toolbar-title dark color="white"><span>BSolution</span></v-toolbar-title>
      <!-- <v-btn class="success">Ingreso</v-btn> -->
      <!-- <v-btn class="error">Salir</v-btn> -->

      <template v-slot:append>
        
        <v-btn icon="mdi-magnify"></v-btn>

        <v-badge :content="18" dark color="orange" sizes="12">
          <v-icon icon="$vuetify" size="large" dark color="white"></v-icon>
        </v-badge>
        <!--    
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn> 
        -->

          <v-btn icon="mdi-heart"></v-btn>
          <v-btn icon="mdi-dots-vertical"></v-btn>
      </template>

    </v-app-bar>

    <v-navigation-drawer 
        app  
        v-model="drawer" 
        fixed color="#ecf0f1"
        :rail="rail"
        permanent
        @click="rail = false"    
    >
      <v-list-item
        prepend-avatar="https://randomuser.me/api/portraits/men/78.jpg"
        title="John Leider"
      >
        <!--    
        <template v-slot:append>
          <v-btn
            variant="text"
            icon="mdi-chevron-left"
            @click.stop="rail = !rail"
          ></v-btn>
        </template>   
        -->    

      </v-list-item>

      <v-divider class="border-opacity-75" color="orange"></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-view-dashboard"  :to="{name:'Home'}" title="Home" value="home"></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="About" value="about"></v-list-item>
        <v-list-item prepend-icon="mdi-format-align-justify" :to="{name:'about'}" title="Test" value="test"></v-list-item>
        <v-list-item prepend-icon="mdi-plus" :to="{name:'productos'}" title="Productos" value="productos"></v-list-item>
        <v-list-item prepend-icon="mdi-store" :to="{name:'clientes'}" title="Clientes" value="clientes"></v-list-item>
        <v-list-item prepend-icon="mdi-minus" :to="{name:'proveedores'}" title="Proveedores" value="proveedores"></v-list-item>
        <v-list-item prepend-icon="mdi-pencil" :to="{name:'empleados'}" title="Empleados" value="empleados"></v-list-item>
        <v-list-item prepend-icon="mdi-arrange-bring-forward" :to="{name:'sale_analytic'}" title="Analis de ventas" value="sale_analytic"></v-list-item>
        <v-list-item prepend-icon="mdi-arrange-bring-forward" :to="{name:'crm_contact_detalis'}" title="Contact Details" value="crm_contact_detalis"></v-list-item>
      </v-list>

    </v-navigation-drawer>

    <!-- background-color: #fafafa; -->
    <v-main class="d-flex align-top justify-center"
            style="min-height: 300px; ">
      <!-- fluid es para que el contain tome toda la pantalla -->
      <v-container fluid style="padding: 5px;">
          <router-view/>
      </v-container>
    </v-main>

    <v-footer :fixed="fixed" app color="#fafafa">
      <span>&copy; CITech - 2023~</span>
    </v-footer>

</v-app>

</template>

<script setup>
/* import DefaultBar from './AppBar.vue' */
/* import DefaultView from './View.vue' */
import { ref } from 'vue'
import { sizes } from '../../utils/media-query';

const drawer = ref(null)
const rail = ref(true)


</script>
