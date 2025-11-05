const nodes = document.querySelectorAll('#domTree li');
const info = document.getElementById('info');

nodes.forEach(node => {
  node.addEventListener('click', event => {
    info.textContent = `클릭한 노드: ${node.textContent.trim()}`;
    
    nodes.forEach(n => n.style.backgroundColor = '');
    node.style.backgroundColor = '#e0f7fa';

    event.stopPropagation();
  });
});
