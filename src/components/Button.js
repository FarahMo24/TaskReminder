import PropTypes from 'prop-types'


const Button = ({color,text, onClick}) => {
  return (
  <button 
    onClick = {onClick}
    style = {{backgroundColor:color}} 
    className='btn'>
    
    {text}
    
    </button>
  
  )
}

// Default prop
Button.defaultProps = {
  color:'steelblue'

}

// Proptypes
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}



export default Button
