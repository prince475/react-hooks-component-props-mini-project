import React from "react";
import Article from "./Article";

const articles =[{id: 1,
                    title: "Components 101",
                    date: "December 15, 2020",
                    preview: "Setting up the building blocks of your site",
                    minutes: 5,}, 
                  {id: 2,
                    title: "React Data Flow",
                    date: "December 11, 2020",
                    preview: "Passing props is never passé",
                    minutes: 15,},
                   {id: 3,
                    title: "Function vs Class Components",
                    preview: "React, meet OOJS.",
                    minutes: 47,}];

function ArticleList() {

    const articleList = articles.map((articlesObj) => {
        return < Article key={articlesObj.id} title={articlesObj.title} date={articlesObj.date} preview={articlesObj.preview} minutes={articlesObj.minutes}/>
    })

    return (
        <div className="ArticleList">
            <main className="main">
               {articleList}

            </main>

        </div>
    );
}

export default ArticleList;