import "./Contact.css";
import PropTypes from 'prop-types';
import { Component } from "react";

// const Contact = ({ avatar, name, online }) => {
//     return (
//         <div className="Contact">
//             <img className="avatar" src={avatar} alt="userAvatar" />
//             <div>
//                 <p className="name">{name}</p>
//                 <div className="status">
//                     <span className={online ? "status-online" : "status-offline"}></span>
//                     <p className="status-text">{online ? "Online" : "Offline"}</p>
//                 </div>
//             </div>
//         </div>
//     );
// }

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            online: props.online
        }
    }
    render() {
        const { avatar, name } = this.props;
        return (
            <div className="Contact">
                <img className="avatar" src={avatar} alt="userAvatar" />
                <div>
                    <p className="name">{name}</p>
                    <div className="status">
                        <span className={this.state.online ? "status-online" : "status-offline"} onClick={() => {
                            const newStatus = !this.state.online;
                            this.setState({ online: newStatus })
                        }} ></span>
                        <p className="status-text" onClick={() => {
                            const newStatus = !this.state.online;
                            this.setState({ online: newStatus })
                        }}>{this.state.online ? "Online" : "Offline"}</p>
                    </div>
                </div>
            </div>
        )
    }
}

Contact.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    online: PropTypes.bool
};

export default Contact;