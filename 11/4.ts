// Readonly<T> use to convert a type to readonly
// objects created will not be modified

interface Todo2 {
    title: string;
}

const todo: Readonly<Todo2> = {
    title: 'Delete inactive users',
};

//todo.title = 'Hello'; // Error: cannot reassign a readonly property

