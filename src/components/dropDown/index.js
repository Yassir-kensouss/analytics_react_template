import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button } from '../Button';
import {Link} from 'react-router-dom';
import {theme} from '../../data/theme_data';
import tw from "twin.macro";

/* React Icons */
import {BiArrowBack} from 'react-icons/bi';

import {DropdownContainer,DropdownWrap,TimesIcon,DropdownMenu,DropdownLink,SignButton} from './DropdownElements';

const Dropdown = ({isOpen , toggle}) => {

  return (
    <ThemeProvider theme={theme}>
      <DropdownContainer isOpen={isOpen} toggle={toggle}>
        <DropdownWrap>
          <TimesIcon onClick={toggle}>
            <BiArrowBack/>
          </TimesIcon>
          <DropdownMenu>
            <nav>
              <ul>
                <li>
                  <DropdownLink to="/products">
                    Products
                  </DropdownLink>
                </li>
                <li>
                  <DropdownLink to="/pricing">
                    Pricing
                  </DropdownLink>
                </li>
                <li>
                  <DropdownLink to="/faq">
                    FAQ
                  </DropdownLink>
                </li>
                <li>
                  <DropdownLink to="/blog">
                    Blog
                  </DropdownLink>
                </li>
              </ul>
            </nav>
          </DropdownMenu>
          <SignButton>
            <Button to="/signup">Sign Up</Button>
          </SignButton>
        </DropdownWrap>
      </DropdownContainer>
    </ThemeProvider>
  )
}

export default Dropdown
