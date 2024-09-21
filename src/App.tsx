import React, { useState, createRef } from "react";
import "wired-elements";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ListItem from "./ListItem";

type taskItem = {
	title: string;
	id: number;
	completed: boolean;
	deleted: boolean;
};

/**
 * Add new task to list
 * @param {string} title Task title
 */
const addTask = (title: string) => {
	const newTask: taskItem = {
		id: Date.now(),
		title,
		completed: false,
		deleted: false,
	};

	setList((t) => [...t, newTask]);
};

function App() {
	const [list, setList] = useState<Array<taskItem>>([]);
	let textInput = createRef();

	return (
		<>
			<main>
				<h1>TODOs</h1>
				{list.map((task: taskItem) => (
					<ListItem
						id={task.id}
						completed={task.completed}
						title={task.title}
					/>
				))}

				<section>
					<wired-input placeholder="todo title here" ref={textInput} />
					<wired-button
						elevation="2"
						onClick={() => addTask(textInput.current.value)}
					>
						Submit
					</wired-button>
				</section>
			</main>
		</>
	);
}

export default App;
