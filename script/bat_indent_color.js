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
    li.innerHTML=txt;
})