import Image from 'next/image'

export default function Sidebar() {
  return (
    <div>
      <div>
        User profile placeholder container
      </div>
      <div>
        <div>
          <Image src="" alt="Dashboard icon" width={30} height={30} />
          Dashboard
        </div>
        <div>
         <Image src="" alt="Settings icon" width={30} height={30} />
          Settings
        </div>
      </div>
    </div>
  )
}