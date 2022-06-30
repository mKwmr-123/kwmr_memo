document.querySelectorAll(".tabs li").forEach(tb=>{
    tb.addEventListener("click", ()=>{
        document.querySelectorAll(".tabs li").forEach(t=>t.classList.remove("active"));
        document.querySelectorAll(".contents div").forEach(t=>t.classList.remove("active"));

        tb.classList.add("active");
        document.getElementById(tb.getAttribute("id")+"-cont").classList.add("active");
    });
});