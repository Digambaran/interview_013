import React from "react";
import "wired-elements";

type ListItemProps = {
	completed: boolean;
	title: string;
	id: number;
};

const ListItem = (props: ListItemProps) => {
	const { completed, title, id } = props;
	return (
		<div className="listItem-container">
			<wired-card>{title}</wired-card>
			<wired-button elevation="2" onClick={() => removeTask(id)}>
				X
			</wired-button>
		</div>
	);
};

export default ListItem;
