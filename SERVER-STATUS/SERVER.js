function changeServerCondition() {
  const p = document.getElementById('condition');
  const btn = document.getElementById('serverBtn');

  if (p.innerHTML === 'SERVER IS RUNNING') {
    p.innerHTML = 'SERVER IS NOT RUNNING';
    p.style.color = 'red';
    btn.textContent = 'Turn on server';
  } else {
    p.innerHTML = 'SERVER IS RUNNING';
    p.style.color = 'green';
    btn.textContent = 'Turn off server';
  }
}
