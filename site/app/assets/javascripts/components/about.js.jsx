var About = React.createClass({

  render: function() {
    return (
      <div>
        <div>
          <h1 className="page-header text-center">About Me
          <img className="img img-circle center-block" src="http://cf.ltkcdn.net/photography/images/slide/164658-850x565-taking-photographs.jpg" width="200px" height="200px"></img>
          </h1>
        </div>
        <div className="col-md-4">
          <h1 className="page-header text-center">Blurb</h1>
          <p>This will display Blurb[dot]text which you will be able to edit yourself!</p>
        </div>

        <div className="col-md-4">
          <h1 className="page-header text-center">Services</h1>
          <p>This will display Services[dot]text which you will be able to edit yourself!</p>
          <p>As a hint you should discuss how your services are hourly and you'll need a consultation first via email, facebook or phone!</p>
          <p>Then, you'd talk about how you deliver the pictures via Facebook, physical prints or digitally With Facebook being the easiest.</p>
          <p className="bg-warning">If you have specials that you advertise, that yellow button up top will show, and you'd see This text here!</p>

        </div>

        <div className="col-md-4">
          <h1 className="page-header text-center">Appointments</h1>
          <p>This will display Appointments[dot]text which you will be able to edit yourself!</p>
          <p>I'm a little torn about This column, but i would think you'd end up saying:</p>
          <p>Typically, my appointment schedules are on the weekends, or whatever, and you can book appointments here [link to appointments].</p>
          <p>Maybe you'd also mention how you run your appointments or whatever idk.</p>

        </div>


      </div>

    );
  }
});
