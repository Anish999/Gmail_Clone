/*--Import Packages--*/
import React from 'react'
import styled from 'styled-components'

/*--Import Components--*/
import Compose from '../buttons/Compose'
import {sidebarButtonItems} from '../data/SidebarButtonItems'
import {bottomIcons} from '../data/BottomIconsData'

import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Sidebar = () => {
    return (
        <Wrapper>
            <TopSectionWrapper>
                <ComposeWrapper>
                    <Compose />
                </ComposeWrapper>
                <SideButtonsWrapper>
                    {
                        sidebarButtonItems.map(item => (
                            <SidebarButtonItem>{item.icon}{item.text}</SidebarButtonItem>
                        ))
                    }
                </SideButtonsWrapper>
            </TopSectionWrapper>
            <BottomSectionWrapper>
                <SidebarSectionWrapper>
                    <Title>Meet</Title>
                    <p><VideocamIcon /> New Meeting</p>
                    <p><KeyboardIcon /> Join Meeting</p>
                </SidebarSectionWrapper>
                <SidebarSectionWrapper>
                    <Title>Hangout</Title>
                    <p><AccountCircleIcon/>Anish Manandhar</p>
                    <p></p>
                </SidebarSectionWrapper>
                <BottomIconsWrapper>
                    {
                        bottomIcons.map(icon=>(
                            <>
                                {icon}
                            </>
                        ))
                    }
                </BottomIconsWrapper>
            </BottomSectionWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    border-right: 1px solid lightGray;
    height:100vh;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
`
    const TopSectionWrapper= styled.div`

    `

        const ComposeWrapper = styled.div`
            display: grid;
            place-items: start;
            padding: 10px 20px;
        `

    const BottomSectionWrapper = styled.div`
        margin-bottom: 30px;
    `

        const SideButtonsWrapper = styled.div`

        `
            const SidebarButtonItem = styled.div`
                display: grid;
                grid-template-columns: 14% auto;
                color: grey;
                padding:5px 25px;
                border-radius: 0 100px 100px 0;
                margin-right: 8px;
                cursor: pointer;

                :hover {
                    background-color: #f5f7f7;
                }

                :focus {
                    background-color: fce8e6;
                    color:#d93025;
                }
            `

        const SidebarSectionWrapper = styled.div`
            border-top: 1px solid lightGrey;

            p {
                color: grey;
                display: grid;
                grid-template-columns: 14% auto;
                padding: 5px 25px;
                align-items:center;
            }
        `
            const Title = styled.h4`
                padding-left: 25px;
                margin-bottom: 3px;
                margin-top: 8px;
            `

        const BottomIconsWrapper = styled.div`
            display: flex;
            justify-content: center;
            color: grey;
            border-top: 1px solid lightGrey;
            margin-top: 60px;

            .MuiSvgIcon-root{
                padding: 2px;
            }
        `
