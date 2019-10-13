<template>
 <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          class="info my-4"
          dark
          v-on="on"
        >
          Add new project
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline "
          primary-title
        >
          Add a New Project
        </v-card-title>

        <v-card-text>
          <v-form class="px-3" ref="form">
              <v-text-field
              label="Title"
              v-model="title"
              prepend-icon="folder"
              :rules="inputRules">
              </v-text-field>
              <v-textarea
              label="Information"
              v-model="content"
              prepend-icon="edit"
              :rules="inputRules">
              </v-textarea>

              <v-menu
                max-width="290"
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="290px"
                >
                <template v-slot:activator="{ on }">
                  <v-text-field
                  v-model="dateFormatted"
                  label="Date"
                  hint="DD/MM/YYYY format"
                  persistent-hint
                  prepend-icon="date_ranger"
                  @blur="date = parseDate(dateFormatted)"
                  v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="date"
                    @input="menu = false"
                ></v-date-picker>
                </v-menu>

              <v-btn
              text
              class="info mx-0 mt-3"
              @click="submit"
              :loading="loadingStatus"
              >Add project</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import db from '@/firebase';

export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu: false,
    title: '',
    content: '',
    inputRules: [
      v => v.length >= 3 || 'Minimum length is 3 characters',
    ],
    loadingStatus: false,
    dialog: false,
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        const project = {
          person: 'Me',
          title: this.title,
          content: this.content,
          due: this.dateFormatted,
          status: 'ongoing',
        };
        this.loadingStatus = true;
        db.collection('projects').add(project).then(() => {
          this.loadingStatus = false;
          this.dialog = false;
          this.$emit('projectAdded');
        });
      }
    },
    formatDate(date) {
      if (!date) return null;
      const [year, month, day] = date.split('-');
      return `${day}/${month}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;
      const [day, month, year] = date.split('/');
      return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`;
    },
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  watch: {
    date() {
      this.dateFormatted = this.formatDate(this.date);
    },
  },
};
</script>
