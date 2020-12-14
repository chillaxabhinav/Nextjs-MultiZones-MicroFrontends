import React,{useEffect} from 'react';
import Link from 'next/link';
import cookies,{parseCookies} from 'nookies';

const Trains = () => {

    useEffect(() => {
        const my = parseCookies(null,'myCookie');
        console.log(my);
    })

    return (
        <>
            <h1>
                I am train home page using multizones
            </h1>
            <Link href="/ticket">
                <a>Go to Train ticket</a>
            </Link>
            <br/>
            <a href="/">
                Go to home
            </a>
        </>
    )
}

export default Trains;