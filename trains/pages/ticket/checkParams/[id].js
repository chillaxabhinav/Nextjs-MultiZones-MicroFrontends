import React,{useEffect} from 'react';
import { useRouter } from 'next/router';

const CheckParams = (props) => {

    const router = useRouter();

    useEffect(() => {
        console.log('Query from getServerSideProps ', props.myId.id);
        console.log('Query from router ', router.query);
        console.log(props);
    },[]);

    return (    
        <h1>
            My param is {props.myId.id}
        </h1>
    )
}

export async function getServerSideProps({query}){
    console.log('query ', query);

    return {
        props : {
            myId : query
        }
    }
}

export default CheckParams;