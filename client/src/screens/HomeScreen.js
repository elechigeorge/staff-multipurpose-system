import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col } from 'react-bootstrap'

import Message from '../components/Message'
import Loader from '../components/Loader'

// images import 
import Logo from '../images/head.jpeg'





const HomeScreen = ({ match }) => {
    const keyword = match.params.keyword



    const dispatch = useDispatch()



    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: "center",
                alignItems: "center",
                height: '90vh',
                padding: '0px',
                margin: '0px',
                overflowX: "hidden",
                overflowY: "hidden"
            }}>
                <img src={Logo} width="50%" height="67%" />

                <div style={{
                    position: "absolute",
                    width: '100vw',
                    height: '90vh',
                    background: 'rgba(8, 209, 62, 0.5)'
                }}></div>
            </div>


        </>
    )
}

export default HomeScreen