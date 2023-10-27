import { useState } from 'react'
import Image from 'next/image'

export default function InclusionScoreCard({ thisWeek }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div>
      <div>
        <h2>Timeline</h2>
      </div>
      <div>
        <button onClick={toggleDropdown}>
          <div>This week {thisWeek}</div>
          <div>
            <Image
              src="/images/arrow-down-s-line.svg"
              alt="Arrow down icon"
              width={8}
              height={8}
            />
          </div>
        </button>
        {isDropdownOpen && (
          <div>{/* Add content here */}</div>
        )}
      </div>
    </div>
  )
}
