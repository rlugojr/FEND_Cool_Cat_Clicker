


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


    var ViewModel = function(){
        this.clickCount = ko.observable(0);
        this.name = ko.observable('DeNiro');
        this.level = ko.computed(function(){
            if(this.clickCount()<2){
                return "Friend of Ours"
            }else if(this.clickCount()>=3 && this.clickCount()<5){
                return "Soldier"
            }else if(this.clickCount()>=5 && this.clickCount()<10){
                return "Capo"
            }else if(this.clickCount()>=10){
                return "Capo di Tutti Capo"
            }; 
        }, this);
        this.imgSrc = ko.observable('img/deniro.jpg');

        this.incrementCounter = function(){
            this.clickCount(this.clickCount() + 1);
        };

    }

    ko.applyBindings(new ViewModel());

