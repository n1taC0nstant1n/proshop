import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import UserList from '../components/User'
import Loader from '../components/Loader'

import Message from '../components/Message'

import { listUsers } from '../actions/userActions'
const UsersList = () => {
  const dispatch = useDispatch()

  const userList = useSelector(state => state.userList)
  const {loading, error, users } = userList
  useEffect(() => {
    dispatch(listUsers())
  }, [dispatch])
  return (
    <>
      <h1>Users</h1>
      {loading ? <Loader/>: error ? <Message variant='danger'>{error}</Message> : <Row>
        {users.map(user => (
            <Col key={user._id} sm={12} md={6} lg={4} xl={3}>
                <UserList user={user} />
            </Col>
        ))}
      </Row>}
      
    </>
  )
}

export default UsersList
