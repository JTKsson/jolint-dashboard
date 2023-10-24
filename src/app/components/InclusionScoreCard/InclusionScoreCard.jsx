import inclusionData from '@/app/assets/mockData.json';

export default function InclusionScoreCard() {
  // Access the "Inclusion score" from the imported JSON data
  const inclusionScore = inclusionData['Inclusion score'];

  // Round up the decimal to the nearest integer
  const roundedInclusionScore = Math.ceil(inclusionScore);

  return (
    <div>
      <h1>Inclusion Score</h1>
      <p>{roundedInclusionScore}</p>
    </div>
  );
}