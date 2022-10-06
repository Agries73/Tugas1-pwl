import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul style={{display:"flex",gap:35,fontSize:18,padding:20,backgroundColor:"lightblue"}}>
          <ol>
            <Link to="/">Daftar Belanja</Link>
          </ol>
          <ol>
            <Link to="/toko">Toko</Link>
          </ol>
          <p style={{marginLeft:600,fontSize:20,marginBottom:20}}>Rencana Belanja RIAN</p>
        </ul>
      </nav>

      <Outlet />
    </div>
  )
};

export default Layout;
