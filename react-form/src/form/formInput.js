import React, { useState } from 'react'

const FormInput = () => {

    const [userRegistration, setUserRegistration] = useState({
        username: "",
        email: "",
        course: "",
        password:"",
    });

    const [records, setRecord] = useState([]);

    const handleInput =(e) =>{
        const name = e.target.name;
        const value = e.target.value;
       // console.log(name, value)

        setUserRegistration({...userRegistration, [name] : value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault();

        const newRecord = {...userRegistration, id : new Date().getTime().toString() };
        console.log(records);
        setRecord([...records, newRecord]);

        setUserRegistration({username:"", email:"",course:"",password:""})

    }


  return (
    <>
    <div className='container'>
    <div className='head'>STUDENT Enrollment</div>
        <form onSubmit={handleSubmit}>
            <div class ="box">
                <label htmlFor='username'>Name</label>
                <input required type="text" placeholder='name' autoComplete='off'
                value={userRegistration.username}
                onChange={handleInput}
                 name='username' id='username'/>
            </div>
            <div class ="box">
                <label htmlFor='email'>Email</label>
                <input required type="email" placeholder='email' autoComplete='off'
                value={userRegistration.email}
                onChange={handleInput}
                name='email' id='email'/>
            </div>
            <div class ="box">
                <label htmlFor='course'>Course</label>
                <input required type="text" placeholder='course' autoComplete='off'
                value={userRegistration.course}
                onChange={handleInput}
                name='course' id='course'/>
            </div>
            <div class ="box">
                <label htmlFor='password'>Password</label>
                <input required type="password" placeholder='password'
                value={userRegistration.password}
                onChange={handleInput}
                name='password' id='password'/>
            </div>

            <button type='submit'>Enroll</button>
        </form>
    </div>
        
      {/* To show data */}
        <div>
           {
            records.map((curElem) => {
                const {id, username, email, course,password} = curElem;
                return(
                    <div className='showDataStyle' key={curElem.id}>
                        <p>{username}</p>
                        <p>{email}</p>
                        <p>{course}</p>
                        {/* <p>{password}</p> */}
                    </div>
                )
            })
           }
        </div>
    </>
  )
}

export default FormInput;
