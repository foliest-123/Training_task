import React from 'react'
import jsondata from './data.json'
import '../../../Styles/Task3.scss'

class Task3 extends React.Component {
  render() {
    return (
      <div className='task3'>
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
              <tbody key={index}>
                <tr >
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