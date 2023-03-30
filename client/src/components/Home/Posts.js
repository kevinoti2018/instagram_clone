import React from 'react'
import image1 from '../../assets/icon/post4.jpg'
import image2 from '../../assets/icon/comment.svg'
import image3 from '../../assets/icon/share.svg'
import image4 from '../../assets/icon/emoji.svg'
import{ timeSince} from '../../Utils/Utils'
const Posts = ({post,currentUser}) => {
  return (
    <div className='post-list'>
        <div className='post'>
            <div className='p_d'>
                <div className='p_inner'>
                    <img className='p_p' alt="image1" src={post.postedBy.pic}/>
                    <a href=''>
                        <p className='p_name'>{post.postedBy.name}</p>
                    </a>
                </div>
                <i className='fas fa-ellipsis-h threedots'></i>
            </div>
            <div className='p_image'>
                <img className='pp_full' src={image1} alt='post'/>
            </div>
            <div className='reaction_icon'>
                <button className='reactionbtn'>
                    <i className='fas fa-heart hearticon' style={{fontSize:'22px'}} ></i>
                </button>
                <button className='reactionbtn'>
                    <img src={image2} alt="image2"/>
                </button>
                <button className='reactionbtn'>
                    <img src={image3} alt="image2"/>
                </button>
            </div>
            <div className='right_i'>
                <button className='reactionbtn'>
                <i className='fa fa-bookmark' style={{fontSize:'22px'}} ></i>
                </button>
            </div>
        </div>
        <h6 className='numlikes'> 1 likes</h6>
        <span className='postitle'>Nature</span>
        <span>Lovely Nature</span>
        <br/>
        <button type='button' className='btn viewcommentbtn' > View all Comments</button>
        <div style={{overflowY:"scroll", maxHeight:"85px"}} >
            <div style={{display:"flex", justifyContent:'space-between'}} >
                <h6>
                    <a href="" className='comment'>
                        <img src={image1} alt="" className='commentview'/>
                        <span style={{fontWeight:'400'}}>Jeo</span>
                    </a>
                    &nbsp;
                    Nice!!
                </h6>
            </div>
            <p className='postdate'>
                {timeSince(new Date())} Ago
            </p>
            <div className='comment_section'>
                <div className='input_box'>
                    <img src={image4} alt=''/>
                    <input type='text' className=" input_c" placeholder="Add a comment .."/>
                </div>
                <div className='c_text'>
                    <button>Post</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Posts