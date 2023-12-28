'use client'
import { useRouter } from "next/navigation"


export default function DeletePostButton({postId}){
    const router = useRouter()
    async function handleClick(){
        try {
            await fetch(`/api/post/${postId}`, {
                method: 'DELETE'
            })
            router.refresh()
        } catch(e) {
            console.error(e)
        }
        

    }
    
    return (
        <button onClick={handleClick} style={{border: '1px solid white', borderRadius:"10px", padding: '10px', background: 'black'}}>Delete Post</button>
    )
}