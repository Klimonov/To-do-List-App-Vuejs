<template>
  <div class="home">
    <h1 class="subtitle-1 grey--text">Homepage</h1>

    <v-container class="my-5">

      <v-layout  class="mb-3">
        <v-flex xs12 md6>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
                <v-icon left small>folder</v-icon>
                <span class="caption text-lowercase">By project name</span>
              </v-btn>
            </template>
            <span>Sort projects by project name</span>
          </v-tooltip>
        </v-flex>
        <v-flex xs12 md6>
          <v-tooltip top>
            <template v-slot:activator="{ on }">
              <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
                <v-icon left small>person</v-icon>
                <span class="caption text-lowercase">By person</span>
              </v-btn>
            </template>
            <span>Sort persons by person name</span>
          </v-tooltip>
        </v-flex>
      </v-layout>

      <v-card flat class="" v-for="project in projects" :key="project.title">
        <v-layout wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="float-right">
              <v-chip
              small
              :class="`${project.status} white--text my-2 caption`"
              >
                {{ project.status }}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>
  </div>
</template>

<script>
import db from '@/firebase';

export default {
  data() {
    return {
      projects: [],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
  },
  created() {
    db.collection('projects').onSnapshot((res) => {
      const changes = res.docChanges();

      changes.forEach((change) => {
        if (change.type === 'added') {
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
};

</script>

<style lang="scss">

  .project {
    border-top-right-radius: 0!important;
    border-top-left-radius: 0!important;
  }

  .project.complete {
    border-left: 4px solid #3cd1c2;
  }

  .project.ongoing {
    border-left: 4px solid orange;
  }

  .project.overdue {
    border-left: 4px solid tomato;
  }

  .v-chip.complete {
    background: #3cd1c2!important;
  }

  .v-chip.ongoing {
    background: orange!important;
  }

  .v-chip.overdue {
    background: tomato!important;
  }

</style>
