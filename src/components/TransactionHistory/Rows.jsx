import PropTypes from 'prop-types';
import { TableRows, TableСells } from './TransactionHistory.styled';

const Rows = ({ type, amount, currency }) => {
  return (
    <TableRows>
      <TableСells>{type}</TableСells>
      <TableСells>{amount}</TableСells>
      <TableСells>{currency}</TableСells>
    </TableRows>
  );
};

Rows.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default Rows;
