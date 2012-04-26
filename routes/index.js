
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
    org: {
      name: 'Badge-O-Rama',
      description: 'Badge-O-Rama is an organization that exists to give badges ' +
        'to people because badges are great and people should have them! Badges!'
    },
    badges: [
      { 
        name: 'Some Badge', 
        description: 'The Some Badge badge is just some badge, you know?', 
        src: 'foo' 
      },
      { 
        name: 'No-bages Badge', 
        description: 'This badge is awarded for having no badges.', 
        src: 'bar'
      }
    ],
    user: {
      attributes: {
        email: 'ima@user.com'
      }
    }
  });
};

exports.login = function(req, res){
  res.render('login');
};
