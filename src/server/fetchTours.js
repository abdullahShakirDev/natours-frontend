import { ref } from 'vue';

export function fetchAll() {

    const data = ref(null);
    const error = ref(null);


    const fetchData = async () => {
        try {
            const response = await fetch('http://127.0.0.1:3000/api/v1/tours');
            data.value =  await response.json();
            if (!response.ok) throw new Error('Network response was not ok');
        } catch (err) {
            error.value = err;
        }
    };

    fetchData();

    return { data, error };
}