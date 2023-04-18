console.log("ESERCIZIO: Riconoscere ID delle riunioni di Google Meet");
// let meetId = /[a-z][a-z][a-z]-[a-z][a-z][a-z][a-z]-[a-z][a-z][a-z]/
let meetId = /[a-z]{3}-[a-z]{4}-[a-z]{3}/
testRegex(meetId, "ikz-tjrf-igh");
testRegex(meetId,"mmf-tire-sgm");
testRegex(meetId,"mmf-aaaaaa-sgmaa");
testRegex(meetId,"___mmf-tire-sgm");


console.log("\nESERCIZIO: Riconoscere una data");
let datePattern =/^\d{1,2}\/\d{1,2}\/\d{4}$/
// let datePattern =/^\d{1,2}\/\d{1,2}\/\d{4,}$/
// let datePattern =/^\d{1,2}\/\d{1,2}\/\d+$/  
// let datePattern =/^\d{1,2}\/\d{1,2}\/\d+[ad]\.c\.$/ 
testRegex(datePattern, "10/3/2023");
testRegex(datePattern,"11/10/1992");
testRegex(datePattern,"5/5/1800");
testRegex(datePattern,"500/10/10000");
testRegex(datePattern,"10-03-2002");


console.log("\nESERCIZIO: Riconoscere un dominio (+ porta");
// let domainPattern = /^\w+(\-\w+)*[.:](\w+)(.\w+)*(:\d)*$/;
let domainPattern = /^[a-zA-Z\d][\w\-]*(\.[a-zA-Z]+)*(:\d+)?$/;
testRegex(domainPattern, "google.com"); //true
testRegex(domainPattern,"localhost:8080");//true
testRegex(domainPattern,"english-site.co.uk:21");//true
testRegex(domainPattern,"localhost:");//false
testRegex(domainPattern,"personal-home-page.it");//true
testRegex(domainPattern,".page.it");//false
testRegex(domainPattern, "localhost"); //true
testRegex(domainPattern,"my-local-domain");//true
testRegex(domainPattern,"a");//true
testRegex(domainPattern,"_site.com");//false
testRegex(domainPattern,"-site.com");//false

function testRegex(pattern, string) {
    console.log("Testing string '" + string + "': " + pattern.test(string));
}



