import cl from './IconButton.module.scss'

function IconButton({children, hoverColor, hoverScale, className, ...props}) {
    const combinedClassName = `${cl.button} 
                               ${hoverColor ? cl.colorable : ''} 
                               ${hoverScale ? cl.scalable: ''} 
                               ${className || ''}`

    return <button  {...props}
                    className={combinedClassName} 
                    style={{'--hover-color': hoverColor, '--hover-scale': hoverScale}}
            >
                {children}
    </button>
}

export default IconButton;