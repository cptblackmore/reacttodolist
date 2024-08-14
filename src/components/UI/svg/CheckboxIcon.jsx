import PropTypes from 'prop-types';

function CheckboxIcon({iconClass, iconColor}) {
  return <svg className={iconClass}
              fill={iconColor}
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 72 72"
  >
    <path d="M57.658 12.643a4 4 0 011.183 5.532l-25.915 40a4 4 0 01-6.361.467L13.514 43.807a4.001 4.001 0 016.006-5.285l9.563 10.87 23.043-35.567a4 4 0 015.532-1.182z"></path>
  </svg>
}

CheckboxIcon.propTypes = {
  iconClass: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired
}

export default CheckboxIcon;