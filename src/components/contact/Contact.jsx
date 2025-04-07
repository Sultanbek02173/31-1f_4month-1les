import './contact.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-description'>
                <p>Email Newsletter</p>
                <h2>Subscribe for updates</h2>
            </div>
            <form className='contact-form'>
                <input type="text" placeholder='Name' />
                <input type="email" placeholder='Email' />
                <button>Submit</button>
            </form>
        </div>
    );
}

export default Contact;
