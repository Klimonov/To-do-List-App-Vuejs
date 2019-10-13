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
<input type="date" id="start" name="trip-start"
       placeholder="2"
       min="1900-01-01" max="2019-09-25">
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        {
          title: 'Design a new website', person: 'The Net Ninja', due: '1th Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur eaque esse illo sit nam autem molestias? Quo modi laboriosam mollitia vero reiciendis itaque reprehenderit dolorum ullam. Ducimus odit omnis quaerat!',
        },
        {
          title: 'Code up the homepage', person: 'Chun Lee', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo labore eum, impedit necessitatibus eos recusandae sequi molestiae accusantium porro, animi laudantium ratione veniam, quis consectetur repellat explicabo veritatis itaque neque.',
        },
        {
          title: 'Design video thembnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero pariatur dolorum quo inventore ratione quidem commodi, amet quibusdam necessitatibus tenetur molestiae nostrum aut assumenda laudantium. A dignissimos maiores unde.',
        },
        {
          title: 'Create a community forum', person: 'Gouken', due: '14th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus vero pariatur dolorum quo inventore ratione quidem commodi, amet quibusdam necessitatibus tenetur molestiae nostrum aut assumenda laudantium. A dignissimos maiores unde.',
        },
      ],
    };
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1));
    },
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
