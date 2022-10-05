import React,{useState} from 'react' 
export default function () {  

  const [first, setfirst] = useState({name:'',email:'',password:''});  
  const {name,email,password} = first;  
  const handleInfo=(e)=>{ 
      setfirst({...first,[e.target.name]:e.target.value});

  };   
   
  const handleSubmit=(e)=>{   
    console.log("form submitted");
    console.log(first);
    e.preventDefault();
  };

  return (
    <div> 
        <h2>Form</h2> 
        <form className='info' onSubmit={handleSubmit}> 
            <div className='name'>  
                <label> Name </label> 
                <input type='text' name='name' required value={name} placeholder='Enter name' onChange={handleInfo} />
            </div> 
            <div className='email'>  
                <label> Email </label> 
                <input type='email' name='email' required value={email} placeholder='Enter email' onChange={handleInfo} />
            </div> 
            <div className='password'>  
                <label> Password </label> 
                <input type='password' name='password' required value={password}  placeholder='Enter password' onChange={handleInfo} />
            </div> 
            <button>Submit</button>
        </form>  
    </div>
  )
}
