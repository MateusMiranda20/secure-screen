import { BrowserRouter, Routes, Route} from "react-router-dom";

import PublicScreen from "../components/OnePage/PublicScreen";
import SecureScreen from "../components/twoPage/SecureScren";

export default function Rotas(){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PublicScreen />} />
                <Route path="/sobre" element={<SecureScreen />} />
            </Routes>
        </BrowserRouter>
    );
}