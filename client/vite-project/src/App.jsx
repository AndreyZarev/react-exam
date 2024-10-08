import './App.css'
import { Route, Routes } from "react-router-dom"
import { useParams } from 'react-router-dom';

import "./components/css/bootstrap.css";
import "./components/css/responsive.css";
import { AuthContextProvider } from './contexts/Auth-context';

import Header from "./components/header/Header"
import Home from './components/main/home/Home'
import SectionUs from "./components/main/section-us/SectionUs";
import SectionHealty from "./components/main/section-healty/SectionHealty";
import SectionTrainer from "./components/main/section-trainer/SectionTrainer";
import SectionFooter from "./components/zfooter/SectionFooter";
import SectionRegister from './components/main/sections-auth/section-register/SectionRegister';
import TrainerDetails from './components/main/section-trainer/trainer-details/TrainerDetails';
import SectionLogin from './components/main/sections-auth/section-login/SectionLogin';
import WrongUrl from "./components/WrongUrl.jsx";
import Logout from './components/main/sections-auth/section-logout/SectionLogout';
import Edit from './components/main/edit/Edit';
import DeletePost from './components/main/delete/Delete';
import CreatePost from './components/main/create-post/CreatePost.jsx';


function App() {







  return (
    <AuthContextProvider>

      <>


        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trainers" element={< SectionTrainer />} />
          <Route path="/trainers/:trainerid" element={< TrainerDetails />} />
          <Route path="/why-us" element={<SectionUs />} />
          <Route path="/why-us/edit/:postid" element={<Edit />} />
          <Route path="/why-us/delete/:postid" element={<DeletePost />} />

          <Route path="/healty" element={<SectionHealty />} />

          <Route path="/register" element={< SectionRegister />} />
          <Route path="/login" element={< SectionLogin />} />
          <Route path="/create-post" element={< CreatePost />} />
          <Route path="/logout" element={< Logout />} />
          <Route path="*" element={<WrongUrl />} />
        </Routes>
        <SectionFooter />


      </>
    </AuthContextProvider>

  )
}

export default App
