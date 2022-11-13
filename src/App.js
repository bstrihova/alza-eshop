import React, { useEffect, useState } from 'react';
import body from './body.json';
import hardcodedData from './data.json';
function App() {
    const [data, setData] = useState(null);
    const [errors, setErrors] = useState(null);
    const url = 'https://www.alza.cz/Services/RestService.svc/v2/products';

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(url, {
                method: 'post',
                body: JSON.stringify(body),
                // I
                mode: 'no-cors',
            });
            const response_data = response.json();

            // if failed to load data, fallback on the hardcoded ones (had problems with CORS)
            if (response.status === 200) {
                setData(response_data.data);
            } else {
                setData(hardcodedData);
            }

            if (response_data.errors) {
                setErrors(response_data.errors);
            }
        };

        fetchData();
    }, []);

}

export default App;
