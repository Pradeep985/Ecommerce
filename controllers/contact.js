exports.getContactUs = (req, res, next) => {
    res.render('contactus', {
      pageTitle: 'Contact Us',
      path: '/contactus'
    });
  };
  
  exports.postContactUs = (req, res, next) => {
    // You can process form data here if needed
    res.redirect('/success');
  };
  
  exports.getSuccess = (req, res, next) => {
    res.render('success', {
      pageTitle: 'Success',
      path: '/success'
    });
  };
  