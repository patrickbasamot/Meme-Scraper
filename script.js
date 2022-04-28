const subreddit = document.querySelectorAll('.subreddit');
let redditMemeWebScraper = `https://meme-api.herokuapp.com/gimme/5`;



fetchMeme(redditMemeWebScraper);



subreddit.forEach(btn =>{
    btn.addEventListener('click',function choose(){
        redditMemeWebScraper = `https://meme-api.herokuapp.com/gimme/${btn.textContent.toLowerCase()}/5`;
        fetchMeme(redditMemeWebScraper);
    })
})



async function fetchMeme(redditMemeWebScraper){
    
        let response = await fetch(redditMemeWebScraper);
        let data = await response.json();
        console.log(data);
        renderData(data);
}


    function renderData(data){
      const { memes } = data;
      memes.forEach(rowofMemes => {
         const {author,postLink,preview,title,subreddit} = rowofMemes;
         let imgUrl = preview.slice(-1);
         let strUlr = imgUrl.toString();
         console.log(strUlr);
      })
    }

