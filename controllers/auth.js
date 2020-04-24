exports.getLogin = (req, res, next) => {
    // let isLoggedIn; 
    // if (req.get('Cookie')) {
    //     isLoggedIn = req.get('Cookie').trim().split('=')[1] === 'true';
    // }
    console.log(111, req.session.isLoggedIn);
    res.render('auth/login', {
        path: '/login',
        pageTitle: 'Login',
        isAuthenticated: false
    });
};

exports.postLogin = (req, res, next) => {
    req.session.isLoggedIn = true;
    res.redirect('/');
};