// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import './index.css'

const teamsApUrl = 'https://apis.ccbp.in/ipl'
class Home extends Component {
  state = {
    isLoading: true,
    teamsData: [],
  }
  componentDidMount() {
    this.getTeams()
  }
  getTeams = async () => {
    const response = await fetch(teamsApUrl)
    const fetchedData = await response.json()
    const formattedDate = fetchedData.teams.map(teams => ({
      name: teams.name,
      id: team.id,
      teamImageURL: team.team - image - url,
    }))
    this.setState({
      teamsData: formattedDate,
      isLoading: false,
    })
  }
  renderTeamsList = () => {
    const {teamsData} = this.state

    return (
      <ul className="teams-list">
        {teamsData.map(team => (
          <TeamCard teamDetails={team} key={team.id} />
        ))}
      </ul>
    )
  }
  renderLoader = () => (
    <div testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} />
    </div>
  )
  render() {
    const {isLoading} = this.state
    return (
      <div className="home-route-container">
        <div className="teams-list-container">
          <div className="ipl-dashboard-heading=container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="ipl-logo"
            />
            <h1 className="ipl-dashboard-heading">IPL Dashboard</h1>
          </div>
        </div>
      </div>
    )
  }
}
export default Home