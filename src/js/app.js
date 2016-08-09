


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


var CoolCats = function(){
    this.clickCount = ko.observable(0);
    this.name = ko.observable('DeNiro');
    var clicks = this.clickCount();
    this.level = ko.computed(function(){
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
}

var ViewModel = function(){
    

    this.incrementCounter = function(){
        this.clickCount(this.clickCount() + 1);
    };

}

ko.applyBindings(new ViewModel());

