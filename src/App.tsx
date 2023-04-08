import './App.css'
import NavBar from "./component/navbar/NavBar";
import UserMenu from "./component/usermenu/UserMenu";
import Content from "./component/content/Content";
import GlobalStyle from "./globalstyles/GlobalStyle";

function App() {

    return (
        <div className={"app-container"}>
            <GlobalStyle></GlobalStyle>
            <UserMenu></UserMenu>
            <Content></Content>
            <NavBar></NavBar>
        </div>
    )
}

export default App
