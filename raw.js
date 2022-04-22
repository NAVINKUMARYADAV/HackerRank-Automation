const puppeteer=require("puppeteer");
let browserPromise=puppeteer.launch({headless:false});
console.log(browserPromise);

browserPromise.then(function(browserINstance){
     console.log("Browser is opened");
     let pagePromise=browserINstance.newPage();// for new tab this syntax is used//
     return pagePromise;

}).then(function(page){
    console.log("Browser is opened");
    let urlPromise=page.goto("https://www.google.com/");
    return urlPromise;
}).then(function(){
    console.log("Google is opened");
})