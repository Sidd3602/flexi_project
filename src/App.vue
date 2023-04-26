<template>
  <v-app>
    <div id="nav">
  <router-link to="/">Home</router-link> |
  <router-link to="/register">Register</router-link> |
  <router-link to="/dashboard">Dashboard</router-link> |
  <button @click="logout">Logout</button>
</div>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
