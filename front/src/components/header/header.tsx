/** @jsx jsx */
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { HeaderItem, Props as HeaderItemProps } from './item';
import { ReactElement } from 'react';

interface Props {
  children: ReactElement<HeaderItemProps>[];
}

const HeaderItemWrapperdiv = styled.div`
  min-width: 64px;
`;

const HeaderDiv = styled.div`
  display: flex;
  max-height: 60px;
  height: 60px;
  position: fixed;
  width: 100%;
`;

const Header = (props: Props) => {
  return (
    <HeaderDiv>
      <HeaderItemWrapperdiv>
        {props.children.filter((child) => child.props.align === 'start')}
      </HeaderItemWrapperdiv>
      <HeaderItemWrapperdiv css={{ width: '100%' }}>
        {props.children.filter((child) => child.props.align === 'middle')}
      </HeaderItemWrapperdiv>
      <HeaderItemWrapperdiv>
        {props.children.filter((child) => child.props.align === 'end')}
      </HeaderItemWrapperdiv>
    </HeaderDiv>
  );
};

Header.Item = HeaderItem;

export default Header;
