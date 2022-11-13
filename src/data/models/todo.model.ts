interface ICore {
	id: string;
	title: string;
	createdAt: number;
}

export interface ITodoList extends ICore {
	isCompleted: boolean;
}

export interface IToDoCard extends ICore {
	list: ITodoList[];
}

export interface IData {
	id: string;
	title: string;
	listId?: string;
	isComplete?: boolean;
}

export interface ITodoStore {
	cards: IToDoCard[];
	createItem: (data: Partial<IData>) => void;
	updateItem: (data: IData) => void;
	deleteItem: (data: IData) => void;
}
