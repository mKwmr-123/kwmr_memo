document.querySelectorAll(".code li").forEach(li=>{
    var txt=li.textContent;
    for (let i = 1; i < 20; i++){
        if(li.classList.contains("ind-" + i.toString())){
            var spc = "";
            for (let j = 0; j < i; j++){
                spc += "&nbsp"
            }
            txt = spc + txt;
        }
    }
    txt=txt.replaceAll("@echo off","\<span class=\"code_bl\"\>@echo off\</span\>");
    txt=txt.replaceAll("echo","\<span class=\"code_bl\"\>echo\</span\>");
    txt=txt.replaceAll("set","\<span class=\"code_bl\"\>set\</span\>");
    txt=txt.replaceAll("if","\<span class=\"code_gr\"\>if\</span\>");
    txt=txt.replaceAll("else","\<span class=\"code_gr\"\>else\</span\>");
    txt=txt.replaceAll("equ","\<span class=\"code_gr\"\>equ\</span\>");
    txt=txt.replaceAll("goto","\<span class=\"code_gr\"\>goto\</span\>");
    txt=txt.replaceAll("mkdir","\<span class=\"code_gr\"\>mkdir\</span\>");
    txt=txt.replaceAll("for","\<span class=\"code_gr\"\>for\</span\>");
    txt=txt.replaceAll("in","\<span class=\"code_gr\"\>in\</span\>");
    txt=txt.replaceAll("do","\<span class=\"code_gr\"\>do\</span\>");
    txt=txt.replaceAll("copy","\<span class=\"code_gr\"\>copy\</span\>");
    txt=txt.replaceAll("exit","\<span class=\"code_bl\"\>exit\</span\>");
    txt=txt.replaceAll("timeout","\<span class=\"code_gr\"\>timeout\</span\>");
    txt=txt.replaceAll("start","\<span class=\"code_gr\"\>start\</span\>");
    txt=txt.replaceAll("subst","\<span class=\"code_gr\"\>subst\</span\>");
    txt=txt.replaceAll("nobreak","\<span class=\"code_yl\"\>nobreak\</span\>");
    txt=txt.replaceAll("nul","\<span class=\"code_yl\"\>nul\</span\>");
    var str=txt.match(/\'\S*\'/g);
    if (str !== null) {
        str.forEach(s => txt=txt.replaceAll(s, "\<span class=\"code_or\"\>" + s + "\</span\>"));
    }
    if (txt.includes("rem")) {
        str=txt.match(/[\S| ]*/g);
        str.forEach(s => txt=txt.replace(s, "\<span class=\"code_gy\"\>" + s + "\</span\>"));
    }
    li.innerHTML=txt;
})