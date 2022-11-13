import { FC } from 'react';
import { ITodoList } from '../../data/models/todo.model';
import CheckBox from '../CheckBox/CheckBox';
import TodoInputField from '../TodoInputField';

interface TodoItemProps {
	todo: ITodoList;
	cardId: string;
}

const TodoItem: FC<TodoItemProps> = ({ todo, cardId }) => {
	const todoData = {
		id: cardId,
		title: todo.title,
		isComplete: todo.isCompleted,
		listId: todo.id,
	};

	return (
		<div className='mt-4 flex justify-between'>
			<TodoInputField data={todoData}>
				<span className='flex space-x-2'>
					<CheckBox data={todoData} />
					<p className={`ml-6 ${todoData.isComplete && 'line-through'}`}>
						{todoData.title}
					</p>
				</span>
			</TodoInputField>
		</div>
	);
};

export default TodoItem;
