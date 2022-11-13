import { FC } from 'react';
import Basket from '../../assets/img/svg/Basket';
import Pen from '../../assets/img/svg/Pen';
import { IData } from '../../data/models/todo.model';
import useToDoStore from '../../data/store/zustand/TodoList';

interface TodoCardProps {
	data: IData;
	isUpdating: boolean;
	setIsUpdating: (update: boolean) => void;
	setText: (text: string) => void;
}

const TodoControls: FC<TodoCardProps> = ({
	data,
	isUpdating,
	setText,
	setIsUpdating,
}) => {
	const [updateItem, deleteItem] = useToDoStore((store) => [
		store.updateItem,
		store.deleteItem,
	]);

	return (
		<div className='flex min-w-[5rem] space-x-2'>
			<button
				onClick={() => {
					setIsUpdating(!isUpdating);
					setText(data.title);
					updateItem(data);
				}}
				disabled={data.isComplete}
				className={`h-6 w-6  ${
					data.isComplete ? 'text-thirdly-dark' : 'text-thirdly'
				} duration-200 ease-in-out hover:text-thirdly-dark`}>
				<Pen />
			</button>
			<button
				onClick={() => deleteItem(data)}
				className='h-6 w-6 text-fourthly-light duration-200 ease-in-out hover:text-fourthly'>
				<Basket />
			</button>
		</div>
	);
};

export default TodoControls;
