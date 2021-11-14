class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
    this.input2 = createInput("Enter Correct Option No...");
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.message = createElement('h5');
  }
  
  hide(){
     this.title.hide();
     this.input1.hide();
     this.input2.hide();
     this.button.hide();
     this.message.hide();

  
  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);

    this.question.html("question:- what starts and ends with the letters 'E' but has only one letter ? " );
    this.question.position(150,50);
    this.option1.html("1: Everyone" );
    this.option1.position(150,100);
    this.option1.html("2: Envelops" );
    this.option1.position(150,150);
    this.option1.html("3: Estimate" );
    this.option1.position(150,200);
    this.option1.html("4: Example" );
    this.option1.position(150,250);

    this.input1.position(150, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{

    })


  }
}
