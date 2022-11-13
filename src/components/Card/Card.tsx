import { FC, useState } from 'react';
import { ITodoList } from '../../data/models/todo.model';
import useToDoStore from '../../data/store/zustand/TodoList';
import TodoInputField from '../TodoInputField';
import TodoItem from '../TodoItem/TodoItem';

interface CardProps {
	id: string;
	title: string;
	list: ITodoList[];
}

const Card: FC<CardProps> = ({ id, title, list }) => {
	const [createItem] = useToDoStore((store) => [store.createItem]);
	const [todoText, setTodoText] = useState<string>('');

	return (
		<div className='flex min-h-[15rem] flex-col space-y-5 rounded-2xl  bg-bg p-5 font-montserrat text-secondary shadow-xl'>
			<div className='flex w-full justify-end text-2xl'>
				<TodoInputField data={{ id, title }} isTextCentered={true}>
					<h2>{title}</h2>
				</TodoInputField>
			</div>

			<form
				onSubmit={(e) => {
					e.preventDefault();
					createItem({ id, title: todoText });
					setTodoText('');
				}}
				className='flex w-full space-x-8'>
				<input
					type='text'
					onChange={(e) => setTodoText(e.target.value)}
					className='w-full border-b-2 border-thirdly bg-transparent text-secondary focus:outline-none'
					value={todoText}
				/>
				<button
					type='submit'
					className={`${
						todoText ? 'text-thirdly' : 'text-thirdly-dark'
					} duration-200 ease-in-out hover:text-thirdly-dark`}
					disabled={!todoText}>
					добавить
				</button>
			</form>

			<div className='flex flex-col space-y-4'>
				{list.map((el) => {
					return <TodoItem key={el.id} todo={el} cardId={id} />;
				})}
			</div>
		</div>
	);
};

export default Card;
