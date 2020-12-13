import React from 'react';
import { useRouter } from 'next/router';

const NotePage = () => {

    const router = useRouter();

    const { id } = router.query;

    return (
        <div>
            Note {id}
        </div>
    )
}

export default NotePage;