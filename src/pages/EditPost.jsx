import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import appwriteServices from '../appwrite/config'
import { PostForm, Container } from "../components";


function EditPost(){
    const {slug}=useParams();
    const [post,setPost]=useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        if(slug) {
            appwriteServices.getPost(slug).then((post)=>{
                if(post){
                    setPost(post);
                }
                else{
                    navigate("/");
                }
            })
        }
    },[slug,navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
      ) : null
}
export default EditPost;