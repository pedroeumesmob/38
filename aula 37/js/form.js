class Form{
    constructor(){
        this.title = createElement('h2');
        this.input = createInput("Nome");
        this.button = createButton('Entrar');
        this.msg = createElement('h4');
    }
    hide(){
        this.button.hide();
        this.input.hide();
        this.msg.hide();
    }
    display(playerCount){
        this.title.html("j é um bom nome");
        this.title.position(displayWidth/2-50,0);
        this.input.position(displayWidth/2-70,displayHeight/2-80);
        
        
        this.button.position(displayWidth/2+30,displayHeight/2);

        this.msg.position(displayWidth/2-70,displayHeight/4);

        this.button.mousePressed(()=> {
            this.input.hide();
            this.button.hide();

            player.name = this.input.value();
            playerCount +=1;
            player.index = playerCount
            player.update();
            player.updateCount(playerCount);
            this.msg.html("bom dia, o sol ja nasceu la na fazendinha! "+player.name)
        })
    }
}