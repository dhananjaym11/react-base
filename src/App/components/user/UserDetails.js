const UserDetails = (props) => {
    const user = props.details;
    return (
        <div className="user-details">
            <div className="clearfix">
                <img src={user.avatar_url} alt={user.name} className="float-left" />
                <div className="user-info">
                    <h4>Name : {user.name}</h4>
                    <h4>Type : {user.type}</h4>
                    <h4>Location : {user.location}</h4>
                    <h4>Company: {user.company} </h4>
                </div>
            </div>
        </div>
    )
};

export default UserDetails;