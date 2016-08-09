


    coolCatData = {
        coolCats: [
                {coolCatName: 'deniro',
                coolCatCount: 0,
                coolCatImage: 'img/deniro.jpg'},
                {coolCatName: 'Keitel',
                coolCatCount: 0,
                coolCatImage: 'img/keitel.jpg'},
                {coolCatName: 'Pacino',
                coolCatCount: 0,
                coolCatImage: 'img/Pacino.jpg'}
            ]
    }


var CoolCat = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('DeNiro');
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
    this.imgSrc = ko.observable('img/deniro.jpg');
    this.movies = ko.observable(['GodFather II','Raging Bull', "GoodFellas", "Taxi Driver"]);
}

var ViewModel = function(){
    this.currentCoolCat = ko.observable(new CoolCat());
    this.incrementCounter = function(){
        this.currentCoolCat().clickCount(this.currentCoolCat().clickCount() + 1);
    };

}

ko.applyBindings(new ViewModel());

