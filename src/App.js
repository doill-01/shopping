import {Routes,Route} from "react-router-dom"
import './App.css';
import Login from "./page/Login";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react"
import PrivateRoute from "./Route/PrivateRoute";

//1.전체상품페이지,로그인,상품상세페이지
//1-1 navbar 만들기 
//2.전체 상품페이지에서는 전체 상품을 볼수 있다
//3. 로그인 버튼을 누르면 로그인 페이지가 나온다
//4.상품디테일을 눌렀으나 로그인이 안되어있을경우에는 로그인페이지가 먼저 나온다.
//5.로그아웃 버튼을 클릭하면 로그아웃이 된다.
//6.로그아웃이 되면 상품디테일 페이지를 볼수 없다. 다시 로그인 페이지가 보인다.
//7.로그인을 하면 로그아웃이보이고 로그아웃을하면 로그인이 보인다.
//8.상품을 검색할수 있다.
function App() {
	const[authenticate,setAuthenticate]=useState(false)

	useEffect(()=>{
		console.log("aaaa",authenticate)
	},[authenticate])

  return (
    <div>
		<Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
<Routes>
	<Route path="/" element={<ProductAll/>}/>
	<Route path="/login" element={<Login setAuthenticate={setAuthenticate}/>}/>
	<Route path="/product/:id" element={<PrivateRoute authenticate={authenticate}/>}/>
</Routes>
    </div>
  );
}

export default App;
