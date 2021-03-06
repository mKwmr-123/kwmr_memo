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
    txt=txt.replaceAll("SELECT","\<span class=\"code_bl\"\>SELECT\</span\>");
    txt=txt.replaceAll("FROM","\<span class=\"code_bl\"\>FROM\</span\>");
    txt=txt.replaceAll("WHERE","\<span class=\"code_bl\"\>WHERE\</span\>");
    txt=txt.replaceAll("GROUP BY","\<span class=\"code_bl\"\>GROUP BY\</span\>");
    txt=txt.replaceAll("ORDER BY","\<span class=\"code_bl\"\>ORDER BY\</span\>");
    txt=txt.replaceAll("MAX","\<span class=\"code_gr\"\>MAX\</span\>");
    txt=txt.replaceAll("CASE","\<span class=\"code_gr\"\>CASE\</span\>");
    txt=txt.replaceAll("WHEN","\<span class=\"code_gr\"\>WHEN\</span\>");
    txt=txt.replaceAll("ELSE","\<span class=\"code_gr\"\>ELSE\</span\>");
    txt=txt.replaceAll("THEN","\<span class=\"code_gr\"\>THEN\</span\>");
    txt=txt.replaceAll("END","\<span class=\"code_gr\"\>END\</span\>");
    txt=txt.replaceAll("SUBSTR","\<span class=\"code_gr\"\>SUBSTR\</span\>");
    txt=txt.replaceAll("SUM","\<span class=\"code_gr\"\>SUM\</span\>");
    txt=txt.replaceAll("OVER","\<span class=\"code_gr\"\>OVER\</span\>");
    txt=txt.replaceAll("PARTITION BY","\<span class=\"code_gr\"\>PARTITION BY\</span\>");
    txt=txt.replaceAll("ROW_NUMBER","\<span class=\"code_gr\"\>ROW_NUMBER\</span\>");
    txt=txt.replace(/\bAS/,"\<span class=\"code_rd\"\>AS\</span\>");
    var str=txt.match(/\'\S*\'/g);
    if (str !== null) {
        str.forEach(s => txt=txt.replaceAll(s, "\<span class=\"code_or\"\>" + s + "\</span\>"));
    }
    li.innerHTML=txt;
})