import Todo from './models/Todo';

module.exports = {
  Query: {
    todos: () => {
      try {
        const todo = Todo.find();
        if (!todo) {
          throw new Error('Sorry, could not find any todo');
        }
        return todo;
      } catch (error) {
        if (error) {
          console.log(error);
        }
      }
    },
    todo: (_, { id }) => Todo.findById(id),
  },
  Mutation: {
    registrateTodo: (_, { title, done }) => Todo.create({ title, done }),
    updateTodo: (_, { id, title, done }) => {
      const todo = Todo.findOneAndUpdate(
        { _id: id },
        {
          title,
          done,
        },
      );
      return todo;
    },
  },
};
