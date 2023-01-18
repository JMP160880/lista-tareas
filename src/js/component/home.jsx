import React,{useState} from "react";

const Home = () => {

	const [input,setImput] = ("")
	const [array,setArray] = ([])

	const addTask = (e) =>{
		setArray(array.concat(input))
	}

	const deleteTask = (index) =>{
		let borrar = array[index]
		setArray(array.filter((item) => item != borrar))
		console.log(index);
	}
	console.log(array);

	return (
		<div className="container">
			<h1>Mis tareas</h1>
			<ul>
				<li>
					<input type="text" 
					onChange={(e)=>setImput(e.target.value)} 
					value= {input} 
					placeholder="Introducir tarea"></input>
					<button onClick={addTask}>+</button>
				</li>
				{array.map((item,index) =>{
					<li key={index}>
						{item} <button onClick={()=> deleteTask(index)}>X</button>
				</li>
				})}
			</ul>
		</div>
	
	);
};

export default Home;
