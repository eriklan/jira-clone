import React from 'react';

export const List = ({list, users}) => {
  return (
    <table>
      <thred>
        <tr>
          <th>Title</th>
          <th>Manager</th>
        </tr>
      </thred>
      <tbody>
        {list.map(project => <tr key={project.id}>
          <td>{project.name}</td>
          <td>{users.find(user => user.id === project.personId)?.name || 'Unkonwn'}</td>
        </tr>)}
      </tbody>
    </table>
  );
}
