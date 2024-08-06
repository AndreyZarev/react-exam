import './App.css'
import { Route, Routes } from "react-router-dom"
import { useParams } from 'react-router-dom';

import "./components/css/bootstrap.css";
import "./components/css/responsive.css";

import Header from "./components/header/Header"
import Home from './components/main/home/Home'
import SectionUs from "./components/main/section-us/Section-us";
import SectionHealty from "./components/main/section-healty/SectionHealty";
import SectionTrainer from "./components/main/section-trainer/SectionTrainer";
import SectionFooter from "./components/zfooter/Section-footer";
import SectionRegister from './components/main/sections-auth/Section-register';
import TrainerDetails from './components/main/section-trainer/trainer-details/TrainerDetails';
import SectionLogin from './components/main/sections-auth/Section-login';
import CreateOfferForm from './components/main/create-offer/CreateOfferForm';

import { AuthContextProvider } from './contexts/Auth-context';
import Logout from './components/main/sections-auth/Section-logout';
import Edit from './components/main/edit/Edit';


function App() {







  return (
    <AuthContextProvider>

      <>
        <div>

          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainers" element={< SectionTrainer />} />
            <Route path="/trainers/:trainerid" element={< TrainerDetails />} />
            <Route path="/why-us" element={<SectionUs />} />
            <Route path="/why-us/edit/:postid" element={<Edit />} />

            <Route path="/healty" element={<SectionHealty />} />
            <Route path="/register" element={< SectionRegister />} />
            <Route path="/login" element={< SectionLogin />} />
            <Route path="/create-offer" element={< CreateOfferForm />} />
            <Route path="/logout" element={< Logout />} />
          </Routes>
          <SectionFooter />

        </div>
      </>
    </AuthContextProvider>

  )
}

export default App
