import React from "react";

const Header = (props) => {
    return (
        <header>
            <h1>{props.name}</h1>
        </header>
    )
}
export default Header;import React from "react";

const About= (props) => {
    const {image = "https://via.placeholder.com/215", about} =props;

    return (
        <aside>
            <img src={image} alt="blog logo" />
            <p>{about}</p>
        </aside>
    );
}
export default About;import React from "react";

// function Article({title, date= "January 1, 1970", preview, minutes} ) {
//     function emojis() { 'emojis' is defined but never used.Article
//         const interval = minutes = 30 , 5 ,10; 'interval' is assigned a value but never used.Article
//          const emoji = minutes = 30 "🍱'" "" 'emoji' is assigned a value but never used.
//     }
// }
const Article = (props) => {
    const {title,date="January 1, 1970", preview, minutes} = props;

    const getReadingTime = (minutes) => {
        if (minutes < 30){
            const cups = Math.ceil(minutes/5);
            return '☕️'.repeat(cups);
        } else {
            const boxes = Math.ceil(minutes/10);
            return'🍱'.repeat(boxes);
        }
    }
    const readingTime = getReadingTime(minutes);

    return (
        <article>
            <h3>{title}</h3>
            <small>
                {date}. {readingTime} {minutes } min read
            </small>
            <p>{preview}</p>
            
            
        </article>
    )
}
export default Article;import React from "react";
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
export default ArticleList;import React from "react";
import Header from"./Header";
import About from"./About";
import ArticleList from "./ArticleList";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header name={blogData.name} about={blogData.about} />
      <About image={blogData.image} about={blogData.about}/>
      <ArticleList posts={blogData.posts} />
      {/* You're on your own from here! Follow the deliverables; test things out in
      the browser as you write your code; and good luck! */}
    </div>
  );
}

export default App;