/*
 * Dummy routes with dummy data, for view building.
 * I assume we'll do the fancy controller thing when we hook things up for realz?
 */

/* Org & available badge info
 * Could serve as both <org>.openbadger.org and login landing page.
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

/*
 * Login a la openbadges
 */
exports.login = function(req, res){
  res.render('login');
};

/*
 * Edit org info
 */
exports.org_editor = function(req, res){
  res.render('org-editor', {
    user: {
      attributes: {
        email: 'ima@user.com'
      }
    }
  });
};
