// components/Podcasts.js
import React, { useEffect,useState  } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { setPodcasts } from "../slices/podcastSlice";
import { db } from "../firebase";
import { collection, query, onSnapshot } from "firebase/firestore";
import Header from "../components/Header";
import PodcastCard from "../components/PodcastCard";
import InputComponent from "../components/Input";
function Podcasts() {
  const podcasts = useSelector((state) => state.podcast.podcasts);
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "podcasts")),
      (querySnapshot) => {
        const podcastsData = [];
        querySnapshot.forEach((doc) => {
          podcastsData.push({ id: doc.id, ...doc.data() });
        });
        dispatch(setPodcasts(podcastsData));
      },
      (error) => {
        console.error("Error fetching podcasts:", error);
      }
    );

    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  var filteredPodcasts = podcasts.filter((item) =>
    item.title.trim().toLowerCase().includes(search.trim().toLowerCase())
  );
  return (
    <div>
      <Header />
      <div className="wrapper">
        <h1>Discover Podcasts</h1>
        <InputComponent
          state={search}
          setState={setSearch}
          placeholder="Search By Title"
          type="text"
        />
        {filteredPodcasts.length > 0 ?(
        <div className="podcast-flex">
          {filteredPodcasts.map((item) => {
  return (
    <PodcastCard
      key={item.id}
      id={item.id}
      title={item.title}
      displayImage={item.displayImage}
    />
  );
})}
        </div>
        ):(
          <p>{search ? "Podcast Not Found" : "No Podcasts On The Platform"}</p>
        )}
      </div>
    </div>
  );
}

export default Podcasts;
