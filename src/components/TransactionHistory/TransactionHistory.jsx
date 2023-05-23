import PropTypes from 'prop-types';
import {
  Container,
  TableHeader,
  TableRows,
  TableСells,
} from './TransactionHistory.styled';

const TransactionHistory = ({ tems }) => {
  return (
    <Container>
      <thead>
        <tr>
          <TableHeader>Type</TableHeader>
          <TableHeader>Amount</TableHeader>
          <TableHeader>Currency</TableHeader>
        </tr>
      </thead>

      <tbody>
        {tems.map(({ id, type, amount, currency }) => (
          <TableRows key={id}>
            <TableСells>{type}</TableСells>
            <TableСells>{amount}</TableСells>
            <TableСells>{currency}</TableСells>
          </TableRows>
        ))}
      </tbody>
    </Container>
  );
};

TransactionHistory.propTypes = {
  tems: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string.isRequired)),
};

export default TransactionHistory;
