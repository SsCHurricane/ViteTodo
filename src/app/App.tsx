import { MainLayout } from '../components';
import Card from '../components/Card/Card';
import useToDoStore from '../data/store/zustand/TodoList';

const App = () => {
	const [{ cards }] = useToDoStore((cards) => [cards]);

	return (
		<MainLayout>
			{cards.map((card) => {
				return (
					<Card
						key={card.id}
						id={card.id}
						title={card.title}
						list={card.list}
					/>
				);
			})}
		</MainLayout>
	);
};

export default App;
