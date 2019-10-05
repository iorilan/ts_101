//Omit<T,K> use to pick all properties ecept K
//then construct new type

interface Todo7 {
    title: string;
    description: string;
    completed: boolean;
}

type result = Omit<Todo7, 'description'|'title'>;

const todo7: result = {
    completed: false,
};

console.log(todo7);