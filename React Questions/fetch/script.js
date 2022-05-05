const url = "https://jsonplaceholder.typicode.com/users/1";
/** 
  // Sample Response
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org"
  }
**/
/** 
  Challenge: Given the url above, make this app fetch the data and display them in the browser (Do it with fetch api)
  
**/
function App() {
  const [userData, setUserData] = React.useState({});

   const getData = async () => {
     const response = await fetch(url)
     const data = await response.json()
     setUserData(data)
   }
   
   React.useEffect(() => {
     getData()
   }, [userData])
 
  
  return (
    <div className="App">
      <h2>User Data</h2>
      <p>
        <strong>Name: </strong>{" "}
        {userData.name || "(Need to populate name here)"}
      </p>
      <p>
        <strong>Website: </strong>
        {userData.website || "(Need to populate website here)"}
      </p>
      <p>
        <strong>Email: </strong>
        {userData.email || "(Need to populate email here)"}
      </p>
      <p>
        <strong>Phone: </strong>
        {userData.phone || "(Need to populate phone here)"}
      </p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
