import React from "react";

export default function UserPage() {
    const users = [
        { id: 1, name: "John Doe", email: "john@example.com" },
        { id: 2, name: "Jane Doe", email: "jane@example.com" },
        // Другие пользователи
    ];

    const [selectedUser, setSelectedUser] = React.useState(null);

    const handleUserClick = (user) => {
        setSelectedUser(user);
    };

    return (
        <div>
            <UserList users={users} onUserClick={handleUserClick} />
            <UserDetails user={selectedUser} />
        </div>
    );
}

const UserList = ({users, onUserClick}) => {
    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li style={{cursor: "pointer"}} key={user.id} onClick={() => onUserClick(user)}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};


const UserDetails = ({user}) => {
    return (
        <div>
            <h2>User Details</h2>
            {user ? (
                <div>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Select a user to view details</p>
            )}
        </div>
    );
};