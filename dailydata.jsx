import Form from "./form";
import { useState } from "react";

function Dailydata() {
    // const [count, setCount] = useState(0)
    const [dailydata,setDailydata]=useState([])
    const addRecord=(data)=>{
            setDailydata((prevdata)=>[...prevdata,data])
            console.log(dailydata)
    }
    const deleterecord=()=>{
        
    }
    // const AverageSugar=()=>{
    //     const avgsugar=dailydata.reduce((sum,element)=>{sum+element.sugar},0)

    // }
    return (
      <>
        <Form addRecord={addRecord}/>
        <div>
            {dailydata.map((element,index)=>(
                <div className="elements" > 
                    <p>id:{index+1}</p>
                    <p>sugar:{element.sugar}</p>
                    <p>bpup:{element.bpup}</p>
                    <p>bpdown:{element.bpdown}</p>
                    <button onClick={deleterecord}>delete</button>
                    
                </div>
            ))}
        </div>
        {/* <div>
            <p>AverageSugar:{avgsugar}</p>
            <button onClick={AverageSugar}>Average</button>
        </div>
         */}
        
        
      </>
    )
  }
  
  export default Dailydata