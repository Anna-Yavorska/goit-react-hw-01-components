import {
  Table,
  TableTitle,
  TableItem,
  Text,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <thead>
        <tr>
          <TableTitle>Type</TableTitle>
          <TableTitle>Amount</TableTitle>
          <TableTitle>Currency</TableTitle>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <TableItem  key={item.id}>
            <Text>{item.type}</Text>
            <Text>{item.amount}</Text>
            <Text>{item.currency}</Text>
          </TableItem>
        ))}
      </tbody>
    </Table>
  );
};
