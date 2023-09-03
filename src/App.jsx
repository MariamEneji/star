/* eslint-disable react/no-unescaped-entities */

import StarRating from './assets/StarRating'
import Star from './assets/Star'


function App() {
  

  return (
    <>
    <div className='flex flex-col items-center justify-center p-4 gap-4'>
      
    <section className='border-2 w-full flex flex-col items-center p-4 '>
        <h2 className='text-3xl font-bold py-4'>Winter's Orbit</h2>
        <p>Rating: 5 / 5</p>
        <StarRating Star={<Star />} rating={5} />
      </section>
      <section className='border-2 w-full flex flex-col items-center p-4'>
        <h2 className='text-3xl font-bold py-4' >Dial D for Deadman</h2>
        <p>Rating: 4 / 5</p>
        <StarRating Star={<Star />} rating={4} />
      </section>
      <section className='border-2 w-full flex flex-col items-center p-4'>
        <h2 className='text-3xl font-bold py-4'>Words And Things</h2>
        <p>Rating: 0 / 5</p>
        <StarRating Star={<Star />} rating={0} />
      </section>
      <section className='border-2 w-full flex flex-col items-center p-4'>
        <h2 className='text-3xl font-bold py-4'>The Galaxy, And The Ground Within</h2>
        <p>Rating: 5 / 5</p>
        <StarRating Star={<Star />} rating={5} />
      </section>
    </div>

    </>
  )
}

export default App
