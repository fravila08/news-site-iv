import ArticleTeaser from "./ArticleTeaser"

function ArticleList ({articles}) {
    
    // const HandleTitleClick = (article_id) => {
    //     console.log(article_id)
        
    // }

    return(
        <div>
            {articles.map((article) => (
                <ArticleTeaser key={article.objectID} {...article}/>
                ))
            }
        </div>
    )
}

export default ArticleList

