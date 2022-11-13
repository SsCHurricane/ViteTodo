import { FC, ReactNode, useState } from 'react';
import { IData } from '../data/models/todo.model';
import useToDoStore from '../data/store/zustand/TodoList';
import TodoControls from './TodoControls/TodoControls';

interface TodoInputFieldProps {
	children: ReactNode;
	isInFocus?: boolean;
	isTextCentered?: boolean;
	data: IData;
}

const TodoInputField: FC<TodoInputFieldProps> = ({
	children,
	data,
	isInFocus = false,
	isTextCentered = false,
}) => {
	const [isUpdating, setIsUpdating] = useState<boolean>(isInFocus);
	const [text, setText] = useState<string>(data.title);
	const [updateItem] = useToDoStore((store) => [store.updateItem]);

	return (
		<div
			className={`flex w-full justify-end  ${!isTextCentered && 'space-x-8'}`}>
			{!isUpdating && (
				<span className={`${!isTextCentered ? 'w-full' : 'mx-auto'}`}>
					{children}
				</span>
			)}

			{isUpdating && (
				<input
					type='text'
					className={` border-b-2 border-thirdly bg-transparent ${
						isTextCentered ? 'mx-auto text-center' : ' w-full'
					} text-secondary focus:outline-none`}
					autoFocus={isUpdating}
					value={text}
					onChange={(e) => setText(e.target.value)}
					onKeyDown={(e) => {
						e.key === 'Enter' &&
							updateItem(Object.assign(data, { title: text }));
						e.key === 'Enter' && setIsUpdating(false);
					}}
				/>
			)}

			<span className={`${isTextCentered && 'ml-[-56px]'}`}>
				<TodoControls
					setIsUpdating={setIsUpdating}
					isUpdating={isUpdating}
					setText={setText}
					data={Object.assign(data, { title: text })}
				/>
			</span>
		</div>
	);
};

export default TodoInputField;
