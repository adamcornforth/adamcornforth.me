<template>
  <v-app>
    <v-img
      class="px-3"
      src="harpur-hill.jpg"
      gradient="to bottom, rgba(203,58,250,.3), rgba(0, 0, 0,.6)"
    >
      <v-row no-gutters>
        <Me />
        <History />
      </v-row>
    </v-img>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Me from "@/components/Me.vue";
import History from "@/components/History.vue";

export default Vue.extend({
  name: "App",

  components: {
    Me,
    History,
  },

  data: () => ({
    //
  }),
});
</script>
