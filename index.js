import { sayHello } from 'npm_test-package-app';
import { sayGoodBye } from 'npm_test-package-app/common';

function testApp(){
    console.log(sayHello({name: 'Eugene'}))
    console.log(sayGoodBye({name: 'Kuria'}))
}

testApp()

export default testApp
