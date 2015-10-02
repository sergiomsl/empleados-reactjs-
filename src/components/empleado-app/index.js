import React from 'react'
import EmpleadoList from '../empleado-list'

class EmpleadoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = { employees: [] }
  }

  componentWillMount() {
    fetch('http://159.203.79.153:3000/employees')
      .then((response) => {
        return response.json()
      })
      .then((employees) => {
        this.setState({ employees: employees })
      })
  }

  render() {
    if (this.state.employees.length > 0) {
      return(
        <div className="container-fluid">
          <EmpleadoList listado={this.state.employees} />
        </div>
      )
    } else {
      return <p className="text-center">Loading Employees</p>
    }
  }
}

export default EmpleadoApp
