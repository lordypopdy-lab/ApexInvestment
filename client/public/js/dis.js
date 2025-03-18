var listCountries = ['USA', 'Portugal', 'Germany', 'France', 'Italy', 'Namibia', 'Australia', 'South Africa', 'Canada', 'Argentina', 'Saudi Arabia', 'Mexico', 'Portugal', 'Brazil', 'Venezuela', 'Isreal', 'Sweden', 'USA', 'Colombia', 'Italy', 'Canada', 'United Kingdom', 'USA', 'Greece', 'Cuba', 'Germany', 'Portugal', 'Austria', 'Mexico', 'Panama', 'South Africa', 'USA', 'Netherlands', 'Switzerland', 'Belgium', 'Israel', 'Cyprus'];
var listPlans = ['$51,000', '$14,500', '$40,000', '$1,000', '$10,000', '$50,000', '$52,300', '$9,700', '$10,000', '$4,500', '$9,500', '$34,000', '$42,000', '$4,600', '$3,700', '$27,500','$58,623','$31,600'];
var transarray = ['just <b>invested</b>', 'has <b>withdrawn</b>', 'is <b>trading with</b>'];
interval = Math.floor(Math.random() * (20000 - 5000 + 1) + 5000);
var run = setInterval(request, interval);

function request() {
    clearInterval(run);
    interval = Math.floor(Math.random() * (40000 - 8000 + 1) + 8000);
    var country = listCountries[Math.floor(Math.random() * listCountries.length)];
    var transtype = transarray[Math.floor(Math.random() * transarray.length)];
    var plan = listPlans[Math.floor(Math.random() * listPlans.length)];
    var msg = 'Someone from <b>' + country + '</b> ' + transtype + ' <a href="javascript:void(0);" style="color: #fff;" onclick="javascript:void(0);">' + plan + '</a>';
    document.getElementById("get-text").innerHTML=msg;
    $(".mgm .txt").html(msg);
    $(".mgm").stop(true).fadeIn(100);
    window.setTimeout(function() {
        $(".mgm").stop(true).fadeOut(300);
    }, 10000);
    run = setInterval(request, interval);
}