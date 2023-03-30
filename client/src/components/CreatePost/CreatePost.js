import React,{useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import Posts from './../Home/Posts';
import { useDispatch,useSelector } from 'react-redux';
import { createPost } from './../../Features/Post/PostAction';
const CreatePost = () => {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [image,setImage] = useState('')
    const dispatch = useDispatch()
    const postState = useSelector(state=>state.post)
    const {isError,isPostSuccess,message} = postState
    const postData = async() => {
        try {
          const data = new FormData();
          data.append("file", image);
          data.append("upload_preset", "instaclone");
          data.append("cloud_name", "kev-otiz");
      
          const response = await fetch(
            "https://api.cloudinary.com/v1_1/kev-otiz/image/upload",
            { method: "POST", body: data }
          );
      
          const imageData = await response.json();
      
          const postdata = {
            title,
            body,
            pic: imageData.url,
          };
      
          await dispatch(createPost(postdata));
      
          if (isPostSuccess) {
            setTitle("");
            setBody("");
            setImage("");
            toast.success(message);
          }
        } catch (error) {
          if (isError) {
            toast.error(message);
          }
        }
      };
  return (
    <div className='container postcontainer'>
    <div className='row postform'>
        <div className='col-sm-12 d-flex'>
            <div className='login-card card-block'>
                <div className='login-card card-block'>
                    <div className='authbox'>
                        <div className='col-12'>
                            <ToastContainer/>
                            <h2 className='text-center brand-logo'>Create Post</h2>
                            <br />
                            <div className='input-group'>
                                <input type="text" placeholder="Title" className="form-control" required
                                    autoComplete='off' value={title} onChange={(e)=>setTitle(e.target.value)}/>
                            </div>
                            <div className='input-group'>
                                <input type="text" placeholder="Description" className="form-control" required
                                    autoComplete='off'  value={body} onChange={(e)=>setBody(e.target.value)} />
                            </div>
                            <div className='file-field input-field'>
                                <input type="file" className="form-control" required
                                    autoComplete='off'  onChange={(e)=>setImage(e.target.files[0])}/>
                            </div>
                            <br />
                            <div className='m-t-20'>
                                <button className='btn btn-primary' type='submit'  onClick={postData}>Submit Post</button>
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  )
}

export default CreatePost