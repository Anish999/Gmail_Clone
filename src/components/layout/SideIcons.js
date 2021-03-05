import React from 'react'
import styled from 'styled-components'

import AddIcon from '@material-ui/icons/Add';

const SideIcons = () => {
    return (
        <Wrapper>
            <img src="https://cdn4.iconfinder.com/data/icons/logos-brands-in-colors/48/google-calendar-512.png" alt="calendar" />
            <img src="https://assets.materialup.com/uploads/ef2f0ee0-6f32-478c-b160-f52a308ee211/preview" alt="keep"/>
            <img src="https://play-lh.googleusercontent.com/62OzNxLonba70XxMFP3X3dsdNS9lvG2xf5TqfhYDaw9iFn5as9gVSU23ExfCLoZXkMWA" alt="tasks" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Google_Contacts_icon.svg/1200px-Google_Contacts_icon.svg.png" alt="contacts"/>
            <hr />
            <AddIcon />
        </Wrapper>
    )
}

export default SideIcons

const Wrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(6, 50px);
    place-items:center;
    border-left: 1px solid lightGrey;

    img{
        width: 100%;
        max-height:22px;
        object-fit:contain;
    }

    hr{
        color: #dadce0;
        width: 40%;
    }
`
