import { Link } from "react-router-dom";
import appwriteService from '../appwrite/config';

function PostCard({$id, title, featuredImage, userName}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4 transition-all transform hover:bg-gray-700 hover:scale-105 hover:text-white flex flex-col justify-between">
                <div className="w-full mb-4">
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title} className="rounded-xl" />
                </div>
                <div>
                    <h2 className="text-xl font-bold text-center">{title}</h2>
                    <p className="text-gray-600 text-right">Posted by: {userName ? userName : "User"}</p>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;
