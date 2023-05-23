import List from './List';
import { Container, NameEvent, StatList } from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title !== '' ? <NameEvent>{title}</NameEvent> : ''}

      <StatList>
        {stats.map(el => (
          <List key={el.id} label={el.label} percentage={el.percentage} />
        ))}
      </StatList>
    </Container>
  );
};

export default Statistics;
