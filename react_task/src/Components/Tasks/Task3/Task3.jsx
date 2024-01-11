import React from 'react'
import jsondata from './data.json'

class Task3 extends React.Component {
  render() {
    return (
      <div>
        {jsondata ? (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Department</th>
                <th>DOB</th>
              </tr>
            </thead>

            {jsondata.map((items, index) => (
              <tbody>
                <tr key={index}>
                  <td>{items.name}</td>
                  <td>{items.department}</td>
                  <td>{items.dob}</td>
                </tr>
              </tbody>
            ))}
          </table>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    );
  }
}

export default Task3