const nameTokens = ['Cataleya', 'Melissa', 'Luis', 'Welch', 'Walton', 'Payne'];

export function generateData(id: number) {
  return {
    id,
    first_name: nameTokens[0],
    last_name: nameTokens[4],
  };
}
