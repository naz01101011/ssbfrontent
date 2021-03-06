import React from 'react';
import NewsListItem from './NewsListItem';

const NewsList = (props) => {
    let hasImages = false;

    if (props.images === 'false') {
        hasImages = false;
    } else {
        hasImages = true;
    }
    // console.log(props)
    return (
        <div className='list-wrapper'>
            <ul className='newslist main-flex'>
            {props.list.map(item => (
                <NewsListItem title={item.title} key={item._id} slug={item.slug} image={item.mainImage} cat={item.categ} author={item.authorName} date={item.publishedAt} hasImages={hasImages} hasExcerpt={props.excerpt} excerpt={item.excerpt}/>
            ))}
            </ul>
        </div> 
    )
}

export default NewsList;
