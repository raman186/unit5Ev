var pokemons=
[
    {"name":"bulbasaur","url":"https://pokeapi.co/api/v2/pokemon/1/"},
    {"name":"ivysaur","url":"https://pokeapi.co/api/v2/pokemon/2/"},
    {"name":"venusaur","url":"https://pokeapi.co/api/v2/pokemon/3/"},
    {"name":"charmander","url":"https://pokeapi.co/api/v2/pokemon/4/"},
    {"name":"charmeleon","url":"https://pokeapi.co/api/v2/pokemon/5/"},
    {"name":"charizard","url":"https://pokeapi.co/api/v2/pokemon/6/"},
    {"name":"squirtle","url":"https://pokeapi.co/api/v2/pokemon/7/"},
    {"name":"wartortle","url":"https://pokeapi.co/api/v2/pokemon/8/"},
    {"name":"blastoise","url":"https://pokeapi.co/api/v2/pokemon/9/"},
    {"name":"caterpie","url":"https://pokeapi.co/api/v2/pokemon/10/"},
    {"name":"metapod","url":"https://pokeapi.co/api/v2/pokemon/11/"},
    {"name":"butterfree","url":"https://pokeapi.co/api/v2/pokemon/12/"},
    {"name":"weedle","url":"https://pokeapi.co/api/v2/pokemon/13/"},
    {"name":"kakuna","url":"https://pokeapi.co/api/v2/pokemon/14/"},
    {"name":"beedrill","url":"https://pokeapi.co/api/v2/pokemon/15/"},
    {"name":"pidgey","url":"https://pokeapi.co/api/v2/pokemon/16/"},
    {"name":"pidgeotto","url":"https://pokeapi.co/api/v2/pokemon/17/"},
    {"name":"pidgeot","url":"https://pokeapi.co/api/v2/pokemon/18/"},
    {"name":"rattata","url":"https://pokeapi.co/api/v2/pokemon/19/"},
    {"name":"raticate","url":"https://pokeapi.co/api/v2/pokemon/20/"}
]
//refresh page
var box=document.createElement('div');
var heading=document.createElement('h1')
heading.innerText='Check Your Network Connection...!!!';
var refresh=document.createElement('button');
refresh.innerText='Refresh'
refresh.setAttribute('id','refresh')
box.append(heading,refresh);
document.querySelector('.refresh_it').append(box)

//refresh function
document.querySelector('#refresh').addEventListener('click',function(){
 document.querySelector('.refresh_it').innerText="";
 document.querySelector('.names').innerText="";

 var box=document.createElement('div');
var stext=document.createElement('p')
stext.innerText='Enter the name of pokemon to check details';
var inp=document.createElement('input');
inp.setAttribute('id','sinput');

var search=document.createElement('button');
search.innerText='Search'
search.setAttribute('id','search')
box.append(stext,inp,search);
document.querySelector('.refresh_it').append(box)

let i=1;
pokemons.forEach(function(pokemon){
    var namebox=document.createElement('div');
    namebox.setAttribute('id','namebox')
    var name=document.createElement('h5');
    name.textContent=i+". "+pokemon.name;
    i++;
    namebox.append(name);
    document.querySelector('.names').append(namebox)
})



document.querySelector('#search').addEventListener('click',function(){
    document.querySelector('.names').innerText="";

   var search_name=document.querySelector('#sinput').value;

   pokemons.forEach(function(pokemon){
       if(search_name==pokemon.name){
        console.log(search_name)

            var finalbox=document.createElement('div');
            var name=pokemon.name;

            var image=document.createElement('img');
            image.src=pokemon.url;
            finalbox.append(name,image);

        document.querySelector('.names').append(finalbox);

       }
   })
})
})