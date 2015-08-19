/**
 * Created by cihankoseoglu on 8/19/15.
 */

Router.configure({
  layoutTemplate : 'layout',
  loadingTemplate: 'loading',
  notFoundTemplate: 'notFound',
});

Router.route("/", {
  name: "homeIndex",
  data: function(){
    return{
      message: "some message"
    }
  }
});

Router.route("/about", {
  name: "homeAbout"
});
Router.route("/contact", {
  name: "homeContact"
});