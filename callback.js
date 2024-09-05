function labchutiyapa(name,abc){
    console.log('Hii'+' '+name+' chutiye clg chutiya lab')
    abc()                                                        ///Here abc is a callback function     egFx->
}

function egFx(){
    console.log('Mujhe lab chutiyape se mukti chahiye')
}

labchutiyapa('Oracle',egFx)