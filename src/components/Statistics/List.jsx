import PropTypes from 'prop-types';
import { Item, Label } from './Statistics.styled';

const List = ({ label, percentage }) => {
  return (
    <Item>
      <Label>{label}</Label>
      <span className="percentage">{percentage}%</span>
    </Item>
  );
};

List.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default List;
