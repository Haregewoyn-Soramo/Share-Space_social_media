
import React from "react";
import { useState} from "react";



const Create = () =>{
const [category, setCategory] = useState(null)
const [title, setTitle] = useState(null)
const [description, setDescription] = useState(null)
const [image, setImage] = useState(null)
const [isLoading, setIsloading] = useState(false)


const handleSubmit = ((e) =>{
  e.preventDefault();
  const newPin = {category, title, description, image}
  setIsloading(true);
  fetch('http://localhost:3000/products', {
     method: "POST",
     headers: {"conten-Type": "application/json"},
     body: JSON.stringify(newPin)
  }).then( ()=>{
    console.log("new pin has created")
    setIsloading(false);
  })
})

  return(
    <div className="submit-form">
      <form onSubmit={handleSubmit}>
      <label> Catagory </label>
      <section>
        <option  value="Food & Drink"></option>
        <option  value="Travel & Adventure"></option>
        <option  value="Fashion & Style"></option>
        <option  value="Home Decor"></option>
      </section>

      <label> Title </label>
      <input
       type="text"
       value={title}
       onChange= {(e) =>setTitle(e.target.value)}
       />
      <label> Description </label>
      <textarea 
        type="text"
        value={description}
        onChange={(e) =>setDescription(e.target.value)}
      >
      </textarea>
      <button>Create Pin</button>
      </form>

    </div>
  )
}

export default Create