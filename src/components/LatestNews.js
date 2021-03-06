import React from 'react';
import {Link} from 'react-router-dom';
import NewsList from './NewsList';
import urlFor from '../components/ImgBuilder';
import SerializeDate from '../serializers/SerializeDate';
import SerializeText from '../serializers/SerializeText';
import AdsLeaderboard from '../components/AdsLeaderboard';
import NewsListItem from './NewsListItem';


const LatestNews = (props) => {
    // console.log(props)
    let pinnedPost = props.pinned;
    let mainPost = props.data[0]
    let nextPosts = props.data.slice(1); 

        // console.log(pinnedPost.title)
    return (
        <div className='container'>
            <div className='row section flex'>
                <div className="col m12 l8 main-flex">
                    <div className='main-story'>
                        <Link className='link' to={'/stiri/' + mainPost.slug}>
                            <div>
                                <div className="featImg">
                                    <img className='responsive-img' src={urlFor(mainPost.mainImage).width(900).height(470).fit('crop').crop('focalpoint').quality(30).url()} alt={mainPost.mainImage.alt} />
                                </div>
                                <div>
                                    <span className='info grey lighten-3 deep-orange-text text-darken-1'>{SerializeDate(mainPost.publishedAt)} <span className='grey'>{mainPost.authorName}</span></span>
                                    <h3 className="left-align">
                                        {mainPost.title}
                                    </h3>
                                    <div className='main-story-excerpt'>
                                        
                                            <SerializeText body={mainPost.excerpt} id={mainPost._id} />
                                        
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='mid-lb'>
                        <AdsLeaderboard position='mid-leaderboard' googleads='true'/>
                    </div>
                </div>
                <div className="col m12 l4">

                {pinnedPost !== undefined &&
                <div className="pinnedPost">
                    <NewsListItem  title={pinnedPost.title} key={pinnedPost._id} slug={pinnedPost.slug} image={pinnedPost.mainImage} cat={pinnedPost.categ} author={pinnedPost.authorName} date={pinnedPost.publishedAt} hasImages={false} hasExcerpt={false} excerpt={pinnedPost.excerpt}/>
                </div>
                }

                    <NewsList list={nextPosts} images='false'/>
                </div>
            </div>
        </div>
        
    );
}     

export default LatestNews;
