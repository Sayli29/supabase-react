import Navbar from '../components/Navbar/Navbar';
import InsertDialog from '../components/InsertDialog/InsertDialog';
import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_REACT_URL;
const api = import.meta.env.VITE_REACT_API;

const supabase = createClient(url, api);
const tableName = 'details';
function App() {

  return (
    <>
      <Navbar></Navbar>
      <InsertDialog 
      supabase={supabase} 
      tableName={tableName}>
      </InsertDialog>
    </>
  );
}

export default App
