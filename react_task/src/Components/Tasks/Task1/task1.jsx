import React from 'react'
import '../../../Styles/task1.scss'

class Task1 extends React.Component {

    render() {
      return (
        <div className="task-1">
          <div className="table">
                    <table>
                <thead>
                  <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                  </tr>
                  <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                  </tr>
                </tbody>
              </table>
          </div>
          <div className="form">
            <h2>Login</h2>
            <form action="">
                <label htmlFor="">First name:</label>
                <input type="text" id="fname" name="fname" placeholder="First Name" />
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname" placeholder="Last name" />
               <div className="second">
                <label htmlFor="gender">Gender:</label>
                <select name="gender" id="gender">
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
                </div>
                <div className="third">
                <label htmlFor="dob">DOB:</label>
                  <input type="date" id="dob"/>
                </div>
                <div className='login'>
                  <label htmlFor="login">Already Login ?</label>
                <input type="radio" id="Yes" name='AlreadyLogin' value="Yes"/>
                <label htmlFor="Yes">Yes </label>
                <input type="radio" id="No" name='AlreadyLogin' value="No"/>
                <label htmlFor="No">No </label>
                </div>
                <div className="fourth">
                <label htmlFor="Role-interest">Interested Role: </label>
                    <input type="checkbox" id="frontEndRole" name="Role" value="Front-end" />
                    <label htmlFor="frontEndRole">Front-end</label>

                    <input type="checkbox" id="backEndRole" name="Role" value="Back-end" />
                    <label htmlFor="backEndRole">Back-end</label>

                    <input type="checkbox" id="hrRole" name="Role" value="HR" />
                    <label htmlFor="hrRole">HR</label>

                    <input type="checkbox" id="salesRole" name="Role" value="Sales" />
                    <label htmlFor="salesRole">Sales</label>
                    </div>
                   <input type="submit" value="Submit" />
            </form>
          </div>
        </div>
      );
    }
  }

export default Task1