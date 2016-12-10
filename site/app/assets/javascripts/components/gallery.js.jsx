var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var Gallery = React.createClass({

  render: function() {
          return (
            <div>
              <div className="col-md-4">
                <h1 className="page-header text-center">Weddings</h1>
                <div className="gallery-image">
                  <ReactCSSTransitionGroup
                    transitionName="gallery"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    key={1}>
                    <img className="img-responsive" src="http://wpuploads.appadvice.com/wp-content/uploads/2016/01/photographer-1080016_1920.jpg"></img>
                  </ReactCSSTransitionGroup>
                </div>
              </div>

              <div className="col-md-4">
                <h1 className="page-header text-center">Family Photos</h1>
                <div className="gallery-image">
                  <ReactCSSTransitionGroup
                    transitionName="gallery"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    key={1}>
                    <img className="img-responsive" src="http://wpuploads.appadvice.com/wp-content/uploads/2016/01/photographer-1080016_1920.jpg"></img>
                  </ReactCSSTransitionGroup>
                </div>
              </div>

              <div className="col-md-4">
                <h1 className="page-header text-center">Senior Pictures</h1>
                <div className="gallery-image">
                  <ReactCSSTransitionGroup
                    transitionName="gallery"
                    transitionAppear={true}
                    transitionAppearTimeout={500}
                    key={1}>
                    <img className="img-responsive" src="http://wpuploads.appadvice.com/wp-content/uploads/2016/01/photographer-1080016_1920.jpg"></img>
                  </ReactCSSTransitionGroup>
                </div>
              </div>


            </div>

  );


  }
});
