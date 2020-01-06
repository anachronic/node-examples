<template>
  <div class="props">
    <h1>This shows a component that has props to display a todo list</h1>
    <div>
      <TodoList :items="todolist" />
    </div>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
  components: {
    TodoList
  },
  data() {
    return {
      todolist: [
        "Wake up",
        "Eat breakfast",
        "Work",
        "Have lunch",
        "Work more",
        "Go home",
        "Have dinner",
        "Go sleep"
      ]
    };
  }
};
</script>
