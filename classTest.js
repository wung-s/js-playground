class A {
  constructor(aa = 30, ab = 33) {
    this.a = aa;
    this.b = ab;
    console.log('class A constructor with: ', aa, ab);
  }

  show() {
    console.log('class A a is: ', this.a);
    console.log('class A b is: ', this.b);
  }
}

class B extends A {
  constructor(ba = 201) {
    super(333,ba);
    // super.show();
    this.a = 'ba';
  }
  show() {
    console.log('class B a is: ', this.a, this.b);
    // console.log('class B b is: ', this.bb);
  }
}

// let obj = new A();
// let obj = new B(11, 12);
// let objB = new B(11);
// objB.show();

// let objA = new A(11);
// objA.show();

let objB = new B(101);
objB.show();





