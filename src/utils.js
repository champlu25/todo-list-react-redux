export const alphabedSort = (todos) => {
  const sortedTodos = [...todos].sort((a, b) =>
    a.content.localeCompare(b.content)
  );
  return sortedTodos;
};
