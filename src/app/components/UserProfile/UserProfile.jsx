import Image from 'next/image';

const mockData = [
  {
    name: 'Anna',
    role: 'HR'
  },
];

export default function UserProfile() {
  const user = mockData[0];

  return (
    <div>
      <div>
        <Image
          src="/images/user-icon.svg"
          alt="User icon"
          width={74}
          height={74}
        />
      </div>
      <div>
        <p>Welcome, {user.name}</p>
        <p>Team {user.role}</p>
      </div>
    </div>
  );
}
