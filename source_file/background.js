console.log("Background Script!");


chrome.browserAction.onClicked.addListener(butonClicked)

function butonClicked(){
    console.log("You have clicked a button!");
}
