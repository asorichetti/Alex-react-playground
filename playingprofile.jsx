const user = {
    name: 'Alex Sorichetti',
    imageUrl: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2Falex_sori02&psig=AOvVaw3q18T12Sm17_KYs2MkKuVv&ust=1716336989957000&source=images&cd=vfe&opi=89978449&ved=0CBQQjhxqFwoTCPCW4Na7nYYDFQAAAAAdAAAAABAE',
    imageSize: 90,
};
const qualifications = [
    { title: 'CSS', id: 1 },
    { title: 'HTML', id: 2 },
    { title: 'React', id: 3 },
    { title: 'JSX', id: 4 },
    { title: 'P5.js', id: 5 },
    { title: 'TypeScript', id: 6 },
]
export default function Profile() {
    return(
        <><>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }} />
        </><>
                <h1>{'Qualifications'}</h1>
                <li
                    key={qualifications.id}
                    >
                    {qualifications.title}
                </li>
            </></>
    );
} 