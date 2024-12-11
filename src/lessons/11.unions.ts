let id: string | number | boolean = 7;
id = '7';
id = true;

type Todo = {
  name: string;
  status: string;
};

// the correct one
type Todo = {
  name: string;
  status: 'Complete' | 'Incomplete'; // this is called literal union
};

const todo1: Todo = {
  name: 'Buy milk',
  status: 'Complete',
};

const todo2: Todo = {
  name: 'Buy bread',
  status: 'Incomplete',
};

const todo3: Todo = {
  name: 'Buy cheese',
  status: 'Complet', // We type it wrong but doesn't get any error
};

// we can even go further and create a union of objects
type TodoComplete = {
  status: 'Complete';
  completedAt: Date;
};

type TodoIncomplete = {
  status: 'Incomplete';
  reason: string;
};

type TodoStatus = TodoComplete | TodoIncomplete;

const todoStatus1: TodoStatus = {
  status: 'Complete',
  completedAt: new Date(),
};

const todoStatus2: TodoStatus = {
  status: 'Incomplete',
  reason: 'I forgot to buy it',
};

// quick info: interface can't do union
// this is why type is more flexible than interface
