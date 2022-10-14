import { Navigate, Route, Routes} from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import CreateUser from './components/User/CreateUser';
import Form from './Pages/Form';
import AllUsers from './Pages/AllUsers';
// import NotFound from './Pages/NotFound';

function App() {
  return (
    <Layout>
      {/* <CreateUser /> */}
      <Routes>
        <Route path='/' element={<CreateUser />} />
        <Route path='user/list' element={<AllUsers />} />
        <Route path='user/:id/edit' element={<Navigate to='/create' />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
    </Layout>
  );
};

export default App;
