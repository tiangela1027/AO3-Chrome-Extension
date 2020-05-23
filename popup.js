let submit = document.getElementById('submit');
let input = document.getElementById('boundInput');
let success = document.getElementById('success');

submit.onclick = connect;

function connect() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        const port = chrome.tabs.connect(tabs[0].id);
        port.postMessage({ name: 'sendNumber', number: input.value });
        success.innerHTML = "<p><strong>Success!</strong><br>Ctrl-Shift-C to view summary.</p>";
    });
}