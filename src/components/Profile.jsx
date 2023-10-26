export const Profile = ({ avatar, name, tag, location }) => {
    return (
        <div>
            <div>
                <img src={avatar} alt={name} width="50" height="50"/>
                <p>{name}</p>
                <p>@{tag}</p>
                <p>{location}</p>
            </div>
    </div>
);
}