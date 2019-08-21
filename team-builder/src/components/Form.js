import React, { useState } from "react";

const Form = props => {
    const [member, setMember] = useState({ name: "", age: "", power: "" });
    const changeHandler = event => {

        console.log(event.target.value);
        setMember({ ...member, [event.target.name]: event.target.value });
    };
    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member,
            id: Date.now()
        };
        props.addNewMember(newMember);
        setMember({ name: "", age: "", power: "" });
    };
    return (
        <form onSubmit={submitForm}>
            <div className='daForm'>
                <div className="formDiv">
                    <label htmlFor="name">Member Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={member.name}
                        onChange={changeHandler}
                    />
                </div>


                <div className="formDiv">
                    <label htmlFor="age">Member Age</label>
                    <input
                        type="text"
                        name="age"
                        placeholder="Age"
                        value={member.age}
                        onChange={changeHandler}
                    />
                </div>


                <div className="formDiv power">
                    <label htmlFor="power">Power Description</label>
                    <textarea
                        name="power"
                        placeholder="Describe powers"
                        value={member.power}
                        onChange={changeHandler}
                    />
                </div>


                <div className="formDiv">
                    <button type="submit">Add Member</button>
                </div>
            </div>
        </form>
    );
};

export default Form;
