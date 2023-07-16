import { useState, useEffect } from 'react';
import { createClient } from "@supabase/supabase-js";
// import './App.css'

const url = import.meta.env.VITE_REACT_URL;
const api = import.meta.env.VITE_REACT_API;

const supabase = createClient(url, api);
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems();
  }, []);

  async function getItems() {
    const { data } = await supabase.from("items").select();
    setItems(data);
  }

  return (
    <>
      <h1>supabase</h1>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

    </>
  );
}

export default App
