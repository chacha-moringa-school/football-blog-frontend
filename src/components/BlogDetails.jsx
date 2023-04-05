import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const BlogDetails = ({userSignedIn}) => {
    const [blog, setBlog] = useState([])
    const [comment, setComment] = useState('')
    const [user_id, setUserId] = useState('')
    const [blog_id, setBlogId] = useState('')
    const {id} = useParams()
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`/blogs/${id}`)
        .then((res)=> res.json())
        .then((data)=> {
            console.log(data)
            return setBlog(data)
        })
    },[])

    // fetch comments
    // const handleComment = (event) => {
    //     event.preventDefault();
        
    //     const commentData = { user_id, blog_id, comment};
        
    //     fetch(`/comments`, {
    //         method: 'POST',
    //         headers: {
    //         'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify(commentData)
    //     })
    //         .then(response => response.json())
    //         .then(data => {
    //         // Update the list of comments with the new comment
    //         console.log(data)
    //         setComment([...comment, data]);
    //         setComment('');
    //         })
    //         .catch(error => console.log(error));
    // }

    // handle like
    const handleLike = (blog_id, user_id)=>{
        // if (likedBlogIds.includes(blogId)) {
        //     alert('You have already liked this blog!');
        //     return;
        // }

        const form_data = new FormData()
        form_data.append("blog_id", blog_id)
        form_data.append("user_id", user_id)
         
        fetch("/likes", {
            method: 'POST',
            body: form_data
        })
        .then((res) =>{
            if(res.ok){
               console.log("Added") 
            } else {
                alert("You've already liked this blog")
                console.log("Errors")
            }
        })

      }

    //   Delete blogs
    const handleDeleteBlog = ()=>{
        fetch(`/blogs/${blog.id}`, {
            method: 'DELETE'
        })
        .then((res)=>{
            if(!res.ok){
                alert("Unauthorised!! Only the owner of this blog can delete it!!")
            } else {
                alert("Successfully Deleted")
                navigate('/blogs')
                return res.json()
                .then((data)=>{console.log(data)})  
            }
            })
        
    }
    return (
        <div className="container" style={{minHeight: "100vh"}}>
            <div className="col-md-6">
                <img src={blog.image_url} className="img-fluid rounded" alt="image" style={{height: "50vh", width: "100vw"}} />
            </div>
            <div className="col-md-8">
                <div className="card-body">
                    <h2 className="card-title">{blog.title}</h2>
                    <p className="card-text">{blog.news}</p>
                    <p className="card-text"><small>Last updated {blog.updated_at_formatted}</small></p>
                    {/* <small>Author: {blog.user.username}</small> */}
                </div>
            </div>
            <button className="mt-3" onClick={()=> handleLike(blog.id, userSignedIn.id)} >Like </button>
            <div className="mt-5">
                <button className="me-5 btn btn-primary" onClick={()=> navigate(`/blogs/${blog.id}/update`)} >Edit</button>
                <button onClick={handleDeleteBlog} className="ms-5 btn btn-danger">Delete</button>
            </div>
            
            {/* comments */}
            {/* <form onSubmit={handleComment}>
                <input type="text" value={comment} onChange={(event) => setComment(event.target.value)} />
                <input type="hidden" value={blog_id} onChange={(event) => setComment(blog.id)} />
                <input type="hidden" value={user_id} onChange={(event) => setComment(event.target.value)} />
                <button type="submit">Submit</button>
            </form> */}
                                    
        </div>
    );
}
 
export default BlogDetails;