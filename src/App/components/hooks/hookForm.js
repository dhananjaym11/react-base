import React, { useState } from 'react'

export default function HookForm() {
  const [name, setName] = useState({ firstName: '', lastName: '' });
  
  return (
    <>
      <h2>Form</h2>
      <form>
        <div className='mb-2'>First Name :
              <input
            type="text"
            value={name.firstName}
            onChange={e => setName({ ...name, firstName: e.target.value })} />
        </div>
        <div>Last Name :
                  <input
            type="text"
            value={name.lastName}
            onChange={e => setName({ ...name, lastName: e.target.value })} />
        </div>
        <h5>{JSON.stringify(name)}</h5>
      </form>
    </>
  )
}