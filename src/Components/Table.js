// import React, { useState, useEffect} from "react";
// import "./course.css";
// import Dialog from "@mui/material/Dialog";
// import DialogActions from "@mui/material/DialogActions";
// import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
// import DialogTitle from "@mui/material/DialogTitle";
// import { TextField, Button } from "@mui/material";

// const courseData = [
//   {
//     id: 1,
//     Name: "MCA",
//     Author: "Mantosh",
//   },
//   {
//     id: 2,
//     Name: "BCA",
//     Author: "Mantosh",
//   },
//   {
//     id: 3,
//     Name: "BSc",
//     Author: "Mantosh",
//   },
// ];

//   const Course = () => {
//   const [edit, setEdit] = useState(false);
//   const [course, setCourse] = useState("");
//   const [author, setAuthor] = useState("");
//   const [editIndex, setEditIndex] = useState();
//   const [courseEdit, setCourseEdit] = useState(false);
  
//   const saveHandler = () => {
//     courseData.push({
//       id: courseData.length + 1,
//       Name: course,
//       Author: author,
//     });
//     setEdit(false);
//   };


//   const updateHandler = () => {
//     courseData[editIndex-1].Name= course;
//     courseData[editIndex-1].Author=author;
//     setCourseEdit(false);

//     // setAuthorEdit(false);
//   };

//   const deleteHandler =()=>{
//     console.log("delete")
//     courseData.splice(editIndex,1)
//   }
//   useEffect(() => {}, [courseData,deleteHandler]);
//   const handleClose = () => {
//     setEdit(false);
//     setCourseEdit(false)
//   };

//   return (
//     <div>
//       <div className="courseTable">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">S No</th>
//               <th scope="col">Course Name</th>
//               {/* <th scope="col">Price</th> */}
//               <th scope="col">Author</th>
//               <th scope="col">Action</th>
//               <th scope="col">Deletion</th>
//             </tr>
//           </thead>
//           <tbody>
//             {courseData.map((course) => (
//               <tr>
//                 <th scope="row">{course.id}</th>
//                 <td>{course.Name}</td>
            
//                 <td>{course.Author}</td>
//                 <td>

//         <button className="btn btn-success" onClick={() => {
//           setEditIndex(course.id)
//           setCourse(course.Name)
//           setAuthor(course.Author)
//           setCourseEdit(true)
//         }} > Edit</button>
//         </td>
//         <td>
          
//      <button className="bt btn btn-secondary" onClick={() => {
// setEditIndex(course.id)
// deleteHandler()
//       }}> Delete </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
                
//         <button className="btn btn-success" onClick={() => setEdit(true)}>
//           Add new Course
//         </button>
//         <button className="btn btn-danger" onClick={() => setEdit(false)}>
//           Refresh
//         </button>
//         {edit ? (
//           <Dialog open={true} onClose={handleClose}>
//             <DialogTitle>Add New Course</DialogTitle>
//             <DialogContent>
//               <DialogContentText>Enter course details</DialogContentText>
//               <TextField
//                 autoFocus
//                 margin="dense"
//                 id="Course"
//                 label="Enter Course Name"
//                 type="text"
//                 fullWidth
//                 variant="standard"
//                 onChange={(e) => setCourse(e.target.value)}
//               />
//               <TextField
//                 autoFocus
//                 margin="dense"
//                 id="author"
//                 label="Enter Author Name"
//                 type="email"
//                 fullWidth
//                 variant="standard"
//                 onChange={(e) => setAuthor(e.target.value)}
//               />
//               <button className="btn btn-success" onClick={saveHandler}>
//                 Save
//               </button>
//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose}>Cancel</Button>
//             </DialogActions>
//           </Dialog>
//         ) : (
//           ""
//         )}

// {courseEdit ? (
//           <Dialog open={true} onClose={handleClose}>
//             <DialogContent>
//               <DialogContentText>Update Course details</DialogContentText>
//               <TextField
//                 autoFocus
//                 margin="dense"
//                 id="course"
//                 label="Enter course Name"
//                 type="text"
//                 value={course}
//                 fullWidth
//                 variant="standard"
//                 onChange={(e) => setCourse(e.target.value)}
//               />

//               <TextField
//                 autoFocus
//                 margin="dense"
//                 id="author"
//                 label="Enter Author Name"
//                 type="text"
//                 value={author}
//                 fullWidth
//                 variant="standard"
//                 onChange={(e) => setAuthor(e.target.value)}
//               />

//           <button className="btn btn-success" onClick={updateHandler} >
//               Update 
//           </button>

//             </DialogContent>
//             <DialogActions>
//               <Button onClick={handleClose}>Cancel</Button>
//             </DialogActions>
//           </Dialog>
//         ) : (
//           ""
//         )}
//     <div> 
//         </div>

//       </div>
//     </div>
//   ); 
// };

// export default Course;




import React from "react";
const Table = (props) => {

    return (
    <>
        <div className="table">
            <table class="table">
        <thead>
            <tr>
            <th scope="col">Serial Number</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            </tr>
            <tr>
            <th scope="row">2</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
            </tr>
            <tr>
            <th scope="row">3</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
            </tr>
        </tbody>
        </table>
    </div>
        </>
    )
}
export default Table


// // <table class="table">
// //   <thead class="table-dark">
// //     ...
// //   </thead>
// //   <tbody>
// //     ...
// //   </tbody>
// // </table>
/*
<div className="table-responsive">
  <table class="table table-bordered table-hover" style="width: 80%;">
    <thead>
      <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Profile</th>
      </tr>
    </thead>
    <tbody>
      <tr ng-repeat="item in contacts">
        <td>{{props.Id}}</td>
        <td>{{props.Name}}</td>
        <td>{{props.Profile}}</td>
      </tr>
    </tbody>
  </table>
 </div>
*/