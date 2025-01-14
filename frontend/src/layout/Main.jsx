
import { Outlet} from "react-router-dom";
import Header from "../components/header/header";




const Main = () => {
    
    

    return (
        <div className={`main-container } transition-all duration-1000`}>
            <Header></Header>
            <Outlet />
        </div>
    );
};

export default Main;
