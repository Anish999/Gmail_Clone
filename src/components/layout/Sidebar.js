/*--Import Packages--*/
import React from 'react'
import styled from 'styled-components'

/*--Import Components--*/
import Compose from '../buttons/Compose'
import {sidebarButtonItems} from '../data/SidebarButtonItems'

const Sidebar = () => {
    return (
        <Wrapper>
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
            <MeetWrapper>

            </MeetWrapper>
            <HangoutsWrapper>

            </HangoutsWrapper>
            <BottomIconsWrapper>

            </BottomIconsWrapper>
        </Wrapper>
    )
}

export default Sidebar

const Wrapper = styled.div`
    border-right: 1px solid lightGray;
    height:100vh;
    
`
    const ComposeWrapper = styled.div`
        display: grid;
        place-items: start;
        padding: 10px 20px;
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

    const MeetWrapper = styled.div`

    `

    const HangoutsWrapper = styled.div`

    `

    const BottomIconsWrapper = styled.div`

    `
