import "./Contact.css";

const Contact = () => {
    return (
        <div className="Contact">
            <img className="avatar" src="https://randomuser.me/api/portraits/men/37.jpg" alt="userAvatar" />
            <div>
                <p className="name">Mitchell Hamilton</p>
                <div className="status">
                    <p className="status-text status-online">Online</p>
                </div>
            </div>
        </div >
    );
}

export default Contact;