import React, {useState} from 'react'
import { info } from './NewData'

const Section = () => {
let [details, setDetails] = useState(info)

function clear (id){
    let New = details.filter((detail)=>detail.id !== id)
    setDetails(New)
}

function remove (){
    setDetails([])

}

  return (
    <div>

        {details.map((detail)=>{
            const {title,body,id,author,image} = detail

            return(
                <div className="move" key={id}> 
                    <h2>Title : {title}</h2>
                    <h2>Description : {body}</h2>
                    <h2>Written by : {author}</h2>
                    <img src={image} alt="" srcset="" />

                    <div>
                        <button className='delBtn' onClick={()=> clear(detail.id)} style={{backgroundColor: 'blue', color: 'white' }}>click</button>
                    </div>
                </div>
            )
        })}
            

       <div className="btn">
       <button onClick={remove} className="btn2" >Clear All</button>

       </div>
    </div>
  )
}

export default Section