import React from 'react';
import NewsListItem from './news_list_item'

const NewsList = (props) => {
    
    //use array to iterate items in JSON object
    const items = props.news.map((item)=> {

        return (
            <NewsListItem  item={item}/>
        )
    });

    return (
    <div>
        {items}
    </div>
    )
}

export default NewsList;