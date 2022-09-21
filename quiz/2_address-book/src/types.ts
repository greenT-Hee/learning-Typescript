interface PhoneNumberDictionary {
    [phone: string]: {
      num: number;
    };
  }
  
interface Contact {
    name: string;
    address: string;
    phones: PhoneNumberDictionary; // 인터페이스 안의 인터페이스
  }
  
enum PhoneType {
    Home ='home',
    Office = 'office',
    studio = 'studio'
  }
  

  export {
    Contact, 
    PhoneType
  }