import CheckboxIcon from '../svg/CheckboxIcon';
import cl from './Checkbox.module.scss'

function Checkbox({checked, toggle, iconColor}) {

    return <div onClick={() => {toggle()}}
                className={`${cl.customCheckbox} ${checked ? cl.checked : ''}`}
                tabIndex='0'
                role='checkbox'
                aria-checked={checked}
                onKeyDown={e => e.key === 'Enter' && toggle()}
    >
        {checked
            &&
            <CheckboxIcon iconClass={cl.icon} iconColor={iconColor}/>
        }
    </div>
}

export default Checkbox;