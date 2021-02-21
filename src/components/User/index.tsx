import React from "react";

interface Props {
    userName: string
    profile: string
    isActive: boolean
}

export const UserComponent = ({
    userName,
    profile,
    isActive,
  }: Props): JSX.Element => ( 
    <div>
      <h1 style={{color: "grey"}}>{`UserName : ${userName}`}</h1>
      <br></br>
      <h2 style={{color: "grey"}}>{`User Profile : ${profile}`}</h2>
      <br></br>
      <h2 style={{color: "grey"}}>{`Active : ${isActive}`}</h2>
    </div>
  )
export default UserComponent;