


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
        this.imgSrc = ko.observable('img/deniro.jpg');

        this.incrementCounter = function(){
            this.clickCount(this.clickCount() + 1);
        };

    }

    ko.applyBindings(new ViewModel());

