import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonContent } from '@ionic/angular';//importanmos content para controlar el deslizamiento al pie de página

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.page.html',
  styleUrls: ['./chat-bot.page.scss'],
})
export class ChatBotPage implements OnInit {

  @ViewChild(IonContent) content: IonContent;

  firFunction;
  APIFunction ='http://localhost:5000/finalapimusic/us-central1/addMessage';



  user_textToSend: string; //contiene lo qu el usuario escriba
  messageHistory: any[] = []; //aqui se almacenan los objetos con los mensajes que se pintan en pantalla

  constructor(public navCtrl: NavController) { 
    //establecemos la comunicación con la función Firebase
    this.firFunction;
  }

  ngOnInit() {
  }

    //enviar mensaje al agente
    sendMessage() {

      //creamos un objeto con un nuevo mensaje
      let newMessage_user = {
        fromUser: true, //en true es un mensaje del usuario
        text: this.user_textToSend
      }
      this.user_textToSend = ''; //limpiamos la caja de texto en la que el usuario escribe
  
      this.messageHistory.push(newMessage_user); //adiciona lo que el usuario escriba al array de mensajes para que se muestre en pantalla
      this.scrollToBottom();//se desliza hacia el pie de página para que se vea el ultimo mensaje
  
      //hace envia la petición post al agente
      this.firFunction.textRequest(newMessage_user.text).then(response => {
  
          let newMessage_bot = {
            fromUser: false, //en false es un mensaje del agente
            text: response.result.fulfillment.speech //contiene el texto que devuelve el agente
          }
  
          this.messageHistory.push(newMessage_bot); //adiciona lo que el agente escriba al array de mensajes para que se muestre en pantalla
          this.scrollToBottom();//se desliza hacia el pie de página para que se vea el ultimo mensaje
  
        }).catch(error => {
          //algo salió mal
          this.user_textToSend = ''; //limpiamos la caja de texto en la que el usuario escribe
          console.log(error); //se imprime en consola el error
        });
  
    }//fin sendMessage

   //desliza la vista al pie de página
   scrollToBottom() {
    setTimeout(() => {
      this.content.scrollToBottom();
    }, 100);
  }//fin scrollToBottom

}
