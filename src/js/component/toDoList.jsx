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
            taskList.filter((taskList, taskIndex) => taskIndex != positionList)
        );
    }

    return(

            <>
                <div className='container'>

                    <h1 className='text-center'>ToDos</h1>
                    <div className="input-group mb-3">
                    <input type="text" onKeyUp={handleAddTask} className="form-control" placeholder="What needs to be done?" aria-label="Username" aria-describedby="basic-addon1"/>
                    </div>
                    <ul className="list-group">
                        {
                            taskList.length == 0 && <li className='list-group-item'>No hay tareas, añadir tareas</li>
                        }
                        { 
                           taskList.length != 0 && taskList.map((element, index) => {
                                return(
                                    <li key={index} className="list-group-item d-flex justify-content-between">{element.description}{" "}
                                        <button id='delete-button' type="button" onClick={ () => deleteTask(index) } className="btn"><span className='delete-active'></span></button>
                                    </li>

                                )
                            })
                        }
                    </ul>
                </div>
            
            </>

    )
}