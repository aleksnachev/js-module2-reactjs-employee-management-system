import { useState } from "react"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Pagination from "./components/Pagination.jsx"
import Search from "./components/Seacrh.jsx"
import UserList from "./components/UserList.jsx"
import CreateUserModal from "./components/CreateUseModal.jsx"

function App() {
    const [showCreateUser, setShowCreateUser] = useState(false)

    const addUserClickHandler = () =>{
        setShowCreateUser(true)
    }

    const closeUserModalHandler = () => {
        setShowCreateUser(false)
    }

    const addUserSubmitHandler = (event) =>{
        event.preventDefault()

        const formData = new FormData(event.target)
        const userData = Object.fromEntries(formData)

        fetch('http://localhost:3030/jsonstore/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json())
            .then(data => {console.log(res)})
    }
    return (
        <div>
            <Header />
            
            <main className="main">
                <section className="card users-container">
                    <Search/>

                    <UserList/>

                    <button className="btn-add btn" onClick = {addUserClickHandler}>Add new user</button>

                    <Pagination/>
                </section>

                {showCreateUser && <CreateUserModal onClose={closeUserModalHandler} onSubmit={addUserSubmitHandler}/>}
            </main>
            <Footer />
        </div>
    )
}

export default App
