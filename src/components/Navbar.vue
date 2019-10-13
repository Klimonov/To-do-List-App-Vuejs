<template>
  <nav>

    <v-snackbar
    top
    v-model="snackbar"
    color="info"
    >You project added!
      <v-btn
        color="white"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>

    <v-app-bar app flat class="grey lighten-4">
        <v-app-bar-nav-icon class="grey--text"
        v-on:click="drawer = !drawer"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="text-uppercase grey--text">
            <span class="font-weight-light">My</span>
            <span>Project</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- dropdown menu -->

        <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn class="grey--text"
            text
            v-on="on"
          >
            <v-icon left>expand_more</v-icon>
            <span>Menu</span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
              v-bind:key="link.text"
              router
              :to="link.route">
            <v-list-item-title>{{ link.text }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>

        <!-- dropdown menu end -->
        <v-btn text color="grey">
            <span>Sign Out</span>
            <v-icon>exit_to_app</v-icon>
        </v-btn>
    </v-app-bar>

    <v-navigation-drawer temporary v-model="drawer" app class="primary white--text">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="150">
            <img src="/img/1.png">
          </v-avatar>
          <p class="white--text mt-2 text-center">
            My account
          </p>
        </v-flex>
      </v-layout>
      <v-flex>
        <Popup @projectAdded="snackbar = true" />
      </v-flex>
        <v-list>
            <v-list-item
              v-for="link in links"
              v-bind:key="link.text"
              router
              :to="link.route">
                <v-list-item-action>
                    <v-icon class="white--text"> {{ link.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text">{{ link.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
  </nav>
</template>
<script>
import Popup from './Popup.vue';

export default {
  components: {
    Popup,
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Dashboard', route: '/' },
        { icon: 'folder', text: 'My Projects', route: '/projects' },
        { icon: 'person', text: 'Team', route: '/team' },
      ],
      snackbar: false,
    };
  },
};
</script>
