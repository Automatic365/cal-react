var AppointmentForm = React.createClass({
  render: function() {
    return(
      <div>
        <h2>Make a new appointment</h2>
        <form>
        <input name="title" placeholder="Appointment Name" />
        <input name="appt_time" placeholder="Appointment Date and Time" />
        <input type="submit" value="Make Appointment" />
      </form>
    </div>
    )
  }
})
