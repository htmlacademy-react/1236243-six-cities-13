import { Helmet } from 'react-helmet-async';

function NotFoundScreen (): JSX.Element {
  return (
    <div className="page page--gray page--login">
      <Helmet>
        <title>Page not found</title>
      </Helmet>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Page not Found</h1>
            <h2 className="login__title">Error 404</h2>
            <a className="locations__item-link" href="#">
              <span>Back to main page</span>
            </a>
          </section>
          <section className="locations locations--login locations--current">

          </section>
        </div>
      </main>
    </div>
  );
}

export default NotFoundScreen;
