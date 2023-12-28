import {colors} from "../../constants/colors";

const CategoryButton = ({isSelected, onClick, icon, label}) => {
    const buttonStyles = {
        borderRadius: '0',
        background: isSelected ? colors.secondary : '#fff',
        color: isSelected ? '#fff' : colors.secondary,
    };

    const iconStyles = {
        color: isSelected ? '#fff' : colors.secondary,
        marginLeft: '40px',
    };

    return (
        <button className='category-btn' style={buttonStyles} onClick={onClick}>
            <span style={iconStyles}>{icon}</span>
            <span style={{opacity: '1', marginRight: '15px'}}>{label}</span>
        </button>
    );
};
export default CategoryButton;