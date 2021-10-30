import {HeaderCss} from "./header_css";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {

    return(
        <HeaderCss>
            <div className="logo">로고</div>
            <button>버튼</button>
            {Now ? <input type="text" /> : <input type="text" placeholder={`${Now}`}/>}
        </HeaderCss>
    )
}

export default Header