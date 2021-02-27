import {User} from "screens/projectList/searchPanel"

interface Project {
  id: string;
  name: string;
  personId: string;
  pin: boolean;
  organization: string;
}

interface ListProps {
  list: Project[],
  users: User[]
}

export const List = ({list, users}: ListProps) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Manager</th>
        </tr>
      </thead>
      <tbody>
        {list.map(project => <tr key={project.id}>
          <td>{project.name}</td>
          <td>{users.find(user => user.id === project.personId)?.name || 'Unkonwn'}</td>
        </tr>)}
      </tbody>
    </table>
  );
}
