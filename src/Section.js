import React, {useState} from 'react'
import { info } from './NewData'
import './App.css'

const Section = () => {
let [details, setDetails] = useState(info)

function clear (id){
    let New = details.filter((detail)=>detail.id !== id)
    setDetails(New)
}

function remove (){
    setDetails([])
}
    
    function reset() {
        window.location.reload();
}

  return (
    <div className="sectionjs">
      <div>
        {details.map((detail) => {
          const { title, body, id, author, image } = detail;

          return (
            <div className="move" key={id}>
              <h2>Title : {title}</h2>
              <h2>Description : {body}</h2>
              <h2>Written by : {author}</h2>
              <img src={image} alt="" srcset="" />

              <div>
                <button
                  className="delBtn"
                  onClick={() => clear(detail.id)}
                  style={{ backgroundColor: "blue", color: "white" }}
                >
                  delete
                </button>
              </div>
            </div>
          );
        })}

        <div className="btn">
          <button onClick={remove} className="btn_Clear">
            Clear All
          </button>
          <button onClick={reset} className="btn_Reset">
            Refresh
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section