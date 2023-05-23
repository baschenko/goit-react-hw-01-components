import Rows from './Rows';
import { Container, TableHeader } from './TransactionHistory.styled';

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
        {tems.map(tem => (
          <Rows
            key={tem.id}
            type={tem.type}
            amount={tem.amount}
            currency={tem.currency}
          />
        ))}
      </tbody>
    </Container>
  );
};

export default TransactionHistory;
