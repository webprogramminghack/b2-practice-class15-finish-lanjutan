type Person = {
  name: string;
  age: number;
};

type PersonWithId = Person & { id: string };

const person: PersonWithId = {
  id: 'asdasd',
  name: 'John',
  age: 30,
};

// we can also do this with interface

interface Person {
  name: string;
  age: number;
}

interface PersonWithId extends Person {
  id: string;
}

const person2: PersonWithId = {
  id: 'asdasd',
  name: 'John',
  age: 30,
};

// we can extend multiple interfaces
interface Person {
  name: string;
  age: number;
}

interface PersonWithId {
  id: string;
}

interface PersonWithAddress extends PersonWithId, Person {
  address: string;
}

// we can do it with type too
type PersonWithAddress = PersonWithId & Person & { address: string };

// You can't use primitive types with intersection
type Profile = number & { id: string }; // fails

const profile: Profile = 123;
const profile2: Profile = {id: 'asd'};

// You can't have overlapping types that have incompatible types when using intersection
type Location = { id: string } & { id: number }; // fails

const location: Location = {
  id: 'asdasd',
};

const location2: Location = {
  id: 123,
};

// it's the same with interface
interface PersonLocation {
  id: string;
}

interface PersonInfo extends PersonLocation {
  id: number;
}
