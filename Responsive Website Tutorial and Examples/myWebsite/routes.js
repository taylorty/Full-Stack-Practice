Router.configure({
    layoutTemplate: 'layout'
});
Router.route('/', function() {
    this.render('home');
});
Router.route('/projects', function() {
    this.render('projects');
});
Router.route('/blog', function() {
    this.render('blog');
});

Router.route('/news', function() {
    this.render('news');
});
