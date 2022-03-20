import React from "react";
import './ArticlesList.css';

import {Link} from 'react-router-dom';

function ArticleList({articles}) {
    return (
        <section id="article-list">
            {articles.map((article,key) => (
                    <section key={key}>
                        <Link className="article-links" to={`/article/${article.name}`}>
                            <h2>{article.title}</h2>
                            <p>{article.content[0].substring(0,150)}...</p>
                        </Link>
                    </section>
            ))}
        </section>
    );
}

export default ArticleList;