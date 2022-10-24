$(function() {
  

const games = [
  {
    title: "Alec's Game",
    link: "https://alecmo26.github.io/CharlieLab/", 
    author: "Alec Moore"
    },
  {
    title: "Alex's Game",
    link: "-https://astricklandd.github.io/echo-lab/", 
    author: "Alex Strickland"
    },
  {
    title: "Ashlyn's Game",
    link: "https://ashmcflash.github.io/echo-lab/",
    author: "Ashlyn Paruzynski"
    },
  {
    title: "Chhavi's Game",
    link: "https://viii21.github.io/dob-facts/",
    author: "Chhavi Chhavi"
  },
  {
    title: "Cody's Game",
    link: "https://nutenjoyer.github.io/miniature-winner ",
    author: "Cody Mcdonald"
    },
  {
    title: "Elijah's Game",
    link: "https://github.com/EAday22/delta_Lab",
    author: "Elijah Aday"
    },
  {
    title: "Emily's Game",
    link: "https://github.com/etinnon/cis376-delta",
    author: "Emily Tinnon"
    },
  {
    title: "Ethan C's Game",
    link: "https://stalewhitebread.github.io/urban-invention/",
    author: "Ethan Criddle"
    },
  {
    title: "Ethan H's Game",
    link: "https://hubbbabubbba.github.io/Delta-Lab-Name-Wow/",
    author: "Ethan Hubbard"
    },
  {
    title: "Ethan R's Game",
    link: "https://crimsonhog.github.io/probable-octo-carnival/",
    author: "Ethan Rinke"
    },
  {
    title: "Garrett's Game",
    link: "https://garrettdodd.tech/CIS-376/BRAVO_LAB/index.html",
    author: "Garrett Dodd"
    },
  {
    title: "Hardik's Game",
    link: "NEED LINK",
    author: "Hardik Gupta"
    },
  {
    title: "Hau's Game",
    link: "https://hauhuynh90.github.io/Delta/",
    author: "Hau Huynh"
    },
  {
    title: "Hunter's Game",
    link: "https://hunter-mcgriff.github.io/dev-lab-charlie/ ",
    author: "Hunter McGriff"
    },
  {
    title: "Katheryn's Game",
    link: " https://codepen.io/katherynisabell/full/WNzWGNd",
    author: "Katheryn Grant"
    },
  {
    title: "Kevin's Game",
    link: "https://github.com/KBrian5/solid-octo-happiness",
    author: "Kevin Salgado"
    },
  {
    title: "Kristina's Game",
    link: "https://kwilliams31.github.io/Echo-Cool-Games/",
    author: "Kristina Williams"
    },
  {
    title: "Lane's Game",
    link: "ttps://lane30schmidt.github.io/echo-376/",
    author: "Lane Schmidt"
      },
  {
    title: "Maggie's Game",
    link: "https://mlittle98.github.io/DELTALAB/",
    author: "Maggie Little"
    },
  {
    title: "Meghan's Game",
    link: "http://mskel1.github.io/sturdy-rotary-phone/",
    author: "Meghan Skelton"
    },
  {
    title: "Nicole's Game",
    link: "https://nicolereilly.github.io/echo-lab//",
    author: "Nicole Reilly"
    },
  {
    title: "Omonegho's Game",
    link: "https://ougheoke.github.io/echo-lab/",
    author: "Omonegho Ugheoke"
    },
  {
    title: "Rachel's Game",
    link: "https://github.com/panhead63/bravo/tree/main",
    author: "Rachel Thompson"
    },
  {
    title: "Rishi's Game",
    link: "https://rish4863.github.io/doge-game/",
    author: "Rishi Doreswamy"
    },
  {
    title: "Tychicus's Game",
    link: "need link",
    author: "Tychicus Thomas"
    },
  {
    title: "Wes' Game",
    link: "https://westyler28.github.io/Echo-Lab/",
    author: "Wes Wages"
    },
  {
    title: "Zachary's Game",
    link: "NEED LINK",
    author: "Zachary Newell"
    },
];
// iterate over the JSON array
$.each(games, function (index, item) {
  console.log("Game Title: " + item.title);
  console.log("Game URL: " + item.link);
  console.log("Game Author: " + item.author);

  // create a brand new HTML element JUST with code

var el = `<div class='card text-center mx-auto bg-secondary inverse=True' style="width: 500px; border-color: black"> \
  <button class='cardOpen2 text-dark btn btn-outline-info' style="background-color: #DB9F11; border-color: black"> ${ item.title } </button> \
   <div class='cardHide'> \
       <br> \
       <a href="${ item.link }" target="_blank" class="link-info text-dark">Click to Play</a> \
       <p class="text-white">Created by: ${ item.author } </p> \
       <br> \
       <button class='btn btn-outline-info text-white cardClose2' style="border-color: black; background-color: #DB9F11">Close</button> \
   </div>
 </div>`; 

 console.log(el); 


$('#firstCard').append(el);

$('.nav-dropdown').append($(`<li><a href="${item.link}" target="_blank"> ${item.author} </a></li>`));

});


});
