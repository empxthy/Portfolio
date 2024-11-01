import NavBar from "./Navbar";

function Main() {
    return(
        <header className="relative">
            <img className="w-full h-auto" src="https://i.imgur.com/6sJe8WJ.png" alt="mainblock bg" />
            <NavBar />
            <div className="fixed top-52 w-full py-4 px-32">
                <h1 className="text-3xl text-white font-bold mb-2">Howdy, it's Alex Mamedov<span className="emoji">👋</span>🥥</h1>
            </div>
        </header>
    )
}

export default Main;