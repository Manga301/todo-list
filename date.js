// exports the getDate function
exports.getDate =  function(){    
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    return today.toLocaleString('en-US', options);

};

// this exports the getDay function - function expression style
// module.exports.getDay  
exports.getDay = function(){    
    let today = new Date();
    let options = {
        weekday: 'long'
    };

    return today.toLocaleString('en-US', options);

};