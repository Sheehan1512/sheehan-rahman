import React from 'react';
import './Upvotes.css';

function Upvotes( {articleName, setArticleInfo, upvotes} ) {
    
    async function upvoteArticle() {
        const result = await fetch(`/api/articles/${articleName}/upvote`, {
            method: 'post'
        });
        const body = await result.json();
        setArticleInfo(body);
    }
    
    return (
        <section>
            <button onClick={()=>upvoteArticle()}>Add Upvote</button>
            <p>This article has been upvoted {upvotes} times</p>
        </section>
    );
}

export default Upvotes;