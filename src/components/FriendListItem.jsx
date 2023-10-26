export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li>
            <span>{isOnline}</span>
            <img src={avatar} alt={name} width="48"/>
            <p>{name}</p>
        </li>
    );
}