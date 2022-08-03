import { bindActionCreators } from "@reduxjs/toolkit"
import { useDispatch } from "react-redux"
import { articleActions } from "../store/articleSlice"

const actions = {
	...articleActions
}

export const useActions = () => {
	const dispatch = useDispatch()
	return bindActionCreators(actions, dispatch)
}