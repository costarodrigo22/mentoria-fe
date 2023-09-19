import { Route, Routes } from 'react-router-dom';

import Home from './Pages/Home';
import NewContact from './Pages/NewContact';
import EditContact from './Pages/EditContact';

export default function Router() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/new' element={<NewContact />} />
      <Route path='/edit/:id' element={<EditContact />} />
    </Routes>
  );
}
