import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import ArticleList from '../components/ArticleList'
import { fetchArticleBySection } from '../api/ArticlesAPI'

function SectionPage ({articles}){

    const { sectionName } = useParams()
    const [sectionArticles, setSectionArticles] = useState([])

    useEffect(()=>{
        fetchArticleBySection(sectionName)
            .then((response)=>{
                console.log(response.data)
                setSectionArticles(response.data.hits)
            })
    },[sectionName])


    

    return(
        <div>
        {sectionArticles 
            ? <ArticleList articles={sectionArticles} />
            : 'no articles found'
        
        }
        </div>
    )
}

export default SectionPage