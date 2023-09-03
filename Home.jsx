import React, { useEffect, useState } from 'react'
import Card from '@/Components/Card'
import { getAllMemes } from '@/API/meme';

const Home = () => {
   
    const [data, setdata] = useState([])

  useEffect(() => {
    getAllMemes().then((memes) => setdata(memes.data.memes) )
    
  }, [])
  
  return (
    

    <div className="grid gap-2 grid-cols-4 grid-rows-4 ml-7">

      {
      data.map((el) => ( <Card img={el.url} title = {el.name} />))
     
      }

      

    </div>
    
  )
}

export default Home