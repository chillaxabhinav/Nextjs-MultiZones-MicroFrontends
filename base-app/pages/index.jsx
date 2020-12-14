import React,{useEffect} from 'react';
import Link from 'next/link';
import cookies from 'nookies';

const Page = () => {

    useEffect(() => {
        cookies.set(null,'myCookie',10);
    })

    return (
        <div>
            <h1>Hello I am home of Main app</h1>
            <Link href="/trains">
                <a>Go to Trains</a>
            </Link><br/>
            <Link href="/bus">
                <a>Go to Bus</a>
            </Link><br/>
            <Link href="/trains/ticket">
                <a>Go to train ticket</a>
            </Link><br/>
            <Link href="/notes">
                <a>Go to notes</a>
            </Link>
        </div>
    )
}

export default Page;