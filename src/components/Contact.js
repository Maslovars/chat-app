import "./Contact.css";

const Contact = () => {
    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/37.jpg" alt="userAvatar" />
            <div>
                <p className="name">Mitchell Hamilton</p>
                <div className="status">
                    <span className="status-online"></span>
                    <p className="status-text">Online</p>
                </div>
            </div>
        </div >
    );
}

export default Contact;