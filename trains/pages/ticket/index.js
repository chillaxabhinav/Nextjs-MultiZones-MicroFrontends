import React from 'react';
import Link from 'next/link';

const Ticket = () => {
    return (
        <>
            <h1>
                I am ticket homepage using multizone
            </h1>
            <Link href='/ticket/checkParams/[id]' as={`/ticket/checkParams/3`}>
                <a>Go to check params</a>
            </Link>
        </>
    )
}

export default Ticket;