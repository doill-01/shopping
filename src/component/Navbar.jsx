import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "sale",
    "지속가능성",
  ];
  const navigate = useNavigate()
  const gotoLogin=()=> {
	navigate("/login")
  }
  const gotohome=()=> {
	navigate("/")
  }

  const search = (event) => {
		if(event.key === "Enter"){
			//입력한 검색어를 읽어와서
			let keyword = event.target.value //input 안 값 읽을때
			// console.log("dd",keyword)
			//url을 바꿔준다
			navigate(`/?q=${keyword}`)
		}
	
  }
  

  return (
    <div className="1">

      <div>
	  {authenticate ? (
          <div onClick={() => setAuthenticate(false)} className="login-button">
            <FontAwesomeIcon icon={faUser} />
            <span>로그아웃</span>
          </div>
        ) : (
        <div className="login-button" onClick={gotoLogin}>
          <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
          <span>login</span>
        </div>
		)
		}
		
		
		  
      </div>
      <div className="nav-section" style={{cursor: "pointer"}}>
        <img
          width={100}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNPZ41-IYs_KhNEfd9nX22vyGM8MZKhmJNAEikvZPV&s" 
		  onClick={gotohome}></img>
      </div>
      <div className="menu-area">
			<ul className="menu-List">
          {menuList.map((menu, index) => (
            <li key={index}>{menu}</li>
          ))}
		  </ul>
       
		  <div className="search-box">
			<FontAwesomeIcon icon={faSearch}/>
			<input type="text" placeholder="제품검색" onKeyPress={(event)=>search(event)}/>
		</div>
      </div>

    </div>
  );
};

export default Navbar;
