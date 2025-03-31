import {ref} from "vue";
import axios from "axios";
import {useAuthStore} from "@/stores/authStore.js";

export function useSignup() {
    const err = ref(null);
    const signup = async (name, email, password, passwordConfirm) => {
        const authStore = useAuthStore();
        try {
            const res = await axios({
                method: "post",
                url: 'http://127.0.0.1:3000/api/v1/users/signup',
                data: {name, email, password, passwordConfirm}
            });
            authStore.setToken(res.data.token)
            authStore.setUser(res.data.data.user);
        } catch (err) {
            err.value = err;
        }
    }
    return {err, signup};
}