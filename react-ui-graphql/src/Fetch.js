import React, {useEffect, useState} from 'react';
import {GraphQLClient}              from 'graphql-request';

function useFetch(query) {
    const [data, setData]       = useState();
    const [error, setError]     = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        if (!query) return;

        const client = new GraphQLClient('http://localhost/graphql');
        client
            .request(query)
            .then(setData)
            .then(() => setLoading(false))
            .catch(setError)
    }, [query]);

    return {
        loading,
        data,
        error
    }
}

export default function Fetch({
    query,
    renderSuccess,
    loadingFallback = <p>loading...</p>,
    renderError = error => (
        <pre>{JSON.stringify(error, null, 2)}</pre>
    ),
}) {
    const {loading, data, error} = useFetch(query);

    if (error) return renderError(error);
    if (loading) return loadingFallback;
    if (data) return renderSuccess(data);
}
