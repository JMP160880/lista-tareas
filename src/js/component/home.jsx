import React, {useState} from "react";
//create your first component
const Home = () => {
	const [input, setInput] = useState("");
	const [array, setArray] = useState([]);

	function addTask (e){
		if(e.keyCode === 13){
			setArray(array.concat(input));
			setInput("")
		}
		
		
	}
	function deleteTask(index){
		let borrar = array[index]
		setArray(array.filter((item) => item!=borrar))
	}
	
	return (
		<div className="container">
			<h1>LISTA DE TAREAS PENDIENTES</h1>
			<ul>
				<li>
					<input onChange={(e)=>setInput(e.target.value)} value={input}
					 placeholder="AÑADIR TAREA A REALIZAR" 
					 onKeyDown={addTask}></input>
				</li>
				{array.map((item,index) => (
					<li  key={index}>
						{item} <button onClick={()=>deleteTask(index)}>x</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;