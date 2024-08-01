import { useState } from 'react'
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
import CreateOfferForm from './components/main/section-trainer/create-offer/CreateOfferForm';

import { AuthContext } from './components/contexts/Auth-context';


function App() {


  const [authState, setAuthState] = useState({})

  const changeAuthState = (state) => {
    setAuthState(state)
  };

  const contextData = {
    userId: authState.userId,
    email: authState.email,
    accessToken: authState.acessToken,
    isAuthenticated: !!authState.email,
    changeAuthState
  }


  return (
    <AuthContext.Provider value={contextData}>

      <>
        <div>

          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trainers" element={< SectionTrainer />} />
            <Route path="/trainers/:trainerid" element={< TrainerDetails />} />
            <Route path="/why-us" element={<SectionUs />} />
            <Route path="/healty" element={<SectionHealty />} />
            <Route path="/register" element={< SectionRegister />} />
            <Route path="/login" element={< SectionLogin />} />
            <Route path="/create-offer" element={< CreateOfferForm />} />
            <Route path="/logout" element={< SectionTrainer />} />
          </Routes>
          <SectionFooter />

        </div>
      </>
    </AuthContext.Provider>

  )
}

export default App
