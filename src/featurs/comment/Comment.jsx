import './comment.scss';
import { Rating } from 'react-simple-star-rating';

export const Comment = ({id, rating, text, name, deleteComment}) => {
    
    return (
        <div className="comment">
            <Rating
                initialValue={rating}
                readonly={true}
                allowFraction={true}
                emptyColor={"transparent"}
                size={20}
            />
            <h2>{text}</h2>
            <p>{name}</p>
            <button onClick={() => {deleteComment(id)}}>Delete</button>
        </div>
    );
}

