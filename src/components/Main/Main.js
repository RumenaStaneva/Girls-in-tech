import MainLogged from './MainLogged'
import MainNotLogged from './MainNotLogged'

const Main = ({ isAuthenticated }) => {
    return (
        <>{
            isAuthenticated
                ? <MainLogged />
                : <MainNotLogged />}
        </>)
}

export default Main;