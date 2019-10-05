//Pick<T,K> used to pick properties (K) from T to construct new Type
interface Todo3 {
    title: string;
    description: string;
    completed: boolean;
}

// pick 'title' and 'completed' from type 'Todo3' to create a new type
type TodoPreview = Pick<Todo3, 'title' | 'completed'>;

const todo3: TodoPreview = {
    title: 'Clean room',
    completed: false,
};

console.log(todo3);
