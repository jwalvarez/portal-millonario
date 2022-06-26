import { defineStore } from "pinia";
import axios from "axios";

export const useWompiStore = defineStore({
  id: "wompi",
  state: () => ({
    // wompi config
    public_key: "pub_test_wQ3HOd9T708D0Aog78nbHFEGoFnQkTy8",
    amount_in_cents:"",
    redirecte_url: "",
    user: {},
    // payment data
    reference: "",
    course_id: "",
    nrc_id: "",
    referral_code: "",
    transaction_id: "",
    django_transaction_id: "",
    verificationPaymentError: null,
  }),
  actions: {
    getReference(token) {
      var config = {
        method: "get",
        url: `https://636d-186-82-85-217.ngrok.io/api/v1/orchestrator/invoice/get_reference/?token=${token}`,
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