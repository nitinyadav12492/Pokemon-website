import { useEffect, useState } from "react";


import {PokemonCards} from './PokemonCards'
export const Pokemon = ()=>{

    const[pokemon, setPokemon]=useState([]);
    const[loading,setLoading]=useState(true);
    const[error, setError]=useState(null)
    const[search,setSearch]=useState("")
     const API = "https://pokeapi.co/api/v2/pokemon?limit=24";
    const fetchPokemon = async()=>{
           try{
            const res = await fetch(API);
             const data = await res.json();
             // console.log(data);


             const detailedPokemonData = data.results.map( async(current)=> {
                  //console.log(current.url);
                  const res = await fetch(current.url);
                  const data = await res.json();
                  return data;

             })
            // console.log(detailedPokemonData)
            
             const detailedResponse =  await Promise.all(detailedPokemonData);
           //console.log(detailedResponse);
            setPokemon(detailedResponse);
            setLoading(false);
          

           }
           catch(error){
               console.log(error);
                 setError(error)
           }
    }
    useEffect(()=>{
        fetchPokemon();
    },[])
     
    const searchData =pokemon.filter((curPokemon)=> curPokemon.name.toLowerCase().includes(search.toLowerCase()))
 if(loading){
    return(
        <div>
        loading...
    </div>
    ) 
 }

 if (error)
{
    return(
        <div>
        <h1>{error.message}</h1>
    </div>
    ) 
}



    return (
       <>
       <section className="mt-10">
       <header>
        <h1 className="text-3xl font-bold text-center mt-3 ">Lets Catch Pokemon</h1>
       </header>
       <div>
        <input className="appearance-none border-none outlin-none w-[23rem] border-2  bg-[rgba(233,30,99,0.2)] p-2 text-xl rounded text-left mt-5 block mx-auto" type="text" placeholder="search pokemon" value={search} onChange={(e)=>setSearch(e.target.value)} />
       </div>
       <div>
        <ul className="grid grid-cols-4 place-items-center gap-2">
        { searchData.map((curPokemon)=>{ return (<PokemonCards key={curPokemon.id} pokemonData={curPokemon}/>)})
             
        }
        </ul></div>
       </section>
       </>)
};