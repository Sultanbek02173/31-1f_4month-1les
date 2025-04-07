import { useEffect, useState } from 'react';
import { Comment } from '../../featurs';
import axios from 'axios';
import './comments.scss';

const Comments = () => {

    const [com, setCom] = useState([]);
    
    useEffect(() => {
        // fetch('http://localhost:5000/comments')
        // .then((response) => response.json())
        // .then((data) => {setCom(data)})
        // .catch((error) => console.log(error));

        fetchComment()
    }, [])

    const fetchComment = () => {
        axios.get('http://localhost:5000/comment')
        .then(({data}) => setCom(data))
        .catch((error) => console.log(error));
    }

    console.log(com);

    const deleteComment = (id) => {
        axios.delete(`http://localhost:5000/comment/${id}`)
        .then(() => fetchComment())
        .catch((error) => console.log(error))
    }
    

    return (
        <div className='comments'>
            {
                com && 
                com.map(comment => (
                    <Comment 
                        key={comment.id}
                        id={comment.id}
                        rating={comment.rating} 
                        text={comment.text} 
                        name={comment.name} 
                        deleteComment={deleteComment}
                    />
                ))
            }
        </div>
    );
}

export default Comments;
