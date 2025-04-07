import './comment.scss';
import { Rating } from 'react-simple-star-rating';

export const Comment = ({rating, text, name}) => {
    return (
        <div className="comment">
            <Rating
                initialValue={rating}
                readonly={true}
                allowFraction={true}
                emptyColor={"transparent"}
            />
            <h2>{text}</h2>
            <p>{name}</p>
        </div>
    );
}

