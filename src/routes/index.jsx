import { BrowserRouter, Routes, Route} from "react-router-dom";

import PublicScreen from "../components/PublicScreen";
import SecureScreen from "../components/SecureScren";

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