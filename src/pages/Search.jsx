import React from 'react'
import  { useEffect } from 'react'

import Card from '../components/Card'
import Fetch from '../hooks/Fetch'
import { useSearchParams } from 'react-router-dom'

const Search = ({apipath}) => {
  const[searchparams]=useSearchParams();
  const queryTerm = searchparams.get("q")
  const {data: movies}=Fetch(apipath,queryTerm);
  console.log(queryTerm)

  useEffect(()=>{
    document.title=`Search result for ${queryTerm}`;
  });
  return (
    <div>
      <div className='container-fulid'>
        <h5>{movies.length==0?`No results found for ${queryTerm}`:`Result for ${queryTerm}`}</h5>
           <div class='container-fulid mx-auto gap-20    space-y-9 mt-20 grid grid-cols-3'>
               {movies.map((movie)=>{return <Card key={movie.id} movie={movie}/> })}
              </div>
      </div>
    </div>
  )
}

export default Search
