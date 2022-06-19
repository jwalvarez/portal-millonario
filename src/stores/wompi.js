import { defineStore } from "pinia";
import axios from "axios";

const useWompiStore = defineStore({
  id: "wompi",
  state: () => ({
    wompi: {},
    reference: "",
  }),
  actions: {
    getReference(token) {
      var config = {
        method: "get",
        url: `https://636d-186-82-85-217.ngrok.io/api/v1/orchestrator/bill/get_reference/?token=${token}`,
        headers: {
          "content-type": "application/json",
        },
      };
      axios(config).then((response) => {
        this.reference = response.data.ref;
      }).catch((error) => {})

    }
  }
})