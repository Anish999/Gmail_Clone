import React, {useState} from 'react'
import styled from 'styled-components'

import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'

import StarIcon from '@material-ui/icons/Star'
import StarBorderIcon from '@material-ui/icons/StarBorder'

 const EmailItem = ({starred, from, subject, message, received, read}) => {
    
    const [star, setStar] = useState(starred)

    const changeStar = () => {
        star ? setStar(false) : setStar(true)
    }

    return (
        <Wrapper>
            <Checkbox />
            <IconButton onClick={()=>changeStar()}>
                {
                    star ? (
                        <StarIcon htmlColor="#f7cb69" />
                    ): (
                        <StarBorderIcon />
                    )
                }
            </IconButton>
            <p className={!read && 'unread'}>{from}</p>
            <div>
                <p className={!read && 'unread'}>{subject}{' '}</p> - <span>{' '}{message}</span>
            </div>
            <p className={!read && 'unread'}>{received}</p>
        </Wrapper>
    )
}

export default EmailItem

const Wrapper = styled.div`
    padding-left: 20px;
    border-bottom: 1px solid lightGrey;
    display: grid;
    grid-template-columns: min-content min-content 120px auto min-content;
    align-items:center;
    cursor: pointer;
    padding-right: 20px;

    :hover {
        box-shadow: inset 1px 0 0 #dadce0, inset -1px 0 0 #dadce0, 0 1px 2px 0 rgba(60,64,67,.3), 0 1px 3px 1px rgba(60,64,67,.15);
    }

    div{
        display: flex;
    }

    span{
        color: darkGrey;
    }

    .unread{
        color: black;
        font-weight: bolder;
    }
`
