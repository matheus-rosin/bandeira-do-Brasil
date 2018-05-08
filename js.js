// https://github.com/matheus-rosin/Dynamic-DOM-Helper
function HTML(){let x=document.createElement(arguments[0],(arguments[2]?{is:arguments[2]}:undefined)),o=arguments[1]||{},s='';if('a'in o)for(let i of Object.keys(o.a))x.setAttribute(i,o.a[i]);if('s'in o){for(let i of Object.keys(o.s))s+=i+':'+o.s[i]+';';x.setAttribute('style',s)}if('e'in o)for(let i of Object.keys(o.e)){let w=Array.isArray(o.e[i]);x.addEventListener(i,(w?o.e[i][0]:o.e[i]),(w?o.e[i][1]:true))}if('m'in o)for(let i of Object.keys(o.m))x[i]=o.m[i];if('c'in o){if(Array.isArray(o.c))for(let i of o.c)i!=null?x.appendChild(i instanceof Node?i:document.createTextNode(i)):null;else o.c!=null?x.appendChild(o.c instanceof Node?o.c:document.createTextNode(o.c)):null}return x}

let Bandeira = document.querySelector('#bandeira')

let Estrela = function(grandeza, uf) {
    return HTML('div', { a: { 'class': `estrela g${grandeza} ${uf}` }, c: ($0 => {
        for (let $1 = 0; $1 < 5; $1++) $0.push(HTML('div'))
        return $0
    })([])})
}

let Estrelas = [
    new Estrela(1, 'PA'),
    new Estrela(1, 'AM'),
    new Estrela(2, 'MS'),
    new Estrela(3, 'AC'),
    new Estrela(1, 'MT'),
    new Estrela(2, 'AP'),
    new Estrela(4, 'RO'),
    new Estrela(2, 'RR'),
    new Estrela(3, 'TO'),
    new Estrela(1, 'GO'),
    new Estrela(2, 'BA'),
    new Estrela(3, 'MG'),
    new Estrela(4, 'ES'),
    new Estrela(1, 'SP'),
    new Estrela(2, 'RJ'),
    new Estrela(1, 'PI'),
    new Estrela(3, 'MA'),
    new Estrela(2, 'CE'),
    new Estrela(2, 'RN'),
    new Estrela(3, 'PB'),
    new Estrela(3, 'PE'),
    new Estrela(2, 'AL'),
    new Estrela(3, 'SE'),
    new Estrela(3, 'SC'),
    new Estrela(2, 'RS'),
    new Estrela(3, 'PR'),
    new Estrela(5, 'DF')
]

Estrelas.forEach($0 => Bandeira.appendChild($0))