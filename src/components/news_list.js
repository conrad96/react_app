import React from 'react';

const NewsList = (props) => {
    
    //use array to iterate items in JSON object
    const items = props.news.map((item)=> {

        return (
            <div>
                <h3>{item.title}</h3>
                <div>
                    {item.feed}
                </div>
            </div>
        )
    });

    return (
    <div>
        {items}
    </div>
    )
}

export default NewsList;