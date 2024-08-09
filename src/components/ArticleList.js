import React from "react";
import Article from "./Article";

const ArticleList = (props) => {
    const {posts} = props;

    return (
        <main>
            {posts.map((post) =>
            <Article 
            key={post.id} 
            title={post.title} 
            date={post.date} 
            preview={post.preview} 
            minutes={post.minutes}
            />
        )}
        </main>
    )
}
export default ArticleList;