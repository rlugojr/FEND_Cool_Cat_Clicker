
var coolCatData =  [
                {
                    name: 'De Niro',
                    clickCount: 0,
                    movies: ['GodFather II','Raging Bull', "GoodFellas", "Taxi Driver"],
                    imgSrc: 'img/deniro.jpg'
                },
                {
                    name: 'Keitel',
                    clickCount: 0,
                    movies: ['Reservoir Dogs','Pulp Fiction','Mean Streets'],
                    imgSrc: 'img/keitel.jpg'
                },
                {
                    name: 'Oldman',
                    clickCount: 0,
                    movies: ['Dracula','True Romance','Rozencrantz and Guildenstern are dead', 'Nolan\'s Batman Trilogy'],
                    imgSrc: 'img/oldman.jpg'
                },
                {
                    name: 'Pacino',
                    clickCount: 0,
                    movies: ['GodFather Trilogy','Scarface','Carlito\'s way'],
                    imgSrc: 'img/pacino.jpg'
                },
                {
                    name: 'Walken',
                    clickCount: 0,
                    movies: ['True Romance','The Deerhunter','The King of NY'],
                    imgSrc: 'img/walken.jpg'
                }
            ]


var CoolCat = function(data){
    this.clickCount = ko.observable(data.clickCount);
    this.name = ko.observable(data.name);
    this.level = ko.computed(function(){
        var clicks = Math.floor(this.clickCount()/5);
        switch(clicks){
            case 0:
                return "Street Thug"
            case 1:
                return "Friend of Ours";
            case 2:
                return "Soldier";
            case 3:
                return "Capo";
            case 4:
            default:
                return "Capo di Tutti Capo";
        }; 
    }, this);
    this.imgSrc = ko.observable(data.imgSrc);
    this.movies = ko.observable(data.movies);
}

var ViewModel = function(){
    var self = this;

    this.coolCatList = ko.observableArray([]);

    coolCatData.forEach(function(coolCatItem){
        self.coolCatList.push(new CoolCat(coolCatItem));
    });

    this.currentCoolCat = ko.observable(this.coolCatList()[0]);

    this.incrementCounter = function(){
        self.currentCoolCat().clickCount(self.currentCoolCat().clickCount() + 1);
    };

    this.swapCat = function(clickedCoolCat){
        self.currentCoolCat(clickedCoolCat)
    };

}

ko.applyBindings(new ViewModel());

