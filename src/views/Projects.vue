<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>

    <v-container class="my-5">

      <v-expansion-panels>
          <v-expansion-panel
            v-for="project in projects"
            :key="project.title"
          >
            <v-expansion-panel-header> {{ project.title }}</v-expansion-panel-header>
              <v-expansion-panel-content class="grey--text">
                <div class="font-weight-bold">
                  due by {{ project.due }}
                </div>
                <div>{{ project.content}}</div>
              </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>

    </v-container>

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

  },
};

</script>
