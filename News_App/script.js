const category_detail = document.querySelector('.categories-detail')
const category = document.getElementById('category')
const country = document.getElementById('country')
const searchBtn = document.getElementById('searchBtn')

// function to fetch news
const fetchNews = async (country, category)=> {
   const country_code = country
   const category_type = category
   const api_key = `11a47b1972874acb9b9227d058bc6698`
   const url = `https://newsapi.org/v2/top-headlines?country=${country_code}&category=${category_type}&apiKey=${api_key}`

   const news_data = await fetch(`${url}`)
   .then(response => {
    return response.json();
   })

   console.log(news_data);
   
}


searchBtn.addEventListener('click', ()=> {
  fetchNews(country.value, category.value)
})