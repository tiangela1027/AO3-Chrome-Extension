var line;

function fetchTotals(bound) {
    var temp = $("#main .alphabet li li").get();

    var str, startIdx, endIdx, num;
    var title, titleStartIdx, titleEndIdx; // in between a tags
    for (idx = 0, len = temp.length; idx < len; idx++) {
        str = temp[idx].innerHTML;

        // get number of works
        startIdx = str.lastIndexOf("(");
        endIdx = str.lastIndexOf(")")
        num = Number(str.substring(startIdx + 1, endIdx));

        // get title of work
        titleStartIdx = str.indexOf(">");
        titleEndIdx = str.indexOf("</a>");
        title = str.substring(titleStartIdx + 1, titleEndIdx);

        if (num >= bound) {
            console.log(title + ": " + num);
            line = "<p> " + title + ": " + num + " </p>";
        }
    }
}

chrome.runtime.onConnect.addListener((port) => {
    port.onMessage.addListener((msg) => {
        if (msg.name == 'sendNumber') {
            fetchTotals(msg.number);
        }
    });
});