module.exports.home = function(req,res){

    return res.render('home',{
        title :"home"
    });
    //res.end('<h1>Express is up from controller side</h1>');
}