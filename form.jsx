import { useState } from "react";

function Form({addRecord}) {

    const [data,setData]=useState({
        
        sugar:"",
        bpup:"",
        dpdown:""

    });

    const handleChange=(event)=>{
        
          setData((prevdata)=>({
            ...prevdata,
            [event.target.name]:event.target.value

        }));
    }

    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log(data)
        addRecord(data);
    }

    return (
      <>
        <form action="" onSubmit={handleSubmit} >
        {/* <label htmlFor="name" >Name:</label>
        <input type="number" name="name" placeholder="Whats your name" onChange={handleChange} value={data.name}/> */}
        <label htmlFor="sugar">Sugar:</label>
        <input type="number" name="sugar" placeholder="Whats your sugar level" onChange={handleChange} value={data.sugar}/>
        <label htmlFor="bpup">BloodPressure UP:</label>
        <input type="number" name="bpup" placeholder="Whats your bpup" onChange={handleChange} value={data.bpup}/>
        <label htmlFor="bpdown">BloodPressure Down:</label>
        <input type="number" name="bpdown" placeholder="Whats your bpdown" onChange={handleChange} value={data.bpdown}/>
        <button type="submit">submit</button>
        
        </form>
        
      </>
    )
  }
  
  export default Form;