import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"

const AdminLayout = (props) => {
  return (
    <div>
        <Header />
        <main>
           <div className="d-flex">
           <div className="col-lg-3">
            <Sidebar />
           </div>
           <div className="col-lg-9">
            {props.children}
           </div>
           </div>

        </main>
    </div>
  )
}
export default AdminLayout