const person1 = {
    firstName: 'Ayush',
    lastName: 'Panda',
};

const person2 = {
    fullName: function(city, country) {
        console.log(`${this.firstName} ${this.lastName}, ${city}, ${country}`);
    }
};

person2.fullName.call(person1, 'New Delhi', 'India');
person2.fullName.apply(person1, ['New Delhi', 'India']);


const bound=person2.fullName.bind(person1);
bound('New Delhi','India')
bound('London','UK')



