import React, { useState } from 'react';


export const ToDoList = () =>{

    const [inputValue, setInputValue] = useState("");
    const [taskList, setTaskList] = useState([
        {
            description: "Cepillarse los dientes",
            status: true
        },
        {
            description: "Comer",
            status: true
        },
        {
            description: "LLorar leyendo la documentacion",
            status: true
        },
    ]);


    const handleAddTask = (event) =>{
        setInputValue(event.target.value)
        if(event.key == "Enter")
        {
            setTaskList([...taskList,{
                description: inputValue,
                status: false
            }])

        }
    }

    const deleteTask = (positionList) =>{
        setTaskList(
            taskList.filter(taskList, taskIndex => taskIndex != positionList)
        );
    }

    return(

            <>
                <div className="input-group mb-3">
                <input type="text" onKeyUp={handleAddTask} />
                </div>
                <ul className="list-group">
                    {
                        taskList.map((element, index) => {
                            return(
                                <li key={index} className="list-group-item">{element.description}{" "}
                                    <button type="button" onClick={() => { deleteTask(index) }} className="btn btn-danger">X</button>
                                </li>

                            )
                        })
                    }
                </ul>
            
            </>

    )
}