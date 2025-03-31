import axios from "axios";
import {ref} from "vue";
import {useAuthStore} from "@/stores/authStore.js";

export function updateUserInfo() {
    const error = ref(null);

    const updateUser = async (name, email, photoFile) => {
        error.value = null;

        try {
            const authStore = useAuthStore();
            const token = authStore.token;

            if (!token) {
                throw new Error('No authentication token found');
            }

            const formData = new FormData();

            if (photoFile) {
                formData.append('photo', photoFile);
            }

            const response = await axios({
                method: 'PATCH',
                url: 'http://127.0.0.1:3000/api/v1/users/updateMe',
                data: {name, email, formData},
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'multipart/form-data'
                }
            });

            authStore.setUser(response.data.data.user);

            return response.data;
        } catch (err) {
            error.value = err.message;
            throw err;
        }
    }

    return {error, updateUser};
}