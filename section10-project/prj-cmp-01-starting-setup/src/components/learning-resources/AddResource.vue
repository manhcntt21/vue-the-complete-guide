<template>
  <base-dialog
    v-if="inputIsInvalid"
    title="invalid input"
    @close="confirmError"
  >
    <template #header></template>
    <template #default>
      <p>Unfortunlately, at least one input value is invalid.</p>
      <p>
        Please check all inputs and make sure you enter at least a few
        characters into each input field each.
      </p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submit">
      <div class="form-control">
        <label for="title">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          v-model="entered.title"
          ref="titleInput"
        />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          id="description"
          name="description"
          rows="3"
          v-model="entered.description"
          ref="descriptionInput"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input
          id="link"
          name="titlinke"
          type="url"
          v-model="entered.link"
          ref="linkInput"
        />
      </div>
      <div>
        <base-button type="submit">Add resource</base-button>
      </div>
    </form>
  </base-card>
  <!-- <error-alert v-if="isInvalidInput">
    <h2>Input is invalid</h2>
    <button @click="confirmError">Ok</button>
  </error-alert> -->
</template>
<script>
// import ErrorAlert from '../../alert/ErrorAlert.vue';
export default {
  inject: ['addResource'],
  // components: { ErrorAlert },
  data() {
    return {
      entered: {
        title: '',
        description: '',
        link: '',
      },
      inputIsInvalid: false,
    };
  },

  methods: {
    submit() {
      // cach 1: v-model
      // this.addResource(
      //   this.entered.title,
      //   this.entered.description,
      //   this.entered.link
      // );
      // cach 2: refs
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredLink = this.$refs.linkInput.value;
      if (
        enteredTitle.trim() === '' ||
        enteredDescription.trim() === '' ||
        enteredLink.trim() === ''
      ) {
        this.inputIsInvalid = true;
        return;
      } else {
        this.addResource(enteredTitle, enteredDescription, enteredLink);
      }
    },

    confirmError() {
      this.inputIsInvalid = false;
    },

    close() {},
  },
};
</script>
<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
