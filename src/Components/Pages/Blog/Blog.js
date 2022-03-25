import React from "react";
import './Blog.css';
// import ArticleList from "../ArticlesList/ArticlesList";
// import allArticles from "../../Resources/ArticleContent";

import Blog1 from '../../../Media/blog.png'
import { Link } from "react-router-dom";

function Blog() {
    return (
        <section id="blog">
            <h1>MY WRITINGS</h1>
            {/* <ArticleList articles={allArticles}/> */}
            <div className="blogs_wrapper">
                <div className="left_content">
                    <div className="image_wrapper">
                        <Link to='/blog/single-blog'>
                            <img src={Blog1} alt="" />
                            <div className="img_content">
                                <span>Coding</span>
                                <h3>The Fastest Way to Learn React</h3>
                                <p>18 May, 2019</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="right_content">
                    <div className="tabs_wrapper">
                        <button type="button" className="active">Popular</button>
                        <button type="button">All</button>
                    </div>
                    <div className="tabs_content">
                        <div className="content_lists">
                            <div className="thumb"></div>
                            <div className="list_content">
                                <h4>How to Build a Node Server
                                    in 10 Minutes</h4>
                                <p>18 May, 2019</p>
                            </div>
                        </div>
                        <div className="content_lists">
                            <div className="thumb"></div>
                            <div className="list_content">
                                <h4>My real Thoughts on
                                    Resumes</h4>
                                <p>18 May, 2019</p>
                            </div>
                        </div>
                        <div className="content_lists">
                            <div className="thumb"></div>
                            <div className="list_content">
                                <h4>How to Build a Node Server
                                    in 10 Minutes</h4>
                                <p>18 May, 2019</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Blog;