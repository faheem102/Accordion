// i have created components folder and inside created accordion component folder.
// i am doing this to create a usable component to use it in various places. 
import {useState} from "react";
import data from "./data";
export default function Accordion(){
    const [selected, setSelected] = useState(null);
    return (
        <div className="wrapper">
            <div className="accordion">
                {
                    (data && data.length > 0 ? (
                        data.map((dataitem)=>(
                            <div className="item">
                                <div className="title">
                                    <h3>(dataitem.Language)</h3>
                                    <span>+</span>

                            </div>
                            </div>
                            
                        ))
                    ) : (<div>No data found !</div>)
                    )
                }
            </div>
        </div>
    )
    
}