import { useEffect, useState } from "react";

const useCurrencyApi = (currency) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        ; (async () => {
            setLoading(true);
            try {
                const response = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
                if (!response.ok) throw new Error("Data could not fetch");
                const currencyInfo = await response.json();
                setData(currencyInfo[currency]);

                setLoading(false);
                setError(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        })()
    }, [currency])

    return [data, loading, error];
}

export default useCurrencyApi;