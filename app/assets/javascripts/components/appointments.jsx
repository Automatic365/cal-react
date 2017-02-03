var Appointments = React.createClass({
  getInitialState: function(){
    return{
      appointments: this.props.appointments,
      title: 'Team meeting',
      appt_time: 'Tommorrow at 9am'
    }
  },

  handleUserInput: function(obj){
    this.setState(obj)
  },
  render: function(){
    return (
      <div>
        <AppointmentForm input_title={this.state.title}
          input_appt_time={this.state.appt_time}
          onUserInput={this.handleUserInput}/>
        <AppointmentsList appointments={this.state.appointments} />
      </div>
    )
  }
})
