// Fetch all books
export const fetchBooksAPI = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch books");
  }
  const data = await response.json();
  return data;
};

// Add a book
export const addBookAPI = async (book) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(book),
  });
  if (!response.ok) {
    throw new Error("Failed to add book");
  }
  const data = await response.json();
  return data;
};

// Edit a book
export const editBookAPI = async (id, book) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(book),
    }
  );
  if (!response.ok) {
    throw new Error("Failed to edit book");
  }
  const data = await response.json();
  return data;
};

// Delete a book
export const deleteBookAPI = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      method: "DELETE",
    }
  );
  if (!response.ok) {
    throw new Error("Failed to delete book");
  }
};
