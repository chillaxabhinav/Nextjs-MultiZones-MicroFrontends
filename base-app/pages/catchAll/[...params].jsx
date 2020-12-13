import React from 'react';

import { useRouter } from 'next/router';

const Yo = () => {
    const router = useRouter();
    const params = router.query.params;
    console.log(params);

    return (
        <>
        </>
    )
}

export default Yo;