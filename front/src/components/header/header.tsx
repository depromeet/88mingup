import React from 'react';

interface HeaderProps {
  items: HeaderItem[];
}

interface HeaderItem {
  icon:
    | string
    | React.ReactNode
    | React.FunctionComponent<
        React.SVGProps<SVGSVGElement> & {
          title?: string | undefined;
        }
      >;
  align: 'start' | 'middle' | 'end';
  onClick?: () => void;
}

const groupByAlign = (
  items: HeaderItem[],
): {
  start: HeaderItem[];
  middle: HeaderItem[];
  end: HeaderItem[];
} => {
  const groupByAlignHeaderItem = {
    start: [] as HeaderItem[],
    middle: [] as HeaderItem[],
    end: [] as HeaderItem[],
  };

  items.forEach((item) => groupByAlignHeaderItem[item.align].push(item));

  return groupByAlignHeaderItem;
};

const renderHeaderItem = (item: HeaderItem, index: number) => {
  return (
    <span
      key={`${item.align}-${index}`}
      onClick={item.onClick}
      style={{ cursor: item.onClick ? 'pointer' : undefined }}
    >
      {item.icon}
    </span>
  );
};

const Header: React.FC<HeaderProps> = (props) => {
  const groupByHeaderItems = groupByAlign(props.items);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 48,
        padding: '0px 16px',
      }}
    >
      <div>
        {groupByHeaderItems['start'].map((item, index) =>
          renderHeaderItem(item, index),
        )}
      </div>
      <div>
        {groupByHeaderItems['middle'].map((item, index) =>
          renderHeaderItem(item, index),
        )}
      </div>
      <div>
        {groupByHeaderItems['end'].map((item, index) =>
          renderHeaderItem(item, index),
        )}
      </div>
    </div>
  );
};

export default Header;
