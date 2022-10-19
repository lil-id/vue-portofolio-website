import { defineStore } from "pinia";

export const userMail = defineStore("userData", {
  state: () => {
    return {
      data: {
        name: "",
        email: "",
        message: "",
      },
    };
  },
  actions: {
    show() {
      console.log(this.data);
    },
  },
});
