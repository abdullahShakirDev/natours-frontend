import { ref } from 'vue';
import axios from 'axios';
import { useAuthStore } from '@/stores/authStore';

export function useLogin() {
  const error = ref(null);
  const authStore = useAuthStore(); // Call useAuthStore inside the function

  const login = async (email, password) => {
    try {
      const res = await axios({
        method: 'POST',
        url: 'http://127.0.0.1:3000/api/v1/users/login',
        data: {
          email,
          password,
        },
      });

      // Update the auth store with the token and user
      authStore.setToken(res.data.token);
      authStore.setUser(res.data.data.user);
    } catch (err) {
      error.value = err.response?.data?.message || 'Login failed. Please try again.';
    }
  };

  return { error, login };
}
