import { Route, Routes} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import CreateUser from './components/User/CreateUser';
import Form from './Pages/Form';
import AllUsers from './Pages/AllUsers';
// import NotFound from './Pages/NotFound';

function App() {
  return (
    <Layout>
      <CreateUser />
      <Routes>
        <Route path='/create' element={<Form />}>
        </Route>
        <Route path='/list' element={<AllUsers />}>
        </Route>
        {/* <Route path='*' element={<NotFound />}>
        </Route> */}
      </Routes>
    </Layout>
  );
};

export default App;
