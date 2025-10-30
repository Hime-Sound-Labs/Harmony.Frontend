// This Source Code Form is subject to the terms of the Mozilla Public
// License, v. 2.0. If a copy of the MPL was not distributed with this
// file, You can obtain one at https://mozilla.org/MPL/2.0/.
//
// This Source Code Form is "Incompatible With Secondary Licenses", as
// defined by the Mozilla Public License, v. 2.0.

import './App.css'
import {Route, Routes} from "react-router";
import Home from "./pages/Home.jsx";
import Harmony from "./pages/harmony/Harmony.jsx";
import Tonundrum from "./pages/tonundrum/Tonundrum.jsx";

function App() {
  return (
    <>
      <Routes basename={import.meta.env.BASE_URL}>
        <Route path={`${import.meta.env.BASE_URL}`} element={<Home />}></Route>
        <Route path={`${import.meta.env.BASE_URL}/harmony`} element={<Harmony />}></Route>
        <Route path={`${import.meta.env.BASE_URL}/tonundrum`} element={<Tonundrum />}></Route>
      </Routes>
    </>
  )
}

export default App
