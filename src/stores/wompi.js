import { defineStore } from "pinia";
import axios from "axios";

export const useWompiStore = defineStore({
  id: "wompi",
  state: () => ({
    // wompi config
    public_key: "pub_test_RWFLLbYWjGgj93WoapghZy36ABIkikr6",
    amount_in_cents:"",
    redirecte_url: "",
    user: {},
    // payment data
    reference: "",
    course_id: "",
    nrc_id: "",
    referral_code: "",
    transaction_id: "",
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