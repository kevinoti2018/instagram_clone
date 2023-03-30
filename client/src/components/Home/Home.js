import React,{useEffect} from 'react'
import MainLayout from '../MainLayout/MainLayout';
import Story from './Story';
import { useDispatch,useSelector } from 'react-redux';
import Posts from './Posts';
import { getUserfromLocalStorage } from "../../Utils/Utils"
import Suggestion from './Suggestion';
import { getPosts } from './../../Features/Post/PostAction';
export default function Home() {
    const dispatch = useDispatch()
    const postState = useSelector(state=>state.post)
    const {posts,isError,isPostSuccess,message} = postState
    const currentUser = getUserfromLocalStorage

    useEffect(()=>{
      async function fetchData(){
        await dispatch(getPosts())
      }
      fetchData()
    },[])
  return (
    <div>
    <section className='main-container'>
    <div className='inner-container'>
    <div className='left-section'>
      <Story/>
      {
        posts && posts.length >0
        ?
        posts.map((post,index)=>
          (<Posts key={index} post={post} currentUser={currentUser} />)
        ):
        <h2>loading</h2>
      }
      
    </div>
    <div className='right-section'>
      <Suggestion/>
    </div>
    </div>
    </section>

    </div>
  )
}