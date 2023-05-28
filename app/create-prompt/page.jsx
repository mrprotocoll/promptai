'use client';

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Form from "@components/Form";
import router from "next/router";

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false)
    const [post, setPost] = useState({
        prompt: '',
        tag: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitting(true)
        
        try {
            const response = async () => await fetch('/api/prompt/new',{
                method: "POST",
                body: JSON.stringify(
                    {
                        prompt: post.prompt,
                        tag: post.tag,
                        userId: session?.user.id
                    }
                )
            })
            
            if(response.ok) {
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        }
        finally{
            setSubmitting(false)
        }
        
    }

    return (
        <Form
            type="Create"
            post={post}
            setPost={setPost}
            submitting={submitting}
            handleSubmit={handleSubmit}
        />
    )
}

export default CreatePrompt
