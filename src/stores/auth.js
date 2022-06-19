import {defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isAuthenticated: false,
    token: "",
  }),
  actions: {
    // todo: fix login here, problem with async/await
    async login(data){

      var config = {
        method: "post",
        url: "/auth/login/",
        headers: {
          "content-type": "application/json",
        },
        data: data,
      };

      axios(config).then((response) => {
        this.isAuthenticated = true;
        this.token = response.data.key;
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("token", response.data.key);
      })
      
    },
    logout(){
      // We can set state with $patch method?
      this.setState({
        username: "",
        name: "",
        isAuthenticated: false,
      })
    }
  }
})
