// import React, { useEffect, useState } from "react";
// // const [notes, setNotes] = useState([]);

// export const useNotes = () => {
//   return {
//     getNotes: useEffect(() => {
//       fetch("/api/notes")
//         .then((res) => res.json())
//         .then((response) => {
//           console.log({ response });
//           setNotes(response);
//         });
//     }, []),
//     // createNote: useEffect(() => {
//     //   // POST request using fetch inside useEffect React hook
//     //   console.log("CREATING!!!");
//     //   const requestOptions = {
//     //     method: "POST",
//     //     headers: { "Content-Type": "application/json" },
//     //     body: JSON.stringify({ title: "React Hooks POST Request Example" }),
//     //   };
//     //   fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
//     //     .then((response) => response.json())
//     //     .then((data) => {
//     //       // return setPostId(data.id)
//     //     });
//     //   // empty dependency array means this effect will only run once (like componentDidMount in classes)
//     // }, []),
//   };
// };
