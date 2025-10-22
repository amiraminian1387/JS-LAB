function changeServerCondition() {
    let pass = 'SERVER IS RUNNING';
    let fail = 'SERVER IS DOWN';
    const p = document.getElementById('condition');
    p.innerHTML = pass;
    p.style.color = 'green'; 
    const btn = document.getElementById('btnCondition');
    btn.style.display = 'none';
}
