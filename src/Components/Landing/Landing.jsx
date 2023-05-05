//Assets
import Day from '../../assets/Day.png'
import Night from '../../assets/Night.png'

const Landing = (props) => {
  function isDay(isDay) {
    return isDay ? Day : Night
  }

  return (
    <div className="landing" style={{ backgroundImage: `url(${isDay(props.daytime)})` }}>
      <h1 id="splash-logo">Reactville</h1>
    </div>
  )
}

export default Landing