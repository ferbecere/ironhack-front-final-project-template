// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
    },
    async addTask(title) {
      const { data } = await supabase.auth.getSession();
      const { error } = await supabase.from("tasks").insert({
        title: title,
        is_complete: false,
        user_id: data.session.user.id,
      });
      if (error) throw error;
    },
    async deleteTask(id) {
      const { error } = await supabase.from("tasks").delete().eq("id", id);
      if (error) throw error;
    },
    // Hacer POST
    // Hacer el PUT (edit)
    // Hacer el delete
    // Hacer el PUT (cambiar entre completada y pendiente)
  },
});
