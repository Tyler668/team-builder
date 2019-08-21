import React from "react";

const MemberList = props => {
  console.log(props);
  return (
    <div className="memberList">
      {props.memberList.map(member => {
        return (
          <div className="memberCard" key={member.id}>
            <h2>{member.name}</h2>
            <h3>Age: {member.age}</h3>
            <p>Powers: {member.power}</p>
          </div>
        );
      })}
    </div>
  );
};
export default MemberList;
