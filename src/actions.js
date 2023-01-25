import { redirect } from "react-router-dom"

const URL = "https://myevents-backend-dev.onrender.com"

export const createAction = async ({ request }) => {
    const formData = await request.formData()
    
    const newEvent = {
        title: formData.get("title"),
        url: formData.get("url"),
        dateTime: formData.get("dateTime"),
        description: formData.get("description")
    }

    await fetch(URL + "/myevents", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEvent)
    })

    return redirect("/")
}