import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'password-generator';
  password = '';
  includeLetter = false;
  includeNumber = false;
  includeSymbols = false;
  length = 0;


  onClickGenerate(){
    
    let numbers = "1234567890";
    let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let symbols = "!@#$%^&*()";
    let validChars = "";

    if(this.includeNumber){
      validChars += numbers;
    }
    if(this.includeLetter){
      validChars += letters;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }
    
    let generatedPassword = "";
    for(let i=0; i< this.length; i++){
      let index = Math.floor(Math.random() * validChars.length);
      generatedPassword += validChars[index];
    }
    
    this.password = generatedPassword;

  }

  onChangeLength(event:Event){
    
    let target = event.target as HTMLInputElement; 
    const parsedValue = parseInt(target.value);

    if(!isNaN(parsedValue)){
      this.length = parsedValue;
    }
    
  }

  onChangeLetter(){
    this.includeLetter = !this.includeLetter;
  }
  
  onChangeNumber(){
    this.includeNumber = !this.includeNumber;
  }

  onChangeSymbol(){
    this.includeSymbols = !this.includeSymbols;
  }
}
