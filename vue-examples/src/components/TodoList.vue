<template>
  <div class="todolist">
    <ul>
      <li v-for="(item, index) in items" v-bind:key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "TodoList",
  props: {
    items: {
      type: Array,
      required: true
    }
  }
};
</script>
