const express = require('express')
const nunjuncks = require('nunjucks')
const videos = require('./data')

const server = express()

server.use(express.static('public'))

server.set('view engine', 'njk')

nunjuncks.configure('views', {
    express:server,
    autoescape: false
})

server.get('/', function(req, res){
    const about = {
        avatar:'image/lucas.jpg',
        name:'Lucas Baron',
        role: 'Aluno - <a href="https://rocketseat.com.br/" target="_blanck">Rocketseat</a>',
        description:'Desenvolvedor Web </br>HTML | CSS | Javascript | Node Js',
        links: [
            {name: 'Github', url: "https://github.com/Lucas-Baron"},
            {name: 'Linkedin', url: "https://www.linkedin.com/in/lucas-baron-/"},
            {name: 'Instagram', url: "/"}
        ]
    }

    return res.render('about', { about})
})

server.get('/portifolio', function(req, res){
    return res.render('portifolio', {itens: videos})
})


server.listen(5000, function(){
    console.log('server is running')
})