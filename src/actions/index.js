export const makePalette = (palette) => {
	return {
		type: 'MAKE_PALETTE',
		palette
	}
}

export const setProjects = (projects) => {
	return {
		type: 'SET_PROJECTS',
		projects
	}
}

export const addProject = (project) => {
	return {
		type: 'ADD_PROJECT',
		project
	}
}

export const deleteProject = (id) => {
	return {
		type: 'DELETE_PROJECT',
		id
	}
}