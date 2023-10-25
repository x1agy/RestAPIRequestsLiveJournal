import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Css/index.css";

const HomePage = () => {
    const [blogsData, setBlogsData] = useState([]);

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const response = await fetch("http://localhost:8000/posts");
                const data = await response.json();
                setBlogsData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchBlogs();
    }, []);

    return (
        <div className="blogsBody">
            {blogsData.map(item => (
                <section key={item.id}>
                    <b><header>{item.title} <br /> <small>Written by User №{item.userId}</small></header></b>
                    <p>{item.body.slice(0, 100)} <Link to={`/blogInfo/${item.id}`}>Read more...</Link></p>
                </section>
            ))}
        </div>
    );
}

export default HomePage;
