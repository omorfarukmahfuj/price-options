import PropTypes from 'prop-types';
const Link = ({ route }) => {
  return (
    <li className="mr-10 hover:bg-[#3b5fff] px-6 py-2 rounded-full"><a href={route.path}>{route.name}</a></li>
  );
};

Link.propTypes = {
  route: PropTypes.object
}
export default Link;