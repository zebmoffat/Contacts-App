import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <ContactsList />
    </>
  );
}

export default App;



function ContactsList() {
  const [contactsArray, setContactsArray] = useState(JSON.parse(localStorage.getItem('contactsArray')) || []);
  const [demoUsed, setDemoUsed] = useState(false);
  const [alphabetically, setAlphabetically] = useState(true);

  return (
    <>
      <Header />
      <SubmissionForm handleSubmit={handleSubmit}/>
      <AddButtons />
      <AllContacts contactsArray={contactsArray} />
    </>
  );

  function clearContacts() {
    setContactsArray([]);
    localStorage.setItem('contactsArray', null);
  }

  function handleSubmit(e) {
    e.preventDefault();

    const name = e.target.elements.name.value;
    const phoneNumber = e.target.elements.phoneNumber.value;
    const email = e.target.elements.email.value;
    const additionalInfo = e.target.elements.additionalInfo.value;

    let newArray = contactsArray.slice();
    newArray.push({
      name: name,
      phoneNumber: phoneNumber,
      email: email,
      additionalInfo: additionalInfo,
    });

    setContactsArray(newArray);
    localStorage.setItem('contactsArray', JSON.stringify(newArray));
    e.target.reset();
  }

  function SubmissionForm({ handleSubmit }) {
    return (
      <div className="form">
        <form onSubmit={handleSubmit}>
          <h2>Add Contact</h2>
          <p>Name:</p>
          <input name="name" required></input>
          <p>Phone Number:</p>
          <input name="phoneNumber" required></input>
          <p>Email:</p>
          <input name="email" required></input>
          <p>Additional Information:</p>
          <input name="additionalInfo" required></input>
          <button type="submit" className="submitButton">
            Submit
          </button>
        </form>
      </div>
    );
  }

  function Contact({ object }) {
    return (
      <div className="fullContact">
        <div className="nameAndPic">
          <img src="images/contactIcon.png" className="contactImage" />
          <h3>{object.name}</h3>
        </div>
        <p>Phone number: {object.phoneNumber}</p>
        <p>Email: {object.email}</p>
        <p>Additional info:</p>
        <p>{object.additionalInfo}</p>
      </div>
    );
  }

  function demoContacts() {
    console.log("clicked");

    if (!demoUsed) {
      let newArray = contactsArray.slice();
      newArray.push({
        name: "Robert Smith",
        phoneNumber: "(520) 965-8745",
        email: "robertksmith@hotmail.com",
        additionalInfo:
          "My boss at my job. This is his work phone number.",
      });
      newArray.push({
        name: "Cousin Johnny",
        phoneNumber: "(466) 423-7595",
        email: "johnnydavid@yahoo.com",
        additionalInfo: "My older cousin, Johnny.",
      });
      newArray.push({
        name: "Mary Ann",
        phoneNumber: "(268) 765-4835",
        email: "mary12ann65@gmail.com",
        additionalInfo: "Mary, my physics lab group member.",
      });
      newArray.push({
        name: "Tyler Jones",
        phoneNumber: "(456) 327-9865",
        email: "tjjoness@gmail.com",
        additionalInfo: "My good friend from high school.",
      });
      newArray.push({
        name: "Ann Minnich",
        phoneNumber: "(130) 765-8445",
        email: "annminni44@gmail.com",
        additionalInfo: "My sister Ann. This is her personal phone number and email, not her work number and email.",
      });
      newArray.push({
        name: "Ann Minnich (Work)",
        phoneNumber: "(130) 992-1128",
        email: "annminnich@asu.edu",
        additionalInfo: "My sister Ann. This is her work information.",
      });
      newArray.push({
        name: "Zachary Johnson",
        phoneNumber: "(530) 332-6784",
        email: "zjohnson9@gmail.com",
        additionalInfo: "Zach from Calculus 2.",
      });
      newArray.push({
        name: "Zeb Moffat",
        phoneNumber: "(999) 999-9999",
        email: "zmoff99@hotmail.com",
        additionalInfo: "The creator of this React App. @zebmoffat on GitHub. Real information on resume.",
      });
      newArray.push({
        name: "Jackson Hufault",
        phoneNumber: "(520) 324-1252",
        email: "jackhfault@yahoo.com",
        additionalInfo: "My friend I made at the club meeting at school. Loves Python and C++.",
      });
      newArray.push({
        name: "Grandpa Roshi",
        phoneNumber: "(182) 429-4455",
        email: "annminni@gmail.com",
        additionalInfo: "Grandfather Roshi, he has taught me so much.",
      });
      newArray.push({
        name: "Bethany Benson",
        phoneNumber: "(222) 177-3625",
        email: "bbensonb@benson.com",
        additionalInfo: "Bethany Benson from down the street. Owns a flower business.",
      });
      newArray.push({
        name: "Chili's",
        phoneNumber: "(520) 219-5479",
        email: "N/A",
        additionalInfo: "My Chili's speed dial to order food for pickup quickly.",
      });
      newArray.push({
        name: "Lisa Peta",
        phoneNumber: "(412) 697-3245",
        email: "lisap555@gmail.com",
        additionalInfo: "Lisa from my French class. We are partners for the entirety of the class projects.",
      });
      newArray.push({
        name: "Sage Neal",
        phoneNumber: "(923) 755-1362",
        email: "nealsage3@gmail.com",
        additionalInfo: "Sage from my software engineering classes. Really great friend.",
      });

      setContactsArray(newArray);
      localStorage.setItem('contactsArray', JSON.stringify(newArray));
      setDemoUsed(true);
    }
  }

  function AddButtons() {
    return (
      <div className="addButtons">
        <button
          className="addButton"
          onClick={() => clearContacts()}
        >
          clear contacts
        </button>
        <button className="addButton" onClick={() => demoContacts()}>
          demo contacts
        </button>
      </div>
    );
  }

  function alphabetize() {
    if (alphabetically) {
      const sortedArray = [...contactsArray].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return nameA.localeCompare(nameB);
      });
      setContactsArray(sortedArray);
      setAlphabetically(false);
      localStorage.setItem('contactsArray', JSON.stringify(sortedArray));
    } else {
      const sortedArray = [...contactsArray].sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        return nameB.localeCompare(nameA);
      });
      setContactsArray(sortedArray);
      setAlphabetically(true);
      localStorage.setItem('contactsArray', JSON.stringify(sortedArray));
    }
  }

  function Header() {
    return (
      <>
        <header>
          <button
            className="left"
            onClick={() => {
              alphabetize();
            }}
          >
            Sort Contacts
          </button>
          <div className="logo">
            <img src="images/phoneBook.png" className="phoneBook" />
            <h1>Contacts Book</h1>
          </div>
        </header>
        <div className="spacer"></div>
      </>
    );
  }

  function AllContacts({ contactsArray }) {
    return (
      <div className="rightSpace">
        <div className="contactsContainer">
          {contactsArray.map((object, index) => (
            <Contact key={index} object={object} />
          ))}
        </div>
      </div>
    );
  }
}