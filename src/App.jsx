import { useState } from "react";
import "./app.css";

function App() {
  const friendsData = [
    {
      friendsName: "ahsan",
      imageUrl:
      "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg",
      friendsMoney: "600",
    },
    {
      friendsName: "Mukhtar",
      imageUrl:
      "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg",
      friendsMoney: "1600",
    },
    {
      friendsName: "Ali",
      imageUrl:
      "https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg",
      friendsMoney: "6000",
    },
  ];
  const [friendsCard , setFriendsCard] = useState ([...friendsData])
  const [addFriendsCard , setAddFriendsCard] = useState (false)


  function addFriendsCardsHandler (friendsName, imageUrl) {
    const addFriend = friendsData
    addFriend.push({
      friendsName,
      imageUrl,
      friendsMoney : 0
    })
    setFriendsCard(addFriend)
  }
  return (
    <div className="mainContainer">
      <div>
        <h1
          style={{
            textAlign: "center",
            color: "darkgreen",
            borderBottom: "4px solid orange",
          }}
          className="mainHeading"
        >
          Eat N Split
        </h1>
      </div>
      {friendsCard.map((friends)=> (
       <div
       style={{
         display: "flex",
         justifyContent: "space-between",
         alignItems: "center",
         width: "500px",
         height: "100px",
         backgroundColor: "darkgreen",
         padding: "0px 20px",
         borderRadius: "12px",
         border: " 4px solid orange",
         marginBottom:"20px"
       }}
       className="container"
     >
       <div style={{ borderRadius: "50%" }} className="image">
         <img
           src={friends.imageUrl}
           alt=""
           width={"80px"}
           height={"80px"}
         />
       </div>
       <div style={{ color: "white" }} className="money">
         {friends.friendsName} owes you {friends.friendsMoney}
       </div>
       <div className="cards">
         <button
           style={{
             borderRadius: "5px",
             border: "none",
             color: "black",
             backgroundColor: "orange",
             height: "25px",
             cursor: "pointer",
           }}
         >
           Select
         </button>
       </div>
     </div> 
      ))}
    </div>
  );
}

export default App;
