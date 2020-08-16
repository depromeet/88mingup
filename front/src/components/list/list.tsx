import React from 'react';
import Item from './item';

interface Props<T> {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode[] | React.ReactNode;
  dataSource?: T[];
  renderItem?: (item: T, index: number) => React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  gap?: number;
}

const List = <T,>(props: Props<T>) => {
  const {
    dataSource = [],
    children,
    renderItem,
    header,
    footer,
    ...others
  } = props;

  const listContent = dataSource.map((item, index) =>
    renderItem ? renderItem(item, index) : null,
  );

  return (
    <div {...others}>
      {header && <div style={{ marginBottom: 16 }}>{header}</div>}

      {listContent.length > 0 ? listContent : children}

      {footer && <div>{footer}</div>}
    </div>
  );
};

List.Item = Item;

export default List;
