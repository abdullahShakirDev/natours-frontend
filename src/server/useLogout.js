import { ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';

export function useLogout() {
    const authStore = useAuthStore();

    const error = ref(null);


    const logout = async () => {
        try {
          await axios({
            method:'GET',
            url:'http://127.0.0.1:3000/api/v1/users/logout',
           });
           authStore.logout();
           
        } catch (err) {
            error.value = err;
        }
        
    };
    


    return { error, logout };
}