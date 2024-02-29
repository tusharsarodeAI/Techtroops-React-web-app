import React from 'react'

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {useState} from 'react'
const CreatePost = () => {

  const [ title,setTitle] =useState("")
  const [ category,setCategory] =useState("unauthrised")
  const [description,setDescription] =useState('')
 
  const [thumbnail,setThumbnail] =useState("")

  const Post_Category=["Technology",
  "Science",
  "Health",
  "Travel",
  "Food",
  "Fashion",
  "Lifestyle",
  "Business",
  "Sports",
  "Entertainment",
  "Education",
  "Finance",
  "Art",
  "Politics",
  "DIY",
  "Parenting",
  "Fitness",
  "Books",
  "Music",
  "Photography"
];
const modules = {
  toolbar: [
    [{ 'header': [1, 2,3,4,5,6, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
}

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]
  return (
    <>
    <section className="w-full p-4 flex justify-center">
      <div className=" w-full  md:w-[70%] bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center py-4">Create Post</h2>
        <p className="text-red-500 text-center"></p> {/* Assuming errorMessage is a state variable */ }
        <form className="p-4">
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
          <label> Category</label>
          <select
            name="category"
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          >
            {Post_Category.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          <ReactQuill className='h-[230px] mb-5' modules={modules} formats={formats} value={description} onChange={setDescription}></ReactQuill>
          <input
            type='file'
            onChange={e => setThumbnail(e.target.files[0])}
            accept='image/png,image/jpeg,image/jpg'
            className="w-full px-4 py-2 mt-16 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400"
          />
            
          <button className=' bg-blue-800 text-white w-48 h-10 mt-5 '>Blue</button>
        </form>
      </div>
    </section>
  </>
  
  )
}

export default CreatePost