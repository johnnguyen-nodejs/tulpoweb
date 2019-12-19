var router = require('express').Router();
var cookieParser = require('cookie-parser');



var initRouter = (app)=> {
    app.use(cookieParser());
    router.get('/change-lang/:lang', (req, res) => { 
        res.cookie('lang', req.params.lang, { maxAge: 900000 });
        res.redirect('back');
    });
    router.get('/price', (req, res)=>{
        res.render("price-Tulpo", { title: "Báo giá sản phẩm" } );
    })
    router.get('/customer', (req, res)=>{
        res.render("customer-Tulpo", { title: "Sản phẩm đề mô"});
    })
    router.get('/news', (req, res)=>{
        res.render("news-Tulpo", { title: "Tin tức nổi bâtj"});
    })
    // about 
    router.get('/about/about-us', (req, res)=>{
        res.render("About/about-Tulpo", { title: "Giới thiệu về công ty Tulpo"});
    })
    router.get('/about/contact', (req, res)=>{
        res.render("About/contact-Tulpo", { title: "Liên hệ với chúng tôi"});
    })
    router.get('/about/hire', (req, res)=>{
        res.render("About/hire-Tulpo", { title: "Cơ hội tham gia đội ngũ"});
    })
    router.get('/about/news', (req, res)=>{
        res.render("About/news-Tulpo", { title: "Nội dung tin tức"});
    })
    router.get('/about/process', (req, res)=>{
        res.render("About/process-Tulpo", { title: "Quy trình làm việc"});
    })
    //services
    router.get('/service', (req, res)=>{
        res.render("service-Tulpo", { title: "Dịch vụ" });
    })
    router.get('/service/call-service', (req, res)=>{
        res.render("Service/call-service-Tulpo", { title: "Sản phẩm đề mô"});
    })
    router.get('/service/website', (req, res)=>{
        res.render("Service/website-Tulpo", { title: "Sản phẩm đề mô"});
    })
    router.get('/service/company', (req, res)=>{
        res.render("Service/company-Tulpo", { title: "Sản phẩm đề mô"});
    })
    router.get('/service/crm', (req, res)=>{
        res.render("Service/crm-Tulpo", { title: "Sản phẩm đề mô"});
    })
    router.get('/service/erp', (req, res)=>{
        res.render("Service/erp-Tulpo", { title: "Sản phẩm đề mô"});
    })
    router.get('/service/mobile', (req, res)=>{
        res.render("Service/mobile-Tulpo", { title: "Sản phẩm đề mô"});
    })
    router.get('/service/nail', (req, res)=>{
        res.render("Service/nail-Tulpo", { title: "Sản phẩm đề mô"});
    })

    router.get("/*", (req, res)=> {
        res.render("home-Tulpo", { title: "Trang chủ"});
    });
    app.use('/', router);
    
}

module.exports = initRouter;