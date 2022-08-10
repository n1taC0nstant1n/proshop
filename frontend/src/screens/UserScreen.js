import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import axios from 'axios';


const UserScreen = ({ match }) => {

    const [user, setUser] = useState({})
    const { id } = useParams();


    useEffect(() => {

        const fetchUser = async () => {
            const { data } = await axios.get(`/api/users/${id}`)
            
            setUser(data);
    
        }
        fetchUser()
    }, [id])
    return (
        <>
            <Link className="btn btn-light my-3" to='/'>
                Go Back
            </Link>
            <Row>
                <h2>Name {user.name}</h2>
            </Row>
        </>
    
  )
}

export default UserScreen
