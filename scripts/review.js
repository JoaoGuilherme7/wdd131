
const $ = selector => document.querySelector(selector);
$('#reviewCount').textContent = localStorage.getItem('count') || 0;
