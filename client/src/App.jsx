import { useEffect, useState } from "react"
import Footer from "./components/Footer.jsx"
import Header from "./components/Header.jsx"
import Pagination from "./components/Pagination.jsx"
import Search from "./components/Seacrh.jsx"
import UserList from "./components/UserList.jsx"
import UserSaveModal from "./components/UserSaveModal.jsx"

function App() {
    const [showCreateUser, setShowCreateUser] = useState(false)
    const [users,setUsers] = useState([])
    const [refresh,setRefresh] = useState(true)

    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/users')
            .then(res => res.json())
            .then(result => {
                setUsers(Object.values(result));
            })
            .catch((err) => alert(err.message))
    }, [refresh])

    const forceUserRefresh = () => {
        setRefresh(state => !state)
    }

    const addUserClickHandler = () =>{
        setShowCreateUser(true)
    }

    const closeUserModalHandler = () => {
        setShowCreateUser(false)
    }

    const sortUsersHandler = () =>{
        setUsers(state => [...state].sort())
    }

    const addUserSubmitHandler = (event) =>{
        event.preventDefault()

        const formData = new FormData(event.target)
        const {country,city,street,streetNumber, ...userData} = Object.fromEntries(formData)
        userData.address ={
            country,
            city,
            street,
            streetNumber
        }

        userData.createdAt = new Date().toISOString()
        userData.updatedAt = new Date().toISOString()

        fetch('http://localhost:3030/jsonstore/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(userData)
        }) 
            .then(() => {
                closeUserModalHandler()
                forceUserRefresh()
            })
            .catch((err) => alert(err.message))
            
    }
    return (
        <div>
            <Header />
            
            <main className="main">
                <section className="card users-container">
                    <Search/>

                    <UserList users={users} forceUserRefresh = {forceUserRefresh} onSort= {sortUsersHandler}/>

                    <button className="btn-add btn" onClick = {addUserClickHandler}>Add new user</button>

                    <Pagination/>
                </section>

                {showCreateUser && 
                    <UserSaveModal
                        onClose={closeUserModalHandler}
                        onSubmit={addUserSubmitHandler}
                    />}
            </main>
            <Footer />
        </div>
    )
}

export default App
