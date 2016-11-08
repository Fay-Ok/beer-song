function BeerSong() {

    BeerSong.prototype.verse = function (BeerNo) {

        var dictionary = {
            0: 'No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.\n',
            1: '1 bottle of beer on the wall, 1 bottle of beer.\nTake it down and pass it around, no more bottles of beer on the wall.\n',
            2: '2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n'
        };
        var song = BeerNo + ' bottles of beer on the wall, ' + BeerNo + ' bottles of beer.\nTake one down and pass it around, ' + (BeerNo - 1) + ' bottles of beer on the wall.\n';

        if (BeerNo <= 2) {
            return dictionary[BeerNo];
        }
        return song;
    };


    BeerSong.prototype.sing = function (start, end) {

        var beerList = [];
        end = end || 0;
        
        for (var i = start; i >= end; i--) {
            beerList.push(this.verse(i));
        }
        return beerList.join('\n');
    }

};

module.exports = BeerSong;