import Image from 'next/image'

export default function Sidebar() {
  return (
    <div>
      <div>
        User profile placeholder container
      </div>
      <div>
        <div>
          <Image src="/images/dashboard-icon.svg" alt="Dashboard icon" width={20} height={20} />
          Dashboard
        </div>
        <div>
         <Image src="/images/settings-icon.svg" alt="Settings icon" width={20} height={20} />
          Settings
        </div>
      </div>
    </div>
  )
}