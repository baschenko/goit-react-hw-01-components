import PropTypes from 'prop-types';
import {
  Container,
  NameEvent,
  StatList,
  Item,
  Label,
} from './Statistics.styled';

const Statistics = ({ title, stats }) => {
  return (
    <Container>
      {title !== '' ? <NameEvent>{title}</NameEvent> : ''}

      <StatList>
        {stats.map(({ id, label, percentage }) => (
          // <List key={el.id} label={el.label} percentage={el.percentage} />
          <Item key={id}>
            <Label>{label}</Label>
            <span className="percentage">{percentage}%</span>
          </Item>
        ))}
      </StatList>
    </Container>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

export default Statistics;
