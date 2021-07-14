import {useState, useEffect} from 'react';

export const useForm = (initialValues) => {
    const [values, setValues] = useState(initialValues);

    return [
        values, 
        (e) => {
            setValues({
                ...values,
                [e.target.name] : e.target.value,
            })
        }
    ]
}

export const useFetch = (url) => {
    const [data, setData] = useState(null);

    useEffect(() => {

        if(url.includes('null')) return; 

        const fetchData = async (url) => {
            try{
                const response = await fetch(url);
                const data = await response.text();
                setData(data);
            } catch(err) {
                console.log(err);
            }
        }
        fetchData(url);
    }, [url])
    return data;
}