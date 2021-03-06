import classes from './Chat.module.css'
import MainChatArea from './MainChatArea/MainChatArea'
import {ChatStats} from '../../Components'
import {useLocation} from 'react-router-dom'
import { useEffect, useState } from 'react'
import {useMessage} from '../../Store/MessageContext'
import {useConclave} from '../../Store/ConclaveContext'

const Chat=()=>{
    const {search}=useLocation()
    const {conclaves,userCreatedConclaves,bookmarkedConclaves}=useConclave()
    const {joinConclave,leaveConclave}=useMessage()          

    let conclave=conclaves?.filter(({_id})=>_id.toString()===search.substring(1))[0]
    conclave=conclave ? conclave: userCreatedConclaves?.filter(({_id})=>_id.toString()===search.substring(1))[0] 
    conclave=conclave ? conclave: bookmarkedConclaves?.filter(({_id})=>_id.toString()===search.substring(1))[0] 


    useEffect(()=>{
        if(conclave)
            search && joinConclave(conclave)
    },[search])

    useEffect(()=>{
        return ()=>leaveConclave()
    },[])

    return(
            <div className={classes["chat-section"]}>
                <div className={classes["main-chat-area"]}>
                    <MainChatArea active={conclave?.active}/>
                </div>
                <div className={classes["chat-stats"]}>
                    <ChatStats/>
                </div>
            </div>
    )
}

export default Chat;