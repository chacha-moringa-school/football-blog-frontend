import { useEffect, useState } from "react";

const BlogList = () => {
    const [blogs, setBlogs] = useState([])

    useEffect(()=>{
        fetch("/blogs")
        .then((res)=> {
            return res.json()
        })
        .then((res)=> {
            console.log(res)
            return setBlogs(res)
        })
    },[])
    return ( 
        <div>
            {
                blogs.map((blog)=>{
                   return(
                    <div key={blog.id} className="card m-3 p-3 text-bg-dark shadow" style={{maxWidth: "80vw", height: "18rem"}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={blog.image_url} className="img-fluid rounded-start" alt="photo"/>
                            </div>
                            <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{blog.title}</h5>
                                <p className="card-text">{blog.news.substring(0, 250)}...</p>
                                <p className="card-text"><small>Last updated 3 mins ago</small></p>
                            </div>
                            </div>
                        </div>
                    </div>
                   )
                })
            }
        </div>
     );
}
 
export default BlogList;