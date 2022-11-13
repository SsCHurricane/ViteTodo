import { FC } from 'react';
import Check from '../../assets/img/svg/Check';
import { IData } from '../../data/models/todo.model';
import useToDoStore from '../../data/store/zustand/TodoList';

import styles from './checkbox.module.scss';

interface CheckBoxProps {
	data: IData;
}

const CheckBox: FC<CheckBoxProps> = ({ data }) => {
	const [updateItem] = useToDoStore((store) => [store.updateItem]);

	return (
		<div className='mr-3.5 h-4 w-4 rounded-full'>
			<input
				type='checkbox'
				id={data.listId}
				name={data.listId}
				value='yes'
				checked={data.isComplete}
				onChange={() => {
					updateItem(Object.assign(data, { isComplete: !data.isComplete }));
				}}
				className='absolute h-6 w-6 opacity-0'
			/>
			<div className={styles.wrapper}>
				<Check />
			</div>
			<label htmlFor={data.listId} className='select-none'></label>
		</div>
	);
};

export default CheckBox;
