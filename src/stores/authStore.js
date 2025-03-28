import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useAuthStore = defineStore('auth', () => {

  const token = ref(localStorage.getItem('authToken') || null);
  const user = ref(null);

  const storedUser = localStorage.getItem('user');
  if (storedUser) {
    try {
      user.value = JSON.parse(storedUser);
    } catch (error) {
      console.error('Failed to parse user from localStorage:', error);
      localStorage.removeItem('user'); 
    }
  }

  const isAuthenticated = computed(() => !!token.value);

  const setToken = (newToken) => {
    token.value = newToken;
    localStorage.setItem('authToken', newToken);
  };

  const setUser = (newUser) => {
    user.value = newUser;
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    token.value = null;
    user.value = null;
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    window.setTimeout(() => {
        location.assign('/');
      }, 1500);
  };

  return {
    token,
    user,
    isAuthenticated,
    setToken,
    setUser,
    logout,
  };
});