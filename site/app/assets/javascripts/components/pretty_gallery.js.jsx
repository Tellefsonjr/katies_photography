var ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
var PrettyGallery = React.createClass({

  render: function() {
          return (
            <div>
              <ReactCSSTransitionGroup
                transitionName="gallery"
                transitionAppear={true}
                transitionAppearTimeout={500}
                key={1}>
                <img src="https://scontent.fsnc1-1.fna.fbcdn.net/v/t1.0-0/p206x206/13680986_1708181279432129_6282284851541483311_n.jpg?oh=fdda6d109fd766d7fb6a04de1bb20277&oe=589B3B7F"></img>
              </ReactCSSTransitionGroup>

            </div>

  );


  }
});
