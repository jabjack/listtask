
import React from "react"
import { Todo } from "../models/models";
import SingleTodo from "./SingleTodo";
import "./style.css"

import { Droppable } from 'react-beautiful-dnd'


interface Props {

    todos: Array<Todo>;
    setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    setCompletedTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
    CompletedTodos: Array<Todo>;

}

const TodoList: React.FC<Props> = ({
    todos,
     setTodos, 
     CompletedTodos, 
     setCompletedTodos
    }) => {

    return(

        <div className="container">
            
            <Droppable droppableId = "TodosList">
                {

                    (provided, snapshot) =>  (

                        
                         <div className={`todos ${snapshot.isDraggingOver ? "dragactive": ""}`}
                          ref={provided.innerRef}
                           { ...provided.droppableProps }>

                        <span className="todos_heading">

                               Active Task

                        </span>
                             {

                                 todos?.map((todo, index) => (

                                <SingleTodo 
                                    index = { index }
                                  todo={todo} 
                                  todos={todos} 
                                   key={todo.id} 
                                    setTodos={setTodos} 
                                   />

                                  ))

                                  }
                                  {provided.placeholder}
                        </div>

                    )
                }

            </Droppable>

            <Droppable droppableId="TodosRemove">

                {
                    (provided, snapshot) => (

                        <div className= {` todos   ${ snapshot.isDraggingOver ? "dragcomplete " : "remove"}` }
                        ref={provided.innerRef}
                        { ...provided.droppableProps }

                        >

                    <span className="todos_heading"> Completed Tasks </span>
                    {
                          CompletedTodos?.map((todo, index) => (

                            <SingleTodo
                               index = { index} 
                               todo={todo} 
                               key={todo.id} 
                               todos={CompletedTodos} 
                               setTodos={setCompletedTodos} 
                            />
                    ))}
                    {provided.placeholder}
                    </div>

                    )

                }

                   
            </Droppable>
            
       </div>
    );
 
}


export default TodoList