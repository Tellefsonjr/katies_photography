var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;


var Contact = React.createClass({

  render: function() {
    return(
      <div id="ContactForm" className="well well-lg">
        <div className="text-center">
          <h1 className="page-header">
            Contact Me
          </h1>
          <img className="img img-circle" height="200px" width="200px" src={"https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-9/14900411_1746767505573506_3007451679917616629_n.jpg?oh=1cf5026b40372c735551d8f7cbf3deb5&oe=58885E08"} alt=""></img>
        </div>
        <div className="row text-center">
          <div className="col-md-5 col-md-push-1">
            <h2 className="page-header">Social Media:</h2>
            <ul className="">
              <li>
                <a className="btn btn-block btn-social btn-facebook" href={"#"}>
                  <span className="fa fa-facebook"></span> FB:Katie Marie
                </a>
              </li>
              <li>
                <a className="btn btn-block btn-social btn-twitter" href={"#"}>
                  <span className="fa fa-twitter"></span> @Kaite_Marie
                </a>
              </li>
              <li>
                <a className="btn btn-block btn-social btn-instagram" href={"#"}>
                  <span className="fa fa-instagram"></span> @Katie_Marie
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-5 col-md-push-1">
            <h2 className="page-header"> Email me </h2>
            <small> In progress, info will auto pop login from FB User login What info we need here </small>
          </div>

      </div>

      </div>
    );
  }
});
