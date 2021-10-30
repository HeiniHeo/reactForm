import {HeaderCss} from "./header_css";
import { useDispatch, useSelector } from "react-redux";
import { state_change } from "../../../reducers/test";

const Header = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.test);

    const handleClick = e => {
        dispatch(state_change(!data.Now));
    }
    let {Now} = data;

    return(
        <HeaderCss>
            <div className="logo">로고</div>
            <button onClick={handleClick}>버튼</button>
            {Now ? <input type="text" placeholder={`${Now}`}/> : <input type="text" placeholder={`${Now}`}/>}
        </HeaderCss>
    )
}

export default Header