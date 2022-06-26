import { defineStore } from "pinia";

export const useUserStore = defineStore({
  id: "user",
  state: () => ({
    // user_id to get user info when navigate to /perfil/user_id
    user: {
      // id: "",
      // username: "",
      // first_name: "",
      // last_name: "",
      // email: "",
      // phone: "",
      // address: "",
      // city: "",
      // birthday: "",
      // biography: "",
      // profile_pic: "",
      // cover_pic: "",
      // statistics: {
      //   total_courses_started: 0,
      //   total_courses_completed: 0,
      //   total_courses_in_progress: 0,
      //   total_referrals: 0,  
      // }
    }, 
    myCourses: []
  }),
  action: {
    
    
  }
})