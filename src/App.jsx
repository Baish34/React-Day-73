import React, { useState } from "react";
import "./App.css";

const Article = ({ title, content }) => {
  const [showContent, setShowContent] = useState(false);

  const handleShowContent = () => {
    setShowContent(!showContent);
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleShowContent}>Know More</button>
      {showContent && <p>{content}</p>}
    </div>
  );
};

const About = ({ heading, name, learning }) => {
  const [showLearning, setShowLearning] = useState(false);

  const handleShowLearning = () => {
    setShowLearning(true);
  };

  return (
    <div>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={handleShowLearning}>Know More</button>
      {showLearning && <p>{learning}</p>}
    </div>
  );
};

const UserInfo = ({ username, email, age }) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div>
      {showDetails ? (
        <div>
          <h1>User Information</h1>
          <p>
            <strong>Username: </strong>
            {username}
          </p>
          <p>
            <strong>Email: </strong>
            {email}
          </p>
          <p>
            <strong>Age: </strong>
            {age}
          </p>
        </div>
      ) : (
        <div>
          <h2>User Information</h2>
          <p>
            <strong>Username: </strong>
            {username}
          </p>
          <button onClick={handleShowDetails}>See Profile</button>
        </div>
      )}
    </div>
  );
};

const UserProfile = ({ username, imageUrl, bio, location }) => {
  const [showUserDetails, setShowUserDetails] = useState(false);

  const handleUserShowDetails = () => {
    setShowUserDetails(true);
  };

  return (
    <div>
      {showUserDetails ? (
        <div>
          <h1>User Profile</h1>
          <p>
            <strong>Username: </strong>
            {username}
          </p>
          <p>
            <img src={imageUrl} />
          </p>
          <p>
            <strong>Bio: </strong>
            {bio}
          </p>
          <p>
            <strong>Location: </strong>
            {location}
          </p>
        </div>
      ) : (
        <div>
          <h2>User Profile</h2>
          <p>
            <strong>Username: </strong>
            {username}
          </p>
          <button onClick={handleUserShowDetails}>View Profile</button>
        </div>
      )}
    </div>
  );
};

const ProductDetails = ({ productName, description, price }) => {
  const [showProductDetails, setShowProductDetails] = useState(false);

  const handleProductDetails = () => {
    setShowProductDetails(true);
  };

  return (
    <div>
      {showProductDetails ? (
        <div>
          <h1>Product Details</h1>
          <p>
            <strong>Product Name: </strong>
            {productName}
          </p>
          <p>
            <strong>Description: </strong>
            {description}
          </p>
          <p>
            <strong>Price: </strong>
            {price}
          </p>
        </div>
      ) : (
        <div>
          <h2>Product Details</h2>
          <p>
            <strong>Product Name: </strong>
            {productName}
          </p>
          <button onClick={handleProductDetails}>Show Details</button>
        </div>
      )}
    </div>
  );
};

const App = () => {
  const articleTitle = "React is awesome";
  const articleContent =
    "React is a JavaScript library for building user interfaces.";

  const aboutHeading = "About Me";
  const aboutName = "Preeti";
  const aboutLearning = "I am learning React JS currently at neoG Camp.";

  const userInfo = {
    username: "Baishnawi",
    email: "baishnawi@textmail.com",
    age: 22,
  };

  const userDetails = {
    username: "John Doe",
    imageUrl: "https://via.placeholder.com/200",
    bio: "Frontend Developer",
    location: "New York",
  };

  const productDetails = {
    productName: "Smartphone",
    description: "High-performance smartphone with advanced features.",
    price: "$599.99",
  };

  return (
    <main>
      <Article title={articleTitle} content={articleContent} />
      <hr />
      <About heading={aboutHeading} name={aboutName} learning={aboutLearning} />
      <hr />
      <UserInfo
        username={userInfo.username}
        email={userInfo.email}
        age={userInfo.age}
      />
      <hr />
      <UserProfile
        username={userDetails.username}
        imageUrl={userDetails.imageUrl}
        bio={userDetails.bio}
        location={userDetails.location}
      />
      <hr />
      <ProductDetails
        productName={productDetails.productName}
        description={productDetails.description}
        price={productDetails.price}
      />
    </main>
  );
};

export default App;
