import { useState } from 'react'


const Statistics = (props) => {
  const total = props.good + props.bad + props.neutral;
  if(total) {
    return (
      <table>
        <tbody>
        <StatisticLine stat="good" value={props.good} />
        <StatisticLine stat="neutral" value={props.neutral} />
        <StatisticLine stat="bad" value={props.bad} />
        <StatisticLine stat="total" value={total} />
        <StatisticLine stat="average" value={(props.good-props.bad)/total} />
        <StatisticLine stat="positive" value={(props.good/total*100) + " %"} />
        </tbody>
      </table>
    )
  }
  else {
    return (
      <p>No feedback given</p>
    )
  }

}

const StatisticLine = (props) => {
  return (
    <tr>
    <td>{props.stat}</td>
    <td>{props.value}</td>
    </tr>
  );
}
const Button = (props) => {
  return (
    <button onClick={props.callBack}>{props.buttonName}</button>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  
  const addGoodFeedback = () => {
    setGood(good+1);
  }
  const addBadFeedback = () => {
    setBad(bad+1);
  }  
  const addNeutralFeedback = () => {
    setNeutral(neutral+1);
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button buttonName="good" callBack={addGoodFeedback}/>
      <Button buttonName="neutral" callBack={addNeutralFeedback}/>
      <Button buttonName="bad" callBack={addBadFeedback}/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}




export default App