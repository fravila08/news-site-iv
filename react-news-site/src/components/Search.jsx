import Form from 'react-bootstrap/Form'
import { useState, useEffect } from "react"
import ArticleTeaser from "../components/ArticleTeaser"


function Search ({articles}) {

    const [searchTitle, setSearchTitle] = useState('')
    const [results, setResults] = useState([])
    
    const handleChange = (event) => {
        const value = event.target.value
        console.log(`${value} val changed`)

        setSearchTitle(value)
    }

    useEffect( () => {
        if (searchTitle != ''){
            const filteredArticles = articles.filter(article => article.title.includes(searchTitle))
            setResults(filteredArticles)
        }
        else {
            setResults([])
       }

    }, [searchTitle])

    return (
        <div>
            <Form >
            <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event)=>{handleChange(event)}}
                />
                
            </Form>
            <div>
            {
                results.length > 0
                ? <div >
                    <h2>search results</h2>
                    {results.map((article) => (
                    <ArticleTeaser key={article.objectID} {...article}/>
                ))}</div>
                : ''
            }
            </div>
        </div>
    )
}

export default Search