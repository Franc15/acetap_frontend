import HeaderItem from "./HeaderItem";
import LinkItem from "./Item";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Profile =() => {
    const { id } = useParams();

    console.log(id);

  function getLinks() {
    fetch(`http://localhost:5000/links/${id}`)
    .then(response => response.json())
    .then(data => {
      setLinks(data.links);
      console.log(data.links);
    }
    )
  }

  function getUser() {
    fetch(`http://localhost:5000/users/${id}`)
    .then(response => response.json())
    .then(data => {
        setUser(data.user);
        // console.log(user);
    }
    )
}

  useEffect(() => {
    getUser();
    getLinks();
    // console.log(links);
  }, []);


  const [links, setLinks] = useState([]);
  const [user, setUser] = useState([]);

    return (
        <div className="w-full px-6 md:px-96">
            <HeaderItem user={user}/>
            <LinkItem links={links}/>
        </div>
    );
}

export default Profile;