/* eslint-disable no-restricted-globals */
import React from 'react';
import PropTypes from 'prop-types';
import { Pane, Table, Typography } from '@firstclasspostcodes/sw14';

export const Component = ({ rows }) => {
  if (!rows || rows.length === 0) {
    return null;
  }

  const [thead, ...tbody] = rows;

  const isNumericColumnHeader = i => {
    const column = tbody.map(row => row.cells[i]).filter(Boolean);
    const numeric = column.filter(cell => !isNaN(cell));
    return column.length === numeric.length;
  };

  return (
    <Pane spacing={{ p: 2, my: 4 }} background={['gray', 0]}>
      <Table spacing={{ p: 0 }} width="100%">
        <thead>
          <tr>
            {thead.cells.map((cell, i) => {
              const isNumeric = isNumericColumnHeader(i);
              const alignment = isNumeric ? 'right' : 'left';
              return (
                <th key={cell} scope="col">
                  <Typography.P alignment={alignment}>{cell}</Typography.P>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {tbody.map(row => (
            <tr>
              {row.cells.map((cell, i) => {
                const alignment = isNaN(cell) ? 'left' : 'right';
                const text = <Typography.P alignment={alignment}>{cell}</Typography.P>;
                if (i === 0) {
                  return (
                    <th key={cell} scope="row">
                      {text}
                    </th>
                  );
                }
                return <td key={cell}>{text}</td>;
              })}
            </tr>
          ))}
        </tbody>
      </Table>
    </Pane>
  );
};

Component.propTypes = {
  rows: PropTypes.array,
};

Component.defaultProps = {
  rows: [],
};
