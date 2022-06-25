import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    // user_id to get user info when navigate to /perfil/user_id
    user: {}, 
    myCourses: []
  }),
  action: {
    
    
  }
})