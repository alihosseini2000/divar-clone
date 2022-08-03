import AsidePage from "./aside"
import MainPage from "./mainpage"
import NAvbar from "./navbar"


const HomePage = () => {
    return(
        <>
            <NAvbar/>
            <div className="mx-4 mt-4 d-flex flex-row-reverse">
                <AsidePage/>
                <MainPage/>
            </div>
        </>
    )
}

export default HomePage