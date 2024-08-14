import classes from './Input.module.scss'

function Input({...props}) {
    return <input {...props} className={classes.input} />
}

export default Input;