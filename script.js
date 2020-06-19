// ajouter une nouvelle monnaie
var addMoney = (img, name, rate) => {
    var $mainContainer = $('#main_container');
    var $newDiv = $('<div class="crypto_container"></div>');
    var $newImg = $('<img src="" alt="" class="picto-crypto"/>');
    var $newName = $('<h6>Titre</h6>');
    var $newDivider = $('<div class="divider"></div>');
    var $newRate = $('<p>0$</p>');
    $newImg.attr('src',img);
    $newName.text(name);
    $newRate.text(rate)
    $newDiv.append($newImg).append($newName).append($newDivider).append($newRate);
    $mainContainer.append($newDiv);  
}

// mettre à jour le compteur
const updateCounter = () => {
    var $counterSpan = $('#counter');
    var $sSpan = $('#s');
    var $cryptoDiv = $('#main_container > .crypto_container');
    $counterSpan.text($cryptoDiv.length);
    if ($cryptoDiv.length > 1) {
        $sSpan.text('s')
    }
}

addMoney('images/ripple.png', 'Ripple', '0,20€');
addMoney('images/litecoin.png', 'Litecoin', '39,90€');
updateCounter();