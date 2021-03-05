/*--Import Packages--*/
import React from 'react';
import styled from 'styled-components';

/*--Import Icons--*/
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SettingsIcon from '@material-ui/icons/Settings';
import AppsIcon from '@material-ui/icons/Apps';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import IconButton from '@material-ui/core/IconButton'


function Header() {
    return (
        <Wrapper>

            <LogoWrapper>              
                <Menu>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                </Menu>
                <Logo>
                    <img src="https://logodownload.org/wp-content/uploads/2018/03/gmail-logo-1-1.png" />
                </Logo>
            </LogoWrapper>

            <SearchWrapper>
                <SearchBarWrapper>
                    <IconButton>
                        <SearchIcon />
                    </IconButton>
                    <input type="text" placeholder="Search mail" />
                    <IconButton>
                        <ExpandMoreIcon />
                    </IconButton>
                </SearchBarWrapper>
            </SearchWrapper>

            <IconsWrapper>
                <IconButton>
                    <HelpOutlineIcon />
                </IconButton>
                <IconButton>
                    <SettingsIcon />
                </IconButton>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <IconButton>
                    <AccountCircleIcon />
                </IconButton>
            </IconsWrapper>

        </Wrapper>
    )
}

export default Header

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 270px auto 200px;
    border-bottom: 1px solid lightgray;
    height:64px;
    align-items: center;
`;

    const LogoWrapper = styled.div`
        height: 45px;
        display: grid;
        grid-template-columns: 25% auto;
    `;

        const Menu = styled.div`
            display: grid;
            place-items: center;
        `

        const Logo = styled.div`
            height: 45px;
            display: flex;
            align-items:center;
            cursor: pointer;

            img{
                height: 24px;
                width:auto;
            }
        `

    const SearchWrapper = styled.div`

    `
        const SearchBarWrapper = styled.div`
            background-color: #f1f3f4;
            width: 100%;
            max-width: 750px;
            display: grid;
            grid-template-columns: 10% auto 7%;
            place-items: center;
            height: 45px;
            border-radius: 6px;

            .MuiSvgIcon-root{
                color: #5f6368;
            }

            input {
                width: 100%;
                height: auto;
                background:none;
                border: none;
                font-size: 18px;

                :focus{
                    outline: none;
                }
            }
        `
            
    const IconsWrapper = styled.div`
        margin-left: 8px;
        display: grid;
        grid-template-columns: repeat(4, auto);

        .MuiSvgIcon-root{
            color: #5f6368;
        }
    `

