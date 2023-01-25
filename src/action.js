import { redirect } from "react-router-dom"

export const updateAction = async({ request, params }) =>{
  const formData = await request.formData()

  const updateEvent = {
    title: formData.get("title"),
    url: formData.get("url"),
    dateTime: formData.get("dateTime"),
    description: formData.get("description")
  }

  await fetch(URL + "/myevents/" + params.id, {
     method: "put",
     headers: {
        "Content-Type": "application/json"
     },
     body: JSON.stringify(updateEvent) 
  })
  return redirect("/")
}
