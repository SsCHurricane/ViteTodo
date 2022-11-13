import create from 'zustand';
import { persist } from 'zustand/middleware';
import { generateId } from '../../../helpers/helpers';
import { IToDoCard, ITodoStore } from '../../models/todo.model';

const useToDoStore = create<ITodoStore>()(
	persist(
		(set, get) => ({
			cards: [],
			createItem: (data) => {
				const { cards } = get();
				let newCards: IToDoCard[] = [];

				if (data.id) {
					newCards = cards.map((card) => {
						if (card.id === data.id && data.title) {
							card.list = [
								{
									id: generateId(),
									title: data.title!,
									createdAt: Date.now(),
									isCompleted: false,
								},
								...card.list,
							];
						}
						return card;
					});
				}

				if (!data.id) {
					newCards = [
						{
							id: generateId(),
							createdAt: Date.now(),
							title: 'Новая Задача',
							list: [],
						},
						...cards,
					];
				}

				set({ cards: newCards });
			},
			updateItem: (data) => {
				const { cards } = get();

				const newCards = cards.map((card) => {
					if (!data.listId && card.id === data.id) card.title = data.title;

					if (data.listId && card.id === data.id) {
						card.list = card.list.map((todo) => {
							if (todo.id === data.listId) {
								todo.title = data.title;
								todo.isCompleted = data.isComplete!;
							}

							return todo;
						});
					}

					return card;
				});

				set({ cards: newCards });
			},
			deleteItem: (data) => {
				const { cards } = get();
				let newCards: IToDoCard[] = [];
				if (data.listId) {
					newCards = cards.map((card) => {
						card.id === data.id &&
							(card.list = card.list.filter((el) => el.id !== data.listId));

						return card;
					});
				}

				if (!data.listId) {
					newCards = cards.filter((card) => card.id !== data.id);
				}

				set({ cards: newCards });
			},
		}),
		{
			name: 'viteTodo-storage',
		},
	),
);

export default useToDoStore;
