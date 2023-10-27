import Image from 'next/image'

export default function ScoreChangeArrows({ lastMonth }) {
  // Round down the values and convert them to strings
  const roundedLastMonth = Math.floor(lastMonth).toString()

  return (
    <>
      <div>
        <div>
          <Image
            src={
              lastMonth > 0
                ? '/images/positive-arrow-green-icon.svg'
                : '/images/negative-arrow-red-icon.svg'
            }
            alt={lastMonth > 0 ? 'Gray arrow icon' : 'Gray arrow icon'}
            width={15}
            height={15}
            style={{ filter: 'grayscale(1)' }} // Apply grayscale filter to make the arrows gray
          />
          <p>
            {lastMonth > 0
              ? `+${roundedLastMonth}`
              : `-${Math.abs(roundedLastMonth)} `}{' '}
          </p>
        </div>
      </div>
    </>
  )
}
