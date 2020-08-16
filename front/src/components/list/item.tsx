import React from 'react';
import Avatar from 'components/avatar';

interface Props {
  meta?: { title?: string; avatar?: React.ReactNode; description?: string };
}

const Item: React.FC<Props> = (props) => {
  const { meta, ...others } = props;

  if (meta) {
    return (
      <div
        style={{
          display: 'flex',
          backgroundColor: '#f8f8f8',
          borderRadius: 8,
          padding: '10px 8px',
          marginBottom: 8,
        }}
        {...others}
      >
        <div>
          <Avatar size={32} />
        </div>
        <div style={{ marginLeft: 8 }}>
          {meta.title && (
            <div style={{ fontSize: 11, fontWeight: 'bold', color: '#ababab' }}>
              {meta.title}
            </div>
          )}
          {meta.description && (
            <div style={{ fontSize: 13, color: '#040404' }}>
              {meta.description}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        padding: '10px 8px',
        marginBottom: 8,
      }}
      {...others}
    >
      {props.children}
    </div>
  );

  // return (
  //     <div {...props}>
  //         {}
  //     </div>
  // )
};

export default Item;
