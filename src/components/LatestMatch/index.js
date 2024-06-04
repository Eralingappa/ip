// Write your code here
import './index.css'
const LatestMatch = props => {
  const {LatestMatchData} = props
  const {
    competingTeam,
    date,
    venue,
    result,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
    umpire,
  } = LatestMatchData

  return (
    <div className="latest-match-container">
      <h1 className="latest-match-heading">Latest Matches</h1>
      <div className="latest-match-card">
        <div className="latest-match-details"></div>
      </div>
    </div>
  )
}
export default LatestMatch