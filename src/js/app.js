


    coolCatData = {
        coolCats: [
                {
                    name: 'Deniro',
                    clickCount: 0,
                    movies: ['GodFather II','Raging Bull', "GoodFellas", "Taxi Driver"],
                    imgSrc: 'img/deniro.jpg'
                },
                {
                    name: 'Keitel',
                    clickCount: 0,
                    movies: ['Reservoir Dogs','Pulp Fiction'],
                    imgSrc: 'img/keitel.jpg'
                },
                {
                    name: 'Pacino',
                    clickCount: 0,
                    movies: ['GodFather Trilogy','Scarface','Carlito\'s way'],
                    imgSrc: 'img/pacino.jpg'
                }
            ]
    }


var CoolCat = function(data){
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.level = ko.computed(function(){
        var clicks = this.clickCount();
        if(clicks<5){
            return "Friend of Ours"
        }else if(clicks>=5 && clicks<10){
            return "Soldier"
        }else if(clicks>=10 && clicks<20){
            return "Capo"
        }else if(clicks>=20){
            return "Capo di Tutti Capo"
        }; 
    }, this);
    this.imgSrc = ko.observable(data.imgSrc);
    this.movies = ko.observable(data.movies);
}

var ViewModel = function(){
    var self = this;

    this.currentCoolCat = ko.observable(new CoolCat(
        {
            name: 'Pacino',
            clickCount: 0,
            movies: ['GodFather Trilogy','Scarface','Carlito\'s way'],
            imgSrc: 'img/pacino.jpg'
        }
    ));

    this.incrementCounter = function(){
        self.currentCoolCat().clickCount(self.currentCoolCat().clickCount() + 1);
    };

}

ko.applyBindings(new ViewModel());

