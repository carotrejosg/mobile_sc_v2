var header=document.getElementById('slogan');
var addEvent = function addEvent(element, eventName, func) {
	if (element.addEventListener) {
    	return element.addEventListener(eventName, func, false);
    } else if (element.attachEvent) {
        return element.attachEvent("on" + eventName, func);
    }
};

addEvent(document.getElementById('open-left'), 'click', function(){    
    if(document.getElementsByTagName('body')[0].className==""){
        snapper.open('left');
    header.style.display = 'block';
    }
    else{
        snapper.close();
        document.getElementsByTagName('body')[0].className="";
        header.style.display = 'none';  
    }
});
addEvent(document.getElementById('wrapper'), 'click', function(){
    if(document.getElementsByTagName('body')[0].className==" snapjs-left"){
    	header.style.display = 'none';
    }
});

/* Prevent Safari opening links when viewing as a Mobile App */
(function (a, b, c) {
    if(c in b && b[c]) {
        var d, e = a.location,
            f = /^(a|html)$/i;
        a.addEventListener("click", function (a) {
            d = a.target;
            while(!f.test(d.nodeName)) d = d.parentNode;
            "href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
        }, !1)
    }
})(document, window.navigator, "standalone");