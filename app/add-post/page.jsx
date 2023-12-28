"use client";
import styles from "@/app/page.module.css";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddPost() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const router = useRouter()

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
        await fetch('/api/add-post', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({title,content})})
        router.refresh()
    } catch (error){
        console.error(error)
    }

    setTitle('');
    setContent('');
  };
  return (
    <main className={styles.main}>
        <Link href={'/'}> View Feed
        </Link>
      <h1>Add Post</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={handleTitleChange} />
        </label>
        <br />
        <label>
          Content:
          <input type="text" style={{width: '200px',height: '50px'}} value={content} onChange={handleContentChange} />
        </label>
        <br />
        <button type="submit" style={{border: '1px solid white', borderRadius:"10px", padding: '10px', background: 'black'}}>Submit</button>
      </form>
    </main>
  );
}
