import { DRUMR_STATE } from '../actions'

export function loadState () {
	try {
		const serialized = localStorage.getItem(DRUMR_STATE)
		if (serialized === null) {
			return undefined
		}
		return JSON.parse(serialized)
	}
	catch (error) {
		return undefined
	}
}

export function saveState (state) {
	try {
		const serialized = JSON.stringify(state)
		localStorage.setItem(DRUMR_STATE, serialized)
	}
	catch (error) {
		console.error(error)
		console.error('Failed to save state', state)
	}
}
