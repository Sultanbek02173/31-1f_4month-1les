import { Comment } from '../../featurs';
import './comments.scss';

const Comments = () => {
    const comments = [
        {
            rating: 4.5,
            text: 'I can’t recommend this podcast enough',
            name: 'Betty Lacey'
        },
        {
            rating: 3.7,
            text: 'I can’t recommend this podcast enough',
            name: 'Betty Lacey'
        },
        {
            rating: 5,
            text: 'I can’t recommend this podcast enough',
            name: 'Betty Lacey'
        },
    ]
    return (
        <div className='comments'>
            {
                comments && 
                comments.map(comment => (
                    <Comment 
                        rating={comment.rating} 
                        text={comment.text} 
                        name={comment.name} 
                    />
                ))
            }
        </div>
    );
}

export default Comments;
