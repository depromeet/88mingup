/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { HeaderItem, Props as HeaderItemProps } from './item';
import { ReactElement } from 'react';

interface Props {
  children: ReactElement<HeaderItemProps>[];
}

const HeaderItemWrapper = styled.div`
  display: flex;
`;

const HeaderContainer = styled.div`
  display: flex;
  max-height: 60px;
  height: 60px;
  position: fixed;
  width: 100%;
`;

const Header = (props: Props) => {
  return (
    <HeaderContainer>
      <HeaderItemWrapper>
        {props.children.filter((child) => child.props.align === 'start')}
      </HeaderItemWrapper>
      <HeaderItemWrapper css={{ width: '100%' }}>
        {props.children.filter((child) => child.props.align === 'middle')}
      </HeaderItemWrapper>
      <HeaderItemWrapper>
        {props.children.filter((child) => child.props.align === 'end')}
      </HeaderItemWrapper>
    </HeaderContainer>
  );
};

Header.Item = HeaderItem;

export default Header;
