import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul style={{display:"flex",gap:35,fontSize:18,padding:20,backgroundColor:"lightgreen",border: '1px solid green'}}>
          <ol><Link to="/toko">Store</Link></ol>
          <ol><Link to="/">Keranjang</Link></ol>
        </ul>
      </nav>
      <Outlet/>
    </div>
  )
};

export default Layout;