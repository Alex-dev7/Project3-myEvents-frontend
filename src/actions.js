import { redirect } from "react-router-dom"

const URL = "https://myevents-backend.onrender.com"

export const createAction = async ({ request }) => {
    const formData = await request.formData()
    
    const newEvent = {
        title: formData.get("title"),
        url: formData.get("url"),
        dateTime: formData.get("dateTime"),
        description: formData.get("description")
    }

    if(newEvent?.dateTime)
    {
        newEvent.dateTime = convertToUtc(newEvent.dateTime);
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

export const updateAction = async({ request, params }) =>{
    const formData = await request.formData()
  
    const updateEvent = {
      title: formData.get("title"),
      url: formData.get("url"),
      dateTime: formData.get("dateTime"),
      description: formData.get("description")
    }
  
    if(updateEvent?.dateTime)
    {
        updateEvent.dateTime = convertToUtc(updateEvent.dateTime);
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

  function convertToUtc(localDateTime){
    return compensateDST(new Date(localDateTime)).toUTCString()
  }

  function compensateDST(dt) {
    const janOffset = new Date(dt.getFullYear(), 0, 1).getTimezoneOffset();
    const julOffset = new Date(dt.getFullYear(), 6, 1).getTimezoneOffset();
    const dstMinutes = dt.getTimezoneOffset() - Math.max(janOffset, julOffset);
    dt = new Date(dt);
    dt.setMinutes(dt.getMinutes() - dstMinutes);
    return dt;
}

export const deleteAction = async ({params}) => {
    await fetch(URL + "/myevents/" + params.id, {
      method: "delete"
    })

    return redirect("/")
}