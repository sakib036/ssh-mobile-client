
import './App.css';
import { RouterProvider } from 'react-router-dom';
import routes from './Components/Routes/Routes';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div>
      <RouterProvider router={routes}>
      <Toaster />

      </RouterProvider>
     
    </div>
  );
}

export default App;
