var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var PrettyGallery = React.createClass({

  render: function() {
          return (
            <div className="col-md-3 gallery-image">
              <ReactCSSTransitionGroup
                transitionName="gallery"
                transitionAppear={true}
                transitionAppearTimeout={500}
                key={1}>
                <img className="img-responsive" src="http://wpuploads.appadvice.com/wp-content/uploads/2016/01/photographer-1080016_1920.jpg"></img>
              </ReactCSSTransitionGroup>

            </div>

  );


  }
});
