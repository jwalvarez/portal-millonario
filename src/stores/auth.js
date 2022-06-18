import {defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore({
  id: "auth",
  state: () => ({
    isLogged: true,
    token: "",
  }),
  actions: {
    login(email, password) {
      const response = axios.post("https://portal-millonario.free.beeceptor.com/api/users", {email, password})
      // todo: set user info with response.data
      this.setState({
        user_id: response.data.id,
        name: response.data.name,
        username: response.data.username,
        email: response.data.email,
        phone: response.data.phone.number,
        isLoggedin: true,
      })
    },
    logout(){
      // We can set state with $patch method?
      this.setState({
        username: "",
        name: "",
        isLoggedin: false,
      })
    }
  }
})
