import React from 'react'

const getYear = () => {
    const newdate = new Date();
    return newdate.getFullYear();
}

const header = () => {
return <div>Header row</div>
}

export default header;