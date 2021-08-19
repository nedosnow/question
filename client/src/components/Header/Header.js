import "./Header.css";
import  {useUserContext} from "../../context/userContext";

export default function Header() {
  const {userName, setUserName} = useUserContext('')
  console.log('eto !!!!!!', userName)

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand" href="#">
          Navbar
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link active" aria-current="page" href="#">
                Home
              </span>
            </li>

            {userName ? 

              <>
                <h3>привет, {userName}</h3>

                <li className="nav-item">
                  <span className="nav-link" href="#">
                    Выйти
                  </span>
                </li>
              </>
             : 
              <>
                <li className="nav-item">
                  <span className="nav-link" href="#">
                    Войти
                  </span>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/auth/signup">
                    Зарегистрироваться
                  </a>
                </li>
              </>
            }

            <li className="nav-item">
              <span
                className="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
