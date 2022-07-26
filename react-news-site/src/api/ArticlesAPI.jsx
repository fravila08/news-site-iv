import axios from 'axios'

async function fetchArticleById(articleID){
    let response=  await axios.get('http://hn.algolia.com/api/v1/search?', {
        params:{
          tags: (`story_${articleID}`)
        }
      })
      return response
}
// query=foo&tags=story
async function fetchArticleBySection(sectionName){
    if (sectionName ==="jobs"){
      let response = await axios.get(`http://hn.algolia.com/api/v1/search?`,{
        params:{
          query:sectionName,
          tags:`story`
        }
      })
      return response
    }
    else if(sectionName ==="comments"){
      let response = await axios.get(`http://hn.algolia.com/api/v1/search?`,{
        params:{
          tags:'comment'
        }
      })
      return response
    }
    else if(sectionName ==="show_hn"){
      let response = await axios.get(`http://hn.algolia.com/api/v1/search?`,{
        params:{
          tags:sectionName
        }
      })
      return response
    }
    else if(sectionName ==="ask_hn"){
      let response = await axios.get(`http://hn.algolia.com/api/v1/search?`,{
        params:{
          tags:sectionName
        }
      })
      return response
    }
    else if (sectionName === 'new'){
      let response = await axios.get(`http://hn.algolia.com/api/v1/search_by_date?`,{
        params:{
          tags: ('story'),
        }
      })
      return response
    }
    else if (sectionName === 'past'){
      const date = Math.floor(Date.now() / 1000)- 86400
      let response= axios.get('http://hn.algolia.com/api/v1/search_by_date?', {
        params:{
          tags: ('story'),
          hitsPerPage: 50,
          numericFilters: `created_at_i<${date}`
        }
      })
      return response
    }
    console.log('inside section Article function')
    return response
}

async function fetchArticles(filters=null){
  let response = await axios.get(`http://hn.algolia.com/api/v1/search?`,{
    params:{
      query:filters,
      tags:`story`
    }
  })
  return response
}

export {
    fetchArticleById,
    fetchArticleBySection,
    fetchArticles
}