import {ref} from "vue";
import {useAuthStore} from "@/stores/authStore.js";
import axios from "axios";

export function useChangePassword() {
    const error = ref(null);

    const changePassword = async (passwordCurrent, password, passwordConfirm) => {
        error.value = null;

        try {
            const authStore = useAuthStore();
            const token = authStore.token;

            if (!token) {
                error.value = "No authentication token found!";
                return false;
            }

            const res = await axios({
                method: 'PATCH',
                url: 'http://127.0.0.1:3000/api/v1/users/updateMyPassword',
                data: {passwordCurrent, password, passwordConfirm},
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            })

            authStore.setUser(res.data.data.user);
            return res.data;
        } catch (err) {
            error.value = err.response?.data?.message || err.message;
        }
    };

    return {error, changePassword};
}
