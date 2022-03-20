import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import './SingleArticle.css';
import allArticles from "../../Resources/ArticleContent";
import ArticleList from "../ArticlesList/ArticlesList";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import CommentsList from "./CommentsList/CommentsList";
import Upvotes from "./Upvotes/Upvotes";
import AddComments from "./AddComments/AddComments";

function SingleArticle() {

    

    const {name} = useParams();
    const article = allArticles.find(article => article.name === name);

    const [articleInfo,setArticleInfo] = useState({upvotes: 0, comments: []});
    
    useEffect(() => {
        
        async function fetchData() {
        
            const result = await fetch(`/api/articles/${name}`);
            const body = await result.json();
            setArticleInfo(body);
        }

        fetchData();
        
    },[name]);

    console.log(articleInfo);

    const relatedArticles = allArticles.filter(article => article.name !== name);

    if (!article) {
        return <NotFoundPage />;
    }
    
    return (
        <section id="article">
            <h1>{article.title}</h1>
            <Upvotes articleName={name} setArticleInfo={setArticleInfo} upvotes={articleInfo.upvotes} />
            {article.content.map((paragraph,key) => (
                <p key={key}>{paragraph}</p>
            ))}
            <CommentsList comments={articleInfo.comments} />
            <AddComments articleName={name} setArticleInfo={setArticleInfo} />    

            <h2>Related Articles</h2>
            <ArticleList articles={relatedArticles} />
        </section>
    );
}

export default SingleArticle;