import { useState, useEffect } from "react";
import Http from "../../lib/httpClient";
import { IHttp } from "../../lib/httpClient/http.interface";

type FetchResult<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
}

const useFetch = <T>(url: string): FetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const http: IHttp = Http();

    useEffect(() => {
        http
            .get<T>(url)
            .then((response) => {
                setData(response);
                setLoading(false);
            })
            .catch(() => {
                setError("Ocorreu um erro ao buscar os dados");
                setLoading(false);
            });
    }, [url]);

    return { data, loading, error }
}

export default useFetch;