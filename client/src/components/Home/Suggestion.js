import React from 'react'
import image1 from '../../assets/icon/post4.jpg'
const Suggestion = () => {
  return (
    <div className="mt-10">
        <div className='d-flex align-items-center justify-content-between'>
            <div>
                <a href='' className='d-flex align-items-center'>
                    <img src={ image1} className='big-avatar'/> &nbsp;
                    <div className='ml-1' style={{transform:'translateY(-2px)'}}>
                        <span className='d-block'>Leo</span>
                    </div>
                </a>
            </div>
        </div>
        <div className='d-flex juatify-content-between align-items-center my-8'>
            <h6 className='text-secondary suggestnbtn'>
        Suggestions for you
            </h6>
            <i className='fa fa-redo' style={{cursor:"pointer"}}></i>
        </div>
        <div className="suggestions">
            <div className="d-flex justify-content-between " >
                <a href="" className='d-flex align-items-center'>
                    <img className='sug-avatar' src={ image1} alt='avatarsug'/> &nbsp;
                    <div className='ml-1' style={{transform:'translateY(-2px)'}}>
                    <span className='d-block'>Leo</span>
                </div>
                </a>
            </div>
            <button style={{margin:'10px'}} className='sug-followbtn'>
                Follow
            </button>
        </div>
    </div>
  )
}

export default Suggestion