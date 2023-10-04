import { TodoList } from "./todo.js";

const todoList = new TodoList();

todoList.addTask("Task 1");
todoList.addTask("Task 2");
todoList.addTask("Task 3");

todoList.markAsComplete(1);

const tasks = todoList.listTasks();

console.log("Tasks:");
tasks.forEach((task, index) => {
  console.log(`${index + 1}. ${task.completed ? "[X]" : "[ ]"} ${task.task}`);
});
