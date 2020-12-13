import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Bus = () => {

    const router = useRouter();

    return (
        <>
            <h1>
                I am bus starting page using multizone
            </h1>
            <a href="/trains">Go to trains home</a><br/>
            <a href={`trains/ticket/checkParams/3`}>Trains internal page</a>
        </>
    )
}

export default Bus;