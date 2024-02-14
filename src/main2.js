let searchInput = document.getElementById("search");
console.log(searchInput.value);

// Fungsi untuk mengambil data tugas dari JSONPlaceholder
async function getTodos() {
  try {
    const response = await fetch("http://localhost:3000/trip");
    const data = await response.json();
    return data;
  } catch (error) {
    console.log("Error:", error);
  }
}

// Fungsi pencarian tugas berdasarkan judul
async function searchTodoByTitle(query) {
  const todos = await getTodos();
  // Mengonversi query menjadi huruf kecil agar pencarian tidak bersifat case-sensitive
  const lowercaseQuery = query.toLowerCase();

  // Melakukan pencarian
  const results = todos.filter((todo) => {
    // Pencarian berdasarkan judul tugas
    return todo.title.toLowerCase().includes(lowercaseQuery);
  });

  return results;
}

// Contoh penggunaan fungsi searchTodoByTitle
const query = "jakarta";
searchTodoByTitle(query)
  .then((results) => {
    console.log("Hasil pencarian:", results);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
