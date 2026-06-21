export default function Card({ course, duration, trainer }) {
  return (
    <div className="card m-2">
      <div className="card-body">
        <h3 className="card-title">{course}</h3>
        <p className="card-text">Duration: {duration} Months </p>
        <p className="card-text">Teacher: {trainer}</p>
        <a href="#" className="btn btn-primary">
          {course}
        </a>
      </div>
    </div>
  );
}

// export default function Card(props) {
//   //   console.log(props);                // object

//   return (
//     <div className="card m-2">
//       <div className="card-body">
//         <h3 className="card-title">{props.title}</h3>
//         <p className="card-text">Duration: {props.duration} Months </p>
//         <p className="card-text">Teacher: {props.trainer}</p>
//         <a href="#" className="btn btn-primary">
//           {props.title}
//         </a>
//       </div>
//     </div>
//   );
// }
