import React from "react";
import styled from "styled-components";

const TableStyle = styled.div`
  background-color: #fff;
  padding: 0 10px;
  /* overflow-y: auto; */
  border-radius: 10px;
  table {
    width: 100%;
    border: 1px solid #e6e6e6;
  }
  th {
    color: red;
    padding: 16px 20px;
    border-bottom: 1px solid #e6e6e6;
    color: #808080;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
  }
  tbody tr td {
    padding: 12px 20px;
    border-bottom: 1px solid #e6e6e6;
    text-align: left;
  }
  .footTable {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 20px;
    border: 1px solid #e6e6e6;
  }
`;
const Table = ({ children }) => {
  return <TableStyle>{children}</TableStyle>;
};

export default Table;
