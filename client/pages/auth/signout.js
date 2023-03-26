import { useEffect } from "react";
import Router from 'next/router'
import useRequest from '../../hooks/use-request'
import React from 'react'

const Signout = (props) => {
    const { doRequest } = useRequest({
        url: '/api/users/signout',
        method: 'post',
        body: {},
        onSuccess: ()=> Router.push('/')
    })

    useEffect(() => {
        doRequest()
    }, [])
    
    return (
        <div>Signing you out ...</div>
    )
}

export default Signout