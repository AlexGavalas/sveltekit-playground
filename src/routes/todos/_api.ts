export let TASKS: Task[] = [];

export const getAll = () => TASKS;

export const add = (task: string) => {
	const newTask: Task = {
		text: task,
		uid: Date.now().toString(),
		done: false,
		created_at: new Date(),
	};

	TASKS.push(newTask);

	return newTask;
};

export const remove = (uid: string) => {
	TASKS = TASKS.filter((task) => task.uid !== uid);
};

export const update = ({
	uid,
	text,
	done,
}: {
	uid: Task['uid'];
	text?: Task['text'];
	done?: Task['done'];
}) => {
	const task = TASKS.find((task) => task.uid === uid);

	task.done = done ?? task.done;
	task.text = text ?? task.text;
};
