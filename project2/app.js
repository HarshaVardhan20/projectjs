let data = [
    {
        name:'harsha',
        age : '20'
    },
    {
        name:'vishnu',
        age: '10'
    },
    {
        name:'ajay',
        age:'42'
    },
    {
        name:'manoj',
        age:'38'
    },
    {
        name:'srinu',
        age:'43'
    },
    {
        name:'harish',
        age:'45'
    } 
];
const info = document.querySelector('#info');
let details = data.map(function(item){
    return     '<div>' + item.name + '   ' + item.age + '</div>'
});
info.innerHTML = details.join('\n');
