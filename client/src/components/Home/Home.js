import React from 'react'
import MainLayout from '../MainLayout/MainLayout';
import Story from './Story';
import Posts from './Posts';
import Suggestion from './Suggestion';

export default function Home() {
  return (
    <div>
    <MainLayout/>
    <section className='main-container'>
    <div className='inner-container'>
    <div className='left-section'>
      <Story/>
      <Posts/>
    </div>
    <div className='right-section'>
      <Suggestion/>
    </div>
    </div>
    </section>

    </div>
  )
}