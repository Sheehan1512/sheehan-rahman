import React from "react";
import './Blog.css';
import ArticleList from "../ArticlesList/ArticlesList";
import allArticles from "../../Resources/ArticleContent";

function Blog() {
    return (
        <section id="blog">
            <h1>My Articles</h1>
            <ArticleList articles={allArticles}/>
        </section>
    );
}

export default Blog;