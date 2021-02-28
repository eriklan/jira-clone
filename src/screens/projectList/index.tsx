import React, { useEffect } from 'react';
import {SearchPanel} from "./searchPanel";
import {List} from "./list";
import { useState } from "react"
import { cleanObject, useMount, useDebounce } from 'utils';
import * as qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL

export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])

    interface T {
      name: string,
      personId: string
    }

    const [params, setParams] = useState({
        name: '',
        personId: ''
    })

    const debouncedParam = useDebounce(params, 200)
    const [list, setList]= useState([])
    

    useEffect(() => {
      fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
          if(response.ok) {
            setList(await response.json())
          }
      })
    }, [debouncedParam])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if(response.ok) {
              setUsers(await response.json())
            }
        })
    })

    return <div>
        <SearchPanel users={users || []} params={params} setParams={setParams}/>
        <List users={users} list={list}/>
    </div>
}