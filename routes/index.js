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
    router.get('/product', (req, res)=>{
        res.render("product-Tulpo", { title: "Sản phẩm đề mô"});
    })
    router.get('/news', (req, res)=>{
        res.render("news-Tulpo", { title: "Tin tức nổi bật"});
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
    router.get('/service/bot-chatbot', (req, res)=>{
        res.render("Service/website-Tulpo", { 
            title: "Sản phẩm đề mô",
            service_header: "Coming Soon"
        });
    })
    router.get('/service/tool', (req, res)=>{
        res.render("Service/website-Tulpo", { 
            title: "Sản phẩm đề mô",
            service_header: "Coming Soon"
        });
    })
    router.get('/service/blockchain', (req, res)=>{
        res.render("Service/website-Tulpo", { 
            title: "Sản phẩm đề mô",
            service_header: "Coming Soon"
        });
    })
    router.get('/service/wallet', (req, res)=>{
        res.render("Service/website-Tulpo", { 
            title: "Sản phẩm đề mô",
            service_header: "Coming Soon"
        });
    })
    router.get('/service/exchange', (req, res)=>{
        res.render("Service/website-Tulpo", { 
            title: "Sản phẩm đề mô",
            service_header: "Coming Soon"
        });
    })
    router.get('/service/pay-gate', (req, res)=>{
        res.render("Service/website-Tulpo", { 
            title: "Sản phẩm đề mô",
            service_header: "Coming Soon"
        });
    })
    router.get('/service/market-maker', (req, res)=>{
        res.render("Service/website-Tulpo", { 
            title: "Sản phẩm đề mô",
            service_header: "Coming Soon"
        });
    })
    router.get('/service/website-mlm', (req, res)=>{
        res.render("Service/website-Tulpo", { 
            title: "Sản phẩm đề mô",
            service_header: "Coming Soon"
        });
    })
    router.get('/service/bounty-airdrop', (req, res)=>{
        res.render("Service/website-Tulpo", { 
            title: "Sản phẩm đề mô",
            service_header: "Coming Soon"
        });
    })

    router.get("/*", (req, res)=> {
        res.render("home-Tulpo", { title: "Trang chủ"});
    });
    app.use('/', router);
    
}

module.exports = initRouter;