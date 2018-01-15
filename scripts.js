$(document).ready(function() {
    function createH3(check) {

        var names = ["Hayley", "Evan", "Scott", "Connor", "Adam"];
        var locations = ["boilerroom", "parlour", "billardsroom", "garden", "foyer", "kitchen","dining room", "Conservatory", "library", "ballroom"];
        var weapons = ["candlestick", "rope", "revolver", "knife", "lead pipe", "wrench", "bomb", "axe", "mind explosion powers", "general distaste", "fancy outfit", "killer looks", "pokemon", "amazing new talent", "locomotive", "boom stick", "high-level spell list", "... well... nothing actually", "college thesis", "hatred for socks and sandals"];
        var sentenceArray = [];
        function chooseItem(whichArray) {
            if (whichArray === "names") {
                return (Math.floor(Math.random() * names.length));
            } else if (whichArray === "locations") {
                return (Math.floor(Math.random() * locations.length));
            } else {
                return (Math.floor(Math.random() * weapons.length));
            }
        };

        for(var i = 1; i < 101; i++) {
            var sentence = (`Accusation ${i}: I accuse ${names[chooseItem('names')]}, with the ${weapons[chooseItem('weapons')]} in the ${locations[chooseItem('locations')]}!`);
            $('#main').append(`<h3 id='${i}'>Accusation #${i}</h3>`)
            $(`#${i}`).append((`<p id="${i}">${sentence}</p>`))
            sentenceArray.push(sentence);
            $(`h3#${i}`).click(function(event) {
                alert(sentenceArray[Number(event.target.id) - 1]);
            })
        }
    };
    
    createH3();

});