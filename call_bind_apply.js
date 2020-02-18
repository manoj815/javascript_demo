
//Call() apply() bind()

//All these are the JavaScript methods that are used to alter the context of this keyword in a method. 
//Using these methods changes the reference of this keyword inside a method from Window object to another object.

function func1()
{
  console.log(this);
}

func1();

const user = {"name":"manoj",
              "email":"manojkumar@gmail.com",
             "address":"new delhi"}


function register(hno,pin){
  
  console.log('name',this.name);
  console.log('house no',hno);
  console.log('pin',pin);
}

//register.call(user,'block A','110092');
//register('block A','110092');

//register.apply(user,['block A','110092']);
let newReg  = register.bind(user);
newReg('block A','110092')
