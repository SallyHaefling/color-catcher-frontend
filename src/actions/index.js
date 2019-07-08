export const makePalette = (palette) => {
	return {
		type: 'MAKE_PALETTE',
		palette
	}
}

// export const clearPalette = (palette) => {
// 	return {
// 		type: 'CLEAR_PALETTE',
// 		palette
// 	}
// }

export const addProjects = (projects) => {
	return {
		type: 'ADD_PROJECTS',
		projects
	}
}