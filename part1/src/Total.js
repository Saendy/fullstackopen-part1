const Total = (props) => {
    let totalNumberOfExercises = 0;
    props.parts.map((prop)=> {totalNumberOfExercises+=prop.exercises}) 
    return (
        <p>Number of exercises {totalNumberOfExercises}</p>
    )
}
export default Total