<template>
  <div class="about">
    <h1>Computed property example</h1>
    <div>
      <!-- <form @submit.prevent="sendForm"> is a shortcut for below -->
      <form v-on:submit.prevent="sendForm">
        <div>
          <input
            type="text"
            v-model="name"
            placeholder="Place your full name here"
          />
        </div>
        <div>
          <textarea
            name="comment"
            cols="30"
            rows="10"
            v-model="comment"
          ></textarea>
        </div>
        <button type="submit">Send comment</button>
      </form>
    </div>

    <div>
      <button @click="resetForm">
        Reset the Form
      </button>
    </div>

    <div v-if="formWasSent">
      Comment was sent!<br />
      name was {{ name }}<br />
      comment was {{ comment }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      comment: "",
      formWasSent: false
    };
  },
  computed: {
    fullName() {
      return `${this.name} ${this.lastName}`;
    }
  },
  methods: {
    sendForm() {
      console.log(
        `Send the form somewhere from ${this.name} who commented ${this.comment}`
      );
      this.formWasSent = true;
    },
    resetForm() {
      this.name = "";
      this.comment = "";
      this.formWasSent = false;
    }
  }
};
</script>
