import classes from './Button.module.scss'

function Button({children, variant='filled', ...props}) {
    const rootClasses = [classes.button];
    if (variant === 'filled') {
        rootClasses.push(classes.filled);
    } else if (variant === 'outlined') {
        rootClasses.push(classes.outlined);
    }

    return <button {...props} className={rootClasses.join(' ')}>
        {children}
    </button>
}

export default Button;