import {Stack} from '@mui/material';
import {category} from '../../constants';
import {CategoryButton} from "../index";


const Category = ({ selectedCategoryHandler, selectedCategory }) => {
	return (
		<Stack direction={'row'} sx={{ overflowX: 'scroll' }}>
			{category.map(item => (
				<CategoryButton
					key={item.name}
					isSelected={item.name === selectedCategory}
					onClick={() => selectedCategoryHandler(item.name)}
					icon={item.icon}
					label={item.name}
				/>
			))}
		</Stack>
	);
};

export default Category;
