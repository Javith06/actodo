import { useState } from "react"

function AddTodoForm(props)
{

  const activityArr= props.activityArr
  const setActivityArr=props.setActivityArr  

  const [newactivity,setNewactivity]=useState("")

  function handleChange(evt)
  {
    setNewactivity(evt.target.value)

  }
  function Addactivity()
  {
    setActivityArr([...activityArr,{id:activityArr.length+1,activity:newactivity}])
    setNewactivity("")
  }

    return(
        <div className="flex flex-col gap-3">
        <h1 className="text-2xl font-medium">Manage Activities</h1>

        <div>
          <input
            type="text"
            className="border border-black  bg-transparent p-1"
            placeholder="Next Activity?"
            value={newactivity}
            onChange={handleChange}
          />
          <button className="bg-black text-white p-1 border border-black" onClick={Addactivity}>
            Add
          </button>
        </div>
      </div>
    )
}

export default AddTodoForm