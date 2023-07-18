import Navbar from '../components/Navbar/Navbar';
import Formcontainer from '../components/Form/Formcontainer';
// import './App.css'
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_REACT_URL;
const api = import.meta.env.VITE_REACT_API;

const supabase = createClient(url, api);
const tableName = 'details';
function App() {

  return (
    <>
      <Navbar></Navbar>
      <Formcontainer 
      supabase={supabase} 
      tableName={tableName}>
      </Formcontainer>
    </>
  );
}

export default App
