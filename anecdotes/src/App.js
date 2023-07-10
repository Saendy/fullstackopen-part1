import { useState } from 'react';

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ];
   
  const [selected, setSelected] = useState(0);
  const [votes, setvotes] = useState(new Array(anecdotes.length).fill(0));

  const selectRandom = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }

  const addVote = () => {
    let newVotes = [...votes];
    newVotes[selected]++;
    setvotes(newVotes);
  }

  const mostVotes = () => {
     return votes.indexOf(Math.max(...votes));
  }


  return (
    <div>
      <h1>Anecdote of the day</h1>
      <Anecdote votes={votes[selected]} anecdote={anecdotes[selected]} />
      <button onClick={addVote} >vote</button>
      <button onClick={selectRandom} >next ancedote</button>
      <h1>Anecdote with most votes</h1>
      <Anecdote votes={Math.max(...votes)} anecdote={anecdotes[votes.indexOf(Math.max(...votes))]} />
    </div>
  )
}

const Anecdote = (props) => {
  return (
    <>
      <p>{props.anecdote}</p>
      <p>has {props.votes} votes</p>
    </>
  )
}


export default App