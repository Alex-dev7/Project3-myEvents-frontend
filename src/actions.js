import { redirect } from "react-router-dom"

export const createAction = async ({request}) => {
    const formData = await request.formData()
    console.log("create action is running :)")
    console.log(formData)
}