import Header from '../../components/header/Header';

const Layout = (props) => (
    <>
        <Header isAuthenticated={props.isAuthenticated} />
        <div className="container">
            {props.children}
        </div>
    </>
);

export default Layout;