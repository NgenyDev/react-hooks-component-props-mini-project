import React from "react";

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
export default Article;
