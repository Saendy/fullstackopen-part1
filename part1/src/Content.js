import Part from "./Part"
const Content = (props) => {

    console.log(props);
    return (
        <div>
            {
              props.parts.map((part) => {
                return(<Part part={part}/>)
              })}
        </div>
    )
}
export default Content