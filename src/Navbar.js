import React from 'react'
import { useState } from 'react';
import './index.css';

function Navbar() {
    const [title, setTitle] = useState("");
    const [info,setInfo] = useState("");
    const [all,setAll] = useState([]);
    const HandleAdd = () =>{
        let new_all = [...all,{title,info}];
        setAll(new_all);
        setInfo("");
        setTitle("");
    }
    const DeleteTask = (i) =>{
        console.log("To be deleted....");
        let new_all = [];
        for(let j = 0; j < all.length; j++)
        {
            if(j != i)
                new_all.push(all[j]);
        }
        setAll(new_all);
    }
    let renderTasks = "No tasks available";
    if(all.length > 0){
    renderTasks = all.map((t,i) =>{
        return (
            <div className='info'>
                <div className="desc">
                    <p>{t.title}</p>
                    <p>{t.info}</p>
                </div>
                <div className="btns">
                    <button className='btn' onClick={() => {
                        setTitle(t.title);
                        setInfo(t.info);
                        DeleteTask(i);
                    }}>Edit</button>
                    <button className='btn' onClick={() => DeleteTask(i)}>Delete</button>
                </div>
            </div>
        );
    })
}
    return (
        <>
    <div className="bar">
        <div className="heading">
            My-To-Do-List
        </div>
        <div className="links">
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Tasks</a></li>
            </ul>
        </div>
    </div>
    <div className="Input">
        <input className='' type="text" placeholder='Enter your Task' value={title} onChange={(e) =>{
            setTitle(e.target.value);
        }}/>
        <input className='' type="info" placeholder='Description about your task' value={info} onChange={(e) =>{
            setInfo(e.target.value);
        }}/>
        <button className='btn' onClick={() =>{HandleAdd()}}>Add</button>
    </div>
    <div className='line'>Your Tasks</div>
    <div className="Tasks">
        {renderTasks}
    </div>
    </>
  )
}

export default Navbar;