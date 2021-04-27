<template>
  <v-app>
      <v-img
            src="harpur-hill.jpg"
            gradient="to bottom, rgba(203,58,250,.3), rgba(0, 0, 0,.6)"
      >
          <Me />
      </v-img>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Me from "@/components/Me";

export default Vue.extend({
  name: "App",

  components: {
    Me,
  },

  data: () => ({
    //
  }),
});
</script>
