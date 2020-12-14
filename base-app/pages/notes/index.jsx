import React from 'react';

const Notes = () => {
    return (
        <div>
            Notes index path
        </div>
    )
}

export async function getServerSideProps(){
    
    console.log('I am server side getserver side props');

    return {
        props : {}
    }
}

export default Notes;