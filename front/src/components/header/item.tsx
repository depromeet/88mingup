/** @jsx jsx */
import { jsx } from '@emotion/core';
import { ReactComponent } from '*.svg';
import styled from '@emotion/styled';

export interface Props {
  icon?: typeof ReactComponent;
  children?: string;
  onClick?: () => void;
  align: 'start' | 'middle' | 'end';
}

const HeaderItemContainer = styled.div`
  margin: auto;
  height: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 64px;
`;

export function HeaderItem(props: Props) {
  return (
    <HeaderItemContainer>
      {props.icon &&
        jsx(props.icon, {
          css: {
            cursor: props.onClick ? 'pointer' : undefined,
          },
          onClick: props.onClick,
        })}
      <span
        css={{
          cursor: props.onClick ? 'pointer' : undefined,
        }}
        onClick={props.onClick}
      >
        {props.children}
      </span>
    </HeaderItemContainer>
  );
}
