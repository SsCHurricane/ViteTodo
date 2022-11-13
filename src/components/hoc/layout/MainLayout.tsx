import { FC, ReactNode } from 'react';
import Plus from '../../../assets/img/svg/Plus';
import useToDoStore from '../../../data/store/zustand/TodoList';
import Header from '../../Header/Header';
import styles from './mainLayout.module.scss';

interface IMainLayout {
	children: ReactNode;
}

const MainLayout: FC<IMainLayout> = ({ children }): JSX.Element => {
	const [createItem] = useToDoStore((store) => [store.createItem]);

	return (
		<div className={styles.mainLayout}>
			<Header />

			<div className='mx-auto mt-10 flex'>
				<button
					onClick={() => createItem({})}
					className='h-14 w-14 cursor-pointer text-primary duration-200 ease-in-out hover:text-primary-dark'>
					<Plus />
				</button>
			</div>

			<div className={styles.container}>{children}</div>
		</div>
	);
};

export default MainLayout;
