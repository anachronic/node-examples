<template>
  <div class="about">
    <h1>Computed property example</h1>
    <div>
      <input type="text" v-model="name" placeholder="Place your name here" />
      <input
        type="text"
        v-model="lastName"
        placeholder="Place your last name here"
      />
      <div>
        {{ fullName }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: null,
      lastName: null
    };
  },
  computed: {
    fullName() {
      return `${this.name} ${this.lastName}`;
    }
  }
};
</script>
