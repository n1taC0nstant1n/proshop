import React from 'react'
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap'

const User = ({user}) => {
  return (
    <Card className="my-3 p-3 rounded">
      {/* <Link to={`/user/${user._id}`}>
        <Card.Img src={user.image} variant="top"/>
      </Link> */}
      <Card.Body>
      <>
        <Card.Title as='div' className='text-center'>
          <Link to={`/user/${user._id}`}>
              <strong className='d-block mb-3'>
                  {user.name}
              </strong>
          </Link>    
          <p>{user.email}</p>
        </Card.Title>
      </>
      </Card.Body>
    </Card>
  )
}

export default User
