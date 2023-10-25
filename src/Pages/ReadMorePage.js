import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Css/index.css";

function BlogInfo() {
    const { id } = useParams();
    const [blogDetails, setBlogDetails] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchBlogData() {
            try {
                const response = await fetch(`http://localhost:8000/posts/${id}`);
                const blogData = await response.json();
                setBlogDetails(blogData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchBlogData();
    }, [id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    async function deleteBlog(){
        await fetch(`http://localhost:8000/posts/${id}`, {
            method: "DELETE"
        })
        alert("Blog deleted!")
        window.location.replace("/")
    }

    return (
        <div className="blogDetailsDiv">
            <div>
                <h2>{blogDetails.title} <small>Written by User №{blogDetails.userId}</small></h2>
                <p>{blogDetails.body}</p>
                <button onClick={deleteBlog}>Delete Blog</button>
            </div>
        </div>
    );
}

export default BlogInfo;
