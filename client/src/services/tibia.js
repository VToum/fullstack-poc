export async function fetchWorldNames() {
  const response = await fetch('/api/tibia/worlds/names');
  if (!response.ok) {
    throw new Error('Erro ao buscar os nomes dos mundos');
  }
  const data = await response.json();
  return data.names;
}
