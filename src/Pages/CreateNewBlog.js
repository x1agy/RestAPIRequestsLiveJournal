import "./Css/index.css";

function CreateNewBlog(){
    async function addNewBlogToData(e){
        const form = document.querySelector("form");
        try{
            if(form.title.value == "" || form.body.value == ""){
                alert("Заполните все поля")
                e.preventDefault();
            }
            else if(form.body.value.length < 201){
                alert("Минимальное количество символов 200")
                e.preventDefault();
            }
            else{
                alert("Новый блог создан!")
                await fetch("http://localhost:8000/posts", {
                    method: "POST",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        title: form.title.value,
                        body: form.body.value,
                        userId: form.userId.value
                    })
                })
                
            }
        }
        catch(error){
            console.error("Error fetching data:", error);
        }
        
    }
    return(
        <div className="makeNewBlogDiv">
            <h1>Create your own blog!</h1>
            <form action="">
                <h5>Blog title:</h5>
                <input required name="title" type="text" />
                <h5>Blog body:</h5>
                <textarea required name="body" id="" cols="30" rows="10"></textarea>
                <br />
                <h5>User number:</h5>
                <select name="userId" id="">
                    <option value="1">user №1</option>
                    <option value="2">user №2</option>
                    <option value="3">user №3</option>
                    <option value="4">user №4</option>
                    <option value="5">user №5</option>
                    <option value="6">user №6</option>
                    <option value="7">user №7</option>
                    <option value="8">user №8</option>
                    <option value="9">user №9</option>
                    <option value="10">user №10</option>
                </select>
                <br />
                <button onClick={addNewBlogToData}>submit</button>
            </form> 
        </div>
    )
}
export default CreateNewBlog